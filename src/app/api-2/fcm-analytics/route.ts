import { NextRequest, NextResponse } from "next/server";
import Redis from "ioredis";

// Initialize Redis client
const redis = new Redis({
  host:
    process.env.REDIS_HOST ||
    "redis-11580.c321.us-east-1-2.ec2.redns.redis-cloud.com",
  port: parseInt(process.env.REDIS_PORT || "11580"),
  username: process.env.REDIS_USERNAME || "default",
  password: process.env.REDIS_PASSWORD || "EHDLO3zgmyJUosdi3ButZiuevGR2UImv",
  retryStrategy: (times) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
});

interface NotificationClick {
  sessionId: string;
  notificationId: string;
  title: string;
  url: string;
  clickedAt: string;
  userAgent?: string;
}

interface NotificationSent {
  notificationId: string;
  title: string;
  body: string;
  url?: string;
  sentAt: string;
  targetType: "all" | "single" | "session";
  targetCount: number;
  successCount: number;
  failureCount: number;
}

// POST - Track notification click or record sent notification
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, data } = body;

    switch (action) {
      case "trackClick": {
        // Track notification click
        const clickedAt = new Date().toISOString();
        const clickData: NotificationClick = {
          sessionId: data.sessionId,
          notificationId: data.notificationId || `notif_${Date.now()}`,
          title: data.title,
          url: data.url,
          clickedAt,
          userAgent: data.userAgent,
        };

        // Store click in Redis list
        const clicksKey = "fcm:notification:clicks";
        await redis.lpush(clicksKey, JSON.stringify(clickData));

        // Keep only last 1000 clicks
        await redis.ltrim(clicksKey, 0, 999);

        // Update user's click count
        if (data.sessionId) {
          const userClicksKey = `fcm:user:clicks:${data.sessionId}`;
          await redis.incr(userClicksKey);
          await redis.expire(userClicksKey, 60 * 60 * 24 * 30); // 30 days

          // Track last click timestamp for conversion attribution
          const lastClickKey = `fcm:user:lastClick:${data.sessionId}`;
          await redis.set(lastClickKey, clickedAt, "EX", 60 * 60 * 24 * 30); // 30 days
        }

        // Track daily clicks
        const today = new Date().toISOString().split("T")[0];
        const dailyClicksKey = `fcm:daily:clicks:${today}`;
        await redis.incr(dailyClicksKey);
        await redis.expire(dailyClicksKey, 60 * 60 * 24 * 90); // 90 days

        return NextResponse.json({
          success: true,
          message: "Click tracked successfully",
        });
      }

      case "recordNotification": {
        // Record sent notification for analytics
        const notifData: NotificationSent = {
          notificationId: data.notificationId || `notif_${Date.now()}`,
          title: data.title,
          body: data.body,
          url: data.url,
          sentAt: new Date().toISOString(),
          targetType: data.targetType || "single",
          targetCount: data.targetCount || 1,
          successCount: data.successCount || 0,
          failureCount: data.failureCount || 0,
        };

        // Store notification in Redis list
        const notifsKey = "fcm:notifications:sent";
        await redis.lpush(notifsKey, JSON.stringify(notifData));

        // Keep only last 500 notifications
        await redis.ltrim(notifsKey, 0, 499);

        // Track daily notifications
        const today = new Date().toISOString().split("T")[0];
        const dailyNotifsKey = `fcm:daily:notifications:${today}`;
        await redis.incr(dailyNotifsKey);
        await redis.expire(dailyNotifsKey, 60 * 60 * 24 * 90); // 90 days

        return NextResponse.json({
          success: true,
          message: "Notification recorded successfully",
        });
      }

      case "trackOrderCompleted": {
        // Track when a user completes an order
        const conversionWindowMs = 1000 * 60 * 60 * 4; // 4 hours
        let isConversion = data.fromNotification || false;

        // If conversion flag not provided, infer from last click timestamp
        if (!isConversion && data.sessionId) {
          const lastClickKey = `fcm:user:lastClick:${data.sessionId}`;
          const lastClick = await redis.get(lastClickKey);
          if (lastClick) {
            const lastClickTime = new Date(lastClick).getTime();
            if (!isNaN(lastClickTime)) {
              if (Date.now() - lastClickTime <= conversionWindowMs) {
                isConversion = true;
              }
            }
          }
        }

        const orderData = {
          sessionId: data.sessionId,
          orderNumber: data.orderNumber,
          total: data.total,
          completedAt: new Date().toISOString(),
          fromNotification: isConversion,
        };

        // Store in Redis list
        const ordersKey = "fcm:orders:completed";
        await redis.lpush(ordersKey, JSON.stringify(orderData));
        await redis.ltrim(ordersKey, 0, 999);

        // Track daily orders
        const today = new Date().toISOString().split("T")[0];
        const dailyOrdersKey = `fcm:daily:orders:${today}`;
        await redis.incr(dailyOrdersKey);
        await redis.expire(dailyOrdersKey, 60 * 60 * 24 * 90);

        // If from notification, track conversion
        if (isConversion) {
          const conversionsKey = `fcm:daily:conversions:${today}`;
          await redis.incr(conversionsKey);
          await redis.expire(conversionsKey, 60 * 60 * 24 * 90);
        }

        return NextResponse.json({
          success: true,
          message: "Order completion tracked",
        });
      }

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (error: any) {
    console.error("FCM Analytics POST Error:", error);
    return NextResponse.json(
      { error: "Failed to track analytics", details: error.message },
      { status: 500 }
    );
  }
}

// GET - Get analytics data
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");
    const days = parseInt(searchParams.get("days") || "7");

    switch (type) {
      case "summary": {
        // Get summary analytics
        const today = new Date();
        const stats: {
          totalClicks: number;
          totalNotifications: number;
          totalOrders: number;
          totalConversions: number;
          dailyStats: Array<{
            date: string;
            clicks: number;
            notifications: number;
            orders: number;
            conversions: number;
          }>;
        } = {
          totalClicks: 0,
          totalNotifications: 0,
          totalOrders: 0,
          totalConversions: 0,
          dailyStats: [],
        };

        // Get stats for last N days
        for (let i = 0; i < days; i++) {
          const date = new Date(today);
          date.setDate(date.getDate() - i);
          const dateStr = date.toISOString().split("T")[0];

          const [clicks, notifications, orders, conversions] =
            await Promise.all([
              redis.get(`fcm:daily:clicks:${dateStr}`),
              redis.get(`fcm:daily:notifications:${dateStr}`),
              redis.get(`fcm:daily:orders:${dateStr}`),
              redis.get(`fcm:daily:conversions:${dateStr}`),
            ]);

          const dayStats = {
            date: dateStr,
            clicks: parseInt(clicks || "0"),
            notifications: parseInt(notifications || "0"),
            orders: parseInt(orders || "0"),
            conversions: parseInt(conversions || "0"),
          };

          stats.dailyStats.push(dayStats);
          stats.totalClicks += dayStats.clicks;
          stats.totalNotifications += dayStats.notifications;
          stats.totalOrders += dayStats.orders;
          stats.totalConversions += dayStats.conversions;
        }

        // Also count orders from fcm:orders:completed list (more accurate)
        const ordersKey = "fcm:orders:completed";
        const allOrders = await redis.lrange(ordersKey, 0, 999);
        const ordersByDate: Record<string, number> = {};
        const conversionsByDate: Record<string, number> = {};

        allOrders.forEach((orderStr) => {
          try {
            const order = JSON.parse(orderStr);
            const orderDate = order.completedAt || order.timestamp;
            if (orderDate) {
              const dateStr = new Date(orderDate).toISOString().split("T")[0];
              ordersByDate[dateStr] = (ordersByDate[dateStr] || 0) + 1;
              if (order.fromNotification) {
                conversionsByDate[dateStr] =
                  (conversionsByDate[dateStr] || 0) + 1;
              }
            }
          } catch (e) {
            // Skip invalid entries
          }
        });

        // Also count historical orders from newusers array (for orders completed before tracking was added)
        const usersKeyForOrders = "newusers";
        const usersDataForOrders = await redis.get(usersKeyForOrders);
        if (usersDataForOrders) {
          const usersArrayForOrders = JSON.parse(usersDataForOrders);
          const completedOrders = usersArrayForOrders.filter(
            (user: any) => user.isOrderCreatedInBackend === true
          );

          completedOrders.forEach((user: any) => {
            // Try to get order date from user data
            const orderDate =
              user.orderDate || user.updatedAt || user.timestamp;
            if (orderDate) {
              try {
                const dateStr = new Date(orderDate).toISOString().split("T")[0];
                // Only count if within the date range we're looking at
                const dateInRange = stats.dailyStats.some(
                  (stat) => stat.date === dateStr
                );
                if (dateInRange) {
                  ordersByDate[dateStr] = (ordersByDate[dateStr] || 0) + 1;
                }
              } catch (e) {
                // Skip invalid dates
              }
            }
          });
        }

        // Add orders from the list to daily stats (use the higher count)
        stats.dailyStats.forEach((dayStat) => {
          const additionalOrders = ordersByDate[dayStat.date] || 0;
          if (additionalOrders > dayStat.orders) {
            dayStat.orders = additionalOrders;
          }

          const additionalConversions = conversionsByDate[dayStat.date] || 0;
          if (additionalConversions > dayStat.conversions) {
            dayStat.conversions = additionalConversions;
          }
        });

        // Recalculate totals after adjustments
        stats.totalOrders = stats.dailyStats.reduce(
          (sum, day) => sum + day.orders,
          0
        );
        stats.totalConversions = stats.dailyStats.reduce(
          (sum, day) => sum + day.conversions,
          0
        );

        // Get total FCM users
        const usersKey = "newusers";
        const existingData = await redis.get(usersKey);
        const usersArray = existingData ? JSON.parse(existingData) : [];
        const usersWithTokens = usersArray.filter((user: any) => user.fcmToken);
        const usersWithCarts = usersArray.filter(
          (user: any) => user.cartItems && user.cartItems.length > 0
        );
        const usersWithOrders = usersArray.filter(
          (user: any) => user.isOrderCreatedInBackend === true
        );

        return NextResponse.json({
          success: true,
          stats: {
            ...stats,
            totalFCMUsers: usersWithTokens.length,
            totalUsersWithCarts: usersWithCarts.length,
            totalUsersWithOrders: usersWithOrders.length,
            conversionRate:
              stats.totalClicks > 0
                ? ((stats.totalConversions / stats.totalClicks) * 100).toFixed(
                    2
                  )
                : "0.00",
          },
        });
      }

      case "clicks": {
        // Get recent clicks
        const clicksKey = "fcm:notification:clicks";
        const clicks = await redis.lrange(clicksKey, 0, 99);
        return NextResponse.json({
          success: true,
          clicks: clicks.map((c) => JSON.parse(c)),
          count: clicks.length,
        });
      }

      case "notifications": {
        // Get recent sent notifications
        const notifsKey = "fcm:notifications:sent";
        const notifications = await redis.lrange(notifsKey, 0, 99);
        return NextResponse.json({
          success: true,
          notifications: notifications.map((n) => JSON.parse(n)),
          count: notifications.length,
        });
      }

      case "orders": {
        // Get recent completed orders
        const ordersKey = "fcm:orders:completed";
        const orders = await redis.lrange(ordersKey, 0, 99);
        return NextResponse.json({
          success: true,
          orders: orders.map((o) => JSON.parse(o)),
          count: orders.length,
        });
      }

      case "usersWithCarts": {
        // Get all users with items in cart (for abandoned cart notifications)
        const usersKey = "newusers";
        const existingData = await redis.get(usersKey);

        if (!existingData) {
          return NextResponse.json({ users: [], count: 0 });
        }

        const usersArray = JSON.parse(existingData);

        // Filter users with cart items and FCM tokens
        const usersWithCarts = usersArray.filter((user: any) => {
          return (
            user.fcmToken &&
            user.cartItems &&
            user.cartItems.length > 0 &&
            !user.isOrderCreatedInBackend
          );
        });

        // Enrich with FCM token data
        const enrichedUsers = await Promise.all(
          usersWithCarts.map(async (user: any) => {
            if (user.sessionId) {
              const tokenKey = `fcm:token:${user.sessionId}`;
              const tokenData = await redis.get(tokenKey);
              if (tokenData) {
                const parsed = JSON.parse(tokenData);
                return {
                  ...user,
                  timestamp:
                    user.timestamp || parsed.timestamp || parsed.updatedAt,
                  url: user.url || parsed.url,
                  userAgent: user.userAgent || parsed.userAgent,
                };
              }
            }
            return user;
          })
        );

        return NextResponse.json({
          success: true,
          users: enrichedUsers,
          count: enrichedUsers.length,
        });
      }

      case "completedOrders": {
        // Get all users who completed orders
        const usersKey = "newusers";
        const existingData = await redis.get(usersKey);

        if (!existingData) {
          return NextResponse.json({ users: [], count: 0 });
        }

        const usersArray = JSON.parse(existingData);

        // Filter users who completed orders
        const usersWithOrders = usersArray.filter((user: any) => {
          return user.isOrderCreatedInBackend === true;
        });

        return NextResponse.json({
          success: true,
          users: usersWithOrders,
          count: usersWithOrders.length,
        });
      }

      default:
        return NextResponse.json(
          { error: "Invalid type parameter" },
          { status: 400 }
        );
    }
  } catch (error: any) {
    console.error("FCM Analytics GET Error:", error);
    return NextResponse.json(
      { error: "Failed to get analytics", details: error.message },
      { status: 500 }
    );
  }
}

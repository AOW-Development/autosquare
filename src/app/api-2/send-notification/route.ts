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

// Cache for Firebase Admin instance
let firebaseAdminApp: any = null;
let firebaseAdminModule: any = null;

// Lazy initialization function for Firebase Admin using dynamic import
// This avoids module-level initialization issues in Next.js/Turbopack
async function getFirebaseAdmin() {
  // Return cached instance if available
  if (firebaseAdminApp && firebaseAdminModule) {
    if (firebaseAdminModule.apps.length > 0) {
      return firebaseAdminApp;
    }
  }

  // Dynamically import firebase-admin to avoid module loading issues
  if (!firebaseAdminModule) {
    try {
      firebaseAdminModule = await import("firebase-admin");
    } catch (importError: any) {
      console.error("❌ Failed to import firebase-admin:", importError.message);
      throw new Error(
        `Failed to import firebase-admin: ${importError.message}`
      );
    }
  }

  const admin = firebaseAdminModule;

  // Check if already initialized
  if (admin.apps.length > 0) {
    firebaseAdminApp = admin.apps[0];
    return firebaseAdminApp;
  }

  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (!serviceAccountKey) {
    throw new Error(
      "FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set"
    );
  }

  try {
    // Clean the string - remove any extra quotes or whitespace
    let cleanedKey = serviceAccountKey.trim();

    // Remove surrounding quotes if present
    if (
      (cleanedKey.startsWith('"') && cleanedKey.endsWith('"')) ||
      (cleanedKey.startsWith("'") && cleanedKey.endsWith("'"))
    ) {
      cleanedKey = cleanedKey.slice(1, -1);
    }

    // Try to parse as-is first
    let serviceAccount: any;
    try {
      serviceAccount = JSON.parse(cleanedKey);
    } catch (firstError: any) {
      // If parsing fails due to control characters, try to fix them
      if (
        firstError.message.includes("control character") ||
        firstError.message.includes("Unexpected")
      ) {
        cleanedKey = cleanedKey
          .replace(/\r\n/g, "\\n")
          .replace(/\n/g, "\\n")
          .replace(/\r/g, "\\n")
          .replace(/\t/g, "\\t");

        try {
          serviceAccount = JSON.parse(cleanedKey);
        } catch (secondError: any) {
          throw new Error(
            `JSON parsing failed: ${secondError.message}. Original: ${firstError.message}`
          );
        }
      } else {
        throw firstError;
      }
    }

    // Validate required fields
    if (
      !serviceAccount.project_id ||
      !serviceAccount.private_key ||
      !serviceAccount.client_email
    ) {
      throw new Error(
        "Service account key is missing required fields: project_id, private_key, or client_email"
      );
    }

    // Process private key - convert \n escape sequences to actual newlines
    const processedPrivateKey = serviceAccount.private_key.includes("\\n")
      ? serviceAccount.private_key.replace(/\\n/g, "\n")
      : serviceAccount.private_key;

    const cleanServiceAccount = {
      projectId: serviceAccount.project_id,
      privateKey: processedPrivateKey,
      clientEmail: serviceAccount.client_email,
    };

    // Initialize Firebase Admin
    firebaseAdminApp = admin.initializeApp({
      credential: admin.credential.cert(cleanServiceAccount),
    });

    console.log("✅ Firebase Admin initialized successfully");
    return firebaseAdminApp;
  } catch (error: any) {
    console.error("❌ Firebase Admin initialization error:", error.message);
    console.error("   Stack:", error.stack?.substring(0, 300));
    throw error;
  }
}

interface NotificationPayload {
  title: string;
  body: string;
  icon?: string;
  url?: string;
  sessionId?: string;
  token?: string;
  sendToAll?: boolean;
}

// POST - Send notification to user(s)
export async function POST(req: NextRequest) {
  try {
    // Lazy initialize Firebase Admin (async)
    const firebaseAdmin = await getFirebaseAdmin();

    // Get the admin module (should be cached from getFirebaseAdmin)
    if (!firebaseAdminModule) {
      firebaseAdminModule = await import("firebase-admin");
    }
    const admin = firebaseAdminModule;

    const payload: NotificationPayload = await req.json();
    const { title, body, icon, url, sessionId, token, sendToAll } = payload;

    if (!title || !body) {
      return NextResponse.json(
        { error: "Title and body are required" },
        { status: 400 }
      );
    }

    const messaging = admin.messaging(firebaseAdmin);
    let tokens: string[] = [];

    // Get tokens based on parameters
    if (sendToAll) {
      // Get all tokens from Redis
      const allTokensKey = "fcm:tokens:all";
      const allTokens = await redis.smembers(allTokensKey);
      tokens = allTokens;
    } else if (token) {
      tokens = [token];
    } else if (sessionId) {
      // Get token from sessionId
      const tokenKey = `fcm:token:${sessionId}`;
      const tokenData = await redis.get(tokenKey);
      if (tokenData) {
        const parsed = JSON.parse(tokenData);
        tokens = [parsed.token];
      }
    } else {
      return NextResponse.json(
        { error: "Either sessionId, token, or sendToAll must be provided" },
        { status: 400 }
      );
    }

    if (tokens.length === 0) {
      return NextResponse.json({ error: "No tokens found" }, { status: 404 });
    }

    // Prepare notification message
    // For background notifications (when site is closed), we need both 'notification' and 'data'
    // The 'notification' field triggers the system tray notification
    // The 'data' field is passed to the service worker
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://partscentral.us";
    const fullUrl = url
      ? url.startsWith("http")
        ? url
        : `${siteUrl}${url}`
      : siteUrl;

    const message: any = {
      notification: {
        title,
        body,
        // imageUrl is for Android, icon is for web
        imageUrl: icon,
      },
      data: {
        // Include notification data for service worker
        title,
        body,
        icon: icon || "/favicon.ico",
        url: fullUrl,
        click_action: fullUrl,
        sessionId: sessionId || "",
        // Add timestamp to ensure uniqueness
        timestamp: new Date().toISOString(),
      },
      tokens,
      webpush: {
        notification: {
          title,
          body,
          icon: icon || "/favicon.ico",
          badge: "/favicon.ico",
          // Add image for rich notifications
          image: icon,
        },
        fcmOptions: {
          link: fullUrl,
        },
        // Headers for web push
        headers: {
          Urgency: "normal",
        },
      },
      // Android-specific options
      android: {
        priority: "normal",
        notification: {
          sound: "default",
          channelId: "default",
        },
      },
    };

    // Generate notification ID for tracking
    const notificationId = `notif_${Date.now()}_${Math.random()
      .toString(36)
      .substring(7)}`;

    // Add notificationId to data for click tracking
    message.data.notificationId = notificationId;

    // Send notification
    const response = await messaging.sendEachForMulticast(message);

    // Track the notification in analytics
    try {
      const today = new Date().toISOString().split("T")[0];
      const dailyNotifsKey = `fcm:daily:notifications:${today}`;
      await redis.incr(dailyNotifsKey);
      await redis.expire(dailyNotifsKey, 60 * 60 * 24 * 90); // 90 days

      // Store notification details
      const notifData = {
        notificationId,
        title,
        body,
        url: fullUrl,
        sentAt: new Date().toISOString(),
        targetType: sendToAll ? "all" : token ? "single" : "session",
        targetCount: tokens.length,
        successCount: response.successCount,
        failureCount: response.failureCount,
      };
      const notifsKey = "fcm:notifications:sent";
      await redis.lpush(notifsKey, JSON.stringify(notifData));
      await redis.ltrim(notifsKey, 0, 499);
    } catch (trackError) {
      console.warn("Failed to track notification:", trackError);
    }

    return NextResponse.json({
      success: true,
      message: "Notification sent",
      notificationId,
      successCount: response.successCount,
      failureCount: response.failureCount,
      responses: response.responses,
    });
  } catch (error: any) {
    console.error("Error sending notification:", error);
    return NextResponse.json(
      { error: "Failed to send notification", details: error.message },
      { status: 500 }
    );
  }
}

// GET - Get all users with FCM tokens
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type"); // 'all' or 'tokens'

    if (type === "tokens") {
      // Get all tokens
      const allTokensKey = "fcm:tokens:all";
      const tokens = await redis.smembers(allTokensKey);
      return NextResponse.json({ tokens, count: tokens.length });
    }

    // Get all users with FCM tokens from newusers array
    const usersKey = "newusers";
    const existingData = await redis.get(usersKey);

    if (!existingData) {
      return NextResponse.json({ users: [], count: 0 });
    }

    const usersArray = JSON.parse(existingData);
    const usersWithTokens = usersArray.filter((user: any) => user.fcmToken);

    // Enrich user data with timestamp and url from fcm:token:{sessionId} keys
    const enrichedUsers = await Promise.all(
      usersWithTokens.map(async (user: any) => {
        if (user.sessionId) {
          const tokenKey = `fcm:token:${user.sessionId}`;
          const tokenData = await redis.get(tokenKey);
          if (tokenData) {
            const parsed = JSON.parse(tokenData);
            return {
              ...user,
              timestamp: user.timestamp || parsed.timestamp || parsed.updatedAt,
              url: user.url || parsed.url,
              userAgent: user.userAgent || parsed.userAgent,
            };
          }
        }
        return user;
      })
    );

    return NextResponse.json({
      users: enrichedUsers,
      count: enrichedUsers.length,
    });
  } catch (error: any) {
    console.error("Error retrieving users:", error);
    return NextResponse.json(
      { error: "Failed to retrieve users", details: error.message },
      { status: 500 }
    );
  }
}

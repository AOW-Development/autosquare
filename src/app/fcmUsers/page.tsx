"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

interface CartItem {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  image: string;
  quantity: number;
  price: number;
}

interface OrderTotal {
  subtotal: number;
  shipping: number;
  taxes: number;
  total: number;
}

interface FCMUser {
  name?: string;
  email?: string;
  phoneNumber?: string;
  sessionId?: string;
  fcmToken: string;
  timestamp?: string;
  userAgent?: string;
  url?: string;
  cartItems?: CartItem[];
  orderTotal?: OrderTotal;
  isOrderCreatedInBackend?: boolean;
  orderNumber?: string;
  customerInfo?: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  shippingInfo?: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

interface NotificationForm {
  title: string;
  body: string;
  url: string;
  icon: string;
}

interface AnalyticsSummary {
  totalClicks: number;
  totalNotifications: number;
  totalOrders: number;
  totalConversions: number;
  totalFCMUsers: number;
  totalUsersWithCarts: number;
  totalUsersWithOrders: number;
  conversionRate: string;
  dailyStats: Array<{
    date: string;
    clicks: number;
    notifications: number;
    orders: number;
    conversions: number;
  }>;
}

type TabType = "all" | "withCarts" | "completedOrders" | "analytics";

export default function FCMUsersPage() {
  const [users, setUsers] = useState<FCMUser[]>([]);
  const [usersWithCarts, setUsersWithCarts] = useState<FCMUser[]>([]);
  const [completedOrderUsers, setCompletedOrderUsers] = useState<FCMUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [expandedUser, setExpandedUser] = useState<string | null>(null);
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const [form, setForm] = useState<NotificationForm>({
    title: "",
    body: "",
    url: "",
    icon: "",
  });

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api-2/send-notification", {
        method: "GET",
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch FCM users");
      }

      const data = await res.json();
      setUsers(data.users || []);
    } catch (error: any) {
      console.error("Failed to load FCM users:", error);
      toast.error(error.message || "Failed to load FCM users");
    } finally {
      setLoading(false);
    }
  };

  const fetchUsersWithCarts = async () => {
    try {
      const res = await fetch("/api-2/fcm-analytics?type=usersWithCarts", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch users with carts");
      }

      const data = await res.json();
      setUsersWithCarts(data.users || []);
    } catch (error: any) {
      console.error("Failed to load users with carts:", error);
    }
  };

  const fetchCompletedOrders = async () => {
    try {
      const res = await fetch("/api-2/fcm-analytics?type=completedOrders", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch completed orders");
      }

      const data = await res.json();
      setCompletedOrderUsers(data.users || []);
    } catch (error: any) {
      console.error("Failed to load completed orders:", error);
    }
  };

  const fetchAnalytics = async () => {
    setAnalyticsLoading(true);
    try {
      const res = await fetch("/api-2/fcm-analytics?type=summary&days=7", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch analytics");
      }

      const data = await res.json();
      setAnalytics(data.stats || null);
    } catch (error: any) {
      console.error("Failed to load analytics:", error);
      toast.error(error.message || "Failed to load analytics");
    } finally {
      setAnalyticsLoading(false);
    }
  };

  const refreshAll = async () => {
    await Promise.all([
      fetchUsers(),
      fetchUsersWithCarts(),
      fetchCompletedOrders(),
      fetchAnalytics(),
    ]);
  };

  useEffect(() => {
    refreshAll();
  }, []);

  const currentUsers = useMemo(() => {
    let list: FCMUser[] = [];

    switch (activeTab) {
      case "withCarts":
        list = usersWithCarts;
        break;
      case "completedOrders":
        list = completedOrderUsers;
        break;
      case "all":
      default:
        list = users;
    }

    if (!search.trim()) return list;

    const term = search.toLowerCase();
    return list.filter((user) => {
      return (
        user?.name?.toLowerCase().includes(term) ||
        user?.email?.toLowerCase().includes(term) ||
        user?.phoneNumber?.toLowerCase().includes(term) ||
        user?.sessionId?.toLowerCase().includes(term) ||
        user?.fcmToken?.toLowerCase().includes(term) ||
        user?.customerInfo?.firstName?.toLowerCase().includes(term) ||
        user?.customerInfo?.lastName?.toLowerCase().includes(term) ||
        user?.customerInfo?.email?.toLowerCase().includes(term) ||
        user?.orderNumber?.toLowerCase().includes(term)
      );
    });
  }, [users, usersWithCarts, completedOrderUsers, search, activeTab]);

  const handleInputChange = (field: keyof NotificationForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    if (!form.title.trim()) {
      toast.error("Notification title is required");
      return false;
    }

    if (!form.body.trim()) {
      toast.error("Notification body is required");
      return false;
    }

    return true;
  };

  const sendNotification = async (options?: {
    token?: string;
    sessionId?: string;
    sendToAll?: boolean;
  }) => {
    if (!validateForm()) return;

    if (!options?.sendToAll && !options?.token && !options?.sessionId) {
      toast.error("Select a user or choose Send to all");
      return;
    }

    const payload: Record<string, any> = {
      title: form.title.trim(),
      body: form.body.trim(),
    };

    if (form.url.trim()) payload.url = form.url.trim();
    if (form.icon.trim()) payload.icon = form.icon.trim();

    if (options?.sendToAll) {
      payload.sendToAll = true;
    } else if (options?.token) {
      payload.token = options.token;
    } else if (options?.sessionId) {
      payload.sessionId = options.sessionId;
    }

    setSending(true);
    try {
      const res = await fetch("/api-2/send-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send notification");
      }

      // Record notification for analytics
      await fetch("/api-2/fcm-analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "recordNotification",
          data: {
            title: form.title,
            body: form.body,
            url: form.url,
            targetType: options?.sendToAll ? "all" : "single",
            targetCount: options?.sendToAll ? users.length : 1,
            successCount: data.successCount || 0,
            failureCount: data.failureCount || 0,
          },
        }),
      });

      toast.success(
        options?.sendToAll
          ? `Notification sent to ${data.successCount || 0} users`
          : "Notification sent successfully"
      );

      // Refresh analytics
      fetchAnalytics();
    } catch (error: any) {
      console.error("Failed to send notification:", error);
      toast.error(error.message || "Failed to send notification");
    } finally {
      setSending(false);
    }
  };

  const sendAbandonedCartNotification = async (user: FCMUser) => {
    if (!user.cartItems || user.cartItems.length === 0) {
      toast.error("User has no items in cart");
      return;
    }

    const total =
      user.orderTotal?.total ||
      user.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const payload = {
      title: "🛒 Items still in your cart!",
      body: `You have ${user.cartItems.length} item${
        user.cartItems.length > 1 ? "s" : ""
      } ($${total.toFixed(2)}) waiting. Complete your purchase now!`,
      url: "/account/cart",
      token: user.fcmToken,
    };

    setSending(true);
    try {
      const res = await fetch("/api-2/send-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send notification");
      }

      // Record notification
      await fetch("/api-2/fcm-analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "recordNotification",
          data: {
            title: payload.title,
            body: payload.body,
            url: payload.url,
            targetType: "single",
            targetCount: 1,
            successCount: data.successCount || 0,
            failureCount: data.failureCount || 0,
          },
        }),
      });

      toast.success("Abandoned cart notification sent!");
      fetchAnalytics();
    } catch (error: any) {
      console.error("Failed to send notification:", error);
      toast.error(error.message || "Failed to send notification");
    } finally {
      setSending(false);
    }
  };

  const sendBulkAbandonedCartNotifications = async () => {
    if (usersWithCarts.length === 0) {
      toast.error("No users with abandoned carts");
      return;
    }

    const confirmed = window.confirm(
      `Send abandoned cart notifications to ${usersWithCarts.length} users?`
    );
    if (!confirmed) return;

    setSending(true);
    let successCount = 0;
    let failCount = 0;

    for (const user of usersWithCarts) {
      if (!user.cartItems || user.cartItems.length === 0) continue;

      const total =
        user.orderTotal?.total ||
        user.cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );

      try {
        const res = await fetch("/api-2/send-notification", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: "🛒 Items still in your cart!",
            body: `You have ${user.cartItems.length} item${
              user.cartItems.length > 1 ? "s" : ""
            } ($${total.toFixed(2)}) waiting. Complete your purchase now!`,
            url: "/account/cart",
            token: user.fcmToken,
          }),
        });

        const data = await res.json();
        if (res.ok && data.success) {
          successCount++;
        } else {
          failCount++;
        }
      } catch {
        failCount++;
      }
    }

    // Record bulk notification
    await fetch("/api-2/fcm-analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "recordNotification",
        data: {
          title: "Bulk Abandoned Cart Notification",
          body: `Sent to ${usersWithCarts.length} users`,
          url: "/account/cart",
          targetType: "all",
          targetCount: usersWithCarts.length,
          successCount,
          failureCount: failCount,
        },
      }),
    });

    toast.success(`Sent: ${successCount} | Failed: ${failCount}`);
    fetchAnalytics();
    setSending(false);
  };

  const formatDate = (value?: string) => {
    if (!value) return "—";
    try {
      return new Date(value).toLocaleString();
    } catch {
      return value;
    }
  };

  const formatCurrency = (value?: number) => {
    if (value === undefined || value === null) return "—";
    return `$${value.toFixed(2)}`;
  };

  const deleteUser = async (sessionId?: string) => {
    if (!sessionId) {
      toast.error("Session ID missing for this user");
      return;
    }

    const confirmed = window.confirm(
      "Remove this user's FCM token? They will stop receiving notifications until they opt in again."
    );
    if (!confirmed) return;

    setDeleting(sessionId);
    try {
      const res = await fetch(
        `/api-2/fcm-token?sessionId=${encodeURIComponent(sessionId)}`,
        {
          method: "DELETE",
        }
      );
      const res1 = await fetch(
        `/api-2/redisStore?sessionId=${encodeURIComponent(sessionId)}`,
        {
          method: "DELETE",
        }
      );
      const data1 = await res1.json();
      const data = await res.json();
      if (!res.ok || !data.success || !res1.ok || !data1.success) {
        throw new Error(data.error || "Failed to delete user");
      }
      toast.success("User token and data removed");
      setUsers((prev) => prev.filter((user) => user.sessionId !== sessionId));
      setUsersWithCarts((prev) =>
        prev.filter((user) => user.sessionId !== sessionId)
      );
      setCompletedOrderUsers((prev) =>
        prev.filter((user) => user.sessionId !== sessionId)
      );
    } catch (error: any) {
      console.error("Failed to delete user:", error);
      toast.error(error.message || "Failed to delete user");
    } finally {
      setDeleting(null);
    }
  };

  const getUserDisplayName = (user: FCMUser) => {
    if (user.customerInfo?.firstName || user.customerInfo?.lastName) {
      return `${user.customerInfo.firstName || ""} ${
        user.customerInfo.lastName || ""
      }`.trim();
    }
    if (user.shippingInfo?.firstName || user.shippingInfo?.lastName) {
      return `${user.shippingInfo.firstName || ""} ${
        user.shippingInfo.lastName || ""
      }`.trim();
    }
    return user.name || user.email || "Unknown user";
  };

  const getUserEmail = (user: FCMUser) => {
    return (
      user.customerInfo?.email || user.shippingInfo?.email || user.email || "—"
    );
  };

  const getUserPhone = (user: FCMUser) => {
    return (
      user.customerInfo?.phone ||
      user.shippingInfo?.phone ||
      user.phoneNumber ||
      "—"
    );
  };

  const tabs: { id: TabType; label: string; count: number }[] = [
    { id: "all", label: "All FCM Users", count: users.length },
    { id: "withCarts", label: "Abandoned Carts", count: usersWithCarts.length },
    {
      id: "completedOrders",
      label: "Completed Orders",
      count: completedOrderUsers.length,
    },
    { id: "analytics", label: "Analytics", count: 0 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              FCM Users Dashboard
            </h1>
            <p className="text-sm text-slate-500">
              Manage notifications, track analytics, and recover abandoned
              carts.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search users..."
              className="w-full sm:w-64 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <button
              onClick={refreshAll}
              disabled={loading}
              className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Refreshing..." : "Refresh All"}
            </button>
          </div>
        </header>

        {/* Quick Stats */}
        {analytics && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600">
                {analytics.totalFCMUsers}
              </div>
              <div className="text-xs text-slate-500">FCM Users</div>
            </div>
            {/* <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-2xl font-bold text-orange-600">
                {analytics.totalUsersWithCarts}
              </div>
              <div className="text-xs text-slate-500">Abandoned Carts</div>
            </div> */}
            {/* <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-2xl font-bold text-green-600">
                {analytics.totalUsersWithOrders}
              </div>
              <div className="text-xs text-slate-500">Completed Orders</div>
            </div> */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-2xl font-bold text-purple-600">
                {analytics.totalNotifications / 2}
              </div>
              <div className="text-xs text-slate-500">Notifications (7d)</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-2xl font-bold text-cyan-600">
                {analytics.totalClicks}
              </div>
              <div className="text-xs text-slate-500">Clicks (7d)</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-2xl font-bold text-emerald-600">
                {/* {analytics.conversionRate}% */}
                {(
                  (analytics.totalClicks / (analytics.totalNotifications / 2)) *
                    100 || 0
                ).toFixed(2)}
                %
              </div>
              <div className="text-xs text-slate-500">
                Conversion Rate(for clicks)
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
              }`}
            >
              {tab.label}
              {tab.id !== "analytics" && (
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    activeTab === tab.id ? "bg-blue-500" : "bg-slate-100"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Daily Statistics (Last 7 Days)
              </h2>
              {analyticsLoading ? (
                <div className="text-center py-8 text-slate-500">
                  Loading analytics...
                </div>
              ) : analytics ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200 text-sm">
                    <thead className="bg-slate-50 text-xs font-medium uppercase tracking-wide text-slate-500">
                      <tr>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-right">Notifications</th>
                        <th className="px-4 py-3 text-right">Clicks</th>
                        <th className="px-4 py-3 text-right">Orders</th>
                        <th className="px-4 py-3 text-right">Conversions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {analytics.dailyStats.map((day) => (
                        <tr key={day.date}>
                          <td className="px-4 py-3 font-medium">{day.date}</td>
                          <td className="px-4 py-3 text-right text-purple-600">
                            {day.notifications / 2}
                          </td>
                          <td className="px-4 py-3 text-right text-cyan-600">
                            {day.clicks}
                          </td>
                          <td className="px-4 py-3 text-right text-green-600">
                            {day.orders}
                          </td>
                          <td className="px-4 py-3 text-right text-emerald-600">
                            {/* {day.conversions} */}
                            {(
                              (day.orders / day.notifications) * 100 || 0
                            ).toFixed(2)}
                            %
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 text-slate-500">
                  No analytics data available
                </div>
              )}
            </section>
          </div>
        )}

        {/* Compose Notification */}
        {activeTab !== "analytics" && (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Compose Notification
            </h2>
            <p className="mb-4 text-sm text-slate-500">
              Fill in the notification details and choose a target below.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-slate-600">
                Title
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="e.g. Abandoned cart reminder"
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </label>

              <label className="text-sm text-slate-600">
                Deep Link / URL
                <input
                  type="url"
                  value={form.url}
                  onChange={(e) => handleInputChange("url", e.target.value)}
                  placeholder="/account/cart"
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm text-slate-600">
              Message
              <textarea
                rows={3}
                value={form.body}
                onChange={(e) => handleInputChange("body", e.target.value)}
                placeholder="Tell the user what happened..."
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </label>

            <label className="mt-4 block text-sm text-slate-600">
              Icon URL (optional)
              <input
                type="url"
                value={form.icon}
                onChange={(e) => handleInputChange("icon", e.target.value)}
                placeholder="https://example.com/icon.png"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </label>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => sendNotification({ sendToAll: true })}
                disabled={sending || users.length === 0}
                className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-300"
              >
                {sending ? "Sending..." : `Send to all (${users.length})`}
              </button>
              {activeTab === "withCarts" && (
                <button
                  onClick={sendBulkAbandonedCartNotifications}
                  disabled={sending || usersWithCarts.length === 0}
                  className="inline-flex items-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-orange-300"
                >
                  {sending
                    ? "Sending..."
                    : `Send Cart Reminders (${usersWithCarts.length})`}
                </button>
              )}
              <button
                onClick={() =>
                  setForm({
                    title: "",
                    body: "",
                    url: "",
                    icon: "",
                  })
                }
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Clear form
              </button>
            </div>
          </section>
        )}

        {/* Users Table */}
        {activeTab !== "analytics" && (
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {activeTab === "all" && "All FCM Users"}
                  {activeTab === "withCarts" && "Users with Abandoned Carts"}
                  {activeTab === "completedOrders" &&
                    "Users with Completed Orders"}
                </h2>
                <p className="text-sm text-slate-500">
                  Showing {currentUsers.length} users
                </p>
              </div>
            </div>

            {loading ? (
              <div className="px-6 py-10 text-center text-sm text-slate-500">
                Loading users...
              </div>
            ) : currentUsers.length === 0 ? (
              <div className="px-6 py-12 text-center text-sm text-slate-500">
                {activeTab === "withCarts"
                  ? "No users with abandoned carts found."
                  : activeTab === "completedOrders"
                  ? "No completed orders found."
                  : "No FCM users found."}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <thead className="bg-slate-50 text-xs font-medium uppercase tracking-wide text-slate-500">
                    <tr>
                      <th className="px-4 py-3 text-left">User</th>
                      <th className="px-4 py-3 text-left">Contact</th>
                      {(activeTab === "withCarts" ||
                        activeTab === "completedOrders") && (
                        <th className="px-4 py-3 text-left">Cart / Order</th>
                      )}
                      <th className="px-4 py-3 text-left">Last Activity</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {currentUsers.map((user) => (
                      <>
                        <tr key={`${user.sessionId}-${user.fcmToken}`}>
                          <td className="px-4 py-3 align-top">
                            <div className="font-medium text-slate-900">
                              {getUserDisplayName(user)}
                            </div>
                            <div className="text-xs font-mono text-slate-400 truncate max-w-[150px]">
                              {user.sessionId || "—"}
                            </div>
                          </td>
                          <td className="px-4 py-3 align-top">
                            <div className="text-sm text-slate-600">
                              {getUserEmail(user)}
                            </div>
                            <div className="text-xs text-slate-500">
                              {getUserPhone(user)}
                            </div>
                          </td>
                          {(activeTab === "withCarts" ||
                            activeTab === "completedOrders") && (
                            <td className="px-4 py-3 align-top">
                              {user.cartItems && user.cartItems.length > 0 ? (
                                <div>
                                  <div className="font-medium text-slate-900">
                                    {user.cartItems.length} item
                                    {user.cartItems.length > 1 ? "s" : ""}
                                  </div>
                                  <div className="text-sm text-green-600 font-semibold">
                                    {formatCurrency(user.orderTotal?.total)}
                                  </div>
                                  {user.orderNumber && (
                                    <div className="text-xs text-slate-500">
                                      Order: {user.orderNumber}
                                    </div>
                                  )}
                                  <button
                                    onClick={() =>
                                      setExpandedUser(
                                        expandedUser === user.sessionId
                                          ? null
                                          : user.sessionId || null
                                      )
                                    }
                                    className="text-xs text-blue-600 hover:underline mt-1"
                                  >
                                    {expandedUser === user.sessionId
                                      ? "Hide details"
                                      : "View cart"}
                                  </button>
                                </div>
                              ) : (
                                <span className="text-slate-400">No cart</span>
                              )}
                            </td>
                          )}
                          <td className="px-4 py-3 align-top text-sm text-slate-600">
                            <div>
                              {formatDate(user.updatedAt || user.timestamp)}
                            </div>
                            <div className="text-xs text-slate-400 max-w-[200px]">
                              {user.url || user.userAgent || "—"}
                            </div>
                          </td>
                          <td className="px-4 py-3 align-top text-right">
                            <div className="flex flex-col gap-2 text-xs">
                              <button
                                onClick={() =>
                                  navigator.clipboard
                                    .writeText(user.fcmToken)
                                    .then(() => toast.success("Token copied"))
                                    .catch(() =>
                                      toast.error("Failed to copy token")
                                    )
                                }
                                className="rounded-lg border border-slate-200 px-3 py-1 font-medium text-slate-600 transition hover:bg-slate-50"
                              >
                                Copy token
                              </button>
                              {activeTab === "withCarts" &&
                                user.cartItems &&
                                user.cartItems.length > 0 && (
                                  <button
                                    onClick={() =>
                                      sendAbandonedCartNotification(user)
                                    }
                                    disabled={sending}
                                    className="rounded-lg bg-orange-600 px-3 py-1 font-medium text-white transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-orange-300"
                                  >
                                    Send Cart Reminder
                                  </button>
                                )}
                              <button
                                onClick={() =>
                                  sendNotification({ token: user.fcmToken })
                                }
                                disabled={sending}
                                className="rounded-lg bg-emerald-600 px-3 py-1 font-medium text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:bg-emerald-300"
                              >
                                Send Custom
                              </button>
                              <button
                                onClick={() => deleteUser(user.sessionId)}
                                disabled={deleting === user.sessionId}
                                className="rounded-lg border border-red-200 px-3 py-1 font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                              >
                                {deleting === user.sessionId
                                  ? "Deleting..."
                                  : "Delete"}
                              </button>
                            </div>
                          </td>
                        </tr>
                        {/* Expanded Cart Details */}
                        {expandedUser === user.sessionId &&
                          user.cartItems &&
                          user.cartItems.length > 0 && (
                            <tr>
                              <td colSpan={5} className="bg-slate-50 px-4 py-4">
                                <div className="rounded-lg border border-slate-200 bg-white p-4">
                                  <h4 className="font-semibold text-slate-900 mb-3">
                                    Cart Details
                                  </h4>
                                  <div className="space-y-3">
                                    {user.cartItems.map((item, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-center gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                                      >
                                        {item.image && (
                                          <img
                                            src={item.image}
                                            alt={item.title || item.name}
                                            className="w-16 h-16 object-cover rounded-lg bg-slate-100"
                                            onError={(e) => {
                                              (
                                                e.target as HTMLImageElement
                                              ).src = "/dummyImg.png";
                                            }}
                                          />
                                        )}
                                        <div className="flex-1">
                                          <div className="font-medium text-slate-900">
                                            {item.title || item.name}
                                          </div>
                                          {item.subtitle && (
                                            <div className="text-xs text-slate-500">
                                              {item.subtitle}
                                            </div>
                                          )}
                                          <div className="text-sm text-slate-600 mt-1">
                                            Qty: {item.quantity} ×{" "}
                                            {formatCurrency(item.price)}
                                          </div>
                                        </div>
                                        <div className="font-semibold text-slate-900">
                                          {formatCurrency(
                                            item.price * item.quantity
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  {user.orderTotal && (
                                    <div className="mt-4 pt-4 border-t border-slate-200">
                                      <div className="flex justify-between text-sm">
                                        <span>Subtotal:</span>
                                        <span>
                                          {formatCurrency(
                                            user.orderTotal.subtotal
                                          )}
                                        </span>
                                      </div>
                                      <div className="flex justify-between text-sm">
                                        <span>Shipping:</span>
                                        <span>
                                          {formatCurrency(
                                            user.orderTotal.shipping
                                          )}
                                        </span>
                                      </div>
                                      <div className="flex justify-between text-sm">
                                        <span>Taxes:</span>
                                        <span>
                                          {formatCurrency(
                                            user.orderTotal.taxes
                                          )}
                                        </span>
                                      </div>
                                      <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t">
                                        <span>Total:</span>
                                        <span className="text-green-600">
                                          {formatCurrency(
                                            user.orderTotal.total
                                          )}
                                        </span>
                                      </div>
                                    </div>
                                  )}
                                  {user.shippingInfo && (
                                    <div className="mt-4 pt-4 border-t border-slate-200">
                                      <h5 className="font-medium text-slate-900 mb-2">
                                        Shipping Address
                                      </h5>
                                      <div className="text-sm text-slate-600">
                                        <div>
                                          {user.shippingInfo.firstName}{" "}
                                          {user.shippingInfo.lastName}
                                        </div>
                                        <div>{user.shippingInfo.address}</div>
                                        <div>
                                          {user.shippingInfo.city},{" "}
                                          {user.shippingInfo.state}{" "}
                                          {user.shippingInfo.zipCode}
                                        </div>
                                        <div>{user.shippingInfo.country}</div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </td>
                            </tr>
                          )}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

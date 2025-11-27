"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

interface FCMUser {
  name?: string;
  email?: string;
  phoneNumber?: string;
  sessionId?: string;
  fcmToken: string;
  timestamp?: string;
  userAgent?: string;
  url?: string;
}

interface NotificationForm {
  title: string;
  body: string;
  url: string;
  icon: string;
}

export default function FCMUsersPage() {
  const [users, setUsers] = useState<FCMUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [search, setSearch] = useState("");
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

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    if (!search.trim()) return users;
    const term = search.toLowerCase();
    return users.filter((user) => {
      return (
        user?.name?.toLowerCase().includes(term) ||
        user?.email?.toLowerCase().includes(term) ||
        user?.phoneNumber?.toLowerCase().includes(term) ||
        user?.sessionId?.toLowerCase().includes(term) ||
        user?.fcmToken?.toLowerCase().includes(term)
      );
    });
  }, [users, search]);

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

      toast.success(
        options?.sendToAll
          ? "Notification sent to all tokens"
          : "Notification sent successfully"
      );
    } catch (error: any) {
      console.error("Failed to send notification:", error);
      toast.error(error.message || "Failed to send notification");
    } finally {
      setSending(false);
    }
  };

  const formatDate = (value?: string) => {
    if (!value) return "—";
    try {
      return new Date(value).toLocaleString();
    } catch {
      return value;
    }
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
    } catch (error: any) {
      console.error("Failed to delete user:", error);
      toast.error(error.message || "Failed to delete user");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              FCM Users Dashboard
            </h1>
            <p className="text-sm text-slate-500">
              View registered tokens and send targeted notifications.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <label className="w-full text-sm text-slate-600">
              <span className="mb-1 inline-block font-medium">Search</span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, email, session, token..."
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </label>
            <button
              onClick={fetchUsers}
              disabled={loading}
              className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        </header>

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
                placeholder="https://example.com/cart/123"
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
              {sending ? "Sending..." : "Send to all tokens"}
            </button>
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

        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Registered FCM Tokens
              </h2>
              <p className="text-sm text-slate-500">
                Showing {filteredUsers.length} of {users.length} users
              </p>
            </div>
          </div>

          {loading ? (
            <div className="px-6 py-10 text-center text-sm text-slate-500">
              Loading users...
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="px-6 py-12 text-center text-sm text-slate-500">
              No FCM users found. Trigger a notification opt-in on the site to
              register tokens.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50 text-xs font-medium uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-6 py-3 text-left">User</th>
                    <th className="px-6 py-3 text-left">Session</th>
                    {/* <th className="px-6 py-3 text-left">Last seen</th> */}
                    <th className="px-6 py-3 text-left">Token</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {filteredUsers.map((user) => (
                    <tr key={`${user.sessionId}-${user.fcmToken}`}>
                      <td className="px-6 py-3 align-top">
                        <div className="font-medium text-slate-900">
                          {user.name || user.email || "Unknown user"}
                        </div>
                        <div className="text-xs text-slate-500">
                          {user.email || "—"}
                        </div>
                        {user.phoneNumber && (
                          <div className="text-xs text-slate-500">
                            {user.phoneNumber}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-3 align-top">
                        <div className="text-xs font-mono text-slate-600">
                          {user.sessionId || "—"}
                        </div>
                        <div className="text-xs text-slate-400">
                          {user.url || "No recent URL"}
                        </div>
                      </td>
                      {/* <td className="px-6 py-3 align-top text-sm text-slate-600">
                      formatDate{(user.timestamp)}
                      </td>   */}
                      <td className="px-6 py-3 align-top">
                        <div className="line-clamp-2 break-all text-xs text-slate-500">
                          {user.fcmToken}
                        </div>
                      </td>
                      <td className="px-6 py-3 align-top text-right">
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
                          <button
                            onClick={() =>
                              sendNotification({ token: user.fcmToken })
                            }
                            disabled={sending}
                            className="rounded-lg bg-emerald-600 px-3 py-1 font-medium text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:bg-emerald-300"
                          >
                            Send
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
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

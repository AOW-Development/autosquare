/**
 * Utility functions for FCM notifications
 */

// Helper function to get the base URL for API calls
// Works in both client-side and server-side contexts
const getBaseUrl = (): string => {
  // Client-side: use relative URLs
  if (typeof window !== "undefined") {
    return "";
  }

  // Server-side: use absolute URL
  // Try NEXT_PUBLIC_SITE_URL first, then fallback to localhost for development
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl) {
    return siteUrl;
  }
  return "http://localhost:3000";

  // Fallback for development
  // return process.env.VERCEL_URL
  //   ? `https://${process.env.VERCEL_URL}`
  //   : "http://localhost:3000";
};

interface SendNotificationParams {
  title: string;
  body: string;
  icon?: string;
  url?: string;
  sessionId?: string;
  token?: string;
  sendToAll?: boolean;
}

/**
 * Send a notification to a user or all users
 */
export const sendNotification = async (
  params: SendNotificationParams
): Promise<boolean> => {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api-2/send-notification`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to send notification");
    }

    const result = await response.json();
    console.log("✅ Notification sent:", result);
    return true;
  } catch (error) {
    console.error("❌ Error sending notification:", error);
    return false;
  }
};

/**
 * Send notification to user who abandoned cart
 */
export const sendAbandonedCartNotification = async (
  sessionId: string,
  cartItemsCount: number
): Promise<boolean> => {
  return sendNotification({
    title: "Items still in your cart!",
    body: `You have ${cartItemsCount} item${
      cartItemsCount > 1 ? "s" : ""
    } waiting. Complete your purchase now!`,
    url: "/account/cart",
    sessionId,
  });
};

/**
 * Send welcome back notification
 */
export const sendWelcomeBackNotification = async (
  sessionId: string
): Promise<boolean> => {
  return sendNotification({
    title: "Welcome back!",
    body: "Check out our latest products and special offers.",
    url: "/",
    sessionId,
  });
};

/**
 * Send order status notification
 */
export const sendOrderStatusNotification = async (
  sessionId: string,
  orderNumber: string,
  status: string
): Promise<boolean> => {
  return sendNotification({
    title: `Order ${orderNumber} Update`,
    body: `Your order status has been updated to: ${status}`,
    url: `/account/orderDetails?order=${orderNumber}`,
    sessionId,
  });
};

/**
 * Get all users with FCM tokens
 */
export const getUsersWithTokens = async (): Promise<any[]> => {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api-2/send-notification?type=all`);

    if (!response.ok) {
      throw new Error("Failed to get users");
    }

    const result = await response.json();
    return result.users || [];
  } catch (error) {
    console.error("Error getting users:", error);
    return [];
  }
};

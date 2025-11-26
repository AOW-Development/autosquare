import { NextRequest, NextResponse } from "next/server";
import { sendNotification } from "@/utils/fcmNotifications";
import { getCheckoutData } from "@/utils/redisCheckout";

/**
 * Send abandoned cart notification via FCM
 * This can be called when a user leaves the site with items in cart
 */
export async function POST(request: NextRequest) {
  try {
    const { sessionId } = await request.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    // Get checkout data from Redis
    const checkoutData = await getCheckoutData(sessionId);

    console.log("🔍 Retrieved checkout data for session:", sessionId);
    console.log("📦 Checkout data:", JSON.stringify(checkoutData, null, 2));
    console.log("🛒 Cart items:", checkoutData?.cartItems?.length || 0);

    if (
      !checkoutData ||
      !checkoutData.cartItems ||
      checkoutData.cartItems.length === 0
    ) {
      console.error("❌ No cart items found for session:", sessionId);
      return NextResponse.json(
        { error: "No cart items found for this session" },
        { status: 404 }
      );
    }

    const cartItemsCount = checkoutData.cartItems.length;
    const total =
      checkoutData.orderTotal?.total ||
      checkoutData.cartItems.reduce(
        (sum: number, item: any) => sum + item.price * item.quantity,
        0
      );

    // Send FCM notification
    const success = await sendNotification({
      title: "Items still in your cart! 🛒",
      body: `You have ${cartItemsCount} item${
        cartItemsCount > 1 ? "s" : ""
      } ($${total.toFixed(2)}) waiting. Complete your purchase now!`,
      url: "/account/cart",
      sessionId,
    });

    if (success) {
      return NextResponse.json({
        success: true,
        message: "Abandoned cart notification sent successfully",
      });
    } else {
      return NextResponse.json(
        { error: "Failed to send notification" },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Error sending abandoned cart notification:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send notification" },
      { status: 500 }
    );
  }
}

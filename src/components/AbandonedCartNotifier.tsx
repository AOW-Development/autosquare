"use client";

import { useEffect, useRef } from "react";
import { useCartStore } from "@/store/cartStore";
import {
  generateSessionId,
  saveCheckoutData,
  updateCheckoutData,
  getCheckoutData,
} from "@/utils/redisCheckout";

/**
 * Component that sends abandoned cart notifications when user leaves with items in cart
 * This should be added to your layout or a key page
 */
export default function AbandonedCartNotifier() {
  const cartItems = useCartStore((s) => s.items);
  const hasNotifiedRef = useRef(false);
  const sessionId = useRef<string>(generateSessionId());

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Only send notification if user has items in cart
    if (cartItems.length === 0) {
      hasNotifiedRef.current = false;
      return;
    }

    // Set up beforeunload handler to detect when user is leaving
    const handleBeforeUnload = async () => {
      // Only send notification once per session
      if (hasNotifiedRef.current) return;

      // Small delay to ensure data is saved
      setTimeout(async () => {
        try {
          // Calculate total from cart items
          const total = cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );

          const cartData = {
            cartItems: cartItems.map((item) => ({
              id: item.id,
              name: item.name,
              title: item.title,
              subtitle: item.subtitle,
              image: item.image,
              quantity: item.quantity,
              price: item.price,
            })),
            orderTotal: {
              subtotal: total,
              shipping: 0,
              taxes: 0,
              total: total,
            },
          };

          console.log("💾 Saving cart data for session:", sessionId.current);
          console.log("🛒 Cart items to save:", cartItems.length);

          // Check if data already exists for this session
          const existingData = await getCheckoutData(sessionId.current);
          console.log("📋 Existing data found:", !!existingData);

          let saveSuccess = false;

          if (existingData) {
            // Update existing data
            console.log("🔄 Updating existing checkout data");
            saveSuccess = await updateCheckoutData(cartData, sessionId.current);
          } else {
            // Create new entry
            console.log("➕ Creating new checkout data entry");
            saveSuccess = await saveCheckoutData(cartData, sessionId.current);
          }

          if (!saveSuccess) {
            console.error("❌ Failed to save cart items to Redis");
            return;
          }

          console.log("✅ Cart items saved successfully");

          // Small delay to ensure data is persisted
          await new Promise((resolve) => setTimeout(resolve, 200));

          // Verify the data was saved correctly
          const verifyData = await getCheckoutData(sessionId.current);
          console.log("🔍 Verification - Retrieved data:", !!verifyData);
          console.log(
            "🔍 Verification - Cart items count:",
            verifyData?.cartItems?.length || 0
          );

          if (
            !verifyData ||
            !verifyData.cartItems ||
            verifyData.cartItems.length === 0
          ) {
            console.error(
              "❌ Verification failed - cart items not found after save"
            );
            return;
          }

          // Now send the notification
          const response = await fetch(
            "/api-2/send-abandoned-cart-notification",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ sessionId: sessionId.current }),
              // Use keepalive to ensure request completes even if page unloads
              keepalive: true,
            }
          );

          if (response.ok) {
            hasNotifiedRef.current = true;
            console.log("✅ Abandoned cart notification sent");
          } else {
            const errorData = await response.json().catch(() => ({}));
            console.error("Failed to send notification:", errorData);
          }
        } catch (error) {
          console.error("Error sending abandoned cart notification:", error);
        }
      }, 100);
    };

    // Listen for page visibility changes (user switching tabs, minimizing, etc.)
    const handleVisibilityChange = () => {
      if (document.hidden && cartItems.length > 0 && !hasNotifiedRef.current) {
        // User left the page/tab, send notification after a delay
        setTimeout(() => {
          handleBeforeUnload();
        }, 5000); // 5 second delay
      }
    };

    // Listen for beforeunload (user closing tab/window)
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [cartItems.length]);

  return null; // This component doesn't render anything
}

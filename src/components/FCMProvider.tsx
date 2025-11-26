"use client";

import { useEffect } from "react";
import { useFCM } from "@/hooks/useFCM";
import { useCartStore } from "@/store/cartStore";
import { generateSessionId } from "@/utils/redisCheckout";

export default function FCMProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSupported, requestPermission, getFCMToken } = useFCM();
  const cartItems = useCartStore((s) => s.items);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register service worker and wait for it to be ready
    const registerServiceWorker =
      async (): Promise<ServiceWorkerRegistration | null> => {
        if (!("serviceWorker" in navigator)) {
          console.warn("Service workers are not supported");
          return null;
        }

        try {
          // First, verify the service worker file is accessible
          try {
            const response = await fetch("/firebase-messaging-sw.js", {
              method: "HEAD",
              cache: "no-cache",
            });
            if (!response.ok) {
              throw new Error(
                `Service worker file not found: ${response.status}`
              );
            }
            console.log("✅ Service worker file is accessible");
          } catch (error) {
            console.error("❌ Service worker file not accessible:", error);
            return null;
          }

          // Remove stale firebase messaging workers (e.g., old dynamic route)
          const existingRegistrations =
            await navigator.serviceWorker.getRegistrations();
          for (const registration of existingRegistrations) {
            const scriptURL =
              registration.active?.scriptURL ||
              registration.installing?.scriptURL ||
              registration.waiting?.scriptURL;

            if (
              scriptURL &&
              scriptURL.includes("firebase-messaging-sw.js") &&
              !scriptURL.endsWith("/firebase-messaging-sw.js")
            ) {
              await registration.unregister();
              console.log(
                "🗑️ Unregistered stale Firebase worker:",
                registration.scope
              );
            }
          }

          // Register the static Firebase messaging service worker
          // IMPORTANT: Must be at root level /firebase-messaging-sw.js
          const registration = await navigator.serviceWorker.register(
            "/firebase-messaging-sw.js",
            {
              scope: "/",
              updateViaCache: "none",
            }
          );
          console.log("✅ Service Worker registered:", registration);
          (window as any).__fcmServiceWorkerRegistration = registration;

          // Wait for the service worker to be ready (with timeout)
          return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
              reject(new Error("Service worker activation timeout"));
            }, 15000); // 15 second timeout

            const cleanup = () => clearTimeout(timeout);

            // If already active, resolve immediately
            if (registration.active) {
              console.log("✅ Service Worker is already active");
              cleanup();
              // Wait a bit to ensure it's fully ready
              setTimeout(() => resolve(registration), 500);
              return;
            }

            // If installing, wait for it to activate
            if (registration.installing) {
              console.log("⏳ Service Worker installing...");
              const installingWorker = registration.installing;

              installingWorker.addEventListener("statechange", () => {
                console.log(
                  `⏳ Service Worker state: ${installingWorker.state}`
                );
                if (installingWorker.state === "activated") {
                  console.log("✅ Service Worker activated");
                  cleanup();
                  // Give it a moment to be fully ready
                  setTimeout(() => resolve(registration), 500);
                } else if (installingWorker.state === "redundant") {
                  cleanup();
                  reject(new Error("Service worker installation failed"));
                }
              });
              return;
            }

            // If waiting, activate it
            if (registration.waiting) {
              console.log("⏳ Service Worker waiting, activating...");
              registration.waiting.postMessage({ type: "SKIP_WAITING" });
              registration.waiting.addEventListener("statechange", () => {
                if (registration.waiting?.state === "activated") {
                  console.log("✅ Service Worker activated from waiting");
                  cleanup();
                  setTimeout(() => resolve(registration), 500);
                }
              });
              return;
            }

            // Fallback: wait for ready state
            navigator.serviceWorker.ready
              .then((readyRegistration) => {
                cleanup();
                console.log("✅ Service Worker ready");
                (window as any).__fcmServiceWorkerRegistration =
                  readyRegistration;
                resolve(readyRegistration);
              })
              .catch((error) => {
                cleanup();
                reject(error);
              });
          });
        } catch (error) {
          console.error("❌ Service Worker registration failed:", error);
          return null;
        }
      };

    // Request notification permission and get token (only after service worker is ready)
    const initializeFCM = async () => {
      // Wait for service worker to be ready
      const registration = await registerServiceWorker();

      if (!registration) {
        console.error(
          "❌ Cannot initialize FCM: Service worker not registered"
        );
        return;
      }

      // Verify service worker is active - wait for it if needed
      let activeWorker = registration.active;
      if (!activeWorker) {
        console.log("⏳ Waiting for service worker to activate...");
        // Wait up to 5 seconds for activation
        for (let i = 0; i < 10; i++) {
          await new Promise((resolve) => setTimeout(resolve, 500));
          activeWorker = registration.active;
          if (activeWorker) {
            console.log("✅ Service worker is now active");
            break;
          }
        }
      }

      if (!activeWorker) {
        console.error("❌ Service worker is not active after waiting");
        return;
      }

      // Ensure service worker is controlling the page
      if (!navigator.serviceWorker.controller) {
        console.log("⏳ Waiting for service worker to control the page...");
        // Wait a bit more for the service worker to take control
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      console.log("✅ Service Worker is ready, initializing FCM...");

      // Only request if user has items in cart or has visited before
      const hasCartItems = cartItems.length > 0;
      const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

      if (hasCartItems || hasVisitedBefore) {
        // Wait a bit before requesting permission (better UX)
        setTimeout(async () => {
          if (isSupported) {
            const hasPermission = await requestPermission();
            if (hasPermission) {
              // Wait a bit more to ensure service worker is fully ready
              await new Promise((resolve) => setTimeout(resolve, 1000));
              await getFCMToken();
            }
          }
        }, 2000); // 2 second delay
      }

      // Mark that user has visited
      localStorage.setItem("hasVisitedBefore", "true");
    };

    initializeFCM();
  }, [isSupported, requestPermission, getFCMToken, cartItems.length]);

  return <>{children}</>;
}

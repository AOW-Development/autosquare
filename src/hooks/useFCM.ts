"use client";

import { useState, useEffect } from "react";
import { messaging, initializeMessaging } from "@/lib/firebase";
import { getToken, onMessage } from "firebase/messaging";
import toast from "react-hot-toast";
import { generateSessionId } from "@/utils/redisCheckout";

interface FCMTokenData {
  token: string;
  sessionId: string;
  userAgent: string;
  timestamp: string;
  url: string;
}

const getFirebaseServiceWorkerRegistration =
  async (): Promise<ServiceWorkerRegistration | null> => {
    if (!("serviceWorker" in navigator)) return null;

    if (window.__fcmServiceWorkerRegistration) {
      return window.__fcmServiceWorkerRegistration;
    }

    const registration = await navigator.serviceWorker.getRegistration(
      "/firebase-messaging-sw.js"
    );

    if (registration) {
      window.__fcmServiceWorkerRegistration = registration;
      return registration;
    }

    try {
      const readyRegistration = await navigator.serviceWorker.ready;
      window.__fcmServiceWorkerRegistration = readyRegistration;
      return readyRegistration;
    } catch (error) {
      console.error("Service worker registration not ready:", error);
      return null;
    }
  };

export const useFCM = () => {
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  const [permission, setPermission] =
    useState<NotificationPermission>("default");

  // Check if browser supports notifications
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSupported("Notification" in window && "serviceWorker" in navigator);
      setPermission(Notification.permission);
    }
  }, []);

  // Request notification permission
  const requestPermission = async (): Promise<boolean> => {
    if (!isSupported) {
      console.warn("Browser does not support notifications");
      return false;
    }

    if (permission === "granted") {
      return true;
    }

    try {
      const permissionResult = await Notification.requestPermission();
      setPermission(permissionResult);

      if (permissionResult === "granted") {
        return true;
      } else {
        toast.error("Notification permission denied");
        return false;
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      toast.error("Failed to request notification permission");
      return false;
    }
  };

  // Get FCM token
  const getFCMToken = async (): Promise<string | null> => {
    // Ensure messaging is initialized
    let currentMessaging = messaging;
    if (!currentMessaging) {
      console.log("⏳ Initializing Firebase Messaging...");
      currentMessaging = await initializeMessaging();
      if (!currentMessaging) {
        console.error("❌ Firebase Messaging is not available");
        toast.error(
          "Failed to initialize notifications. Please refresh the page."
        );
        return null;
      }
    }

    if (permission !== "granted") {
      const hasPermission = await requestPermission();
      if (!hasPermission) {
        return null;
      }
    }

    // Ensure service worker is ready before getting token
    let serviceWorkerRegistration: ServiceWorkerRegistration | null = null;
    if ("serviceWorker" in navigator) {
      try {
        serviceWorkerRegistration =
          await getFirebaseServiceWorkerRegistration();

        if (!serviceWorkerRegistration) {
          throw new Error("Service worker registration not found");
        }

        if (!serviceWorkerRegistration.active) {
          console.warn("Service worker is not active, waiting...");
          // Wait up to 5 seconds for activation
          for (let i = 0; i < 10; i++) {
            await new Promise((resolve) => setTimeout(resolve, 500));
            if (serviceWorkerRegistration.active) {
              console.log("✅ Service worker is now active");
              break;
            }
          }
        }

        if (!serviceWorkerRegistration.active) {
          console.error("❌ Service worker is not active");
          toast.error("Service worker is not active. Please refresh the page.");
          return null;
        }

        // Ensure service worker is controlling the page
        if (!navigator.serviceWorker.controller) {
          console.warn(
            "Service worker is not controlling the page, waiting..."
          );
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        console.log("✅ Service worker is ready for FCM token");
      } catch (error) {
        console.error("Service worker not ready:", error);
        toast.error("Service worker is not ready. Please refresh the page.");
        return null;
      }
    }

    try {
      // VAPID key from environment variable
      const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;

      if (!vapidKey) {
        console.error("VAPID key is not configured");
        return null;
      }

      // Firebase will use the service worker we registered
      const token = await getToken(currentMessaging, {
        vapidKey,
        serviceWorkerRegistration: serviceWorkerRegistration || undefined,
      });

      if (token) {
        setFcmToken(token);
        await saveTokenToRedis(token);
        return token;
      } else {
        console.warn("No FCM token available");
        return null;
      }
    } catch (error: any) {
      console.error("Error getting FCM token:", error);

      // Provide more helpful error messages
      if (error.code === "messaging/failed-service-worker-registration") {
        toast.error("Service worker not ready. Please refresh the page.");
      } else if (error.message?.includes("no active Service Worker")) {
        toast.error("Service worker is not active. Please refresh the page.");
      } else {
        toast.error("Failed to get notification token");
      }
      return null;
    }
  };

  // Save token to Redis
  const saveTokenToRedis = async (token: string): Promise<void> => {
    try {
      const sessionId = generateSessionId();
      const tokenData: FCMTokenData = {
        token,
        sessionId,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        url: window.location.href,
      };

      const response = await fetch("/api-2/fcm-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tokenData),
      });

      if (!response.ok) {
        throw new Error("Failed to save FCM token");
      }

      console.log("✅ FCM token saved to Redis");
    } catch (error) {
      console.error("Error saving FCM token to Redis:", error);
    }
  };

  // Listen for foreground messages
  useEffect(() => {
    if (permission !== "granted") return;

    let unsubscribe: (() => void) | null = null;

    const setupForegroundMessages = async () => {
      let currentMessaging = messaging;
      if (!currentMessaging) {
        currentMessaging = await initializeMessaging();
        if (!currentMessaging) return;
      }

      unsubscribe = onMessage(currentMessaging, (payload) => {
        console.log("Message received in foreground:", payload);

        // Show notification using toast or browser notification
        const notificationTitle =
          payload.notification?.title || "New Notification";
        const notificationOptions: NotificationOptions = {
          body: payload.notification?.body || "",
          icon: payload.notification?.icon || "/favicon.ico",
          badge: "/favicon.ico",
          tag: payload.data?.sessionId || "default",
          requireInteraction: false,
          data: payload.data,
        };

        // Show browser notification
        if (permission === "granted") {
          new Notification(notificationTitle, notificationOptions);
        }

        // Also show toast
        toast.success(notificationTitle, {
          duration: 5000,
        });

        // Handle notification click
        if (payload.data?.url) {
          window.addEventListener("notificationclick", () => {
            window.location.href = payload.data?.url || "/";
          });
        }
      });
    };

    setupForegroundMessages();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [permission]);

  // Initialize FCM on mount
  useEffect(() => {
    if (isSupported && permission === "granted") {
      getFCMToken();
    }
  }, [isSupported, permission]);

  return {
    fcmToken,
    isSupported,
    permission,
    requestPermission,
    getFCMToken,
  };
};

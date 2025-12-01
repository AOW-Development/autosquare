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

/**
 * Check if the current device is iOS (iPhone, iPad, iPod)
 */
const isIOSDevice = (): boolean => {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return false;
  }
  const userAgent = navigator.userAgent || navigator.vendor || "";
  return /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
};

/**
 * Check if the app is running as a PWA (added to home screen)
 * iOS only supports Web Push for PWAs
 */
const isRunningAsPWA = (): boolean => {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as any).standalone === true
  );
};

/**
 * Check if FCM/Web Push is supported on this device
 * iOS Safari only supports it for PWAs on iOS 16.4+
 */
const checkFCMSupport = (): boolean => {
  if (typeof window === "undefined") return false;

  // Basic checks
  if (!("Notification" in window)) {
    console.log("❌ FCM not supported: Notification API not available");
    return false;
  }

  if (!("serviceWorker" in navigator)) {
    console.log("❌ FCM not supported: Service Worker not available");
    return false;
  }

  // iOS-specific checks
  if (isIOSDevice()) {
    // On iOS, Web Push only works for PWAs (added to home screen)
    if (!isRunningAsPWA()) {
      console.log(
        "⚠️ FCM not supported: iOS Safari requires PWA (add to home screen) for push notifications"
      );
      return false;
    }
    console.log("✅ iOS PWA detected - FCM may be supported");
  }

  return true;
};

/**
 * Safely get notification permission status
 * Wrapped in try-catch for iOS compatibility
 */
const getNotificationPermission = (): NotificationPermission => {
  try {
    if (typeof window !== "undefined" && "Notification" in window) {
      return Notification.permission;
    }
  } catch (error) {
    console.warn("Could not access Notification.permission:", error);
  }
  return "default";
};

const getFirebaseServiceWorkerRegistration =
  async (): Promise<ServiceWorkerRegistration | null> => {
    if (!("serviceWorker" in navigator)) return null;

    // On iOS Safari (non-PWA), service workers may not work properly
    if (isIOSDevice() && !isRunningAsPWA()) {
      console.log("⚠️ Skipping service worker on iOS Safari (non-PWA)");
      return null;
    }

    if (window.__fcmServiceWorkerRegistration) {
      return window.__fcmServiceWorkerRegistration;
    }

    try {
      const registration = await navigator.serviceWorker.getRegistration(
        "/firebase-messaging-sw.js"
      );

      if (registration) {
        window.__fcmServiceWorkerRegistration = registration;
        return registration;
      }

      // Use Promise.race with timeout to prevent hanging on iOS
      const timeoutPromise = new Promise<null>((resolve) => {
        setTimeout(() => {
          console.warn("⚠️ Service worker ready timeout");
          resolve(null);
        }, 10000); // 10 second timeout
      });

      const readyRegistration = await Promise.race([
        navigator.serviceWorker.ready,
        timeoutPromise,
      ]);

      if (readyRegistration) {
        window.__fcmServiceWorkerRegistration =
          readyRegistration as ServiceWorkerRegistration;
        return readyRegistration as ServiceWorkerRegistration;
      }
    } catch (error) {
      console.error("Service worker registration not ready:", error);
    }

    return null;
  };

export const useFCM = () => {
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  const [permission, setPermission] =
    useState<NotificationPermission>("default");

  // Check if browser supports notifications (with iOS-specific checks)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const supported = checkFCMSupport();
      setIsSupported(supported);
      setPermission(getNotificationPermission());

      // Log iOS status for debugging
      if (isIOSDevice()) {
        console.log(`📱 iOS device detected. PWA mode: ${isRunningAsPWA()}`);
        console.log(`📱 FCM supported: ${supported}`);
      }
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
        // toast.error("Notification permission denied");
        return false;
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      // toast.error("Failed to request notification permission");
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
        // toast.error(
        //   "Failed to initialize notifications. Please refresh the page."
        // );
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
    if (permission !== "granted" || !isSupported) return;

    // Skip on iOS non-PWA
    if (isIOSDevice() && !isRunningAsPWA()) {
      console.log("⚠️ Skipping foreground message listener on iOS Safari");
      return;
    }

    let unsubscribe: (() => void) | null = null;

    const setupForegroundMessages = async () => {
      try {
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
          const notificationBody = payload.notification?.body || "";
          const notificationIcon = payload.notification?.icon || "/favicon.ico";
          const clickUrl = payload.data?.url || "/";

          // Show browser notification (without invalid 'data' property)
          if (permission === "granted") {
            try {
              const notification = new Notification(notificationTitle, {
                body: notificationBody,
                icon: notificationIcon,
                badge: "/favicon.ico",
                tag: payload.data?.sessionId || "default",
                requireInteraction: false,
              });

              // Handle notification click via the notification object itself
              notification.onclick = async () => {
                // Track the click
                try {
                  await fetch("/api-2/fcm-analytics", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      action: "trackClick",
                      data: {
                        sessionId: payload.data?.sessionId || "",
                        notificationId:
                          payload.data?.notificationId || `notif_${Date.now()}`,
                        title: notificationTitle,
                        url: clickUrl,
                        userAgent: navigator?.userAgent || "",
                      },
                    }),
                  });
                  console.log("✅ Notification click tracked");
                } catch (trackError) {
                  console.warn(
                    "Failed to track notification click:",
                    trackError
                  );
                }

                window.focus();
                if (clickUrl && clickUrl !== "/") {
                  window.location.href = clickUrl;
                }
                notification.close();
              };
            } catch (notifError) {
              console.warn("Could not show browser notification:", notifError);
            }
          }

          // Also show toast as fallback
          toast.success(notificationTitle, {
            duration: 5000,
          });
        });
      } catch (error) {
        console.error("Error setting up foreground messages:", error);
      }
    };

    setupForegroundMessages();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [permission, isSupported]);

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

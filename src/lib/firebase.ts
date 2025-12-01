import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getMessaging, Messaging } from "firebase/messaging";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

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
 * Check if FCM is supported on this platform
 */
const isFCMSupported = (): boolean => {
  if (typeof window === "undefined") return false;
  if (!("Notification" in window)) return false;
  if (!("serviceWorker" in navigator)) return false;

  // iOS Safari only supports Web Push for PWAs
  if (isIOSDevice() && !isRunningAsPWA()) {
    return false;
  }

  return true;
};

// Initialize Firebase
let app: FirebaseApp | null = null;
if (typeof window !== "undefined") {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
}

// Get Firebase Messaging service
// IMPORTANT: Don't initialize messaging immediately - wait for service worker to be registered
let messaging: Messaging | null = null;
let messagingInitialized = false;

// Function to initialize messaging (call this after service worker is registered)
export const initializeMessaging = async (): Promise<Messaging | null> => {
  if (messagingInitialized && messaging) {
    return messaging;
  }

  if (
    typeof window === "undefined" ||
    !("serviceWorker" in navigator) ||
    !app
  ) {
    return null;
  }

  // Skip on iOS Safari (non-PWA) - FCM not supported
  if (isIOSDevice() && !isRunningAsPWA()) {
    console.log(
      "⚠️ FCM not supported on iOS Safari. Add to home screen for push notifications."
    );
    return null;
  }

  if (!app) {
    return null;
  }

  try {
    // Use Promise.race with timeout to prevent hanging on iOS
    const timeoutPromise = new Promise<void>((_, reject) => {
      setTimeout(() => {
        reject(new Error("Service worker ready timeout"));
      }, 10000); // 10 second timeout
    });

    // Ensure service worker is ready before initializing messaging
    await Promise.race([navigator.serviceWorker.ready, timeoutPromise]);

    // Initialize messaging - Firebase will auto-detect the service worker at /firebase-messaging-sw.js
    messaging = getMessaging(app);
    messagingInitialized = true;
    console.log("✅ Firebase Messaging initialized");
    return messaging;
  } catch (error) {
    console.error("Firebase Messaging initialization error:", error);
    return null;
  }
};

// For backward compatibility, try to initialize messaging if service worker is already ready
// IMPORTANT: Only do this on supported platforms (skip iOS Safari non-PWA)
if (typeof window !== "undefined" && "serviceWorker" in navigator && app) {
  // Check FCM support before attempting initialization
  if (isFCMSupported()) {
    // Use timeout to prevent hanging indefinitely on some browsers
    const initTimeout = setTimeout(() => {
      console.log(
        "⏳ Firebase Messaging initialization deferred - service worker taking too long"
      );
    }, 10000);

    // Check if service worker is already ready
    navigator.serviceWorker.ready
      .then(() => {
        clearTimeout(initTimeout);
        if (!messagingInitialized && app) {
          try {
            messaging = getMessaging(app);
            messagingInitialized = true;
            console.log(
              "✅ Firebase Messaging initialized (service worker was already ready)"
            );
          } catch (error) {
            console.warn("Firebase Messaging initialization deferred:", error);
          }
        }
      })
      .catch((error) => {
        clearTimeout(initTimeout);
        // Service worker not ready yet, will be initialized later
        console.log(
          "⏳ Firebase Messaging initialization deferred - waiting for service worker",
          error
        );
      });
  } else {
    console.log(
      "⚠️ FCM not supported on this platform - skipping background initialization"
    );
  }
}

export { app, messaging };
export default app;

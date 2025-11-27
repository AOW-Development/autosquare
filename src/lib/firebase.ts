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

  if (!app) {
    return null;
  }

  try {
    // Ensure service worker is ready before initializing messaging
    await navigator.serviceWorker.ready;

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
if (typeof window !== "undefined" && "serviceWorker" in navigator && app) {
  // Check if service worker is already ready
  navigator.serviceWorker.ready
    .then(() => {
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
    .catch(() => {
      // Service worker not ready yet, will be initialized later
      console.log(
        "⏳ Firebase Messaging initialization deferred - waiting for service worker"
      );
    });
}

export { app, messaging };
export default app;

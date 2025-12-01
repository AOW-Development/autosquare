// Service Worker for Firebase Cloud Messaging
// This file handles background notifications when the site is closed
// IMPORTANT: This file is generated at build time with Firebase config values

// Wrap importScripts in try-catch for better error handling on various browsers
try {
  importScripts(
    "https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js"
  );
  importScripts(
    "https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging-compat.js"
  );
} catch (error) {
  console.error(
    "[firebase-messaging-sw.js] Failed to import Firebase scripts:",
    error
  );
}

// Firebase configuration - will be replaced at build time
// These placeholders will be replaced by the build script
const firebaseConfig = {
  apiKey: "AIzaSyBkTmlzxoObyrUAFYl4SMkQtvPGJXYXuC0",
  authDomain: "medicalapp-bdfca.firebaseapp.com",
  projectId: "medicalapp-bdfca",
  storageBucket: "medicalapp-bdfca.firebasestorage.app",
  messagingSenderId: "608490331869",
  appId: "1:608490331869:web:ab307bbf94a3c57f254534",
  measurementId: "G-8P4QGC97KE",
};

// Initialize Firebase with error handling
let messaging = null;
try {
  if (typeof firebase !== "undefined") {
    firebase.initializeApp(firebaseConfig);
    // Retrieve an instance of Firebase Messaging
    messaging = firebase.messaging();
    console.log("[firebase-messaging-sw.js] Firebase initialized successfully");
  } else {
    console.error(
      "[firebase-messaging-sw.js] Firebase is not defined - scripts may have failed to load"
    );
  }
} catch (error) {
  console.error(
    "[firebase-messaging-sw.js] Failed to initialize Firebase:",
    error
  );
}

// Handle background messages (when site is closed)
// Only set up handler if messaging was initialized successfully
if (messaging) {
  messaging.onBackgroundMessage((payload) => {
    console.log(
      "[firebase-messaging-sw.js] Received background message",
      payload
    );

    try {
      const notificationTitle =
        payload.notification?.title || "New Notification";
      const notificationOptions = {
        body: payload.notification?.body || "",
        icon: payload.notification?.icon || "/favicon.ico",
        badge: "/favicon.ico",
        tag: payload.data?.sessionId || "default",
        data: payload.data || {},
        requireInteraction: false,
        // Add actions for better UX
        actions: payload.data?.url
          ? [
              {
                action: "open",
                title: "Open",
              },
            ]
          : [],
      };

      return self.registration.showNotification(
        notificationTitle,
        notificationOptions
      );
    } catch (error) {
      console.error(
        "[firebase-messaging-sw.js] Error showing notification:",
        error
      );
    }
  });
} else {
  console.warn(
    "[firebase-messaging-sw.js] Messaging not available - background messages will not work"
  );
}

// Track notification click via API
async function trackNotificationClick(data) {
  try {
    // Use self.location.origin to get the base URL in service worker context
    const baseUrl = self.location.origin;
    const response = await fetch(`${baseUrl}/api-2/fcm-analytics`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "trackClick",
        data: {
          sessionId: data?.sessionId || "",
          notificationId: data?.notificationId || `notif_${Date.now()}`,
          title: data?.title || "Unknown",
          url: data?.url || "/",
          userAgent: "", // navigator not available in service worker
          clickedAt: new Date().toISOString(),
        },
      }),
    });
    if (response.ok) {
      console.log("[firebase-messaging-sw.js] Click tracked successfully");
    } else {
      console.warn(
        "[firebase-messaging-sw.js] Click tracking response:",
        response.status
      );
    }
  } catch (error) {
    console.error("[firebase-messaging-sw.js] Failed to track click:", error);
  }
}

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  console.log("[firebase-messaging-sw.js] Notification click received.");

  event.notification.close();

  const notificationData = event.notification.data || {};
  const urlToOpen = notificationData.url || "/";
  const action = event.action;

  // Handle action button clicks
  if (action === "open" || !action) {
    event.waitUntil(
      // First track the click, then open the window
      trackNotificationClick(notificationData)
        .then(() => {
          return clients.matchAll({
            type: "window",
            includeUncontrolled: true,
          });
        })
        .then((clientList) => {
          // Check if there's already a window/tab open with the target URL
          for (let i = 0; i < clientList.length; i++) {
            const client = clientList[i];
            if (
              client.url &&
              client.url.includes(urlToOpen) &&
              "focus" in client
            ) {
              return client.focus();
            }
          }
          // If not, open a new window/tab
          if (clients.openWindow) {
            return clients.openWindow(urlToOpen);
          }
        })
        .catch((error) => {
          console.error(
            "[firebase-messaging-sw.js] Error handling notification click:",
            error
          );
        })
    );
  }
});

// Handle service worker activation
self.addEventListener("activate", (event) => {
  console.log("[firebase-messaging-sw.js] Service worker activated");
  event.waitUntil(
    clients.claim().then(() => {
      console.log(
        "[firebase-messaging-sw.js] Service worker is controlling clients"
      );
    })
  );
});

// Handle service worker installation
self.addEventListener("install", (event) => {
  console.log("[firebase-messaging-sw.js] Service worker installing");
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

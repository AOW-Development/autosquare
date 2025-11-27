// Service Worker for Firebase Cloud Messaging
// This file handles background notifications when the site is closed
// IMPORTANT: This file is generated at build time with Firebase config values

importScripts(
  "https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging-compat.js"
);

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages (when site is closed)
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message",
    payload
  );

  const notificationTitle = payload.notification?.title || "New Notification";
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
});

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  console.log("[firebase-messaging-sw.js] Notification click received.");

  event.notification.close();

  const urlToOpen = event.notification.data?.url || "/";
  const action = event.action;

  // Handle action button clicks
  if (action === "open" || !action) {
    event.waitUntil(
      clients
        .matchAll({ type: "window", includeUncontrolled: true })
        .then((clientList) => {
          // Check if there's already a window/tab open with the target URL
          for (let i = 0; i < clientList.length; i++) {
            const client = clientList[i];
            if (client.url.includes(urlToOpen) && "focus" in client) {
              return client.focus();
            }
          }
          // If not, open a new window/tab
          if (clients.openWindow) {
            return clients.openWindow(urlToOpen);
          }
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

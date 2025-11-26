declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    __fcmServiceWorkerRegistration?: ServiceWorkerRegistration;
  }
}

export {};

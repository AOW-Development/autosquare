// "use client";

// import { usePathname, useSearchParams } from "next/navigation";
// import { useEffect, Suspense } from "react";

// function RouteChangeTrackerInner() {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const fullPath =
//       pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

//     // 1️⃣ Notify GTM
//     window.dataLayer = window.dataLayer || [];
//     window.dataLayer.push({
//       event: "virtual_pageview",
//       page_path: fullPath,
//       page_location: window.location.href,
//     });
//     console.log("📄 virtual_pageview pushed to dataLayer:", fullPath);

//     // 2️⃣ Notify GA4 / Google Ads
//     if (typeof window.gtag === "function") {
//       window.gtag("event", "page_view", {
//         page_path: fullPath,
//         page_location: window.location.href,
//       });
//       console.log("📊 gtag page_view sent for:", fullPath);
//     } else {
//       console.warn("⚠️ gtag not available yet at route change:", fullPath);
//     }
//   }, [pathname, searchParams]);

//   return null;
// }

// export default function RouteChangeTracker() {
//   return (
//     <Suspense fallback={null}>
//       <RouteChangeTrackerInner />
//     </Suspense>
//   );
// }


"use client";

// components/RouteChangeTracker.tsx
//
// ─── WHAT CHANGED AND WHY ────────────────────────────────────────────────────
// REMOVED: The direct window.gtag("event", "page_view", ...) call that was
//          talking to GA4 bypassing GTM entirely. This was the old approach.
// ADDED:   Import of trackPageView from lib/gtm.ts
// RESULT:  All page view reporting now flows through the single correct path:
//          Next.js → window.dataLayer → GTM → GA4
//          GTM's "virtual_pageview" Custom Event trigger picks this up and
//          fires your GA4 page_view tag in response.
//
// Everything else in this file is unchanged — the Suspense wrapper,
// the pathname/searchParams logic, all of it is exactly as it was.

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { trackPageView } from "@/lib/gtm"; // ← NEW: import from centralized utility

function RouteChangeTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fullPath =
      pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

    // This is the single correct way to report page views.
    // trackPageView pushes a "virtual_pageview" event to window.dataLayer.
    // GTM receives it and fires your GA4 tag — no direct GA4 calls from code.
    trackPageView(fullPath); // ← CHANGED: was window.dataLayer.push + window.gtag

    // REMOVED: The window.gtag("event", "page_view", ...) call that was here.
    // That was talking to GA4 directly, bypassing GTM entirely.
    // Now GTM handles everything after the dataLayer push.

  }, [pathname, searchParams]);

  return null;
}

export default function RouteChangeTracker() {
  return (
    <Suspense fallback={null}>
      <RouteChangeTrackerInner />
    </Suspense>
  );
}
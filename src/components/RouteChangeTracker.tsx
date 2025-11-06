"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function RouteChangeTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fullPath =
      pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

    // 1️⃣ Notify GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "virtual_pageview",
      page_path: fullPath,
      page_location: window.location.href,
    });
    console.log("📄 virtual_pageview pushed to dataLayer:", fullPath);

    // 2️⃣ Notify GA4 / Google Ads
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: fullPath,
        page_location: window.location.href,
      });
      console.log("📊 gtag page_view sent for:", fullPath);
    } else {
      console.warn("⚠️ gtag not available yet at route change:", fullPath);
    }
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

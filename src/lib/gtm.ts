 

// lib/gtm.ts
//
// ─── WHAT THIS FILE IS ───────────────────────────────────────────────────────
// This is the SINGLE source of truth for all Google tracking in the entire app.
// No other file should ever touch window.dataLayer directly — everything flows
// through the functions exported here.
//
// ─── WHY THIS APPROACH ───────────────────────────────────────────────────────
// Your Next.js app pushes structured messages into window.dataLayer.
// GTM listens to that array and decides which tags to fire (GA4, Google Ads).
// This separation means if you ever change analytics providers, you update GTM
// config — not your codebase. One file to rule them all.

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

// Describes a single product item used across all ecommerce events.
// The field names here (item_id, item_name, etc.) are GA4's official spec —
// GTM's "Send Ecommerce Data" feature reads these exact field names.
export interface GTMProduct {
  item_id: string;
  item_name: string;
  item_category?: string; // e.g. "Engine" or "Transmission"
  price: number;
  quantity: number;
}

type ProductCategorySource = {
  part?: string;
  title?: string;
  name?: string;
};

export const getProductCategory = ({
  part,
  title,
  name,
}: ProductCategorySource): string => {
  if (part) return part;

  const label = `${title ?? ""} ${name ?? ""}`.toLowerCase();

  if (label.includes("transmission")) return "Transmission";
  if (label.includes("engine")) return "Engine";

  return "";
};

// ─── Internal Helper ─────────────────────────────────────────────────────────
// You MUST push { ecommerce: null } before every ecommerce event.
// Without this, GTM merges new ecommerce data ON TOP of the previous event's
// data — so a purchase event could accidentally include products from a
// view_item that fired earlier in the same session.
const clearEcommerce = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ecommerce: null });
};

// ─── Page View ────────────────────────────────────────────────────────────────
// Called by RouteChangeTracker on every client-side navigation.
// GTM listens for "virtual_pageview" and fires your GA4 page_view tag.
export const trackPageView = (path: string) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "virtual_pageview",
    page_path: path,
    page_location: window.location.href,
  });
};

// ─── Product View ─────────────────────────────────────────────────────────────
// Fire when a user lands on a product detail page and product data is ready.
// Maps to GTM "GA4 Product View" tag listening for "view_item".
export const trackProductView = (product: GTMProduct, value: number) => {
  clearEcommerce();
  window.dataLayer.push({
    event: "view_item", // must match GTM Custom Event trigger name exactly
    ecommerce: {
      currency: "USD",
      value,
      items: [product],
    },
  });
};

// ─── Add to Cart ──────────────────────────────────────────────────────────────
// Fire after the user commits to adding a product.
// Maps to GTM "GA4 Add to Cart" tag listening for "add_to_cart".
export const trackAddToCart = (product: GTMProduct, value: number) => {
  clearEcommerce();
  window.dataLayer.push({
    event: "add_to_cart",
    ecommerce: {
      currency: "USD",
      value,
      items: [product],
    },
  });
};

// ─── Remove from Cart ─────────────────────────────────────────────────────────
// Fire BEFORE removing the item from your cart store — once removeItem() runs
// the item data is gone and you can't access price/name anymore.
// Maps to GTM trigger listening for "remove_from_cart".
export const trackRemoveFromCart = (product: GTMProduct, value: number) => {
  clearEcommerce();
  window.dataLayer.push({
    event: "remove_from_cart",
    ecommerce: {
      currency: "USD",
      value,
      items: [product],
    },
  });
};

// ─── Begin Checkout ───────────────────────────────────────────────────────────
// Fire once when the user first lands on the checkout page.
// Maps to GTM "GA4 -Checkout" tag listening for "begin_checkout".
export const trackBeginCheckout = (items: GTMProduct[], cartTotal: number) => {
  clearEcommerce();
  window.dataLayer.push({
    event: "begin_checkout",
    ecommerce: {
      currency: "USD",
      value: cartTotal,
      items,
    },
  });
};

// ─── Purchase ─────────────────────────────────────────────────────────────────
// The most critical event. Fire ONLY after the order is confirmed in your backend.
// Firing too early (e.g. on page mount) would count conversions for orders
// that ultimately fail — wasting your ad budget.
// Maps to GTM "GA4 - Purchase" and "GA Conversion Tracking" tags.
export const trackPurchase = ({
  orderId,
  orderTotal,
  tax = 0,
  shipping = 0,
  items,
}: {
  orderId: string;
  orderTotal: number;
  tax?: number;
  shipping?: number;
  items: GTMProduct[];
}) => {
  clearEcommerce();
  window.dataLayer.push({
    event: "purchase",
    ecommerce: {
      transaction_id: orderId, // GA4 + GTM use this for deduplication
      value: orderTotal,
      tax,
      shipping,
      currency: "USD",
      items,
    },
  });
};

// ─── Form Submit ──────────────────────────────────────────────────────────────
// Fire when a user submits a lead form, contact form, or part request.
// Maps to GTM trigger listening for "form_submit".
export const trackFormSubmit = (formName: string) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "form_submit",
    form_name: formName, // e.g. "contact_form", "part_request"
  });
};

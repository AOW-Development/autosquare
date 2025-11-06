'use client';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
    __conversionSentFor?: string;
  }
}

interface GtagConversionProps {
  orderId: string;
  orderTotal: number;
  currency?: string;
  items?: {
    itemId: string;
    itemName: string;
    price: number;
    quantity: number;
  }[];
}

export default function GtagConversion({
  orderId,
  orderTotal,
  currency = 'USD',
  items = [],
}: GtagConversionProps) {
  useEffect(() => {
    if (!orderId || typeof window === 'undefined') return;

    // Prevent double firing
    if (window.__conversionSentFor === orderId) return;
    window.__conversionSentFor = orderId;

    window.dataLayer = window.dataLayer || [];

    console.log('🔹 Sending GA4 + Google Ads conversion:', { orderId, orderTotal, currency, items });

    // ✅ 1️⃣ Send GA4 Purchase Event
    window.dataLayer.push({
      event: 'purchase',
      ecommerce: {
        transaction_id: orderId,
        value: orderTotal,
        currency,
        items: items.map((item) => ({
          item_id: item.itemId,
          item_name: item.itemName,
          price: item.price,
          quantity: item.quantity,
        })),
      },
    });

    // ✅ 2️⃣ Send Google Ads Conversion Event (AW Tag)
    // if (typeof window.gtag === 'function') {
    //   window.gtag('event', 'conversion', {
    //     send_to: 'AW-17273467579/qtoECO6FibkbELvl0KxA',
    //     value: orderTotal,
    //     currency,
    //     transaction_id: orderId,
    //   });
    // } else {
    //   // fallback if gtag not yet loaded
    //   window.dataLayer.push({
    //     event: 'conversion',
    //     send_to: 'AW-17273467579/qtoECO6FibkbELvl0KxA',
    //     value: orderTotal,
    //     currency,
    //     transaction_id: orderId,
    //   });
    // }
  }, [orderId, orderTotal, currency, items]);

  return null;
}

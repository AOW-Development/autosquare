'use client';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
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
    if (!orderId) return;

    // Ensure global gtag exists
    if (typeof window === 'undefined') return;

    // Initialize dataLayer if missing
    window.dataLayer = window.dataLayer || [];

    // Log for debugging
    console.log('🔹 Sending GA purchase event:', { orderId, orderTotal, currency, items });

    // Push purchase event to GA4
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

    // Trigger Google Ads conversion
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'purchase', {
        send_to: 'AW-17273467579/h4FRCNLj86cbELvl0KxA', // ✅ make sure this matches your Ads conversion ID
        value: orderTotal,
        currency,
        transaction_id: orderId,
      });
      console.log('✅ Google Ads conversion event sent');
    } else {
      console.warn('⚠️ window.gtag not defined - check your <Script> setup.');
    }
  }, [orderId, orderTotal, currency, items]);

  return null;
}

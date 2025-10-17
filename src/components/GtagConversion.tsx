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

    if (typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer || [];

    console.log('🔹 Sending GA4 purchase event:', { orderId, orderTotal, currency, items });

    // GA4 purchase event only
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

  }, [orderId, orderTotal, items, currency]);

  return null;
}

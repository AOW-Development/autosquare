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

    // Push purchase event to dataLayer for Google Analytics
    window.dataLayer = window.dataLayer || [];
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

    // Trigger Google Ads conversion using the <script> format
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17273467579/h4FRCNLj86cbELvl0KxA',
        value: orderTotal,        // Dynamic order total
        currency: currency,      // Default to USD
        transaction_id: orderId, // Dynamic order ID
      });
    }

    console.log('Conversion event pushed:', orderId, orderTotal, items);
  }, [orderId, orderTotal, items, currency]);

  return null;
}

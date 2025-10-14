'use client';
import React, { useEffect } from 'react';


declare global {
  interface Window {
    dataLayer: any[];
  }
}
interface GtagConversionProps {
  orderId: string;
  orderTotal: number;
  currency?: string;
  items: {
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
  items,
}: GtagConversionProps) {
  useEffect(() => {
    if (!orderId || items.length === 0) return;

    // Push purchase event to dataLayer
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

    // Trigger Google Ads conversion
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17273467579/h4FRCNLj86cbELvl0KxA',
      });
    }

    console.log('Conversion event pushed:', orderId, items);
  }, [orderId, orderTotal, items, currency]);

  return null; // No <script> needed
}

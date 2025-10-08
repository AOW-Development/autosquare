// components/GtagConversion.tsx
'use client';

import React from 'react';

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
  const dataLayerScript = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'purchase',
      ecommerce: {
        transaction_id: '${orderId}',
        value: ${orderTotal},
        currency: '${currency}',
        items: [
          ${items
            .map(
              (item) => `{
                item_id: '${item.itemId}',
                item_name: '${item.itemName}',
                price: ${item.price},
                quantity: ${item.quantity}
              }`
            )
            .join(',')}
        ]
      }
    });

    gtag('event', 'conversion', {
      'send_to': 'AW-17273467579/h4FRCNLj86cbELvl0KxA'
    });
  `;

  return <script dangerouslySetInnerHTML={{ __html: dataLayerScript }} />;
}

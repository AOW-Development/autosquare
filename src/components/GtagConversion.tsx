// components/GtagConversion.tsx
export default function GtagConversion() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('event', 'conversion', {
            'send_to': 'AW-17273467579/h4FRCNLj86cbELvl0KxA'
          });
        `,
      }}
    />
  );
}

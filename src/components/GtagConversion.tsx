// components/GtagConversion.tsx
export default function GtagConversion() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          gtag('event', 'conversion', {
            'send_to': 'AW-17273467579/h4FRCNLj86cbELvl0KxA'
          });
        `,
      }}
    />
  );
}

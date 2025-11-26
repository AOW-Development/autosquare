import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Exo_2, Audiowide } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo-2",
  weight: ["400", "700"],
});
const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-audiowide",
});
import { getMetadataForPath } from "@/utils/metadata";
import RouteChangeTracker from "@/components/RouteChangeTracker";
import FCMProvider from "@/components/FCMProvider";
import AbandonedCartNotifier from "@/components/AbandonedCartNotifier";

// Generate metadata based on the current path
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  // Get the current pathname from headers
  const { headers } = await import("next/headers");
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";

  // Return metadata for the current path
  return getMetadataForPath(pathname);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${exo2.className} ${inter.variable} ${audiowide.variable}`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="mOkOiIA-Z0XcSgcmnQZ4nfwfqDWnm8W4UinaW5fpf8I"
        />
        <meta
          name="google-site-verification"
          content="cbWtFgAaDKGwqHjipxrO9D_8KrKucA6ZTzSbB4QMbJE"
        />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MDBDJMW3');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* 
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17273467579"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'AW-17273467579');
                `,
              }}
            /> 
            */}

        <Script id="gtag-phone-conversion" strategy="afterInteractive">
          {`
            // ✅ Ensure gtag and dataLayer exist before using them
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){ dataLayer.push(arguments); };

            // ✅ Load the gtag library if it hasn't been loaded yet
            if (!document.getElementById('gtag-js')) {
              const gtagScript = document.createElement('script');
              gtagScript.id = 'gtag-js';
              gtagScript.async = true;
              gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17273467579';
              document.head.appendChild(gtagScript);
            }

            // ✅ Initialize and fire phone conversion config
            gtag('js', new Date());
            gtag('config', 'AW-17273467579/H6LQCJmP36kbELvl0KxA', {
              'phone_conversion_number': '(888) 338-2540'
            });
          `}
        </Script>

        {/* End Google Tag Manager */}
      </head>
      <body className="antialiased">
        <Toaster position="top-center" />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MDBDJMW3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <RouteChangeTracker />
        <FCMProvider>
          <AbandonedCartNotifier />
          <Header />
          {children}
          <Footer />
        </FCMProvider>
      </body>
    </html>
  );
}

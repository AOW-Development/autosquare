import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Exo_2, Audiowide } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MDBDJMW3');`,
          }}
        />
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

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
// To use Inter: className="font-inter"
// To use Exo 2: className="font-exo-2"
// To use Audiowide: className="font-audiowide"

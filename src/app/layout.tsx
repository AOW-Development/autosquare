import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Exo_2, Audiowide } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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

export const metadata: Metadata = {
  title: "Parts Central",
  description: "Parts Central",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${exo2.className} ${audiowide.variable}`}
    >
      <body className="font-custom-stack antialiased">
        {/* TEST: Font family visual check */}
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

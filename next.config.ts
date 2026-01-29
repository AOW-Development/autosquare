import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.us-east-1.amazonaws.com",
        pathname: "/partscentral.us/**",
      },
      {
        protocol: "https",
        hostname: "partscentral-uploads.s3.us-west-2.amazonaws.com",
        pathname: "/**",
      },
    ],

  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
  return [

    { source: '/account/privacyPolicy', destination: '/account/privacy-policy', statusCode: 301 },
    { source: '/account/cookiePolicy', destination: '/account/cookie-policy', statusCode: 301 },
    { source: '/account/warrantyAndReturn', destination: '/account/warranty-and-return', statusCode: 301 },
    { source: '/account/shippingPaymentPolicy', destination: '/account/shipping-payment-policy', statusCode: 301 },
    { source: '/aboutUs', destination: '/about-us', statusCode: 301 },
    { source: '/autoParts', destination: '/auto-parts', statusCode: 301 },
    { source: '/contactUs', destination: '/contact-us', statusCode: 301 },
    { source: '/Testimonials', has: [{ type: 'host', value: 'partscentral.us' }], destination: '/testimonials', statusCode: 301 },
    { source: '/Blog/blogListing', destination: '/blog/blog-listing', statusCode: 301 },
    { source: '/catalog', destination: '/', statusCode: 301 },
  ];
}

};

export default nextConfig;

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
      {
        source: '/account/privacyPolicy',
        destination: '/account/privacy-policy',
        permanent: true,
      },
      {
        source: '/account/cookiePolicy',
        destination: '/account/cookie-policy',
        permanent: true,
      },
      {
        source: '/account/warrantyAndReturn',
        destination: '/account/warranty-and-return',
        permanent: true,
      },
      {
        source: '/account/shippingPaymentPolicy',
        destination: '/account/shipping-payment-policy',
        permanent: true,
      },
      {
        source: '/aboutUs',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/autoParts',
        destination: '/auto-parts',
        permanent: true,
      },

      {
        source: '/contactUs',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/Testimonials',
        has: [
          {
            type: 'host',
            value: 'partscentral.us',
          },
        ],
        destination: '/testimonials',
        permanent: true,
      },
      {
        source: '/Blog/blogListing',
        destination: '/blog/blog-listing',
        permanent: true,
      },
      {
        source: '/blog/blogDetails',
        destination: '/blog/blog-details',
        permanent: true,
      },
      {
        source: '/account/submitTicket',
        destination: '/account/submit-ticket',
        permanent: true,
      },
      {
        source: '/account/paymentInfo',
        destination: '/account/payment-info',
        permanent: true,
      },
      {
        source: '/account/trackOrder',
        destination: '/account/track-order',
        permanent: true,
      },
      {
        source: '/account/signIn',
        destination: '/account/sign-in',
        permanent: true,
      },
      {
        source: '/account/signUp',
        destination: '/account/sign-up',
        permanent: true,
      },
      {
        source: '/account/forgotPassword',
        destination: '/account/forgot-password',
        permanent: true,
      },
      {
        source: '/account/payMethod',
        destination: '/account/pay-method',
        permanent: true,
      },
      {
        source: '/account/orderHistory',
        destination: '/account/order-history',
        permanent: true,
      },
      {
        source: '/account/paymentDetails',
        destination: '/account/payment-details',
        permanent: true,
      },
       {
        source: '/account/t&c',
        destination: '/account/terms-and-condition',
        permanent: true,
      },
      {
        source: '/account/orderDetails',
        destination: '/account/order-details',
        permanent: true,
      },
      {
        source: '/cookie-policy',
        destination: '/account/cookie-policy',
        permanent: true,
      },
      {
        source: '/2008-suzuki-xl7-transmission-mt-grand-2-7l-145000',
        destination: '/product/2008-suzuki-xl7-transmission-mt-grand-2-7l-145000',
        permanent: true,
      },
      {
        source: '/account/warrantyAndPolicy',
        destination: '/account/warranty-policy',
        permanent: true,
      },

      {
        source: '/catalog',
        destination:'/',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;

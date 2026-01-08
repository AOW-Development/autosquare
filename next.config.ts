import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ['partscentral-uploads.s3.us-west-2.amazonaws.com'],

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
      // {
      //   source: '/Testimonials',
      //   has: [
      //     {
      //       type: 'host',
      //       value: 'partscentral.us',
      //     },
      //   ],
      //   destination: '/testimonials',
      //   permanent: true,
      // },
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
    ];
  },
};

export default nextConfig;

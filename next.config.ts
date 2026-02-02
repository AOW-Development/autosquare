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
        statusCode: 301,
      },
      {
        source: '/account/cookiePolicy',
        destination: '/account/cookie-policy',
        statusCode: 301,
      },
      {
        source: '/account/warrantyAndReturn',
        destination: '/account/warranty-and-return',
        statusCode: 301,
      },
      {
        source: '/account/shippingPaymentPolicy',
        destination: '/account/shipping-payment-policy',
        statusCode: 301,
      },
      {
        source: '/aboutUs',
        destination: '/about-us',
        statusCode: 301,
      },
      {
        source: '/autoParts',
        destination: '/auto-parts',
        statusCode: 301,
      },
      {
        source: '/contactUs',
        destination: '/contact-us',
        statusCode: 301,
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
      //   statusCode: 301,
      // },
      {
        source:'/Testimonials',
        destination: '/account/Testimonials',
        statusCode: 301,
      },

      {
        source: '/$',
        destination:'/',
        statusCode:301,
      },
      {
        source: '/Blog/blogListing',
        destination: '/blog/blog-listing',
        statusCode: 301,
      },
      {
        source: '/blog/blogDetails',
        destination: '/blog/blog-details',
        statusCode: 301,
      },
      {
        source: '/account/submitTicket',
        destination: '/account/submit-ticket',
        statusCode: 301,
      },
      {
        source: '/account/paymentInfo',
        destination: '/account/payment-info',
        statusCode: 301,
      },
      {
        source: '/account/trackOrder',
        destination: '/account/track-order',
        statusCode: 301,
      },
      {
        source: '/account/signIn',
        destination: '/account/sign-in',
        statusCode: 301,
      },
      {
        source: '/account/signUp',
        destination: '/account/sign-up',
        statusCode: 301,
      },
      {
        source: '/account/forgotPassword',
        destination: '/account/forgot-password',
        statusCode: 301,
      },
      {
        source: '/account/payMethod',
        destination: '/account/pay-method',
        statusCode: 301,
      },
      {
        source: '/account/orderHistory',
        destination: '/account/order-history',
        statusCode: 301,
      },
      {
        source: '/account/paymentDetails',
        destination: '/account/payment-details',
        statusCode: 301,
      },
      {
        source: '/account/t&c',
        destination: '/account/terms-and-condition',
        statusCode: 301,
      },
      {
        source: '/account/orderDetails',
        destination: '/account/order-details',
        statusCode: 301,
      },
      {
        source: '/cookie-policy',
        destination: '/account/cookie-policy',
        statusCode: 301,
      },
      {
        source: '/2008-suzuki-xl7-transmission-mt-grand-2-7l-145000',
        destination: '/product/2008-suzuki-xl7-transmission-mt-grand-2-7l-145000',
        statusCode: 301,
      },
      {
        source: '/account/warrantyAndPolicy',
        destination: '/account/warranty-policy',
        statusCode: 301,
      },
      {
        source: '/catalog',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/used-auto-parts/mercedes-benz',
        destination: '/used-auto-parts/mercedes',
        statusCode: 301,
      }
    ];
  },
};
 
export default nextConfig;

 

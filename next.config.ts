import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ['partscentral-uploads.s3.us-west-2.amazonaws.com'],
  
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

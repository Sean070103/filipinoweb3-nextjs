import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

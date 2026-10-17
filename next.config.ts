import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // This project's Vercel plan returns 402 for /_next/image, so raster
    // photos fail in production while the same files load from /public locally.
    unoptimized: true,
  },
};

export default nextConfig;

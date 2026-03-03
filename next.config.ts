import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/scoot_website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

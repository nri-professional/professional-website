import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Enables static site export
  output: 'export',
  basePath: '/professional-website',
  assetPrefix: '/professional-website/',
};

export default nextConfig;
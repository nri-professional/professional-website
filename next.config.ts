import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables static site export
  output: 'export',
  basePath: '/professional-website',  // your repo name
  assetPrefix: '/professional-website/', // ensures _next/static works
};

export default nextConfig;

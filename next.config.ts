import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If using a custom domain or subdirectory, uncomment and set basePath
  // basePath: '/ayurmetabolicsfit', // Only if deploying to GitHub Pages with repo name in URL
  // trailingSlash: true,
};

export default nextConfig;

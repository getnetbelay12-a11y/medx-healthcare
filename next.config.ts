import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

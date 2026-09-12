import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  allowedDevOrigins: ["127.0.0.1"],
  experimental: {
    useTypeScriptCli: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

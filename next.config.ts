import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/t8pgof6z62g7/**",
        search: "",
      },
    ],
    unoptimized: true,
  },
  eslint: {
    // ビルド時に ESLint のチェックを無視する（デフォルト値）
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

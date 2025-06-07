import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ビルド時に ESLint のチェックを無視する（デフォルト値）
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
      "@components": path.resolve(__dirname, "components"),
      "@app": path.resolve(__dirname, "app"),
      "@lib": path.resolve(__dirname, "lib"),
      "@utils": path.resolve(__dirname, "utils"),
    };
    return config;
  },
};

export default nextConfig;

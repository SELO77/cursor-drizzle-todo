import type { NextConfig } from "next";
import path from "path";
import withPWA from 'next-pwa';

const nextConfig: NextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})({
  /* config options here */
  webpack: (config: any) => {
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
});

export default nextConfig;

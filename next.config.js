/** @type {import('next').NextConfig} */
const path = require('path');
const withPWA = require('next-pwa');

const nextConfig = withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
})({
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
});

module.exports = nextConfig; 
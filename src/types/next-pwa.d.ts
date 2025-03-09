declare module 'next-pwa' {
    import { NextConfig } from 'next';

    type PWAConfig = {
        dest?: string;
        register?: boolean;
        skipWaiting?: boolean;
        disable?: boolean;
        [key: string]: string | boolean | undefined;
    };

    function withPWA(config: PWAConfig): (nextConfig: NextConfig) => NextConfig;

    export default withPWA;
} 
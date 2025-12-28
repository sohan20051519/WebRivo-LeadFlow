import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    devIndicators: {
        // @ts-ignore - Valid config to hide indicators
        appIsrStatus: false,
        buildActivity: false,
    }
};

export default nextConfig;

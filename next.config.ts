import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    agentUpgrade: "security",
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();

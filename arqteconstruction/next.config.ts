import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pg", "@prisma/adapter-pg"],
  experimental: {
    // Set default max duration for all server actions to 30s
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@confam/ui", "@confam/backend"],
};

export default nextConfig;

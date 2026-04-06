import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kid-lab",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

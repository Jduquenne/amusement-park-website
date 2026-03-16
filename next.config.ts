import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/amusement-park-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

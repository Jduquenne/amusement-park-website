import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Si ton repo GitHub n'est pas à la racine du domaine (ex: username.github.io/amusement-park-website),
  // décommente et adapte la ligne ci-dessous :
  // basePath: "/amusement-park-website",
};

export default nextConfig;

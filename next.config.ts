import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: ["images.unsplash.com", "tailwindcss.com"], // allow external images
  },
};

export default nextConfig;

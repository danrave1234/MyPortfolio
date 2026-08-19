import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF where the browser accepts it, WebP otherwise. Source files are
    // already WebP; this lets Next go smaller still on modern clients.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

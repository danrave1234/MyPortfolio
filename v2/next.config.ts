import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  devIndicators: false,
  async redirects() {
    return [{
      source: "/Resume%20with%20QR%20with%20picture.pdf",
      destination: "/danrave-keh-resume.pdf",
      permanent: true,
    }];
  },
  images: {
    // Serve AVIF where the browser accepts it, WebP otherwise. Source files are
    // already WebP; this lets Next go smaller still on modern clients.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

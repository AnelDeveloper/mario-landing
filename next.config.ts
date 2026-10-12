import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the dev server (HMR) to be opened via 127.0.0.1 as well as localhost.
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    // Next 16 serves only allowlisted qualities: 75 (default, CTA background under its
    // .82 overlay) and 90 (hero photo and portrait, which the prototype shows as full PNGs).
    qualities: [75, 90],
  },
};

export default nextConfig;

import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bryanp25.sg-host.com",
        pathname: "/**",
      },
    ],
  },
};

export default withNextVideo(nextConfig);
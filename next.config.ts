import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // www → non-www canonical redirect (fixes "alternate page with proper canonical" in GSC)
  // Runs at Next.js routing level — before proxy middleware, no loop risk.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.cetekne.com" }],
        destination: "https://cetekne.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

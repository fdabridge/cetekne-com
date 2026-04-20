import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // www redirect is handled entirely in Vercel Dashboard (Domains settings).
  // Do NOT add a www→cetekne.com redirect here while Vercel has
  // cetekne.com→www.cetekne.com active — it creates an infinite loop.
};

export default nextConfig;

import { NextRequest, NextResponse } from "next/server";
import { locations } from "@/lib/locations";

const ROOT_DOMAIN = "cetekne.com";

// Build a Set of valid slugs once at module load — O(1) lookup
const locationSlugs = new Set(locations.map((l) => l.slug));

export function proxy(request: NextRequest) {
  // ✅ FIX: read the HOST header — this is what Vercel passes for the
  // original incoming request (e.g. "istanbul.cetekne.com").
  // request.nextUrl.hostname is the *internal* Next.js URL and never
  // contains the subdomain.
  const rawHost = request.headers.get("host") ?? "";

  // Strip port in case of local overrides (e.g. "istanbul.cetekne.com:3000")
  const hostname = rawHost.split(":")[0].toLowerCase();

  // Debug — visible in Vercel Function logs
  console.log("[proxy] host:", rawHost, "→ hostname:", hostname);

  // Skip local dev and Vercel preview deployments
  if (
    hostname === "localhost" ||
    hostname.endsWith(".localhost") ||
    hostname.endsWith(".vercel.app")
  ) {
    return NextResponse.next();
  }

  // www → root (301)
  if (hostname === `www.${ROOT_DOMAIN}`) {
    return NextResponse.redirect(
      `https://${ROOT_DOMAIN}${request.nextUrl.pathname}`,
      { status: 301 }
    );
  }

  // Subdomain detection: istanbul.cetekne.com → cetekne.com/istanbul-ce-belgesi
  if (hostname.endsWith(`.${ROOT_DOMAIN}`)) {
    // e.g. "istanbul.cetekne.com" → "istanbul"
    const subdomain = hostname.slice(0, hostname.length - ROOT_DOMAIN.length - 1);

    console.log("[proxy] subdomain:", subdomain, "| known location:", locationSlugs.has(subdomain));

    // Only redirect for slugs that actually exist as location pages
    if (locationSlugs.has(subdomain)) {
      return NextResponse.redirect(
        `https://${ROOT_DOMAIN}/${subdomain}-ce-belgesi`,
        { status: 301 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};


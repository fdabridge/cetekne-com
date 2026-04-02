import { NextRequest, NextResponse } from "next/server";
import { locations } from "@/lib/locations";

const ROOT_DOMAIN = "cetekne.com";

// Build a Set of valid slugs once at module load — O(1) lookup
const locationSlugs = new Set(locations.map((l) => l.slug));

export function proxy(request: NextRequest) {
  const rawHost = request.headers.get("host") ?? "";
  // Strip port (e.g. "cetekne.com:3000" → "cetekne.com")
  const hostname = rawHost.split(":")[0].toLowerCase();

  console.log("[proxy] hostname:", hostname);

  // ── Passthrough: never redirect these hosts ──────────────────────────────
  // Redirecting www or the root domain here causes infinite loops because
  // Vercel's own infrastructure may re-route the request back through proxy.
  // www → naked canonicalisation is handled in the Vercel dashboard instead.
  if (
    hostname === ROOT_DOMAIN ||           // cetekne.com
    hostname === `www.${ROOT_DOMAIN}` ||  // www.cetekne.com
    hostname === "localhost" ||
    hostname.endsWith(".localhost") ||
    hostname.includes(".vercel.app")      // *.vercel.app preview deployments
  ) {
    return NextResponse.next();
  }

  // ── Subdomain redirect ───────────────────────────────────────────────────
  // istanbul.cetekne.com  →  https://cetekne.com/istanbul-ce-belgesi (301)
  if (hostname.endsWith(`.${ROOT_DOMAIN}`)) {
    const subdomain = hostname.slice(0, hostname.length - ROOT_DOMAIN.length - 1);

    console.log("[proxy] subdomain:", subdomain, "| known:", locationSlugs.has(subdomain));

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


import { NextRequest, NextResponse } from "next/server";

const ROOT_DOMAIN = "cetekne.com";
const WWW_DOMAIN = `www.${ROOT_DOMAIN}`;

export function proxy(request: NextRequest) {
  const { hostname, pathname } = request.nextUrl;

  // localhost veya production dışı ortamları atla
  if (
    hostname === "localhost" ||
    hostname.endsWith(".localhost") ||
    hostname.endsWith(".vercel.app")
  ) {
    return NextResponse.next();
  }

  // www → root yönlendirmesi (ör. www.cetekne.com → cetekne.com)
  if (hostname === WWW_DOMAIN) {
    const url = request.nextUrl.clone();
    url.hostname = ROOT_DOMAIN;
    return NextResponse.redirect(url, { status: 301 });
  }

  // Subdomain tespiti: city.cetekne.com → cetekne.com/city-ce-belgesi
  if (hostname.endsWith(`.${ROOT_DOMAIN}`)) {
    const subdomain = hostname.replace(`.${ROOT_DOMAIN}`, "");

    // Geçerli bir subdomain mi? (kısa, Latin harfli, tire içerebilir)
    if (/^[a-z0-9-]{2,50}$/.test(subdomain)) {
      const targetUrl = request.nextUrl.clone();
      targetUrl.hostname = ROOT_DOMAIN;
      targetUrl.pathname = `/${subdomain}-ce-belgesi`;
      return NextResponse.redirect(targetUrl, { status: 301 });
    }
  }

  return NextResponse.next();
}

export const config = {
  // API rotaları, statik dosyalar ve Next.js iç yollarını atla
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};


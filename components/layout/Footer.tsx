import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  hizmetler: [
    { href: "/hizmetler/yeni-uretim-tekne-ce", label: "Yeni Üretim CE" },
    { href: "/hizmetler/mevcut-tekne-ce", label: "Mevcut Tekne CE" },
    { href: "/hizmetler/ihracat-icin-ce", label: "İhracat için CE" },
    { href: "/hizmetler/pca-post-construction-assessment", label: "PCA Belgesi" },
    { href: "/hizmetler/teknik-dosya-hazirlama", label: "Teknik Dosya" },
    { href: "/hizmetler/stabilite-hesaplamalari", label: "Stabilite Hesabı" },
  ],
  sayfalar: [
    { href: "/ce-belgesi", label: "CE Belgesi Nedir?" },
    { href: "/paketler", label: "Paketler" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/blog", label: "Blog" },
    { href: "/sss", label: "SSS" },
    { href: "/iletisim", label: "İletişim" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="cetekne.com ana sayfa">
              <Image src="/logo-white.svg" alt="cetekne.com" width={160} height={40} />
            </Link>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Avrupa Birliği tarafından yetkilendirilmiş Notified Body ile 24 metre altı
              gezi tekneleri için CE belgelendirme hizmeti sunuyoruz. 2013/53/AB Direktifi
              kapsamında teknenizi AB pazarına hazırlıyoruz.
            </p>
          </div>

          {/* Sayfalar */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
              Sayfalar
            </h4>
            <ul className="space-y-2">
              {footerLinks.sayfalar.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
              Hizmetler
            </h4>
            <ul className="space-y-2">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
              İletişim
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>info@cetekne.com</li>
              <li><a href="tel:+905079413909" className="hover:text-white transition-colors">+90 507 941 39 09</a></li>
              <li>İzmir, Türkiye</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} cetekne.com — Tüm hakları saklıdır.</p>
          <Link href="/gizlilik-politikasi" className="hover:text-white">
            Gizlilik Politikası
          </Link>
        </div>
      </Container>
    </footer>
  );
}


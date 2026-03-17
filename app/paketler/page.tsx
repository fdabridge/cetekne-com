import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "CE Belgelendirme Paketleri | Fiyatlar ve Kapsamlar",
  description:
    "Tekne CE belgelendirme paketlerimizi inceleyin. Yeni üretim, mevcut tekne ve ihracat paketleri ile ihtiyacınıza uygun çözümü seçin.",
  alternates: { canonical: "https://cetekne.com/paketler" },
};

const packages = [
  {
    name: "Starter",
    subtitle: "Yeni Üretim Tekne CE",
    popular: false,
    features: [
      "Teknik ön inceleme",
      "2013/53/AB direktif revizyonu",
      "Belge takibi ve koordinasyon",
      "IFC Global onay süreci",
      "E-posta destek",
    ],
  },
  {
    name: "Standart",
    subtitle: "Mevcut Tekne CE",
    popular: true,
    features: [
      "Tüm Starter özellikleri",
      "Yerinde tekne incelemesi",
      "Gap analizi raporu",
      "PCA desteği",
      "Mevzuat uyum raporu",
      "10 iş günü teslim",
      "Telefon desteği",
    ],
  },
  {
    name: "Pro",
    subtitle: "Eksiksiz Paket",
    popular: false,
    features: [
      "Tüm Standart özellikleri",
      "Stabilite hesaplamaları",
      "Teknik dosya hazırlama",
      "Kullanıcı kılavuzu hazırlama",
      "İhracat dokümantasyonu",
      "Öncelikli destek",
      "Deneme seferi koordinasyonu",
    ],
  },
];

export default function PaketlerPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Ana Sayfa", url: "https://cetekne.com" },
        { name: "Paketler", url: "https://cetekne.com/paketler" },
      ]} />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h1 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">CE Belgelendirme Paketleri</h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted leading-relaxed">
            İhtiyacınıza uygun paketi seçin. Tüm paketler IFC Global ortaklığı kapsamında sunulmaktadır.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {packages.map((pkg) => (
              <Card key={pkg.name} highlight={pkg.popular} className="relative flex flex-col">
                {pkg.popular && (
                  <Badge variant="accent" className="absolute -top-2.5 right-4">En Popüler</Badge>
                )}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-text-primary">{pkg.name}</h2>
                  <p className="text-sm text-text-muted">{pkg.subtitle}</p>
                </div>
                <p className="mb-6 text-sm text-text-muted">Fiyat bilgisi için bizimle iletişime geçin.</p>
                <ul className="mb-6 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-primary">
                      <Check size={16} className="mt-0.5 shrink-0 text-success" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="/iletisim" variant={pkg.popular ? "primary" : "outline"} className="w-full">
                  Teklif Alın
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">Hangi Paketi Seçmeliyim?</h2>
          <p className="mt-4 max-w-2xl text-text-muted leading-relaxed">
            Teknenizin durumuna ve ihtiyaçlarınıza göre en uygun paketi birlikte belirleyelim. Ücretsiz ön değerlendirme için bizimle iletişime geçin.
          </p>
          <Button href="/iletisim" size="lg" className="mt-6">Ücretsiz Danışmanlık</Button>
        </Container>
      </section>
    </>
  );
}


import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { services } from "@/lib/services";
import { Ship, Anchor, Globe, ClipboardCheck, FileText, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Tekne CE Belgelendirme Hizmetleri",
  description:
    "Yeni üretim ve mevcut tekneler için CE belgelendirme, PCA, teknik dosya hazırlama ve stabilite hesaplama hizmetleri. IFC Global ortağı olarak profesyonel çözümler.",
  alternates: { canonical: "https://cetekne.com/hizmetler" },
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  Ship, Anchor, Globe, ClipboardCheck, FileText, Calculator,
};

export default function HizmetlerPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Ana Sayfa", url: "https://cetekne.com" },
        { name: "Hizmetler", url: "https://cetekne.com/hizmetler" },
      ]} />

      <section className="bg-white py-16 sm:py-20">
        <Container size="wide">
          <h1 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            CE Belgelendirme Hizmetlerimiz
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted leading-relaxed">
            IFC Global ortağı olarak 24 metre altı gezi tekneleri için kapsamlı CE belgelendirme hizmetleri sunuyoruz.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <Container size="wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Ship;
              return (
                <Link key={service.slug} href={`/hizmetler/${service.slug}`}>
                  <Card hover className="h-full">
                    <Icon size={28} className="mb-3 text-accent" strokeWidth={1.5} />
                    <h2 className="text-lg font-semibold text-text-primary">{service.title}</h2>
                    <p className="mt-2 text-sm text-text-muted leading-relaxed">{service.description}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-accent">Detayları Gör →</span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-primary py-16 text-center text-white">
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">Hangi Hizmete İhtiyacınız Var?</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/80">Teknenizin durumuna göre en uygun CE belgelendirme hizmetini birlikte belirleyelim.</p>
          <Button href="/iletisim" variant="outline" size="lg" className="mt-6 border-white text-white hover:bg-white hover:text-primary">
            Ücretsiz Danışmanlık
          </Button>
        </Container>
      </section>
    </>
  );
}


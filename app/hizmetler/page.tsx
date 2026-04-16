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
    "Yeni üretim ve mevcut tekneler için CE belgelendirme, PCA, teknik dosya hazırlama ve stabilite hesaplama hizmetleri. AB yetkili Notified Body ile 2013/53/AB Direktifi kapsamında profesyonel çözümler.",
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

      <section className="relative overflow-hidden min-h-[400px] flex items-center py-16 sm:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        <Container size="wide" className="relative z-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            CE Belgelendirme Hizmetlerimiz
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75 leading-relaxed">
            Avrupa Birliği yetkili Notified Body ile 2013/53/AB Direktifi kapsamında 24 metre altı gezi tekneleri için kapsamlı CE belgelendirme hizmetleri sunuyoruz.
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

      <section className="relative overflow-hidden py-16 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-primary/85" />
        <Container className="relative z-10">
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


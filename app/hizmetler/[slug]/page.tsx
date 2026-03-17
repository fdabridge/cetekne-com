import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { services, getServiceBySlug } from "@/lib/services";
import { Check } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `https://cetekne.com/hizmetler/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Ana Sayfa", url: "https://cetekne.com" },
        { name: "Hizmetler", url: "https://cetekne.com/hizmetler" },
        { name: service.title, url: `https://cetekne.com/hizmetler/${service.slug}` },
      ]} />
      <ServiceJsonLd name={service.title} description={service.metaDescription} url={`https://cetekne.com/hizmetler/${service.slug}`} />

      {/* Hero */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h1 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted leading-relaxed">{service.description}</p>
          <Button href="/iletisim" size="lg" className="mt-6">Hemen Başvur</Button>
        </Container>
      </section>

      {/* Content */}
      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-text-primary">Hizmet Detayları</h2>
              <div className="mt-4 space-y-4 text-sm text-text-muted leading-relaxed">
                {service.content.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <div className="rounded-lg border border-border bg-white p-6">
                <h3 className="font-semibold text-text-primary">Neler Dahil?</h3>
                <ul className="mt-4 space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-primary">
                      <Check size={16} className="mt-0.5 shrink-0 text-success" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h2 className="text-xl font-bold text-text-primary">Süreç Adımları</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, i) => (
              <div key={i} className="rounded-lg border border-border bg-surface p-5">
                <span className="text-3xl font-extrabold text-border">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center text-white">
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">{service.shortTitle} Hizmeti İçin Başvurun</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/80">Uzman ekibimiz tekneniz için en uygun çözümü sunacaktır.</p>
          <Button href="/iletisim" variant="outline" size="lg" className="mt-6 border-white text-white hover:bg-white hover:text-primary">
            İletişime Geçin
          </Button>
        </Container>
      </section>
    </>
  );
}


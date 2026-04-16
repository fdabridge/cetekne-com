import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { locations, getLocationBySlug } from "@/lib/locations";
import { CheckCircle, MapPin, Ship, FileCheck, Clock, Shield, Phone } from "lucide-react";

const REGION_IMAGES: Record<string, string> = {
  Karadeniz:
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=1920&q=80",
  Akdeniz:
    "https://images.unsplash.com/photo-1504683284782-2ac99a5d5082?auto=format&fit=crop&w=1920&q=80",
  _default:
    "https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=1920&q=80",
};

function getRegionImage(region: string) {
  return REGION_IMAGES[region] ?? REGION_IMAGES._default;
}

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: `${loc.slug}-ce-belgesi` }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const locationSlug = slug.replace(/-ce-belgesi$/, "");
  const loc = getLocationBySlug(locationSlug);
  if (!loc) return { title: "Bulunamadı" };
  const marinaText = loc.marinas.length > 0 ? ` ${loc.marinas[0]} başta olmak üzere bölgenin tüm marinalarına hizmet veriyoruz.` : "";
  return {
    title: `${loc.name} Tekne CE Belgesi | cetekne.com`,
    description: `${loc.name}'de tekne CE belgesi almak mı istiyorsunuz? AB yetkili Notified Body ile 2013/53/AB Direktifi kapsamında profesyonel hizmet.${marinaText}`,
    alternates: { canonical: `https://cetekne.com/${loc.slug}-ce-belgesi` },
    openGraph: {
      title: `${loc.name} Tekne CE Belgesi | cetekne.com`,
      description: `${loc.name}'de tekne CE belgesi. AB yetkili Notified Body, 2013/53/AB Direktifi kapsamında hızlı ve güvenilir süreç.`,
      url: `https://cetekne.com/${loc.slug}-ce-belgesi`,
    },
  };
}

function getFaqsForLocation(loc: ReturnType<typeof getLocationBySlug>) {
  if (!loc) return [];
  const base = [
    {
      question: `${loc.name}'de tekne CE belgesi almak için ne yapmalıyım?`,
      answer: `${loc.name}'deki tekneniz için CE belgesi almak üzere cetekne.com ile iletişime geçin. Uzmanlarımız teknenizi değerlendirerek 2013/53/AB Direktifi kapsamında gerekli adımları size aktaracaktır.`,
    },
    {
      question: "CE belgesi zorunlu mu?",
      answer: "Evet. 2,5 ile 24 metre arasındaki tüm gezi tekneleri ve kişisel deniz taşıtları, AB pazarında satış veya charter için CE belgesi taşımak zorundadır. Bu zorunluluk 2013/53/AB Direktifi ile belirlenmiştir.",
    },
    {
      question: "CE belgelendirme süreci ne kadar sürer?",
      answer: "Teknenin tipi, yaşı ve mevcut dokümantasyonuna göre 4-8 hafta arasında tamamlanır. Yeni üretim teknelerde süreç daha erken başlatılabilir.",
    },
    {
      question: "CE belgesi maliyeti nedir?",
      answer: "Maliyet, teknenin tipine, boyutuna ve mevcut uygunluk durumuna göre değişir. cetekne.com olarak şeffaf fiyatlandırma politikamız çerçevesinde teklifinizi hazırlamak için bizimle iletişime geçin.",
    },
    {
      question: "İkinci el teknem için de CE belgesi alabilir miyim?",
      answer: "Evet. AB içinde piyasaya sürülmüş ikinci el tekneler için PCA (İnşaat Sonrası Değerlendirme) yöntemiyle CE belgesi almak mümkündür. Bu süreç cetekne.com uzmanları tarafından eksiksiz yönetilmektedir.",
    },
  ];

  if (loc.region === "Karadeniz") {

    base.push({
      question: `Karadeniz koşulları CE belgesi gereksinimlerini etkiler mi?`,
      answer: "CE belgesi Tasarım Kategorisi A (açık deniz) ve B (açık su) gereksinimleri Karadeniz gibi zorlu sularda seyreden tekneler için kritik önem taşır. Teknenizin kategori uygunluğunu uzmanlarımızla değerlendirin.",
    });
  } else if (loc.region === "Ege" || loc.region === "Akdeniz") {
    base.push({
      question: `Charter için de CE belgesi gerekli mi?`,
      answer: `${loc.name} gibi popüler yelken ve charter destinasyonlarında teknenizi ticari amaçla kiralamak için CE belgesi zorunludur. Aynı zamanda charter sigortanız da CE belgesiz tekneyi kapsamaz.`,
    });
  }
  return base;
}

const steps = [
  { step: "1", title: "Ön Değerlendirme", desc: "Teknenizin mevcut durumunu ve gereken belgeleri değerlendiriyoruz. Ücretsiz ön danışmanlık sunuyoruz." },
  { step: "2", title: "Teknik İnceleme", desc: "AB yetkili Notified Body ile koordineli olarak teknik dosya ve stabilite hesaplamalarını hazırlıyoruz." },
  { step: "3", title: "Belge Teslimi", desc: "2013/53/AB Direktifi kapsamında CE uygunluk belgesi ve teknik dosyanızı teslim ediyoruz." },
];

const trustPoints = [
  { icon: Shield, text: "AB yetkili Notified Body ile doğrudan çalışıyoruz" },
  { icon: FileCheck, text: "2013/53/AB Direktifi'nde tam uzmanız" },
  { icon: Clock, text: "Ortalama 4-8 haftada teslim" },
  { icon: Ship, text: "Her tip ve boyutta tekne belgesi" },
];

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const locationSlug = slug.replace(/-ce-belgesi$/, "");
  const loc = getLocationBySlug(locationSlug);
  if (!loc) notFound();

  const faqs = getFaqsForLocation(loc);
  const marinaList = loc.marinas.length > 0 ? loc.marinas.join(", ") : null;

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Ana Sayfa", url: "https://cetekne.com" },
        { name: "CE Belgesi", url: "https://cetekne.com/ce-belgesi" },
        { name: `${loc.name} CE Belgesi`, url: `https://cetekne.com/${loc.slug}-ce-belgesi` },
      ]} />
      <FAQPageJsonLd questions={faqs.map((f) => ({ question: f.question, answer: f.answer }))} />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[480px] flex items-center py-16 sm:py-20">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${getRegionImage(loc.region)}')` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/80" />
        <Container className="relative z-10">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <MapPin size={14} />
            <span>{loc.region} · {loc.name}</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {loc.name}&apos;de Tekne CE Belgesi
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75 leading-relaxed">
            {loc.boatScene}
            {marinaList && ` ${marinaList} marinaların`} tekne sahiplerine 2013/53/AB Direktifi kapsamında AB yetkili Notified Body güvencesiyle CE belgelendirme hizmeti sunuyoruz.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`/iletisim?konum=${loc.slug}`} size="lg">Hemen Başvur</Button>
            <Button href="/ce-belgesi" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">CE Belgesi Hakkında</Button>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">{loc.name} Tekne Pazarı ve CE Belgesi</h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                {loc.boatScene} Bu dinamik denizcilik ortamında faaliyet gösteren tekne sahipleri ve üreticileri için CE belgesi yalnızca yasal bir zorunluluk değil; AB pazarına erişimin, güvenilir charter operasyonlarının ve tekne değerinin güvencesidir.
              </p>
              {marinaList && (
                <p className="mt-3 text-text-muted leading-relaxed">
                  {marinaList} gibi marinalar, tekne yoğunluğu nedeniyle CE belgesi denetimlerine sıkça sahne olmaktadır. Belgesiz tekneyle bu sularda bulunmak idari yaptırım riskini beraberinde getirir.
                </p>
              )}
            </div>
            <div className="rounded-xl bg-surface p-6 border border-border">
              <h3 className="text-base font-semibold text-text-primary mb-4">2013/53/AB Direktifi Kapsamında</h3>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex gap-2"><CheckCircle size={16} className="shrink-0 mt-0.5 text-success" />2,5 - 24 m arası tüm gezi tekneleri</li>
                <li className="flex gap-2"><CheckCircle size={16} className="shrink-0 mt-0.5 text-success" />Kişisel deniz taşıtları (jet ski, PWC)</li>
                <li className="flex gap-2"><CheckCircle size={16} className="shrink-0 mt-0.5 text-success" />AB pazarında satış veya charter</li>
                <li className="flex gap-2"><CheckCircle size={16} className="shrink-0 mt-0.5 text-success" />İkinci el tekneler (PCA yöntemiyle)</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 3-Step Process */}
      <section className="bg-surface py-14 sm:py-16">
        <Container>
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl text-center mb-10">
            {loc.name}&apos;de CE Belgesi Süreci: 3 Adım
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="rounded-xl bg-white border border-border p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-lg mb-4">{s.step}</div>
                <h3 className="font-semibold text-text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why cetekne.com */}
      <section className="bg-white py-14 sm:py-16">
        <Container>
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl mb-8">Neden cetekne.com?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustPoints.map((tp) => (
              <div key={tp.text} className="flex items-start gap-3 rounded-lg border border-border p-4">
                <tp.icon size={20} className="shrink-0 mt-0.5 text-accent" />
                <span className="text-sm text-text-primary">{tp.text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-14 sm:py-16">
        <Container>
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl mb-8">
            {loc.name} Tekne Sahiplerinin Sık Sorduğu Sorular
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-border bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-medium text-text-primary">
                  {faq.question}
                  <span className="ml-2 text-text-muted transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-text-muted leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-14 sm:py-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-primary/85" />
        <Container className="relative z-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {loc.name}&apos;deki Tekneniz İçin CE Belgesi Alın
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-white/70 leading-relaxed">
              cetekne.com uzman ekibi {loc.name}&apos;daki tekne sahiplerine 2013/53/AB kapsamında eksiksiz CE belgelendirme hizmeti sunmaktadır.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button href={`/iletisim?konum=${loc.slug}`} size="lg" className="!bg-white !text-primary hover:!bg-white/90">
                Ücretsiz Danışmanlık Al
              </Button>
              <Button href="tel:+908503044500" size="lg" className="!bg-accent text-white hover:!bg-accent/90 gap-2">
                <Phone size={16} />
                Hemen Ara
              </Button>
              <Button href="mailto:bilgi@cetekne.com" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                bilgi@cetekne.com
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


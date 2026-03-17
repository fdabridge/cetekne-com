import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { CheckCircle, FileText, Shield, Anchor } from "lucide-react";

export const metadata: Metadata = {
  title: "CE Belgesi Nedir? | Tekne CE Belgelendirme Süreci",
  description:
    "Tekne CE belgesi nedir, neden gereklidir ve nasıl alınır? 2013/53/AB Gezi Tekneleri Direktifi kapsamında CE belgelendirme sürecinin tüm detayları.",
  alternates: { canonical: "https://cetekne.com/ce-belgesi" },
};

const ceSteps = [
  { icon: FileText, title: "Başvuru ve Ön Değerlendirme", desc: "Tekne bilgilerinizi paylaşın, ekibimiz uygunluk değerlendirmesi yapar." },
  { icon: Shield, title: "Teknik İnceleme ve Testler", desc: "Stabilite hesaplamaları, yapısal testler ve teknik dosya hazırlanır." },
  { icon: Anchor, title: "Notified Body Denetimi", desc: "Akredite kuruluş tarafından denetim ve onay süreci yürütülür." },
  { icon: CheckCircle, title: "CE Belgesi Teslimi", desc: "Uygunluk Beyanı düzenlenir ve CE işareti tekneye uygulanır." },
];

const ceFaqs = [
  { question: "CE belgesi nedir?", answer: "CE belgesi, bir ürünün Avrupa Birliği direktiflerine uygun olduğunu gösteren zorunlu bir uygunluk işaretidir. Gezi tekneleri için 2013/53/AB Direktifi geçerlidir." },
  { question: "Hangi tekneler CE belgesi almak zorundadır?", answer: "2,5 metre ile 24 metre arasındaki tüm gezi tekneleri ve kişisel deniz taşıtları CE belgesi almak zorundadır." },
  { question: "CE belgesi olmadan tekne satılabilir mi?", answer: "AB pazarında CE belgesi olmadan gezi teknesi satmak yasaktır. Türkiye'de de ihracat için CE belgesi zorunludur." },
  { question: "CE belgelendirme süreci ne kadar sürer?", answer: "Teknenin durumuna bağlı olarak süreç ortalama 4-8 hafta sürer." },
];

export default function CEBelgesiPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Ana Sayfa", url: "https://cetekne.com" },
        { name: "CE Belgesi", url: "https://cetekne.com/ce-belgesi" },
      ]} />
      <FAQPageJsonLd questions={ceFaqs} />

      {/* Hero */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h1 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            CE Belgesi Nedir?
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted leading-relaxed">
            CE işareti, teknenizin 2013/53/AB Gezi Tekneleri Direktifi&apos;ne uygun olduğunu
            kanıtlayan zorunlu bir uygunluk belgesidir. AB pazarında tekne satışı ve
            Türkiye&apos;den ihracat için yasal olarak gereklidir.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/iletisim" size="lg">Hemen Başvur</Button>
            <Button href="/hizmetler" variant="outline" size="lg">Hizmetlerimiz</Button>
          </div>
        </Container>
      </section>

      {/* 2013/53/AB Direktifi */}
      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">2013/53/AB Gezi Tekneleri Direktifi</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-semibold text-text-primary">Kapsam</h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                2,5 m ile 24 m arasındaki gezi tekneleri, kişisel deniz taşıtları ve bunların bileşenleri bu direktif kapsamındadır. Yarış tekneleri, tarihi tekneler ve deneysel tekneler muaftır.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-semibold text-text-primary">Temel Gereksinimler</h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                Yapısal bütünlük, stabilite, yangın güvenliği, elektrik sistemi, egzoz emisyonları, gürültü seviyeleri ve kullanıcı güvenliği gibi temel gereksinimlerin karşılanması zorunludur.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Süreç */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">CE Belgelendirme Süreci</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ceSteps.map((step, i) => (
              <div key={step.title} className="rounded-lg border border-border bg-surface p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">{i + 1}</span>
                  <step.icon size={20} className="text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-1 text-xs text-text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">Sık Sorulan Sorular</h2>
          <div className="mt-6 space-y-4">
            {ceFaqs.map((faq) => (
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
      <section className="bg-primary py-16 text-center text-white">
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">CE Belgesi Almak İçin Hemen Başvurun</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/80">Ekibimiz 24 saat içinde sizinle iletişime geçecek ve süreç hakkında detaylı bilgi verecektir.</p>
          <Button href="/iletisim" variant="outline" size="lg" className="mt-6 border-white text-white hover:bg-white hover:text-primary">
            Başvuru Formu
          </Button>
        </Container>
      </section>
    </>
  );
}


import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Shield, Award, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda | IFC Global Türkiye CE Belgelendirme Ortağı",
  description:
    "IFC Global'in Türkiye'deki yetkili CE belgelendirme ortağıyız. Uzman mühendis kadromuzla tekne sahiplerine profesyonel belgelendirme hizmeti sunuyoruz.",
  alternates: { canonical: "https://cetekne.com/hakkimizda" },
};

const stats = [
  { value: "500+", label: "Belgelendirilen Tekne" },
  { value: "15+", label: "Yıllık Deneyim" },
  { value: "30+", label: "Ülkeye İhracat Desteği" },
  { value: "100%", label: "Müşteri Memnuniyeti" },
];

const values = [
  { icon: Shield, title: "Güvenilirlik", desc: "Uluslararası akreditasyona sahip Notified Body ile çalışarak en yüksek standartlarda hizmet sunuyoruz." },
  { icon: Award, title: "Uzmanlık", desc: "Deniz mühendisliği alanında uzman kadromuzla teknik dosya hazırlama ve belgelendirme süreçlerini yönetiyoruz." },
  { icon: Users, title: "Müşteri Odaklılık", desc: "Her tekne sahibine özel çözümler sunarak sürecin her aşamasında yanlarında oluyoruz." },
  { icon: Globe, title: "Uluslararası Ağ", desc: "IFC Global ortağı olarak dünya genelinde geçerli CE belgelendirme hizmeti sağlıyoruz." },
];

export default function HakkimizdaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Ana Sayfa", url: "https://cetekne.com" },
        { name: "Hakkımızda", url: "https://cetekne.com/hakkimizda" },
      ]} />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h1 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">Hakkımızda</h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted leading-relaxed">
            IFC Global&apos;in Türkiye&apos;deki yetkili CE belgelendirme ortağı olarak, 24 metre altı gezi tekneleri için
            kapsamlı belgelendirme hizmetleri sunuyoruz. Uzman mühendis kadromuz ve uluslararası deneyimimizle
            teknenizin AB pazarına uygunluğunu sağlıyoruz.
          </p>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-primary py-12">
        <Container size="wide">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <div className="text-3xl font-extrabold">{stat.value}</div>
                <div className="mt-1 text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">Değerlerimiz</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-border bg-white p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <v.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* IFC Global */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">IFC Global Ortaklığı</h2>
          <p className="mt-4 max-w-2xl text-text-muted leading-relaxed">
            IFC Global, uluslararası akreditasyona sahip bir uygunluk değerlendirme kuruluşudur. Gezi tekneleri
            için Notified Body olarak hizmet veren IFC Global ile ortaklığımız, müşterilerimize dünya standartlarında
            CE belgelendirme hizmeti sunmamızı sağlamaktadır.
          </p>
          <Button href="/iletisim" size="lg" className="mt-6">Bizimle Çalışın</Button>
        </Container>
      </section>
    </>
  );
}


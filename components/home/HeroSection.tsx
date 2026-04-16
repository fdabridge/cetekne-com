import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Shield, Award, Clock, FileCheck } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "AB Yetkili Notified Body" },
  { icon: Award, label: "2013/53/AB Direktifi" },
  { icon: Clock, label: "Hızlı Süreç" },
  { icon: FileCheck, label: "AB Pazarına Uygunluk" },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1490077476659-095159692ab5?auto=format&fit=crop&w=1920&q=80";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[600px] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      <Container size="wide" className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Copy */}
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              24 Metre Altı Gezi Tekneleri İçin CE Belgesi.{" "}
              <span className="text-accent">Her Şeyi Biz Hallederiz.</span>
            </h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              Avrupa Birliği tarafından yetkilendirilmiş Notified Body ile
              teknenizin AB pazarına çıkışını sağlıyoruz. Başvurudan belge
              teslimine kadar tüm süreci yönetiyoruz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/iletisim" size="lg">
                Hemen Başvur
              </Button>
              <Button
                href="mailto:bilgi@cetekne.com"
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10"
              >
                bilgi@cetekne.com
              </Button>
            </div>
            <p className="mt-3 text-sm text-white/60">
              Ya da{" "}
              <a href="/ce-belgesi" className="underline hover:text-white">
                süreci öğrenin →
              </a>
            </p>
          </div>

          {/* Right: Trust badges — glass */}
          <div className="grid grid-cols-2 gap-4">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-4"
              >
                <item.icon size={24} className="shrink-0 text-accent" />
                <span className="text-sm font-medium text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


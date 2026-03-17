import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Shield, Award, Clock, FileCheck } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Akredite Kuruluş" },
  { icon: Award, label: "IFC Global Ortağı" },
  { icon: Clock, label: "Hızlı Süreç" },
  { icon: FileCheck, label: "2013/53/AB Uyumlu" },
];

export function HeroSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Copy */}
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              24 Metre Altı Gezi Tekneleri İçin CE Belgesi.{" "}
              <span className="text-accent">Her Şeyi Biz Hallederiz.</span>
            </h1>
            <p className="mt-5 text-lg text-text-muted leading-relaxed">
              IFC Global ortağı olarak teknenizin AB pazarına çıkışını
              sağlıyoruz. Başvurudan belge teslimine kadar tüm süreci
              yönetiyoruz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/iletisim" size="lg">
                Hemen Başvur
              </Button>
              <Button href="/ce-belgesi" variant="outline" size="lg">
                Süreci Öğren
              </Button>
            </div>
          </div>

          {/* Right: Trust badges */}
          <div className="grid grid-cols-2 gap-4">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4"
              >
                <item.icon size={24} className="shrink-0 text-accent" />
                <span className="text-sm font-medium text-text-primary">
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


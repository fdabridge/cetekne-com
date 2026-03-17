import { Container } from "@/components/ui/Container";
import { Shield, Award, Clock, BookOpen } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    label: "AB Yetkili Notified Body",
    description: "2013/53/AB Direktifi kapsamında Avrupa Birliği tarafından yetkilendirilmiş Notified Body ile çalışıyoruz.",
    stat: "Notified Body",
  },
  {
    icon: Award,
    label: "AB Direktifi Uzmanı",
    description: "2013/53/AB Gezi Tekneleri Direktifi kapsamında yetkili CE belgelendirme hizmeti sunuyoruz.",
    stat: "2013/53/AB",
  },
  {
    icon: Clock,
    label: "Hızlı Süreç",
    description: "Ortalama 4-8 hafta içinde CE belgenizi teslim ediyoruz.",
    stat: "4-8 Hafta",
  },
  {
    icon: BookOpen,
    label: "Mevzuat Takibi",
    description: "2013/53/AB Direktifi ve güncel harmonize standartları takip ediyoruz.",
    stat: "2013/53/AB",
  },
];

export function TrustBlock() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container size="wide">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
            Neden Bizi Tercih Etmelisiniz?
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5">
                  <item.icon size={22} className="text-primary" strokeWidth={1.75} />
                </div>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {item.stat}
                </span>
              </div>
              <h3 className="text-base font-semibold text-text-primary">{item.label}</h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


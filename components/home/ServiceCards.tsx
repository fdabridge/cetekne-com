import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Ship, Sailboat, LifeBuoy, Waves, Wrench } from "lucide-react";

const boatTypes = [
  {
    icon: Ship,
    title: "Yat / Sürat Tekne",
    description: "Motor yat ve sürat tekneleri için CE belgelendirme",
    href: "/hizmetler/yeni-uretim-tekne-ce",
  },
  {
    icon: Sailboat,
    title: "Yelkenli",
    description: "Yelkenli tekneler için özel CE süreci",
    href: "/hizmetler/yeni-uretim-tekne-ce",
  },
  {
    icon: LifeBuoy,
    title: "RIB / Şişme",
    description: "RIB ve şişme tekneler için CE belgesi",
    href: "/hizmetler/yeni-uretim-tekne-ce",
  },
  {
    icon: Waves,
    title: "Katamaran",
    description: "Çok gövdeli tekneler için CE belgelendirme",
    href: "/hizmetler/yeni-uretim-tekne-ce",
  },
  {
    icon: Wrench,
    title: "Özel Yapım",
    description: "Özel tasarım ve üretim tekneler için CE",
    href: "/hizmetler/mevcut-tekne-ce",
  },
];

export function ServiceCards() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container size="wide">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
            Tekne Tipinizi Seçin
          </h2>
          <p className="mt-2 text-text-muted">
            Hangi tür tekne için CE belgesi almak istiyorsunuz?
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {boatTypes.map((type) => (
            <Link key={type.title} href={type.href}>
              <Card hover className="h-full text-center">
                <type.icon
                  size={32}
                  className="mx-auto mb-3 text-accent"
                  strokeWidth={1.5}
                />
                <h3 className="text-sm font-semibold text-text-primary">
                  {type.title}
                </h3>
                <p className="mt-1 text-xs text-text-muted">
                  {type.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}


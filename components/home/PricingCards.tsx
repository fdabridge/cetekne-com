import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    subtitle: "Yeni Tekne CE",
    popular: false,
    features: [
      "Teknik inceleme",
      "AB direktif revizyonu",
      "Belge takibi",
      "Notified Body onayı",
    ],
  },
  {
    name: "Standart",
    subtitle: "Mevcut Tekne CE",
    popular: true,
    features: [
      "Tüm Starter özellikleri",
      "Mevzuat raporu",
      "PCA desteği",
      "10 iş günü teslim",
    ],
  },
  {
    name: "Pro",
    subtitle: "Eksiksiz Paket",
    popular: false,
    features: [
      "Tüm Standart özellikleri",
      "Stabilite hesabı",
      "Teknik dosya hazırlama",
      "Öncelikli destek",
    ],
  },
];

export function PricingCards() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
            Paketlerimiz
          </h2>
          <p className="mt-2 text-text-muted">
            İhtiyacınıza uygun CE belgelendirme paketini seçin.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              highlight={pkg.popular}
              className="relative flex flex-col"
            >
              {pkg.popular && (
                <Badge variant="accent" className="absolute -top-2.5 right-4">
                  En Popüler
                </Badge>
              )}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-text-primary">
                  {pkg.name}
                </h3>
                <p className="text-sm text-text-muted">{pkg.subtitle}</p>
              </div>
              <ul className="mb-6 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-text-primary"
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href="/iletisim"
                variant={pkg.popular ? "primary" : "outline"}
                className="w-full"
              >
                İletişim Alın
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}


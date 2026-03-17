import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Başvuru",
    description:
      "Online formumuz üzerinden tekne bilgilerinizi paylaşın. Ekibimiz 24 saat içinde sizinle iletişime geçer ve süreç hakkında bilgilendirir.",
  },
  {
    number: "02",
    title: "Teknik İnceleme",
    description:
      "Uzman mühendislerimiz teknenizi yerinde inceler, stabilite hesaplamalarını yapar ve teknik dosyayı hazırlar. Notified Body ile koordinasyonu biz sağlarız.",
  },
  {
    number: "03",
    title: "Belge Teslimi",
    description:
      "Tüm testler ve denetimler tamamlandıktan sonra CE belgeniz ve Uygunluk Beyanınız düzenlenir. Tekneniz AB pazarına hazır.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
            Nasıl Çalışır?
          </h2>
          <p className="mt-2 text-text-muted">
            CE belgelendirme sürecimiz 3 basit adımdan oluşur.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-5xl font-extrabold text-border">
                {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


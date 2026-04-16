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
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559128010-7c1ad6e1d6a3?auto=format&fit=crop&w=1920&q=80')" }}
      />
      <div className="absolute inset-0 bg-primary/85" />
      <Container className="relative z-10">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Nasıl Çalışır?
          </h2>
          <p className="mt-2 text-white/65">
            CE belgelendirme sürecimiz 3 basit adımdan oluşur.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm p-6">
              <span className="text-5xl font-extrabold text-white/20">
                {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


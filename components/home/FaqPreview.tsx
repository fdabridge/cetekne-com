import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const previewFaqs = [
  {
    q: "CE belgesi nedir ve neden gereklidir?",
    a: "CE belgesi, teknenizin 2013/53/AB Gezi Tekneleri Direktifi'ne uygun olduğunu gösteren zorunlu bir uygunluk işaretidir. AB pazarında tekne satışı için yasal olarak gereklidir.",
  },
  {
    q: "CE belgelendirme süreci ne kadar sürer?",
    a: "Teknenin durumuna ve karmaşıklığına bağlı olarak süreç ortalama 4-8 hafta sürer. Yeni üretim teknelerde süreç tasarım aşamasından başlar.",
  },
  {
    q: "Hangi tekneler CE belgesi almak zorundadır?",
    a: "2,5 metre ile 24 metre arasındaki tüm gezi tekneleri ve kişisel deniz taşıtları CE belgesi almak zorundadır. Yarış tekneleri ve tarihi tekneler muaftır.",
  },
  {
    q: "CE belgesi maliyeti ne kadardır?",
    a: "Maliyet tekne tipine, boyutuna ve mevcut dokümantasyon durumuna göre değişir. Detaylı fiyat bilgisi için bizimle iletişime geçin.",
  },
  {
    q: "Notified Body nedir ve neden önemlidir?",
    a: "Notified Body, Avrupa Birliği tarafından 2013/53/AB Direktifi kapsamında yetkilendirilmiş bağımsız uygunluk değerlendirme kuruluşudur. CE belgesi ancak yetkili bir Notified Body aracılığıyla alınabilir.",
  },
];

export function FaqPreview() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
            Sık Sorulan Sorular
          </h2>
        </div>
        <div className="space-y-4">
          {previewFaqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-lg border border-border bg-white"
            >
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-medium text-text-primary">
                {faq.q}
                <span className="ml-2 text-text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-5 pb-4 text-sm text-text-muted leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/sss" variant="outline">
            Tüm Soruları Gör
          </Button>
        </div>
      </Container>
    </section>
  );
}


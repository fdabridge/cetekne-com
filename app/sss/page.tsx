import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | Tekne CE Belgesi SSS",
  description:
    "Tekne CE belgesi hakkında en çok sorulan sorular ve cevapları. CE belgelendirme süreci, maliyetler, süreler ve gereksinimler hakkında bilgi alın.",
  alternates: { canonical: "https://cetekne.com/sss" },
};

const faqCategories = [
  {
    title: "CE Belgesi Genel",
    faqs: [
      { question: "CE belgesi nedir?", answer: "CE belgesi (Conformité Européenne), bir ürünün Avrupa Birliği'nin sağlık, güvenlik ve çevre koruma standartlarına uygun olduğunu gösteren zorunlu bir uygunluk işaretidir. Gezi tekneleri için 2013/53/AB Direktifi geçerlidir." },
      { question: "CE belgesi neden gereklidir?", answer: "AB pazarında gezi teknesi satışı için CE belgesi yasal olarak zorunludur. Ayrıca Türkiye'den AB ülkelerine tekne ihracatı için de CE belgesi gereklidir." },
      { question: "Hangi tekneler CE belgesi almak zorundadır?", answer: "2,5 metre ile 24 metre arasındaki tüm gezi tekneleri ve kişisel deniz taşıtları CE belgesi almak zorundadır. Yarış tekneleri, tarihi tekneler, deneysel tekneler ve askeri tekneler muaftır." },
      { question: "CE belgesi ne kadar süre geçerlidir?", answer: "CE belgesi süresiz geçerlidir. Ancak tekne üzerinde yapılan önemli modifikasyonlar durumunda yeniden değerlendirme gerekebilir." },
    ],
  },
  {
    title: "Süreç ve Zamanlama",
    faqs: [
      { question: "CE belgelendirme süreci ne kadar sürer?", answer: "Teknenin durumuna ve karmaşıklığına bağlı olarak süreç ortalama 4-8 hafta sürer. Yeni üretim teknelerde süreç tasarım aşamasından başlar ve daha uzun olabilir." },
      { question: "Süreç hangi adımlardan oluşur?", answer: "Başvuru ve ön değerlendirme, teknik inceleme ve testler, teknik dosya hazırlama, Notified Body denetimi ve CE belgesi teslimi olmak üzere 5 ana adımdan oluşur." },
      { question: "Deneme seferi zorunlu mudur?", answer: "Evet, CE belgelendirme sürecinde teknenin deneme seferi yapılması ve performans testlerinin gerçekleştirilmesi zorunludur." },
    ],
  },
  {
    title: "Maliyet ve Ödeme",
    faqs: [
      { question: "CE belgesi maliyeti ne kadardır?", answer: "Maliyet tekne tipine, boyutuna, karmaşıklığına ve mevcut dokümantasyon durumuna göre değişir. Detaylı fiyat bilgisi için ücretsiz ön değerlendirme talep edebilirsiniz." },
      { question: "Ödeme nasıl yapılır?", answer: "Proje başlangıcında %50, belge tesliminde %50 olmak üzere iki taksitte ödeme yapılabilir. Kurumsal müşteriler için özel ödeme planları sunulmaktadır." },
    ],
  },
  {
    title: "Teknik Sorular",
    faqs: [
      { question: "Stabilite hesaplaması nedir?", answer: "Stabilite hesaplaması, teknenin farklı yükleme koşullarında dengedeki davranışını analiz eden mühendislik çalışmasıdır. ISO 12217 standardına göre yapılır ve CE belgesi için zorunludur." },
      { question: "Teknik dosya neleri kapsar?", answer: "Teknik dosya; genel düzenleme planları, yapısal hesaplamalar, stabilite analizleri, elektrik şemaları, yakıt ve gaz sistemi planları, risk değerlendirmesi ve kullanıcı kılavuzunu kapsar." },
      { question: "PCA (Post Construction Assessment) nedir?", answer: "PCA, CE belgesi olmadan üretilmiş veya CE belgesi süresi dolmuş teknelerin sonradan belgelendirilmesi için uygulanan bir değerlendirme sürecidir." },
      { question: "Tasarım kategorileri nelerdir?", answer: "A (Okyanus), B (Açık Deniz), C (Kıyı Suları) ve D (Korunaklı Sular) olmak üzere 4 tasarım kategorisi vardır. Teknenin hangi deniz koşullarında kullanılabileceğini belirler." },
    ],
  },
];

const allFaqs = faqCategories.flatMap((c) => c.faqs);

export default function SSSPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Ana Sayfa", url: "https://cetekne.com" },
        { name: "SSS", url: "https://cetekne.com/sss" },
      ]} />
      <FAQPageJsonLd questions={allFaqs} />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h1 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">Sık Sorulan Sorular</h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted leading-relaxed">
            CE belgelendirme süreci hakkında merak ettiğiniz her şey.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <div className="space-y-10">
            {faqCategories.map((cat) => (
              <div key={cat.title}>
                <h2 className="mb-4 text-xl font-bold text-text-primary">{cat.title}</h2>
                <div className="space-y-3">
                  {cat.faqs.map((faq) => (
                    <details key={faq.question} className="group rounded-lg border border-border bg-white">
                      <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-medium text-text-primary">
                        {faq.question}
                        <span className="ml-2 text-text-muted transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <div className="px-5 pb-4 text-sm text-text-muted leading-relaxed">{faq.answer}</div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-primary py-16 text-center text-white">
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">Sorunuz mu Var?</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/80">Burada cevabını bulamadığınız sorularınız için bizimle iletişime geçin.</p>
          <Button href="/iletisim" variant="outline" size="lg" className="mt-6 border-white text-white hover:bg-white hover:text-primary">
            İletişime Geçin
          </Button>
        </Container>
      </section>
    </>
  );
}


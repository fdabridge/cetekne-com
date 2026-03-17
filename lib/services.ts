export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  icon: string;
  features: string[];
  process: string[];
  content: string;
}

export const services: Service[] = [
  {
    slug: "yeni-uretim-tekne-ce",
    title: "Yeni Üretim Tekne CE Belgesi",
    shortTitle: "Yeni Üretim CE",
    description: "Tasarım aşamasından başlayarak yeni üretim tekneler için eksiksiz CE belgelendirme süreci.",
    metaDescription: "Yeni üretim tekneler için CE belgesi alma süreci. Tasarımdan deneme seferine kadar tüm adımları AB yetkili Notified Body ile 2013/53/AB Direktifi kapsamında yönetiyoruz.",
    icon: "Ship",
    features: [
      "Tasarım aşamasında teknik danışmanlık",
      "2013/53/AB Direktifi uygunluk değerlendirmesi",
      "Stabilite hesaplamaları ve testler",
      "Teknik dosya hazırlama",
      "Notified Body koordinasyonu",
      "CE işareti ve Uygunluk Beyanı düzenleme",
    ],
    process: [
      "Tekne tasarım dokümanlarının incelenmesi",
      "Uygulanacak harmonize standartların belirlenmesi",
      "Teknik dosya hazırlığı ve stabilite hesapları",
      "Üretim sürecinde ara denetimler",
      "Deneme seferi ve son kontroller",
      "CE belgesi ve Uygunluk Beyanı teslimi",
    ],
    content: `Yeni üretim bir tekne için CE belgesi almak, teknenin tasarım aşamasından itibaren 2013/53/AB Gezi Tekneleri Direktifi'ne uygun şekilde geliştirilmesini gerektirir. Bu süreç, teknenin AB pazarında yasal olarak satılabilmesi için zorunludur.

AB yetkili Notified Body ile iş birliği yaparak, tekne üreticilerine tasarım aşamasından CE belgesi teslimine kadar tüm süreci yönetiyoruz. Stabilite hesaplamalarından teknik dosya hazırlığına, Notified Body koordinasyonundan deneme seferine kadar her adımda yanınızdayız.

24 metre altı gezi tekneleri için CE belgelendirme sürecimiz ortalama 4-8 hafta içinde tamamlanır. Süre, teknenin karmaşıklığına ve mevcut dokümantasyon durumuna göre değişebilir.`,
  },
  {
    slug: "mevcut-tekne-ce",
    title: "Mevcut Tekne CE Belgesi",
    shortTitle: "Mevcut Tekne CE",
    description: "Üretilmiş ancak henüz belgelenmemiş tekneler için CE belgelendirme hizmeti.",
    metaDescription: "Mevcut tekneniz için CE belgesi alın. Üretilmiş ama belgelenmemiş teknelerin 2013/53/AB uygunluk değerlendirmesini yapıyoruz.",
    icon: "Anchor",
    features: [
      "Mevcut tekne durum değerlendirmesi",
      "Eksik dokümantasyon tespiti",
      "Gerekli modifikasyon danışmanlığı",
      "Teknik dosya hazırlama",
      "Test ve denetim koordinasyonu",
      "CE belgesi düzenleme",
    ],
    process: [
      "Teknenin mevcut durumunun yerinde incelenmesi",
      "Uygunluk açığı analizi (gap analysis)",
      "Gerekli düzeltme ve modifikasyonların belirlenmesi",
      "Teknik dosya ve test raporlarının hazırlanması",
      "Notified Body denetimi koordinasyonu",
      "CE belgesi teslimi",
    ],
    content: `Halihazırda üretilmiş ancak CE belgesi bulunmayan tekneler için kapsamlı bir belgelendirme süreci sunuyoruz. Bu durum özellikle iç pazar için üretilmiş teknelerin AB pazarına açılması veya ihracat amacıyla belgelendirilmesi gerektiğinde karşılaşılır.

Süreç, teknenin mevcut durumunun detaylı incelenmesiyle başlar. Gap analizi ile eksik noktalar tespit edilir ve gerekli modifikasyonlar belirlenir. Teknik dosya hazırlığı, test koordinasyonu ve Notified Body denetimi sürecin kritik adımlarıdır.`,
  },
  {
    slug: "ihracat-icin-ce",
    title: "İhracat için CE Belgesi",
    shortTitle: "İhracat CE",
    description: "Türkiye'den AB ülkelerine tekne ihracatı için zorunlu CE belgelendirme.",
    metaDescription: "Türkiye'den Avrupa'ya tekne ihracatı için CE belgesi. AB pazarına giriş için zorunlu belgelendirme sürecini yönetiyoruz.",
    icon: "Globe",
    features: [
      "İhracat mevzuatı danışmanlığı",
      "AB pazar gereksinimleri analizi",
      "Hedef ülke spesifik gereksinimler",
      "Teknik dosya ve çeviri desteği",
      "Gümrük dokümantasyonu desteği",
      "AB Uygunluk Beyanı düzenleme",
    ],
    process: [
      "Hedef pazar ve ülke gereksinimlerinin analizi",
      "Teknenin mevcut uygunluk durumunun değerlendirilmesi",
      "Gerekli test ve sertifikaların belirlenmesi",
      "Teknik dosya hazırlığı (İngilizce/hedef dil)",
      "CE belgelendirme sürecinin tamamlanması",
      "İhracat dokümantasyonu desteği",
    ],
    content: `Türkiye'den AB ülkelerine tekne ihraç etmek isteyen üreticiler için CE belgesi zorunludur. 2013/53/AB Direktifi kapsamında, AB pazarına giren her gezi teknesinin CE işareti taşıması gerekir.

İhracat sürecinde sadece CE belgesi değil, hedef ülkenin spesifik gereksinimleri, gümrük dokümantasyonu ve teknik dosyanın uygun dilde hazırlanması da kritik öneme sahiptir. AB yetkili Notified Body ile birlikte tüm bu süreci tek elden yönetiyoruz.`,
  },
  {
    slug: "pca-post-construction-assessment",
    title: "PCA (Post Construction Assessment)",
    shortTitle: "PCA Belgesi",
    description: "CE belgesi olmayan mevcut tekneler için sonradan değerlendirme ve belgelendirme.",
    metaDescription: "PCA belgesi ile CE olmayan tekneleri belgelendirin. Post Construction Assessment süreci hakkında bilgi alın.",
    icon: "ClipboardCheck",
    features: [
      "Mevcut tekne durum tespiti",
      "PCA kapsamı belirleme",
      "Teknik inceleme ve testler",
      "Notified Body PCA denetimi",
      "PCA raporu ve belgelendirme",
      "AB pazarı için geçerlilik",
    ],
    process: [
      "Teknenin PCA'ya uygunluğunun değerlendirilmesi",
      "Gerekli teknik incelemelerin planlanması",
      "Stabilite, yapısal ve elektrik testleri",
      "PCA teknik dosyasının hazırlanması",
      "Notified Body PCA denetimi",
      "PCA belgesi ve CE işareti",
    ],
    content: `Post Construction Assessment (PCA), CE belgesi olmadan üretilmiş veya CE belgesi süresi dolmuş teknelerin sonradan belgelendirilmesi için uygulanan bir değerlendirme sürecidir. Bu yöntem özellikle ikinci el tekne satışlarında ve ithalat/ihracat işlemlerinde kullanılır.

PCA süreci, teknenin mevcut durumunun kapsamlı bir şekilde değerlendirilmesini içerir. Stabilite hesaplamaları, yapısal bütünlük testleri ve elektrik sistemi kontrolleri bu sürecin temel bileşenleridir.`,
  },
  {
    slug: "teknik-dosya-hazirlama",
    title: "Teknik Dosya Hazırlama",
    shortTitle: "Teknik Dosya",
    description: "CE belgelendirme sürecinin temel taşı olan teknik dosyanın profesyonel hazırlanması.",
    metaDescription: "CE belgesi için teknik dosya hazırlama hizmeti. Stabilite hesapları, test raporları ve tüm teknik dokümantasyonu hazırlıyoruz.",
    icon: "FileText",
    features: [
      "Genel düzenleme planları",
      "Yapısal hesaplamalar",
      "Elektrik şemaları",
      "Yakıt ve gaz sistemi planları",
      "Risk değerlendirmesi",
      "Kullanıcı kılavuzu hazırlama",
    ],
    process: [
      "Mevcut teknik dokümanların incelenmesi",
      "Eksik dokümanların belirlenmesi",
      "Teknik çizimlerin hazırlanması/güncellenmesi",
      "Hesaplama ve analizlerin yapılması",
      "Dosyanın derlenmesi ve kontrolü",
      "Notified Body'ye sunuma hazır hale getirilmesi",
    ],
    content: `Teknik dosya, CE belgelendirme sürecinin en kritik bileşenidir. 2013/53/AB Direktifi'ne göre her tekne için kapsamlı bir teknik dosya hazırlanması zorunludur. Bu dosya, teknenin tasarımından üretimine kadar tüm teknik detayları içerir.

Teknik dosya; genel düzenleme planları, yapısal hesaplamalar, stabilite analizleri, elektrik şemaları, yakıt ve gaz sistemi planları, risk değerlendirmesi ve kullanıcı kılavuzunu kapsar.`,
  },
  {
    slug: "stabilite-hesaplamalari",
    title: "Stabilite Hesaplamaları",
    shortTitle: "Stabilite Hesabı",
    description: "CE belgelendirme için zorunlu olan tekne stabilite hesaplamalarının uzman mühendisler tarafından yapılması.",
    metaDescription: "Tekne CE belgesi için stabilite hesaplamaları. ISO 12217 standardına uygun hesaplamalar ve testler yapıyoruz.",
    icon: "Calculator",
    features: [
      "ISO 12217 uygunluk hesaplamaları",
      "Ağırlık ve ağırlık merkezi analizi",
      "Eğilme moment hesaplamaları",
      "Batmama (flotation) hesaplamaları",
      "Tasarım kategorisi belirleme",
      "Stabilite test raporları",
    ],
    process: [
      "Tekne ölçülerinin ve formunun analizi",
      "Ağırlık dağılımı hesaplamaları",
      "Hidrostatik analizler",
      "ISO 12217 kriterlerine göre stabilite değerlendirmesi",
      "Tasarım kategorisi onayı",
      "Stabilite raporu hazırlama",
    ],
    content: `Stabilite hesaplamaları, CE belgelendirme sürecinin en teknik ve kritik aşamalarından biridir. ISO 12217 standardına göre yapılan bu hesaplamalar, teknenin güvenli kullanım koşullarını ve tasarım kategorisini belirler.

Uzman deniz mühendislerimiz, teknenin hidrostatik özelliklerini analiz ederek A, B, C veya D tasarım kategorisine uygunluğunu değerlendirir. Bu hesaplamalar, teknenin hangi deniz koşullarında güvenle kullanılabileceğini belirler.`,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}


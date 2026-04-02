export interface Location {
  name: string;
  slug: string;
  parent: string;
  region: string;
  marinas: string[];
  boatScene: string;
  tier: 1 | 2 | 3;
}

export const locations: Location[] = [
  // İSTANBUL
  { name: "İstanbul", slug: "istanbul", parent: "istanbul", region: "Marmara", marinas: ["Kalamış", "Ataköy", "Pendik", "Tarabya"], boatScene: "Türkiye'nin en büyük tekne pazarı ve tersane merkezi.", tier: 1 },
  { name: "Ataköy", slug: "atakoy", parent: "istanbul", region: "Marmara", marinas: ["Ataköy Marina"], boatScene: "Marmara kıyısının köklü marina bölgesi.", tier: 1 },
  { name: "Kadıköy", slug: "kadikoy", parent: "istanbul", region: "Marmara", marinas: ["Kadıköy İskele"], boatScene: "Anadolu yakasının tekne ve denizcilik merkezi.", tier: 2 },
  { name: "Pendik", slug: "pendik", parent: "istanbul", region: "Marmara", marinas: ["Pendik Marina"], boatScene: "İstanbul'un doğusunda büyüyen marina ve tersane bölgesi.", tier: 1 },
  { name: "Tuzla", slug: "tuzla", parent: "istanbul", region: "Marmara", marinas: ["Tuzla Tersaneler Bölgesi"], boatScene: "Türkiye'nin gemi inşa ve tekne üretim başkenti.", tier: 1 },
  { name: "Sarıyer", slug: "sariyer", parent: "istanbul", region: "Marmara", marinas: ["Tarabya", "Büyükdere"], boatScene: "Boğaz Avrupa yakasında köklü denizcilik kültürü.", tier: 2 },
  { name: "Beykoz", slug: "beykoz", parent: "istanbul", region: "Marmara", marinas: [], boatScene: "Boğaz Anadolu yakasında sakin tekne bölgesi.", tier: 2 },
  { name: "Büyükçekmece", slug: "buyukcekmece", parent: "istanbul", region: "Marmara", marinas: ["Büyükçekmece Marina"], boatScene: "İstanbul batısında gelişen marina ve tekne hizmetleri.", tier: 2 },
  { name: "Ambarlı", slug: "ambarli", parent: "istanbul", region: "Marmara", marinas: [], boatScene: "Marmara'ya açılan ticari ve rekreasyonel denizcilik noktası.", tier: 3 },
  // İZMİR
  { name: "İzmir", slug: "izmir", parent: "izmir", region: "Ege", marinas: ["Alsancak Marina", "İzmir Körfezi Yat Limanı"], boatScene: "Ege'nin en büyük tekne pazarı ve denizcilik merkezi.", tier: 1 },
  { name: "Alsancak", slug: "alsancak", parent: "izmir", region: "Ege", marinas: ["Alsancak Yat Limanı"], boatScene: "İzmir'in kalbi, tekne sahipleri için merkezi konum.", tier: 1 },
  { name: "Foça", slug: "foca", parent: "izmir", region: "Ege", marinas: ["Foça Yat Limanı"], boatScene: "Antik liman kenti, Ege'nin gözde yelken destinasyonu.", tier: 2 },
  { name: "Çeşme", slug: "cesme", parent: "izmir", region: "Ege", marinas: ["Çeşme Marina", "Altınyunus Marina"], boatScene: "Ege'nin rüzgar cenneti, uluslararası yat trafiğinin merkezi.", tier: 1 },
  { name: "Alaçatı", slug: "alacati", parent: "izmir", region: "Ege", marinas: [], boatScene: "Sörf ve deniz sporlarıyla ünlü, artan tekne popülasyonuna sahip.", tier: 2 },
  { name: "Urla", slug: "urla", parent: "izmir", region: "Ege", marinas: ["Urla Marina"], boatScene: "İzmir körfezinde sakin, büyüyen tekne topluluğu.", tier: 2 },
  { name: "Karaburun", slug: "karaburun", parent: "izmir", region: "Ege", marinas: [], boatScene: "Uzak ve el değmemiş koyları olan yelkenci cenneti.", tier: 3 },
  { name: "Dikili", slug: "dikili", parent: "izmir", region: "Ege", marinas: ["Dikili Yat Limanı"], boatScene: "Ege'nin kuzeyinde sakin bir liman kenti.", tier: 2 },
  { name: "Güzelbahçe", slug: "guzelbahce", parent: "izmir", region: "Ege", marinas: [], boatScene: "İzmir'e yakın, tekne sahiplerinin tercih ettiği sakin kıyı.", tier: 2 },
  // MUĞLA
  { name: "Muğla", slug: "mugla", parent: "mugla", region: "Ege", marinas: [], boatScene: "Türkiye'nin en yoğun tekne trafiğine sahip iline merkez.", tier: 1 },
  { name: "Bodrum", slug: "bodrum", parent: "mugla", region: "Ege", marinas: ["Bodrum Marina", "Milta Marina", "Yalıkavak Marina"], boatScene: "Türkiye'nin gulet üretim merkezi ve lüks yat destinasyonu.", tier: 1 },
  { name: "Marmaris", slug: "marmaris", parent: "mugla", region: "Ege", marinas: ["Marmaris Yat Limanı", "Netsel Marina"], boatScene: "Akdeniz'in en büyük kış kışlaması destinasyonu.", tier: 1 },
  { name: "Fethiye", slug: "fethiye", parent: "mugla", region: "Ege", marinas: ["Ece Marina", "Fethiye Yat Limanı"], boatScene: "Ölüdeniz ve mavi yolculuk rotalarının başlangıç noktası.", tier: 1 },
  { name: "Datça", slug: "datca", parent: "mugla", region: "Ege", marinas: ["Datça Yat Limanı"], boatScene: "İki denizin buluştuğu, sakin ve otantik bir tekne cenneti.", tier: 2 },
  { name: "Göcek", slug: "gocek", parent: "mugla", region: "Ege", marinas: ["Göcek Marina", "Club Marina", "Skopea Marina"], boatScene: "Türkiye'nin en prestijli mavi yolculuk başlangıç noktası.", tier: 1 },
  { name: "Akyaka", slug: "akyaka", parent: "mugla", region: "Ege", marinas: [], boatScene: "Gökova körfezinde sakin, rüzgarseverler ve yelkenciler için ideal.", tier: 2 },
  { name: "Gümüşlük", slug: "gumusluk", parent: "mugla", region: "Ege", marinas: [], boatScene: "Bodrum yarımadasında sakin, tekne sahiplerinin sığınağı.", tier: 2 },
  // ANTALYA
  { name: "Antalya", slug: "antalya", parent: "antalya", region: "Akdeniz", marinas: ["Antalya Marina", "Setur Antalya Marina"], boatScene: "Akdeniz'in en büyük turizm limanı ve tekne merkezi.", tier: 1 },
  { name: "Kaleiçi", slug: "kaleici", parent: "antalya", region: "Akdeniz", marinas: ["Kaleiçi Yat Limanı"], boatScene: "Tarihi surlar içindeki büyüleyici yat limanı.", tier: 2 },
  { name: "Kemer", slug: "kemer", parent: "antalya", region: "Akdeniz", marinas: ["Kemer Marina", "Phaselis Marina"], boatScene: "Akdeniz'in lüks yat destinasyonu, kış kışlaması için ideal.", tier: 1 },
  { name: "Kaş", slug: "kas", parent: "antalya", region: "Akdeniz", marinas: ["Kaş Yat Limanı"], boatScene: "Dalış ve tekne sporlarıyla ünlü, büyüleyici Akdeniz kasabası.", tier: 2 },
  { name: "Finike", slug: "finike", parent: "antalya", region: "Akdeniz", marinas: ["Finike Marina"], boatScene: "Sakin Akdeniz limanı, uzun süreli kışlama için tercih edilen.", tier: 2 },
  { name: "Alanya", slug: "alanya", parent: "antalya", region: "Akdeniz", marinas: ["Alanya Marina"], boatScene: "Doğu Akdeniz'in turizm ve tekne merkezi.", tier: 2 },
  { name: "Manavgat", slug: "manavgat", parent: "antalya", region: "Akdeniz", marinas: [], boatScene: "Side limanına yakın, Akdeniz tekne rotasında önemli durak.", tier: 2 },
  { name: "Serik", slug: "serik", parent: "antalya", region: "Akdeniz", marinas: [], boatScene: "Antalya körfezinde sakin bir kıyı ilçesi.", tier: 3 },
  // BALIKESİR
  { name: "Balıkesir", slug: "balikesir", parent: "balikesir", region: "Marmara/Ege", marinas: [], boatScene: "Marmara ve Ege kıyılarına sahip çok yönlü denizcilik ili.", tier: 2 },
  { name: "Ayvalık", slug: "ayvalik", parent: "balikesir", region: "Ege", marinas: ["Ayvalık Marina"], boatScene: "Kuzey Ege'nin incisi, adalar ve koylarıyla tekne cenneti.", tier: 1 },
  { name: "Cunda", slug: "cunda", parent: "balikesir", region: "Ege", marinas: [], boatScene: "Ayvalık'a bağlı, sakin ve otantik Ege adası.", tier: 2 },
  { name: "Erdek", slug: "erdek", parent: "balikesir", region: "Marmara", marinas: ["Erdek Yat Limanı"], boatScene: "Kapıdağ yarımadasında sakin Marmara kıyısı.", tier: 2 },
  { name: "Bandırma", slug: "bandirma", parent: "balikesir", region: "Marmara", marinas: ["Bandırma Limanı"], boatScene: "Güney Marmara'nın önemli liman kenti.", tier: 2 },
  { name: "Marmara Adası", slug: "marmara-adasi", parent: "balikesir", region: "Marmara", marinas: [], boatScene: "Marmara Denizi'nin en büyük adası, tekne rotasının vazgeçilmezi.", tier: 2 },
  // ÇANAKKALE
  { name: "Çanakkale", slug: "canakkale", parent: "canakkale", region: "Marmara/Ege", marinas: ["Çanakkale Yat Limanı"], boatScene: "Boğaz'ın kapısı, tarihi öneme sahip stratejik denizcilik kenti.", tier: 2 },
  { name: "Gelibolu", slug: "gelibolu", parent: "canakkale", region: "Marmara", marinas: [], boatScene: "Marmara'dan Ege'ye geçişin tarihi kapısı.", tier: 2 },
  { name: "Lapseki", slug: "lapseki", parent: "canakkale", region: "Marmara", marinas: [], boatScene: "Çanakkale Boğazı kıyısında sakin bir iskele kenti.", tier: 3 },
  { name: "Geyikli", slug: "geyikli", parent: "canakkale", region: "Ege", marinas: [], boatScene: "Kuzey Ege'de sakin, balıkçı tekneleriyle ünlü kıyı.", tier: 3 },
  { name: "Bozcaada", slug: "bozcaada", parent: "canakkale", region: "Ege", marinas: ["Bozcaada Yat Limanı"], boatScene: "Ege'nin rüzgarlı adasında yelken ve tekne kültürü.", tier: 2 },
  { name: "Gökçeada", slug: "gokceada", parent: "canakkale", region: "Ege", marinas: ["Gökçeada Marina"], boatScene: "Türkiye'nin en büyük adası, sörf ve yelken destinasyonu.", tier: 2 },
  // AYDIN
  { name: "Aydın", slug: "aydin", parent: "aydin", region: "Ege", marinas: [], boatScene: "Ege kıyısına uzanan, Kuşadası ve Didim'e ev sahipliği yapan il.", tier: 2 },
  { name: "Kuşadası", slug: "kusadasi", parent: "aydin", region: "Ege", marinas: ["Kuşadası Marina", "Setur Kuşadası Marina"], boatScene: "Ege'nin en hareketli kruvaziyer ve yat limanlarından biri.", tier: 1 },
  { name: "Didim", slug: "didim", parent: "aydin", region: "Ege", marinas: ["Didim Marina", "Altınkum Marina"], boatScene: "Apollon Tapınağı gölgesinde gelişen tekne ve marina merkezi.", tier: 1 },
  { name: "Akbük", slug: "akbuk", parent: "aydin", region: "Ege", marinas: [], boatScene: "Didim yakınında sakin, tekne sahiplerinin gözde koyu.", tier: 2 },
  // MERSİN
  { name: "Mersin", slug: "mersin", parent: "mersin", region: "Akdeniz", marinas: ["Mersin Marina", "Taşucu Yat Limanı"], boatScene: "Doğu Akdeniz'in en büyük ticari ve yat limanı kenti.", tier: 1 },
  { name: "Erdemli", slug: "erdemli", parent: "mersin", region: "Akdeniz", marinas: [], boatScene: "Mersin batısında sakin Akdeniz kıyısı.", tier: 3 },
  { name: "Silifke", slug: "silifke", parent: "mersin", region: "Akdeniz", marinas: [], boatScene: "Tarihi Göksu deltasında tekne kullanımı için açık kıyı.", tier: 3 },
  { name: "Taşucu", slug: "tasucu", parent: "mersin", region: "Akdeniz", marinas: ["Taşucu Limanı"], boatScene: "KKTC feribot hattı ve tekne geçiş noktası.", tier: 2 },
  { name: "Anamur", slug: "anamur", parent: "mersin", region: "Akdeniz", marinas: [], boatScene: "Türkiye'nin en güney noktasına yakın, el değmemiş Akdeniz kıyısı.", tier: 2 },
  // ADANA
  { name: "Adana", slug: "adana", parent: "adana", region: "Akdeniz", marinas: [], boatScene: "Seyhan nehri ve Akdeniz kıyısıyla gelişen denizcilik potansiyeli.", tier: 2 },
  { name: "Yumurtalık", slug: "yumurtalik", parent: "adana", region: "Akdeniz", marinas: [], boatScene: "Akdeniz doğusunda sakin, balıkçılık ve tekne kültürü.", tier: 3 },
  { name: "Karataş", slug: "karatas", parent: "adana", region: "Akdeniz", marinas: [], boatScene: "Seyhan deltasında küçük tekne ve balıkçı kültürü.", tier: 3 },
  // HATAY
  { name: "Hatay", slug: "hatay", parent: "hatay", region: "Akdeniz", marinas: [], boatScene: "Suriye sınırına yakın, Akdeniz'in doğu ucunda denizcilik.", tier: 2 },
  { name: "İskenderun", slug: "iskenderun", parent: "hatay", region: "Akdeniz", marinas: ["İskenderun Limanı"], boatScene: "İskenderun körfezinin en büyük liman kenti.", tier: 2 },
  { name: "Dörtyol", slug: "dortyol", parent: "hatay", region: "Akdeniz", marinas: [], boatScene: "İskenderun körfezinde endüstriyel ve rekreasyonel denizcilik.", tier: 3 },
  { name: "Samandağ", slug: "samandag", parent: "hatay", region: "Akdeniz", marinas: [], boatScene: "Orontes nehri ağzında balıkçılık ve küçük tekne kültürü.", tier: 3 },
  // SAMSUN
  { name: "Samsun", slug: "samsun", parent: "samsun", region: "Karadeniz", marinas: ["Samsun Yat Limanı"], boatScene: "Karadeniz'in en büyük liman kenti ve tekne merkezi.", tier: 1 },
  { name: "Bafra", slug: "bafra", parent: "samsun", region: "Karadeniz", marinas: [], boatScene: "Kızılırmak deltasında balıkçılık ve küçük tekne kültürü.", tier: 3 },
  { name: "Çarşamba", slug: "carsamba", parent: "samsun", region: "Karadeniz", marinas: [], boatScene: "Yeşilırmak kıyısında Karadeniz'e açılan tekne bölgesi.", tier: 3 },
  // ORDU
  { name: "Ordu", slug: "ordu", parent: "ordu", region: "Karadeniz", marinas: ["Ordu Yat Limanı"], boatScene: "Karadeniz kıyısında fındık ormanları arasında sakin liman kenti.", tier: 2 },
  { name: "Ünye", slug: "unye", parent: "ordu", region: "Karadeniz", marinas: [], boatScene: "Karadeniz'in doğusunda tarihi ve sakin bir kıyı ilçesi.", tier: 3 },
  { name: "Fatsa", slug: "fatsa", parent: "ordu", region: "Karadeniz", marinas: [], boatScene: "Ordu'nun doğusunda gelişen Karadeniz kıyı kenti.", tier: 3 },
  // GİRESUN
  { name: "Giresun", slug: "giresun", parent: "giresun", region: "Karadeniz", marinas: ["Giresun Limanı"], boatScene: "Karadeniz'de ada kıyısında sakin denizcilik kültürü.", tier: 2 },
  { name: "Tirebolu", slug: "tirebolu", parent: "giresun", region: "Karadeniz", marinas: [], boatScene: "Karadeniz'de küçük balıkçı kasabası.", tier: 3 },
  { name: "Görele", slug: "gorele", parent: "giresun", region: "Karadeniz", marinas: [], boatScene: "Giresun'un doğusunda Karadeniz kıyısı.", tier: 3 },
  // TRABZON
  { name: "Trabzon", slug: "trabzon", parent: "trabzon", region: "Karadeniz", marinas: ["Trabzon Yat Limanı"], boatScene: "Doğu Karadeniz'in en büyük liman ve ticaret kenti.", tier: 1 },
  { name: "Akçaabat", slug: "akcaabat", parent: "trabzon", region: "Karadeniz", marinas: [], boatScene: "Trabzon'a komşu, Karadeniz kıyısında sakin ilçe.", tier: 3 },
  { name: "Sürmene", slug: "surmene", parent: "trabzon", region: "Karadeniz", marinas: [], boatScene: "Geleneksel Karadeniz teknesi (tombaz) üretiminin merkezi.", tier: 2 },
  // RİZE
  { name: "Rize", slug: "rize", parent: "rize", region: "Karadeniz", marinas: ["Rize Limanı"], boatScene: "Çay bahçeleri arasında Karadeniz kıyısında denizcilik.", tier: 2 },
  { name: "Pazar", slug: "pazar", parent: "rize", region: "Karadeniz", marinas: [], boatScene: "Rize'nin doğusunda Gürcistan sınırına yakın kıyı ilçesi.", tier: 3 },
  { name: "Ardeşen", slug: "ardesen", parent: "rize", region: "Karadeniz", marinas: [], boatScene: "Fırtına vadisi ağzında Karadeniz kıyısı.", tier: 3 },
  // ARTVİN
  { name: "Artvin", slug: "artvin", parent: "artvin", region: "Karadeniz", marinas: [], boatScene: "Karadeniz'in en doğu köşesi, Gürcistan sınırında denizcilik.", tier: 2 },
  { name: "Hopa", slug: "hopa", parent: "artvin", region: "Karadeniz", marinas: ["Hopa Limanı"], boatScene: "Türkiye'nin en doğu Karadeniz limanı, sınır ticaret noktası.", tier: 2 },
  { name: "Arhavi", slug: "arhavi", parent: "artvin", region: "Karadeniz", marinas: [], boatScene: "Karadeniz kıyısında küçük balıkçı kasabası.", tier: 3 },
  // KOCAELİ
  { name: "Kocaeli", slug: "kocaeli", parent: "kocaeli", region: "Marmara", marinas: ["İzmit Körfezi"], boatScene: "Sanayi kenti olmasına rağmen İzmit körfezinde tekne kültürü.", tier: 2 },
  { name: "Körfez", slug: "korfez", parent: "kocaeli", region: "Marmara", marinas: [], boatScene: "İzmit körfezinde endüstriyel limanlar arasında tekne kullanımı.", tier: 3 },
  { name: "Derince", slug: "derince", parent: "kocaeli", region: "Marmara", marinas: ["Derince Limanı"], boatScene: "İzmit körfezinin önemli liman noktası.", tier: 2 },
  { name: "Hereke", slug: "hereke", parent: "kocaeli", region: "Marmara", marinas: [], boatScene: "Tarihi halı kentiyle ünlü, İzmit körfezi kıyısı.", tier: 3 },
  { name: "Karamürsel", slug: "karamursel", parent: "kocaeli", region: "Marmara", marinas: [], boatScene: "İzmit körfezinin güney kıyısında sakin tekne bölgesi.", tier: 3 },
  // YALOVA
  { name: "Yalova", slug: "yalova", parent: "yalova", region: "Marmara", marinas: ["Yalova Marina"], boatScene: "Marmara'nın güneyinde, İstanbul'a feribot mesafesinde.", tier: 2 },
  { name: "Çınarcık", slug: "cinarcik", parent: "yalova", region: "Marmara", marinas: ["Çınarcık Marina"], boatScene: "Yalova'nın en popüler tatil ve tekne beldesi.", tier: 2 },
  { name: "Armutlu", slug: "armutlu", parent: "yalova", region: "Marmara", marinas: [], boatScene: "Yalova yarımadasının ucunda sakin Marmara kıyısı.", tier: 3 },
  // TEKİRDAĞ
  { name: "Tekirdağ", slug: "tekirdag", parent: "tekirdag", region: "Marmara", marinas: ["Tekirdağ Yat Limanı"], boatScene: "Marmara kuzey kıyısında şarap kentiyle ünlü liman.", tier: 2 },
  { name: "Marmaraereğlisi", slug: "marmaraereglisi", parent: "tekirdag", region: "Marmara", marinas: [], boatScene: "Marmara kıyısında sakin, tarihi liman beldesi.", tier: 3 },
  { name: "Şarköy", slug: "sarkoy", parent: "tekirdag", region: "Marmara", marinas: ["Şarköy Marina"], boatScene: "Marmara güney kıyısında bağcılık ve denizcilik.", tier: 2 },
  { name: "Süleymanpaşa", slug: "suleymanpasa", parent: "tekirdag", region: "Marmara", marinas: [], boatScene: "Tekirdağ merkez ilçesi, Marmara kıyı şeridi.", tier: 3 },
  // ZONGULDAK
  { name: "Zonguldak", slug: "zonguldak", parent: "zonguldak", region: "Karadeniz", marinas: ["Zonguldak Limanı"], boatScene: "Kömür kentiyle ünlü, Karadeniz'de liman kültürü.", tier: 2 },
  { name: "Ereğli", slug: "eregli", parent: "zonguldak", region: "Karadeniz", marinas: ["Ereğli Limanı"], boatScene: "Karadeniz Ereğlisi, demir-çelik kenti ve önemli liman.", tier: 2 },
  // BARTIN
  { name: "Bartın", slug: "bartin", parent: "bartin", region: "Karadeniz", marinas: [], boatScene: "Bartın çayı kıyısında Karadeniz'e açılan sakin il.", tier: 2 },
  { name: "Amasra", slug: "amasra", parent: "bartin", region: "Karadeniz", marinas: ["Amasra Yat Limanı"], boatScene: "Karadeniz'in en güzel tarihi liman kasabası, tekne turlarının gözdesi.", tier: 2 },
  // SİNOP
  { name: "Sinop", slug: "sinop", parent: "sinop", region: "Karadeniz", marinas: ["Sinop Yat Limanı"], boatScene: "Türkiye'nin en kuzey noktası, doğal liman ve denizcilik.", tier: 2 },
  { name: "Gerze", slug: "gerze", parent: "sinop", region: "Karadeniz", marinas: [], boatScene: "Sinop'un doğusunda sakin Karadeniz balıkçı kenti.", tier: 3 },
  { name: "Ayancık", slug: "ayancik", parent: "sinop", region: "Karadeniz", marinas: [], boatScene: "Karadeniz kıyısında ormanlar arasında sakin ilçe.", tier: 3 },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationsByParent(parent: string): Location[] {
  return locations.filter((l) => l.parent === parent);
}

export function getLocationsByTier(tier: 1 | 2 | 3): Location[] {
  return locations.filter((l) => l.tier === tier);
}



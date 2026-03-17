interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "cetekne.com",
        url: "https://cetekne.com",
        logo: "https://cetekne.com/logo.svg",
        description:
          "Avrupa Birliği yetkili Notified Body ile 24 metre altı gezi tekneleri için CE belgelendirme hizmeti. 2013/53/AB Direktifi kapsamında.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "İzmir",
          addressCountry: "TR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+90-507-941-3909",
          contactType: "customer service",
          availableLanguage: "Turkish",
        },
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "cetekne.com",
        url: "https://cetekne.com",
        inLanguage: "tr",
        description:
          "24 metre altı gezi tekneleri için CE belgesi hizmeti.",
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url,
        provider: {
          "@type": "Organization",
          name: "cetekne.com",
          url: "https://cetekne.com",
        },
        areaServed: { "@type": "Place", name: "Türkiye" },
        serviceType: "CE Belgelendirme",
      }}
    />
  );
}

export function FAQPageJsonLd({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer,
          },
        })),
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  publishedAt,
  updatedAt,
  author,
}: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        datePublished: publishedAt,
        dateModified: updatedAt,
        author: { "@type": "Organization", name: author },
        publisher: {
          "@type": "Organization",
          name: "cetekne.com",
          url: "https://cetekne.com",
        },
        inLanguage: "tr",
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}


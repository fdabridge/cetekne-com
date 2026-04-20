import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { locations } from "@/lib/locations";

const BASE_URL = "https://cetekne.com";

// Sabit tarih — her build'de new Date() kullanmak Google'ı yanıltır.
// Gerçekten değişen sayfalar için ilgili içeriğin tarihini kullanıyoruz.
const SITE_LAUNCH = new Date("2025-04-01");
const CONTENT_UPDATED = new Date("2025-04-15"); // Son büyük güncelleme

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                       lastModified: CONTENT_UPDATED, changeFrequency: "weekly",  priority: 1   },
    { url: `${BASE_URL}/ce-belgesi`,       lastModified: SITE_LAUNCH,     changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/hizmetler`,        lastModified: SITE_LAUNCH,     changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/paketler`,         lastModified: SITE_LAUNCH,     changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/sss`,              lastModified: SITE_LAUNCH,     changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/iletisim`,         lastModified: SITE_LAUNCH,     changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/hakkimizda`,       lastModified: SITE_LAUNCH,     changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog`,             lastModified: CONTENT_UPDATED, changeFrequency: "weekly",  priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/hizmetler/${s.slug}`,
    lastModified: SITE_LAUNCH,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 99 lokasyon CE belgesi — tier'a göre öncelik
  const locationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${BASE_URL}/${loc.slug}-ce-belgesi`,
    lastModified: SITE_LAUNCH,
    changeFrequency: "monthly" as const,
    priority: loc.tier === 1 ? 0.9 : loc.tier === 2 ? 0.8 : 0.7,
  }));

  // Blog: her yazının kendi publishedAt tarihini kullan
  const blogPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => {
    const post = getPostBySlug(slug);
    const lastMod = post?.publishedAt ? new Date(post.publishedAt) : SITE_LAUNCH;
    return {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    };
  });

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}


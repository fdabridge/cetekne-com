import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog | Tekne CE Belgesi Rehberleri ve Güncel Bilgiler",
  description:
    "Tekne CE belgelendirme süreci, 2013/53/AB Direktifi, stabilite hesaplamaları ve ihracat gereksinimleri hakkında güncel rehberler ve teknik yazılar.",
  alternates: { canonical: "https://cetekne.com/blog" },
};

const categoryLabels: Record<string, string> = {
  rehber: "Rehber",
  teknik: "Teknik",
  surec: "Süreç",
  pazar: "Pazar",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Ana Sayfa", url: "https://cetekne.com" },
        { name: "Blog", url: "https://cetekne.com/blog" },
      ]} />

      <section className="bg-white py-16 sm:py-20">
        <Container size="wide">
          <h1 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted leading-relaxed">
            CE belgelendirme süreci hakkında güncel bilgiler, teknik rehberler ve sektör haberleri.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <Container size="wide">
          {posts.length === 0 ? (
            <p className="text-center text-text-muted">Henüz blog yazısı bulunmamaktadır.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card hover className="h-full">
                    <Badge variant="accent" className="mb-3">
                      {categoryLabels[post.category] || post.category}
                    </Badge>
                    <h2 className="text-base font-semibold text-text-primary line-clamp-2">{post.title}</h2>
                    <p className="mt-2 text-sm text-text-muted line-clamp-3">{post.description}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-text-muted">
                      <time>{post.publishedAt}</time>
                      <span>{post.readingTime} dk okuma</span>
                    </div>
                    <span className="mt-3 inline-block text-sm font-medium text-accent">Devamını oku →</span>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}


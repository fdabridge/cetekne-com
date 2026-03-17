import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { BreadcrumbJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { getPostBySlug, getAllSlugs, getRelatedPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://cetekne.com/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
  };
}

const categoryLabels: Record<string, string> = {
  rehber: "Rehber",
  teknik: "Teknik",
  surec: "Süreç",
  pazar: "Pazar",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Ana Sayfa", url: "https://cetekne.com" },
        { name: "Blog", url: "https://cetekne.com/blog" },
        { name: post.title, url: `https://cetekne.com/blog/${post.slug}` },
      ]} />
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        url={`https://cetekne.com/blog/${post.slug}`}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        author={post.author}
      />

      <article className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Badge variant="accent" className="mb-4">{categoryLabels[post.category] || post.category}</Badge>
            <h1 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">{post.title}</h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-text-muted">
              <time>{post.publishedAt}</time>
              <span>·</span>
              <span>{post.readingTime} dk okuma</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
            <div className="prose prose-slate mt-10 max-w-none">
              <MDXRemote source={post.content} />
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="bg-surface py-16 sm:py-20">
          <Container>
            <h2 className="mb-6 text-xl font-bold text-text-primary">İlgili Yazılar</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`}>
                  <Card hover className="h-full">
                    <h3 className="text-sm font-semibold text-text-primary line-clamp-2">{r.title}</h3>
                    <p className="mt-2 text-xs text-text-muted line-clamp-2">{r.description}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}


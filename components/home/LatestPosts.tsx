import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getAllPosts } from "@/lib/mdx";

const categoryLabels: Record<string, string> = {
  rehber: "Rehber",
  teknik: "Teknik",
  surec: "Süreç",
  pazar: "Pazar",
};

export function LatestPosts() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container size="wide">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
              Son Blog Yazıları
            </h2>
            <p className="mt-2 text-text-muted">
              CE belgelendirme hakkında güncel bilgiler ve rehberler.
            </p>
          </div>
          <Button href="/blog" variant="ghost" className="hidden sm:inline-flex">
            Tümünü Gör →
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card hover className="h-full">
                <Badge variant="accent" className="mb-3">
                  {categoryLabels[post.category] || post.category}
                </Badge>
                <h3 className="text-base font-semibold text-text-primary line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-text-muted">
                  <time>{post.publishedAt}</time>
                  <span>{post.readingTime} dk okuma</span>
                </div>
                <span className="mt-3 inline-block text-sm font-medium text-accent">
                  Devamını oku →
                </span>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Button href="/blog" variant="outline">
            Tüm Yazıları Gör
          </Button>
        </div>
      </Container>
    </section>
  );
}


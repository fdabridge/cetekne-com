import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: "rehber" | "teknik" | "surec" | "pazar";
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  keywords: string[];
  author: string;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files
    .map((file) => getPostBySlug(file.replace(/\.mdx$/, "")))
    .filter((p): p is BlogPost => p !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug: data.slug || slug,
    title: data.title || "",
    description: data.description || "",
    category: data.category || "rehber",
    publishedAt: data.publishedAt || "",
    updatedAt: data.updatedAt || data.publishedAt || "",
    readingTime: data.readingTime || 5,
    keywords: data.keywords || [],
    author: data.author || "cetekne.com Teknik Ekibi",
    content,
  };
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];
  return getAllPosts()
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}


import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/mdx";

export const alt = "cetekne.com Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function BlogOGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.title ?? "Blog | cetekne.com";
  const description = post?.description ?? "";
  const category = post?.category ?? "rehber";

  const categoryColors: Record<string, string> = {
    rehber: "#0070F3",
    teknik: "#0D9488",
    surec: "#7C3AED",
    pazar: "#D97706",
  };
  const badgeColor = categoryColors[category] ?? "#0070F3";

  const categoryLabels: Record<string, string> = {
    rehber: "Rehber",
    teknik: "Teknik",
    surec: "Süreç",
    pazar: "Pazar",
  };

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A2540",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Category badge */}
        <div
          style={{
            background: badgeColor,
            color: "white",
            fontSize: 20,
            fontWeight: 700,
            padding: "6px 16px",
            borderRadius: 6,
            marginBottom: 28,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          {categoryLabels[category] ?? category}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? 44 : 56,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          {title}
        </div>

        {/* Description */}
        {description && (
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 800,
              lineHeight: 1.5,
              marginBottom: 48,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                background: "#0070F3",
                color: "white",
                fontSize: 16,
                fontWeight: 800,
                padding: "4px 12px",
                borderRadius: 4,
              }}
            >
              CE
            </div>
            <span
              style={{ color: "rgba(255,255,255,0.5)", fontSize: 18, fontWeight: 600 }}
            >
              cetekne.com
            </span>
          </div>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 16 }}>
            AB Yetkili Notified Body
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}


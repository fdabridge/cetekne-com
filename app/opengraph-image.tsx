import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "cetekne.com — Tekne CE Belgesi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
        {/* CE Badge */}
        <div
          style={{
            background: "#0070F3",
            color: "white",
            fontSize: 28,
            fontWeight: 800,
            padding: "8px 20px",
            borderRadius: 8,
            marginBottom: 32,
            letterSpacing: 2,
          }}
        >
          CE
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            marginBottom: 24,
            maxWidth: 800,
          }}
        >
          Tekne CE Belgesi
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 700,
            lineHeight: 1.4,
            marginBottom: 48,
          }}
        >
          24 metre altı gezi tekneleri için AB uygunluk belgelendirmesi.
          IFC Global ortağı.
        </div>

        {/* Trust row */}
        <div style={{ display: "flex", gap: 32 }}>
          {["2013/53/AB Uyumlu", "IFC Global Ortağı", "Hızlı Süreç"].map(
            (label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 20,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#0070F3",
                  }}
                />
                {label}
              </div>
            )
          )}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            fontSize: 22,
            color: "rgba(255,255,255,0.4)",
            fontWeight: 600,
          }}
        >
          cetekne.com
        </div>
      </div>
    ),
    { ...size }
  );
}


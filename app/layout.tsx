import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://cetekne.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tekne CE Belgesi | cetekne.com",
    template: "%s | cetekne.com",
  },
  description:
    "24 metre altı gezi tekneleri için CE belgesi hizmeti. Avrupa Birliği yetkili Notified Body ile 2013/53/AB Direktifi kapsamında teknenizin AB pazarına uygunluk belgelendirmesini sağlıyoruz.",
  keywords: [
    "tekne CE belgesi",
    "CE belgelendirme",
    "gezi teknesi CE",
    "2013/53/AB",
    "Notified Body",
    "tekne ihracat",
    "AB direktifi",
  ],
  authors: [{ name: "cetekne.com Teknik Ekibi" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "cetekne.com",
    title: "Tekne CE Belgesi | cetekne.com",
    description:
      "24 metre altı gezi tekneleri için CE belgesi hizmeti. AB yetkili Notified Body ile 2013/53/AB Direktifi kapsamında belgelendirme.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tekne CE Belgesi | cetekne.com",
    description:
      "24 metre altı gezi tekneleri için CE belgesi hizmeti. AB yetkili Notified Body.",
  },
  alternates: {
    canonical: siteUrl,
    languages: { tr: siteUrl },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

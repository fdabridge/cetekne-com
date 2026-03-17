"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function IletisimPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", boatType: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setResponse(data.message || "Başvurunuz alındı.");
      } else {
        setStatus("error");
        setResponse(data.error || "Bir hata oluştu.");
      }
    } catch {
      setStatus("error");
      setResponse("Bağlantı hatası. Lütfen tekrar deneyin.");
    }
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h1 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">İletişim</h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted leading-relaxed">
            CE belgelendirme süreciniz hakkında bilgi almak için formu doldurun. Ekibimiz 24 saat içinde sizinle iletişime geçecektir.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                {status === "success" ? (
                  <div className="py-8 text-center">
                    <h2 className="text-xl font-bold text-text-primary">Başvurunuz Alındı!</h2>
                    <p className="mt-4 text-sm text-text-muted leading-relaxed whitespace-pre-line">{response}</p>
                    <Button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", boatType: "", message: "" }); }} variant="outline" className="mt-6">
                      Yeni Başvuru
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input label="Ad Soyad" required value={form.name} onChange={(e) => update("name", e.target.value)} />
                      <Input label="E-posta" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input label="Telefon" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                      <Input label="Tekne Tipi" placeholder="Ör: Motor Yat, Yelkenli, RIB..." value={form.boatType} onChange={(e) => update("boatType", e.target.value)} />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-text-primary">Mesajınız</label>
                      <textarea
                        rows={4}
                        required
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="Tekneniz ve CE belgesi ihtiyacınız hakkında kısaca bilgi verin..."
                      />
                    </div>
                    {status === "error" && <p className="text-sm text-red-600">{response}</p>}
                    <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                      {status === "loading" ? "Gönderiliyor..." : "Başvuru Gönder"}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <Card>
                <div className="flex items-start gap-3">
                  <Mail size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">E-posta</h3>
                    <p className="mt-1 text-sm text-text-muted">info@cetekne.com</p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">Telefon</h3>
                    <p className="mt-1 text-sm text-text-muted">+90 (212) 000 00 00</p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">Adres</h3>
                    <p className="mt-1 text-sm text-text-muted">İstanbul, Türkiye</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


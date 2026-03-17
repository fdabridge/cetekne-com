const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

interface InquiryInput {
  name: string;
  email: string;
  phone: string;
  boatType: string;
  message: string;
}

interface AnthropicResponse {
  content: { type: string; text: string }[];
}

export async function generatePreAssessment(
  input: InquiryInput
): Promise<string> {
  if (!ANTHROPIC_API_KEY) {
    return "Başvurunuz alındı. Ekibimiz en kısa sürede sizinle iletişime geçecektir.";
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        system:
          "Sen IFC Global'in CE belgelendirme uzmanısın. Tekne sahibine kısa, profesyonel ve güven verici Türkçe bir ön bilgilendirme mesajı yaz. Jargon kullan ama açıkla. Maksimum 150 kelime.",
        messages: [
          {
            role: "user",
            content: `Tekne tipi: ${input.boatType}, Mevcut durum: ${input.message}, İsim: ${input.name}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const data: AnthropicResponse = await response.json();
    return data.content[0]?.text || "Ön değerlendirme oluşturulamadı.";
  } catch {
    return "Başvurunuz alındı. Ekibimiz en kısa sürede sizinle iletişime geçecektir.";
  }
}


import { NextRequest, NextResponse } from "next/server";
import { generatePreAssessment } from "@/lib/anthropic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, boatType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Ad, e-posta ve mesaj alanları zorunludur." },
        { status: 400 }
      );
    }

    // Generate AI pre-assessment
    const preAssessment = await generatePreAssessment({
      name,
      email,
      phone: phone || "",
      boatType: boatType || "",
      message,
    });

    // TODO: Send email notification or webhook when destination is configured
    // For now, log the inquiry
    console.log("New inquiry:", { name, email, phone, boatType, message });

    return NextResponse.json({
      success: true,
      message: preAssessment,
    });
  } catch (error) {
    console.error("Inquiry error:", error);
    return NextResponse.json(
      { error: "Bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}


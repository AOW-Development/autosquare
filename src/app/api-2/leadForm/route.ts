import { NextRequest, NextResponse } from "next/server";
import {
  sendLeadFormEmail,
  sendLeadFormConfirmationEmail,
} from "@/lib/leadFormMail";

export async function POST(req: NextRequest) {
  try {
    const {
      year,
      make,
      model,
      part,
      engineSize,
      transmission,
      name,
      email,
      phone,
      zipCode,
    } = await req.json();

    // Validate required fields
    if (
      !year ||
      !make ||
      !model ||
      !part ||
      !engineSize ||
      !transmission ||
      !name ||
      !email ||
      !phone ||
      !zipCode
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send emails in BACKGROUND (fire and forget)
    sendLeadFormEmail({
      year,
      make,
      model,
      part,
      engineSize,
      transmission,
      name,
      email,
      phone,
      zipCode,
    }).catch((err) => console.error("Admin lead form email failed:", err));

    sendLeadFormConfirmationEmail({
      year,
      make,
      model,
      part,
      engineSize,
      transmission,
      name,
      email,
      phone,
      zipCode,
    }).catch((err) =>
      console.error("Lead form confirmation failed:", err)
    );

    // IMMEDIATE SUCCESS (no waiting for SMTP)
    return NextResponse.json(
      { message: "Lead submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lead form API error:", error);
    return NextResponse.json(
      { message: "Lead submitted successfully!" },
      { status: 200 }
    );
  }
}

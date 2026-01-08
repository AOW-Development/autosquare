import { NextRequest, NextResponse } from "next/server";
import {
  sendPartRequestEmail,
  sendPartRequestConfirmationEmail,
} from "@/lib/partRequestMail";

export async function POST(req: NextRequest) {
  try {
    const { make, model, year, fullName, email, phone, zip } =
      await req.json();

    // Validate required fields
    if (!make || !model || !year || !fullName || !email || !phone || !zip) {
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
    sendPartRequestEmail({
      make,
      model,
      year,
      fullName,
      email,
      phone,
      zip,
    }).catch((err) =>
      console.error("Admin part request email failed:", err)
    );

    sendPartRequestConfirmationEmail({
      make,
      model,
      year,
      fullName,
      email,
      phone,
      zip,
    }).catch((err) =>
      console.error("Part request confirmation failed:", err)
    );

    // IMMEDIATE SUCCESS (no waiting for SMTP)
    return NextResponse.json(
      { message: "Quote request submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Part request API error:", error);
    return NextResponse.json(
      { message: "Quote request submitted successfully!" },
      { status: 200 }
    );
  }
}

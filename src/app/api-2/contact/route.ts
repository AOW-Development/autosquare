import { NextRequest, NextResponse } from "next/server";
import {
  sendContactFormEmail,
  sendContactConfirmationEmail,
} from "@/lib/contactMail";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await req.json();
    const { name, email, message, captchaToken } = body;

    // Validate required fields
    if (!name || !email || !message || !captchaToken) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const captchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      { method: "POST" }
    );
    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return NextResponse.json(
        { message: "CAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Trim and clean input data
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanMessage = message.trim();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
    }

    // Validate message length
    if (cleanMessage.length < 5) {
      return NextResponse.json(
        { message: "Message must be at least 5 characters long" },
        { status: 400 }
      );
    }

    if (cleanMessage.length > 5000) {
      return NextResponse.json(
        { message: "Message must be less than 5000 characters" },
        { status: 400 }
      );
    }

    const contactData = { name: cleanName, email: cleanEmail, message: cleanMessage };

    // Send email to admin
    const adminEmailSent = await sendContactFormEmail(contactData);

    if (!adminEmailSent) {
      return NextResponse.json(
        { message: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    // Send confirmation to customer (non-critical)
    try {
      await sendContactConfirmationEmail(contactData);
    } catch (confirmationError) {
      console.error("Failed to send confirmation email:", confirmationError);
    }

    return NextResponse.json(
      {
        message: "Message sent successfully!",
        note: "You will receive a confirmation email shortly. We typically respond within 24-48 business hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { message: "Failed to process request. Please try again later." },
      { status: 500 }
    );
  }
}
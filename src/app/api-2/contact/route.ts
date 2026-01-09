import { NextRequest, NextResponse } from "next/server";
import {
  sendContactFormEmail,
  sendContactConfirmationEmail,
} from "@/lib/contactMail";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields: name, email, message" },
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

    // Send email to admin
    const adminEmailSent = await sendContactFormEmail({ name, email, message });

    if (!adminEmailSent) {
      return NextResponse.json(
        { message: "Failed to send email to admin" },
        { status: 500 }
      );
    }

    // Send confirmation email to customer (fire and forget, don't wait)
    sendContactConfirmationEmail({ name, email, message }).catch((err) =>
      console.error("Failed to send confirmation email:", err)
    );

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { message: "Failed to process request" },
      { status: 500 }
    );
  }
}

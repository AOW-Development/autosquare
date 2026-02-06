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

    // Trim and clean input data
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanMessage = message.trim();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
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

    // Clean data to send
    const contactData = {
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage
    };

    // Send email to admin
    const adminEmailSent = await sendContactFormEmail(contactData);

    if (!adminEmailSent) {
      return NextResponse.json(
        { message: "Failed to send email to admin. Please try again later." },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    try {
      await sendContactConfirmationEmail(contactData);
    } catch (confirmationError) {
      console.error("Failed to send confirmation email:", confirmationError);
      // Don't fail the entire request if confirmation email fails
      // The admin email has been sent, which is the critical part
    }

    return NextResponse.json(
      { 
        message: "Message sent successfully!",
        note: "You will receive a confirmation email shortly. We typically respond within 24-48 business hours."
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
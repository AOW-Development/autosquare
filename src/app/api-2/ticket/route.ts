import { NextRequest, NextResponse } from "next/server";
import { sendTicketEmail, sendTicketConfirmationEmail } from "@/lib/ticketMail";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    const body = await req.json();
    const { fullName, orderId, email, phone, message } = body;

    // Validate required fields
    if (!fullName || !orderId || !email || !phone || !message) {
      return NextResponse.json(
        {
          message:
            "Missing required fields: fullName, orderId, email, phone, message",
        },
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

    // Enhanced phone validation for US customers
    const cleanedPhone = phone.replace(/\D/g, '');
    
    // Check if it's a valid US phone number (10 or 11 digits starting with 1)
    if (cleanedPhone.length === 10) {
      // Standard 10-digit US number
      console.log("Valid 10-digit US phone number");
    } else if (cleanedPhone.length === 11 && cleanedPhone.startsWith('1')) {
      // 11-digit US number starting with 1
      console.log("Valid 11-digit US phone number");
    } else {
      return NextResponse.json(
        { 
          message: "Invalid phone number format. Please provide a valid US phone number (10 digits).",
          example: "(123) 456-7890"
        },
        { status: 400 }
      );
    }

    // Trim and validate message length
    const trimmedMessage = message.trim();
    if (trimmedMessage.length < 10) {
      return NextResponse.json(
        { message: "Message must be at least 10 characters long" },
        { status: 400 }
      );
    }

    if (trimmedMessage.length > 2000) {
      return NextResponse.json(
        { message: "Message must be less than 2000 characters" },
        { status: 400 }
      );
    }

    // Validate order ID format (assuming order IDs are alphanumeric and 6+ characters)
    const orderIdRegex = /^[A-Za-z0-9-]{6,}$/;
    if (!orderIdRegex.test(orderId)) {
      return NextResponse.json(
        { message: "Invalid order ID format" },
        { status: 400 }
      );
    }

    // Create ticket data with sanitized inputs
    const ticketData = {
      fullName: fullName.trim(),
      orderId: orderId.trim().toUpperCase(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: trimmedMessage,
    };

    // Send email to admin
    const ticketEmailSent = await sendTicketEmail(ticketData);

    if (!ticketEmailSent) {
      return NextResponse.json(
        { message: "Failed to submit support ticket. Please try again or contact us directly." },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    try {
      await sendTicketConfirmationEmail(ticketData);
    } catch (confirmationError) {
      console.error("Confirmation email failed:", confirmationError);
      // Don't fail the request if confirmation fails, just log it
    }

    return NextResponse.json(
      { 
        message: "Support ticket submitted successfully",
        ticketNumber: Date.now().toString().slice(-6),
        nextSteps: "You will receive a confirmation email shortly and our team will contact you within 24 business hours."
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Ticket API error:", error);
    return NextResponse.json(
      { message: "Failed to process request. Please try again later." },
      { status: 500 }
    );
  }
}
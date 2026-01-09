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

    // Validate phone format (basic)
    const phoneRegex = /^[0-9\-\(\)\s]+$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { message: "Invalid phone format" },
        { status: 400 }
      );
    }

    // Send email to admin
    const ticketEmailSent = await sendTicketEmail({
      fullName,
      orderId,
      email,
      phone,
      message,
    });

    if (!ticketEmailSent) {
      return NextResponse.json(
        { message: "Failed to send ticket to admin" },
        { status: 500 }
      );
    }

    // Send confirmation email to customer (fire and forget)
    sendTicketConfirmationEmail({
      fullName,
      orderId,
      email,
      phone,
      message,
    }).catch((err) =>
      console.error("Failed to send confirmation email:", err)
    );

    return NextResponse.json(
      { message: "Ticket submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Ticket API error:", error);
    return NextResponse.json(
      { message: "Failed to process request" },
      { status: 500 }
    );
  }
}

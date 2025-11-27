import { NextRequest, NextResponse } from "next/server";
import {
  sendAbandonedCartEmail,
  AbandonedCartData,
} from "@/lib/abandoned-cartMail";

export async function POST(request: NextRequest) {
  try {
    console.log("🔔 [API] Abandoned Cart Email API CALLED!");
    const data: AbandonedCartData = await request.json();

    console.log("📧 [API] Customer email:", data.customerInfo?.email);
    console.log(
      "📧 [API] Customer name:",
      data.customerInfo?.firstName,
      data.customerInfo?.lastName
    );
    console.log("🛍️ [API] Cart items:", data.cartItems?.length);
    console.log("📦 [API] Full data received:", JSON.stringify(data, null, 2));

    // Validate required data
    if (!data.customerInfo?.email) {
      console.error("❌ [API] Missing customer email!");
      throw new Error("Customer email is required");
    }

    // Send abandoned cart email to admin
    console.log("📤 [API] Calling sendAbandonedCartEmail...");
    const result = await sendAbandonedCartEmail(data);
    console.log("📬 [API] Email send result:", result);

    return NextResponse.json({
      success: result,
      message: result
        ? "✅ Abandoned cart email sent successfully to admin"
        : "❌ Failed to send abandoned cart email",
    });
  } catch (error) {
    console.error("❌ [API] Error in abandoned cart email API:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

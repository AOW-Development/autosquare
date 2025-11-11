import { NextRequest, NextResponse } from "next/server";
import { sendOrderEmails, formatOrderData } from "@/lib/mail";
import { sendCustomerInvoiceEmail } from "@/lib/customerMail";
import { sendOrderFailedEmail } from "@/lib/failedInvoice";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    console.log("API Route received data:", data);
    console.log("Order number received in API:", data.orderNumber);

    // Validate required data
    if (!data.user?.email) {
      throw new Error("User email is required");
    }

    // Format the data properly
    const orderData = formatOrderData(
      data.user,
      data.payment,
      data.billing,
      data.shipping,
      data.cartItems,
      data.orderNumber // Pass the order number from the request
    );

    if (data.status === "failed") {
      const failedResult = await sendOrderFailedEmail(orderData);
      return NextResponse.json({
        success: failedResult,
        message: failedResult
          ? "Order failed email sent successfully"
          : "Failed to send order failed email",
      });
    }

    // Send both emails
    const [adminResult, customerResult] = await Promise.all([
      sendOrderEmails(orderData),
      sendCustomerInvoiceEmail(orderData),
      sendOrderFailedEmail(orderData),
    ]);

    return NextResponse.json({
      success: true,
      admin: adminResult,
      customer: customerResult,
      message: "Order confirmation email sent successfully",
    });
  } catch (error) {
    console.error("Error sending order emails:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

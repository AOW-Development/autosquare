import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe-server";
import type {
  CreatePaymentIntentRequest,
  CreatePaymentIntentResponse,
} from "@/types/stripe";

export async function POST(
  request: NextRequest
): Promise<NextResponse<CreatePaymentIntentResponse>> {
  try {
    const {
      amount,
      customerEmail,
      orderNumber,
      metadata = {},
    }: CreatePaymentIntentRequest = await request.json();

    console.log(' Creating Payment Intent:', { amount, customerEmail, orderNumber });

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Valid amount is required" },
        { status: 400 }
      );
    }

    if (!customerEmail) {
      return NextResponse.json(
        { error: "Customer email is required" },
        { status: 400 }
      );
    }

    // Create PaymentIntent with automatic payment methods
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert dollars to cents
      currency: "usd",
      receipt_email: customerEmail,
      metadata: {
        orderNumber,
        customerEmail,
        ...metadata,
        customerName: `${metadata.firstName || ""} ${
          metadata.lastName || ""
        }`.trim(),
        customerAddress: `${metadata.address || ""}, ${metadata.city || ""}, ${
          metadata.state || ""
        }, ${metadata.zipCode || ""}, US`,
      },
      
      //  THIS IS KEY - Enables Card, Apple Pay, Google Pay, Link
      automatic_payment_methods: {
        enabled: true,
        // allow_redirects: "never", // Keep users on your site
      },
       payment_method_options: {
          card: {
            request_three_d_secure: "automatic",
          },
        },
      shipping: metadata.address
        ? {
            name: `${metadata.firstName || ""} ${
              metadata.lastName || ""
            }`.trim(),
            address: {
              line1: metadata.address || "",
              line2: metadata.apartment || "",
              city: metadata.city || "",
              state: metadata.state || "",
              postal_code: metadata.zipCode || "",
              country: "US",
            },
          }
        : undefined,
    });

    if (!paymentIntent.client_secret) {
      throw new Error("Failed to create payment intent");
    }

    console.log(' Payment Intent created:', {
      id: paymentIntent.id,
      amount: paymentIntent.amount,
      payment_method_types: paymentIntent.payment_method_types,
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    } as CreatePaymentIntentResponse);
  } catch (error: any) {
    console.error(" Create PaymentIntent error:", error);
    return NextResponse.json(
      { error: error?.message || "Error creating payment intent" },
      { status: 500 }
    );
  }
}

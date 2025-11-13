import { NextResponse } from "next/server";
import stripe from "@/lib/stripe-server";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Invalid signature:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  console.log(` Stripe event received: ${event.type} (${event.id})`);

  //  Forwarding to backend /api/webhook
  try {
    const backendUrl = `${process.env.NEXT_PUBLIC_API_URL}/webhooks`;
    console.log(`Forwarding to backend: ${backendUrl}`);
    
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        provider: "stripe",
        eventId: event.id,
        type: event.type,
        payload: event.data,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Backend responded with ${response.status}: ${errorText}`);
    } else {
      console.log(` Successfully forwarded to backend`);
    }
  } catch (err: any) {
    console.error(" Error sending to backend:", err.message);
  }

  return NextResponse.json({ received: true });
}
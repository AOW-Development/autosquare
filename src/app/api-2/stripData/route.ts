import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { typescript: true });

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const paymentIntentId = searchParams.get("payment_intent");

    if (!paymentIntentId) {
      return NextResponse.json({ error: "payment_intent is required" }, { status: 400 });
    }

    // STEP 1 — Retrieve PI with expanded charge
    const pi = await stripe.paymentIntents.retrieve(paymentIntentId, {
      expand: ["latest_charge"],
    });

    const charge = pi.latest_charge as any;
    const paymentMethodId = charge?.payment_method;

    if (!paymentMethodId) {
      return NextResponse.json({ error: "No payment method found" });
    }

    // STEP 2 — Retrieve PaymentMethod separately
    const pm = await stripe.paymentMethods.retrieve(paymentMethodId);

    return NextResponse.json({
      paymentIntentId: pi.id,
      amount: pi.amount,
      currency: pi.currency,
      status: pi.status,
      created: pi.created,

      cardDetails: pm.card
        ? {
            brand: pm.card.brand,
            last4: pm.card.last4,
            exp_month: pm.card.exp_month,
            exp_year: pm.card.exp_year,
            country: pm.card.country,
          }
        : null,

      billingDetails: pm.billing_details || null,
    });
  } catch (error: any) {
    console.error("Stripe API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

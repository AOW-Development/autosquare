import { NextRequest, NextResponse } from 'next/server';
import stripe from '@/lib/stripe-server';
import type { StripeCheckoutRequest, StripeCheckoutResponse } from '@/types/stripe';

export async function POST(
  request: NextRequest
): Promise<NextResponse<StripeCheckoutResponse>> {
  try {
    const { cartItems, customerEmail, orderNumber, metadata }: StripeCheckoutRequest = await request.json();

    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json({ error: 'Cart items are required' }, { status: 400 });
    }

    if (!customerEmail) {
      return NextResponse.json({ error: 'Customer email is required' }, { status: 400 });
    }

    const origin = request.headers.get('origin') || 'http://localhost:3000';

    // ✅ Fix image URLs
    const lineItems = cartItems.map(item => {
      let imageUrl = item.image || '';
      if (imageUrl && !imageUrl.startsWith('http')) {
        imageUrl = `${origin}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
      }

      return {
        price_data: {
          currency:"usd",
          product_data: {
            name: item.title || item.name || 'Product',
            description: item.subtitle || '',
            images: imageUrl ? [imageUrl] : [],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      };
    });

    // ✅ Create Stripe Checkout Session with all payment options
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      customer_email: customerEmail,
      payment_method_types: [
        'card',            // enables Card + Apple Pay + Google Pay
        'us_bank_account', // enables Bank Transfer (ACH in US)
        'link',            // enables Link (Stripe's one-click checkout)
      ],
      success_url: `${origin}/account/thankYou?session_id={CHECKOUT_SESSION_ID}&order=${orderNumber}`,
      cancel_url: `${origin}/account/paymentInfo?canceled=true`,
      metadata: { orderNumber, ...metadata },
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
    });

    if (!session.url) {
      throw new Error('Failed to create checkout session URL');
    }

    return NextResponse.json({ url: session.url } as StripeCheckoutResponse);
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: error?.message || 'Error creating checkout session' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import stripe from '@/lib/stripe-server';
import type { ConfirmPaymentRequest, ConfirmPaymentResponse } from '@/types/stripe';

export async function POST(
  request: NextRequest
): Promise<NextResponse<ConfirmPaymentResponse>> {
  try {
    const { paymentIntentId }: ConfirmPaymentRequest = await request.json();

    if (!paymentIntentId) {
      return NextResponse.json(
        { error: 'Payment Intent ID is required' },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    return NextResponse.json({
      status: paymentIntent.status,
      paymentIntent,
    } as ConfirmPaymentResponse);
  } catch (error: any) {
    console.error('Confirm payment error:', error);
    return NextResponse.json(
      { error: error?.message || 'Error confirming payment' },
      { status: 500 }
    );
  }
}
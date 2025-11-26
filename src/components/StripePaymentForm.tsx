'use client';

import { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

interface StripePaymentFormProps {
  onSuccess: (paymentIntentId: string) => void;
  onError: (error: string) => void;
  orderNumber: string;
  total: number;
}

export default function StripePaymentForm({
  onSuccess,
  onError,
  orderNumber,
  total,
}: StripePaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error('Stripe has not loaded yet');
      return;
    }

    setIsProcessing(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/account/thankYou?order=${orderNumber}`,

          // REQUIRED because you are hiding billing fields
          payment_method_data: {
            billing_details: {
              address: {
                country: 'US',
                postal_code: '00000',
              },
            },
          },
        },
        redirect: 'if_required',
      });

      if (error) {
        onError(error.message || 'Payment failed');
        toast.error(error.message || 'Payment failed');
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        onSuccess(paymentIntent.id);
        toast.success('Payment successful!');
      }
    } catch (err: any) {
      onError(err.message || 'Payment processing error');
      toast.error(err.message || 'Payment processing error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 border-[#252525E5] p-6 bg-[#252525E5] ">

      <PaymentElement
        options={{
          layout: 'tabs',

          // REQUIRED FIX FOR GOOGLE PAY + APPLE PAY
        wallets: {
              applePay: "auto",
              googlePay: "auto",
            } ,

          // You kept billing fields hidden, leaving as is
          fields: {
            billingDetails: {
              address: {
                country: 'never',
                postalCode: 'never',
              },
            },
          },

          // Keep your default country
          defaultValues: {
            billingDetails: {
              address: {
                country: 'US',
              },
            },
          },
        }}
      />

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className={`w-full py-3 sm:py-4 rounded-md font-exo2 text-lg sm:text-xl transition-colors ${
          !stripe || isProcessing
            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
            : 'bg-[#009AFF] text-white hover:bg-blue-500'
        }`}
      >
        {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
      </button>
    </form>
  );
}

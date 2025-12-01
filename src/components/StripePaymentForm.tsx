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
 <form
  onSubmit={handleSubmit}
  className="rounded-xl bg-[#1f1f1f] border border-[#2e2e2e] p-6 sm:p-8 space-y-6"
>
  {/* HEADER */}

  <div className="flex items-center justify-between space-y-0">
    <div className="space-y-1">
      <h2 className="text-xl sm:text-2xl font-semibold text-white font-exo2">
        Secure payment
      </h2>
      <p className="text-base sm:text-lg text-gray-400 font-exo2">
        Complete your purchase using a secure payment method.
      </p>
    </div>
    <img
      src="/stripe2.png"
      alt="Stripe"
      className="h-8 sm:h-12 opacity-95"
    />
  </div>


  {/* PAYMENT ELEMENT */}
  <div className="rounded-lg bg-[#252525] border border-[#333] p-4">
    <PaymentElement
      options={{
        layout: 'tabs',
        wallets: {
          applePay: 'auto',
          googlePay: 'auto',
        },
        fields: {
          billingDetails: {
            address: {
              country: 'never',
              postalCode: 'never',
            },
          },
        },
        defaultValues: {
          billingDetails: {
            address: {
              country: 'US',
            },
          },
        },
      }}
    />
  </div>

  {/* SECURITY INFO */}
  <div className="flex items-start gap-2 text-sm text-gray-300 font-exo2">
    <span className="mt-[2px]">🔒</span>
          <p className="text-base sm:text-[16px] text-gray-200 font-exo2 leading-relaxed">
        Payments are securely processed by{' '}
        <span className="text-white font-semibold">Stripe</span> (PCI-DSS Level 1) with{' '}
        <span className="font-medium">SSL encryption</span>.
      </p>

  </div>

  {/* PAY BUTTON */}
  <button
    type="submit"
    disabled={!stripe || isProcessing}
    className={`w-full rounded-lg py-3.5 text-lg font-semibold font-exo2 transition-all ${
      !stripe || isProcessing
        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
        : 'bg-[#009AFF] text-white hover:bg-[#007fe0]'
    }`}
  >
    {isProcessing ? 'Processing payment…' : `Pay $${total.toFixed(2)}`}
  </button>

  {/* SUPPORT */}
  <div className="text-center text-lg text-gray-300 font-exo2">
    Need assistance?{' '}
    <a
      href="tel:18883382540"
      className="text-[#009AFF] font-medium underline"
    >
      (888) 338-2540 {''}
    </a>
   - we’re here to help!  
  </div>

  {/* POLICY */}
  <div className="text-center text-sm text-gray-400 font-exo2">
    Free shipping · Easy returns ·{' '}
    <a
      href="/account/warrantyAndReturn"
      className="text-[#009AFF] underline font-medium"
    >
      Warranty & return policy
    </a>
  </div>
</form>

);

}

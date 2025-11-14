
export interface StripeCheckoutRequest {
  cartItems: Array<{
    id: string;
    title?: string;
    name?: string;
    subtitle?: string;
    image?: string;
    price: number;
    quantity: number;
  }>;
  customerEmail: string;
  orderNumber: string;
  metadata?: {
    // existing
    userId?: string;
    sessionId?: string;

    // ✅ newly added fields for name + address
    firstName?: string;
    lastName?: string;
    address?: string;
    apartment?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;

    // optional flags or others
    buyInOneClick?: string;

    [key: string]: any;
  };
}

export interface CreatePaymentIntentRequest {
  amount: number;
  customerEmail: string;
  orderNumber: string;
  metadata?: {
    userId?: string;
    sessionId?: string;     
    firstName?: string;
    lastName?: string;
    address?: string;
    apartment?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    buyInOneClick?: string;
    [key: string]: any;
  };
}
export interface CreatePaymentIntentResponse {
  clientSecret?: string;
  paymentIntentId?: string;
  error?: string;
} 


export interface StripeCheckoutResponse {
  sessionId?: string;
  error?: string;
  url?: string;
}

export interface StripeWebhookEvent {
  type: string;
  data: {
    object: any;
  };
}
export interface ConfirmPaymentRequest {
  paymentIntentId: string;
}
export interface ConfirmPaymentResponse {
  status?: string;
  paymentIntent?: any;
  error?: string;
}
    
 
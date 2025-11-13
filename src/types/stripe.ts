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
    userId?: string;
    sessionId?: string;
    [key: string]: any;
  };
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
/**
 * Redis Checkout Utilities
 * Helper functions to store and retrieve checkout data from Redis
 * ALL DATA STORED IN ONE SINGLE JSON OBJECT
 */

// Helper function to get the base URL for API calls
// Works in both client-side and server-side contexts
const getBaseUrl = (): string => {
  // Client-side: use relative URLs
  if (typeof window !== "undefined") {
    return "";
  }

  // Server-side: use absolute URL
  // Try NEXT_PUBLIC_SITE_URL first, then fallback to localhost for development
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl) {
    return siteUrl;
  }
  return "http://localhost:3000";
};

// Generate a unique session ID for the checkout
export const generateSessionId = (): string => {
  if (typeof window !== "undefined") {
    // Check if session ID already exists in localStorage
    let sessionId = localStorage.getItem("session_id");
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random()
        .toString(36)
        .substring(7)}`;
      localStorage.setItem("session_id", sessionId);
    }
    return sessionId;
  }
  return `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
};

// Clear session ID from localStorage
export const clearSessionId = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("session_id");
  }
};

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface ShippingInfo {
  firstName: string;
  lastName: string;
  phone: string;
  company?: string;
  country: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  userType: string;
  email: string;
}

interface BillingInfo {
  firstName: string;
  lastName: string;
  phone: string;
  company?: string;
  country: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  userType: string;
  sameAsShipping: boolean;
}

interface VerificationInfo {
  isVerified: boolean;
  phoneNumber?: string;
}

interface CartItem {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  image: string;
  quantity: number;
  price: number;
}

interface OrderTotal {
  subtotal: number;
  shipping: number;
  taxes: number;
  total: number;
}

interface PaymentInfo {
  paymentMethod: string;
  cardData?: {
    cardNumber: string;
    cardholderName: string;
    expirationDate: string;
    securityCode: string;
    cardType?: string;
  };
  paymentIntentId?: string;
}

interface CheckoutData {
  customerInfo?: CustomerInfo;
  shippingInfo?: ShippingInfo;
  billingInfo?: BillingInfo;
  verification?: VerificationInfo;
  cartItems?: CartItem[];
  orderTotal?: OrderTotal;
  paymentInfo?: PaymentInfo;
  orderNumber?: string;
  buyInOneClick?: boolean;
  termsAccepted?: boolean;
  isOrderCreatedInBackend?: boolean;
}

// Save complete checkout data to Redis (ONE SINGLE JSON)
export const saveCheckoutData = async (
  data: CheckoutData,
  sessionId?: string
): Promise<boolean> => {
  try {
    const sid = sessionId || generateSessionId();
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api-2/redisStore`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "saveCheckout",
        sessionId: sid,
        data,
      }),
    });

    const result = await response.json();
    return result.success || false;
  } catch (error) {
    console.error("Error saving checkout data:", error);
    return false;
  }
};

// Alias for backward compatibility
export const saveCompleteCheckout = saveCheckoutData;

// Track OTP attempts
export const trackOtpAttempt = async (
  phoneNumber: string
): Promise<{ success: boolean; attempts?: number; error?: string }> => {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api-2/redisStore`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "saveOtpAttempt",
        sessionId: "otp", // Not used for OTP attempts
        data: { phoneNumber },
      }),
    });

    const result = await response.json();
    if (response.status === 429) {
      return { success: false, error: result.error };
    }
    return { success: true, attempts: result.attempts };
  } catch (error) {
    console.error("Error tracking OTP attempt:", error);
    return { success: false, error: "Failed to track OTP attempt" };
  }
};

// Retrieve checkout data from Redis
export const getCheckoutData = async (
  sessionId?: string
): Promise<CheckoutData | null> => {
  try {
    const sid = sessionId || generateSessionId();
    const baseUrl = getBaseUrl();
    const response = await fetch(
      `${baseUrl}/api-2/redisStore?sessionId=${sid}`
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error retrieving checkout data:", error);
    return null;
  }
};

// Get ALL users checkout data from Redis array
export const getAllUsers = async (): Promise<CheckoutData[]> => {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(
      `${baseUrl}/api-2/redisStore?type=all&sessionId=temp`
    );
    const result = await response.json();
    return result.allUsers || [];
  } catch (error) {
    console.error("Error retrieving all users:", error);
    return [];
  }
};

// Alias for backward compatibility
export const getAllCheckoutData = getCheckoutData;

// Get OTP attempts for a phone number
export const getOtpAttempts = async (phoneNumber: string): Promise<number> => {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(
      `${baseUrl}/api-2/redisStore?phoneNumber=${encodeURIComponent(
        phoneNumber
      )}&type=otpAttempts`
    );
    const result = await response.json();
    return result.attempts || 0;
  } catch (error) {
    console.error("Error retrieving OTP attempts:", error);
    return 0;
  }
};

// Clear all checkout data from Redis
export const clearCheckoutData = async (
  sessionId?: string
): Promise<boolean> => {
  try {
    const sid = sessionId || generateSessionId();
    const baseUrl = getBaseUrl();
    const response = await fetch(
      `${baseUrl}/api-2/redisStore?sessionId=${sid}`,
      {
        method: "DELETE",
      }
    );
    const result = await response.json();

    // Also clear local session ID
    clearSessionId();

    return result.success || false;
  } catch (error) {
    console.error("Error clearing checkout data:", error);
    return false;
  }
};

// Update checkout data
export const updateCheckoutData = async (
  updates: Partial<CheckoutData>,
  sessionId?: string
): Promise<boolean> => {
  try {
    const sid = sessionId || generateSessionId();
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api-2/redisStore`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId: sid,
        updates,
      }),
    });

    const result = await response.json();
    return result.success || false;
  } catch (error) {
    console.error("Error updating checkout data:", error);
    return false;
  }
};

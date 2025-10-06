import { generateOrderNumber } from "./order";
import { orders } from './api';

export const createOrderInBackend = async (orderData: any) => {
  try {
    console.log('createOrderInBackend received orderData:', orderData);
    
    const {
      user,
      payment,
      shipping,
      billing,
      cartItems,
      orderNumber = generateOrderNumber() // Generate if not provided
    } = orderData;

    console.log('Extracted data:', {
      user: user ? 'present' : 'missing',
      payment: payment ? 'present' : 'missing', 
      shipping: shipping ? 'present' : 'missing',
      billing: billing ? 'present' : 'missing',
      cartItems: cartItems ? `present (${cartItems.length} items)` : 'missing',
      orderNumber
    });

    if (!user?.email) {
      throw new Error('User email is required');
    }

    // Validate required fields
    if (!billing) {
      throw new Error('Billing information is required');
    }
    if (!shipping) {
      throw new Error('Shipping information is required');
    }
    if (!cartItems || cartItems.length === 0) {
      throw new Error('Cart items are required');
    }
    if (!payment) {
      throw new Error('Payment information is required');
    }

    // Create payload for backend
    const orderPayload = {
      orderNumber,
      billingInfo: billing,
      shippingInfo: shipping,
      customerInfo: {
        email: user.email,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        name: user.name || `${user.firstName || ''} ${user.lastName || ''}`.trim(),
      },
      cartItems,
      paymentInfo: payment,
      totalAmount: cartItems.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0),
      subtotal: cartItems.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0),
      // Add additional fields that might be required
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    const API_BASE = process.env.NEXT_PUBLIC_API_URL;
    if (!API_BASE) {
      throw new Error('API URL not configured');
    }

    // Log the order payload
    console.log('Order payload being sent to backend:', JSON.stringify(orderPayload, null, 2));

    // Emails will be sent by the frontend after order creation
    // to avoid duplicate sending

    // Use api.ts with error handling
    try {
      const createdOrder = await orders.create(orderPayload);
      console.log('Created order:', createdOrder);
      return createdOrder.data;
    } catch (orderError: any) {
      console.error('Order creation error:', orderError.response?.data || orderError);
      throw new Error(orderError.response?.data?.error || 'Failed to create order');
    }

  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

import { generateOrderNumber } from "./order";
import { orders } from './api';

export const createOrderInBackend = async (orderData: any) => {
  try {
    const {
      user,
      payment,
      shipping,
      billing,
      cartItems,
      orderNumber = generateOrderNumber() // Generate if not provided
    } = orderData;

    if (!user?.email) {
      throw new Error('User email is required');
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
      },
      cartItems,
      paymentInfo: payment,
      totalAmount: cartItems.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0),
      subtotal: cartItems.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0),
    };

    const API_BASE = process.env.NEXT_PUBLIC_API_URL;
    if (!API_BASE) {
      throw new Error('API URL not configured');
    }

    // Add error logging
    console.log('Order payload:', orderPayload);

    try {
      // First send order email
      const emailResponse = await fetch('/api-2/send-order-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      console.log('Email response:', await emailResponse.json());
    } catch (emailError) {
      console.error('Email error:', emailError);
    }

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

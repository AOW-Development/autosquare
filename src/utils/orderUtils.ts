import { generateOrderNumber } from "./order";
import { orders } from './api';

export const createOrderInBackend = async (orderData: any) => {
  try {
    console.log('[Order Creation Started] ==================');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Full Payload:', JSON.stringify(orderData, null, 2));
    
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

    // --- Final parseSubtitle (keeps full text exactly as in subtitle, minus "miles") ---
      const parseSubtitle = (subtitle: string) => {
        let specification = '';
        let milesPromised: number | null = null;

        if (subtitle) {
          // Extract miles (e.g., "41000 miles")
          const milesMatch = subtitle.match(/(\d+)\s*miles/i);
          if (milesMatch && milesMatch[1]) {
            milesPromised = parseFloat(milesMatch[1]);
          }

          // Remove the "41000 miles" part but keep everything else exactly
          specification = subtitle.replace(/(\d+\s*miles)/i, '').trim();

          // Clean up double spaces left after removing miles
          specification = specification.replace(/\s{2,}/g, ' ').trim();
        }

        return { specification, milesPromised };
      };

      // --- Process cart items ---
      const processedCartItems = cartItems.map((item: any) => {
        const { specification, milesPromised } = parseSubtitle(item.subtitle || '');

        console.log('Parsed subtitle:', {
          subtitle: item.subtitle,
          specification,
          milesPromised
        });

        return {
          ...item,
          specification: item.specification || specification,
          milesPromised: item.milesPromised !== undefined ? item.milesPromised : milesPromised,
        };
      });
    // Create payload for backend
    const orderPayload = {
      orderNumber,
      billingInfo: billing,
      shippingInfo: shipping,
      customerInfo: {
        email: user.email || shipping.email,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
      },
      
      cartItems: processedCartItems,
      paymentInfo: payment,
      totalAmount: cartItems.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0),
      subtotal: cartItems.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0),
      // Add additional fields that might be required
      status: 'pending',
      orderDate: new Date().toISOString(),
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
      // Verbose logging to help trace backend failures in the browser console
      const status = orderError?.response?.status;
      const data = orderError?.response?.data;
      console.error('Order creation HTTP status:', status);
      console.error('Order creation response data:', data || orderError);
      // Include status and response body (if available) in the thrown error so UI can show useful info
      const detail = typeof data === 'string' ? data : JSON.stringify(data || {});
      throw new Error(`Failed to create order (status ${status}): ${detail}`);
    }

  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};
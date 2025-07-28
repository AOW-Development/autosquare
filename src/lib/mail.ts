import nodemailer from 'nodemailer';
import { PaymentInfo } from '@/store/paymentStore';
import { CartItem } from '@/store/cartStore';

// Types for email data
export interface UserInfo {
  id: string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface BillingInfo {
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface OrderEmailData {
  user: UserInfo;
  payment: PaymentInfo;
  billing: BillingInfo;
  cartItems: CartItem[];
  orderTotal: number;
  orderNumber: string;
  orderDate: string;
}

// SMTP configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
};

// Generate order confirmation email HTML
const generateOrderEmailHTML = (data: OrderEmailData): string => {
  const { user, payment, billing, cartItems, orderTotal, orderNumber, orderDate } = data;
  
  const cartItemsHTML = cartItems.map(item => `
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 12px; text-align: left;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="${item.image}" alt="${item.title}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;" />
          <div>
            <h4 style="margin: 0; font-weight: 600; color: #1f2937;">${item.title}</h4>
            <p style="margin: 4px 0; color: #6b7280; font-size: 14px;">${item.subtitle}</p>
          </div>
        </div>
      </td>
      <td style="padding: 12px; text-align: center; color: #1f2937;">$${item.price}</td>
      <td style="padding: 12px; text-align: center; color: #1f2937;">${item.quantity}</td>
      <td style="padding: 12px; text-align: right; font-weight: 600; color: #1f2937;">$${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  `).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation - ${orderNumber}</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        
        <!-- Header -->
        <div style="background-color: #091B33; color: #ffffff; padding: 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">AutoSquare</h1>
          <p style="margin: 8px 0 0 0; font-size: 16px;">Order Confirmation</p>
        </div>

        <!-- Order Info -->
        <div style="padding: 24px;">
          <h2 style="color: #091B33; margin: 0 0 16px 0;">Thank you for your order, ${user.firstName}!</h2>
          <p style="color: #6b7280; margin: 0 0 24px 0;">Your order has been received and is being processed.</p>
          
          <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div>
                <strong style="color: #091B33;">Order Number:</strong><br>
                <span style="color: #6b7280;">${orderNumber}</span>
              </div>
              <div>
                <strong style="color: #091B33;">Order Date:</strong><br>
                <span style="color: #6b7280;">${orderDate}</span>
              </div>
            </div>
          </div>

          <!-- Order Items -->
          <h3 style="color: #091B33; margin: 0 0 16px 0;">Order Items</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <thead>
              <tr style="background-color: #f9fafb;">
                <th style="padding: 12px; text-align: left; color: #091B33; font-weight: 600;">Item</th>
                <th style="padding: 12px; text-align: center; color: #091B33; font-weight: 600;">Price</th>
                <th style="padding: 12px; text-align: center; color: #091B33; font-weight: 600;">Qty</th>
                <th style="padding: 12px; text-align: right; color: #091B33; font-weight: 600;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${cartItemsHTML}
            </tbody>
          </table>

          <!-- Order Total -->
          <div style="border-top: 2px solid #091B33; padding-top: 16px; text-align: right;">
            <p style="margin: 8px 0; font-size: 18px; font-weight: bold; color: #091B33;">
              Order Total: $${orderTotal.toFixed(2)}
            </p>
          </div>

          <!-- Billing Information -->
          <h3 style="color: #091B33; margin: 32px 0 16px 0;">Billing Information</h3>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px;">
            <p style="margin: 0 0 8px 0; color: #1f2937;">
              <strong>${billing.firstName} ${billing.lastName}</strong>
            </p>
            <p style="margin: 0 0 8px 0; color: #6b7280;">${billing.address}</p>
            ${billing.apartment ? `<p style="margin: 0 0 8px 0; color: #6b7280;">${billing.apartment}</p>` : ''}
            <p style="margin: 0 0 8px 0; color: #6b7280;">${billing.city}, ${billing.state} ${billing.zipCode}</p>
            <p style="margin: 0 0 8px 0; color: #6b7280;">${billing.country}</p>
            <p style="margin: 0; color: #6b7280;">Phone: ${billing.phone}</p>
          </div>

          <!-- Payment Information -->
          <h3 style="color: #091B33; margin: 32px 0 16px 0;">Payment Information</h3>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px;">
            <p style="margin: 0; color: #1f2937;">
              <strong>Payment Method:</strong> ${payment.paymentMethod === 'card' ? 'Credit Card' : 'PayPal'}
            </p>
            ${payment.paymentMethod === 'card' && payment.cardData.cardNumber ? `
              <p style="margin: 8px 0 0 0; color: #6b7280;">
                Card ending in ****${payment.cardData.cardNumber.slice(-4)}
              </p>
            ` : ''}
          </div>

          <!-- Footer -->
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; margin: 0 0 8px 0;">Questions about your order?</p>
            <p style="color: #6b7280; margin: 0;">Contact us at support@autosquare.us</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Generate admin notification email HTML
const generateAdminEmailHTML = (data: OrderEmailData): string => {
  const { user, payment, billing, cartItems, orderTotal, orderNumber, orderDate } = data;
  
  const cartItemsHTML = cartItems.map(item => `
    <tr>
      <td style="padding: 8px; border: 1px solid #e5e7eb;">${item.title}</td>
      <td style="padding: 8px; border: 1px solid #e5e7eb;">${item.subtitle}</td>
      <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">$${item.price}</td>
      <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">${item.quantity}</td>
      <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: right;">$${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  `).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Order - ${orderNumber}</title>
    </head>
    <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5;">
      <div style="max-width: 800px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px;">
        <h1 style="color: #091B33; margin-bottom: 20px;">New Order Received</h1>
        
        <div style="margin-bottom: 20px;">
          <h2 style="color: #091B33;">Order Details</h2>
          <p><strong>Order Number:</strong> ${orderNumber}</p>
          <p><strong>Order Date:</strong> ${orderDate}</p>
          <p><strong>Order Total:</strong> $${orderTotal.toFixed(2)}</p>
        </div>

        <div style="margin-bottom: 20px;">
          <h2 style="color: #091B33;">Customer Information</h2>
          <p><strong>Name:</strong> ${user.firstName} ${user.lastName}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>User ID:</strong> ${user.id}</p>
        </div>

        <div style="margin-bottom: 20px;">
          <h2 style="color: #091B33;">Billing Address</h2>
          <p>${billing.firstName} ${billing.lastName}</p>
          <p>${billing.address}</p>
          ${billing.apartment ? `<p>${billing.apartment}</p>` : ''}
          <p>${billing.city}, ${billing.state} ${billing.zipCode}</p>
          <p>${billing.country}</p>
          <p>Phone: ${billing.phone}</p>
        </div>

        <div style="margin-bottom: 20px;">
          <h2 style="color: #091B33;">Payment Information</h2>
          <p><strong>Payment Method:</strong> ${payment.paymentMethod === 'card' ? 'Credit Card' : 'PayPal'}</p>
          ${payment.paymentMethod === 'card' && payment.cardData.cardholderName ? `
            <p><strong>Cardholder:</strong> ${payment.cardData.cardholderName}</p>
          ` : ''}
          ${payment.paymentMethod === 'card' && payment.cardData.cardNumber ? `
            <p><strong>Card:</strong> ****${payment.cardData.cardNumber.slice(-4)}</p>
          ` : ''}
        </div>

        <div style="margin-bottom: 20px;">
          <h2 style="color: #091B33;">Order Items</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background-color: #f9fafb;">
                <th style="padding: 8px; border: 1px solid #e5e7eb; text-align: left;">Title</th>
                <th style="padding: 8px; border: 1px solid #e5e7eb; text-align: left;">Subtitle</th>
                <th style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">Price</th>
                <th style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">Quantity</th>
                <th style="padding: 8px; border: 1px solid #e5e7eb; text-align: right;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${cartItemsHTML}
            </tbody>
          </table>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send order confirmation email to customer
export const sendOrderConfirmationEmail = async (data: OrderEmailData): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"AutoSquare" <${process.env.SMTP_USER}>`,
      to: data.user.email,
      subject: `Order Confirmation - ${data.orderNumber}`,
      html: generateOrderEmailHTML(data),
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Order confirmation email sent:', result.messageId);
    return true;
  } catch (error) {
    console.error('Error sending order confirmation email:', error);
    return false;
  }
};

// Send order notification email to admin
export const sendOrderNotificationEmail = async (data: OrderEmailData): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@autosquare.us';
    
    const mailOptions = {
      from: `"AutoSquare Orders" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: `New Order Received - ${data.orderNumber}`,
      html: generateAdminEmailHTML(data),
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Order notification email sent to admin:', result.messageId);
    return true;
  } catch (error) {
    console.error('Error sending order notification email:', error);
    return false;
  }
};

// Send both customer and admin emails
export const sendOrderEmails = async (data: OrderEmailData): Promise<{ customer: boolean; admin: boolean }> => {
  const [customerResult, adminResult] = await Promise.allSettled([
    sendOrderConfirmationEmail(data),
    sendOrderNotificationEmail(data),
  ]);

  return {
    customer: customerResult.status === 'fulfilled' ? customerResult.value : false,
    admin: adminResult.status === 'fulfilled' ? adminResult.value : false,
  };
};

// Utility function to generate order number
export const generateOrderNumber = (): string => {
  const timestamp = Date.now().toString();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ORD-${timestamp.slice(-6)}-${random}`;
};

// Utility function to format order data from stores
export const formatOrderData = (
  user: UserInfo,
  payment: PaymentInfo,
  billing: BillingInfo,
  cartItems: CartItem[]
): OrderEmailData => {
  const orderTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const orderNumber = generateOrderNumber();
  const orderDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return {
    user,
    payment,
    billing,
    cartItems,
    orderTotal,
    orderNumber,
    orderDate,
  };
};

// Test email functionality (for development)
export const sendTestEmail = async (): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"AutoSquare Test" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Send to self for testing
      subject: 'SMTP Configuration Test',
      html: `
        <h1>SMTP Test Email</h1>
        <p>If you receive this email, your SMTP configuration is working correctly.</p>
        <p>Sent at: ${new Date().toISOString()}</p>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Test email sent:', result.messageId);
    return true;
  } catch (error) {
    console.error('Error sending test email:', error);
    return false;
  }
};
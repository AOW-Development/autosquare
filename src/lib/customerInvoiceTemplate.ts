import { OrderEmailData } from './mail';

export const generateCustomerInvoiceHTML = (data: OrderEmailData): string => {
  const { user, payment, billing, shipping, cartItems, orderTotal, orderNumber, orderDate } = data;

  const cartItemsHTML = cartItems.map(item => `
    <tr>
      <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">
        <img src="${item.image}" alt="${item.title}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;" />
      </td>
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Order Confirmation - ${orderNumber}</title>
    </head>
    <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9fafb;">
      <div style="max-width: 700px; margin: 0 auto; background: #fff; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
        <div style="background: #091B33; color: #fff; padding: 24px 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">PartsCentral.us</h1>
          <p style="margin: 8px 0 0 0; font-size: 16px;">Order Confirmation</p>
        </div>
        <div style="padding: 24px;">
          <h2 style="color: #091B33; margin: 0 0 16px 0;">Hello ${user.firstName},</h2>
          <p style="color: #6b7280; margin: 0 0 24px 0;">Thank you for your order! Your order #${orderNumber} was placed on ${orderDate}.</p>

          <h3 style="margin: 24px 0 8px 0; color: #091B33;">Order Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #f3f4f6;">
                <th style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">Image</th>
                <th style="padding: 8px; border: 1px solid #e5e7eb; text-align: left;">Title</th>
                <th style="padding: 8px; border: 1px solid #e5e7eb; text-align: left;">Subtitle</th>
                <th style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">Price</th>
                <th style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">Qty</th>
                <th style="padding: 8px; border: 1px solid #e5e7eb; text-align: right;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${cartItemsHTML}
            </tbody>
          </table>
          <div style="text-align: right; margin-top: 16px;">
            <strong style="font-size: 18px; color: #091B33;">Order Total: $${orderTotal.toFixed(2)}</strong>
          </div>

          <h3 style="margin: 32px 0 8px 0; color: #091B33;">Shipping Address</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
            <tr><td style="padding: 6px; color: #6b7280;">${shipping.firstName} ${shipping.lastName}</td></tr>
            <tr><td style="padding: 6px; color: #6b7280;">${shipping.address}${shipping.apartment ? ', ' + shipping.apartment : ''}</td></tr>
            <tr><td style="padding: 6px; color: #6b7280;">${shipping.city}, ${shipping.state} ${shipping.zipCode}, ${shipping.country}</td></tr>
          </table>

          <h3 style="margin: 24px 0 8px 0; color: #091B33;">Payment Info</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
            <tr><td style="padding: 6px; color: #6b7280;">Method:</td><td style="padding: 6px; color: #1f2937;">${payment.paymentMethod === 'card' ? 'Credit Card' : 'PayPal'}</td></tr>
            ${payment.paymentMethod === 'card' && payment.cardData ? `
              <tr><td style="padding: 6px; color: #6b7280;">Card Holder:</td><td style="padding: 6px; color: #1f2937;">${payment.cardData.cardholderName}</td></tr>
              <tr><td style="padding: 6px; color: #6b7280;">Card Number:</td><td style="padding: 6px; color: #1f2937;">****${payment.cardData.cardNumber.slice(-4)}</td></tr>
            ` : ''}
          </table>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; margin: 0 0 8px 0;">Questions or need support?</p>
            <p style="color: #6b7280; margin: 0;">Contact: <a href="mailto:support@partscentral.us" style="color: #091B33;">support@partscentral.us</a></p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

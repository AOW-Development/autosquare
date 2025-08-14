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
      <div style="width:100%; margin: 0 auto; background: #fff; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
        <div style="background: #091B33; color: #fff; padding: 24px 0; text-align: center;">
           
           <img 
            src="https://partscentral.us/logos/headerlogo.png" 
            alt="Parts Central" 
            style="height:60px;display:inline-block;" 
          />
      </div>
          <p style="text-align:center; margin: 8px 0 0 0; font-size: 16px;">Order Confirmation</p>
        </div>
        <div style="padding: 24px;">
          <h2 style="color: #091B33; margin: 0 0 16px 0;font-size: 25px;">Hello, ${user.name}</h2>
          <p style="color: #6b7280; margin: 0 0 24px 0;font-size: 16px;">Thank you for your order! Your order #${orderNumber} was placed on ${orderDate}.</p>

          <h3 style="margin: 24px 0 8px 0;font-size: 25px; color: #091B33;">Order Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #f3f4f6;">
                <th style="padding: 5px; border: 1px solid #e5e7eb; text-align: center;">Image</th>
                <th style="padding: 5px; border: 1px solid #e5e7eb; text-align: left;">Title</th>
                <th style="padding: 5px; border: 1px solid #e5e7eb; text-align: left;">Subtitle</th>
                <th style="padding: 5px; border: 1px solid #e5e7eb; text-align: center;">Price</th>
                <th style="padding: 5px; border: 1px solid #e5e7eb; text-align: center;">Qty</th>
                <th style="padding: 5px; border: 1px solid #e5e7eb; text-align: right;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${cartItemsHTML}
            </tbody>
          </table>
          <div style="text-align: right; margin-top: 16px;">
            <strong style="font-size: 18px; color: #091B33; font-size: 20px;">Order Total:$ ${orderTotal.toFixed(2)}</strong>
          </div>

          <h3 style="margin: 32px 0 8px 0; color: #091B33; font-size: 25px;">Billing Address</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 20px;">
            <tr><td style="padding: 6px; color: #6b7280;">${shipping.firstName} ${shipping.lastName}</td></tr>
            <tr><td style="padding: 6px; color: #6b7280;">${shipping.address}${shipping.apartment ? ', ' + shipping.apartment : ''}</td></tr>
            <tr><td style="padding: 6px; color: #6b7280;">${shipping.city}, ${shipping.state} ${shipping.zipCode}, ${shipping.country}</td></tr>
          </table>

          <h3 style="margin: 24px 0 8px 0; color: #091B33; font-size: 25px;">Payment Info</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 20px;">
            <tr><td style="padding: 6px; color: #6b7280;">Method:</td><td style="padding: 6px; color: #1f2937;">${payment.paymentMethod === 'card' ? 'Credit Card' : 'PayPal'}</td></tr>
            ${payment.paymentMethod === 'card' && payment.cardData ? `
              <tr><td style="padding: 6px; color: #6b7280;">Card Holder:</td><td style="padding: 6px; color: #1f2937;">${payment.cardData.cardholderName}</td></tr>
              <tr><td style="padding: 6px; color: #6b7280;">Card Number:</td><td style="padding: 6px; color: #1f2937;">**** **** **** ${payment.cardData.cardNumber.slice(-4)}</td></tr>
            ` : ''}
          </table>

           <div style="margin-top:32px;padding-top:16px;border-top:1px solid #eee;color:#222;font-size: 20px;line-height:1.6;">
                <h2 style="font-size:25px;margin:0 0 12px 0;">Why choose Parts Central?</h2>
                <ul style="margin:0 0 16px 20px;padding:0;">
                  <li>Friendly customer support available to assist you.</li>
                  <li>Wide selection of quality used OEM parts available in all over USA.</li>
                  <li>Fast shipping within 8-9 business days.</li>
                  <li>Buy Now &amp; Pay Later options available.</li>
                </ul>

                <p style="text-align:center;font-weight:600;font-size:25px;margin:24px 0;">
                  We look forward to hearing from you soon!
                </p>

                <div style="margin-top:16px;">
                  <p style="margin:0 0 6px 0;font-weight:600;font-size: 25px;">Best regards,</p>
                  <p style="margin:0;">Parts Central LLC</p>
                  <p style="margin:0;">76 Imperial Dr Suite E Evanston, WY 82930, USA</p>
                  <p style="margin:0;">Phone: +1 (888) 338-2540</p>
                </div>
              </div>

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

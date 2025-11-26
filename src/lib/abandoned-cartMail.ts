import { createTransporter } from "./mail";

// Abandoned Cart Email Data
export interface AbandonedCartData {
  sessionId: string;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  shippingInfo: {
    firstName: string;
    lastName: string;
    phone: string;
    city: string;
    state: string;
    address: string;
    zipCode: string;
  };
  cartItems: Array<{
    id: string;
    title: string;
    subtitle: string;
    price: number;
    quantity: number;
    image?: string;
  }>;
  orderTotal?: {
    subtotal: number;
    shipping: number;
    taxes: number;
    total: number;
  };
  createdAt: string;
}

// Generate Abandoned Cart Email HTML
const generateAbandonedCartEmailHTML = (data: AbandonedCartData): string => {
  const { customerInfo, shippingInfo, cartItems, orderTotal, createdAt } = data;

  const cartItemsHTML = cartItems
    .map(
      (item) => `
    <tr>
      <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">
        <img src="${
          item.title?.includes("Transmission")
            ? "https://partscentral.us/catalog/Trasmission_.png"
            : "https://partscentral.us/catalog/Engine 1.png"
        }" alt="${
        item.title
      }" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;" />
      </td>
      <td style="padding: 8px; border: 1px solid #e5e7eb;">${item.title}</td>
      <td style="padding: 8px; border: 1px solid #e5e7eb;">${item.subtitle}</td>
      <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">$${item.price.toFixed(
        2
      )}</td>
      <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">${
        item.quantity
      }</td>
      <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: right;">$${(
        item.price * item.quantity
      ).toFixed(2)}</td>
    </tr>
  `
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Abandoned Cart Alert - PartsCentral.us</title>
    </head>
    <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9fafb;">
      <div style="max-width: 700px; margin: 0 auto; background: #fff; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
        <div style="background: #ff9800; color: #fff; padding: 24px 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">🛒 Abandoned Cart Alert</h1>
          <p style="margin: 8px 0 0 0; font-size: 16px;">PartsCentral.us</p>
        </div>
        <div style="padding: 24px;">
          <div style="background: #fff3cd; border-left: 4px solid #ff9800; padding: 12px; margin-bottom: 24px;">
            <p style="margin: 0; color: #856404; font-weight: bold;">⚠️ A customer started checkout but didn't complete payment</p>
          </div>

          <h2 style="color: #091B33; margin: 0 0 8px 0;">Customer Information</h2>
          <p style="color: #6b7280; margin: 0 0 16px 0;">Abandoned on: ${new Date(
            createdAt
          ).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}</p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; background: #f9fafb; border-radius: 8px;">
            <tr><td style="padding: 8px; color: #6b7280; width: 120px;">Name:</td><td style="padding: 8px; color: #1f2937; font-weight: 500;">${
              customerInfo.firstName
            } ${customerInfo.lastName}</td></tr>
            <tr><td style="padding: 8px; color: #6b7280;">Email:</td><td style="padding: 8px; color: #1f2937; font-weight: 500;">${
              customerInfo.email
            }</td></tr>
            <tr><td style="padding: 8px; color: #6b7280;">Phone:</td><td style="padding: 8px; color: #1f2937; font-weight: 500;">${
              customerInfo.phone
            }</td></tr>
            <tr><td style="padding: 8px; color: #6b7280;">Location:</td><td style="padding: 8px; color: #1f2937; font-weight: 500;">${
              shippingInfo.city
            }, ${shippingInfo.state} ${shippingInfo.zipCode}</td></tr>
          </table>

          <h3 style="margin: 24px 0 12px 0; color: #091B33;">🛍️ Cart Contents</h3>
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
          
          ${
            orderTotal
              ? `
          <div style="background: #f3f4f6; padding: 16px; margin-top: 16px; border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="color: #6b7280;">Subtotal:</span>
              <span style="color: #1f2937; font-weight: 500;">$${orderTotal.subtotal.toFixed(
                2
              )}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="color: #6b7280;">Shipping:</span>
              <span style="color: #1f2937; font-weight: 500;">${
                orderTotal.shipping === 0
                  ? "Free"
                  : `$${orderTotal.shipping.toFixed(2)}`
              }</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 2px solid #d1d5db;">
              <span style="color: #6b7280;">Taxes:</span>
              <span style="color: #1f2937; font-weight: 500;">$${orderTotal.taxes.toFixed(
                2
              )}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: #ff9800; font-weight: bold; font-size: 18px;">Potential Revenue:</span>
              <span style="color: #ff9800; font-weight: bold; font-size: 20px;">$${orderTotal.total.toFixed(
                2
              )}</span>
            </div>
          </div>
          `
              : ""
          }

          <div style="margin-top: 24px; padding: 16px; background: #e3f2fd; border-radius: 8px;">
            <h4 style="margin: 0 0 8px 0; color: #091B33;">💡 Recommended Actions:</h4>
            <ul style="margin: 0; padding-left: 20px; color: #6b7280;">
              <li style="margin-bottom: 4px;">Follow up with the customer via email or phone</li>
              <li style="margin-bottom: 4px;">Check if they encountered any payment issues</li>
              <li style="margin-bottom: 4px;">Offer assistance in completing their purchase</li>
            </ul>
          </div>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; margin: 0 0 8px 0;">View full details in your dashboard</p>
            <p style="color: #6b7280; margin: 0;">Contact: <a href="mailto:support@partscentral.us" style="color: #091B33; text-decoration: none;">support@partscentral.us</a></p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send Abandoned Cart Email to Admin
export const sendAbandonedCartEmail = async (
  data: AbandonedCartData
): Promise<boolean> => {
  try {
    console.log("🛒 [ABANDONED CART EMAIL] Starting to send email...");
    console.log(
      "📧 Customer:",
      data.customerInfo?.firstName,
      data.customerInfo?.lastName
    );
    console.log("📧 Email:", data.customerInfo?.email);
    console.log("🛍️ Cart items count:", data.cartItems?.length);

    const transporter = createTransporter();

    // Use SMTP_USER as sender (it's the authenticated email)
    const senderEmail = process.env.SMTP_USER;
    const recipientEmail = "shankarreddyshiva83@gmail.com";

    console.log("📤 Sending from:", senderEmail);
    console.log("📥 Sending to:", recipientEmail);

    const mailOptions = {
      from: `"PartsCentral.us Alerts" <${senderEmail}>`,
      to: recipientEmail,
      subject: `🛒 Abandoned Cart Alert - ${data.customerInfo.firstName} ${data.customerInfo.lastName}`,
      html: generateAbandonedCartEmailHTML(data),
    };

    const result = await transporter.sendMail(mailOptions);
    console.log(
      "✅ Abandoned cart email sent successfully! Message ID:",
      result.messageId
    );
    return true;
  } catch (error) {
    console.error("❌ Error sending abandoned cart email:", error);
    console.error("❌ Full error details:", JSON.stringify(error, null, 2));
    return false;
  }
};

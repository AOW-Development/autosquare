import { createTransporter } from "./mail";
import { OrderEmailData } from "./mail";

// Send Order Failed Email
export const sendOrderFailedEmail = async (
  data: OrderEmailData
): Promise<boolean> => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // send to the customer
      // send to the customer
      subject: `Order Failed - #${data.orderNumber}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #d9534f;">Order Failed</h2>
          <p>Hi Team,</p>
          <p>The Order placed through the e-commerce site has failed due to an issue.</p>
          <p>Please find the order details below:</p>
         
          <h4>Order Summary:</h4>
          <ul>
            <li><strong>Order Number:</strong> ${data.orderNumber}</li>
            ${data.cartItems.map(
              (item) =>
                `<li><strong>Cart Item:<strong> ${item.title}-${item.subtitle}</li>`
            )}
            <li><strong>Email:</strong> ${data.user.email}</li>
            <li><strong>Phone:</strong> ${data.shipping.phone}</li>
            <li><strong>Date:</strong> ${new Date().toLocaleDateString()}</li>
          </ul>

          <p>Kindly look into the issue and assist further.</p>

          <strong>Thank You.</strong></p>
        </div>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Order failed email sent:", result.messageId);
    return true;
  } catch (error) {
    console.error("Error sending order failed email:", error);
    return false;
  }
};

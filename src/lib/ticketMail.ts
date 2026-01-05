import nodemailer from "nodemailer";
import { generateTicketEmailHTML } from "./ticketEmailTemplate";

export interface TicketFormData {
  fullName: string;
  orderId: string;
  email: string;
  phone: string;
  message: string;
}

// Create transporter with SMTP config
export const createTicketTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.office365.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true" ? true : false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });
};

// Send ticket email to admin
export const sendTicketEmail = async (
  data: TicketFormData
): Promise<boolean> => {
  try {
    const transporter = createTicketTransporter();

    const mailOptions = {
      from:
        process.env.SMTP_FROM ||
        `"PartsCentral.us Support" <${process.env.SMTP_USERNAME}>`,
      to: process.env.ADMIN_EMAIL || "partscentralus@gmail.com",
      subject: `Support Ticket - Order ID: ${data.orderId} - From: ${data.fullName}`,
      html: generateTicketEmailHTML(data),
      replyTo: data.email,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Support ticket email sent to admin:", result.messageId);
    return true;
  } catch (error) {
    console.error("Error sending ticket email:", error);
    return false;
  }
};

// Send confirmation email to customer
export const sendTicketConfirmationEmail = async (
  data: TicketFormData
): Promise<boolean> => {
  try {
    const transporter = createTicketTransporter();

    const confirmationHTML = `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ticket Submitted Successfully</title>
    </head>
    <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; background: #fff; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
        <div style="background: #091B33; color: #fff; padding: 24px 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">PartsCentral.us</h1>
          <p style="margin: 8px 0 0 0; font-size: 16px;">Support Ticket Confirmation</p>
        </div>
        <div style="padding: 24px;">
          <h2 style="color: #091B33; margin: 0 0 16px 0;">Ticket Received</h2>
          
          <p style="color: #1f2937; line-height: 1.6;">Hi ${escapeHtml(data.fullName)},</p>
          
          <p style="color: #1f2937; line-height: 1.6;">Thank you for submitting a support ticket. We have received your request and will review it shortly.</p>
          
          <div style="margin: 24px 0; padding: 16px; background: #f3f4f6; border-left: 4px solid #00a3ff; border-radius: 4px;">
            <p style="margin: 0 0 8px 0; color: #6b7280;"><strong>Ticket Details:</strong></p>
            <p style="margin: 0 0 4px 0; color: #1f2937;">Order ID: <strong>${escapeHtml(data.orderId)}</strong></p>
            <p style="margin: 0; color: #1f2937;">Email: <strong>${escapeHtml(data.email)}</strong></p>
          </div>
          
          <p style="color: #1f2937; line-height: 1.6;">Our support team typically responds to tickets within <strong>24-48 business hours</strong> during our working hours:</p>
          
          <div style="margin: 24px 0; padding: 16px; background: #f3f4f6; border-radius: 4px;">
            <p style="margin: 0 0 8px 0; color: #6b7280;"><strong>Working Hours:</strong></p>
            <p style="margin: 0; color: #1f2937;">Monday – Friday: 8:00 AM – 7:00 PM EST</p>
          </div>
          
          <p style="color: #1f2937; line-height: 1.6;">If you have any urgent matters, feel free to call us at <strong>(888) 338-2540</strong>.</p>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
            <p style="color: #1f2937; margin: 0 0 8px 0;">Best regards,</p>
            <p style="color: #1f2937; margin: 0; font-weight: bold;">Parts Central LLC Support Team</p>
          </div>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
            <p style="margin: 0 0 8px 0;">
              <strong>Parts Central LLC</strong><br>
              Phone: (888) 338-2540<br>
              Email: partscentralus@gmail.com<br>
              Address: 76 Imperial Dr Suite E Evanston, WY 82930, USA<br>
              Website: https://partscentral.us
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>`;

    const mailOptions = {
      from:
        process.env.SMTP_FROM ||
        `"PartsCentral.us Support" <${process.env.SMTP_USERNAME}>`,
      to: data.email,
      subject: "Support Ticket Received - Parts Central LLC",
      html: confirmationHTML,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent to customer:", result.messageId);
    return true;
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return false;
  }
};

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

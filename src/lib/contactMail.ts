import nodemailer from "nodemailer";
import { generateContactEmailHTML } from "./contactEmailTemplate";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Create transporter with correct env variable names
export const createContactTransporter = () => {
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

// Send Contact Form Email to admin inbox
export const sendContactFormEmail = async (
  data: ContactFormData
): Promise<boolean> => {
  try {
    const transporter = createContactTransporter();

    const mailOptions = {
      from: process.env.SMTP_FROM || `"PartsCentral.us" <${process.env.SMTP_USERNAME}>`,
      to: process.env.ADMIN_EMAIL || "partscentralus@gmail.com",
      subject: `New Contact Form Submission from ${data.name}`,
      html: generateContactEmailHTML(data),
      replyTo: data.email,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Contact form email sent to admin:", result.messageId);
    return true;
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return false;
  }
};

// Send confirmation email to customer
export const sendContactConfirmationEmail = async (
  data: ContactFormData
): Promise<boolean> => {
  try {
    const transporter = createContactTransporter();

    const confirmationHTML = `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>We Received Your Message</title>
    </head>
    <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; background: #fff; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
        <div style="background: #091B33; color: #fff; padding: 24px 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">PartsCentral.us</h1>
          <p style="margin: 8px 0 0 0; font-size: 16px;">Thank You for Contacting Us</p>
        </div>
        <div style="padding: 24px;">
          <h2 style="color: #091B33; margin: 0 0 16px 0;">We Received Your Message</h2>
          
          <p style="color: #1f2937; line-height: 1.6;">Hi ${escapeHtml(data.name)},</p>
          
          <p style="color: #1f2937; line-height: 1.6;">Thank you for reaching out to us. We have received your message and appreciate you getting in touch with Parts Central LLC.</p>
          
          <p style="color: #1f2937; line-height: 1.6;">Our team will review your inquiry and get back to you as soon as possible. We typically respond to all inquiries within <strong>24-48 business hours</strong> during our working hours:</p>
          
          <div style="margin: 24px 0; padding: 16px; background: #f3f4f6; border-left: 4px solid #00a3ff; border-radius: 4px;">
            <p style="margin: 0 0 8px 0; color: #6b7280;"><strong>Working Hours:</strong></p>
            <p style="margin: 0; color: #1f2937;">Monday – Friday: 8:00 AM – 7:00 PM EST</p>
          </div>
          
          <p style="color: #1f2937; line-height: 1.6;">If you have any urgent matters, feel free to call us at <strong>(888) 338-2540</strong>.</p>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
            <p style="color: #1f2937; margin: 0 0 8px 0;">Best regards,</p>
            <p style="color: #1f2937; margin: 0; font-weight: bold;">Parts Central LLC Team</p>
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
      from: process.env.SMTP_FROM || `"PartsCentral.us" <${process.env.SMTP_USERNAME}>`,
      to: data.email,
      subject: "We Received Your Message - Parts Central LLC",
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

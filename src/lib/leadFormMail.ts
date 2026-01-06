import nodemailer from "nodemailer";
import { generateLeadFormEmailHTML } from "./leadFormEmailTemplate";

export interface LeadFormData {
  year: string;
  make: string;
  model: string;
  part: string;
  engineSize: string;
  transmission: string;
  name: string;
  email: string;
  phone: string;
  zipCode: string;
}

// Create transporter with SMTP config
export const createLeadFormTransporter = () => {
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

// Send lead form email to admin
export const sendLeadFormEmail = async (
  data: LeadFormData
): Promise<boolean> => {
  try {
    const transporter = createLeadFormTransporter();

    const mailOptions = {
      from:
        process.env.SMTP_FROM ||
        `"PartsCentral.us Lead" <${process.env.SMTP_USERNAME}>`,
      to: process.env.ADMIN_EMAIL || "partscentralus@gmail.com",
      subject: `New Lead - ${data.year} ${data.make} ${data.model} - ${data.part}`,
      html: generateLeadFormEmailHTML(data),
      replyTo: data.email,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Lead form email sent to admin:", result.messageId);
    return true;
  } catch (error) {
    console.error("Error sending lead form email:", error);
    return false;
  }
};

// Send confirmation email to customer
export const sendLeadFormConfirmationEmail = async (
  data: LeadFormData
): Promise<boolean> => {
  try {
    const transporter = createLeadFormTransporter();

    const confirmationHTML = `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>We Got Your Part Request</title>
    </head>
    <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; background: #fff; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
        <div style="background: #091B33; color: #fff; padding: 24px 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">PartsCentral.us</h1>
          <p style="margin: 8px 0 0 0; font-size: 16px;">Part Request Confirmation</p>
        </div>
        <div style="padding: 24px;">
          <h2 style="color: #091B33; margin: 0 0 16px 0;">We Got Your Request!</h2>
          
          <p style="color: #1f2937; line-height: 1.6;">Hi ${escapeHtml(data.name)},</p>
          
          <p style="color: #1f2937; line-height: 1.6;">Thank you for your interest in Parts Central LLC. We have received your part request and will contact you shortly with pricing and availability information.</p>
          
          <div style="margin: 24px 0; padding: 16px; background: #f3f4f6; border-left: 4px solid #00a3ff; border-radius: 4px;">
            <p style="margin: 0 0 8px 0; color: #6b7280;"><strong>Your Request Details:</strong></p>
            <p style="margin: 0 0 4px 0; color: #1f2937;">Vehicle: <strong>${escapeHtml(data.year)} ${escapeHtml(data.make)} ${escapeHtml(data.model)}</strong></p>
            <p style="margin: 0 0 4px 0; color: #1f2937;">Engine: <strong>${escapeHtml(data.engineSize)}</strong></p>
            <p style="margin: 0 0 4px 0; color: #1f2937;">Transmission: <strong>${escapeHtml(data.transmission)}</strong></p>
            <p style="margin: 0; color: #1f2937;">Part: <strong>${escapeHtml(data.part)}</strong></p>
          </div>
          
          <p style="color: #1f2937; line-height: 1.6;">Our sales team typically responds to part requests within <strong>24-48 business hours</strong> during our working hours:</p>
          
          <div style="margin: 24px 0; padding: 16px; background: #f3f4f6; border-radius: 4px;">
            <p style="margin: 0 0 8px 0; color: #6b7280;"><strong>Working Hours:</strong></p>
            <p style="margin: 0; color: #1f2937;">Monday – Friday: 8:00 AM – 7:00 PM EST</p>
          </div>
          
          <p style="color: #1f2937; line-height: 1.6;">If you need immediate assistance, feel free to call us at <strong>(888) 338-2540</strong>.</p>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
            <p style="color: #1f2937; margin: 0 0 8px 0;">Best regards,</p>
            <p style="color: #1f2937; margin: 0; font-weight: bold;">Parts Central LLC Sales Team</p>
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
        `"PartsCentral.us Lead" <${process.env.SMTP_USERNAME}>`,
      to: data.email,
      subject: "Part Request Received - Parts Central LLC",
      html: confirmationHTML,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Lead form confirmation email sent to customer:", result.messageId);
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

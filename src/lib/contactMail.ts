import nodemailer from "nodemailer";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function escapeHtml(text: string): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const createContactTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.office365.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });
};

// Admin email
export const sendContactFormEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    const transporter = createContactTransporter();

    const currentDate = new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    await transporter.sendMail({
      from: `"Parts Central Website" <${process.env.SMTP_USERNAME}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USERNAME,
      replyTo: data.email,
      subject: `New Contact Form Message - ${data.name}`,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Submitted: ${currentDate}

Message:
${data.message}

------------------------
Reply directly to this email to contact the customer.
      `,
      html: `<!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Message</title>
      </head>
      <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9fafb;">
        <div style="max-width: 600px; margin: 0 auto; background: #fff; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
          <div style="background: #091B33; color: #fff; padding: 24px 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">PartsCentral.us</h1>
            <p style="margin: 8px 0 0 0; font-size: 16px;">New Contact Form Message</p>
          </div>
          <div style="padding: 24px;">
            <h2 style="color: #091B33; margin: 0 0 16px 0;">New Contact Submission</h2>
            <div style="margin: 24px 0; padding: 16px; background: #f3f4f6; border-radius: 4px;">
              <p style="margin: 0 0 12px 0; color: #6b7280;"><strong>Customer Information:</strong></p>
              <p style="margin: 0 0 4px 0; color: #1f2937;">Name: <strong>${escapeHtml(data.name)}</strong></p>
              <p style="margin: 0 0 4px 0; color: #1f2937;">Email: <strong><a href="mailto:${escapeHtml(data.email)}" style="color: #091B33;">${escapeHtml(data.email)}</a></strong></p>
              <p style="margin: 0 0 16px 0; color: #6b7280; font-size: 13px;">Submitted: ${currentDate}</p>
              <p style="margin: 0 0 8px 0; color: #6b7280;"><strong>Message:</strong></p>
              <p style="margin: 0; color: #1f2937; white-space: pre-line;">${escapeHtml(data.message)}</p>
            </div>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 13px;">
              <p style="margin: 0;">Reply directly to this email to respond to the customer.</p>
            </div>
          </div>
        </div>
      </body>
      </html>`,
    });

    console.log("Admin contact email sent");
    return true;
  } catch (error) {
    console.error("Admin email error:", error);
    return false;
  }
};

// Customer confirmation email
export const sendContactConfirmationEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    const transporter = createContactTransporter();

    await transporter.sendMail({
      from: `"Parts Central LLC" <${process.env.SMTP_USERNAME}>`,
      to: data.email,
      subject: "We received your message – Parts Central LLC",
      text: `
Hello ${data.name},

Thank you for contacting Parts Central LLC.

We have received your message and our team will respond within 24–48 hours.

Your Message:
${data.message}

If urgent, call us at:
(888) 338-2540

Parts Central LLC
https://partscentral.us
      `,
      html: `<!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Message Received</title>
      </head>
      <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9fafb;">
        <div style="max-width: 600px; margin: 0 auto; background: #fff; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
          <div style="background: #091B33; color: #fff; padding: 24px 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">PartsCentral.us</h1>
            <p style="margin: 8px 0 0 0; font-size: 16px;">Message Received</p>
          </div>
          <div style="padding: 24px;">
            <h2 style="color: #091B33; margin: 0 0 16px 0;">Thank You, ${escapeHtml(data.name)}!</h2>
            <p style="color: #1f2937; line-height: 1.6;">Thank you for contacting <strong>Parts Central LLC</strong>. We have received your message and will respond within <strong>24–48 business hours</strong>.</p>
            <div style="margin: 24px 0; padding: 16px; background: #f3f4f6; border-left: 4px solid #00a3ff; border-radius: 4px;">
              <p style="margin: 0 0 8px 0; color: #6b7280;"><strong>Your Message:</strong></p>
              <p style="margin: 0; color: #1f2937; white-space: pre-line;">${escapeHtml(data.message)}</p>
            </div>
            <div style="margin: 24px 0; padding: 16px; background: #f3f4f6; border-radius: 4px;">
              <p style="margin: 0 0 8px 0; color: #6b7280;"><strong>Working Hours:</strong></p>
              <p style="margin: 0; color: #1f2937;">Monday – Friday: 8:00 AM – 7:00 PM EST</p>
            </div>
            <p style="color: #1f2937; line-height: 1.6;">If you need urgent assistance, call us at <strong>(888) 338-2540</strong>.</p>
            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
              <p style="color: #1f2937; margin: 0 0 4px 0;">Best regards,</p>
              <p style="color: #1f2937; margin: 0; font-weight: bold;">Parts Central LLC Support Team</p>
            </div>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
              <p style="margin: 0;">Parts Central LLC | (888) 338-2540 | partscentralus@gmail.com<br>
              76 Imperial Dr Suite E Evanston, WY 82930, USA<br>
              <a href="https://partscentral.us" style="color: #091B33;">partscentral.us</a></p>
            </div>
          </div>
        </div>
      </body>
      </html>`,
    });

    console.log("Customer confirmation email sent");
    return true;
  } catch (error) {
    console.error("Customer email error:", error);
    return false;
  }
};
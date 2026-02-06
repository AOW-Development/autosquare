// lib/contactMail.ts
import nodemailer from "nodemailer";
import { generateContactEmailHTML } from "./contactEmailTemplate";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Create transporter with correct env variable names
export const createContactTransporter = () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  return transporter;
};


// Send Contact Form Email to admin inbox
export const sendContactFormEmail = async (
  data: ContactFormData
): Promise<boolean> => {
  try {
    const transporter = createContactTransporter();

    // Clean and decode the message content if needed
    const cleanMessage = data.message
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");

    const cleanData = {
      ...data,
      message: cleanMessage
    };

    const mailOptions = {
      from: process.env.SMTP_FROM || `"PartsCentral.us" <${process.env.SMTP_USERNAME}>`,
      to: process.env.ADMIN_EMAIL || "partscentralus@gmail.com",
      subject: `New Contact Form Submission from ${data.name}`,
      html: generateContactEmailHTML(cleanData),
      replyTo: data.email,
      encoding: 'utf-8',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8'
      }
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

    // Clean and decode the message content if needed
    const cleanMessage = data.message
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");

    const cleanData = {
      ...data,
      message: cleanMessage
    };

    const confirmationHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>We've Received Your Message - Parts Central</title>
      <style>
        @media only screen and (max-width: 600px) {
          .container { width: 100% !important; }
          .header-nav { display: none !important; }
          .hero-title { font-size: 24px !important; padding: 30px 20px !important; }
          .message-text { font-size: 13px !important; padding: 20px !important; }
        }
      </style>
    </head>

    <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:20px 0;">
    <tr>
    <td align="center">

    <table class="container" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;overflow:hidden;max-width:600px;">
   
    <!-- ================= HEADER WITH LOGO ================= -->
    <tr>
      <td style="background:#1a1a2e;padding:15px 30px;">
        <table width="100%">
          <tr>
            <td align="left">
              <img src="https://s3.us-east-1.amazonaws.com/partscentral.us/public/logos/header-3.png" alt="Parts Central" height="40" style="display:block;" />
            </td>
            <td class="header-nav" align="right" style="font-size:12px;">
              <a href="https://www.partscentral.us/aboutUs" style="color:#ffffff;text-decoration:none;margin:0 8px;">About Us</a>
              <a href="https://www.partscentral.us/engine" style="color:#ffffff;text-decoration:none;margin:0 8px;">Engine</a>
              <a href="https://www.partscentral.us/transmission" style="color:#ffffff;text-decoration:none;margin:0 8px;">Transmission</a>
              <a href="https://www.partscentral.us/contactUs" style="color:#ffffff;text-decoration:none;margin:0 8px;">Contact Us</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ================= CONFIRMATION BADGE ================= -->
    <tr>
      <td style="background:#1a1a2e;padding:15px 20px;text-align:center;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">
              <div style="display:inline-block;background:#4caf50;padding:8px 24px;border-radius:20px;">
                <span style="color:#ffffff;font-size:16px;font-weight:bold;">MESSAGE RECEIVED</span>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ================= MAIN TITLE ================= -->
    <tr>
      <td class="hero-title" align="center" style="padding:40px 30px;background:#1a1a2e;">
        <h1 style="margin:0 0 12px;color:#ffffff;font-size:32px;font-weight:bold;line-height:1.3;">
          Thank You for Contacting Us!
        </h1>
        <p style="margin:0;color:#ffffff;font-size:16px;">
          We've received your message and will get back to you soon
        </p>
      </td>
    </tr>

    <!-- ================= PERSONAL MESSAGE ================= -->
    <tr>
      <td style="padding:30px 30px 20px;background:#ffffff;">
        <p style="margin:0 0 5px;color:#123b7a;font-size:20px;font-weight:bold;">
          Hi ${cleanData.name},
        </p>
        <p style="margin:15px 0;color:#333333;font-size:16px;line-height:1.6;">
          Thank you for reaching out to <strong>Parts Central LLC</strong>. We have successfully received your message and appreciate you taking the time to contact us.
        </p>
        <div style="margin:20px 0;padding:15px;background:#f0f9ff;border-left:4px solid #1a5cff;border-radius:4px;">
          <p style="margin:0;color:#1a5cff;font-size:14px;font-weight:bold;">
            📧 Your inquiry has been logged and our team will review it shortly
          </p>
        </div>
        <p style="margin:0;color:#333333;font-size:16px;line-height:1.6;">
          We typically respond to all inquiries within <strong>24-48 business hours</strong>.
        </p>
      </td>
    </tr>

    <!-- ================= YOUR MESSAGE SUMMARY ================= -->
    <tr>
      <td style="padding:0 30px 20px;">
        <h3 style="margin:0 0 15px;color:#1a1a2e;font-size:18px;font-weight:bold;">
          📋 Your Message Summary:
        </h3>
        <div style="padding:20px;background:#f8f9fa;border-radius:8px;border-left:4px solid #1a5cff;">
          <p style="margin:0;color:#333;font-size:14px;line-height:1.6;white-space:pre-wrap;">
            ${cleanData.message}
          </p>
        </div>
      </td>
    </tr>

    <!-- ================= RESPONSE TIME ================= -->
    <tr>
      <td style="padding:25px 30px;background:#fff4cc;border-left:5px solid #ffa500;margin:0 30px 30px;">
        <h3 style="margin:0 0 15px;color:#cc6a00;font-size:18px;font-weight:bold;">
          ⏰ Our Response Time
        </h3>
        <p style="margin:0 0 10px;color:#b45309;font-size:14px;line-height:1.6;">
          We typically respond to all inquiries within <strong>24-48 business hours</strong> during our working hours:
        </p>
        <p style="margin:0;color:#b45309;font-size:14px;font-weight:bold;">
          Monday – Friday: 8:00 AM – 7:00 PM EST
        </p>
      </td>
    </tr>

    <!-- ================= URGENT ASSISTANCE ================= -->
    <tr>
      <td style="padding:30px;text-align:center;">
        <h3 style="margin:0 0 20px;color:#d32f2f;font-size:20px;font-weight:bold;">
          Need Immediate Assistance?
        </h3>
        <a href="tel:+18883382540" 
           style="display:inline-block;padding:15px 45px;background:#d32f2f;color:#ffffff;text-decoration:none;font-size:16px;font-weight:bold;border-radius:4px;margin:0 10px 10px 0;">
          📞 Call Now: (888) 338-2540
        </a>
        <p style="margin:15px 0 0;color:#666;font-size:13px;">
          For urgent matters, please call us directly
        </p>
      </td>
    </tr>

    <!-- ================= CONTACT INFO ================= -->
    <tr>
      <td style="padding:30px;background:#f4f6f8;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;border:1px solid #e5e7eb;">
          <tr>
            <td style="padding:28px;text-align:center;">
              <p style="margin:0 0 10px;color:#000000;font-size:18px;font-weight:700;">
                Parts Central LLC
              </p>
              <p style="margin:0 0 24px;color:#000000;font-size:14px;">
                Your trusted auto parts partner since 2010
              </p>

              <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="padding:0 8px;">
                    <a href="tel:+18883382540"
                       style="display:inline-block;padding:12px 26px;background:#0b3a82;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;border-radius:8px;">
                      Call Us Now
                    </a>
                  </td>
                  <td style="padding:0 8px;">
                    <a href="mailto:partscentralus@gmail.com"
                       style="display:inline-block;padding:12px 26px;background:#ffffff;color:#0b3a82;text-decoration:none;font-size:14px;font-weight:600;border-radius:8px;border:2px solid #0b3a82;">
                      Email Us
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:20px 0 0;padding-top:20px;border-top:1px solid #e5e7eb;color:#666;font-size:12px;line-height:1.6;">
                <strong>Parts Central LLC</strong><br>
                76 Imperial Dr Suite E Evanston, WY 82930, USA<br>
                Phone: (888) 338-2540 | Fax: (312) 845-9711<br>
                Email: partscentralus@gmail.com<br>
                Website: https://partscentral.us
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ================= FOOTER ================= -->
    <tr>
      <td style="background-color:#1a1a2e;padding:25px 30px;text-align:center;">
        <p style="margin:0 0 12px;color:#ffffff;font-size:14px;font-weight:bold;">
          Your Trusted Auto Parts Partner Since 2010
        </p>
        <p style="margin:0;color:#ffffff;font-size:13px;">
          <a href="mailto:partscentralus@gmail.com" style="color:#ffffff;text-decoration:none;">partscentralus@gmail.com</a>
          <span style="color:#666666;margin:0 8px;">|</span>
          <a href="tel:+18883382540" style="color:#ffffff;text-decoration:none;">+1 (888) 338-2540</a>
        </p>
        <p style="margin:15px 0 0;padding-top:15px;border-top:1px solid #333333;color:#999999;font-size:11px;">
          © ${new Date().getFullYear()} Parts Central. All rights reserved.
        </p>
      </td>
    </tr>

    </table>
    </td>
    </tr>
    </table>
    </body>
    </html>`;

    const mailOptions = {
      from: process.env.SMTP_FROM || `"PartsCentral.us" <${process.env.SMTP_USERNAME}>`,
      to: cleanData.email,
      subject: "✓ We've Received Your Message - Parts Central LLC",
      html: confirmationHTML,
      encoding: 'utf-8',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8'
      }
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent to customer:", result.messageId);
    return true;
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return false;
  }
};
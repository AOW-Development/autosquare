import nodemailer from "nodemailer";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Transporter
export const createContactTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};



// ADMIN EMAIL (simple and clean)
export const sendContactFormEmail = async (
  data: ContactFormData
): Promise<boolean> => {
  try {
    const transporter = createContactTransporter();

    const mailOptions = {
      from: `"Parts Central Website" <${process.env.SMTP_USERNAME}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USERNAME,
      replyTo: data.email,
      subject: `New Contact Form Message - ${data.name}`,

      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}

Message:
${data.message}

------------------------
Reply directly to this email to contact the customer.
      `,

      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>

        <p><strong>Message:</strong></p>
        <p style="white-space:pre-line;">
          ${escapeHtml(data.message)}
        </p>

        <hr>

        <p>
        You can reply directly to this email to respond to the customer.
        </p>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("Admin email sent");

    return true;
  } catch (error) {
    console.error("Admin email error:", error);
    return false;
  }
};



// CUSTOMER CONFIRMATION EMAIL (simple)
export const sendContactConfirmationEmail = async (
  data: ContactFormData
): Promise<boolean> => {
  try {
    const transporter = createContactTransporter();

    const mailOptions = {
      from: `"Parts Central LLC" <${process.env.SMTP_USERNAME}>`,
      to: data.email,

      subject: "We received your message",

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

      html: `
        <p>Hello ${escapeHtml(data.name)},</p>

        <p>
        Thank you for contacting <strong>Parts Central LLC</strong>.
        </p>

        <p>
        We have received your message and will respond within 24–48 hours.
        </p>

        <p><strong>Your Message:</strong></p>

        <p style="white-space:pre-line;">
        ${escapeHtml(data.message)}
        </p>

        <br>

        <p>
        If urgent, call us at:<br>
        <strong>(888) 338-2540</strong>
        </p>

        <br>

        <p>
        Parts Central LLC<br>
        https://partscentral.us
        </p>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("Customer confirmation sent");

    return true;
  } catch (error) {
    console.error("Customer email error:", error);
    return false;
  }
};



function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

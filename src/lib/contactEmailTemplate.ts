import type { ContactFormData } from "./contactMail";

export const generateContactEmailHTML = (
  data: ContactFormData
): string => {
  const { name, email, message } = data;

  const currentDate = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>

        <p><strong>Email:</strong> 
          <a href="mailto:${escapeHtml(email)}">
            ${escapeHtml(email)}
          </a>
        </p>

        <p><strong>Submitted:</strong> ${currentDate}</p>

        <hr>

        <p><strong>Message:</strong></p>

        <p style="white-space: pre-line;">
          ${escapeHtml(message)}
        </p>

        <hr>

        <p style="color:#666; font-size:13px;">
          Reply directly to this email to contact the customer.
        </p>

      </body>
    </html>
  `;
};


function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

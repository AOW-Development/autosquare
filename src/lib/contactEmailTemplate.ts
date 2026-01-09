import type { ContactFormData } from "./contactMail";

export const generateContactEmailHTML = (data: ContactFormData): string => {
  const { name, email, message } = data;

  return `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; background: #fff; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
        <div style="background: #091B33; color: #fff; padding: 24px 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">PartsCentral.us</h1>
          <p style="margin: 8px 0 0 0; font-size: 16px;">New Contact Form Submission</p>
        </div>
        <div style="padding: 24px;">
          <h2 style="color: #091B33; margin: 0 0 16px 0;">Message from ${name}</h2>
          
          <div style="margin: 24px 0; padding: 16px; background: #f3f4f6; border-radius: 4px;">
            <p style="margin: 0 0 8px 0; color: #6b7280;"><strong>Name:</strong></p>
            <p style="margin: 0 0 16px 0; color: #1f2937;">${escapeHtml(name)}</p>
            
            <p style="margin: 0 0 8px 0; color: #6b7280;"><strong>Email:</strong></p>
            <p style="margin: 0 0 16px 0; color: #1f2937;"><a href="mailto:${escapeHtml(email)}" style="color: #091B33;">${escapeHtml(email)}</a></p>
            
            <p style="margin: 0 0 8px 0; color: #6b7280;"><strong>Message:</strong></p>
            <p style="margin: 0; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; margin: 0 0 8px 0;">Reply directly to this email to respond to the customer.</p>
            <p style="color: #6b7280; margin: 0;">
              <strong>Parts Central LLC</strong><br>
              Phone: (888) 338-2540<br>
              Email: <a href="mailto:partscentralus@gmail.com" style="color: #091B33;">partscentralus@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>`;
};

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

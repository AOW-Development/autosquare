import type { LeadFormData } from "./leadFormMail";

export const generateLeadFormEmailHTML = (data: LeadFormData): string => {
  const {
    year,
    make,
    model,
    part,
    engineSize,
    transmission,
    name,
    email,
    phone,
    zipCode,
  } = data;

  return `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Lead - Part Request</title>
    </head>
    <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; background: #fff; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
        <div style="background: #091B33; color: #fff; padding: 24px 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">PartsCentral.us</h1>
          <p style="margin: 8px 0 0 0; font-size: 16px;">New Lead - Part Request</p>
        </div>
        <div style="padding: 24px;">
          <h2 style="color: #091B33; margin: 0 0 16px 0;">New Part Inquiry</h2>
          
          <div style="margin: 24px 0; padding: 16px; background: #f3f4f6; border-radius: 4px;">
            <p style="margin: 0 0 12px 0; color: #6b7280;"><strong>Vehicle Information:</strong></p>
            <p style="margin: 0 0 4px 0; color: #1f2937;">Year: <strong>${escapeHtml(year)}</strong></p>
            <p style="margin: 0 0 4px 0; color: #1f2937;">Make: <strong>${escapeHtml(make)}</strong></p>
            <p style="margin: 0 0 4px 0; color: #1f2937;">Model: <strong>${escapeHtml(model)}</strong></p>
            <p style="margin: 0 0 4px 0; color: #1f2937;">Engine Size: <strong>${escapeHtml(engineSize)}</strong></p>
            <p style="margin: 0 0 16px 0; color: #1f2937;">Transmission: <strong>${escapeHtml(transmission)}</strong></p>
            
            <p style="margin: 0 0 12px 0; color: #6b7280;"><strong>Part Information:</strong></p>
            <p style="margin: 0 0 16px 0; color: #1f2937;">Part Requested: <strong>${escapeHtml(part)}</strong></p>
            
            <p style="margin: 0 0 12px 0; color: #6b7280;"><strong>Customer Information:</strong></p>
            <p style="margin: 0 0 4px 0; color: #1f2937;">Name: <strong>${escapeHtml(name)}</strong></p>
            <p style="margin: 0 0 4px 0; color: #1f2937;">Email: <strong><a href="mailto:${escapeHtml(email)}" style="color: #091B33;">${escapeHtml(email)}</a></strong></p>
            <p style="margin: 0 0 4px 0; color: #1f2937;">Phone: <strong>${escapeHtml(phone)}</strong></p>
            <p style="margin: 0; color: #1f2937;">ZIP Code: <strong>${escapeHtml(zipCode)}</strong></p>
          </div>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; margin: 0 0 8px 0;">Reply directly to this email to follow up with the lead.</p>
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

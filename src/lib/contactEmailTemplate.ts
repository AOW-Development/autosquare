import type { ContactFormData } from "./contactMail";

export const generateContactEmailHTML = (data: ContactFormData): string => {
  const { name, email, message } = data;
  
  // Format current date and time
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Contact Form Submission - Parts Central</title>
      <style>
        @media only screen and (max-width: 600px) {
          .container { width: 100% !important; }
          .header-nav { display: none !important; }
          .hero-title { font-size: 24px !important; padding: 30px 20px !important; }
          .message-box { font-size: 13px !important; padding: 20px !important; }
          .contact-details td { display: block !important; width: 100% !important; }
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

    <!-- ================= INQUIRY BADGE ================= -->
    <tr>
      <td style="background:#1a1a2e;padding:15px 20px;text-align:center;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">
              <div style="display:inline-block;background:#ffa500;padding:8px 24px;border-radius:20px;">
                <span style="color:#ffffff;font-size:16px;font-weight:bold;">NEW INQUIRY RECEIVED</span>
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
          New Contact Form Submission
        </h1>
        <p style="margin:0;color:#ffffff;font-size:16px;">
          Received: ${currentDate}
        </p>
      </td>
    </tr>

    <!-- ================= CONTACT DETAILS ================= -->
    <tr>
      <td style="padding:30px 30px 20px;background:#ffffff;">
        <h2 style="margin:0 0 20px;color:#1a1a2e;font-size:20px;font-weight:bold;">
          Contact Inquiry Details
        </h2>
       
        <!-- Contact Information -->
        <table width="100%" cellpadding="15" cellspacing="0" style="background:#f9f9f9;margin-bottom:2px;border-radius:8px;">
          <tr>
            <td style="vertical-align:top;">
              <table width="100%" cellpadding="0" cellspacing="0" class="contact-details">
                <tr>
                  <td width="50%" style="vertical-align:top;border-right:1px solid #e0e0e0;padding-right:20px;">
                    <p style="margin:0 0 8px;color:#666666;font-size:13px;font-weight:bold;">
                      CUSTOMER INFORMATION
                    </p>
                    <p style="margin:0 0 8px;color:#666666;font-size:13px;">
                      <strong>Name:</strong> ${escapeHtml(name)}
                    </p>
                    <p style="margin:0 0 8px;color:#666666;font-size:13px;">
                      <strong>Email:</strong> ${escapeHtml(email)}
                    </p>
                    <p style="margin:0 0 8px;color:#666666;font-size:13px;">
                      <strong>Submitted:</strong> ${currentDate}
                    </p>
                  </td>
                  <td width="50%" style="vertical-align:top;padding-left:20px;">
                    <p style="margin:0 0 8px;color:#666666;font-size:13px;font-weight:bold;">
                      REPLY INFORMATION
                    </p>
                    <p style="margin:0 0 8px;color:#666666;font-size:13px;">
                      <strong>Reply To:</strong> ${escapeHtml(email)}
                    </p>
                    <p style="margin:0 0 8px;color:#666666;font-size:13px;">
                      <strong>Click to Reply:</strong>
                      <a href="mailto:${escapeHtml(email)}" style="color:#1a5cff;text-decoration:none;">
                        ${escapeHtml(email)}
                      </a>
                    </p>
                    <p style="margin:0;color:#666666;font-size:13px;">
                      <strong>Source:</strong> Website Contact Form
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- Message Content -->
        <div style="margin-top:20px;">
          <h3 style="margin:0 0 15px;color:#1a1a2e;font-size:16px;font-weight:bold;">
            Customer Message:
          </h3>
          <div class="message-box" style="padding:20px;background:#f8f9fa;border-radius:8px;border-left:4px solid #1a5cff;min-height:150px;">
            <p style="margin:0;color:#333333;font-size:14px;line-height:1.6;white-space:pre-wrap;">
              ${escapeHtml(message)}
            </p>
          </div>
        </div>
      </td>
    </tr>

    <!-- ================= QUICK ACTIONS ================= -->
    <tr>
      <td style="padding:30px;background:#ffffff;">
        <h3 style="margin:0 0 20px;color:#000000;font-size:20px;font-weight:bold;text-align:center;">
          Quick Actions
        </h3>

        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td width="50%" style="padding:8px;vertical-align:top;">
              <table width="100%" cellpadding="15" cellspacing="0" style="background-color:#f8f9fa;border:1px solid #e0e0e0;border-radius:8px;">
                <tr>
                  <td style="text-align:center;">
                    <div style="background:#1a5cff;color:white;width:36px;height:36px;border-radius:50%;line-height:36px;margin:0 auto 8px;font-weight:bold;font-size:18px;">
                      ✉
                    </div>
                    <p style="margin:0 0 4px;color:#1a1a2e;font-size:14px;font-weight:bold;">
                      Reply to Customer
                    </p>
                    <p style="margin:0;color:#666666;font-size:11px;">
                      Send immediate response
                    </p>
                    <a href="mailto:${escapeHtml(email)}?subject=Re:%20Your%20Inquiry%20to%20Parts%20Central" 
                       style="display:inline-block;margin-top:10px;padding:8px 20px;background:#1a5cff;color:#ffffff;text-decoration:none;font-size:12px;font-weight:bold;border-radius:4px;">
                      Reply Now
                    </a>
                  </td>
                </tr>
              </table>
            </td>

            <td width="50%" style="padding:8px;vertical-align:top;">
              <table width="100%" cellpadding="15" cellspacing="0" style="background-color:#f8f9fa;border:1px solid #e0e0e0;border-radius:8px;">
                <tr>
                  <td style="text-align:center;">
                    <div style="background:#4caf50;color:white;width:36px;height:36px;border-radius:50%;line-height:36px;margin:0 auto 8px;font-weight:bold;font-size:18px;">
                      📞
                    </div>
                    <p style="margin:0 0 4px;color:#1a1a2e;font-size:14px;font-weight:bold;">
                      Call Customer
                    </p>
                    <p style="margin:0;color:#666666;font-size:11px;">
                      Available in contact info
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ================= URGENT REMINDER ================= -->
    <tr>
      <td style="padding:25px 30px;background:#fff4cc;border-left:5px solid #ffa500;margin:0 30px 30px;">
        <h3 style="margin:0 0 15px;color:#cc6a00;font-size:18px;font-weight:bold;">
          ⚡ Important Reminder
        </h3>
        <p style="margin:0;color:#b45309;font-size:14px;line-height:1.6;">
          Please respond to this inquiry within <strong>24 hours</strong> during our working hours:
          Monday – Friday: 8:00 AM – 7:00 PM EST
        </p>
      </td>
    </tr>

    <!-- ================= CONTACT INFORMATION ================= -->
    <tr>
      <td style="padding:30px;background:#f4f6f8;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;border:1px solid #e5e7eb;">
          <tr>
            <td style="padding:28px;text-align:center;">
              <p style="margin:0 0 10px;color:#000000;font-size:18px;font-weight:700;">
                Parts Central Support
              </p>
              <p style="margin:0 0 24px;color:#000000;font-size:14px;">
                For any assistance with this inquiry
              </p>

              <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="padding:0 8px;">
                    <a href="tel:+18883382540"
                       style="display:inline-block;padding:12px 26px;background:#0b3a82;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;border-radius:8px;">
                      Call: (888) 338-2540
                    </a>
                  </td>
                  <td style="padding:0 8px;">
                    <a href="mailto:partscentralus@gmail.com"
                       style="display:inline-block;padding:12px 26px;background:#ffffff;color:#0b3a82;text-decoration:none;font-size:14px;font-weight:600;border-radius:8px;border:2px solid #0b3a82;">
                      Email Team
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
          Auto Parts Inquiry Management
        </p>
        <p style="margin:0;color:#ffffff;font-size:13px;">
          <a href="mailto:partscentralus@gmail.com" style="color:#ffffff;text-decoration:none;">partscentralus@gmail.com</a>
          <span style="color:#666666;margin:0 8px;">|</span>
          <a href="tel:+18883382540" style="color:#ffffff;text-decoration:none;">+1 (888) 338-2540</a>
        </p>
        <p style="margin:15px 0 0;padding-top:15px;border-top:1px solid #333333;color:#999999;font-size:11px;">
          © ${new Date().getFullYear()} Parts Central. All rights reserved.
        </p>
        <p style="margin:8px 0 0;font-size:11px;">
          <a href="https://www.partscentral.us/aboutUs" style="color:#999999;text-decoration:none;margin:0 8px;">About Us</a>
          <a href="https://www.partscentral.us/engine" style="color:#999999;text-decoration:none;margin:0 8px;">Engine</a>
          <a href="https://www.partscentral.us/transmission" style="color:#999999;text-decoration:none;margin:0 8px;">Transmission</a>
          <a href="https://www.partscentral.us/contactUs" style="color:#999999;text-decoration:none;margin:0 8px;">Contact Us</a>
        </p>
      </td>
    </tr>

    </table>
    </td>
    </tr>
    </table>
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
// lib/ticketMail.ts
import nodemailer from "nodemailer";

export interface TicketFormData {
  fullName: string;
  orderId: string;
  email: string;
  phone: string;
  message: string;
}

// Create transporter for ticket emails
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

// Format phone number for US customers
const formatUSPhoneNumber = (phone: string): string => {
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as (XXX) XXX-XXXX for US numbers
  if (cleaned.length === 10) {
    return `(${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)}-${cleaned.substring(6)}`;
  } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+1 (${cleaned.substring(1, 4)}) ${cleaned.substring(4, 7)}-${cleaned.substring(7)}`;
  }
  
  // Return original if format doesn't match
  return phone;
};

// Send ticket to admin with professional design
export const sendTicketEmail = async (data: TicketFormData): Promise<boolean> => {
  try {
    const transporter = createTicketTransporter();
    const formattedPhone = formatUSPhoneNumber(data.phone);
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Support Ticket - ${data.orderId}</title>
      <style>
        @media only screen and (max-width: 600px) {
          .container { width: 100% !important; }
          .header-nav { display: none !important; }
          .hero-title { font-size: 24px !important; padding: 30px 20px !important; }
          .message-box { font-size: 13px !important; padding: 20px !important; }
          .ticket-details td { display: block !important; width: 100% !important; }
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

    <!-- ================= TICKET BADGE ================= -->
    <tr>
      <td style="background:#1a1a2e;padding:15px 20px;text-align:center;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">
              <div style="display:inline-block;background:#d32f2f;padding:8px 24px;border-radius:20px;">
                <span style="color:#ffffff;font-size:16px;font-weight:bold;">SUPPORT TICKET #${Date.now().toString().slice(-6)}</span>
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
          New Support Ticket Created
        </h1>
        <p style="margin:0;color:#ffffff;font-size:16px;">
          Order: ${data.orderId} • Created: ${currentDate}
        </p>
      </td>
    </tr>

    <!-- ================= CUSTOMER CONTACT INFO ================= -->
    <tr>
      <td style="padding:30px 30px 20px;background:#ffffff;">
        <h2 style="margin:0 0 20px;color:#1a1a2e;font-size:20px;font-weight:bold;padding-bottom:10px;border-bottom:2px solid #1a5cff;">
           Customer Contact Information
        </h2>
       
        <!-- Contact Information - HIGHLIGHTED FOR CLEAR VISIBILITY -->
        <table width="100%" cellpadding="20" cellspacing="0" style="background:#f0f9ff;margin-bottom:2px;border-radius:8px;border:2px solid #1a5cff;">
          <tr>
            <td style="vertical-align:top;">
              <table width="100%" cellpadding="0" cellspacing="0" class="ticket-details">
                <tr>
                  <td width="50%" style="vertical-align:top;border-right:1px solid #b3d9ff;padding-right:20px;">
                    <p style="margin:0 0 12px;color:#0066cc;font-size:14px;font-weight:bold;">
                     PRIMARY CONTACT DETAILS
                    </p>
                    <p style="margin:0 0 10px;color:#333;font-size:15px;">
                      <strong style="color:#0066cc;display:inline-block;width:80px;">Name:</strong> 
                      <span style="color:#d32f2f;font-weight:bold;">${escapeHtml(data.fullName)}</span>
                    </p>
                    <p style="margin:0 0 10px;color:#333;font-size:15px;">
                      <strong style="color:#0066cc;display:inline-block;width:80px;">Order ID:</strong> 
                      <span style="color:#1a1a2e;font-weight:bold;background:#fff3cd;padding:3px 10px;border-radius:4px;">${escapeHtml(data.orderId)}</span>
                    </p>
                  </td>
                  <td width="50%" style="vertical-align:top;padding-left:20px;">
                    <p style="margin:0 0 12px;color:#0066cc;font-size:14px;font-weight:bold;">
                     CONTACT METHODS
                    </p>
                    <p style="margin:0 0 10px;color:#333;font-size:15px;">
                      <strong style="color:#0066cc;display:inline-block;width:80px;">Email:</strong> 
                      <a href="mailto:${escapeHtml(data.email)}" 
                         style="color:#d32f2f;font-weight:bold;text-decoration:none;background:#fff0f0;padding:3px 10px;border-radius:4px;display:inline-block;">
                        ${escapeHtml(data.email)}
                      </a>
                    </p>
                    <p style="margin:0 0 10px;color:#333;font-size:15px;">
                      <strong style="color:#0066cc;display:inline-block;width:80px;">Phone:</strong> 
                      <a href="tel:${formattedPhone.replace(/\D/g, '')}" 
                         style="color:#1a1a2e;font-weight:bold;text-decoration:none;background:#e8f4ff;padding:3px 10px;border-radius:4px;display:inline-block;">
                        ${formattedPhone}
                      </a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- Quick Contact Buttons -->
        <table width="100%" cellpadding="10" cellspacing="0" style="margin-top:15px;">
          <tr>
            <td align="center">
              <a href="mailto:${escapeHtml(data.email)}?subject=Re:%20Support%20Ticket%20${data.orderId}" 
                 style="display:inline-block;padding:10px 25px;background:#1a5cff;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;border-radius:4px;margin:0 5px;">
               Email Customer
              </a>
              <a href="tel:${formattedPhone.replace(/\D/g, '')}" 
                 style="display:inline-block;padding:10px 25px;background:#4caf50;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;border-radius:4px;margin:0 5px;">
                Call Customer
              </a>
               
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ================= TICKET MESSAGE ================= -->
    <tr>
      <td style="padding:0 30px 20px;">
        <h3 style="margin:0 0 15px;color:#1a1a2e;font-size:18px;font-weight:bold;">
          Ticket Details & Customer Message:
        </h3>
        <div style="padding:20px;background:#f8f9fa;border-radius:8px;border-left:4px solid #ffa500;">
          <p style="margin:0;color:#333;font-size:14px;line-height:1.6;white-space:pre-wrap;">
            ${escapeHtml(data.message)}
          </p>
        </div>
      </td>
    </tr>

    <!-- ================= TICKET STATUS ================= -->
    <tr>
      <td style="padding:30px;background:#ffffff;">
        <h3 style="margin:0 0 20px;color:#000000;font-size:20px;font-weight:bold;text-align:center;">
          Ticket Status & Priority
        </h3>

         
        
         
      </td>
    </tr>

    <!-- ================= ACTION BUTTONS ================= -->
    <tr>
      <td style="padding:30px;text-align:center;">
        <a href="mailto:${escapeHtml(data.email)}?subject=Ticket%20${data.orderId}%20Update&body=Hi%20${escapeHtml(data.fullName)}%2C%0A%0AWe%20have%20received%20your%20support%20ticket%20for%20order%20${escapeHtml(data.orderId)}.%20Our%20team%20is%20currently%20reviewing%20your%20inquiry%20and%20will%20get%20back%20to%20you%20shortly.%0A%0ABest%20regards%2C%0AParts%20Central%20Support%20Team" 
           style="display:inline-block;padding:15px 45px;background:#1a5cff;color:#ffffff;text-decoration:none;font-size:16px;font-weight:bold;border-radius:4px;margin:0 10px 10px 0;">
          Send Acknowledgement
        </a>
        <a href="https://www.partscentral.us/admin/tickets" 
           style="display:inline-block;padding:15px 45px;background:#ffffff;color:#1a5cff;text-decoration:none;font-size:16px;font-weight:bold;border-radius:4px;border:2px solid #1a5cff;margin:0 0 10px 10px;">
          View in Dashboard
        </a>
      </td>
    </tr>

    <!-- ================= CONTACT SUPPORT ================= -->
    <tr>
      <td style="padding:30px;background:#f4f6f8;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;border:1px solid #e5e7eb;">
          <tr>
            <td style="padding:28px;text-align:center;">
              <p style="margin:0 0 10px;color:#000000;font-size:18px;font-weight:700;">
                Need Help with This Ticket?
              </p>
              <p style="margin:0 0 24px;color:#000000;font-size:14px;">
                Contact the support supervisor
              </p>

              <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="padding:0 8px;">
                    <a href="tel:+18883382540"
                       style="display:inline-block;padding:12px 26px;background:#0b3a82;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;border-radius:8px;">
                      Call Support: (888) 338-2540
                    </a>
                  </td>
                  <td style="padding:0 8px;">
                    <a href="mailto:support@partscentral.us"
                       style="display:inline-block;padding:12px 26px;background:#ffffff;color:#0b3a82;text-decoration:none;font-size:14px;font-weight:600;border-radius:8px;border:2px solid #0b3a82;">
                      Email Supervisor
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:20px 0 0;padding-top:20px;border-top:1px solid #e5e7eb;color:#666;font-size:12px;line-height:1.6;">
                <strong>Parts Central LLC Support Center</strong><br>
                Hours: Mon-Fri 8AM-7PM EST | Sat 9AM-5PM EST<br>
                Phone: (888) 338-2540 | Fax: (312) 845-9711<br>
                Email: support@partscentral.us
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
          Support Ticket Management System
        </p>
        <p style="margin:0;color:#ffffff;font-size:13px;">
          <a href="mailto:support@partscentral.us" style="color:#ffffff;text-decoration:none;">support@partscentral.us</a>
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
      from: process.env.SMTP_FROM || `"Parts Central Support" <${process.env.SMTP_USERNAME}>`,
      to: process.env.ADMIN_EMAIL || "support@partscentral.us",
      cc: "support@partscentral.us",
      subject: `NEW SUPPORT TICKET: ${data.orderId} - ${data.fullName}`,
      html: htmlTemplate,
      replyTo: data.email,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Support ticket email sent to admin:", result.messageId);
    return true;
  } catch (error) {
    console.error("Error sending support ticket email:", error);
    return false;
  }
};

// Send confirmation email to customer
export const sendTicketConfirmationEmail = async (data: TicketFormData): Promise<boolean> => {
  try {
    const transporter = createTicketTransporter();
    const formattedPhone = formatUSPhoneNumber(data.phone);
    const ticketNumber = Date.now().toString().slice(-6);

    const confirmationHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Support Ticket Confirmation - ${data.orderId}</title>
      <style>
        @media only screen and (max-width: 600px) {
          .container { width: 100% !important; }
          .header-nav { display: none !important; }
          .hero-title { font-size: 24px !important; padding: 30px 20px !important; }
          .message-box { font-size: 13px !important; padding: 20px !important; }
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

    <!-- ================= TICKET CONFIRMATION ================= -->
    <tr>
      <td style="background:#1a1a2e;padding:15px 20px;text-align:center;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">
              <div style="display:inline-block;background:#4caf50;padding:8px 24px;border-radius:20px;">
                <span style="color:#ffffff;font-size:16px;font-weight:bold;">TICKET #${ticketNumber} CONFIRMED</span>
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
          Your Support Ticket is Confirmed!
        </h1>
        <p style="margin:0;color:#ffffff;font-size:16px;">
          Order: ${data.orderId} • Reference: #${ticketNumber}
        </p>
      </td>
    </tr>

    <!-- ================= YOUR DETAILS ================= -->
    <tr>
      <td style="padding:30px 30px 20px;background:#ffffff;">
        <h2 style="margin:0 0 20px;color:#1a1a2e;font-size:20px;font-weight:bold;padding-bottom:10px;border-bottom:2px solid #1a5cff;">
          Your Ticket Information
        </h2>
       
        <!-- Contact Information Display -->
        <table width="100%" cellpadding="15" cellspacing="0" style="background:#f0f9ff;margin-bottom:2px;border-radius:8px;border:2px solid #1a5cff;">
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:10px;border-bottom:1px solid #b3d9ff;">
                    <p style="margin:0 0 8px;color:#0066cc;font-size:14px;font-weight:bold;">
                     Your Information
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:15px 0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" style="vertical-align:top;padding-right:15px;">
                          <p style="margin:0 0 12px;color:#333;font-size:15px;">
                            <strong style="color:#0066cc;">Full Name:</strong><br>
                            <span style="color:#d32f2f;font-weight:bold;font-size:16px;">${escapeHtml(data.fullName)}</span>
                          </p>
                          <p style="margin:0;color:#333;font-size:15px;">
                            <strong style="color:#0066cc;">Order ID:</strong><br>
                            <span style="color:#1a1a2e;font-weight:bold;font-size:16px;background:#fff3cd;padding:5px 15px;border-radius:4px;display:inline-block;">${escapeHtml(data.orderId)}</span>
                          </p>
                        </td>
                        <td width="50%" style="vertical-align:top;padding-left:15px;border-left:1px solid #b3d9ff;">
                          <p style="margin:0 0 12px;color:#333;font-size:15px;">
                            <strong style="color:#0066cc;">Email Address:</strong><br>
                            <a href="mailto:${escapeHtml(data.email)}" 
                               style="color:#d32f2f;font-weight:bold;font-size:16px;text-decoration:none;">
                              ${escapeHtml(data.email)}
                            </a>
                          </p>
                          <p style="margin:0;color:#333;font-size:15px;">
                            <strong style="color:#0066cc;">Phone Number:</strong><br>
                            <a href="tel:${formattedPhone.replace(/\D/g, '')}" 
                               style="color:#1a1a2e;font-weight:bold;font-size:16px;text-decoration:none;">
                              ${formattedPhone}
                            </a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ================= WHAT HAPPENS NEXT ================= -->
    <tr>
      <td style="padding:30px;background:#ffffff;">
        <h3 style="margin:0 0 20px;color:#000000;font-size:20px;font-weight:bold;text-align:center;">
          What Happens Next?
        </h3>

        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:8px;vertical-align:top;">
              <table width="100%" cellpadding="15" cellspacing="0" style="background-color:#f8f9fa;border:1px solid #e0e0e0;border-radius:8px;">
                <tr>
                  <td>
                    <div style="display:flex;align-items:center;margin-bottom:15px;">
                      <div style="background:#1a5cff;color:white;width:36px;height:36px;border-radius:50%;line-height:36px;text-align:center;font-weight:bold;font-size:18px;margin-right:15px;">
                        1
                      </div>
                      <div>
                        <p style="margin:0 0 4px;color:#1a1a2e;font-size:16px;font-weight:bold;">
                          Ticket Review
                        </p>
                        <p style="margin:0;color:#666666;font-size:13px;">
                          Our support team will review your ticket
                        </p>
                      </div>
                    </div>
                    <div style="display:flex;align-items:center;margin-bottom:15px;">
                      <div style="background:#1a5cff;color:white;width:36px;height:36px;border-radius:50%;line-height:36px;text-align:center;font-weight:bold;font-size:18px;margin-right:15px;">
                        2
                      </div>
                      <div>
                        <p style="margin:0 0 4px;color:#1a1a2e;font-size:16px;font-weight:bold;">
                          Expert Response
                        </p>
                        <p style="margin:0;color:#666666;font-size:13px;">
                          Parts specialist will contact you
                        </p>
                      </div>
                    </div>
                    <div style="display:flex;align-items:center;">
                      <div style="background:#1a5cff;color:white;width:36px;height:36px;border-radius:50%;line-height:36px;text-align:center;font-weight:bold;font-size:18px;margin-right:15px;">
                        3
                      </div>
                      <div>
                        <p style="margin:0 0 4px;color:#1a1a2e;font-size:16px;font-weight:bold;">
                          Resolution
                        </p>
                        <p style="margin:0;color:#666666;font-size:13px;">
                          We'll work to resolve your issue promptly
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ================= RESPONSE TIME ================= -->
    <tr>
      <td style="padding:25px 30px;background:#fff4cc;border-left:5px solid #ffa500;margin:0 30px 30px;">
        <h3 style="margin:0 0 15px;color:#cc6a00;font-size:18px;font-weight:bold;">
          Our Response Time Commitment
        </h3>
        <p style="margin:0 0 10px;color:#b45309;font-size:14px;line-height:1.6;">
          We typically respond to all support tickets within <strong>24 business hours</strong> during our working hours:
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
           Call Support Now: (888) 338-2540
        </a>
        <p style="margin:15px 0 0;color:#666;font-size:13px;">
          Please reference Ticket #${ticketNumber} when calling
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
                Parts Central Support
              </p>
              <p style="margin:0 0 24px;color:#000000;font-size:14px;">
                We're here to help you with your order
              </p>

              <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="padding:0 8px;">
                    <a href="tel:+18883382540"
                       style="display:inline-block;padding:12px 26px;background:#0b3a82;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;border-radius:8px;">
                      Call Support
                    </a>
                  </td>
                  <td style="padding:0 8px;">
                    <a href="mailto:support@partscentral.us"
                       style="display:inline-block;padding:12px 26px;background:#ffffff;color:#0b3a82;text-decoration:none;font-size:14px;font-weight:600;border-radius:8px;border:2px solid #0b3a82;">
                      Email Support
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:20px 0 0;padding-top:20px;border-top:1px solid #e5e7eb;color:#666;font-size:12px;line-height:1.6;">
                <strong>Parts Central LLC Support Center</strong><br>
                76 Imperial Dr Suite E Evanston, WY 82930, USA<br>
                Phone: (888) 338-2540 | Fax: (312) 845-9711<br>
                Email: support@partscentral.us<br>
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
          <a href="mailto:support@partscentral.us" style="color:#ffffff;text-decoration:none;">support@partscentral.us</a>
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
      from: process.env.SMTP_FROM || `"Parts Central Support" <${process.env.SMTP_USERNAME}>`,
      to: data.email,
      subject: `Support Ticket Confirmed: #${ticketNumber} - Order ${data.orderId}`,
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
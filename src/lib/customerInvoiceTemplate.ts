import nodemailer from "nodemailer";
import type { OrderEmailData } from "./mail"
import { NextResponse } from "next/server"

// Function to send invoice email with professional design
export const sendInvoiceEmail = async (data: OrderEmailData, to: string): Promise<{ success: boolean; message?: string }> => {
  try {
    const { orderNumber, orderDate, shipping, cartItems, orderTotal, user, payment } = data;

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USERNAME_SALES,
        pass: process.env.SMTP_PASSWORD_SALES,
      },
    });

    // Determine if this is an engine or transmission order for the image
    const partType = data.cartItems[0]?.title?.toLowerCase() || "";
    const imageUrl = partType.includes("engine")
      ? "https://s3.us-east-1.amazonaws.com/partscentral.us/public/engine-1.png"
      : "https://s3.us-east-1.amazonaws.com/partscentral.us/Trasmission_.png";

    // Calculate subtotal
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Invoice #${orderNumber} - Parts Central</title>
      <style>
        @media only screen and (max-width: 600px) {
          .container { width: 100% !important; }
          .header-nav { display: none !important; }
          .hero-title { font-size: 24px !important; padding: 30px 20px !important; }
          .message-text { font-size: 13px !important; padding: 20px !important; }
          .invoice-details td { display: block !important; width: 100% !important; }
          .items-table th, .items-table td { padding: 8px 5px !important; font-size: 12px !important; }
          .benefits-grid td { display: block !important; width: 100% !important; }
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

    <!-- ================= INVOICE NUMBER ================= -->
    <tr>
      <td style="background:#1a1a2e;padding:15px 20px;text-align:center;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">
              <div style="display:inline-block;background:#ffffff;padding:8px 24px;border-radius:20px;">
                <span style="color:#1a5cff;font-size:16px;font-weight:bold;">INVOICE #${orderNumber}</span>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ================= PART IMAGE ================= -->
    <tr>
      <td align="center" style="padding:25px 20px;background:#0b1a2f;">
        <img 
          src="${imageUrl}" 
          alt="${partType.includes('engine') ? 'Engine' : 'Transmission'}" 
          width="280" 
          style="display:block;margin:0 auto;border-radius:8px;border:2px solid #1a5cff;"
        />
      </td>
    </tr>

    <!-- ================= MAIN TITLE ================= -->
    <tr>
      <td class="hero-title" align="center" style="padding:40px 30px;background:#1a1a2e;">
        <h1 style="margin:0 0 12px;color:#ffffff;font-size:32px;font-weight:bold;line-height:1.3;">
          Your Invoice is Ready!
        </h1>
        <p style="margin:0;color:#ffffff;font-size:16px;">
          Invoice Date: ${new Date(orderDate).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </td>
    </tr>

    <!-- ================= PERSONAL MESSAGE ================= -->
    <tr>
      <td class="message-text" style="padding:30px 30px 20px;background:#ffffff;">
        <p style="margin:0 0 5px;color:#123b7a;font-size:20px;font-weight:bold;">
          ${shipping.firstName} ${shipping.lastName},
        </p>
        <p style="margin:15px 0;color:#333333;font-size:16px;line-height:1.6;">
          Please find your invoice for order <strong>#${orderNumber}</strong>. 
          As per our tele-conversation, we will charge your card ending with 
          <strong>${payment.cardData.cardNumber.slice(-4)}</strong> for the total amount of 
          <strong style="color:#1a5cff;">$${orderTotal.toFixed(2)}</strong>.
        </p>
        <p style="margin:0;color:#333333;font-size:16px;line-height:1.6;">
          This authorization is for a single transaction only and does not provide authorization 
          for any additional unrelated debits or credits to your account.
        </p>
      </td>
    </tr>

    <!-- ================= INVOICE DETAILS ================= -->
    <tr>
      <td style="padding:0 30px 20px;">
        <h2 style="margin:0 0 20px;color:#1a1a2e;font-size:20px;font-weight:bold;">
          Invoice Details
        </h2>
       
        <!-- Billing & Shipping Information -->
        <table width="100%" cellpadding="15" cellspacing="0" style="background:#f9f9f9;margin-bottom:2px;border-radius:8px;">
          <tr>
            <td width="50%" style="vertical-align:top;border-right:1px solid #e0e0e0;">
              <p style="margin:0 0 8px;color:#666666;font-size:13px;font-weight:bold;">
                BILLING INFORMATION
              </p>
              <p style="margin:0 0 8px;color:#666666;font-size:13px;">
                <strong>Name:</strong> ${user.name || `${shipping.firstName} ${shipping.lastName}`}
              </p>
              <p style="margin:0 0 8px;color:#666666;font-size:13px;">
                <strong>Email:</strong> ${user.email}
              </p>
              <p style="margin:0 0 8px;color:#666666;font-size:13px;">
                <strong>Card:</strong> **** **** **** ${payment.cardData.cardNumber.slice(-4)}
              </p>
            </td>

            <td width="50%" style="vertical-align:top;padding-left:20px;">
              <p style="margin:0 0 8px;color:#666666;font-size:13px;font-weight:bold;">
                SHIPPING ADDRESS
              </p>
              <p style="margin:0 0 8px;color:#666666;font-size:13px;">
                <strong>Name:</strong> ${shipping.firstName} ${shipping.lastName}
              </p>
              ${shipping.company ? `<p style="margin:0 0 8px;color:#666666;font-size:13px;"><strong>Company:</strong> ${shipping.company}</p>` : ''}
              <p style="margin:0 0 8px;color:#666666;font-size:13px;">
                <strong>Address:</strong> ${shipping.address}${shipping.apartment ? `, ${shipping.apartment}` : ''}
              </p>
              <p style="margin:0;color:#666666;font-size:13px;">
                <strong>City/State/ZIP:</strong> ${shipping.city}, ${shipping.state} ${shipping.zipCode}
              </p>
            </td>
          </tr>
        </table>

        <!-- Items Table -->
        <table width="100%" cellpadding="10" cellspacing="0" style="margin-top:20px;border-collapse:collapse;" class="items-table">
          <thead>
            <tr style="background:#f8f9fa;">
              <th style="text-align:left;padding:12px 15px;border-bottom:2px solid #ddd;color:#333;font-size:14px;">Item Description</th>
              <th style="text-align:center;padding:12px 15px;border-bottom:2px solid #ddd;color:#333;font-size:14px;">Price</th>
              <th style="text-align:center;padding:12px 15px;border-bottom:2px solid #ddd;color:#333;font-size:14px;">Qty</th>
              <th style="text-align:right;padding:12px 15px;border-bottom:2px solid #ddd;color:#333;font-size:14px;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${cartItems.map((item, index) => `
              <tr ${index % 2 === 0 ? 'style="background:#fafafa;"' : ''}>
                <td style="padding:12px 15px;border-bottom:1px solid #eee;font-size:14px;color:#555;">
                  ${item.title}${item.subtitle ? ` ${item.subtitle}` : ''}
                </td>
                <td style="padding:12px 15px;border-bottom:1px solid #eee;text-align:center;font-size:14px;color:#555;">
                  $${(item.price ?? 0).toFixed(2)}
                </td>
                <td style="padding:12px 15px;border-bottom:1px solid #eee;text-align:center;font-size:14px;color:#555;">
                  ${item.quantity ?? 1}
                </td>
                <td style="padding:12px 15px;border-bottom:1px solid #eee;text-align:right;font-size:14px;color:#555;">
                  $${((item.price ?? 0) * (item.quantity ?? 1)).toFixed(2)}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <!-- Total Summary -->
        <table width="100%" cellpadding="12" cellspacing="0" style="margin-top:20px;">
          <tr>
            <td style="color:#666666;font-size:14px;border-bottom:1px solid #e0e0e0;padding:10px 0;">
              Subtotal
            </td>
            <td align="right" style="color:#1a1a2e;font-size:14px;border-bottom:1px solid #e0e0e0;padding:10px 0;">
              $${subtotal.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td style="color:#1a1a2e;font-size:16px;font-weight:bold;padding:12px 0 0;">
              Total Amount
            </td>
            <td align="right" style="color:#d32f2f;font-size:22px;font-weight:bold;padding:12px 0 0;">
              $${orderTotal.toFixed(2)}
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ================= NEXT STEPS ================= -->
    <tr>
      <td style="padding:30px;background:#ffffff;">
        <h3 style="margin:0 0 20px;color:#000000;font-size:20px;font-weight:bold;text-align:center;">
          How to Complete Your Order
        </h3>

        <table class="benefits-grid" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <!-- STEP 1 -->
            <td width="50%" style="padding:8px;vertical-align:top;">
              <table width="100%" cellpadding="15" cellspacing="0" style="background-color:#f8f9fa;border:1px solid #e0e0e0;border-radius:8px;">
                <tr>
                  <td style="text-align:center;">
                    <div style="background:#1a5cff;color:white;width:36px;height:36px;border-radius:50%;line-height:36px;margin:0 auto 8px;font-weight:bold;font-size:18px;">
                      1
                    </div>
                    <p style="margin:0 0 4px;color:#1a1a2e;font-size:14px;font-weight:bold;">
                      Reply "YES" by Email
                    </p>
                    <p style="margin:0;color:#666666;font-size:11px;">
                      Reply to this email with "YES" as acknowledgement
                    </p>
                  </td>
                </tr>
              </table>
            </td>

            <!-- STEP 2 -->
            <td width="50%" style="padding:8px;vertical-align:top;">
              <table width="100%" cellpadding="15" cellspacing="0" style="background-color:#f8f9fa;border:1px solid #e0e0e0;border-radius:8px;">
                <tr>
                  <td style="text-align:center;">
                    <div style="background:#1a5cff;color:white;width:36px;height:36px;border-radius:50%;line-height:36px;margin:0 auto 8px;font-weight:bold;font-size:18px;">
                      2
                    </div>
                    <p style="margin:0 0 4px;color:#1a1a2e;font-size:14px;font-weight:bold;">
                      Provide Valid ID Proof
                    </p>
                    <p style="margin:0;color:#666666;font-size:11px;">
                      Attach government-issued ID with your reply
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <!-- STEP 3 -->
            <td width="50%" style="padding:8px;vertical-align:top;">
              <table width="100%" cellpadding="15" cellspacing="0" style="background-color:#f8f9fa;border:1px solid #e0e0e0;border-radius:8px;">
                <tr>
                  <td style="text-align:center;">
                    <div style="background:#1a5cff;color:white;width:36px;height:36px;border-radius:50%;line-height:36px;margin:0 auto 8px;font-weight:bold;font-size:18px;">
                      3
                    </div>
                    <p style="margin:0 0 4px;color:#1a1a2e;font-size:14px;font-weight:bold;">
                      Review Invoice Details
                    </p>
                    <p style="margin:0;color:#666666;font-size:11px;">
                      Verify all information above is correct
                    </p>
                  </td>
                </tr>
              </table>
            </td>

            <!-- STEP 4 -->
            <td width="50%" style="padding:8px;vertical-align:top;">
              <table width="100%" cellpadding="15" cellspacing="0" style="background-color:#f8f9fa;border:1px solid #e0e0e0;border-radius:8px;">
                <tr>
                  <td style="text-align:center;">
                    <div style="background:#1a5cff;color:white;width:36px;height:36px;border-radius:50%;line-height:36px;margin:0 auto 8px;font-weight:bold;font-size:18px;">
                      4
                    </div>
                    <p style="margin:0 0 4px;color:#1a1a2e;font-size:14px;font-weight:bold;">
                      Complete Within 48 Hours
                    </p>
                    <p style="margin:0;color:#666666;font-size:11px;">
                      Complete all steps to avoid order delay
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ================= CTA BUTTONS ================= -->
    <tr>
      <td style="padding:30px;text-align:center;">
        <a href="mailto:partscentralus@gmail.com?subject=Invoice%20${orderNumber}%20-%20Approval&body=YES%0A%0AOrder%20Number:%20${orderNumber}%0ACustomer%20Name:%20${shipping.firstName}%20${shipping.lastName}%0ACard%20Ending:%20${payment.cardData.cardNumber.slice(-4)}%0ATotal%20Amount:%20$${orderTotal.toFixed(2)}%0A%0AAttached:%20ID%20Proof" 
           style="display:inline-block;padding:15px 45px;background:#d32f2f;color:#ffffff;text-decoration:none;font-size:16px;font-weight:bold;border-radius:4px;margin:0 10px 10px 0;">
          Reply with "YES" and ID Proof
        </a>
        <a href="tel:+18883382540" 
           style="display:inline-block;padding:15px 45px;background:#ffffff;color:#d32f2f;text-decoration:none;font-size:16px;font-weight:bold;border-radius:4px;border:2px solid #d32f2f;margin:0 0 10px 10px;">
          Call for Assistance
        </a>
        <p style="margin:15px 0 0;color:#666;font-size:13px;">
          Please complete all steps within 48 hours
        </p>
      </td>
    </tr>

    <!-- ================= CONTACT SECTION ================= -->
    <tr>
      <td style="padding:30px;background:#f4f6f8;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;border:1px solid #e5e7eb;">
          <tr>
            <td style="padding:28px;text-align:center;">
              <p style="margin:0 0 10px;color:#000000;font-size:18px;font-weight:700;">
                Have Questions About Your Invoice?
              </p>
              <p style="margin:0 0 24px;color:#000000;font-size:14px;">
                Our billing team is here to help you
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
                      Email Billing Team
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:20px 0 0;padding-top:20px;border-top:1px solid #e5e7eb;color:#666;font-size:12px;line-height:1.6;">
                <strong>Parts Central LLC</strong><br>
                76 Imperial Dr Suite E Evanston, WY 82930, USA<br>
                Phone: (888) 338-2540 | Fax: (312) 845-9711<br>
                Email: partscentralus@gmail.com
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

    // Send email
    await transporter.sendMail({
      from: `"Parts Central" <${process.env.SMTP_USERNAME_SALES}>`,
      to: to,
      cc: "partscentralus@gmail.com",
      subject: `Invoice #${orderNumber} - ${shipping.firstName} ${shipping.lastName} - $${orderTotal.toFixed(2)}`,
      html: htmlTemplate,
      // No attachments since PDF is removed
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending invoice email:", error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : "Failed to send invoice email" 
    };
  }
}

// API Route handler
export async function POST(req: Request) {
  try {
    const { orderData, customerEmail } = await req.json();

    if (!orderData || !customerEmail) {
      return NextResponse.json(
        { message: "Missing required fields: orderData and customerEmail" },
        { status: 400 }
      );
    }

    const result = await sendInvoiceEmail(orderData, customerEmail);

    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        message: "Invoice email sent successfully",
        orderNumber: orderData.orderNumber
      });
    } else {
      return NextResponse.json(
        { message: result.message || "Failed to send invoice email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Invoice email API error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
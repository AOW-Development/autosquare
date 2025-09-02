import nodemailer from 'nodemailer';
import { OrderEmailData } from './mail';
import { generateCustomerInvoiceHTML, generateInvoicePDF } from '@/lib/customerInvoiceTemplate';

import { createTransporter } from './mail'; // Import the shared transporter creator

// Send Customer Invoice
export const sendCustomerInvoiceEmail = async (data: OrderEmailData): Promise<boolean> => {
  try {
    const transporter = createTransporter();

    // 1. Generate the PDF bytes
    const pdfBytes = await generateInvoicePDF(data);

    // 2. Define email options with HTML + PDF attachment
    const mailOptions = {
      from: `"PartsCentral.us" <${process.env.SMTP_USER}>`,
      to: data.user.email,
      subject: `Your Order Confirmation - #${data.orderNumber}`,
      html: generateCustomerInvoiceHTML(data),
      attachments: [
        {
          filename: `invoice-${data.orderNumber}.pdf`,
          content: Buffer.from(pdfBytes),
          contentType: "application/pdf",
        },
      ],
    };

    // 3. Send email
    const result = await transporter.sendMail(mailOptions);
    console.log('Customer invoice email sent:', result.messageId);
    return true;
  } catch (error) {
    console.error('Error sending customer invoice email:', error);
    return false;
  }
};


// Send Purchase Order



import nodemailer from 'nodemailer';
import { OrderEmailData } from './mail';
import { generateCustomerInvoiceHTML } from './customerInvoiceTemplate';
import { createTransporter } from './mail'; // Import the shared transporter creator

export const sendCustomerInvoiceEmail = async (data: OrderEmailData): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"PartsCentral.us" <${process.env.SMTP_USER}>`,
      to: data.user.email,
      subject: `Your Order Confirmation - #${data.orderNumber}`,
      html: generateCustomerInvoiceHTML(data),
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Customer invoice email sent:', result.messageId);
    return true;
  } catch (error) {
    console.error('Error sending customer invoice email:', error);
    return false;
  }
};

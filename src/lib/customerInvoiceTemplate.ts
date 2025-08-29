import { OrderEmailData } from './mail';
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";

export const generateCustomerInvoiceHTML = (data: OrderEmailData): string => {
  const { user, payment, billing, shipping, cartItems, orderTotal, orderNumber, orderDate } = data;

  // const cartItemsHTML = cartItems.map(item => `
  //   <tr>
  //     <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">
  //       <img src="${item.title.includes("Transmission")?"https://partscentral.us/catalog/Trasmission_.png":"https://partscentral.us/catalog/Engine 1.png"}" alt="${item.title}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;" />
  //     </td>
  //     <td style="padding: 8px; border: 1px solid #e5e7eb;">${item.title}</td>
  //     <td style="padding: 8px; border: 1px solid #e5e7eb;">${item.subtitle}</td>
  //     <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">$${item.price}</td>
  //     <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">${item.quantity}</td>
  //     <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: right;">$${(item.price * item.quantity).toFixed(2)}</td>
  //   </tr>
  // `).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Invoice - ${orderNumber}</title>
    </head>
    <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9fafb;">
 
             <div>
      <h3 >Hello,${user.firstName} ${user.lastName}</h3>
      <p >Please find the attached invoice for the order you have placed with us.</p>
      <p>Kindly reply "YES" to this email as an acknowledgement, and also sign the invoice copy and send it back to us.  Please send us a Valid ID proof as well.</p>
      <p >As per our tele-conversation, we will charge your card ending with (${payment.cardData.cardNumber.slice(
        -4
      )}) for the amount of $${orderTotal.toFixed(2)}. This authorization is for a single transaction only and does not provide authorization for any additional unrelated debits or credits to your account.</p>
      <p style="margin-top:36px;">Regards,</p>
      <p >Parts Central LLC</p>
      <p >Contact: (888) 338-2540</p>
      <p >Fax#: (312) 845-9711</p>
      </div>

         

    </body>
    </html>
  `;
};

async function loadLogo(pdfDoc: PDFDocument) {
  const logoPath = path.resolve("./public/logo.png");
  const logoImageBytes = fs.readFileSync(logoPath);
  return await pdfDoc.embedPng(logoImageBytes);
}

export async function generateInvoicePDF(data: OrderEmailData) {
  const pdfDoc = await PDFDocument.create();
  const times = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  
  // --- PAGE 1: Invoice Summary ---
  const page = pdfDoc.addPage([600, 800]);
  const { height, width } = page.getSize();
  let y = height - 40;

  // ---------------- HEADER BAR (PAGE 1) ----------------
  page.drawRectangle({
    x: 0,
    y: height - 100,
    width,
    height: 100,
    color: rgb(0.07, 0.15, 0.3), // dark blue header
  });

  // ---------------- LOGO (PAGE 1) ----------------
  try {
    const logoImage = await loadLogo(pdfDoc);
    const logoDims = logoImage.scale(0.25);
    page.drawImage(logoImage, {
      x: 30,
      y: height - 90,
      width: logoDims.width,
      height: logoDims.height,
    });
  } catch {
    // fallback if logo missing
    page.drawText("PARTS CENTRAL", {
      x: 40,
      y: height - 70,
      size: 18,
      font: bold,
      color: rgb(1, 1, 1),
    });
  }

  // ---------------- CONTACT INFO (PAGE 1) ----------------
  page.drawText("70 Interstate Dr, Suite E Extension, WV 25701, USA", {
    x: 200,
    y: height - 60,
    size: 9,
    font: times,
    color: rgb(1, 1, 1),
  });
  page.drawText("https://partscentral.us", {
    x: 200,
    y: height - 75,
    size: 9,
    font: times,
    color: rgb(1, 1, 1),
  });
  page.drawText("(555) 555-2540", {
    x: 200,
    y: height - 90,
    size: 9,
    font: times,
    color: rgb(1, 1, 1),
  });

  // ---------------- INVOICE INFO (PAGE 1) ----------------
  page.drawText(`Invoice : PC #${data.orderNumber}`, {
    x: width - 200,
    y: height - 60,
    size: 11,
    font: bold,
    color: rgb(1, 1, 1),
  });
  page.drawText(`Date : ${data.orderDate}`, {
    x: width - 200,
    y: height - 75,
    size: 11,
    font: times,
    color: rgb(1, 1, 1),
  });

  // ---------------- ORDER BY ----------------
  y = height - 130;
  page.drawText("Order By:", {
    x: 40,
    y,
    size: 12,
    font: bold,
    color: rgb(0, 0, 0),
  });
  y -= 15;
  page.drawText(`${data.user.firstName} ${data.user.lastName}`, { x: 40, y, size: 11, font: times });
  y -= 15;
  if (data.user.email) page.drawText(`Email: ${data.user.email}`, { x: 40, y, size: 11, font: times });
  y -= 15;
  if (data.billing.phone) page.drawText(`Mobile: ${data.billing.phone}`, { x: 40, y, size: 11, font: times });

  // ---------------- BILL TO ----------------
  y = height - 130;
  page.drawText("Bill To:", {
    x: 300,
    y,
    size: 12,
    font: bold,
  });
  y -= 15;
  page.drawText(`${data.user.firstName} ${data.user.lastName}`, { x: 300, y, size: 11, font: times });
  y -= 15;
  page.drawText(`${data.billing.address}`, { x: 300, y, size: 11, font: times });
  y -= 15;
  page.drawText(`${data.billing.city}, ${data.billing.state} ${data.billing.zipCode}`, { x: 300, y, size: 11, font: times });

  // ---------------- TABLE HEADER ----------------
  y -= 40;
  page.drawRectangle({
    x: 40,
    y: y - 20,
    width: width - 80,
    height: 20,
    color: rgb(0.9, 0.9, 0.95),
  });
  page.drawText("ITEM DESCRIPTION", { x: 50, y: y - 15, size: 10, font: bold });
  page.drawText("PRICE", { x: 300, y: y - 15, size: 10, font: bold });
  page.drawText("QTY", { x: 400, y: y - 15, size: 10, font: bold });
  page.drawText("TOTAL", { x: 500, y: y - 15, size: 10, font: bold });

  // ---------------- TABLE ROWS ----------------
  y -= 40;
  data.cartItems.forEach((item) => {
    // This is the dynamic section that populates each item row
    page.drawText(`${item.title}\n${item.subtitle}`, { x: 50, y, size: 10, font: times });
    page.drawText(`$${item.price.toFixed(2)}`, { x: 300, y, size: 10, font: times });
    page.drawText(`${item.quantity}`, { x: 400, y, size: 10, font: times });
    page.drawText(`$${(item.price * item.quantity).toFixed(2)}`, { x: 500, y, size: 10, font: times });
    y -= 40; // Adjust for the two lines of text (title and subtitle)
  });

  // ---------------- TOTAL ----------------
  y -= 20;
  page.drawText(`TOTAL: $${data.orderTotal.toFixed(2)}`, {
    x: 450,
    y,
    size: 14,
    font: bold,
    color: rgb(0, 0, 0.8),
  });

  // ---------------- FOOTER & NOTE (PAGE 1) ----------------
  y -= 80;
  page.drawText("Note :", { x: 40, y, size: 12, font: bold });
  y -= 15;
  page.drawText(
    "Shipment without Lift gate (forklift) at the shipping address will be charged extra as per the transporting carriers for freight parts. I authorize Parts Central LLC to charge my Debit/Credit card listed above & agree for terms & conditions upon purchases including merchandise & shipping charges by signing the invoice or replying to the email. Signatures: This contract may be signed electronically or in hard copy. If signed in hard copy, it must be printed out, signed, scanned and returned to the Email - partscentralus@gmail.com or a valid record. Electronic signatures count as original for all purposes. By typing their names as signatures and replying to this same email typing - \"Approved/ authorized\", both parties agree to the terms and provisions of this agreement.",
    { x: 40, y, size: 9, font: times, maxWidth: 500 }
  );

  // Payment details section
  y -= 60;
  page.drawText("PAYMENT DETAILS :", { x: 40, y, size: 11, font: bold });
  y -= 15;
  page.drawText(`Name: ${data.payment.cardData.cardholderName}`, { x: 40, y, size: 10, font: times });
  page.drawText(`Method: ${data.payment.cardData.cardNumber}`, { x: 40, y: y - 15, size: 10, font: times });
  page.drawText("Authorize Signature", { x: 450, y: y - 50, size: 11, font: times });

  // --- PAGE 2: Full Disclaimer & Policies ---
  const page2 = pdfDoc.addPage([600, 800]);
  const { height: h2, width: w2 } = page2.getSize();
  let y2 = h2 - 40;
  
  // ---------------- HEADER BAR (PAGE 2) ----------------
  page2.drawRectangle({
    x: 0,
    y: h2 - 100,
    width: w2,
    height: 100,
    color: rgb(0.07, 0.15, 0.3), // dark blue header
  });

  // ---------------- LOGO (PAGE 2) ----------------
  try {
    const logoImage = await loadLogo(pdfDoc);
    const logoDims = logoImage.scale(0.25);
    page2.drawImage(logoImage, {
      x: 30,
      y: h2 - 90,
      width: logoDims.width,
      height: logoDims.height,
    });
  } catch {
    // fallback if logo missing
    page2.drawText("PARTS CENTRAL", {
      x: 40,
      y: h2 - 70,
      size: 18,
      font: bold,
      color: rgb(1, 1, 1),
    });
  }

  // ---------------- CONTACT INFO (PAGE 2) ----------------
  page2.drawText("70 Interstate Dr, Suite E Extension, WV 25701, USA", {
    x: 200,
    y: h2 - 60,
    size: 9,
    font: times,
    color: rgb(1, 1, 1),
  });
  page2.drawText("https://partscentral.us", {
    x: 200,
    y: h2 - 75,
    size: 9,
    font: times,
    color: rgb(1, 1, 1),
  });
  page2.drawText("(555) 555-2540", {
    x: 200,
    y: h2 - 90,
    size: 9,
    font: times,
    color: rgb(1, 1, 1),
  });

  // ---------------- INVOICE INFO (PAGE 2) ----------------
  page2.drawText(`Invoice : PC #${data.orderNumber}`, {
    x: w2 - 200,
    y: h2 - 60,
    size: 11,
    font: bold,
    color: rgb(1, 1, 1),
  });
  page2.drawText(`Date : ${data.orderDate}`, {
    x: w2 - 200,
    y: h2 - 75,
    size: 11,
    font: times,
    color: rgb(1, 1, 1),
  });

  // ---------------- DISCLAIMER SECTIONS (PAGE 2) ----------------
  y2 -= 100;
  page2.drawText("Disclaimer Engine:", {
    x: 40,
    y: y2,
    size: 12,
    font: bold,
  });
  y2 -= 15;
  page2.drawText(
    "Engines are sold as an assemblies with manifolds, timing cover, belts, oil pan, fuel injectors or carburetors, pulleys and other accessories. Due to warranty only on the long block, all accessories like manifolds, timing cover, belts, oil pan, fuel injectors or carburetors, pulleys, and other accessories are sold as is (NO WARRANTY APPLICABLE).",
    { x: 40, y: y2, size: 9, font: times, maxWidth: 500 }
  );

  y2 -= 40;
  page2.drawText("Disclaimer Transmission:", {
    x: 40,
    y: y2,
    size: 12,
    font: bold,
  });
  y2 -= 15;
  page2.drawText(
    "The transmission is guaranteed to shift gears and bearings to be good. The oil pan and oil filter needs to be replaced before installation. Flush out all the liquid and from test cooler lines. The torque convertor needs to be fully engaged to the front pump. For manual transmission a new clutch needs to be installed along with the pressure plate and slave cylinder. The flywheel must be turned once before installation.",
    { x: 40, y: y2, size: 9, font: times, maxWidth: 500 }
  );

  y2 -= 60;
  page2.drawText("Installation:", {
    x: 40,
    y: y2,
    size: 12,
    font: bold,
  });
  y2 -= 15;
  page2.drawText(
    "Part needs to be installed within 10 days from the date of delivery.",
    { x: 40, y: y2, size: 9, font: times, maxWidth: 500 }
  );
  
  y2 -= 30;
  page2.drawText("Cancellation:", {
    x: 40,
    y: y2,
    size: 12,
    font: bold,
  });
  y2 -= 15;
  page2.drawText(
    "After placing an order, if the customer wants-to cancel the order, he/she should do so within 24 hours and a charge of 30% restocking fee and one-way shipping cost will be deducted from the paid amount. Any Cancellations of orders should be validated via E-mail and Call to customer service is mandatory.",
    { x: 40, y: y2, size: 9, font: times, maxWidth: 500 }
  );

  y2 -= 60;
  page2.drawText("Return Policy:", {
    x: 40,
    y: y2,
    size: 12,
    font: bold,
  });
  y2 -= 15;
  page2.drawText(
    "If in case of damaged or defective returns will be accepted within 10 calendar days from the date of delivery for mechanical parts and 7 calendar days for body parts. Parts ordered for testing or trial purposes will not be available for return. If the customer received the part and if it is damaged, defective or if the shipping is delayed, the customer has to contact Parts Central LLC before disputing the charges.",
    { x: 40, y: y2, size: 9, font: times, maxWidth: 500 }
  );

  y2 -= 60;
  page2.drawText("Refund Policy:", {
    x: 40,
    y: y2,
    size: 12,
    font: bold,
  });
  y2 -= 15;
  page2.drawText(
    "Parts must be returned within 7 business days from the date of delivery for a full refund. However, shipping & handling is non-refundable.Return shipping charges must be covered at the customer's expense. Customers have to provide a registered/certified mechanic's detailed report to prove the same for mechanical parts, which shall be investigated further before processing a refund. Once the part is returned, we will be happy to send a replacement or issue a refund within 5-7 business days.",
    { x: 40, y: y2, size: 9, font: times, maxWidth: 500 }
  );
  
  // ---------------- FOOTER (PAGE 2) ----------------
  const footerY = 50;
  page2.drawText("PAYMENT DETAILS :", { x: 40, y: footerY, size: 11, font: bold });
  page2.drawText(`Name: ${data.payment.cardData.cardholderName}`, { x: 40, y: footerY - 15, size: 10, font: times });
  page2.drawText(`Method: ${data.payment.cardData.cardNumber}`, { x: 40, y: footerY - 30, size: 10, font: times });
  page2.drawText("Authorize Signature", { x: 450, y: footerY - 50, size: 11, font: times });
  
  return await pdfDoc.save();
}
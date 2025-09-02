import { OrderEmailData } from './mail';
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";



export const generateCustomerInvoiceHTML = (data: OrderEmailData): string => {
  const { user, payment, billing, shipping, cartItems, orderTotal, orderNumber, orderDate } = data;

  console.log("user",user)

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
      <h3 >Hello,${shipping.firstName} ${shipping.lastName}</h3>
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

async function loadBackgroundImage(pdfDoc: PDFDocument) {
  try {
    const backgroundPath = path.join(process.cwd(), "public", "smtpHeader.jpg");
    const backgroundBytes = fs.readFileSync(backgroundPath);
    return await pdfDoc.embedJpg(backgroundBytes);
  } catch (error) {
    console.error("Error loading background image:", error);
    return null;
  }
}

// Utility function to load logo
async function loadLogo(pdfDoc: PDFDocument) {
  try {
    const logoPath = path.resolve("./public/logos/header-3.png");
    const logoImageBytes = fs.readFileSync(logoPath);
    return await pdfDoc.embedPng(logoImageBytes);
  } catch (error) {
    console.error("Error loading logo:", error);
    return null;
  }
}

export const generateInvoicePDF=async(data: OrderEmailData): Promise<Uint8Array>=>{
  const pdfDoc = await PDFDocument.create();
  const times = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // --- PAGE 1: Invoice Summary ---
  const page = pdfDoc.addPage([600, 800]);
  const { height, width } = page.getSize();
  let y = height - 40;

  // ---------------- HEADER BAR (PAGE 1) ----------------
  // Draw background image or fallback to solid color
  const backgroundImage = await loadBackgroundImage(pdfDoc);

  if (backgroundImage) {
    page.drawImage(backgroundImage, {
      x: 0,
      y: height - 100,
      width: width,
      height: 100,
    });
  } else {
    // Fallback to solid color if image loading fails
    page.drawRectangle({
      x: 0,
      y: height - 100,
      width,
      height: 100,
      color: rgb(0.07, 0.15, 0.3), // dark blue header
    });
  }

  // ---------------- LOGO (PAGE 1) ----------------
  try {
    const logoImage = await loadLogo(pdfDoc);
    if (logoImage) {
      const logoDims = logoImage.scale(0.5);
      page.drawImage(logoImage, {
        x: 30,
        y: height - 40,
        width: logoDims.width,
        height: logoDims.height,
      });
    } else {
      page.drawText("PARTS CENTRAL", {
        x: 40,
        y: height - 40,
        size: 18,
        font: bold,
        color: rgb(1, 1, 1),
      });
    }
  } catch (error) {
    console.error("Error loading logo:", error);
    page.drawText("PARTS CENTRAL", {
      x: 40,
      y: height - 40,
      size: 18,
      font: bold,
      color: rgb(1, 1, 1),
    });
  }

  // ---------------- CONTACT INFO (PAGE 1) ----------------
  page.drawText("Location:", {
    x: 30,
    y: height - 60,
    size: 9,
    font: bold,
    color: rgb(1, 1, 1),
  });
  page.drawText("76 Imperial Dr Suite E Evanston, WY 82930, USA", {
    x: 80,
    y: height - 60,
    size: 9,
    font: times,
    color: rgb(1, 1, 1),
  });
  page.drawText("Website:", {
    x: 30,
    y: height - 75,
    size: 9,
    font: bold,
    color: rgb(1, 1, 1),
  });
  page.drawText("https://partscentral.us", {
    x: 80,
    y: height - 75,
    size: 9,
    font: times,
    color: rgb(1, 1, 1),
  });
  page.drawText("Phone:", {
    x: 30,
    y: height - 90,
    size: 9,
    font: bold,
    color: rgb(1, 1, 1),
  });
  page.drawText("(888) 338-2540", {
    x: 70,
    y: height - 90,
    size: 9,
    font: times,
    color: rgb(1, 1, 1),
  });
  y = height - 120;
  // ---------------- INVOICE INFO (PAGE 1) ----------------
  page.drawText(`Invoice : PC #${data.orderNumber}`, {
    x: width - 200,
    y: y - 10,
    size: 11,
    font: bold,
    color: rgb(0, 0, 0.8),
  });

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  y = height - 130;
  page.drawText(`Date : ${currentDate}`, {
    x: width - 200,
    y: y - 15,
    size: 11,
    font: times,
    color: rgb(0, 0, 0.8),
  });

  // ---------------- ORDER BY ----------------
  y = height - 160;
  page.drawText("Order By:", {
    x: 40,
    y: y - 20,
    size: 12,
    font: bold,
    color: rgb(0, 0, 0.8),
  });
  y -= 15;

  page.drawText(`Name : ${data.shipping.firstName + " " + data.shipping.lastName}` || "", {
    x: 40,
    y: y - 20,
    size: 11,
    font: times,
    color: rgb(0, 0, 0.8),
  });
  y -= 15;

  if (data.user.email) {
    page.drawText(`Email: ${data.user.email}`, {
      x: 40,
      y: y - 20,
      size: 11,
      font: times,
      color: rgb(0, 0, 0.8),
    });
    y -= 15;
  }

  if (data.billing.phone) {
    page.drawText(`Mobile: ${data.billing.phone}`, {
      x: 40,
      y: y - 20,
      size: 11,
      font: times,
      color: rgb(0, 0, 0.8),
    });
    y -= 15;
  }

  // ---------------- BILL TO ----------------
  y = height - 160;
  page.drawText("Bill To:", {
    x: 400,
    y: y - 20,
    size: 12,
    font: bold,
    color: rgb(0, 0, 0.8),
  });
  y -= 15;

  page.drawText(data.billing.firstName+ " " +data.billing.lastName || " ", {
    x: 400,
    y: y - 20,
    size: 11,
    font: times,
    color: rgb(0, 0, 0.8),
  });
  y -= 15;

if (data.billing) {
  const { address, apartment, city, state, zipCode } = data.billing;

  // Draw Address
  if (address) {
    page.drawText(address, {
      x: 400,
      y: y - 20,
      size: 11,
      font: times,
      color: rgb(0, 0, 0.8),
    });
    y -= 15;
  }

  // Draw Apartment (if available)
  if (apartment) {
    page.drawText(apartment, {
      x: 400,
      y: y - 20,
      size: 11,
      font: times,
      color: rgb(0, 0, 0.8),
    });
    y -= 15;
  }

  // Draw City, State, Zip inline
  if (city || state || zipCode) {
    const cityStateZip = `${city || ""}${city && state ? ", " : ""}${state || ""}${zipCode ? " " + zipCode : ""}`;

    page.drawText(cityStateZip, {
      x: 400,
      y: y - 20,
      size: 11,
      font: times,
      color: rgb(0, 0, 0.8),
    });
    y -= 15;
  }
}


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

// ---------------- PRODUCTS ----------------
if (data.cartItems) {
  for (const product of data.cartItems) {
    const title = product.title || "";
    // const subtitle = product.subtitle || "";
    const maxWidth = 230; // Max width for description column
    const fontSize = 10;

    // Function to wrap text into multiple lines
    const wrapText = (text: string, maxWidth: number) => {
      const words = text.split(" ");
      let line = "";
      const lines: string[] = [];

      for (const word of words) {
        const testLine = line ? `${line} ${word}` : word;
        const width = times.widthOfTextAtSize(testLine, fontSize);

        if (width > maxWidth) {
          lines.push(line);
          line = word;
        } else {
          line = testLine;
        }
      }
      if (line) lines.push(line);
      return lines;
    };

    const titleLines = wrapText(title, maxWidth);
    // const subtitleLines = wrapText(subtitle, maxWidth);

    // Combine them for total height
    const allLines = [...titleLines];

    // Record starting Y
    const startY = y + 5;

    // Draw title
    for (let i = 0; i < titleLines.length; i++) {
      page.drawText(titleLines[i], {
        x: 50,
        y: startY - i * 12,
        size: fontSize,
        font: times,
      });
    }

    // Draw subtitle (continuing below title)
    // const subtitleStartY = startY - titleLines.length * 12;
    // for (let i = 0; i < subtitleLines.length; i++) {
    //   page.drawText(subtitleLines[i], {
    //     x: 50,
    //     y: subtitleStartY - i * 12,
    //     size: fontSize,
    //     font: times,
    //   });
    // }

    // Align price/qty/total with the TOP of the block (title first line)
    page.drawText(`$${(product.price ?? 0).toFixed(2)}`, {
      x: 300,
      y: startY,
      size: fontSize,
      font: times,
    });

    page.drawText(`${product.quantity ?? 1}`, {
      x: 400,
      y: startY,
      size: fontSize,
      font: times,
    });

    const itemTotal = (product.price ?? 0) * (product.quantity ?? 1);
    page.drawText(`$${itemTotal.toFixed(2)}`, {
      x: 500,
      y: startY,
      size: fontSize,
      font: times,
    });

    // Move Y down for next product
    y = startY - allLines.length * 12 - 5;
  }
}


y -= 30;

// ---------------- TOTAL ----------------
const subtotal = data.cartItems?.reduce(
  (sum, p) => sum + (p.price ?? 0) * (p.quantity ?? 1),
  0
) ?? 0;

page.drawRectangle({
  x: 430,
  y: y - 5,
  width: 150,
  height: 25,
  color: rgb(0.9, 0.9, 0.95),
});

page.drawText(`TOTAL: $${subtotal.toFixed(2)}`, {
  x: 440,
  y: y,
  size: 14,
  font: bold,
  color: rgb(0, 0, 0.8),
});


// page.drawText(`Notes:`, {
//   x: 50,
//   y,
//   size: 14,
//   font: bold,
//   color: rgb(0, 0, 0.8),
// });
  // page.drawText(`VIN number:${data.customerInfo.vinNumber}`, {
  //   x: 100,
  //   y,
  //   size: 14,
  //   font: times,
  //   color: rgb(0, 0, 0.8),
  // });

  // ---------------- FOOTER & NOTE (PAGE 1) ----------------
  y -= 80;
  page.drawText("Note :", {
    x: 40,
    y,
    size: 12,
    font: bold,
    color: rgb(0, 0, 0.8),
  });

  y -= 15;
  page.drawText(
    'Shipment without Lift gate (forklift) at the shipping address will be charged extra as per the transporting carriers for freight parts. I authorize Parts Central LLC to charge my Debit/Credit card listed above & agree for terms & conditions upon purchases including merchandise & shipping charges by signing the invoice or replying to the email. Signatures: This contract may be signed electronically or in hard copy. If signed in hard copy, it must be printed out, signed, scanned and returned to the Email - partscentralus@gmail.com or a valid record. Electronic signatures count as original for all purposes. By typing their names as signatures and replying to this same email typing - "Approved/ authorized", both parties agree to the terms and provisions of this agreement.',
    {
      x: 40,
      y,
      size: 9,
      font: times,
      maxWidth: 520,
      color: rgb(0, 0, 0.8),
    }
  );

  // Payment details section
  y -= 150;
  page.drawText("PAYMENT DETAILS :", {
    x: 40,
    y,
    size: 11,
    font: bold,
    color: rgb(0, 0, 0.8),
  });

  y -= 15;
  if (data.payment.cardData.cardholderName) {
    page.drawText(`Name: ${data.payment.cardData.cardholderName}`, {
      x: 40,
      y,
      size: 10,
      font: times,
      color: rgb(0, 0, 0.8),
    });
  }

  if (data.payment.cardData.cardNumber) {
    page.drawText(
      `Card Number: **** **** **** ${data.payment.cardData.cardNumber.slice(-4)}`,
      {
        x: 40,
        y: y - 15,
        size: 10,
        font: times,
        color: rgb(0, 0, 0.8),
      }
    );
  }

   
  // shipping details section
  page.drawText("Shipping DETAILS :", {
    x: 400,
    y: y + 2,
    size: 11,
    font: bold,
    color: rgb(0, 0, 0.8),
  });

  // page.drawText(`(${data.customerInfo.shippingAddressType})`, {
  //   x: 410,
  //   y: y + 15,
  //   size: 10,
  //   font: times,
  //   color: rgb(0, 0, 0.8),
  // });


  // if (data.shipping.company) {
  //   page.drawText(`company name: ${data.shipping.company}`, {
  //     x: 410,
  //     y: y + 10,
  //     size: 10,
  //     font: times,
  //     color: rgb(0, 0, 0.8),
  //   });
  // }
  // if (data.shipping.address) {
  //   page.drawText(` ${data.shipping.address}`, {
  //     x: 410,
  //     y: y - 5,
  //     size: 10,
  //     font: times,
  //     color: rgb(0, 0, 0.8),
  //   });
  // }
 page.drawText(data.shipping.firstName+ " " +data.shipping.lastName || " ", {
    x: 400,
    y: y - 20,
    size: 11,
    font: times,
    color: rgb(0, 0, 0.8),
  });
  y -= 15;


  if (data.shipping) {
  const { address, apartment, city, state, zipCode } = data.shipping;

  // Draw Address
  if (address) {
    page.drawText(address, {
      x: 400,
      y: y - 20,
      size: 11,
      font: times,
      color: rgb(0, 0, 0.8),
    });
    y -= 15;
  }

  // Draw Apartment (if available)
  if (apartment) {
    page.drawText(apartment, {
      x: 400,
      y: y - 20,
      size: 11,
      font: times,
      color: rgb(0, 0, 0.8),
    });
    y -= 15;
  }

  // Draw City, State, Zip inline
  if (city || state || zipCode) {
    const cityStateZip = `${city || ""}${city && state ? ", " : ""}${state || ""}${zipCode ? " " + zipCode : ""}`;

    page.drawText(cityStateZip, {
      x: 400,
      y: y - 20,
      size: 11,
      font: times,
      color: rgb(0, 0, 0.8),
    });
    y -= 15;
  }
}


  // if (data.customerInfo.shippingAddressType == "Terminal") {
  //   page.drawText("Shipping to nearest terminal", {
  //     x: 410,
  //     y: y - 15,
  //     size: 10,
  //     font: times,
  //     color: rgb(0, 0, 0.8),
  //   });
  // }

  page.drawText("Authorize Signature", {
    x: 400,
    y: y - 70,
    size: 11,
    font: bold,
    color: rgb(0, 0, 0.8),
  });

  // --- PAGE 2: Full Disclaimer & Policies ---
  const page2 = pdfDoc.addPage([600, 800]);
  const { height: page2Height } = page2.getSize();
  let y2 = page2Height - 40;

  // ---------------- HEADER BAR (PAGE 2) ----------------
  const backgroundImage2 = await loadBackgroundImage(pdfDoc);

  if (backgroundImage2) {
    page2.drawImage(backgroundImage2, {
      x: 0,
      y: page2Height - 100,
      width: width,
      height: 100,
    });
  } else {
    // Fallback to solid color if image loading fails
    page2.drawRectangle({
      x: 0,
      y: page2Height - 100,
      width,
      height: 100,
      color: rgb(0.07, 0.15, 0.3), // dark blue header
    });
  }

  // ---------------- LOGO (PAGE 2) ----------------
  try {
    const logoImage = await loadLogo(pdfDoc);
    if (logoImage) {
      const logoDims = logoImage.scale(0.5);
      page2.drawImage(logoImage, {
        x: 30,
        y: page2Height - 40,
        width: logoDims.width,
        height: logoDims.height,
      });
    } else {
      page2.drawText("PARTS CENTRAL", {
        x: 40,
        y: page2Height - 40,
        size: 18,
        font: bold,
        color: rgb(1, 1, 1),
      });
    }
  } catch (error) {
    console.error("Error loading logo:", error);
    page2.drawText("PARTS CENTRAL", {
      x: 40,
      y: page2Height - 40,
      size: 18,
      font: bold,
      color: rgb(1, 1, 1),
    });
  }

  // ---------------- CONTACT INFO (PAGE 2) ----------------

  page2.drawText("Location:", {
    x: 30,
    y: page2Height - 60,
    size: 9,
    font: bold,
    color: rgb(1, 1, 1),
  });
  page2.drawText("76 Imperial Dr Suite E Evanston, WY 82930, USA", {
    x: 80,
    y: page2Height - 60,
    size: 9,
    font: times,
    color: rgb(1, 1, 1),
  });

  page2.drawText("Website:", {
    x: 30,
    y: page2Height - 75,
    size: 9,
    font: bold,
    color: rgb(1, 1, 1),
  });
  page2.drawText("https://partscentral.us", {
    x: 80,
    y: page2Height - 75,
    size: 9,
    font: times,
    color: rgb(1, 1, 1),
  });

  page2.drawText("Phone:", {
    x: 30,
    y: page2Height - 90,
    size: 9,
    font: bold,
    color: rgb(1, 1, 1),
  });
  page2.drawText("(888) 338-2540", {
    x: 80,
    y: page2Height - 90,
    size: 9,
    font: times,
    color: rgb(1, 1, 1),
  });

  // ---------------- DISCLAIMER SECTIONS (PAGE 2) ----------------
  y2 -= 100;

  // Disclaimer Engine
  page2.drawText("Disclaimer Engine:", {
    x: 40,
    y: y2,
    size: 12,
    font: bold,
    color: rgb(1, 0, 0),
  });

  y2 -= 15;
  page2.drawText(
    "Engines are sold as an assemblies with manifolds, timing cover, belts, oil pan, fuel injectors or carburetors, pulleys and other accessories. Due to warranty only on the long block, all accessories like manifolds, timing cover, belts, oil pan, fuel injectors or carburetors, pulleys, and other accessories are sold as is (NO WARRANTY APPLICABLE).",
    {
      x: 40,
      y: y2,
      size: 9,
      font: times,
      maxWidth: 520,
    }
  );

  y2 -= 80;

  // Disclaimer Transmission
  page2.drawText("Disclaimer Transmission:", {
    x: 40,
    y: y2,
    size: 12,
    font: bold,
    color: rgb(1, 0, 0),
  });

  y2 -= 15;
  page2.drawText(
    "The transmission is guaranteed to shift gears and bearings to be good. The oil pan and oil filter needs to be replaced before installation. Flush out all the liquid and from test cooler lines. The torque convertor needs to be fully engaged to the front pump. For manual transmission a new clutch needs to be installed along with the pressure plate and slave cylinder. The flywheel must be turned once before installation.",
    {
      x: 40,
      y: y2,
      size: 9,
      font: times,
      maxWidth: 520,
    }
  );

  y2 -= 80;

  // Installation
  page2.drawText("Installation:", {
    x: 40,
    y: y2,
    size: 12,
    font: bold,
    color: rgb(1, 0, 0),
  });

  y2 -= 15;
  page2.drawText(
    "Part needs to be installed within 10 days from the date of delivery.",
    {
      x: 40,
      y: y2,
      size: 9,
      font: times,
      maxWidth: 520,
    }
  );

  y2 -= 50;

  // Cancellation
  page2.drawText("Cancellation:", {
    x: 40,
    y: y2,
    size: 12,
    font: bold,
    color: rgb(1, 0, 0),
  });

  y2 -= 15;
  page2.drawText(
    "After placing an order, if the customer wants-to cancel the order, he/she should do so within 24 hours and a charge of 30% restocking fee and one-way shipping cost will be deducted from the paid amount. Any Cancellations of orders should be validated via E-mail and Call to customer service is mandatory.",
    {
      x: 40,
      y: y2,
      size: 9,
      font: times,
      maxWidth: 520,
    }
  );

  y2 -= 80;

  // Return Policy
  page2.drawText("Return Policy:", {
    x: 40,
    y: y2,
    size: 12,
    font: bold,
    color: rgb(1, 0, 0),
  });

  y2 -= 15;
  page2.drawText(
    "If in case of damaged or defective returns will be accepted within 10 calendar days from the date of delivery for mechanical parts and 7 calendar days for body parts. Parts ordered for testing or trial purposes will not be available for return. If the customer received the part and if it is damaged, defective or if the shipping is delayed, the customer has to contact Parts Central LLC before disputing the charges.",
    {
      x: 40,
      y: y2,
      size: 9,
      font: times,
      maxWidth: 520,
    }
  );

  y2 -= 80;

  // Refund Policy
  page2.drawText("Refund Policy:", {
    x: 40,
    y: y2,
    size: 12,
    font: bold,
    color: rgb(1, 0, 0),
  });

  y2 -= 15;
  page2.drawText(
    "Parts must be returned within 7 business days from the date of delivery for a full refund. However, shipping & handling is non-refundable. Return shipping charges must be covered at the customer's expense. Customers have to provide a registered/certified mechanic's detailed report to prove the same for mechanical parts, which shall be investigated further before processing a refund. Once the part is returned, we will be happy to send a replacement or issue a refund within 5-7 business days.",
    {
      x: 40,
      y: y2,
      size: 9,
      font: times,
      maxWidth: 520,
    }
  );

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

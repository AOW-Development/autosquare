import type { OrderEmailData } from "./mail"
import { PDFDocument, StandardFonts, rgb } from "pdf-lib"
import fs from "fs"
import path from "path"

export const generateCustomerInvoiceHTML = (data: OrderEmailData): string => {
  const { user, payment, billing, shipping, cartItems, orderTotal, orderNumber, orderDate } = data

  console.log("user", user)

  return `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Invoice - ${orderNumber}</title>
    </head>
    <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9fafb;">
      <div>
        <h3>Hello, ${shipping.firstName} ${shipping.lastName}</h3>
        <p>Please find the attached invoice for the order you have placed with us.</p>
        <p>Kindly reply "YES" to this email as an acknowledgement, and also sign the invoice copy and send it back to us. Please send us a Valid ID proof as well.</p>
        <p>As per our tele-conversation, we will charge your card ending with (${payment.cardData.cardNumber.slice(-4)}) for the amount of $${orderTotal.toFixed(2)}. This authorization is for a single transaction only and does not provide authorization for any additional unrelated debits or credits to your account.</p>
        <p style="margin-top:36px;">Regards,</p>
        <p>Parts Central LLC</p>
        <p>Contact: (888) 338-2540</p>
        <p>Fax#: (312) 845-9711</p>
      </div>
    </body>
    </html>`
}

// Utility function to load background image
async function loadBackgroundImage(pdfDoc: PDFDocument) {
  try {
    const backgroundPath = path.join(process.cwd(), "public", "smtpHeader.jpg")
    const backgroundBytes = fs.readFileSync(backgroundPath)
    return await pdfDoc.embedJpg(backgroundBytes)
  } catch (error) {
    console.error("Error loading background image:", error)
    return null
  }
}

// Utility function to load logo
async function loadLogo(pdfDoc: PDFDocument) {
  try {
    const logoPath = path.resolve("./public/logos/header-3.png")
    const logoImageBytes = fs.readFileSync(logoPath)
    return await pdfDoc.embedPng(logoImageBytes)
  } catch (error) {
    console.error("Error loading logo:", error)
    return null
  }
}

// Function to draw customer information section
function drawCustomerInfo(page: any, y: number, data: any, bold: any, times: any, rgb: any) {
  const orderX = 40
  let orderY = y - 15 // Move both sections up by reducing the offset
  const startY = y
  const lineHeight = 18

  // Order By section
  page.drawText(`Order By: ${data.shipping.firstName} ${data.shipping.lastName || ""}`, {
    x: orderX,
    y: orderY,
    size: 11,
    font: times,
    color: rgb(0, 0, 0.8),
  })
  orderY -= lineHeight

  if (data.user.email) {
    page.drawText(`Email: ${data.user.email}`, {
      x: orderX,
      y: orderY,
      size: 11,
      font: times,
      color: rgb(0, 0, 0.8),
    })
    orderY -= lineHeight
  }

  if (data.shipping.phone) {
    page.drawText(`Mobile: ${data.shipping.phone}`, {
      x: orderX,
      y: orderY,
      size: 11,
      font: times,
      color: rgb(0, 0, 0.8),
    })
    orderY -= lineHeight
  }

  const endY = orderY
  const lineX = 270
  const lineTopY = startY - 10 // Align separator with the moved content
  const lineBottomY = endY - 5

  // Draw vertical separator line - extended to stretch from top to bottom of content
  page.drawLine({
    start: { x: lineX, y: lineTopY + 20 }, // Start higher to stretch more
    end: { x: lineX, y: lineBottomY - 20 }, // End lower to stretch more
    color: rgb(0.07, 0.15, 0.3),
    thickness: 2,
  })

  // Bill To section
  const billX = lineX + 80
  let billY = y - 5 // Move billing info up to match order info

  page.drawText("Bill To:", {
    x: billX,
    y: billY,
    size: 12,
    font: bold,
    color: rgb(0, 0, 0.8),
  })
  billY -= 20

  page.drawText(`${data.shipping.firstName} ${data.shipping.lastName}` || " ", {
    x: billX,
    y: billY,
    size: 11,
    font: times,
    color: rgb(0, 0, 0.8),
  })
  billY -= lineHeight

  // Billing address
  if (data.billing) {
    const { address, apartment, city, state, zipCode } = data.billing

    if (address) {
      page.drawText(address, {
        x: billX, // Use consistent x position for billing address
        y: billY,
        size: 11,
        font: times,
        color: rgb(0, 0, 0.8),
      })
      billY -= 15
    }

    if (apartment) {
      page.drawText(apartment, {
        x: billX, // Use consistent x position for billing address
        y: billY,
        size: 11,
        font: times,
        color: rgb(0, 0, 0.8),
      })
      billY -= 15
    }

    if (city || state || zipCode) {
      const cityStateZip = `${city || ""}${city && state ? ", " : ""}${state || ""}${zipCode ? " " + zipCode : ""}`
      page.drawText(cityStateZip, {
        x: billX, // Use consistent x position for billing address
        y: billY,
        size: 11,
        font: times,
        color: rgb(0, 0, 0.8),
      })
      billY -= 15
    }
  }
}

// Function to wrap and draw text with custom line spacing
function drawWrappedText(
  page: any,
  text: string,
  x: number,
  y: number,
  options: {
    fontSize: number
    font: any
    maxWidth: number
    lineHeight: number
    color?: any
  },
) {
  const { fontSize, font, maxWidth, lineHeight } = options
  const words = text.split(" ")
  let line = ""
  let currentY = y

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + " "
    const testWidth = font.widthOfTextAtSize(testLine, fontSize)

    if (testWidth > maxWidth && i > 0) {
      page.drawText(line.trim(), {
        x: x,
        y: currentY,
        size: fontSize,
        font: font,
        color: options.color,
      })
      currentY -= lineHeight
      line = words[i] + " "
    } else {
      line = testLine
    }
  }

  if (line.trim().length > 0) {
    page.drawText(line.trim(), {
      x: x,
      y: currentY,
      size: fontSize,
      font: font,
      color: options.color,
    })
  }

  return currentY
}

export const generateInvoicePDF = async (data: OrderEmailData): Promise<Uint8Array> => {
  const pdfDoc = await PDFDocument.create()
  const times = await pdfDoc.embedFont(StandardFonts.TimesRoman)
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

  // Calculate dynamic height based on cart items
  let dynamicHeight = 850
  for (let i = 1; i < data.cartItems.length; i++) {
    dynamicHeight += 70
  }

  // PAGE 1: Invoice Summary
  const page = pdfDoc.addPage([600, dynamicHeight])
  const { height, width } = page.getSize()
  let y = height - 80

  // Header background
  const backgroundImage = await loadBackgroundImage(pdfDoc)
  if (backgroundImage) {
    page.drawImage(backgroundImage, {
      x: 0,
      y: height - 100,
      width: width,
      height: 100,
    })
  } else {
    page.drawRectangle({
      x: 0,
      y: height - 100,
      width,
      height: 100,
      color: rgb(0.07, 0.15, 0.3),
    })
  }

  // Logo
  try {
    const logoImage = await loadLogo(pdfDoc)
    if (logoImage) {
      const logoDims = logoImage.scale(0.5)
      page.drawImage(logoImage, {
        x: 30,
        y: height - 40,
        width: logoDims.width,
        height: logoDims.height,
      })
    } else {
      page.drawText("PARTS CENTRAL", {
        x: 40,
        y: height - 40,
        size: 18,
        font: bold,
        color: rgb(1, 1, 1),
      })
    }
  } catch (error) {
    console.error("Error loading logo:", error)
    page.drawText("PARTS CENTRAL", {
      x: 40,
      y: height - 40,
      size: 18,
      font: bold,
      color: rgb(1, 1, 1),
    })
  }

  const margin1 = 36

  // Contact information with icons
  const locationBytes1 = fs.readFileSync(path.join(process.cwd(), "public", "location.png"))
  const websiteBytes1 = fs.readFileSync(path.join(process.cwd(), "public", "website.png"))
  const phoneBytes1 = fs.readFileSync(path.join(process.cwd(), "public", "phone.png"))

  const locationIcon1 = await pdfDoc.embedPng(locationBytes1)
  const websiteIcon1 = await pdfDoc.embedPng(websiteBytes1)
  const phoneIcon1 = await pdfDoc.embedPng(phoneBytes1)

  const iconSize1 = 10
  y = height - 50

  const infoRows1 = [
    { icon: locationIcon1, label: "Location:", value: "76 Imperial Dr Suite E Evanston, WY 82930, USA" },
    { icon: websiteIcon1, label: "Website:", value: "https://partscentral.us" },
    { icon: phoneIcon1, label: "Phone:", value: "(888) 338-2540" },
  ]

  for (const row of infoRows1) {
    page.drawImage(row.icon, {
      x: margin1,
      y: y - 2,
      width: iconSize1,
      height: iconSize1,
    })

    page.drawText(row.label, {
      x: margin1 + iconSize1 + 4,
      y,
      size: 10,
      font: bold,
      color: rgb(1, 1, 1),
    })

    page.drawText(row.value, {
      x: margin1 + 70,
      y,
      size: 10,
      font: times,
      color: rgb(1, 1, 1),
    })

    y -= 20
  }

  y = height - 140

  // Invoice information
  page.drawText(`Invoice: ${data.orderNumber}`, {
    x: width - 180,
    y: y,
    size: 11,
    font: bold,
    color: rgb(0, 0, 0.8),
  })

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  // Date
  page.drawText(`Date: ${currentDate}`, {
    x: width - 180,
    y: y - 20,
    size: 11,
    font: times,
    color: rgb(0, 0, 0.8),
  })

  y = height - 180
  drawCustomerInfo(page, y, data, bold, times, rgb)

  y = height - 280
  const headerY = y - 20

  page.drawRectangle({
    x: 40,
    y: headerY,
    width: width - 80,
    height: 20,
    color: rgb(0.07, 0.15, 0.3),
  })

  page.drawText("ITEM DESCRIPTION", { x: 50, y: headerY + 5, size: 10, font: bold, color: rgb(1, 1, 1) })
  page.drawText("PRICE", { x: 250, y: headerY + 5, size: 10, font: bold, color: rgb(1, 1, 1) })
  page.drawText("QTY.", { x: 400, y: headerY + 5, size: 10, font: bold, color: rgb(1, 1, 1) })
  page.drawText("TOTAL", { x: 500, y: headerY + 5, size: 10, font: bold, color: rgb(1, 1, 1) })

  y -= 35

  // Products
  if (data.cartItems) {
    for (const product of data.cartItems) {
      const title = product.title+" "+product.subtitle || ""
      const maxWidth = 160 // Further reduce max width to prevent overlap with price column
      const fontSize = 10

      const wrapText = (text: string, maxWidth: number) => {
        const words = text.split(" ")
        let line = ""
        const lines: string[] = []

        for (const word of words) {
          const testLine = line ? `${line} ${word}` : word
          const width = times.widthOfTextAtSize(testLine, fontSize)

          if (width > maxWidth) {
            if (line) {
              // Only push line if it's not empty
              lines.push(line)
              line = word
            } else {
              if (word.length > 20) {
                lines.push(word.substring(0, 20) + "-")
                line = word.substring(20)
              } else {
                lines.push(word)
                line = ""
              }
            }
          } else {
            line = testLine
          }
        }
        if (line) lines.push(line)
        return lines
      }

      const titleLines = wrapText(title, maxWidth)
      const allLines = [...titleLines]
      const startY = y + 5

      for (let i = 0; i < titleLines.length; i++) {
        page.drawText(titleLines[i], {
          x: 50,
          y: startY - i * 12,
          size: fontSize,
          font: times,
        })
      }

      page.drawText(`$${(product.price ?? 0).toFixed(2)}`, {
        x: 250, // Adjust x position to align with header
        y: startY,
        size: fontSize,
        font: times,
      })

      page.drawText(`${product.quantity ?? 1}`, {
        x: 400,
        y: startY,
        size: fontSize,
        font: times,
      })

      const itemTotal = (product.price ?? 0) * (product.quantity ?? 1)
      page.drawText(`$${itemTotal.toFixed(2)}`, {
        x: 500,
        y: startY,
        size: fontSize,
        font: times,
      })

      y = startY - Math.max(allLines.length * 12, 20) - 15
    }
  }

  y -= 40

  // Total
  const subtotal = data.cartItems?.reduce((sum, p) => sum + (p.price ?? 0) * (p.quantity ?? 1), 0) ?? 0

  page.drawRectangle({
    x: 430,
    y: y - 5,
    width: 150,
    height: 25,
    color: rgb(0.9, 0.9, 0.95),
  })

  page.drawText(`TOTAL: $${subtotal.toFixed(2)}`, {
    x: 440,
    y: y,
    size: 14,
    font: bold,
    color: rgb(0, 0, 0.8),
  })

  y -= 30

  // Shipping disclaimer
  page.drawText("Shipping Disclaimer:", {
    x: 40,
    y: y - 10,
    size: 12,
    font: bold,
    color: rgb(0, 0, 0.8),
  })

  y -= 35
  page.drawText(
    'Shipment without Lift gate (forklift) at the shipping address will be charged extra as per the transporting carriers for freight parts. I authorize Parts Central LLC to charge my Debit/Credit card listed above & agree for terms & conditions upon purchases including merchandise & shipping charges by signing the invoice or replying to the email. Signatures: This contract may be signed electronically or in hard copy. If signed in hard copy, it must be printed out, signed, scanned and returned to the Email - partscentralus@gmail.com or a valid record. Electronic signatures count as original for all purposes. By typing their names as signatures and replying to this same email typing - "Approved/ authorized", both parties agree to the terms and provisions of this agreement.',
    {
      x: 40,
      y,
      size: 11,
      font: times,
      maxWidth: 520,
      color: rgb(0, 0, 0.8),
    },
  )

  y -= 170

  // Payment details
  page.drawText("PAYMENT DETAILS:", {
    x: 40,
    y,
    size: 11,
    font: bold,
    color: rgb(0, 0, 0.8),
  })

  y -= 15
  if (data.payment.cardData.cardholderName) {
    page.drawText(`Name: ${data.payment.cardData.cardholderName}`, {
      x: 40,
      y,
      size: 10,
      font: times,
      color: rgb(0, 0, 0.8),
    })
  }

  if (data.payment.cardData.cardNumber) {
    page.drawText(`Card Number: **** **** **** ${data.payment.cardData.cardNumber.slice(-4)}`, {
      x: 40,
      y: y - 15,
      size: 10,
      font: times,
      color: rgb(0, 0, 0.8),
    })
  }

  page.drawText("Shipping DETAILS:", {
    x: 400,
    y: y + 10,
    size: 11,
    font: bold,
    color: rgb(0, 0, 0.8),
  })

  

  page.drawText(`${data.shipping.firstName} ${data.shipping.lastName}` || " ", {
    x: 400,
    y: y - 20,
    size: 11,
    font: times,
    color: rgb(0, 0, 0.8),
  })
  y -= 15

  if (data.shipping) {
    const { address, apartment, city, state, zipCode, company } = data.shipping

    if (address) {
      page.drawText(address, {
        x: 400,
        y: y - 20,
        size: 11,
        font: times,
        color: rgb(0, 0, 0.8),
      })
      y -= 15
    }

    if (apartment) {
      page.drawText(apartment, {
        x: 400,
        y: y - 20,
        size: 11,
        font: times,
        color: rgb(0, 0, 0.8),
      })
      y -= 15
    }

    if (city || state || zipCode) {
      const cityStateZip = `${city || ""}${city && state ? ", " : ""}${state || ""}${zipCode ? " " + zipCode : ""}`
      page.drawText(cityStateZip, {
        x: 400,
        y: y - 20,
        size: 11,
        font: times,
        color: rgb(0, 0, 0.8),
      })
      y -= 15
    }
    if(company){
     page.drawText(company, {
        x: 400,
        y: y - 20,
        size: 11,
        font: times,
        color: rgb(0, 0, 0.8),
      })
      y -= 15
    }

  }

  page.drawText("Authorize Signature", {
    x: 450,
    y: y - 70,
    size: 11,
    font: bold,
    color: rgb(0, 0, 0.8),
  })

  if (backgroundImage) {
    page.drawImage(backgroundImage, {
      x: 0,
      y: 0,
      width: width,
      height: 100,
    })
  } else {
    // Fallback to solid color if image loading fails
    page.drawRectangle({
      x: 0,
      y: 0,
      width,
      height: 100,
      color: rgb(0.07, 0.15, 0.3), // dark blue header
    })
  }

  // PAGE 2: Full Disclaimer & Policies
  const page2 = pdfDoc.addPage([600, 800])
  const { height: page2Height } = page2.getSize()
  let y2 = page2Height - 10
  const margin = 36

  // Header background for page 2
  const backgroundImage2 = await loadBackgroundImage(pdfDoc)
  if (backgroundImage2) {
    page2.drawImage(backgroundImage2, {
      x: 0,
      y: page2Height - 100,
      width: width,
      height: 100,
    })
  } else {
    page2.drawRectangle({
      x: 0,
      y: page2Height - 100,
      width,
      height: 100,
      color: rgb(0.07, 0.15, 0.3),
    })
  }

  // Logo for page 2
  try {
    const logoImage = await loadLogo(pdfDoc)
    if (logoImage) {
      const logoDims = logoImage.scale(0.5)
      page2.drawImage(logoImage, {
        x: 30,
        y: page2Height - 40,
        width: logoDims.width,
        height: logoDims.height,
      })
    } else {
      page2.drawText("PARTS CENTRAL", {
        x: 40,
        y: page2Height - 40,
        size: 18,
        font: bold,
        color: rgb(1, 1, 1),
      })
    }
  } catch (error) {
    console.error("Error loading logo:", error)
    page2.drawText("PARTS CENTRAL", {
      x: 40,
      y: page2Height - 40,
      size: 18,
      font: bold,
      color: rgb(1, 1, 1),
    })
  }

  // Contact info for page 2
  const locationBytes = fs.readFileSync(path.join(process.cwd(), "public", "location.png"))
  const websiteBytes = fs.readFileSync(path.join(process.cwd(), "public", "website.png"))
  const phoneBytes = fs.readFileSync(path.join(process.cwd(), "public", "phone.png"))

  const locationIcon = await pdfDoc.embedPng(locationBytes)
  const websiteIcon = await pdfDoc.embedPng(websiteBytes)
  const phoneIcon = await pdfDoc.embedPng(phoneBytes)

  const iconSize = 10
  let iconHeight = 98

  for (let j = 1; j < data.cartItems.length; j++) {
    iconHeight += 70
  }

  y = height - iconHeight

  const infoRows = [
    { icon: locationIcon, label: "Location:", value: "76 Imperial Dr Suite E Evanston, WY 82930, USA" },
    { icon: websiteIcon, label: "Website:", value: "https://partscentral.us" },
    { icon: phoneIcon, label: "Phone:", value: "(888) 338-2540" },
  ]

  for (const row of infoRows) {
    page2.drawImage(row.icon, {
      x: margin,
      y: y - 2,
      width: iconSize,
      height: iconSize,
    })

    page2.drawText(row.label, {
      x: margin + iconSize + 4,
      y,
      size: 10,
      font: bold,
      color: rgb(1, 1, 1),
    })

    page2.drawText(row.value, {
      x: margin + 70,
      y,
      size: 10,
      font: times,
      color: rgb(1, 1, 1),
    })

    y -= 20
  }

  y2 = 650

  page2.drawText("Disclaimer Engine:", {
    x: 40,
    y: y2,
    size: 14,
    font: bold,
    color: rgb(1, 0, 0),
  })

  y2 -= 23
  const engineText =
    "Engines are sold as an assemblies with manifolds, timing cover, belts, oil pan, fuel injectors or carburetors, pulleys and other accessories. Due to warranty only on the long block, all accessories like manifolds, timing cover, belts, oil pan, fuel injectors or carburetors, pulleys, and other accessories are sold as is (NO WARRANTY APPLICABLE)."
  y2 = drawWrappedText(page2, engineText, 40, y2, {
    fontSize: 10,
    font: times,
    maxWidth: 520,
    lineHeight: 12,
  })

  y2 -= 40

  page2.drawText("Disclaimer Transmission:", {
    x: 40,
    y: y2,
    size: 14,
    font: bold,
    color: rgb(1, 0, 0),
  })

  y2 -= 23
  const transmissionText =
    "The transmission is guaranteed to shift gears and bearings to be good. The oil pan and oil filter needs to be replaced before installation. Flush out all the liquid and from test cooler lines. The torque convertor needs to be fully engaged to the front pump. For manual transmission a new clutch needs to be installed along with the pressure plate and slave cylinder. The flywheel must be turned once before installation."
  y2 = drawWrappedText(page2, transmissionText, 40, y2, {
    fontSize: 10,
    font: times,
    maxWidth: 520,
    lineHeight: 12,
  })

  y2 -= 40

  page2.drawText("Installation:", {
    x: 40,
    y: y2,
    size: 14,
    font: bold,
    color: rgb(1, 0, 0),
  })

  y2 -= 23
  const installationText = "Part needs to be installed within 10 days from the date of delivery."
  y2 = drawWrappedText(page2, installationText, 40, y2, {
    fontSize: 10,
    font: times,
    maxWidth: 520,
    lineHeight: 12,
  })

  y2 -= 40

  page2.drawText("Cancellation:", {
    x: 40,
    y: y2,
    size: 14,
    font: bold,
    color: rgb(1, 0, 0),
  })

  y2 -= 23
  const cancellationText =
    "After placing an order, if the customer wants-to cancel the order, he/she should do so within 24 hours and a charge of 30% restocking fee and one-way shipping cost will be deducted from the paid amount. Any Cancellations of orders should be validated via E-mail and Call to customer service is mandatory."
  y2 = drawWrappedText(page2, cancellationText, 40, y2, {
    fontSize: 10,
    font: times,
    maxWidth: 520,
    lineHeight: 12,
  })

  y2 -= 40

  page2.drawText("Return Policy:", {
    x: 40,
    y: y2,
    size: 14,
    font: bold,
    color: rgb(1, 0, 0),
  })

  y2 -= 23
  const returnText =
    "If in case of damaged or defective returns will be accepted within 10 calendar days from the date of delivery for mechanical parts and 7 calendar days for body parts. Parts ordered for testing or trial purposes will not be available for return. If the customer received the part and if it is damaged, defective or if the shipping is delayed, the customer has to contact Parts Central LLC before disputing the charges."
  y2 = drawWrappedText(page2, returnText, 40, y2, {
    fontSize: 10,
    font: times,
    maxWidth: 520,
    lineHeight: 12,
  })

  y2 -= 40

  page2.drawText("Refund Policy:", {
    x: 40,
    y: y2,
    size: 14,
    font: bold,
    color: rgb(1, 0, 0),
  })

  y2 -= 23
  const refundText =
    "Parts must be returned within 7 business days from the date of delivery for a full refund. However, shipping & handling is non-refundable. Return shipping charges must be covered at the customer's expense. Customers have to provide a registered/certified mechanic's detailed report to prove the same for mechanical parts, which shall be investigated further before processing a refund. Once the part is returned, we will be happy to send a replacement or issue a refund within 5-7 business days."
  y2 = drawWrappedText(page2, refundText, 40, y2, {
    fontSize: 10,
    font: times,
    maxWidth: 520,
    lineHeight: 12,
  })

  if (backgroundImage2) {
    page2.drawImage(backgroundImage2, {
      x: 0,
      y: 0,
      width: width,
      height: 100,
    })
  } else {
    page2.drawRectangle({
      x: 0,
      y: 0,
      width,
      height: 100,
      color: rgb(0.07, 0.15, 0.3),
    })
  }

  const pdfBytes = await pdfDoc.save()
  return pdfBytes
}

import { NextResponse } from "next/server";

// Function to escape XML special characters
function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  // Example: fetch products dynamically from DB
  const products = [
    {
      id: "ENGINE-12345",
      title: "Used Engine – Honda Accord 2.4L L4",
      description: "Reliable used Honda Accord engine, 2.4L L4, fully tested.",
      link: "https://partscentral.us/engine",
      image_link: "https://partscentral.us/images/engine.jpg",
      availability: "in_stock",
      price: "950.00 USD",
      condition: "used",
      model: "ss",
      year: "2020",
      part: "engine",
      mile: "10000",
      option: "option1",
      final_price: "1000.00",
      brand: "Honda",
      mpn: "ENG-ACD-2400",
      google_product_category:
        "Vehicles & Parts > Vehicle Parts & Accessories > Motor Vehicle Parts",
    },
    {
      id: "ENGINE-12346",
      title: "Used Engine – Honda Accord 2.4L L4",
      description: "Reliable used Honda Accord engine, 2.4L L4, fully tested.",
      link: "https://partscentral.us/engine",
      image_link: "https://partscentral.us/images/engine.jpg",
      availability: "in_stock",
      price: "950.00 USD",
      condition: "used",
      model: "ss",
      year: "2020",
      part: "engine",
      mile: "10000",
      option: "option1",
      final_price: "1000.00",
      brand: "Honda",
      mpn: "ENG-ACD-2400",
      google_product_category:
        "Vehicles & Parts > Vehicle Parts & Accessories > Motor Vehicle Parts",
    },
    // more products here...
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
    <channel>
      <title>PartsCentral Product Feed</title>
      <link>https://partscentral.us/</link>
      <description>Dynamic product feed</description>
      ${products
        .map(
          (p) => `
        <item>
          <g:id>${escapeXml(p.id)}</g:id>
          <title>${escapeXml(p.title)}</title>
          <description>${escapeXml(p.description)}</description>
          <link>${escapeXml(p.link)}</link>
          <g:image_link>${escapeXml(p.image_link)}</g:image_link>
          <g:availability>${escapeXml(p.availability)}</g:availability>
          <g:price>${escapeXml(p.price)}</g:price>
          <g:condition>${escapeXml(p.condition)}</g:condition>
          <g:brand>${escapeXml(p.brand)}</g:brand>
          <g:model>${escapeXml(p.model)}</g:model>
          <g:year>${escapeXml(p.year)}</g:year>
          <g:part>${escapeXml(p.part)}</g:part>
          <g:mile>${escapeXml(p.mile)}</g:mile>
          <g:option>${escapeXml(p.option)}</g:option>
          <g:final_price>${escapeXml(p.final_price)}</g:final_price>
          <g:mpn>${escapeXml(p.mpn)}</g:mpn>
          <g:google_product_category>${escapeXml(
            p.google_product_category
          )}</g:google_product_category>
        </item>`
        )
        .join("")}
    </channel>
  </rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}


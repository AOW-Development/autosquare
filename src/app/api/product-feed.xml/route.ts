import { MAKES, MODELS } from "@/components/vehicleData";
 
/* ---------------- XML helpers ---------------- */
 
function escapeXml(v: any) {
  if (v === null || v === undefined) return "";
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
 
function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
 
function generateProductSlug(product: {
  year: string;
  make: string;
  model: string;
  part: string;
  specification?: string;
  miles?: string;
}) {
  const parts = [
    product.year,
    toSlug(product.make),
    toSlug(product.model),
    toSlug(product.part),
  ];
 
  if (product.specification) {
    parts.push(toSlug(product.specification));
  }
 
  // Handle miles: if empty, null, "null", or whitespace, use "n-a"
  const milesValue = product.miles?.trim();
  if (milesValue && milesValue !== "null" && milesValue !== "undefined") {
    parts.push(milesValue);
  } else {
    parts.push("n-a");
  }
 
  return parts.join("-");
}
 
function getDefaultImage(part: string) {
  const p = part.toLowerCase();
  if (p.includes("engine"))
    return "https://s3.us-east-1.amazonaws.com/partscentral.us/public/engine-1.png";
  if (p.includes("transmission"))
    return "https://s3.us-east-1.amazonaws.com/partscentral.us/Trasmission_.png";
  return "https://s3.us-east-1.amazonaws.com/partscentral.us/public/engine-1.png";
}
 
/* ---------------- FEED ---------------- */
 
export async function GET() {
  const API_BASE =
    process.env.NEXT_PUBLIC_API_URL || "https://partscentral.us/api";
 
  const parts = ["engine", "transmission"];
  const CURRENCY = "USD";
 
  let sequenceId = 1; // ✅ SEQUENTIAL ID COUNTER
 
  const stream = new ReadableStream({
    async start(controller) {
      try {
        /* ---------- XML HEADER ---------- */
        controller.enqueue(
          new TextEncoder().encode(
            `<?xml version="1.0" encoding="UTF-8"?>\n` +
              `<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">\n` +
              `  <channel>\n` +
              `    <title>PartsCentral Product Feed</title>\n` +
              `    <link>https://partscentral.us/</link>\n` +
              `    <description>Used Auto Parts Product Feed</description>\n`
          )
        );
 
        /* ---------- LOOP MAKES ---------- */
        for (const make of MAKES) {
          const makeKey = Object.keys(MODELS).find(
            (m) => m.toLowerCase() === make.toLowerCase()
          );
          if (!makeKey) continue;
 
          const models = MODELS[makeKey as keyof typeof MODELS];
          if (!models) continue;
 
          for (const model of models) {
            /* ---------- FETCH YEARS ---------- */
            const yearsRes = await fetch(
              `${API_BASE}/products/years?make=${encodeURIComponent(
                make
              )}&model=${encodeURIComponent(model)}`,
              { cache: "no-store" }
            );
            if (!yearsRes.ok) continue;
 
            const yearsData = await yearsRes.json();
            const years = Array.isArray(yearsData)
              ? yearsData
              : yearsData.years || [];
 
            for (const year of years) {
              for (const part of parts) {
                /* ---------- FETCH PRODUCTS ---------- */
                const productsRes = await fetch(
                  `${API_BASE}/products/v2/grouped-with-subparts?make=${encodeURIComponent(
                    make
                  )}&model=${encodeURIComponent(
                    model
                  )}&year=${encodeURIComponent(
                    year
                  )}&part=${encodeURIComponent(part)}`,
                  { cache: "no-store" }
                );
                if (!productsRes.ok) continue;
 
                const data = await productsRes.json();
                const groupedVariants = data.groupedVariants || [];
 
                for (const group of groupedVariants) {
                  const specification = group.subPart?.name || "";
 
                  for (const variant of group.variants || []) {
                    // ✅ FILTER: Skip in-stock items - only include out of stock
                    if (Number(variant.inStock) !== 1) continue;

                    
                    const miles =
                      variant.miles !== undefined
                        ? String(variant.miles)
                        : "";
 
                    /* ---------- SLUG ---------- */
                    const slug = generateProductSlug({
                      year: String(year),
                      make,
                      model,
                      part,
                      specification,
                      miles,
                    });
 
                    const productUrl = `https://partscentral.us/product/${slug}`;
 
                    /* ---------- IDENTIFIERS ---------- */
                    const seqId = sequenceId++;

 
                    /* ---------- FEED FIELDS ---------- */
                    const title = `${year} ${make.toUpperCase()} ${model.toUpperCase()} Used ${part}`;
                    const description = `This ${make} ${model} ${part} fits ${year} models. Fully tested and ready to install. A reliable used ${part} offering excellent performance.
                    This Unit is perfect for anyone in the market for reliable used ${part} that will offer superior results - a great addition to any repair project!`;
                    const actualPrice = variant.actualprice||500;
                    const priceValue = variant.discountedPrice ||500;
                    const Make=escapeXml(make.charAt(0).toUpperCase() + make.slice(1).toLowerCase());
                    const Model=escapeXml(model.charAt(0).toUpperCase() + model.slice(1).toLowerCase());
                    const Year=escapeXml(String(year));
                    const Part=escapeXml(part.charAt(0).toUpperCase() + part.slice(1).toLowerCase());
                    const Specification=escapeXml(specification.charAt(0).toUpperCase() + specification.slice(1).toLowerCase());
                    const Miles=escapeXml(miles=="null"?"n/a":miles);

                    const google_product_category = part === "engine" ? 888 : 913;
                    const product_type = part === "engine" ? "Car Parts > Engine Parts" : "Auto Parts > Transmission Parts > Used Transmissions"; 
                    const custom_label_0 = `${make.charAt(0).toUpperCase() + make.slice(1).toLowerCase()}-bl-2000` ; 
                    const custom_label_1 = `${Make}-${Model}`; 
                    const custom_label_2 = part === "engine" ? `${Make}-Engine` : `${Make}-Transmission`; 
                    const custom_label_3 = `${Make}-xml`;
 
                    const availability =
                      Number(variant.inStock) === 1
                        ? "in stock"
                        : "out of stock";
 
                    const imageUrl =
                      variant.product_img?.startsWith("http")
                        ? variant.product_img
                        : getDefaultImage(part);
 
                    /* ---------- XML ITEM ---------- */
                    controller.enqueue(
                      new TextEncoder().encode(
                        `    <item>\n` +
                          `      <g:id>${seqId}</g:id>\n` +
                          `      <title>${escapeXml(title)}</title>\n` +
                          `      <link>${escapeXml(productUrl)}</link>\n` +
                          `      <description>${escapeXml(
                            description
                          )}</description>\n` +
                          `      <g:image_link>${escapeXml(
                            imageUrl
                          )}</g:image_link>\n` +
                          `      <g:availability>${availability}</g:availability>\n` +
                          `      <g:price>${Number(actualPrice).toFixed(
                            2
                          )} ${CURRENCY}</g:price>\n` +
                          `      <g:final_price>${Number(priceValue).toFixed(
                            2
                          )} ${CURRENCY}</g:final_price>\n` +
                          `      <g:condition>used</g:condition>\n` +
                          `      <g:brand>${Make}</g:brand>\n` +
                          `      <g:model>${Model}</g:model>\n` +
                          `      <g:year>${Year}</g:year>\n` +
                          `      <g:part>${Part}</g:part>\n` +
                          `      <g:option>${Specification}</g:option>\n` +
                          `      <g:mile>${Miles}</g:mile>\n` +
                          `      <g:google_product_category>${escapeXml(
                            google_product_category
                          )}</g:google_product_category>\n` +
                          `      <g:product_type>${escapeXml(
                            product_type
                          )}</g:product_type>\n` +
                          `      <g:custom_label_0>${escapeXml(
                            custom_label_0
                          )}</g:custom_label_0>\n` +
                          `      <g:custom_label_1>${escapeXml(
                            custom_label_1
                          )}</g:custom_label_1>\n` +
                          `      <g:custom_label_2>${escapeXml(
                            custom_label_2
                          )}</g:custom_label_2>\n` +
                          `      <g:custom_label_3>${escapeXml(
                            custom_label_3
                          )}</g:custom_label_3>\n` +
                          `    </item>\n`
                      )
                    );
                  }
                }
              }
            }
          }
        }
 
        /* ---------- CLOSE XML ---------- */
        controller.enqueue(
          new TextEncoder().encode(`  </channel>\n</rss>\n`)
        );
        controller.close();
      } catch (err) {
        console.error("Product feed error:", err);
        controller.error(err);
      }
    },
  });
 
  return new Response(stream, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Content-Disposition": 'inline; filename="product-feed.xml"',
    },
  });
}




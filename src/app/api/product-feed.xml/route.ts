// app/api/product-feed/route.ts
import mysql from "mysql2/promise";

function escapeXml(v: any) {
  if (v === null || v === undefined) return "";
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getDefaultImage(part: string) {
  const p = (part || "").toLowerCase();
  if (p.includes("engine")) return "https://s3.us-east-1.amazonaws.com/partscentral.us/public/engine-1.png";
  if (p.includes("transmission") || p.includes("trans")) return "https://s3.us-east-1.amazonaws.com/partscentral.us/Trasmission_.png";
  return "https://s3.us-east-1.amazonaws.com/partscentral.us/public/engine-1.png";
}

/* parseMileString & parseSku helpers (same as before) */
function parseMileString(val: string | undefined): string | undefined {
  if (!val) return undefined;
  let s = String(val).trim().toLowerCase().replace(/[, ]+/g, "");
  const m = s.match(/^(\d+(\.\d+)?)(k|m)?$/i);
  if (m) {
    const num = parseFloat(m[1]);
    const suffix = (m[3] || "").toLowerCase();
    if (suffix === "k") return String(Math.round(num * 1000));
    if (suffix === "m") return String(Math.round(num * 1000000));
    return String(Math.round(num));
  }
  const digits = s.match(/\d+/g);
  if (digits && digits.length) return digits.join("");
  return undefined;
}

function parseSku(sku: string) {
  const tokens = (sku || "").split("-");
  const yearIdx = tokens.findIndex((t) => /^\d{4}$/.test(t));
  const make = tokens[0] || "";
  let model = "", year = "", part = "", spec = "", mileFromSku: string | undefined = undefined;

  if (yearIdx >= 1) {
    year = tokens[yearIdx] || "";
    model = tokens.slice(1, yearIdx).join("-") || tokens[1] || "";
    part = tokens[yearIdx + 1] || tokens[3] || "";
    const tail = tokens.slice(yearIdx + 2);
    if (tail.length) {
      const last = tail[tail.length - 1];
      if (/\d/.test(last) || /k$/i.test(last) || /m$/i.test(last)) {
        mileFromSku = parseMileString(last);
        spec = tail.slice(0, tail.length - 1).join("-");
      } else {
        spec = tail.join("-");
      }
    }
  } else {
    model = tokens[1] || "";
    year = tokens[2] || "";
    part = tokens[3] || "";
    const tail = tokens.slice(4);
    if (tail.length) {
      const last = tail[tail.length - 1];
      if (/\d/.test(last) || /k$/i.test(last) || /m$/i.test(last)) {
        mileFromSku = parseMileString(last);
        spec = tail.slice(0, tail.length - 1).join("-");
      } else {
        spec = tail.join("-");
      }
    }
  }

  spec = spec ? spec.trim().replace(/^,|,$/g, "").replace(/^\(|\)$/g, "") : "";
  return { make, model, year, part, spec, mileFromSku };
}

const PAGE_SIZE = 5000;
const CURRENCY = "USD";

export async function GET() {
  const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;
  if (!MYSQL_HOST || !MYSQL_USER || !MYSQL_DATABASE) {
    return new Response("Missing MySQL env vars", { status: 500 });
  }

  const pool = mysql.createPool({
    host: MYSQL_HOST,
    port: MYSQL_PORT ? Number(MYSQL_PORT) : 3306,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD || "",
    database: MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
  });

  const stream = new ReadableStream({
    async start(controller) {
      try {
        // XML header & channel open (note explicit newlines)
        controller.enqueue(new TextEncoder().encode(
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">\n' +
          '  <channel>\n' +
          '    <title>PartsCentral Product Feed</title>\n' +
          '    <link>https://partscentral.us/</link>\n' +
          '    <description>Dynamic product feed</description>\n'
        ));

        let offset = 0;
        while (true) {
          const [rows] = await pool.query(
            `SELECT id, sku, title, description, product_img, inStock, actualprice, discountedPrice, miles
             FROM productvariant_1
             ORDER BY id
             LIMIT ? OFFSET ?`,
            [PAGE_SIZE, offset]
          );
          const items = Array.isArray(rows) ? rows as any[] : [];
          if (!items.length) break;

          for (const r of items) {
            const sku = r.sku || "";
            const { make, model, year, part, spec, mileFromSku } = parseSku(sku);
            const mile = mileFromSku || parseMileString(r.miles) || "";
            const id = r.id ? String(r.id) : sku || "";
            const title = r.title || `${year} ${make} ${model} Used ${part}`.trim();
            const description = r.description ||
              `This ${make} ${model} ${part} is from ${year} models. Each ${part} is tested and ready to install and offers improved performance.\n\nThis Unit is perfect for anyone in the market for reliable used ${part} that will offer superior results - a great addition to any repair project!`;
            const image_link = r.product_img || getDefaultImage(part);
            const availability = Number(r.inStock) === 1 ? "Yes" : "No";
            const price = (typeof r.actualprice === "number") ? `${Number(r.actualprice).toFixed(2)} ${CURRENCY}` : "";
            const final_price = (typeof r.discountedPrice === "number") ? `${Number(r.discountedPrice).toFixed(2)}` : price;

            // Each tag is on its own line with indentation
            const itemXml =
              '    <item>\n' +
              `      <g:id>${escapeXml(id)}</g:id>\n` +
              `      <title>${escapeXml(title)}</title>\n` +
              `      <link>${escapeXml(`https://partscentral.us/catalogue/${encodeURIComponent((part||"").toLowerCase())}/home?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}&year=${encodeURIComponent(year)}&part=${encodeURIComponent(part)}`)}</link>\n` +
              `      <description>${escapeXml(description)}</description>\n` +
              `      <g:image_link>${escapeXml(image_link)}</g:image_link>\n` +
              `      <g:availability>${escapeXml(availability)}</g:availability>\n` +
              `      <g:price>${escapeXml(price)}</g:price>\n` +
              `      <g:final_price>${escapeXml(final_price)}</g:final_price>\n` +
              `      <g:condition>used</g:condition>\n` +
              `      <g:brand>${escapeXml(make)}</g:brand>\n` +
              `      <g:model>${escapeXml(model)}</g:model>\n` +
              `      <g:year>${escapeXml(year)}</g:year>\n` +
              `      <g:part>${escapeXml(part)}</g:part>\n` +
              `      <g:mile>${escapeXml(mile)}</g:mile>\n` +
              `      <g:option>${escapeXml(spec)}</g:option>\n` +
              '    </item>\n';
            controller.enqueue(new TextEncoder().encode(itemXml));
          }

          offset += PAGE_SIZE;
        }

        // Close XML
        controller.enqueue(new TextEncoder().encode('  </channel>\n</rss>\n'));
        controller.close();
      } catch (err) {
        console.error("feed error:", err);
        controller.error(err);
      } finally {
        try { await pool.end(); } catch (_) {}
      }
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Content-Disposition": 'inline; filename="product-feed.xml"',
      // Hint to caches/CDNs if you later pre-generate
      // "Cache-Control": "public, max-age=3600"
    }
  });
}







import { MAKES, MODELS } from "@/components/vehicleData";

/* ---------------- CSV helpers ---------------- */

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

  const milesValue = product.miles?.trim();
  parts.push(
    milesValue && milesValue !== "null" && milesValue !== "undefined"
      ? milesValue
      : "n-a"
  );

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

function escapeCsvField(field: string | number | null | undefined): string {
  if (field === null || field === undefined) return "";
  const str = String(field);
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

/* ---------------- CSV FEED ---------------- */

export async function GET() {
  const API_BASE =
    process.env.NEXT_PUBLIC_API_URL || "https://partscentral.us/api";

  const parts = ["engine", "transmission"];
  const CURRENCY = "USD";
  let sequenceId = 1;

  try {
    const headers = [
      "ID",
      "Title",
      "Description",
      "Link",
      "Image Link",
      "Availability",
      "Price",
      "Sale Price",
      "Condition",
      "Brand",
      "Model",
      "Year",
      "Part",
      "Option",
      "Mile",
      "Google Product Category",
      "Product Type",
      "Custom Label 0",
      "Custom Label 1",
      "Custom Label 2",
      "Custom Label 3",
      "Identifier Exists",
    ];

    let csvContent = headers.join(",") + "\n";

    for (const make of MAKES) {
      const makeKey = Object.keys(MODELS).find(
        (m) => m.toLowerCase() === make.toLowerCase()
      );
      if (!makeKey) continue;

      const models = MODELS[makeKey as keyof typeof MODELS];
      if (!models) continue;

      for (const model of models) {
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
                if (Number(variant.inStock) !== 1) continue;

                const miles =
                  variant.miles !== undefined ? String(variant.miles) : "";

                const slug = generateProductSlug({
                  year: String(year),
                  make,
                  model,
                  part,
                  specification,
                  miles,
                });

                const productUrl = `https://partscentral.us/product/${slug}`;
                const seqId = sequenceId++;

                const title = `${year} ${make.toUpperCase()} ${model.toUpperCase()} Used ${part}`;
                const description = ` This ${make} ${model} ${part} is from ${year} models. Each ${part} is tested and ready to install and offers improved performance.
                   This Unit is perfect for anyone in the market for reliable used ${part} that will offer superior results - a great addition to any repair project!`;
               
                const actualPrice = Number(variant.actualprice || 500);
                const discountedPrice = Number(
                  variant.discountedPrice || 0
                );

                const hasValidDiscount =
                  discountedPrice > 0 && discountedPrice < actualPrice;

                const effectivePrice = hasValidDiscount
                  ? discountedPrice
                  : actualPrice;

                /* ---------- PRICE BUCKET ---------- */
                let priceBucket = "bl-2000";
                if (effectivePrice >= 2000 && effectivePrice < 3500) {
                  priceBucket = "bl-3500";
                } else if (
                  effectivePrice >= 3500 &&
                  effectivePrice < 5000
                ) {
                  priceBucket = "bl-5000";
                } else if (effectivePrice >= 5000) {
                  priceBucket = "ab-5000";
                }

                const Make =
                  make.charAt(0).toUpperCase() + make.slice(1).toLowerCase();
                const Model =
                  model.charAt(0).toUpperCase() + model.slice(1).toLowerCase();
                const Year = String(year);
                const Part =
                  part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
                const Option =
                  specification
                    ? specification.charAt(0).toUpperCase() +
                      specification.slice(1).toLowerCase()
                    : "";
                const Miles = miles === "null" ? "n/a" : miles;

                const google_product_category =
                  part === "engine" ? 888 : 913;
                const product_type =
                  part === "engine"
                    ? "Car Parts > Engine Parts"
                    : "Auto Parts > Transmission Parts > Used Transmissions";

                const custom_label_0 = `${Make}-${priceBucket}`;
                const custom_label_1 = `${Make}-${Model}`;
                const custom_label_2 =
                  part === "engine"
                    ? `${Make}-Engine`
                    : `${Make}-Transmission`;
                const custom_label_3 = `${Make}-xml`;

                const imageUrl = variant.product_img?.startsWith("http")
                  ? variant.product_img
                  : getDefaultImage(part);

                const row = [
                  seqId,
                  title,
                  description,
                  productUrl,
                  imageUrl,
                  "in stock",
                  `${actualPrice.toFixed(2)} ${CURRENCY}`,
                  hasValidDiscount
                    ? `${discountedPrice.toFixed(2)} ${CURRENCY}`
                    : "",
                  "used",
                  Make,
                  Model,
                  Year,
                  Part,
                  Option,
                  Miles,
                  google_product_category,
                  product_type,
                  custom_label_0,
                  custom_label_1,
                  custom_label_2,
                  custom_label_3,
                  "false",
                ];

                csvContent += row.map(escapeCsvField).join(",") + "\n";
              }
            }
          }
        }
      }
    }

    return new Response(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="product-feed-${new Date()
          .toISOString()
          .split("T")[0]}.csv"`,
      },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: "Failed to generate CSV feed",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}

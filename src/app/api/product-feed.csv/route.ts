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
      "Final Price",
      "Condition",
      "Brand",
      "Model",
      "Year",
      "Part",
      "Specification",
      "Mile",
      "Google Product Category",
      "Product Type",
      "Custom Label 0",
      "Custom Label 1",
      "Custom Label 2",
      "Custom Label 3",
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

                // ✅ ONLY IN-STOCK PRODUCTS
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
                const description = `This ${make} ${model} ${part} fits ${year} models. Fully tested and ready to install. A reliable used ${part} offering excellent performance.`;

                const actualPrice = variant.actualprice || 500;
                const salePrice = variant.discountedPrice || 500;

                const Make =
                  make.charAt(0).toUpperCase() + make.slice(1).toLowerCase();
                const Model =
                  model.charAt(0).toUpperCase() + model.slice(1).toLowerCase();
                const Year = String(year);
                const Part =
                  part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
                const Specification =
                  specification.charAt(0).toUpperCase() +
                  specification.slice(1).toLowerCase();
                const Miles = miles == "null" ? "n/a" : miles;

                const google_product_category = part === "engine" ? 888 : 913;
                const product_type =
                  part === "engine"
                    ? "Car Parts > Engine Parts"
                    : "Auto Parts > Transmission Parts > Used Transmissions";
                const custom_label_0 = `${Make}-bl-2000`;
                const custom_label_1 = `${Make}-${Model}`;
                const custom_label_2 =
                  part === "engine"
                    ? `${Make}-Engine`
                    : `${Make}-Transmission`;
                const custom_label_3 = `${Make}-xml`;

                const availability = "in stock";

                const imageUrl = variant.product_img?.startsWith("http")
                  ? variant.product_img
                  : getDefaultImage(part);

                const row = [
                  seqId,
                  title,
                  description,
                  productUrl,
                  imageUrl,
                  availability,
                  `${Number(actualPrice).toFixed(2)} ${CURRENCY}`,
                  `${Number(salePrice).toFixed(2)} ${CURRENCY}`,
                  "used",
                  Make,
                  Model,
                  Year,
                  Part,
                  Specification,
                  Miles,
                  google_product_category,
                  product_type,
                  custom_label_0,
                  custom_label_1,
                  custom_label_2,
                  custom_label_3,
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

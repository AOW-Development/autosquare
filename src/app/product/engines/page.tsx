import { redirect } from "next/navigation";

const normalizeForUrl = (value: string) =>
  value
    // replace spaces & special chars
    .replace(/[ ,()./]/g, "-")

    // split word+number ONLY if word length >= 2 (vin3 → vin-3)
    .replace(/([a-zA-Z]{2,})(\d+)/g, "$1-$2")

    // collapse multiple hyphens
    .replace(/-+/g, "-")

    // trim
    .replace(/^-|-$/g, "")
    .toLowerCase();


export default async function EnginesRedirectPage({ searchParams }: any) {
  const { make, model, year, part, sku } = searchParams;
  if (!make || !model || !year || !part || !sku) return null;

  // ✅ miles ONLY from SKU
  const miles = sku.split("-").at(-1)?.replace(/[^\d]/g, "");

  // ✅ fetch same data used by product page
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products/v2/grouped-with-subparts?make=${make}&model=${model}&year=${year}&part=${part}`;

  const res = await fetch(apiUrl, { cache: "no-store" });
  if (!res.ok) return null;

  const data = await res.json();

  // ✅ pick the FIRST valid spec (same as SEO fallback)
  const specName =
    data.groupedVariants?.[0]?.subPart?.name || "";

  const finalUrl =
    `/product/${year}-${normalizeForUrl(make)}-${normalizeForUrl(model)}-${normalizeForUrl(part)}-${normalizeForUrl(specName)}${miles ? `-${miles}` : ""}`;

  redirect(finalUrl); // ✅ real 301
}

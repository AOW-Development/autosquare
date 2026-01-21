import type { Metadata } from "next";
import CatalogEnginePage from "@/components/CatalogEnginePage";
import { MODELS } from "@/components/vehicleData";
 
 
interface ApiResponse {
  groupedVariants?: any[];
}
 
function normalizeProductPrice(item: any): {
  actualprice: number;
  discountedPrice: number;
} {
  const basePrice = item.actualprice ?? item.price ?? 1499.99;
  const validPrice =
    typeof basePrice === "number" && basePrice > 0 ? basePrice : 1499.99;
 
  let discountedPrice = validPrice;
  if (typeof item.discountedPrice === "number" && item.discountedPrice > 0) {
    discountedPrice = Math.min(item.discountedPrice, validPrice);
  }
 
  return {
    actualprice: validPrice,
    discountedPrice: Number(discountedPrice.toFixed(2)),
  };
}
 
function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}
 
// Helper function to create URL slugs
function createSlug(text: string): string {
  if (!text) return '';
  
  return text
    .toLowerCase()
    // NEW: Remove "Truck" (KEEP T100/Tundra Truck)
    .replace(/\btruck\b(?!(?:\s*t100|tundra))/gi, '')
    
    // NEW: Remove "&" and "and"
    .replace(/&|and/gi, '')
    // Your existing logic (PERFECT!)
    .replace(/,/g, ' ')
    .replace(/\//g, ' ')
    .replace(/[()]/g, ' ')
    .replace(/\s*-\s*/g, '-')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\s/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, ''); 
}
 
// Helper function to convert URL model slug back to database model format
function convertUrlModelToDbModel(urlModel: string, make: string): string {
  if (!urlModel || !make) return urlModel;
  
  // Capitalize make for MODELS lookup
  const makeKey = make.charAt(0).toUpperCase() + make.slice(1);
  const modelsForMake = MODELS[makeKey as keyof typeof MODELS];
  
  if (!modelsForMake || !Array.isArray(modelsForMake)) {
    console.log(`⚠️ No models found for make: ${make}`);
    return urlModel;
  }
  
  // Normalize the URL model for comparison
  const normalizedUrlModel = createSlug(urlModel);
  
  // Find matching model in MODELS
  const matchingModel = modelsForMake.find((dbModel: string) => {
    const normalizedDbModel = createSlug(dbModel);
    return normalizedDbModel === normalizedUrlModel;
  });
  
  if (matchingModel) {
    console.log(`✅ Converted URL model "${urlModel}" to DB model "${matchingModel}"`);
    return matchingModel;
  }
  
  console.log(`⚠️ No match found for URL model "${urlModel}" in ${modelsForMake.length} ${makeKey} models`);
  return urlModel;
}
 
interface Props {
  params: Promise<{ year: string; make: string; model: string }>;
}
 
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year, make, model } = await params;
 
  const titleCaseMake = capitalize(make);
  const titleCaseModel = capitalize(model);
 
  const canonical = `https://partscentral.us/catalogue/transmission/${year}/${make.toLowerCase()}/${model.toLowerCase()}`;
 
  return {
    title: `${year} ${titleCaseMake} ${titleCaseModel} Used Transmissions | Parts Central`,
    description: `Shop tested used transmissions for ${year} ${titleCaseMake} ${titleCaseModel}.`,
    keywords: `${year} ${titleCaseMake} ${titleCaseModel} transmissions, used transmissions`,
    alternates: { canonical },
    openGraph: {
      title: `${year} ${titleCaseMake} ${titleCaseModel} Used Transmissions | Parts Central`,
      description: `Shop tested used transmissions for ${year} ${titleCaseMake} ${titleCaseModel}.`,
      url: canonical,
      type: "website",
      siteName: "Parts Central",
      images: [
        {
          url: "https://partscentral.us/catalog/Trasmission_.png",
          width: 1200,
          height: 630,
          alt: `${year} ${titleCaseMake} ${titleCaseModel} Used Transmissions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${year} ${titleCaseMake} ${titleCaseModel} Used Transmissions | Parts Central`,
      description: `Shop tested used transmissions for ${year} ${titleCaseMake} ${titleCaseModel}.`,
      images: ["https://partscentral.us/catalog/Trasmission_.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}
 
async function getProductsFromAPI({
  make,
  model,
  year,
  part,
}: {
  make: string;
  model: string;
  year: string;
  part: string;
}): Promise<ApiResponse> {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products/v2/grouped-with-subparts` + 
  `?make=${encodeURIComponent(make)}` +
  `&model=${encodeURIComponent(model)}` +
  `&year=${encodeURIComponent(year)}` +
  `&part=${encodeURIComponent("transmission")}`;
 
  const response = await fetch(apiUrl, { next: { revalidate: 300 } });
 
  if (!response.ok) return { groupedVariants: [] };
 
  const products = await response.json();
 
  return {
    groupedVariants: Array.isArray(products)
      ? products.map((p: any, i: number) => ({
          variants: [p],
          subPart: {
            id: p.id || i + 1,
            name: extractTransmissionType(p.sku) || "Transmission Assembly",
          },
        }))
      : [],
  };
}
 
function extractTransmissionType(sku: string): string {
  const skuUpper = sku.toUpperCase();
  if (skuUpper.includes("AUTOMATIC")) return "Automatic Transmission";
  if (skuUpper.includes("MANUAL")) return "Manual Transmission";
  if (skuUpper.includes("CVT")) return "CVT Transmission";
  if (skuUpper.includes("DUAL CLUTCH")) return "Dual Clutch Transmission";
  return "Transmission Assembly";
}
 
export default async function CatalogueTransmissionPageWrapper({ params }: Props) {
  const { year, make, model } = await params;
  const normalizedMake = make.toLowerCase();
  const normalizedModel = model.toLowerCase();
 
  // Convert URL model to database model format
  const dbModel = convertUrlModelToDbModel(model, make);
  console.log(`🔄 Model conversion: URL="${model}" → DB="${dbModel}"`);
 
  const response = await getProductsFromAPI({
    make,
    model: dbModel,  // Use database model format
    year,
    part: "transmission",
  });
 
  let products: any[] = [];
  let subPartsList: any[] = [];
 
  if (response.groupedVariants && response.groupedVariants.length > 0) {
    products = response.groupedVariants.flatMap((g: any) =>
      g.variants.map((v: any, i: number) => {
        const { actualprice, discountedPrice } = normalizeProductPrice(v);
        
        const titleCaseMake = capitalize(make);
        const titleCaseModel = capitalize(model);
        const transmissionType = g.subPart.name;
 
        const image = v.images?.[0] || "https://partscentral.us/catalog/Trasmission_.png";
 
        const inStock = v.inStock !== false;
 
        return {
          id: v.id || i,
          sku: v.sku || `TRANS-${i}`,
          title: v.title || `${year} ${titleCaseMake} ${titleCaseModel} ${transmissionType}`,
          price: discountedPrice,
          modelYearId: v.modelYearId || 1,
          partTypeId: v.partTypeId || 2,
          inStock,
          description: v.description || `Used ${transmissionType}`,
          actualprice,
          discountedPrice,
          status: inStock ? "AVAILABLE" : "OUTOFSTOCK",
          miles: v.miles || null,
          specifications: transmissionType,
          Availability: inStock ? "In Stock" : "Out of Stock",
          warranty: v.warranty || "90 Days",
          categoryId: v.categoryId || null,
          images: v.images?.length ? v.images : [image],
          product_img: image,
          inventory: v.inventory || null,
          subParts: [g.subPart],
          subPart: g.subPart,
          make: normalizedMake,
          model: normalizedModel,
          modelYear: year,
          part: "transmission",
          partType: transmissionType,
        };
      })
    );
    
    subPartsList = response.groupedVariants.map((g: any) => g.subPart);
  }
 
  const canonicalUrl = products.some(p => p.inStock)
    ? `https://partscentral.us/catalogue/transmission/${year}/${normalizedMake}/${normalizedModel}`
    : null;
 
  return (
    <CatalogEnginePage
      products={products}
      year={year}
      make={normalizedMake}
      model={normalizedModel}
      canonicalUrl={canonicalUrl}
      subPartsList={subPartsList}
      part="transmission"
    />
  );
}
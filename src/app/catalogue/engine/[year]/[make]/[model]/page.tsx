import type { Metadata } from "next";
import CatalogEnginePage from "@/components/CatalogEnginePage";
import { MODELS } from "@/components/vehicleData";
 
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
    discountedPrice: Number(discountedPrice.toFixed(2))
  };
}
 
// Helper function to create URL slugs
function createSlug(text: string): string {
  if (!text) return '';
  
  return text
    .toLowerCase()
    .replace(/,/g, ' ')
    .replace(/\//g, ' ')
    .replace(/[()]/g, ' ')
    .replace(/\s*-\s*/g, '-')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\s/g, '-')
    .replace(/-+/g, '-');
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
 
  const titleCaseMake = make.replace(/\b\w/g, (l) => l.toUpperCase());
  const titleCaseModel = model.replace(/\b\w/g, (l) => l.toUpperCase());
 
  const title = `${year} ${titleCaseMake} ${titleCaseModel} Used Engines for Sale | Parts Central`;
  const description = `Shop quality ${year} ${titleCaseMake} ${titleCaseModel} used engines. Tested with 90-day warranty. Buy now for best price.`;
 
  const normalizedMake = make.toLowerCase().replace(/\s+/g, "-");
  const normalizedModel = model.toLowerCase().replace(/\s+/g, "-");
  const canonical = `https://partscentral.us/catalogue/engine/${year}/${normalizedMake}/${normalizedModel}`;
 
  return {
    title,
    description,
    keywords: `${year} ${titleCaseMake} ${titleCaseModel} engines, used ${titleCaseMake} ${titleCaseModel} engine, ${year} ${make} engine for sale`,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: "Parts Central",
      images: [
        {
          url: "https://partscentral.us/catalog/engine-placeholder.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://partscentral.us/catalog/engine-placeholder.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1
      },
    },
  };
}
 
async function getProductsFromAPI({
  make,
  model,
  year,
  part,
}: any) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products/v2/grouped-with-subparts?make=${make}&model=${model}&year=${year}&part=${part}`;
 
  const response = await fetch(apiUrl, {
    next: { revalidate: 300 },
  });
 
  if (!response.ok) {
    if (response.status === 404) {
      return { groupedVariants: [] };
    }
    throw new Error(`API ${response.status}`);
  }
  return response.json();
}
 
function hasDataInDatabase(make: string, model: string): boolean {
  const makesWithData = ['toyota', 'audi'];
  const normalizedMake = make.toLowerCase();
  return makesWithData.includes(normalizedMake);
}
 
export default async function CatalogueEnginePageWrapper({ params }: Props) {
  const { year, make, model } = await params;
  const normalizedMake = make.toLowerCase();
  const normalizedModel = model.toLowerCase();
 
  let products: any[] = [];
  let subPartsList: any[] = [];
 
  // Convert URL model to database model format
  const dbModel = convertUrlModelToDbModel(model, make);
  console.log(`🔄 Model conversion: URL="${model}" → DB="${dbModel}"`);
 
  try {
    const response = await getProductsFromAPI({
      make: normalizedMake,
      model: dbModel,  // Use database model format
      year,
      part: "engine",
    });
 
    if (response.groupedVariants && Array.isArray(response.groupedVariants)) {
      const validEngineGroups = response.groupedVariants.filter(
        (group: any) => {
          const spec = (group.subPart?.name || "").toLowerCase();
          return (
            !spec.includes("e4od") &&
            !spec.includes("e40d") &&
            !spec.includes("transmission") &&
            !spec.includes("vin") &&
            !spec.includes("4.9l") &&
            !spec.includes("5.0l") &&
            !spec.includes("5.8l")
          );
        }
      );
 
      products = validEngineGroups.flatMap((group: any) =>
        (group.variants || []).map((variant: any, i: number) => {
          const { actualprice, discountedPrice } = normalizeProductPrice(variant);
 
          const titleCaseMake = normalizedMake.replace(/\b\w/g, (l) => l.toUpperCase());
          const titleCaseModel = normalizedModel.replace(/\b\w/g, (l) => l.toUpperCase());
 
          const image =
            variant.product?.images?.[0] ||
            variant.images?.[0] ||
            "https://partscentral.us/catalog/engine-placeholder.jpg";
 
          const inStock = variant.inStock === false ? false : true;
 
          return {
            id: variant.product?.id ?? variant.id ?? `${variant.sku}-${i}`,
            sku: variant.sku,
            title: variant.title || `${year} ${titleCaseMake} ${titleCaseModel} Used Engine - ${group.subPart?.name || "Engine Assembly"}`,
            price: discountedPrice,
            modelYearId: 1,
            partTypeId: 1,
            inStock: inStock,
            description: variant.description || `Used engine for ${year} ${titleCaseMake} ${titleCaseModel} with ${variant.miles || "N/A"} miles`,
            actualprice,
            discountedPrice,
            status: inStock ? "AVAILABLE" : "OUTOFSTOCK",
            miles: variant.miles || null,
            specifications: variant.specification || variant.description || group.subPart?.name || "",
            Availability: inStock ? "In Stock" : "Out of Stock",
            warranty: variant.warranty || "90 Days Warranty",
            categoryId: null,
            images: [image],
            product_img: image,
            inventory: null,
            subParts: [group.subPart].filter(Boolean),
            subPart: group.subPart,
            make: normalizedMake,
            model: normalizedModel,
            modelYear: year,
            part: "engine",
            partType: group.subPart?.name || "Engine Assembly",
          };
        })
      );
 
      const subPartsMap = new Map();
      validEngineGroups.forEach((group: any) => {
        if (group.subPart) subPartsMap.set(group.subPart.id, group.subPart);
      });
      subPartsList = Array.from(subPartsMap.values());
    }
  } catch (error) {
    console.error("Engine API Error:", error);
  }
 
  if (products.length === 0) {
    const titleCaseMake = normalizedMake.replace(/\b\w/g, (l) => l.toUpperCase());
    const titleCaseModel = normalizedModel.replace(/\b\w/g, (l) => l.toUpperCase());
    
    if (hasDataInDatabase(normalizedMake, normalizedModel)) {
      products = [{
        id: 0,
        sku: `NO-ENGINE-${normalizedMake}-${normalizedModel}`,
        title: `No Engines Available`,
        price: 0,
        modelYearId: 1,
        partTypeId: 1,
        inStock: false,
        description: `Currently no engine products available for ${year} ${titleCaseMake} ${titleCaseModel}.`,
        actualprice: 0,
        discountedPrice: 0,
        status: "OUTOFSTOCK",
        miles: null,
        specifications: "Check back soon or contact us",
        Availability: "Out of Stock",
        warranty: "N/A",
        categoryId: null,
        images: ["https://partscentral.us/catalog/engine-placeholder.jpg"],
        product_img: "https://partscentral.us/catalog/engine-placeholder.jpg",
        inventory: null,
        subParts: [],
        subPart: null,
        make: normalizedMake,
        model: normalizedModel,
        modelYear: year,
        part: "engine",
        partType: "No Products Available",
      }];
    }
  }
 
  return (
    <CatalogEnginePage
      products={products}
      year={year}
      make={normalizedMake}
      model={normalizedModel}
      canonicalUrl={`https://partscentral.us/catalogue/engine/${year}/${normalizedMake}/${normalizedModel}`}
      subPartsList={subPartsList}
      part="engine"
    />
  );
}
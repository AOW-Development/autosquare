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
    // NEW: Remove "Truck" (KEEP T100/Tundra Truck)
    // .replace(/\btruck\b(?!(?:\s*t100|tundra))/gi, '')
    
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
  let makeKey = make.charAt(0).toUpperCase() + make.slice(1);
  if(makeKey === "Landrover") {
    makeKey = "LandRover";
  }
  console.log("models", MODELS);
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
 
  const title = `${year} ${titleCaseMake} ${titleCaseModel} Used Transmission for Sale | Parts Central`;
  const description = `Shop quality ${year} ${titleCaseMake} ${titleCaseModel} used transmission. Tested with 90-day warranty. Buy now for best price.`;
 
  const normalizedMake = make.toLowerCase().replace(/\s+/g, "-");
  const normalizedModel = model.toLowerCase().replace(/\s+/g, "-");
  const canonical = `https://partscentral.us/catalogue/transmission/${year}/${normalizedMake}/${normalizedModel}`;
 
  return {
    title,
    description,
    keywords: `${year} ${titleCaseMake} ${titleCaseModel} transmission, used ${titleCaseMake} ${titleCaseModel} transmission, ${year} ${make} transmission for sale`,
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
    // robots: {
    //   index: false,
    //   follow: true,
    // },
  };
}
 
async function getProductsFromAPI({
  make,
  model,
  year,
  part,
}: any) {
  const apiUrl = `https://partscentral.us/api/products/v2/grouped-with-subparts` + 
    `?make=${encodeURIComponent(make)}` +
    `&model=${encodeURIComponent(model)}` +
    `&year=${encodeURIComponent(year)}` +
    `&part=${encodeURIComponent(part)}`;
 
  console.log(`🔍 API Request: ${apiUrl}`);
 
  const response = await fetch(apiUrl, {
    next: { revalidate: 300 },
  });
 
  if (!response.ok) {
    console.error(`❌ API Error: ${response.status} for ${apiUrl}`);
    if (response.status === 404) {
      return { groupedVariants: [] };
    }
    throw new Error(`API ${response.status}`);
  }
  const data = await response.json();
  console.log(`✅ API Response: ${data.groupedVariants?.length || 0} groups found`);
  return data;
}
 
function hasDataInDatabase(make: string, model: string): boolean {
  const makesWithData = ['toyota', 'audi'];
  const normalizedMake = make.toLowerCase();
  return makesWithData.includes(normalizedMake);
}
 
export default async function CatalogueTransmissionPageWrapper({ params }: Props) {
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
      part: "transmission",
    });
 
    if (response.groupedVariants && Array.isArray(response.groupedVariants)) {
      console.log(`📦 Total groups received: ${response.groupedVariants.length}`);
      // const validEngineGroups = response.groupedVariants.filter(
      //   (group: any) => {
      //     const spec = (group.subPart?.name || "").toLowerCase();
      //     return (
      //       !spec.includes("e4od") &&
      //       !spec.includes("e40d") &&
      //       !spec.includes("transmission") &&
      //       !spec.includes("vin") &&
      //       !spec.includes("4.9l") &&
      //       !spec.includes("5.0l") &&
      //       !spec.includes("5.8l")
      //     );
      //   }
      // );
      const validTransmissionGroups = response.groupedVariants.filter(
        (group: any) => {
          const spec = (group.subPart?.name || "").toLowerCase();
          
          // Check subPart name for transmission keywords
          // const hasTransmissionInSubPart = 
          //   spec.includes("e4od") ||
          //   spec.includes("e40d") ||
          //   spec.includes("transmission") ||
          //   spec.includes("vin") ||
          //   spec.includes("4.9l") ||
          //   spec.includes("5.0l") ||
          //   spec.includes("5.8l");
          
          // if (hasTransmissionInSubPart) {
          //   console.log(`🚫 Filtered out group (subPart): ${group.subPart?.name}`);
          //   return false;
          // }
          
          // Check individual variants for transmission-related data
          const hasValidVariants = group.variants?.some((variant: any) => {
            const variantSpec = (variant.specification || variant.description || "").toLowerCase();
            const variantSku = (variant.sku || "").toLowerCase();
            const variantTitle = (variant.title || "").toLowerCase();
            
            // const isTransmission = 
            //   variantSpec.includes("transmission") ||
            //   variantSku.includes("transmission") ||
            //   variantTitle.includes("transmission") ||
            //   variantSpec.includes("e4od") ||
            //   variantSpec.includes("e40d");
            
            // if (isTransmission) {
            //   console.log(`🚫 Filtered out variant (transmission): SKU=${variant.sku}`);
            //   return false;
            // }
            
            // Valid transmission variant
            console.log(`✅ Valid transmission variant: SKU=${variant.sku}, Miles=${variant.miles || 'N/A'}, Spec=${variantSpec.substring(0, 50)}`);
            return true;
          });
          
          return hasValidVariants;
        }
      );
      
      console.log(`✅ Valid transmission groups after filtering: ${validTransmissionGroups.length}`);
 
      products = validTransmissionGroups.flatMap((group: any) =>
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
            title: variant.title || `${year} ${titleCaseMake} ${titleCaseModel} Used Transmission - ${group.subPart?.name || "Transmission Assembly"}`,
            price: discountedPrice,
            modelYearId: 1,
            partTypeId: 1,
            inStock: inStock,
            description: variant.description || `Used transmission for ${year} ${titleCaseMake} ${titleCaseModel} with ${variant.miles || "N/A"} miles`,
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
            part: "transmission",
            partType: group.subPart?.name || "Transmission Assembly",
          };
        })
      );
 
      const subPartsMap = new Map();
      validTransmissionGroups.forEach((group: any) => {
        if (group.subPart) subPartsMap.set(group.subPart.id, group.subPart);
      });
      subPartsList = Array.from(subPartsMap.values());
    }
  } catch (error) {
    console.error("Transmission API Error:", error);
  }
 
  if (products.length === 0) {
    const titleCaseMake = normalizedMake.replace(/\b\w/g, (l) => l.toUpperCase());
    const titleCaseModel = normalizedModel.replace(/\b\w/g, (l) => l.toUpperCase());
    
    if (hasDataInDatabase(normalizedMake, normalizedModel)) {
      products = [{
        id: 0,
        sku: `NO-TRANSMISSION-${normalizedMake}-${normalizedModel}`,
        title: `No Transmission Available`,
        price: 0,
        modelYearId: 1,
        partTypeId: 1,
        inStock: false,
        description: `Currently no transmission products available for ${year} ${titleCaseMake} ${titleCaseModel}.`,
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
        part: "transmission",
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
      canonicalUrl={`https://partscentral.us/catalogue/transmission/${year}/${normalizedMake}/${normalizedModel}`}
      subPartsList={subPartsList}
      part="transmission"
    />
  );
}
import { Metadata } from "next";
import { generateDynamicEngineMetadata } from "@/utils/metadata";
import EngineProductClient from "../engines/EngineProductClient";
import { MODELS } from "@/components/vehicleData";

// Force dynamic rendering
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Helper function to convert URL-friendly model to database model
function convertUrlModelToDbModel(urlModel: string, make: string): string {
  if (!urlModel || !make) return urlModel;
  
  // Decode URL-encoded characters (e.g., %26 → &)
  const decodedUrlModel = decodeURIComponent(urlModel);
  
  // Try different capitalization strategies to find the make in MODELS
  // vehicleData.ts has: Ford, GMC, BMW, Cadillac, etc.
  const makeVariations = [
    make.toUpperCase(), // BMW, GMC
    make.charAt(0).toUpperCase() + make.slice(1).toLowerCase(), // Ford, Cadillac
    make.charAt(0).toUpperCase() + make.slice(1), // Keep original case after first char
  ];
  
  let makeKey: string | null = null;
  let modelsForMake: string[] | null = null;
  
  // Try each variation
  for (const variation of makeVariations) {
    if (MODELS[variation as keyof typeof MODELS]) {
      makeKey = variation;
      modelsForMake = MODELS[variation as keyof typeof MODELS];
      break;
    }
  }
  
  // If still not found, try case-insensitive search
  if (!modelsForMake) {
    const availableMakes = Object.keys(MODELS);
    const foundMake = availableMakes.find(m => m.toLowerCase() === make.toLowerCase());
    if (foundMake) {
      makeKey = foundMake;
      modelsForMake = MODELS[foundMake as keyof typeof MODELS];
    }
  }
  
  if (!modelsForMake || !Array.isArray(modelsForMake)) {
    console.log(`⚠️ No models found for make: ${make}`);
    console.log(`⚠️ Available makes in MODELS:`, Object.keys(MODELS));
    return decodedUrlModel;
  }
  
  console.log(`🔍 Looking for URL model "${decodedUrlModel}" in ${makeKey} models`);
  
  // Normalize the URL model for comparison (remove all special chars)
  const normalizedUrlModel = decodedUrlModel.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  // Find matching model in MODELS
  const matchingModel = modelsForMake.find((dbModel: string) => {
    const normalizedDbModel = dbModel.toLowerCase().replace(/[^a-z0-9]/g, "");
    return normalizedDbModel === normalizedUrlModel;
  });
  
  if (matchingModel) {
    console.log(`✅ Converted URL model "${decodedUrlModel}" to DB model "${matchingModel}"`);
  } else {
    console.log(`⚠️ No match found for URL model "${decodedUrlModel}" in ${modelsForMake.length} ${makeKey} models`);
  }
  
  // Return the original database model if found, otherwise return decoded URL model
  return matchingModel || decodedUrlModel;
}

type Props = {
  params: Promise<{
    item: string;
  }>;
  searchParams: Promise<{
    make?: string;
    model?: string;
    year?: string;
    part?: string;
    sku?: string;
    seoTitle?: string;
    seoSlug?: string;
    seoCanonical?: string;
    seoDescription?: string;
  }>;
};


export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  try {
    const routeParams = await params;
    const queryParams = await searchParams;

    console.log("Page generateMetadata called with params:", routeParams);
    console.log("Page generateMetadata called with searchParams:", queryParams);

    // Parse URL segments
    const segments = routeParams.item?.split("-") || [];
    let year = "";
    let make = "";
    let model = "";
    let part = "";
    let specification = "";
    let miles = "";

    // If not in query params, try to parse from URL
    if (!queryParams.make && segments.length >= 4) {
      year = segments[0];
      make = segments[1];
      
      // Find the part index (engine or transmission)
      const partIndex = segments.findIndex(
        (seg) => seg.toLowerCase() === "engine" || seg.toLowerCase() === "transmission"
      );
      
      if (partIndex > 2) {
        // Model is everything between make and part (keep hyphens to match URL format)
        model = segments.slice(2, partIndex).join("-");
        part = segments[partIndex];
        
        // Parse specification and miles after part
        const remainingSegments = segments.slice(partIndex + 1);
if (remainingSegments.length > 0) {
  const lastSegment = remainingSegments[remainingSegments.length - 1];
  
  if (lastSegment === 'n-a') {
    miles = 'n-a';
    specification = remainingSegments.slice(0, -1).join("-");
  } else if (/^\d+k?$/i.test(lastSegment)) {
    miles = lastSegment;
    specification = remainingSegments.slice(0, -1).join("-");
  } else {
    specification = remainingSegments.join("-");
    miles = "";
  }
}

      } else {
        // Fallback: assume model is at index 2
        model = segments[2];
        part = segments[3];
        
        const remainingSegments = segments.slice(4);
        
        if (remainingSegments.length > 0) {
          const lastSegment = remainingSegments[remainingSegments.length - 1];
          const looksLikeMiles = /^\d+k?$/i.test(lastSegment);
          
          if (looksLikeMiles && remainingSegments.length > 1) {
            miles = lastSegment;
            specification = remainingSegments.slice(0, -1).join("-");
          } else if (looksLikeMiles && remainingSegments.length === 1) {
            miles = lastSegment;
            specification = "";
          } else {
            specification = remainingSegments.join("-");
            miles = "";
          }
        }
      }
      
      console.log("Parsed from URL:", { year, make, model, part, specification, miles });
    } else {
      // Use query params if available
      year = queryParams.year || "";
      make = queryParams.make || "";
      model = queryParams.model || "";
      part = queryParams.part || "";
    }

    console.log("Final parsed values:", { year, make, model, part, specification, miles });

    const allParams = {
      ...queryParams,
      item: routeParams.item,
    };

    const baseMetadata = generateDynamicEngineMetadata(allParams);
    
    let apiseo: {
      seoTitle?: string;
      seoDescription?: string;
      seoCanonical?: string;
    } | null = null;

    // Fetch SEO data if we have the required params
    if (make && model && year && part) {
      try {
        // Convert URL model to database model format
        const dbModel = convertUrlModelToDbModel(model, make);
        // const apiUrl = `https://partscentral.us/api/products/v2/grouped-with-subparts?make=${make}&model=${encodeURIComponent(dbModel)}&year=${year}&part=${part}`;
         const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products/v2/grouped-with-subparts?make=${make}&model=${encodeURIComponent(dbModel)}&year=${year}&part=${part}`;
        console.log("🔍 Fetching SEO data from:", apiUrl);
        console.log("🔄 Model conversion: URL=", model, "→ DB=", dbModel);
        
        const apiResponse = await fetch(apiUrl, {
          cache: 'no-store',
          next: { revalidate: 0 },
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!apiResponse.ok) {
          console.error("❌ API response not OK:", apiResponse.status);
          throw new Error(`API returned ${apiResponse.status}`);
        }

        const apiData = await apiResponse.json();
        console.log("✅ API Response received:", {
          hasGroupedVariants: !!apiData.groupedVariants,
          variantCount: apiData.groupedVariants?.length,
        });

        // UPDATED STRATEGY: Match the URL specification and miles to select the correct variant
        let selectedVariant: any | null = null;

        if (apiData.groupedVariants && apiData.groupedVariants.length > 0) {
          // Helper function to normalize specification strings
          const normalizeSpec = (spec: string) => spec.toLowerCase().replace(/[^a-z0-9]/g, "");
          
          // Try to match by specification first
          let targetGroup = null;
          
          if (specification) {
            const specNormalized = normalizeSpec(specification);
            console.log("🔎 Looking for specification:", specification, "normalized:", specNormalized);
            
            targetGroup = apiData.groupedVariants.find((group: any) => {
              const groupName = group.subPart?.name || "";
              const groupNormalized = normalizeSpec(groupName);
              
              return groupNormalized === specNormalized || 
                     groupNormalized.includes(specNormalized) ||
                     specNormalized.includes(groupNormalized);
            });
            
            if (targetGroup) {
              console.log("✅ Found matching specification group:", targetGroup.subPart.name);
              
              // If miles is also specified, try to find matching variant
              if (miles) {
                const milesNormalized = miles.toLowerCase().replace(/[^a-z0-9]/g, "");
                console.log("🔎 Looking for miles:", miles, "normalized:", milesNormalized);
                
                selectedVariant = targetGroup.variants.find((v: any) => {
                  const variantMiles = v.miles?.toString().toLowerCase().replace(/[^a-z0-9]/g, "") || "";
                  return variantMiles === milesNormalized || variantMiles.includes(milesNormalized);
                });
                
                if (selectedVariant) {
                  console.log("✅ Found matching miles variant:", selectedVariant.miles);
                }
              }
              
              // If no miles match or miles not specified, use first in-stock variant from this spec group
              if (!selectedVariant) {
                selectedVariant = targetGroup.variants.find((v: any) => v.inStock) || targetGroup.variants[0];
                console.log("✅ Using first available variant from matched spec group");
              }
            }
          }
          
          // Fallback: Use first in-stock variant overall
          if (!selectedVariant) {
            console.log("⚠️ No specification/miles match, using first in-stock variant");
            for (const group of apiData.groupedVariants) {
              const inStockVariant = group.variants.find((v: any) => v.inStock);
              if (inStockVariant) {
                selectedVariant = inStockVariant;
                console.log("✅ Using first in-stock variant for SEO");
                break;
              }
            }
            
            // Last resort: first variant overall
            if (!selectedVariant) {
              selectedVariant = apiData.groupedVariants[0].variants[0];
              console.log("⚠️ Using first variant (none in stock)");
            }
          }
        }

        if (selectedVariant) {
          apiseo = {
            seoTitle: selectedVariant.seoTitle || "",
            seoDescription: selectedVariant.seoDescription || "",
            seoCanonical: selectedVariant.seoCanonical || "",
          };
          console.log("✅ SEO data extracted:", {
            title: apiseo.seoTitle?.substring(0, 60),
            hasDescription: !!apiseo.seoDescription,
            canonical: apiseo.seoCanonical
          });
        } else {
          console.log("⚠️ No variant found, using fallback metadata");
        }
      } catch (apiError) {
        console.error("❌ Error fetching SEO data:", apiError);
      }
    } else {
      console.log("⚠️ Missing required params:", { make, model, year, part });
    }

    // Build final metadata with proper type handling
    const finalTitle = apiseo?.seoTitle?.trim() || baseMetadata.title || undefined;
    const finalDescription = apiseo?.seoDescription?.trim() || baseMetadata.description || undefined;
    
    // FIXED: Canonical should always match the current URL (decode URL-encoded characters)
    const decodedItem = decodeURIComponent(routeParams.item);
    const currentUrl = `https://partscentral.us/product/${decodedItem}`;
    const finalCanonical = apiseo?.seoCanonical?.trim() || currentUrl;

    const finalMetadata: Metadata = {
      ...baseMetadata,
      title: finalTitle,
      description: finalDescription,
      alternates: {
        ...(baseMetadata.alternates ?? {}),
        canonical: finalCanonical,
      },
      // Add Open Graph tags for social sharing
      openGraph: {
        title: finalTitle,
        description: finalDescription,
        url: finalCanonical,
        type: 'website',
      },
      // Add Twitter Card tags
      twitter: {
        card: 'summary_large_image',
        title: finalTitle,
        description: finalDescription,
      },
    };
    
    console.log("🎯 Final metadata:", {
      title: finalMetadata.title,
      hasDescription: !!finalMetadata.description,
      canonical: finalMetadata.alternates?.canonical,
      usedApiSEO: !!apiseo?.seoTitle
    });
    
    return finalMetadata;
  } catch (error) {
    console.error("❌ Error generating metadata:", error);
    return generateDynamicEngineMetadata({});
  }
}


export default async function EngineProductPage({
  params,
  searchParams,
}: Props) {
  const routeParams = await params;
  const queryParams = await searchParams;

  console.log("EngineProductPage - routeParams:", routeParams);
  console.log("EngineProductPage - queryParams:", queryParams);

  // Parse URL parameters on server
  const segments = routeParams.item?.split("-") || [];
  let year = "";
  let make = "";
  let model = "";
  let part = "";
  let specification = "";
  let miles = "";

  // Try to get from query params first
  if (queryParams.make) {
    year = queryParams.year || "";
    make = queryParams.make || "";
    model = queryParams.model || "";
    part = queryParams.part || "";
  } else if (segments.length >= 4) {
    // Parse from URL segments
    year = segments[0];
    make = segments[1];
    
    // Find the part index (engine or transmission)
    const partIndex = segments.findIndex(
      (seg) => seg.toLowerCase() === "engine" || seg.toLowerCase() === "transmission"
    );
    
    if (partIndex > 2) {
      // Model is everything between make and part (keep hyphens to match URL format)
      model = segments.slice(2, partIndex).join("-");
      part = segments[partIndex];
      
      // Parse specification and miles after part
      // Miles is typically the LAST segment and ends with 'k' or is a pure number
      // Specification is everything between part and miles
      // Example: 2016-audi-a8-engine-4-0l-vin-3-5th-digit-turbo-gasoline-engine-id-ctgf-10k
      //          specification = "4-0l-vin-3-5th-digit-turbo-gasoline-engine-id-ctgf"
      //          miles = "10k"
      
      const remainingSegments = segments.slice(partIndex + 1);
      
     if (remainingSegments.length > 0) {
  const lastSegment = remainingSegments[remainingSegments.length - 1];
  
  if (lastSegment === 'n-a') {
    miles = 'n-a';                                    // ✅ Out of stock
    specification = remainingSegments.slice(0, -1).join("-");
  } else if (/^\d+k?$/i.test(lastSegment)) {
    miles = lastSegment;                              // ✅ In stock miles
    specification = remainingSegments.slice(0, -1).join("-");
  } else {
    specification = remainingSegments.join("-");
    miles = "";
  }
}
    } else {
      // Fallback: assume model is at index 2
      model = segments[2];
      part = segments[3];
      
      // Apply same logic for spec and miles
      const remainingSegments = segments.slice(4);
      
    // INSIDE fallback block - ADD n-a check:
if (remainingSegments.length > 0) {
  const lastSegment = remainingSegments[remainingSegments.length - 1];
  
  if (lastSegment === 'n-a') {        
    miles = 'n-a';
    specification = remainingSegments.slice(0, -1).join("-");
  } else if (/^\d+k?$/i.test(lastSegment)) {
    miles = lastSegment;
    specification = remainingSegments.slice(0, -1).join("-");
  } else {
    specification = remainingSegments.join("-");
    miles = "";
  }
}

    }
  }

  console.log("🔄 Server-side parsed params:", { year, make, model, part, specification, miles });


  // Fetch product data on server
  let initialData = null;
  
  if (make && model && year && part) {
    try {
      // Convert URL model to database model format
      const dbModel = convertUrlModelToDbModel(model, make);
      //  const apiUrl = `https://partscentral.us/api/products/v2/grouped-with-subparts?make=${encodeURIComponent(make)}&model=${encodeURIComponent(dbModel)}&year=${encodeURIComponent(year)}&part=${encodeURIComponent(part)}`;
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products/v2/grouped-with-subparts?make=${encodeURIComponent(make)}&model=${encodeURIComponent(dbModel)}&year=${encodeURIComponent(year)}&part=${encodeURIComponent(part)}`;
      
      console.log("🔄 Server fetching from:", apiUrl);
      console.log("📋 Parsed params:", { make, model: model, dbModel, year, part });
      
      const res = await fetch(apiUrl, { 
        cache: "no-store",
        next: { revalidate: 0 }
      });
      
      if (res.ok) {
        initialData = await res.json();
        console.log("✅ Server-side data fetched successfully");
        console.log("📊 API Response:", {
          hasGroupedVariants: !!initialData?.groupedVariants,
          variantCount: initialData?.groupedVariants?.length,
          make: initialData?.make,
          model: initialData?.model,
          year: initialData?.year,
          part: initialData?.part
        });
        
        if (!initialData?.groupedVariants || initialData.groupedVariants.length === 0) {
          console.error("⚠️ API returned empty groupedVariants - model mismatch likely");
          console.error("⚠️ URL model:", model, "| API model:", initialData?.model);
        }
      } else {
        console.error("❌ Server fetch failed:", res.status);
        const errorText = await res.text();
        console.error("❌ Error response:", errorText);
      }
    } catch (error) {
      console.error("❌ Server fetch error:", error);
    }
  }

  console.log("📦 Passing initialData to client:", {
    hasData: !!initialData,
    hasGroupedVariants: !!initialData?.groupedVariants,
    variantCount: initialData?.groupedVariants?.length,
    specification,
    miles
  });

  // Generate JSON-LD Product Schema
  let jsonLdSchema = null;
  
  if (initialData?.groupedVariants?.length > 0 && make && model && year && part) {
    // Find the matching variant based on specification and miles
    let selectedVariant = null;
    let selectedSubPart = null;
    
    const normalizeSpec = (spec: string) => spec.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // Try to match specification
    if (specification) {
      const specNormalized = normalizeSpec(specification);
      const targetGroup = initialData.groupedVariants.find((group: any) => {
        const groupName = group.subPart?.name || "";
        const groupNormalized = normalizeSpec(groupName);
        return groupNormalized === specNormalized || 
               groupNormalized.includes(specNormalized) ||
               specNormalized.includes(groupNormalized);
      });
      
      if (targetGroup) {
        selectedSubPart = targetGroup.subPart;
        
        // Try to match miles within this group
        if (miles) {
          const milesNormalized = miles.toLowerCase().replace(/[^a-z0-9]/g, "");
          selectedVariant = targetGroup.variants.find((v: any) => {
            const variantMiles = v.miles?.toString().toLowerCase().replace(/[^a-z0-9]/g, "") || "";
            return variantMiles === milesNormalized || variantMiles.includes(milesNormalized);
          });
        }
        
        // Fallback to first in-stock variant in this group
        if (!selectedVariant) {
          selectedVariant = targetGroup.variants.find((v: any) => v.inStock) || targetGroup.variants[0];
        }
      }
    }
    
    // Fallback to first available variant overall
    if (!selectedVariant) {
      for (const group of initialData.groupedVariants) {
        const inStockVariant = group.variants.find((v: any) => v.inStock);
        if (inStockVariant) {
          selectedVariant = inStockVariant;
          selectedSubPart = group.subPart;
          break;
        }
      }
      
      if (!selectedVariant && initialData.groupedVariants[0]) {
        selectedVariant = initialData.groupedVariants[0].variants[0];
        selectedSubPart = initialData.groupedVariants[0].subPart;
      }
    }
    
    if (selectedVariant) {
      const decodedModel = decodeURIComponent(model);
      const productName = `${year} ${make.toUpperCase()} ${decodedModel.toUpperCase()} Used ${part.charAt(0).toUpperCase() + part.slice(1)} ${selectedSubPart?.name || specification || ""} ${selectedVariant.miles || miles || ""}`;
      // Decode URL-encoded characters in the item parameter for clean URLs
      const decodedItem = decodeURIComponent(routeParams.item);
      const productUrl = `https://partscentral.us/product/${decodedItem}`;
      const imageUrl = selectedVariant.product?.images?.[0] 
        ? `https://partscentral.us${selectedVariant.product.images[0]}`
        : part.toLowerCase() === "engine" 
          ? "https://s3.us-east-1.amazonaws.com/partscentral.us/public/engine-1.png"
          : "https://s3.us-east-1.amazonaws.com/partscentral.us/Trasmission_.png";
      
      const price = selectedVariant.discountedPrice || selectedVariant.actualprice || 0;
      const availability = selectedVariant.inStock 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock";
      
      // Clean SKU for schema
      const cleanSku = selectedVariant.sku?.replace(/[\/\s]/g, "-") || 
        `${make.toUpperCase()}-${model.toUpperCase()}-${year}-${part.toUpperCase()}-${selectedSubPart?.name || specification || ""}-${selectedVariant.miles || miles || ""}`.replace(/[\/\s,()]/g, "-");
      
      const description = `This ${make.charAt(0).toUpperCase() + make.slice(1)} ${model} ${part.charAt(0).toUpperCase() + part.slice(1)} is from ${year} models. Each ${part.charAt(0).toUpperCase() + part.slice(1)} is tested and ready to install and offers improved performance. This Unit is perfect for anyone in the market for reliable used ${part} that will offer superior results - a great addition to any repair project!`;
      
      jsonLdSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": productName,
        "image": imageUrl,
        // "description": description,
        // "sku": cleanSku,
        "brand": {
          "@type": "Brand",
          "name": make.charAt(0).toUpperCase() + make.slice(1)
        },
        "offers": {
          "@type": "Offer",
          "url": productUrl,
          "priceCurrency": "USD",
          "price": price.toFixed(2),
          "itemCondition": "https://schema.org/UsedCondition",
          "availability": availability
        }
      };
      
      console.log("✅ Generated JSON-LD schema for:", productName);
    }
  }

  // Pass server-fetched data to client component
  return (
    <>
      {jsonLdSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      )}
      <EngineProductClient 
        initialItem={routeParams.item} 
        initialData={initialData}
        setSku={queryParams.sku}
        setModal={undefined}
        specification={specification}
        miles={miles}
      />
    </>
  );
}


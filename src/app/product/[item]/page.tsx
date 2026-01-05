import { Metadata } from "next";
import { generateDynamicEngineMetadata } from "@/utils/metadata";
import EngineProductClient from "../engines/EngineProductClient";

// Force dynamic rendering
export const dynamic = "force-dynamic";
export const revalidate = 0;

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

    // Use consistent API URL
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://partscentral.us/api";

    console.log("Page generateMetadata called with params:", routeParams);
    console.log("Page generateMetadata called with searchParams:", queryParams);

    // Parse URL segments
    const segments = routeParams.item?.split("-") || [];
    let year = "";
    let make = "";
    let model = "";
    let part = "";

    // If not in query params, try to parse from URL
    if (!queryParams.make && segments.length >= 4) {
      year = segments[0];
      make = segments[1];
      
      // Find the part index (engine or transmission)
      const partIndex = segments.findIndex(
        (seg) => seg.toLowerCase() === "engine" || seg.toLowerCase() === "transmission"
      );
      
      if (partIndex > 2) {
        // Model is everything between make and part
        model = segments.slice(2, partIndex).join(" ");
        console.log("Model extracted from URL:", model);
        part = segments[partIndex];
      } else {
        // Fallback: assume model is at index 2
        model = segments[2];
        part = segments[3];
      }
      
      console.log("Parsed from URL:", { year, make, model, part, partIndex });
    } else {
      // Use query params if available
      year = queryParams.year || "";
      make = queryParams.make || "";
      model = queryParams.model || "";
      part = queryParams.part || "";
    }

    console.log("Final parsed values:", { year, make, model, part });

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
        const apiUrl = `${API_BASE_URL}/products/v2/grouped-with-subparts?make=${make}&model=${model}&year=${year}&part=${part}`;
        console.log("🔍 Fetching SEO data from:", apiUrl);
        
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

        // STRATEGY: Always use the FIRST IN-STOCK variant for SEO
        // This ensures consistent, cacheable meta tags for search engines
        let selectedVariant: any | null = null;

        if (apiData.groupedVariants && apiData.groupedVariants.length > 0) {
          // Priority 1: First in-stock variant
          for (const group of apiData.groupedVariants) {
            const inStockVariant = group.variants.find((v: any) => v.inStock);
            if (inStockVariant) {
              selectedVariant = inStockVariant;
              console.log("✅ Using first in-stock variant for SEO");
              break;
            }
          }

          // Priority 2: First variant overall (if none in stock)
          if (!selectedVariant) {
            selectedVariant = apiData.groupedVariants[0].variants[0];
            console.log("⚠️ Using first variant (none in stock)");
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
            hasCanonical: !!apiseo.seoCanonical
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
    // const finalCanonical = apiseo?.seoCanonical?.trim() || 
      // (typeof baseMetadata.alternates?.canonical === 'string' ? baseMetadata.alternates.canonical : undefined);

      const finalCanonical = apiseo?.seoCanonical?.trim() || 
    `https://partscentral.us/product/${routeParams.item}` || // Use the actual pathname
    (typeof baseMetadata.alternates?.canonical === 'string' ? baseMetadata.alternates.canonical : undefined);

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

  // Use consistent API URL
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://partscentral.us/api";

  console.log("EngineProductPage - routeParams:", routeParams);
  console.log("EngineProductPage - queryParams:", queryParams);
  console.log("EngineProductPage - API_BASE_URL:", API_BASE_URL);

  // Parse URL to extract product parameters
  const segments = routeParams.item?.split("-") || [];
  let year = queryParams.year || "";
  let make = queryParams.make || "";
  let model = queryParams.model || "";
  let part = queryParams.part || "";
  let sku = queryParams.sku || "";

  // If not in query params, parse from URL
  if (!make && segments.length >= 4) {
    year = segments[0];
    make = segments[1];
    
    const partIndex = segments.findIndex(
      (seg) => seg.toLowerCase() === "engine" || seg.toLowerCase() === "transmission"
    );
    
    if (partIndex > 2) {
      model = segments.slice(2, partIndex).join(" ");
      part = segments[partIndex];
    } else {
      model = segments[2];
      part = segments[3];
    }
  }

  console.log("Server parsed values:", { year, make, model, part, sku });

  // Fetch product data on the server
  let initialProductData = null;
  
  if (make && model && year && part) {
    try {
      const apiUrl = `${API_BASE_URL}/products/v2/grouped-with-subparts?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}&year=${encodeURIComponent(year)}&part=${encodeURIComponent(part)}`;
      
      console.log("🔄 Server fetching from:", apiUrl);
      
      const apiResponse = await fetch(apiUrl, {
        cache: 'no-store',
        next: { revalidate: 0 },
      });

      if (apiResponse.ok) {
        const data = await apiResponse.json();
        console.log("✅ Server fetched data:", {
          hasGroupedVariants: !!data.groupedVariants,
          variantCount: data.groupedVariants?.length,
        });

        // Select the appropriate variant using the same logic as client
        let selectedGroup = null;
        let selectedVariant = null;

        if (data.groupedVariants && data.groupedVariants.length > 0) {
          // Priority 1: Match by SKU if provided
          if (sku) {
            for (const group of data.groupedVariants) {
              const variant = group.variants.find((v: any) => v.sku === sku);
              if (variant) {
                selectedGroup = group;
                selectedVariant = variant;
                break;
              }
            }
          }

          // Priority 2: Parse spec and miles from URL
          if (!selectedVariant && routeParams.item) {
            const parts = routeParams.item.split("-");
            const partIndex = parts.findIndex(
              (p) => p.toLowerCase() === part.toLowerCase()
            );

            let milesValue = "";
            let specFromUrl = "";

            if (partIndex !== -1 && parts.length > partIndex + 1) {
              const lastPart = parts[parts.length - 1];
              
              if (/^\d+$/.test(lastPart)) {
                milesValue = lastPart.replace(/[^\d]/g, "");
                specFromUrl = parts
                  .slice(partIndex + 1, parts.length - 1)
                  .join(" ")
                  .replace(/-/g, " ")
                  .trim()
                  .toLowerCase();
              } else {
                specFromUrl = parts
                  .slice(partIndex + 1)
                  .join(" ")
                  .replace(/-/g, " ")
                  .trim()
                  .toLowerCase();
              }
            }

            // Try to match by specification
            if (specFromUrl) {
              const normalizedUrlSpec = specFromUrl
                .replace(/\s+/g, "")
                .replace(/\./g, "")
                .toLowerCase();

              for (const group of data.groupedVariants) {
                const groupSpec = group.subPart.name
                  .replace(/[,()-]/g, "")
                  .replace(/\s+/g, "")
                  .replace(/\./g, "")
                  .trim()
                  .toLowerCase();

                if (groupSpec === normalizedUrlSpec) {
                  selectedGroup = group;
                  
                  if (milesValue) {
                    const milesMatch = group.variants.find((v: any) => {
                      const vm = v.miles?.toString().replace(/[^\d]/g, "");
                      return vm === milesValue;
                    });
                    selectedVariant = milesMatch || group.variants[0];
                  } else {
                    selectedVariant = group.variants[0];
                  }
                  break;
                }
              }
            }
          }

          // Priority 3: First in-stock variant
          if (!selectedVariant) {
            for (const group of data.groupedVariants) {
              const inStockVariant = group.variants.find((v: any) => v.inStock);
              if (inStockVariant) {
                selectedGroup = group;
                selectedVariant = inStockVariant;
                break;
              }
            }
          }

          // Priority 4: First variant overall
          if (!selectedVariant) {
            selectedGroup = data.groupedVariants[0];
            selectedVariant = selectedGroup.variants[0];
          }
        }

        if (selectedVariant && selectedGroup) {
          initialProductData = {
            groupedVariants: data.groupedVariants,
            selectedProduct: {
              ...selectedVariant,
              make: data.make,
              model: data.model,
              year: data.year,
              part: data.part,
              subPart: selectedGroup.subPart,
            },
            productInfo: {
              make: data.make || "",
              model: data.model || "",
              year: data.year || "",
              part: data.part || "",
            },
            selectedSubPartId: selectedGroup.subPart.id,
            selectedMilesSku: selectedVariant.sku,
          };

          console.log("✅ Server selected variant:", selectedVariant.sku);
        }
      }
    } catch (error) {
      console.error("❌ Server fetch error:", error);
    }
  }

  return <EngineProductClient 
    initialItem={routeParams.item} 
    setSku={sku || undefined}
    setModal={undefined}
    initialProductData={initialProductData}
  />;
}

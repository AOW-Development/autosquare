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
 
  const decodedUrlModel = decodeURIComponent(urlModel);
 
  const makeVariations = [
    make.toUpperCase(),
    make.charAt(0).toUpperCase() + make.slice(1).toLowerCase(),
    make.charAt(0).toUpperCase() + make.slice(1),
  ];
 
  let makeKey: string | null = null;
  let modelsForMake: string[] | null = null;
 
  for (const variation of makeVariations) {
    if (MODELS[variation as keyof typeof MODELS]) {
      makeKey = variation;
      modelsForMake = MODELS[variation as keyof typeof MODELS];
      break;
    }
  }
 
  if (!modelsForMake) {
    const availableMakes = Object.keys(MODELS);
    const foundMake = availableMakes.find(
      (m) => m.toLowerCase() === make.toLowerCase(),
    );
    if (foundMake) {
      makeKey = foundMake;
      modelsForMake = MODELS[foundMake as keyof typeof MODELS];
    }
  }
 
  if (!modelsForMake || !Array.isArray(modelsForMake)) {
    return decodedUrlModel;
  }
 
  const normalizedUrlModel = decodedUrlModel
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
 
  const matchingModel = modelsForMake.find((dbModel: string) => {
    const normalizedDbModel = dbModel.toLowerCase().replace(/[^a-z0-9]/g, "");
    return normalizedDbModel === normalizedUrlModel;
  });
 
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
 
    const segments = routeParams.item?.split("-") || [];
    let year = "";
    let make = "";
    let model = "";
    let part = "";
    let specification = "";
    let miles = "";
 
    if (!queryParams.make && segments.length >= 4) {
      year = segments[0];
      make = segments[1];
 
      const partIndex = segments.findIndex(
        (seg) =>
          seg.toLowerCase() === "engine" ||
          seg.toLowerCase() === "transmission",
      );
 
      if (partIndex > 2) {
        model = segments.slice(2, partIndex).join("-");
        part = segments[partIndex];
 
        const remainingSegments = segments.slice(partIndex + 1);
        if (remainingSegments.length > 0) {
          const lastSegment = remainingSegments[remainingSegments.length - 1];
 
          if (lastSegment === "n-a") {
            miles = "n-a";
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
    } else {
      year = queryParams.year || "";
      make = queryParams.make || "";
      model = queryParams.model || "";
      part = queryParams.part || "";
    }
 
    const allParams = {
      ...queryParams,
      item: routeParams.item,
    };
 
    if (!year || !make || !model || !part) {
      return generateDynamicEngineMetadata(allParams);
    }
    const baseMetadata = generateDynamicEngineMetadata(allParams);
 
    let apiseo: {
      seoTitle?: string;
      seoDescription?: string;
      seoCanonical?: string;
    } | null = null;
 
    if (make && model && year && part) {
      try {
        const dbModel = convertUrlModelToDbModel(model, make);
        const apiUrl = `https://partscentral.us/api/products/v2/grouped-with-subparts?make=${make}&model=${encodeURIComponent(dbModel)}&year=${year}&part=${part}`;
 
        const apiResponse = await fetch(apiUrl, {
          cache: "no-store",
          next: { revalidate: 0 },
          headers: {
            "Content-Type": "application/json",
          },
        });
 
        if (!apiResponse.ok) {
          throw new Error(`API returned ${apiResponse.status}`);
        }
 
        const apiData = await apiResponse.json();
 
        let selectedVariant: any | null = null;
 
        if (apiData.groupedVariants && apiData.groupedVariants.length > 0) {
          const normalizeSpec = (spec: string) =>
            spec.toLowerCase().replace(/[^a-z0-9]/g, "");
 
          let targetGroup = null;
 
          if (specification) {
            const specNormalized = normalizeSpec(specification);
            targetGroup = apiData.groupedVariants.find((group: any) => {
              const groupName = group.subPart?.name || "";
              const groupNormalized = normalizeSpec(groupName);
              return (
                groupNormalized === specNormalized ||
                groupNormalized.includes(specNormalized) ||
                specNormalized.includes(groupNormalized)
              );
            });
 
            if (targetGroup) {
              if (miles) {
                const milesNormalized = miles
                  .toLowerCase()
                  .replace(/[^a-z0-9]/g, "");
                selectedVariant = targetGroup.variants.find((v: any) => {
                  const variantMiles =
                    v.miles?.toString().toLowerCase().replace(/[^a-z0-9]/g, "") || "";
                  return (
                    variantMiles === milesNormalized ||
                    variantMiles.includes(milesNormalized)
                  );
                });
              }
 
              if (!selectedVariant) {
                selectedVariant =
                  targetGroup.variants.find((v: any) => v.inStock) ||
                  targetGroup.variants[0];
              }
            }
          }
 
          if (!selectedVariant) {
            for (const group of apiData.groupedVariants) {
              const inStockVariant = group.variants.find((v: any) => v.inStock);
              if (inStockVariant) {
                selectedVariant = inStockVariant;
                break;
              }
            }
            if (!selectedVariant) {
              selectedVariant = apiData.groupedVariants[0].variants[0];
            }
          }
        }
 
        if (selectedVariant) {
          apiseo = {
            seoTitle: selectedVariant.seoTitle || "",
            seoDescription: selectedVariant.seoDescription || "",
            seoCanonical: selectedVariant.seoCanonical || "",
          };
        }
      } catch (apiError) {
        console.error("❌ Error fetching SEO data:", apiError);
      }
    }
 
    const finalTitle =
      apiseo?.seoTitle?.trim() ||
      `${year} ${make.toUpperCase()} ${model.toUpperCase()} Used ${part.charAt(0).toUpperCase() + part.slice(1)}`;
 
    const finalDescription =
      apiseo?.seoDescription?.trim() ||
      `Used ${year} ${make.toUpperCase()} ${model.toUpperCase()} ${part}. Tested and inspected for quality and performance. Available with verified mileage and ready for installation.`;
 
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
      openGraph: {
        title: finalTitle,
        description: finalDescription,
        url: finalCanonical,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: finalTitle,
        description: finalDescription,
      },
    };
 
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
 
  const segments = routeParams.item?.split("-") || [];
  let year = "";
  let make = "";
  let model = "";
  let part = "";
  let specification = "";
  let miles = "";
 
  if (queryParams.make) {
    year = queryParams.year || "";
    make = queryParams.make || "";
    model = queryParams.model || "";
    part = queryParams.part || "";
  } else if (segments.length >= 4) {
    year = segments[0];
    make = segments[1];
 
    const partIndex = segments.findIndex(
      (seg) =>
        seg.toLowerCase() === "engine" || seg.toLowerCase() === "transmission",
    );
 
    if (partIndex > 2) {
      model = segments.slice(2, partIndex).join("-");
      part = segments[partIndex];
 
      const remainingSegments = segments.slice(partIndex + 1);
 
      if (remainingSegments.length > 0) {
        const lastSegment = remainingSegments[remainingSegments.length - 1];
 
        if (lastSegment === "n-a") {
          miles = "n-a";
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
      model = segments[2];
      part = segments[3];
 
      const remainingSegments = segments.slice(4);
 
      if (remainingSegments.length > 0) {
        const lastSegment = remainingSegments[remainingSegments.length - 1];
 
        if (lastSegment === "n-a") {
          miles = "n-a";
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
 
  let initialData = null;
 
  if (make && model && year && part) {
    try {
      const dbModel = convertUrlModelToDbModel(model, make);
      const apiUrl = `https://partscentral.us/api/products/v2/grouped-with-subparts?make=${encodeURIComponent(make)}&model=${encodeURIComponent(dbModel)}&year=${encodeURIComponent(year)}&part=${encodeURIComponent(part)}`;
 
      const res = await fetch(apiUrl, {
        cache: "no-store",
        next: { revalidate: 0 },
      });
 
      if (res.ok) {
        initialData = await res.json();
      }
    } catch (error) {
      console.error("❌ Server fetch error:", error);
    }
  }
 
  // ─── Generate JSON-LD Product Schema ────────────────────────────────────────
  let jsonLdSchema = null;
 
  if (
    initialData?.groupedVariants?.length > 0 &&
    make &&
    model &&
    year &&
    part
  ) {
    let selectedVariant: any = null;
    let selectedSubPart: any = null;
 
    const normalizeSpec = (spec: string) =>
      spec.toLowerCase().replace(/[^a-z0-9]/g, "");
 
    // Step 1: Try to match exact spec + miles from URL
    if (specification) {
      const specNormalized = normalizeSpec(specification);
      const targetGroup = initialData.groupedVariants.find((group: any) => {
        const groupName = group.subPart?.name || "";
        const groupNormalized = normalizeSpec(groupName);
        return (
          groupNormalized === specNormalized ||
          groupNormalized.includes(specNormalized) ||
          specNormalized.includes(groupNormalized)
        );
      });
 
      if (targetGroup) {
        selectedSubPart = targetGroup.subPart;
 
        if (miles && miles !== "n-a") {
          const milesNormalized = miles.toLowerCase().replace(/[^a-z0-9]/g, "");
          selectedVariant = targetGroup.variants.find((v: any) => {
            const variantMiles =
              v.miles?.toString().toLowerCase().replace(/[^a-z0-9]/g, "") || "";
            return (
              variantMiles === milesNormalized ||
              variantMiles.includes(milesNormalized)
            );
          });
        }
 
        // Fallback to first in-stock variant in this spec group
        if (!selectedVariant) {
          selectedVariant =
            targetGroup.variants.find((v: any) => v.inStock) ||
            targetGroup.variants[0];
        }
      }
    }
 
    // Step 2: Fallback to first in-stock variant overall
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
      const productName = `${year} ${make.toUpperCase()} ${decodedModel.toUpperCase()} Used ${part.charAt(0).toUpperCase() + part.slice(1)} ${selectedSubPart?.name || specification || ""} ${selectedVariant.miles || miles || ""}`.trim();

      const decodedItem = decodeURIComponent(routeParams.item);
      const productUrl = `https://partscentral.us/product/${decodedItem}`;

      // ✅ FIX 1: Corrected transmission image URL (was "Trasmission_")
      const imageUrl = selectedVariant.product?.images?.[0]
        ? `https://partscentral.us${selectedVariant.product.images[0]}`
        : part.toLowerCase() === "engine"
          ? "https://s3.us-east-1.amazonaws.com/partscentral.us/public/engine-1.png"
          : "https://s3.us-east-1.amazonaws.com/partscentral.us/Transmission_.png";

      // ✅ FIX 2: Validated price — discountedPrice used only when lower than actualPrice
      const actualPrice = selectedVariant.actualprice || 0;
      const discountedPrice = selectedVariant.discountedPrice || 0;
      const rawPrice =
        discountedPrice > 0 && discountedPrice < actualPrice
          ? discountedPrice
          : actualPrice;

      // ✅ FIX 3: Correct availability — reads inStock from API, never hardcoded
      const isInStock = selectedVariant.inStock === true && rawPrice > 0;
      const schemaAvailability = isInStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock";

      const cleanSku =
        selectedVariant.sku?.replace(/[\/\s]/g, "-") ||
        `${make.toUpperCase()}-${model.toUpperCase()}-${year}-${part.toUpperCase()}-${selectedSubPart?.name || specification || ""}-${selectedVariant.miles || miles || ""}`.replace(
          /[\/\s,()]/g,
          "-",
        );

      const description = `This ${make.charAt(0).toUpperCase() + make.slice(1)} ${model} ${part.charAt(0).toUpperCase() + part.slice(1)} is from ${year} models. Each ${part.charAt(0).toUpperCase() + part.slice(1)} is tested and ready to install and offers improved performance. This Unit is perfect for anyone in the market for reliable used ${part} that will offer superior results - a great addition to any repair project!`;

      // ✅ FIX 4: Schema always includes an offer block with correct availability
      // Whether in stock or out of stock — Google needs to see the offer to check it
      jsonLdSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: productName,
        image: imageUrl,
        description,
        sku: cleanSku,
        brand: {
          "@type": "Brand",
          name: make.charAt(0).toUpperCase() + make.slice(1),
        },
        offers: {
          "@type": "Offer",
          url: productUrl,
          priceCurrency: "USD",
          // ✅ FIX 5: Price only shown when in stock and valid
          ...(isInStock && rawPrice > 0
            ? { price: rawPrice.toFixed(2) }
            : {}),
          itemCondition: "https://schema.org/UsedCondition",
          // ✅ FIX 3 applied here: dynamic availability from API
          availability: schemaAvailability,
        },
      };
    }
  }
 
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
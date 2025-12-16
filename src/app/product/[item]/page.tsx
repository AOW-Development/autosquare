import { Metadata } from "next";
import { generateDynamicEngineMetadata } from "@/utils/metadata";
import EngineProductClient from "../engines/EngineProductClient";
import { cookies } from "next/headers";

// Force dynamic rendering to ensure params and searchParams are available
// export const dynamic = "force-dynamic";

let sku: string | undefined = undefined;

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

    // Debug: log the params
    console.log("Page generateMetadata called with params:", routeParams);
    console.log("Page generateMetadata called with searchParams:", queryParams);

    // Merge route params and query params for metadata generation
    const allParams = {
      ...queryParams,
      item: routeParams.item,
    };

    const baseMetadata = generateDynamicEngineMetadata(allParams);
    const { item } = routeParams;
    console.log("Item:", item);
    let apiseo: {
      seoTitle?: string;
      seoDescription?: string;
      seoCanonical?: string;
    } | null = null;
    // We want: year, make, model, part, and then everything after part (joined by dash) as sku
    const segments = item?.split("-") || [];
    const [year, make, model, part, ...skuParts] = segments;
    const cookieStore = await cookies();
    sku = cookieStore.get("sku")?.value;
    // const sku = skuParts.length > 0 ? skuParts.join("-") : undefined;
    console.log("Year:", year);
    console.log("Make:", make);
    console.log("Model:", model);
    console.log("Part:", part);
    console.log("Sku:", sku);

    if (make && model && year && part) {
      try {
        const apiResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products/v2/grouped-with-subparts?make=${make}&model=${model}&year=${year}&part=${part}`
        );

        const apiData = await apiResponse.json();
        console.log("✅ API Response received:", {
          hasGroupedVariants: !!apiData.groupedVariants,
          variantCount: apiData.groupedVariants?.length,
          firstVariantSEO: apiData.groupedVariants?.[0]?.variants?.[0]?.seoTitle
        });
        let selectedVariant: any | null = null;
        if (sku) {
          for (const group of apiData.groupedVariants ?? []) {
            const v = group.variants.find((v: any) => v.sku === sku);
            if (v) {
              selectedVariant = v;
              break;
            }
          }
        }

        if (!selectedVariant) {
          selectedVariant = apiData.groupedVariants?.[0]?.variants?.[0] || null;
          console.log("Selected variant:", selectedVariant);
        }

        if (selectedVariant) {
          apiseo = {
            seoTitle: selectedVariant.seoTitle || "",
            seoDescription: selectedVariant.seoDescription || "",
            seoCanonical: selectedVariant.seoCanonical || "",
          };
          console.log("✅ SEO data extracted from API:", apiseo);
          cookieStore.set("apiseo", JSON.stringify(apiseo), { path: '/' });
        } else {
          console.log("⚠️ No variant selected, SEO data will be null");
        }
      } catch (apiError) {
        console.error("Error fetching SEO data from API:", apiError);
      }
    }

    const finalMetadata: Metadata = {
      ...baseMetadata,
      title: apiseo?.seoTitle?.trim() || baseMetadata.title,
      description: apiseo?.seoDescription?.trim() || baseMetadata.description,
      alternates: {
        ...(baseMetadata.alternates ?? {}),
        canonical: apiseo?.seoCanonical?.trim() || baseMetadata.alternates?.canonical || undefined,
      },
    };
    console.log("🎯 Final metadata generated:", {
      title: finalMetadata.title,
      description: finalMetadata.description?.substring(0, 50) + '...',
      canonical: finalMetadata.alternates?.canonical,
      usedApiSEO: !!apiseo?.seoTitle
    });
    return finalMetadata;
  } catch (error) {
    // Fallback to default metadata if there's an error
    console.error("Error generating metadata:", error);
    return generateDynamicEngineMetadata({});
  }
}

export default async function EngineProductPage({
  params,
  searchParams,
}: Props) {
  const routeParams = await params;
  const queryParams = await searchParams;

  // Debug logging
  console.log("EngineProductPage - routeParams:", routeParams);
  console.log("EngineProductPage - queryParams:", queryParams);
  console.log("EngineProductPage - item:", routeParams.item);

  // Pass the item to the client component if needed
  return <EngineProductClient initialItem={routeParams.item} setSku={sku} />;
}
import { Metadata } from "next";
import { generateDynamicEngineMetadata } from "@/utils/metadata";
import EngineProductClient from "./EngineProductClient";

// Force dynamic rendering to ensure searchParams are available
export const dynamic = "force-dynamic";

type Props = {
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
  searchParams,
}: Props): Promise<Metadata> {
  try {
    const params = await searchParams;

    // Debug: log the params
    console.log("Page generateMetadata called with searchParams:", params);

    // const metadata = generateDynamicEngineMetadata(params);
    // console.log("Generated metadata:", metadata);

  
    const baseMetadata = generateDynamicEngineMetadata(params);
    const { make, model, year, part, sku } = params;
    let apiseo: {
      seoTitle?: string;
      seoDescription?: string;
      seoCanonical?: string;
    } | null = null;

    if (make && model && year && part ) {
      try {
        const apiResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products/v2/grouped-with-subparts?make=${make}&model=${model}&year=${year}&part=${part}`
        );
        
        const apiData = await apiResponse.json();
        let selectedVariant: any | null = null;
        if (sku) {
          for (const group of apiData.groupedVariants ?? []) {
              const v = group.variants.find((v:any) => v.sku === sku);
              if (v) {
                selectedVariant = v;
                break;
              }
          }
        }

        if (!selectedVariant ) {
          selectedVariant = apiData.groupedVariants?.[0]?.variants?.[0] || null;
        }

        if (selectedVariant) {
          apiseo = {
            seoTitle: selectedVariant.seoTitle || "",
            seoDescription: selectedVariant.seoDescription || "",
            seoCanonical: selectedVariant.seoCanonical || "",
          };
        }
      } catch (apiError) {
        console.error("Error fetching SEO data from API:", apiError);
      }
    }





    const finalMetadata: Metadata = {
      ...baseMetadata,
      title: params.seoTitle?.trim() || apiseo?.seoTitle?.trim() || baseMetadata.title,
      description:
        params.seoDescription?.trim() || apiseo?.seoDescription?.trim() || baseMetadata.description,
      alternates: {
        ...(baseMetadata.alternates ?? {} ),
        canonical:
          params.seoCanonical?.trim() ||  apiseo?.seoCanonical?.trim() || baseMetadata.alternates?.canonical || undefined
      },
    };
    return finalMetadata
    
  } catch (error) {
    // Fallback to default metadata if there's an error
    console.error("Error generating metadata:", error);
    return generateDynamicEngineMetadata({});
  }
}

export default async function EngineProductPage({ searchParams }: Props) {
  return <EngineProductClient />;
}


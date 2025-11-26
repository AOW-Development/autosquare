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
    seotitle?: string;
    seoslug?: string;
    seocanonical?: string;
    seodescription?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  try {
    const params = await searchParams;

    // Debug: log the params
    console.log("Page generateMetadata called with searchParams:", params);

    const metadata = generateDynamicEngineMetadata(params);
    console.log("Generated metadata:", metadata);

    return metadata;
  } catch (error) {
    // Fallback to default metadata if there's an error
    console.error("Error generating metadata:", error);
    return generateDynamicEngineMetadata({});
  }
}

export default async function EngineProductPage({ searchParams }: Props) {
  return <EngineProductClient />;
}


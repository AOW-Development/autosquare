// app/catalogue/engine/home/page.tsx
import type { Metadata } from "next";
import CatalogTransmissionPage from "@/components/CatalogTransmissionPage";
import { generateDynamicCatalogMetadata } from "@/utils/metadata";

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}): Promise<Metadata> {
  const params = await searchParams;

  const make = typeof params.make === "string" ? params.make : null;
  const model = typeof params.model === "string" ? params.model : null;
  const year = typeof params.year === "string" ? params.year : null;
  const part = typeof params.part === "string" ? params.part : null;
  const subPartFilter =
    typeof params.subPartFilter === "string"
      ? params.subPartFilter
      : null;

 const dynamicData= generateDynamicCatalogMetadata({
    make,
    model,
    year,
    part,
    subPartFilter,
  });
  return {
    ...dynamicData,

   robots: {
      index: false,
      follow: false,
    },
  }

}

export default function CatalogueTransmissionPage() {
  return <CatalogTransmissionPage />;
}

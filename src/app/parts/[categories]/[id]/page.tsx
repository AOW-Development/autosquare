import { Metadata } from "next";
import { notFound } from "next/navigation";
import PartDetailPage from "./partDetails";
import { getPartFromDummy } from "@/data/getDataFromDummy";

/* ---------------- types ---------------- */
type PageParams = {
  categories: string;
  id: string;
};

/* ---------------- metadata ---------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { categories, id } = await params;

  const part = getPartFromDummy(categories, id);

  if (!part) {
    return {};
  }

  const title =
    part.title ??
    `${part.name} | Buy Used Auto Parts Online | PartsCentral`;

  const description =
    part.metaDesc ??
    `Buy ${part.name} at PartsCentral. Tested, quality-checked auto parts with warranty and fast shipping across the USA.`;

  const canonicalUrl = `https://partscentral.us/parts/${categories}/${id}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

/* ---------------- page ---------------- */
export default async function Page({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { categories, id } = await params;

  const part = getPartFromDummy(categories, id);

  if (!part) {
    notFound();
  }

  return <PartDetailPage part={part} />;
}

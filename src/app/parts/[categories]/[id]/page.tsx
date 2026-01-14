import { Metadata } from "next";
import PartDetailPage from "./partDetails";

type Props = {
  params: Promise<{
    categories: string;
    id: string;
  }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const { categories, id } = await params; // ✅ REQUIRED

  const canonicalUrl = `https://partscentral.us/parts/${categories}/${id}`;

  return {
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function Page() {
  return <PartDetailPage />;
}

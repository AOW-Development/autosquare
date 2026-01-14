import { Metadata } from "next";
import { getCar } from "@/data/cars";
import CarBrandInfo from "@/components/CarBrandInfo";
import CarPartsList from "@/components/CarPartsList";

// --------------------
// Metadata
// --------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params; // ✅ await params

  const car = getCar(id);

  if (!car) {
    return {
      title: "Brand Not Found | Parts Central",
      description: "The requested car brand could not be found.",
    };
  }

  const brandName = id.charAt(0).toUpperCase() + id.slice(1);

  return {
    title: `${brandName} Auto Parts | Quality Car Parts for ${brandName} | Parts Central`,
    description: `Shop quality auto parts for ${brandName} vehicles. Find engines, transmissions, and more.`,
    alternates: {
      canonical: `https://partscentral.us/used-auto-parts/${id}`,
    },
  };
}

// --------------------
// Page Component
// --------------------
export default async function CarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ await params

  console.log("PARAM ID →", id);

  const car = getCar(id);

  if (!car) {
    return (
      <div className="p-20 text-red-500 text-3xl">
        Brand not found.
      </div>
    );
  }

  return (
    <>
      <CarBrandInfo car={car} />
      <CarPartsList brand={id.charAt(0).toUpperCase() + id.slice(1)} />
    </>
  );
}

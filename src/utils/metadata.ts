import { Metadata } from "next";

export const metadataMap: Record<string, Metadata> = {
  "/aboutUs": {
    title: "About Us | Car Parts - Trusted Auto Parts Supplier",
    description:
      "Discover Car Parts’ journey, mission, and values. Learn how Car Parts delivers quality auto parts with reliability and trust to customers nationwide.",
    keywords:
      "Car Parts About Us, auto parts supplier, car spare parts online, trusted car parts store, automotive components, buy car parts online, vehicle parts supplier",
  },
  "/autoParts": {
    title: " Trusted Auto Spare Parts Shop & Supplier in US | Buy Now",
    description:
      "Parts Central Your Trusted Source for Automotive parts and accessories. Genuine Car Spare Parts Distributer.",
    keywords:
      "AutoParts for Sale in United States, Car Parts, Buy Auto Parts Online, Affordable Car Parts USA, Quality Auto Parts Near Me, Vehicle Spare Parts USA",
  },
  "/engine": {
    title: "Engine by Car Parts | Quality Auto Engines for Sale",
    description:
      "Buy premium Engine by Car Parts at the best price. Reliable, durable, and performance-driven engines designed to fit your vehicle’s needs. Shop now!",
    keywords:
      "Engine by Car Parts, Car Engine for Sale, Buy Auto Engine, Quality Engines Online, Affordable Car Engines, Vehicle Engine Replacement",
  },
  "/transmission": {
    title: "Transmission by Car Parts | Quality Auto Parts | Best Price",
    description:
      "Find premium Transmission by Car Parts for your vehicle. Durable, affordable, and reliable solutions to keep your car running smoothly. Shop now!",
    keywords:
      "transmission by car parts, car transmission parts, auto transmission online, buy transmission parts, replacement transmission",
  },
  "/used-engines-and-transmissions-for-sale-near-me-in-united-states": {
    title: "Used Engines and Transmissions for Sale Near Me in US",
    description:
      "Find reliable used engines and transmissions for sale near me in US. Affordable, high-quality auto parts with warranty for all vehicle makes and models.",
    keywords:
      "used engines and transmissions for sale near me in United States, buy used engines USA, used transmissions near me, affordable car engines and transmissions USA, rebuilt engines and transmissions for sale, quality used engines USA, used car parts near me, replacement car engines and transmissions USA, cheap used engines near me, certified used transmissions USA",
  },
  "/car-engines-for-sale-near-me-in-united-states": {
    title: "Car Engines for Sale Near Me in United States | Buy Online",
    description:
      "Get a Quality Used Car Engines for Sale Near Me in United States at an Affordable Price! Parts Central offers a wide variety of used car engines for sales.",
    keywords:
      "car engines for sale near me in United States, buy car engines near me, used car engines USA, rebuilt car engines for sale, affordable car engines near me, replacement car engines USA, quality car engines for sale, cheap car engines near me, new and used car engines USA, car engine suppliers near me",
  },
};

export const defaultMetadata: Metadata = {
  title: "Buy Genuine All Brand Car Spare Parts in US by PartsCentral",
  description:
    "Shop genuine spare parts for all car brands at best prices in US  at PartsCentral. OEM quality, fast delivery, and perfect fit for every make and model. Order now",
  keywords:
    "car spare parts, car service parts, auto parts, automobile accessories, car accessories, car parts online, buy car parts, auto parts online, vehicle accessories, genuine car parts, car parts store, car parts for sale, car repair parts, aftermarket car parts, engine parts, brake parts, car maintenance, auto parts supplier, buy auto parts online, vehicle spare parts, car parts shop, discount car parts, replacement car parts, car body parts, car parts and accessories, spare parts online, car spare parts dealer, car spare online, car spare parts, auto repair parts, quality auto parts, OEM auto parts, auto parts near me, cheap car parts, used car parts for sale",
  //   viewport: {
  //     width: "device-width",
  //     initialScale: 1.0,
  //     maximumScale: 1.0,
  //     userScalable: false,
  //   },
};

export function getMetadataForPath(pathname: string): Metadata {
  return metadataMap[pathname] || defaultMetadata;
}

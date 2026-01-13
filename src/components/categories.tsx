import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import ShopByVehicle from "./shopByVehicle";

const categories = [
  {
    src: "/categories_section/engine.png",
    alt: "Engine",
    link: "/engine",
  },
  {
    src: "/categories_section/transmission.png",
    alt: "Transmission",
    link: "/transmission",
  },
  {
    src: "/categories_section/axel.png",
    alt: "Axle Assembly",
    link: "/parts/axle/axel-shaft",
  },
  {
    src: "/categories_section/transfer-case.png",
    alt: "Transfer Case",
    link: "/parts/transmission/transfer-case",
  },
  {
    src: "/categories_section/head-light.png",
    alt: "Headlight",
    link: "/parts/lights/headlight",
  },
  {
    src: "/categories_section/tail-light.png",
    alt: "Tail Light",
    link: "/parts/lights/tail-light",
  },
];

type CategoryCardProps = {
  src: string;
  alt: string;
  link: string;
  fullWidth?: boolean;
};

export default function CategoriesSection() {
  return (
    <>
      {/* <ShopByVehicle/> */}
      <section className="w-full bg-[#091b33] flex flex-col items-center justify-center px-2 md:py-1 md:px-6 lg:py-10 ">
        <div className="w-full max-w-[1200px]">
          {/* <h2 className="font-audiowide text-white text-2xl sm:text-4xl mt-4 mb-6 tracking-wide uppercase text-left w-full">
          featured categories
        </h2> */}
          <h1
            className="font-audiowide text-white text-lg sm:text-4xl mt-8 md:mt-20 mb-6 md:mb-10 tracking-wide uppercase text-left w-full"
            style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            featured categories
          </h1>
          <div
            className="grid grid-cols-2 gap-2 md:grid-cols-4 md:grid-rows-2 md:gap-x-2 md:gap-y-0 w-full max-w-[1200px]"
            style={{ minHeight: "460px" }}
          >
            {/* First two images side by side */}
            <CategoryCard {...categories[0]} fullWidth={false} />
            <CategoryCard {...categories[1]} fullWidth={false} />
            {/* Full width image */}
            <CategoryCard {...categories[2]} fullWidth={true} />
            {/* Full width image */}
            <CategoryCard {...categories[3]} fullWidth={true} />
            {/* Last two images side by side */}
            <CategoryCard {...categories[4]} fullWidth={false} />
            <CategoryCard {...categories[5]} fullWidth={false} />
          </div>
        </div>
      </section>
    </>
  );
}

function CategoryCard({
  src,
  alt,
  link,
  fullWidth = false,
}: CategoryCardProps) {
  return (
    <div
      className={
        `relative w-full h-[120px] sm:h-[180px] md:h-[220px] rounded-lg overflow-hidden ` +
        (fullWidth ? "col-span-2 md:col-span-2" : "col-span-1")
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover w-full h-full"
        sizes="(max-width: 768px) 100vw, 25vw"
        priority={alt === "Engine"}
      />
      <div className="absolute inset-0 flex flex-col justify-start items-end p-3 bg-gradient-to-t from-black/60 via-black/10 to-transparent">
        <span className="text-white text-base sm:text-lg md:text-xl font-bold mb-2 drop-shadow uppercase">
          {alt}
        </span>
        <Link href={link}>
          <button className="bg-[#00A3FF] text-white  rounded-md py-2 px-6 text-xs sm:text-sm hover:bg-[#0086cc] transition cursor-pointer">
            Go shop
          </button>
        </Link>
      </div>
    </div>
  );
}

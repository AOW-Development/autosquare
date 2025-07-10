import Image from "next/image";

const categories = [
  {
    src: "/categories_section/engine.png",
    alt: "Engine",
  },
  {
    src: "/categories_section/transmission.png",
    alt: "Transmission",
  },
  {
    src: "/categories_section/axel.png",
    alt: "Axle Assembly",
  },
  {
    src: "/categories_section/transfer-case.png",
    alt: "Transfer Case",
  },
  {
    src: "/categories_section/head-light.png",
    alt: "Headlight",
  },
  {
    src: "/categories_section/tail-light.png",
    alt: "Tail Light",
  },
];

type CategoryCardProps = {
  src: string;
  alt: string;
  fullWidth?: boolean;
};

export default function CategoriesSection() {
  return (
    <section className="w-full bg-[#091b33] flex flex-col items-center justify-center px-2 py-6">
      <div className="w-full max-w-[1200px]">
        {/* <h2 className="font-audiowide text-white text-2xl sm:text-4xl mt-4 mb-6 tracking-wide uppercase text-left w-full">
          featured categories
        </h2> */}
        <h1
          className="font-audiowide text-white text-2xl sm:text-4xl mt-10 md:mt-6 mb-6 tracking-wide uppercase text-left w-full"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          featured categories
        </h1>
        <div
          className="grid grid-cols-2 gap-2 md:grid-cols-4 md:grid-rows-2 md:gap-x-2 md:gap-y-0 w-full max-w-[1200px]"
          style={{ minHeight: "684px" }}
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
  );
}

function CategoryCard({ src, alt, fullWidth = false }: CategoryCardProps) {
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
        <button className="bg-[#00A3FF] text-white font-semibold rounded-md py-2 px-6 text-xs sm:text-sm hover:bg-[#0086cc] transition">
          Go shop
        </button>
      </div>
    </div>
  );
}

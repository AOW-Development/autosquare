import Image from "next/image";

const categories = [
  {
    src: "/categories_section/engine.png",
    alt: "Engine",
    width: 282,
    height: 284,
    gridClass: "col-span-1 row-span-1",
  },
  {
    src: "/categories_section/transmission.png",
    alt: "Transmission",
    width: 282,
    height: 284,
    gridClass: "col-span-1 row-span-1",
  },
  {
    src: "/categories_section/axel.png",
    alt: "Axel",
    width: 588,
    height: 284,
    gridClass: "col-span-2 row-span-1",
  },
  {
    src: "/categories_section/transfer-case.png",
    alt: "Transfer Case",
    width: 588,
    height: 284,
    gridClass: "col-span-2 row-span-1",
  },
  {
    src: "/categories_section/head-light.png",
    alt: "Head Light",
    width: 282,
    height: 284,
    gridClass: "col-span-1 row-span-1",
  },
  {
    src: "/categories_section/tail-light.png",
    alt: "Tail Light",
    width: 282,
    height: 284,
    gridClass: "col-span-1 row-span-1",
  },
];

export default function CategoriesSection() {
  return (
    <section className="w-full pb-6 pt-16 md:py-14 bg-[#091b33] flex flex-col items-center justify-center px-4">
      <div className="justify-center">
        <h2
          className="font-audiowide text-white text-xl sm:text-3xl md:text-4xl mt-4 mb-4 sm:mt-6 sm:mb-6 tracking-wide uppercase text-left w-full whitespace-nowrap"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          featured categories
        </h2>
        <div
          className="
            w-full max-w-[1200px]
            grid grid-cols-2 grid-rows-4 gap-x-4 gap-y-2
            md:grid-cols-4 md:grid-rows-2 md:gap-x-2 md:gap-y-0
            pt-4  md:p-0
          "
          // style={{ height: "684px" }}
        >
          {/* Mobile: First two images in a row */}
          <div className="flex items-center justify-center p-1 rounded-2xl">
            <Image
              src={categories[0].src}
              alt={categories[0].alt}
              width={282}
              height={284}
            />
          </div>
          <div className="flex items-center justify-center p-1 rounded-2xl">
            <Image
              src={categories[1].src}
              alt={categories[1].alt}
              width={282}
              height={284}
            />
          </div>
          {/* Mobile: Next two images one by one */}
          <div className="col-span-2 flex items-center justify-center  p-1">
            <Image
              src={categories[2].src}
              alt={categories[2].alt}
              width={588}
              height={284}
            />
          </div>
          <div className="col-span-2 flex items-center justify-center p-1">
            <Image
              src={categories[3].src}
              alt={categories[3].alt}
              width={588}
              height={284}
            />
          </div>
          {/* Mobile: Last two images in a row */}
          <div className="flex items-center justify-center p-2">
            <Image
              src={categories[4].src}
              alt={categories[4].alt}
              width={282}
              height={284}
            />
          </div>
          <div className="flex items-center justify-center p-2">
            <Image
              src={categories[5].src}
              alt={categories[5].alt}
              width={282}
              height={284}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

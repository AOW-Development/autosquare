import { getMetadataForPath } from "@/utils/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DATA } from "@/data/data";

type SlagPageProps = {
  params: Promise<{
    slag: string;
  }>;
};

// Optionally, you can export metadata for static generation if needed
export async function generateMetadata({
  params,
}: SlagPageProps): Promise<Metadata> {
  // Await params before accessing its properties
  const { slag } = await params;
  // Prepend slash to match the keys in metadataMap
  const path = `/${slag}`;
  return getMetadataForPath(path);
}

export default async function SlagPage({ params }: SlagPageProps) {
  const { slag } = await params;
  //   const DATA = [
  //     {
  //       url: "used-engines-and-transmissions-for-sale-near-me-in-united-states",
  //       content:
  //         "Looking for the best place to buy used engines and transmissions.",
  //     },
  //   ];
  const data = DATA.find((item) => item.url === slag);

  return (
    <>
      {data ? (
        <div className="mt-0 pt-0">
          <div className="w-full h-[160px] sm:h-[240px] md:h-[320px] relative">
            <Image
              src="/seoBanner.png"
              alt="Account Banner"
              fill
              style={{ objectFit: "cover" }}
              priority
              quality={100}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1
                className="text-white text-2xl sm:text-3xl md:text-4xl font-bold  px-4 py-2"
                style={{
                  textTransform: "capitalize",
                  letterSpacing: "0.03em",
                }}
              >
                {data?.url.replace(/-/g, " ") || "Page not found"}
              </h1>
            </div>
          </div>

          <div className="min-h-screen bg-[#091B33] text-white flex flex-col md:flex-row gap-0 md:gap-8 p-4 lg:p-8">
            {/* <div className="md:w-1/4">
        <Sidebar activeKey="" />
      </div> */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-base text-white mb-6 px-2 sm:px-4 md:px-0">
                  <Link
                    href="/"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Image
                      src="/account/HouseLine.png"
                      alt="Home"
                      width={24}
                      height={24}
                    />
                    <Image
                      src="/autoparts/arrows (1).png"
                      alt="Arrow"
                      width={16}
                      height={16}
                    />
                  </Link>
                  {/* <span>&gt;</span> */}
                  <span>
                    {data?.url.replace(/-/g, " ") || "Page not found"}
                  </span>
                </div>

                <main className="flex flex-col gap-2">
                  {/* WHO ARE WE? Section */}
                  <section>
                    {/* <h2
                  className="text-xl md:text-[32px] font-semibold uppercase"
                  style={{
                    fontFamily: "Audiowide, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  WHO ARE WE?
                </h2> */}
                    <div className="flex flex-col md:flex-row items-start">
                      <div className="flex-1">
                        <div className="text-base text-gray-200 leading-relaxed mt-4 text-[16px] justify-left whitespace-pre-line">
                          {data?.content || "Page not found"}
                        </div>
                      </div>
                      {/*
                  Key changes for mobile responsiveness:
                  - Removed the global -mt-48.
                  - Added mt-4 for mobile to provide some space below the text.
                  - Added md:-mt-48 to apply the negative margin ONLY on desktop (md breakpoint and above).
                  - Added md:relative and md:z-10 to ensure desktop positioning.
                  - Removed z-10 and relative from the mobile view, as they are not needed and can sometimes cause issues when not carefully managed.
                */}
                      <div className="flex-1 flex justify-center md:justify-center mt-4 md:-mt-48 md:z-10 md:relative">
                        <Image
                          src="/Images/car.png"
                          alt="Car"
                          width={490}
                          height={410}
                          className="rounded-2xl w-full h-auto max-w-[400px] md:max-w-none" /* Added w-full h-auto for mobile scaling, and max-w- to control size on mobile */
                        />
                      </div>
                    </div>
                  </section>
                </main>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A1A2F] text-white">
          <Image
            src="/404.png"
            alt="404 Not Found"
            width={996}
            height={456}
            style={{ maxWidth: "90vw", height: "auto" }}
            priority
          />
          <div className="mt-8 text-center">
            <h1 className="text-2xl font-bold mb-2 uppercase">
              Page not found
            </h1>
            <Link href="/" className="text-sky-400 hover:underline text-lg">
              Go Home
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

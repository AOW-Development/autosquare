import Image from "next/image";

// interface Product {
//   modelYear?: {
//     model?: {
//       make?: { name?: string };
//       name?: string;
//     };
//     year?: { value?: string | number };
//   };
//   partType?: { name?: string };
//   miles?: string | number;
//   status?: string;
//   warranty?: string;
// }
interface SubPart {
  id: number;
  name: string;
  // add more fields if needed
}
interface Product {
  sku?: string;
  subParts?: SubPart[];
  modelYear?: {
    model?: {
      make?: { name?: string };
      name?: string;
    };
    year?: { value?: string };
  };
  partType?: { name?: string };
  inStock?: boolean;
  discountedPrice?: number;
  actualprice?: number;
  // add more fields if needed
}

interface ProductSectionProps {
  product: Product;
  make: string;
  model: string;
  year: string;
  part: string;
}

export default function ProductSection({ product, make, model, year, part }: ProductSectionProps) {
  const productDetails = [
    { label: "Make", value: make || "-" },
    { label: "Model", value: model || "-" },
    { label: "Year", value: year || "-" },
    { label: "Part", value: part || "-" },
    // { label: "Miles", value: product?.miles || "-" },
    { label: "Genuine", value: "Genuine Used Part" },
    // { label: "Condition", value: product?.status ? product.status : "N/A" },
    // { label: "Warranty", value: product?.warranty ? product.warranty : "N/A" },
  ];

  const featuredProducts = Array(4).fill({
    title: "Engine assembly",
    desc: "Ford bronco 1991\n4.9L\nGenuine Used Part\nA Grade Condition\n110k miles\n90 Days Warranty",
    price: "100$",
    img: "/pro/cards.png",
  });

  const viewedProduct = {
    title: "Engine assembly",
    desc: "Ford bronco 1991\n4.9L\nGenuine Used Part\nA Grade Condition\n110k miles\n90 Days Warranty",
    price: "100$",
    img: "/pro/cards.png",
  };

  return (
    <section className="bg-[#091b33] text-white w-full py-8 md:py-2 lg:py-2 px-2 flex flex-col gap-12">
      {/* Top Table */}
      {/* <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xl font-bold mb-4">DESCRIPTION</h2>
        <div
          className="border border-[#00a3ff] rounded-md overflow-hidden"
          style={{ borderWidth: 1 }}
        >
          <table className="w-full border-separate border-spacing-y-0">
            <tbody>
              {productDetails.map((row, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 1 ? "bg-black" : "bg-[#091b33]"
                  } text-white`}
                >
                  <td
                    className="py-2 px-4 text-sm w-32 text-white border-l border-t border-b"
                    style={{
                      borderColor: "rgba(0,163,255,0.4)", // lighter blue, more transparent
                      borderWidth: "0.5px 0 0.5px 0.5px",
                    }}
                  >
                    {row.label}
                  </td>
                  <td
                    className="py-2 px-4 text-sm border-r border-t border-b"
                    style={{
                      borderColor: "rgba(0,163,255,0.4)",
                      borderWidth: "0.5px 0.5px 0.5px 0",
                    }}
                  >
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}

      {/* Featured Products */}
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-between mb-6 md:px-4">
          <h2 className="text-2xl font-bold">FEATURED PRODUCTS</h2>
          <div className="grid grid-col-1 md:grid-col-1 lg:grid-col-2 gap-2">
            <button className="p-2">
              <span className="text-2xl">&#60;</span>
            </button>
            <button className="p-2">
              <span className="text-2xl">&#62;</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:px-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((prod, i) => {
            // Parse desc for fields
            const [vehicle, specs, condition, grade, miles, warranty] =
              prod.desc.split("\n");
            return (
              <div
                key={i}
                className="bg-[#0C2A4D] p-4 rounded-lg shadow-md hover:scale-[1.02] transition-all relative overflow-hidden"
              >
                <div
                  className="relative mx-auto mb-3 flex justify-center items-center rounded-md"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(12, 42, 77, 0) 70%, transparent 100%)",
                    width: "250px",
                    height: "160px",
                  }}
                >
                  <Image
                    src="/catalog/Engine 1.png"
                    alt="Engine"
                    width={250}
                    height={160}
                    className="relative z-10 rounded-md object-contain"
                    priority
                  />
                  <p className="absolute bottom-2 right-2 text-xs text-gray-400 z-20">
                    Stock image
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10 rounded-b-lg"></div>
                <div className="relative z-20 pt-2">
                  <h3 className="text-white text-base mb-1">{prod.title}</h3>
                  <p className="text-sm text-gray-300 mb-1">{vehicle}</p>
                  <p className="text-xs text-gray-400 mb-1">{specs}</p>
                  <p className="text-xs text-gray-400 mb-1">{condition}</p>
                  <p className="text-xs text-gray-400 mb-1">{grade}</p>
                  <p className="text-xs text-gray-400 mb-1">{miles}</p>
                  <p className="text-xs text-gray-400 mb-2">{warranty}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xl font-bold text-white">
                      {prod.price}
                    </span>
                    <button className="bg-sky-600 hover:bg-sky-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* You Have Viewed */}
      <div className="max-w-6xl mx-auto w-full mt-12">
        <h2 className="text-2xl font-bold mb-6 md:px-4">YOU HAVE VIEWED</h2>
        <div className="flex flex-wrap gap-6 md:px-4">
          {/* Only one card for viewedProduct, but use same card style */}
          {(() => {
            const [vehicle, specs, condition, grade, miles, warranty] =
              viewedProduct.desc.split("\n");
            return (
              <div className="bg-[#0C2A4D] p-4 rounded-lg shadow-md hover:scale-[1.02] transition-all relative overflow-hidden w-full md:max-w-xs">
                <div
                  className="relative mx-auto mb-3 flex justify-center items-center rounded-md"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(12, 42, 77, 0) 70%, transparent 100%)",
                    width: "250px",
                    height: "160px",
                  }}
                >
                  <Image
                    src="/catalog/Engine 1.png"
                    alt="Engine"
                    width={250}
                    height={160}
                    className="relative z-10 rounded-md object-contain"
                    priority
                  />
                  <p className="absolute bottom-2 right-2 text-xs text-gray-400 z-20">
                    Stock image
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10 rounded-b-lg"></div>
                <div className="relative z-20 pt-2">
                  <h3 className="text-white text-base mb-1">
                    {viewedProduct.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-1">{vehicle}</p>
                  <p className="text-xs text-gray-400 mb-1">{specs}</p>
                  <p className="text-xs text-gray-400 mb-1">{condition}</p>
                  <p className="text-xs text-gray-400 mb-1">{grade}</p>
                  <p className="text-xs text-gray-400 mb-1">{miles}</p>
                  <p className="text-xs text-gray-400 mb-2">{warranty}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xl font-bold text-white">
                      {viewedProduct.price}
                    </span>
                    <button className="bg-sky-600 hover:bg-sky-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
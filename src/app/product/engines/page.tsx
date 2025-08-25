"use client"
import ProductSection from "@/components/productSection"
import ShopByVehicle from "@/components/shopByVehicle"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import AddedCartPopup from "@/app/account/modal/AddedCartPopup/AddedCartPopup"
import { redirect, useSearchParams } from "next/navigation"
import { useCartStore } from "@/store/cartStore"
import PartRequestPopup from "@/components/partRequestPopup"
import { useRouter } from "next/navigation";
import Loading from "@/app/loading"



// export default function PageLayout({ children }: { children: React.ReactNode }) {
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     // Simulate async loading if needed, or set ready when mounted
//     const timer = setTimeout(() => {
//       setIsReady(true);
//     }, 500); // small delay to ensure everything mounts
//     return () => clearTimeout(timer);
//   }, []);

//   if (!isReady) {
//     return <Loading />;
//   }



interface SubPart {
  id: number
  name: string
}

interface Product {
  sku: string
  subParts: SubPart[]
  modelYear?: {
    model?: {
      make?: { name?: string }
      name?: string
    }
    year?: { value?: string }
  }
  partType?: { name?: string }
  inStock?: boolean
  discountedPrice?: number
  actualprice?: number
}

// const productInfo = { make: "", model: "", year: "", part: "" }

const galleryImages = ["/Images/var.png", "/Images/main.png", "/Images/var.png"]



interface SubPart {
  id: number
  name: string
}

interface Product {
  sku: string
  subParts: SubPart[]
  modelYear?: {
    model?: {
      make?: { name?: string }
      name?: string
    }
    year?: { value?: string }
  }
  partType?: { name?: string }
  inStock?: boolean
  discountedPrice?: number
  actualprice?: number
}

export default function EngineProductPage() {
  const [productInfo, setProductInfo] = useState({ make: "", model: "", year: "", part: "" })
  const [selectedImg, setSelectedImg] = useState(1)
  const [isLoading,setIsLoading]=useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [allSubParts, setAllSubParts] = useState<SubPart[]>([])
  const [allVariants, setAllVariants] = useState<any[]>([])
  const [groupedVariants, setGroupedVariants] = useState<any[]>([])
  const [selectedSubPartId, setSelectedSubPartId] = useState<number | null>(null)
  const [selectedMilesSku, setSelectedMilesSku] = useState<string>("")
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null)
  const [activeTab, setActiveTab] = useState(0)
  const [showCartPopup, setShowCartPopup] = useState(false)
  const [inCart, setInCart] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const searchParams = useSearchParams()
  const make = searchParams.get("make")
  const model = searchParams.get("model")
  const year = searchParams.get("year")
  const part = searchParams.get("part")
  const sku = searchParams.get("sku")
  const API_BASE = process.env.NEXT_PUBLIC_API_URL
  const addItem = useCartStore((s) => s.addItem)
  const [showPopup, setShowPopup] = useState(false)
  const router = useRouter();
    useEffect(() => {
    if (showPopup) {
      // Save scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [showPopup]);

  const handleBuyNow = () => {
  if (!selectedProduct) return;
  
  const clear = useCartStore.getState().clear;
  const addItem = useCartStore.getState().addItem;

  // Clear the cart first
  clear();

  // Add the selected product
  addItem({
    id: selectedProduct.sku,
    name: `${selectedProduct.make || ""} ${selectedProduct.model || ""} ${selectedProduct.year || ""} ${selectedProduct.part || ""}`.trim(),
    title: `${selectedProduct.make || ""} ${selectedProduct.model || ""} ${selectedProduct.year || ""} ${selectedProduct.part || ""}`.trim(),
    subtitle: selectedProduct.sku,
    image: selectedProduct.product?.images?.[0] || "/Images/default-engine.png",
    price: selectedProduct.discountedPrice ?? selectedProduct.actualprice ?? 0,
    quantity
  });

  // Redirect to pay method page
  router.push("/account/payMethod");
};
const accordionData = [
  {
    title: "DESCRIPTION",
    content: (
      <>
        <p>
          This {productInfo.make} {productInfo.model} {productInfo.part} is{" "}
          {productInfo.year ? `from ${productInfo.year} ` : ""}models. Each engine is tested and ready to install and
          offers improved performance.
        </p>
        <br />
        <p>
          This Unit is perfect for anyone in the market for reliable used engines that will offer superior results - a
          great addition to any repair project!
        </p>
        <br />
        <p>
          The {productInfo.make} {productInfo.model} {productInfo.part} comes with all the Major accessories such as:
        </p>
        <ul>
          <li>Intake Manifold</li>
          <li>Exhaust Manifold</li>
          <li>Crankshaft</li>
          <li>Camshaft</li>
          <li>Pistons</li>
          <li>Cylinder Head</li>
          <li>Timing Cover</li>
        </ul>
        <p>The Bolt Parts like the A/C Compressor, Starter Motor, and Alternator need to be replaced/swapped.</p>
        <br />
        {/* <p>
          The {productInfo.make} {productInfo.model} {productInfo.part} can be used as a direct replacement for any of
          the following vehicles:
        </p> */}

      </>
    ),
 
  },
  {
    title: "WARRANTY & REFUNDS",
    content:
      "You may return any item in its original condition for a full refund within 30 days of receipt of your shipment, less shipping charges. It typically takes us approximately 3-5 business days to process a credit back to your account and 2-3 business days for the credit to appear on your account.\n\nEngine warranties are limited to manufacturing defects in the block, heads, pistons, crankshafts, camshafts, rockers, and oil pumps.",
  },
  {
    title: "SHIPPING",
    content: "Standard shipping 3-5 business days. Expedited options available at checkout. Tracking provided.",
  },
  {
    title: "PAYMENT",
    content:<>
    <div className="flex space-x-[8px]">
                {/* <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer"> */}
                  <Image
                    src="/Images/home/visa-inverted_82058.png"
                    alt="Visa"
                    width={48}
                    height={30}
                    className="bg-[#1E2A44] object-contain"
                  />
                {/* </a> */}
                {/* <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer"> */}
                  <Image
                    src="/Images/home/mastercard_82049.png"
                    alt="Mastercard"
                    width={48}
                    height={30}
                    className="bg-[#1E2A44] object-contain"
                  />
                {/* </a> */}
                {/* <a href="https://www.americanexpress.com" target="_blank" rel="noopener noreferrer"> */}
                  <Image
                    src="/Images/home/americanexpress_82060 1.png"
                    alt="Amex"
                    width={48}
                    height={30}
                    className="bg-[#1E2A44] object-contain"
                  />
                {/* </a> */}
                {/* <a href="https://www.discover.com" target="_blank" rel="noopener noreferrer"> */}
                  <Image
                    src="/Images/home/discover_82082.png"
                    alt="Discover"
                    width={48}
                    height={30}
                    className="bg-[#1E2A44] object-contain"
                  />
                {/* </a> */}
              </div>
    </>,
  },
]

  useEffect(() => {
    if (!make || !model || !year || !part) return
    setIsLoading(true)
    fetch(`${API_BASE}/products/v2/grouped-with-subparts?make=${make}&model=${model}&year=${year}&part=${part}`)
      .then((res) => res.json())
      .then((data) => {
        const variants: any[] = []
        if (data.groupedVariants) {
          data.groupedVariants.forEach((group: any) => {
            group.variants.forEach((variant: any) => {
              variants.push({
                ...variant,
                make: data.make,
                model: data.model,
                year: data.year,
                part: data.part,
                subPart: group.subPart,
                product: variant.product || group.product || null,
              })
            })
          })
        }
        setAllVariants(variants)
        setGroupedVariants(data.groupedVariants || [])
        setProductInfo({
          make: data.make || "",
          model: data.model || "",
          year: data.year || "",
          part: data.part || "",
        })

        let defaultGroup, defaultVariant
        if (sku) {
          for (const group of data.groupedVariants) {
            const variant = group.variants.find((v: any) => v.sku === sku)
            if (variant) {
              defaultGroup = group
              defaultVariant = variant
              break
            }
          }
        }
        if (!defaultVariant && data.groupedVariants && data.groupedVariants.length > 0) {
          defaultGroup = data.groupedVariants[0]
          defaultVariant = defaultGroup.variants[0]
        }
        if (defaultGroup && defaultVariant) {
          setSelectedSubPartId(defaultGroup.subPart.id)
          setSelectedMilesSku(defaultVariant.sku)
          setSelectedProduct(defaultVariant)
        }
      })
      setIsLoading(false)
  }, [make, model, year, part, sku, API_BASE])

  useEffect(() => {
    if (!selectedSubPartId || !selectedMilesSku || groupedVariants.length === 0) return
    const group = groupedVariants.find((g: any) => g.subPart.id === selectedSubPartId)
    if (group) {
      const variant = group.variants.find((v: any) => v.sku === selectedMilesSku)
      if (variant) {
        setSelectedProduct({
          ...variant,
          make: group.make,
          model: group.model,
          year: group.year,
          part: group.part,
        })
      } else {
        setSelectedProduct(null)
      }
    }
  }, [selectedSubPartId, selectedMilesSku, groupedVariants])

  const handleAddToCart = () => {
    if (!selectedProduct) return
    const price = selectedProduct.discountedPrice ?? selectedProduct.actualprice ?? 0
    addItem({
      id: selectedProduct.sku,
      name: `${selectedProduct.make || ""} ${selectedProduct.model || ""} ${
        selectedProduct.year || ""
      } ${selectedProduct.part || ""}`.trim(),
      title: `${selectedProduct.make || ""} ${selectedProduct.model || ""} ${
        selectedProduct.year || ""
      } ${selectedProduct.part || ""}`.trim(),
      subtitle: selectedProduct.sku,
      image:
        selectedProduct.product?.images && selectedProduct.product.images.length > 0
          ? selectedProduct.product.images[0]
          : "/Images/default-engine.png",
      price,
      quantity,
    })
    setShowCartPopup(true)
    setInCart(true)
    setTimeout(() => setShowCartPopup(false), 3000)
  }

  return (
    <>
      {showCartPopup && selectedProduct && (
        <AddedCartPopup
          title={`${selectedProduct.sku || ""}`}
          price={selectedProduct.discountedPrice ?? selectedProduct.actualprice ?? 0}
          image={
            selectedProduct.product?.images && selectedProduct.product.images.length > 0
              ? selectedProduct.product.images[0]
              : "/Images/default-engine.png"
          }
        />
      )}

      {/* Breadcrumb */}
      <div className="w-full bg-[#091b33] overflow-hidden">
        <div className="max-w-6xl mx-auto md:mx-16 lg:mx-20 px-4 flex items-start gap-2 py-6 text-[#0F1E35] text-[15px] font-medium">
          <Link href="/" className="flex items-center">
            <Image src="/engine/HouseLine.png" alt="Home" width={20} height={20} />
          </Link>
          <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
          <Link href="/autoParts" className="text-gray-500 hover:underline">
            AutoParts
          </Link>
          <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
          <Link href="/engine" className="text-gray-500 hover:underline">
            Engine
          </Link>
          <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
          <span className="text-white">Engines</span>
        </div>
      </div>

      {/* Shop by Vehicle */}
      <div className="w-full bg-[#091b33]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="pt-18 pb-4">
            <ShopByVehicle />
          </div>
        </div>
      </div>

      {/* Main Product Section */}
      
      {isLoading?(
      <div className="w-full bg-[#091b33] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8 py-0 md:py-6 lg:py-8">
<div className="flex h-screen flex-col justify-center items-center md:flex-row  gap-1 md:gap-8  pt-0 md lg:pt-10">


        <h1 className="text-2xl animate-bounce transition-all">Loading...</h1>
</div>

        </div>
      </div>):
      
      (<div className="w-full bg-[#091b33] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8 py-0 md:py-6 lg:py-8">
          <div className="flex flex-col md:flex-row  gap-1 md:gap-8 items-start pt-0 md lg:pt-10">
            {/* Left: Image */}
            <div className="flex justify-center lg:justify-start pt-4 md:pt-8">
              <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-[#12263A] rounded-lg flex flex-col items-center justify-center">
                <Image
                  src={galleryImages[selectedImg] || "/placeholder.svg"}
                  alt="main"
                  fill
                  className="object-contain py-4 px-8 md:p-4"
                />
                <span className="absolute bottom-2 right-2 text-xs text-gray-300">*Stock image</span>
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="flex flex-col gap-4 pt-4 md:pt-8 lg:pl-1 w-full lg:w-[80%]">
              <h1
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-audiowide font-bold tracking-wide uppercase leading-tight"
                style={{
                  fontFamily: "Audiowide, sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                {productInfo.year || productInfo.make || productInfo.model || productInfo.part
                  ? `${productInfo.year} ${productInfo.make} ${productInfo.model} Used ${productInfo.part}`
                      .replace(/\s+/g, " ")
                      .trim()
                  : "ENGINE ASSEMBLY"}
              </h1>

              <div className="text-sm sm:text-base text-gray-400 font-semibold">
                Option: {groupedVariants.find((g) => g.subPart.id === selectedSubPartId)?.subPart.name || "-"}
              </div>

              {/* Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              <select
                value={selectedSubPartId ?? ""}
                onChange={(e) => {
                  const subPartId = Number(e.target.value);
                  setSelectedSubPartId(subPartId);
                  const group = groupedVariants.find((g: any) => g.subPart.id === subPartId);
                  if (group && group.variants.length > 0) {
                    const inStockVariant = group.variants.find((v: any) => v.inStock);
                    const fallbackVariant = group.variants[0];
                    const variant = inStockVariant || fallbackVariant;
                    setSelectedMilesSku(variant.sku);
                    setSelectedProduct(variant);
                  }
                }}
                className="
                  bg-[#12263A] text-white rounded border border-blue-400
                  text-base sm:text-sm md:text-base
                  py-3 px-4 sm:py-2 sm:px-3
                  w-full sm:w-auto
                "
              >
                <option value="">Select Specification</option>
                {groupedVariants.map((group: any) => (
                  <option key={group.subPart.id} value={group.subPart.id}>
                    {group.subPart.name}
                  </option>
                ))}
              </select>

              {selectedProduct?.inStock && (
                <select
                  value={selectedMilesSku}
                  onChange={(e) => setSelectedMilesSku(e.target.value)}
                  className="
                    bg-[#12263A] text-white rounded border border-blue-400
                    text-base sm:text-sm md:text-base
                    py-3 px-4 sm:py-2 sm:px-3
                    w-full sm:w-auto
                  "
                >
                  <option value="">Select Miles</option>
                  {groupedVariants
                    .find((g: any) => g.subPart.id === selectedSubPartId)
                    ?.variants.map((variant: any) => (
                      <option key={variant.sku} value={variant.sku}>
                        {variant.miles}
                      </option>
                    ))}
                </select>
              )}
            </div>


              {/* Availability */}
              <div className="text-sm text-white mb-2">
                Availability:{" "}
                <span className="text-gray-400">
                  {selectedProduct?.inStock === undefined ? "" : selectedProduct.inStock ? "In stock" : "Out of stock"}
                </span>
              </div>

              {/* Price and Actions */}
              {selectedProduct?.inStock ? (
                <>
                  <div className="flex items-end gap-4 mb-4">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
                      $
                      {selectedProduct?.discountedPrice
                        ? `${selectedProduct.discountedPrice}`
                        : selectedProduct?.actualprice
                          ? `${selectedProduct.actualprice}`
                          : "N/A"}
                    </span>
                    {selectedProduct?.actualprice &&
                      selectedProduct.discountedPrice &&
                      selectedProduct.actualprice !== selectedProduct.discountedPrice && (
                        <span className="text-lg sm:text-xl md:text-2xl text-gray-400 line-through">
                          ${selectedProduct.actualprice}
                        </span>
                      )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      className={`flex-1 py-3 px-4 rounded transition mb-4 md:mb-0 text-sm sm:text-base ${
                        inCart ? "bg-[#1d3759] text-white cursor-default" : "bg-[#00a3ff] text-white hover:bg-[#1558b0]"
                      }`}
                      disabled={inCart}
                      onClick={handleAddToCart}
                    >
                      Add to cart
                    </button>
                    <button
                      onClick={handleBuyNow}
                      className="flex-1 cursor-pointer bg-[#00a3ff] text-white py-3 px-4 md:mb-0 rounded border border-sky-400 hover:bg-[#1558b0] transition text-sm sm:text-base mb-8"
                    >
                      Buy in one click
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowPopup(true)}
                    className="bg-sky-500 hover:bg-yellow-600 text-white text-sm px-4 py-3  rounded-md transition-colors w-full sm:w-auto"
                  >
                    Part Request
                  </button>
                  {showPopup && <PartRequestPopup setClosePopup={setShowPopup} />}
                </>
              )}
            </div>
          </div>
        </div>
      </div>)}

      {/* Tabs Section */}
      <div className="w-full bg-[#091b33] text-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:px-20 md:-mx-8 lg:mx-60 md:py-4 lg:py-6 pb-0">
          {/* Tabs container */}
          <div className="flex overflow-x-auto no-scrollbar border-b border-gray-700">
            {accordionData.map((item, i) => (
              <button
                key={i}
                className={`py-3 px-4 sm:px-6 text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap focus:outline-none ${
                  activeTab === i ? "border-b-2 border-white text-white" : "text-gray-400"
                }`}
                onClick={() => setActiveTab(i)}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Content container */}
          <div className="py-0 text-gray-300 text-sm sm:text-base lg:text-lg whitespace-pre-line justify-left align-left  leading-relaxed break-words">
            {accordionData[activeTab].content}
          </div>
        </div>
          <div className="w-full py-8 sm:py-12 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-2 lg:px-8">
              <div className="text-left md:px-10">
                {/* Main heading */}
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2 sm:mb-8">
                  Talk To An <span className="font-extrabold">Expert</span>
                </h2>

                {/* Action buttons */}
                <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 items-center mb-6 sm:mb-8">
                  <button className="bg-[#00a3ff] hover:bg-[#1558b0] text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-md transition-colors duration-200 min-w-[110px] text-sm sm:text-base">
                    EMAIL US
                  </button>
                  <button className="bg-[#00a3ff] hover:bg-[#1558b0] text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-md transition-colors duration-200 min-w-[110px] text-sm sm:text-base">
                    CALL NOW
                  </button>
                </div>

                {/* Rating information */}
                <div className="flex flex-col gap-3 text-white ">
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base">
                    <span>
                      Rated <span className="font-semibold text-white">4.6</span> out of 5 based on
                    </span>
                    <Image
                      src="/GoogleMain.png"
                      alt="Google"
                      width={60}
                      height={20}
                      className="h-4 sm:h-5  w-6"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base">
                    <span>
                      Rated <span className="font-semibold text-white">4.1</span> out of 5 based on
                    </span>
                    <div className="flex items-center gap-1">
                      
                     
                      <Image
                        src="/trustpilotMain.png"
                        alt="Trustpilot"
                        width={80}
                        height={20}
                        className="h-8 sm:h-5 w-30"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>


      {/* Product Section */}
      {selectedProduct && (
        <ProductSection
          product={selectedProduct}
          make={selectedProduct.make}
          model={selectedProduct.model}
          year={selectedProduct.year}
          part={selectedProduct.part}
        />
      )}
    </>
  )
}

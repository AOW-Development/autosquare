"use client";
import ProductSection from "@/components/productSection";
import ShopByVehicle from "@/components/shopByVehicle";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import AddedCartPopup from "@/app/account/modal/AddedCartPopup/AddedCartPopup";
import { useSearchParams } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import PartRequestPopup from "@/components/partRequestPopup";
import { useRouter } from "next/navigation";
import { VerifyPartPopup } from "@/components/fitment";

interface SubPart {
  id: number;
  name: string;
}

interface Product {
  sku: string;
  subParts: SubPart[];
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
}

const galleryImages = [
  "/Images/var.png",
  "/Images/main.png",
  "/Images/var.png",
];

export default function EngineProductClient() {
  const [productInfo, setProductInfo] = useState({
    make: "",
    model: "",
    year: "",
    part: "",
  });
  const [selectedImg, setSelectedImg] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [allSubParts, setAllSubParts] = useState<SubPart[]>([]);
  const [allVariants, setAllVariants] = useState<any[]>([]);
  const [groupedVariants, setGroupedVariants] = useState<any[]>([]);
  const [selectedSubPartId, setSelectedSubPartId] = useState<number | null>(
    null
  );
  const [selectedMilesSku, setSelectedMilesSku] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const searchParams = useSearchParams();
  const make = searchParams.get("make");
  const model = searchParams.get("model");
  const year = searchParams.get("year");
  const part = searchParams.get("part");
  const sku = searchParams.get("sku");
  const API_BASE = process.env.NEXT_PUBLIC_API_URL;
  const addItem = useCartStore((s) => s.addItem);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const [isVerifyPopupOpen, setIsVerifyPopupOpen] = useState(false);
  const [selectedProductForVerify, setSelectedProductForVerify] = useState<
    any | null
  >(null);
 const [mediaUrls, setMediaUrls] = useState<string[]>([]);
 const [mediaLoading, setMediaLoading] = useState<boolean>(false);
 
 const [imageLoaded, setImageLoaded] = useState<boolean>(false);
useEffect(() => {
    if (showPopup) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, Number.parseInt(scrollY || "0") * -1);
    }
  }, [showPopup]);

  const handleBuyNow = () => {
    if (!selectedProduct) return;

    const clear = useCartStore.getState().clear;
    const addItem = useCartStore.getState().addItem;

    clear();

    addItem({
      id: selectedProduct.sku,
      name: `${selectedProduct.make || ""} ${selectedProduct.model || ""} ${
        selectedProduct.year || ""
      } ${selectedProduct.part || ""}`.trim(),
      title:
        selectedProduct.title ||
        `${selectedProduct.make || ""} ${selectedProduct.model || ""} ${
          selectedProduct.year || ""
        } ${selectedProduct.part || ""}`.trim(),
      subtitle:
        selectedProduct.specification + " " + selectedProduct.miles ||
        selectedProduct.sku,
      image:
        selectedProduct.product?.images &&
        selectedProduct.product.images.length > 0
          ? selectedProduct.product.images[0]
          : selectedProduct.part === "Engine"
          ? "/catalog/Engine 1.png"
          : "/catalog/Trasmission_.png",
      price:
        selectedProduct.discountedPrice ?? selectedProduct.actualprice ?? 0,
      quantity,
    });

    // router.push("/account/payMethod?buyInOneClick=true")
    window.location.href = "/account/payMethod?buyInOneClick=true";
  };

  const accordionData = [
    {
      title: "DESCRIPTION",
      content: (
        <>
          <p>
            This {productInfo.make} {productInfo.model} {productInfo.part} is{" "}
            {productInfo.year ? `from ${productInfo.year} ` : ""}models. Each{" "}
            {productInfo.part} is tested and ready to install and offers
            improved performance.
          </p>
          <br />
          <p>
            This Unit is perfect for anyone in the market for reliable used{" "}
            {productInfo.part} that will offer superior results - a great
            addition to any repair project!
          </p>
          <br />
          <br />
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
      content:
        "Standard shipping 3-5 business days. Expedited options available at checkout. Tracking provided.",
    },
    {
      title: "PAYMENT",
      content: (
        <>
          <div className="flex space-x-[8px]">
            <Image
              src="/Images/home/visa-inverted_82058.png"
              alt="Visa"
              width={48}
              height={30}
              className="bg-[#1E2A44] object-contain"
            />
            <Image
              src="/Images/home/mastercard_82049.png"
              alt="Mastercard"
              width={48}
              height={30}
              className="bg-[#1E2A44] object-contain"
            />
            <Image
              src="/Images/home/americanexpress_82060 1.png"
              alt="Amex"
              width={48}
              height={30}
              className="bg-[#1E2A44] object-contain"
            />
            <Image
              src="/Images/home/discover_82082.png"
              alt="Discover"
              width={48}
              height={30}
              className="bg-[#1E2A44] object-contain"
            />
          </div>
        </>
      ),
    },
  ];

  useEffect(() => {
    if (!make || !model || !year || !part) return;
    setIsLoading(true);
    fetch(
      `${API_BASE}/products/v2/grouped-with-subparts?make=${make}&model=${model}&year=${year}&part=${part}`
    )
      .then((res) => res.json())
      .then((data) => {
        const variants: any[] = [];
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
                title: variant.title,
                seoTitle: variant.seoTitle,
                seoSlug: variant.seoSlug,
                seoCanonical: variant.seoCanonical,
                seoDescription: variant.seoDescription,
                warranty: variant.warranty,
                media: (variant.product?.media) || [],
                description: variant.description,
              });
            });
          });
        }
        setAllVariants(variants);
        setGroupedVariants(data.groupedVariants || []);
        setProductInfo({
          make: data.make || "",
          model: data.model || "",
          year: data.year || "",
          part: data.part || "",
        });

        let defaultGroup, defaultVariant;
        if (sku) {
          for (const group of data.groupedVariants) {
            const variant = group.variants.find((v: any) => v.sku === sku);
            if (variant) {
              defaultGroup = group;
              defaultVariant = variant;
              break;
            }
          }
        }
        if (
          !defaultVariant &&
          data.groupedVariants &&
          data.groupedVariants.length > 0
        ) {
          defaultGroup = data.groupedVariants[0];
          defaultVariant = defaultGroup.variants[0];
        }
        if (defaultGroup && defaultVariant) {
          setSelectedSubPartId(defaultGroup.subPart.id);
          setSelectedMilesSku(defaultVariant.sku);
          setSelectedProduct(defaultVariant);
        }
      })
      .finally(() => setIsLoading(false));
  }, [make, model, year, part, sku, API_BASE]);

  useEffect(() => {
    if (!selectedProduct?.media?.length) {
      setMediaUrls([]);
      setMediaLoading(false);
      setImageLoaded(false);
      return;
    }

    setMediaLoading(true);
    setImageLoaded(false);
    (async() => {
      try {
        const urls = await Promise.all(
          (selectedProduct.media as string []).map((key) => getPresignedUrl(key))
        );
        setMediaUrls(urls);
        
      } catch (error) {
        console.error("Error fetching media URLs:", error);
        setMediaUrls([]);
      }finally {
        setMediaLoading(false);
      }
  })();

  }, [selectedProduct]);


  const getPresignedUrl = async (key: string): Promise<string> => {
  //   GET /api/s3/presigned?key=<url‑encoded-key>
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/presigned-url/${encodeURIComponent(
      key
    )}`
  );
  if (!res.ok) throw new Error(`Presign failed for ${key}`);
  const data = await res.json();               // { url: string }
  return data.url;
};


  useEffect(() => {
    if (!selectedSubPartId || !selectedMilesSku || groupedVariants.length === 0)
      return;
    const group = groupedVariants.find(
      (g: any) => g.subPart.id === selectedSubPartId
    );
    if (group) {
      const variant = group.variants.find(
        (v: any) => v.sku === selectedMilesSku
      );
      if (variant) {
        setSelectedProduct({
          ...variant,
          make: productInfo.make || make,
          model: productInfo.model || model,
          year: productInfo.year || year,
          part: productInfo.part || part,
        });
      } else {
        setSelectedProduct(null);
      }
    }
  }, [
    selectedSubPartId,
    selectedMilesSku,
    groupedVariants,
    productInfo,
    make,
    model,
    year,
    part,
  ]);

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    const selectedGroup = groupedVariants.find(
      (g) => g.subPart.id === selectedSubPartId
    );
    if (!selectedGroup) return;

    setSelectedProductForVerify({
      ...selectedProduct,
      subPart: selectedGroup.subPart,
    });
    setIsVerifyPopupOpen(true);
  };

  const handleAddToCartAndRedirect = (product: any, quantity = 1) => {
    const price = product.discountedPrice ?? product.actualprice ?? 0;

    addItem({
      id: product.sku,
      name: `${product.year || ""} ${product.make || ""} ${
        product.model || ""
      } ${product.part || ""}`.trim(),
      //title: `${product.year || ""} ${product.make || ""} ${product.model || ""} ${product.part || ""}`.trim(),
      title: product.title,
      subtitle: product.specification + " " + product.miles,
      image:
        product.product?.images && product.product.images.length > 0
          ? product.product.images[0]
          : product.part === "Engine"
          ? "/catalog/Engine 1.png"
          : "/catalog/Trasmission_.png",
      price,
      quantity,
    });

    setShowCartPopup(true);
    setInCart(true);

    setTimeout(() => {
      setIsVerifyPopupOpen(false);
      setSelectedProductForVerify(null);
      setShowCartPopup(false);
      router.push("/account/cart");
      window.location.href = `/account/cart?make=${selectedProduct.make}&model=${selectedProduct.model}&year=${selectedProduct.year}&part=${selectedProduct.part}`;
    }, 100);
  };


  useEffect(() => {
  if (!selectedProduct) return;

  // Ensure dataLayer exists
  (window as any).dataLayer = (window as any).dataLayer || [];

  (window as any).dataLayer.push({
    event: "product_view", // or "view_item" if using GA4 standard
    ecommerce: {
      items: [
        {
          item_id: selectedProduct.sku,
          item_name:
            selectedProduct.title ||
            `${selectedProduct.make || ""} ${selectedProduct.model || ""} ${
              selectedProduct.year || ""
            } ${selectedProduct.part || ""}`.trim(),
          item_url: window.location.href,
          price:
            selectedProduct.discountedPrice ??
            selectedProduct.actualprice ??
            0,
          item_category: selectedProduct.part || "",
          item_category2:
            groupedVariants.find(
              (g) => g.subPart.id === selectedSubPartId
            )?.subPart?.name || "",
        },
      ],
    },
  });
}, [selectedProduct]);


  return (
    <>
    <style jsx>{
          `.spinner {
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid #fff;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 0.8s linear infinite;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          }
          @keyframes spin {
            to { transform: rotate(360deg) translate(-50%, -50%); }
          }`
      }</style>
      {showCartPopup && selectedProduct && (
        <AddedCartPopup
          title={`${selectedProduct.sku || ""}`}
          price={
            selectedProduct.discountedPrice ?? selectedProduct.actualprice ?? 0
          }
          image={
            selectedProduct.product?.images &&
            selectedProduct.product.images.length > 0
              ? selectedProduct.product.images[0]
              : selectedProduct.part === "Engine"
              ? "/catalog/Engine 1.png"
              : "/catalog/Trasmission_.png"
          }
        />
      )}

      <div className="w-full bg-[#091b33] overflow-hidden">
        <div className="max-w-6xl mx-auto md:mx-16 lg:mx-20 px-4 flex items-start gap-2 py-6 text-[#0F1E35] text-[15px] font-medium">
          <Link href="/" className="flex items-center">
            <Image
              src="/engine/HouseLine.png"
              alt="Home"
              width={20}
              height={20}
            />
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

      <div className="w-full bg-[#091b33]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="pt-18 pb-4">
            <ShopByVehicle />
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="w-full bg-[#091b33] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8 py-0 md:py-6 lg:py-8">
            <div className="flex h-screen flex-col justify-center items-center md:flex-row gap-1 md:gap-8 pt-0 md lg:pt-10">
              <h1 className="text-2xl animate-bounce transition-all">
                Loading...
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full bg-[#091b33] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8 py-0 md:py-6 lg:py-8">
            <div className="flex flex-col md:flex-row gap-1 md:gap-8 items-start pt-0 md lg:pt-10">
              <div className="flex justify-center lg:justify-start pt-4 md:pt-8">
                <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-[#12263A] rounded-lg flex flex-col items-center justify-center">
                  { mediaUrls.length > 0 ? (
                    <>
                      <Image
                        src={mediaUrls[0]}
                        alt={`${selectedProduct?.title || part } image`}
                        width={250}
                        height={160}
                        className={`object-contain py-4 px-8 md:p-4 md:w-80 md:h-300 lg:w-100 lg:h-350 
                          ${imageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}
                        priority
                        onLoadingComplete={() => setImageLoaded(true)}
                        
                      />  
                      <span className="absolute bottom-2 right-2 text-xs text-gray-300">
                          *Stock image
                      </span>
                    </>
                  
                  ) : part === "Engine" ? (
                    <>
                      <Image
                        src="/catalog/Engine 1.png"
                        alt="Engine"
                        width={250}
                        height={160}
                        className="object-contain py-4 px-8 md:p-4 md:w-80 md:h-300 lg:w-100 lg:h-350"
                        priority
                      />
                      <span className="absolute bottom-2 right-2 text-xs text-gray-300">
                        *Stock image
                      </span>
                    </>
                  ) : part === "Transmission" ? (
                    <>
                      <Image
                        src="/catalog/Trasmission_.png"
                        alt="Engine"
                        width={250}
                        height={160}
                        className="object-contain py-4 px-8 md:p-4 md:w-80 md:h-300 lg:w-100 lg:h-350"
                        priority
                      />
                      <span className="absolute bottom-2 right-2 text-xs text-gray-300">
                        *Stock image
                      </span>
                    </>
                  ) : null}
                   {(mediaLoading || (mediaUrls.length > 0 && !imageLoaded)) && (
                    <div className="spinner" />
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-4 md:pt-8 lg:pl-1 w-full lg:w-[80%]">
                <h1
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-audiowide font-bold tracking-wide uppercase leading-tight"
                  style={{
                    fontFamily: "Audiowide, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                  >
                  {/* {productInfo.year ||
                  productInfo.make ||
                  productInfo.model ||
                  productInfo.part
                    ? `${productInfo.year} ${productInfo.make} ${productInfo.model} Used ${productInfo.part}`
                        .replace(/\s+/g, " ")
                        .trim()
                    : "ENGINE ASSEMBLY"} */}
                    {(selectedProduct?.title ??
                      `${productInfo.year || ""} ${productInfo.make || ""} ${productInfo.model || ""} Used ${productInfo.part || ""}`).replace(/\s+/g, " ").trim() || "ENGINE ASSEMBLY"}
                </h1>

                <div className="text-sm sm:text-base text-gray-400 font-semibold">
                  Option:{" "}
                  {groupedVariants.find(
                    (g) => g.subPart.id === selectedSubPartId
                  )?.subPart.name || "-"}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  <select
                    value={selectedSubPartId ?? ""}
                    onChange={(e) => {
                      const subPartId = Number(e.target.value);
                      setSelectedSubPartId(subPartId);
                      const group = groupedVariants.find(
                        (g: any) => g.subPart.id === subPartId
                      );
                      if (group && group.variants.length > 0) {
                        const inStockVariant = group.variants.find(
                          (v: any) => v.inStock
                        );
                        const fallbackVariant = group.variants[0];
                        const variant = inStockVariant || fallbackVariant;
                        setSelectedMilesSku(variant.sku);
                        setSelectedProduct(variant);
                      }
                    }}
                    className="bg-[#12263A] text-white rounded border border-blue-400 text-base sm:text-sm md:text-base py-3 px-4 sm:py-2 sm:px-3 w-full sm:w-auto"
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
                      className="bg-[#12263A] text-white rounded border border-blue-400 text-base sm:text-sm md:text-base py-3 px-4 sm:py-2 sm:px-3 w-full sm:w-auto"
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

                <div className="text-sm text-white mb-2">
                  Availability:{" "}
                  <span className="text-gray-400">
                    {selectedProduct?.inStock === undefined
                      ? ""
                      : selectedProduct.inStock
                      ? "In stock"
                      : "Out of stock"}
                  </span>
                </div>

                {selectedProduct?.inStock ? (
                  <>
                    <div className="flex items-end gap-4 mb-4">
                      <span className="product-price text-2xl sm:text-3xl md:text-4xl font-bold">
                        $
                        {selectedProduct?.discountedPrice
                          ? `${selectedProduct.discountedPrice}`
                          : selectedProduct?.actualprice
                          ? `${selectedProduct.actualprice}`
                          : "N/A"}
                      </span>
                      {selectedProduct?.actualprice &&
                        selectedProduct.discountedPrice &&
                        selectedProduct.actualprice !==
                          selectedProduct.discountedPrice && (
                          <span className="text-lg sm:text-xl md:text-2xl text-gray-400 line-through">
                            ${selectedProduct.actualprice}
                          </span>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        className={`flex-1 py-3 px-4 rounded transition mb-4 md:mb-0 text-sm sm:text-base ${
                          inCart
                            ? "bg-[#1d3759] text-white cursor-default"
                            : "bg-[#00a3ff] text-white hover:bg-[#1558b0]"
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
                      className="bg-sky-500 hover:bg-yellow-600 text-white text-sm px-4 py-3 rounded-md transition-colors w-full sm:w-auto"
                    >
                      Part Request
                    </button>
                    {showPopup && (
                      <PartRequestPopup setClosePopup={setShowPopup} />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full bg-[#091b33] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:px-20 md:-mx-8 lg:mx-60 md:py-4 lg:py-6 pb-0">
          <div className="flex overflow-x-auto no-scrollbar border-b border-gray-700">
            {accordionData.map((item, i) => (
              <button
                key={i}
                className={`py-3 px-4 sm:px-6 text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap focus:outline-none ${
                  activeTab === i
                    ? "border-b-2 border-white text-white"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab(i)}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="py-0 text-gray-300 text-sm sm:text-base lg:text-lg whitespace-pre-line justify-left align-left leading-relaxed break-words">
            {/* {accordionData[activeTab].content} */}
             {activeTab === 0 ? (
            <div className="py-0 text-gray-300 text-sm sm:text-base lg:text-lg whitespace-pre-line justify-left align-left leading-relaxed break-words">
              {selectedProduct?.description || accordionData[0].content}
            </div>
          ) : (
            <div className="py-0 text-gray-300 text-sm sm:text-base lg:text-lg whitespace-pre-line justify-left align-left leading-relaxed break-words">
              {accordionData[activeTab].content}
            </div>
          )}
          </div>
        </div>
        <div className="w-full py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-2 lg:px-8">
            <div className="text-left md:px-10">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2 sm:mb-8">
                Talk To An <span className="font-extrabold">Expert</span>
              </h2>

              <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 items-center mb-6 sm:mb-8">
                <a
                  href="mailto:support@partscentral.us"
                  className="bg-[#00a3ff] hover:bg-[#1558b0] text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-md transition-colors duration-200 min-w-[110px] text-sm sm:text-base text-center"
                >
                  EMAIL US
                </a>
                <a
                  href="tel:+18883382540"
                  className="bg-[#00a3ff] hover:bg-[#1558b0] text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-md transition-colors duration-200 min-w-[110px] text-sm sm:text-base text-center"
                >
                  CALL NOW
                </a>
              </div>

              <div className="flex flex-col gap-3 text-white">
                {/* Google Rating */}
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-lg">
                  <span>
                    Rated <span className="font-semibold">4.6</span> out of 5
                    based on
                  </span>
                  <Image
                    src="/google.jpg"
                    alt="Google"
                    width={120} // natural width
                    height={36} // natural height
                    className="h-6 sm:h-6 md:h-12 lg:h-8 w-auto" // responsive larger heights
                  />
                </div>

                {/* Trustpilot Rating */}
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-lg">
                  <span>
                    Rated <span className="font-semibold">4.1</span> out of 5
                    based on
                  </span>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/ts.webp"
                      alt="Trustpilot"
                      width={300} // natural width
                      height={100} // natural height
                      className="h-20 sm:h-18 md:h-20 lg:h-29 w-auto lg:w-[150px]" // responsive larger heights
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VerifyPartPopup
        isOpen={isVerifyPopupOpen}
        onClose={() => {
          setIsVerifyPopupOpen(false);
          setSelectedProductForVerify(null);
        }}
        make={make || ""}
        model={model || ""}
        year={year || ""}
        part={part || ""}
        subPartsList={groupedVariants.map((g) => g.subPart) || []}
        selectedProduct={selectedProductForVerify}
        onConfirm={() => {
          if (selectedProductForVerify) {
            handleAddToCartAndRedirect(selectedProductForVerify, quantity);
          }
        }}
        vinNumber=""
      />

      {selectedProduct && (
        <ProductSection
          product={selectedProduct}
          make={selectedProduct.make ?? undefined}
          model={selectedProduct.model ?? undefined}
          year={selectedProduct.year ?? undefined}
          part={selectedProduct.part ?? undefined}
          // seoDescription= {selectedProduct.seoDescription ?? undefined }
        />
      )}
    </>
  );
}














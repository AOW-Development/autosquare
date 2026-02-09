"use client";
import ProductSection from "@/components/productSection";
import ShopByVehicle from "@/components/shopByVehicle";
import Image from "next/image";
import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import AddedCartPopup from "@/app/account/modal/AddedCartPopup/AddedCartPopup";
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
 
interface EngineProductClientProps {
  initialItem?: string;
  initialData?: any;
  setSku?: string;
  setModal?: string;
  specification?: string;
  miles?: string;
}
 
export default function EngineProductClient({
  initialItem,
  initialData,
  setSku,
  setModal,
  specification,
  miles,
}: EngineProductClientProps) {
  const router = useRouter();
  const addItem = useCartStore((s) => s.addItem);
  const items = useCartStore((s) => s.items);
 
  // Initialize state
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [productInfo, setProductInfo] = useState({
    make: initialData?.make || "",
    model: initialData?.model || "",
    year: initialData?.year || "",
    part: initialData?.part || "",
  });
  const [selectedImg, setSelectedImg] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [allSubParts, setAllSubParts] = useState<SubPart[]>([]);
  const [allVariants, setAllVariants] = useState<any[]>([]);
  const [groupedVariants, setGroupedVariants] = useState<any[]>(
    initialData?.groupedVariants || [],
  );
 
  const [selectedSubPartId, setSelectedSubPartId] = useState<number | null>(
    null,
  );
  const [selectedMilesSku, setSelectedMilesSku] = useState<string>("");
 
  const [activeTab, setActiveTab] = useState(0);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [isVerifyPopupOpen, setIsVerifyPopupOpen] = useState(false);
  const [selectedProductForVerify, setSelectedProductForVerify] = useState<
    any | null
  >(null);
  const [mediaUrls, setMediaUrls] = useState<string[]>([]);
  const [mediaLoading, setMediaLoading] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
 
  const initialLoadRef = useRef(false);
 
  // Check if product is in cart
  const inCart = useMemo(() => {
    return items.some((item) => item.id === selectedProduct?.sku);
  }, [items, selectedProduct?.sku]);
 
  // Get product info from initialData
  const make = initialData?.make;
  const model = initialData?.model;
  const year = initialData?.year;
  const part = initialData?.part;
  const sku = setSku;
 
  // Helper function to format model for URL
  const formatModelForUrl = (modelStr: string | undefined) => {
    if (!modelStr) return "";
    return modelStr
      .replace(/[ ,()./]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase();
  };
 
  // Get initial product from server data
  const getInitialProduct = () => {
    if (!initialData?.groupedVariants?.length) {
      return null;
    }
 
    let targetGroup = null;
    let targetVariant = null;
 
    // Try to match by SKU first
    if (setSku) {
      for (const group of initialData.groupedVariants) {
        const variant = group.variants.find((v: any) => v.sku === setSku);
        if (variant) {
          targetGroup = group;
          targetVariant = variant;
          break;
        }
      }
    }
 
    // If SKU not found, try to match by specification and miles from URL
    if (!targetVariant && specification) {
      const normalizeSpec = (spec: string) =>
        spec.toLowerCase().replace(/[^a-z0-9]/g, "");
      const specNormalized = normalizeSpec(specification);
 
      for (const group of initialData.groupedVariants) {
        const groupSpec = group.subPart?.name || "";
        const groupNormalized = normalizeSpec(groupSpec);
 
        if (
          groupNormalized.includes(specNormalized) ||
          specNormalized.includes(groupNormalized)
        ) {
          targetGroup = group;
 
          // Try to match miles
          if (miles) {
            const milesNormalized = miles
              .toLowerCase()
              .replace(/[^a-z0-9]/g, "");
            targetVariant = group.variants.find((v: any) => {
              const variantMiles =
                v.miles
                  ?.toString()
                  .toLowerCase()
                  .replace(/[^a-z0-9]/g, "") || "";
              return variantMiles === milesNormalized;
            });
          }
 
          // If no miles match, use first variant
          if (!targetVariant) {
            targetVariant =
              group.variants.find((v: any) => v.inStock) || group.variants[0];
          }
          break;
        }
      }
    }
 
    // Fallback to first available
    if (!targetVariant && initialData.groupedVariants.length > 0) {
      targetGroup = initialData.groupedVariants[0];
      targetVariant =
        targetGroup.variants.find((v: any) => v.inStock) ||
        targetGroup.variants[0];
    }
 
    if (targetVariant && targetGroup) {
      return {
        ...targetVariant,
        make: initialData.make,
        model: initialData.model,
        year: initialData.year,
        part: initialData.part,
        subPart: targetGroup.subPart,
        title:
          targetVariant.title ||
          `${initialData.year || ""} ${initialData.make || ""} ${initialData.model || ""}${initialData.model ? ", " : ""} ${initialData.part === "Engine" ? "Used Engine" : "Used Transmission"}`.trim(),
      };
    }
 
    return null;
  };
 
  // Initialize product from server data
  useEffect(() => {
    if (initialLoadRef.current || !initialData?.groupedVariants?.length) return;
 
    console.log("Initializing from server data");
    initialLoadRef.current = true;
 
    // Build all variants array
    const variants: any[] = [];
    initialData.groupedVariants.forEach((group: any) => {
      group.variants.forEach((variant: any) => {
        variants.push({
          ...variant,
          make: initialData.make,
          model: initialData.model,
          year: initialData.year,
          part: initialData.part,
          subPart: group.subPart,
          product: variant.product || group.product || null,
          title: variant.title,
          seoTitle: variant.seoTitle,
          seoSlug: variant.seoSlug,
          seoCanonical: variant.seoCanonical,
          seoDescription: variant.seoDescription,
          warranty: variant.warranty,
          media: variant.product?.media || [],
          description: variant.description,
        });
      });
    });
 
    setAllVariants(variants);
    setGroupedVariants(initialData.groupedVariants || []);
    setProductInfo({
      make: initialData.make || "",
      model: initialData.model || "",
      year: initialData.year || "",
      part: initialData.part || "",
    });
 
    // Get initial product
    const initialProduct = getInitialProduct();
    if (initialProduct) {
      setSelectedProduct(initialProduct);
      setSelectedSubPartId(
        initialProduct.subPart?.id ||
          initialData.groupedVariants[0]?.subPart?.id ||
          null,
      );
      setSelectedMilesSku(
        initialProduct.sku ||
          initialData.groupedVariants[0]?.variants?.[0]?.sku ||
          "",
      );
    }
 
    setIsLoading(false);
  }, [initialData, setSku, specification, miles]);
 
  // Update URL when selection changes
  const updateProductUrl = (variant: any, subPartName: string) => {
    if (!variant || !subPartName) return;
 
    const milesValue = variant.miles?.toString().replace(/[^\d]/g, "") || "n-a";
    const spec = subPartName
      .replace(/[ ,()./"';:]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase();
 
    const modelSlug = formatModelForUrl(model);
 
    const newUrl =
      `/product/${year}-${make}-${modelSlug}-${part}-${spec}${milesValue ? `-${milesValue}` : ""}`.toLowerCase();
 
    router.replace(newUrl, { scroll: false });
  };
 
  // Handle popup scroll locking
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
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [showPopup]);
 
  // Handle buy now
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
        (selectedProduct.specification || "") +
          " " +
          (selectedProduct.miles || "") || selectedProduct.sku,
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
 
    window.location.href = "/account/pay-method?buyInOneClick=true";
  };
 
  // Accordion data
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
        "Returns are accepted within 15 days of delivery, provided the item is in its original condition and return authorization has been approved. Approved refunds are issued to the original payment method after the returned item is received and inspected. Refund processing typically takes 3–5 business days.\n\nReturns for non-defective items may be subject to a restocking fee of up to 30%. Shipping charges are non-refundable unless the return is due to a defective or incorrectly supplied part.\n\nWe provide a 90-day limited warranty on engines, transmissions, and eligible OEM parts. Warranty coverage applies only to manufacturing defects in covered internal components under normal use and installation. Warranty does not cover labor costs, improper installation, misuse, or external components.",
    },
    {
      title: "SHIPPING",
      content:
        "We offer free standard shipping within the continental United States. Orders are typically processed and delivered within 7–9 business days. Tracking information is provided once the order has shipped.\n\nOrders outside the continental United States, including Alaska, Hawaii, and Puerto Rico, may be subject to additional shipping charges. Delivery timelines may vary depending on product availability and shipping location.",
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
              src="/Images/home/americanexpress_82060.png"
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
 
  // FIXED: Correct out of stock logic
  // The issue was that `isTrulyOutOfStock` was incorrectly checking `miles === 'n-a'`
  // This should be based on the product's actual stock status, not the URL parameter
  const isOutOfStock = useMemo(() => {
    if (!selectedProduct) return true;
    return !selectedProduct.inStock;
  }, [selectedProduct]);
 
  // Get presigned URL for media
  const getPresignedUrl = async (key: string): Promise<string> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/presigned-url/${encodeURIComponent(key)}`,
      );
      if (!res.ok) throw new Error(`Presign failed for ${key}`);
      const data = await res.json();
      return data.url;
    } catch (error) {
      console.error("Error getting presigned URL:", error);
      return "";
    }
  };
 
  // Load media URLs
  useEffect(() => {
    if (!selectedProduct?.media?.length) {
      setMediaUrls([]);
      setMediaLoading(false);
      setImageLoaded(false);
      return;
    }
 
    setMediaLoading(true);
    setImageLoaded(false);
 
    (async () => {
      try {
        const urls = await Promise.all(
          (selectedProduct.media as string[]).map((key) =>
            getPresignedUrl(key),
          ),
        );
        setMediaUrls(urls.filter((url) => url)); // Filter out empty URLs
      } catch (error) {
        console.error("Error fetching media URLs:", error);
        setMediaUrls([]);
      } finally {
        setMediaLoading(false);
      }
    })();
  }, [selectedProduct]);
 
  // Update selected product when dropdowns change
  useEffect(() => {
    if (
      !selectedSubPartId ||
      !selectedMilesSku ||
      groupedVariants.length === 0
    ) {
      return;
    }
 
    const group = groupedVariants.find(
      (g: any) => g.subPart.id === selectedSubPartId,
    );
 
    if (group) {
      const variant = group.variants.find(
        (v: any) => v.sku === selectedMilesSku,
      );
 
      if (variant) {
        const newProduct = {
          ...variant,
          make: productInfo.make || make,
          model: productInfo.model || model,
          year: productInfo.year || year,
          part: productInfo.part || part,
          subPart: group.subPart,
        };
        setSelectedProduct(newProduct);
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
 
  // Track product view in dataLayer
  useEffect(() => {
    if (!selectedProduct) return;
 
    const dataLayer = (window as any).dataLayer || [];
    dataLayer.push({
      event: "product_view",
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
              groupedVariants.find((g) => g.subPart.id === selectedSubPartId)
                ?.subPart?.name || "",
          },
        ],
      },
    });
  }, [selectedProduct, selectedSubPartId, groupedVariants]);
 
  // Helper to clean miles display
  const cleanMiles = (m: any) => m?.toString().replace(/[^\d]/g, "") || "";
 
  // Handle add to cart
  const handleAddToCart = () => {
    if (!selectedProduct) return;
 
    const selectedGroup = groupedVariants.find(
      (g) => g.subPart.id === selectedSubPartId,
    );
 
    if (!selectedGroup) return;
 
    setSelectedProductForVerify({
      ...selectedProduct,
      subPart: selectedGroup.subPart,
    });
    setIsVerifyPopupOpen(true);
  };
 
  // Handle add to cart and redirect
  const handleAddToCartAndRedirect = (product: any, quantity = 1) => {
    const price = product.discountedPrice ?? product.actualprice ?? 0;
 
    addItem({
      id: product.sku,
      name: `${product.year || ""} ${product.make || ""} ${
        product.model || ""
      } ${product.part || ""}`.trim(),
      title: product.title,
      subtitle: (product.specification || "") + " " + (product.miles || ""),
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
 
    setTimeout(() => {
      setIsVerifyPopupOpen(false);
      setSelectedProductForVerify(null);
      setShowCartPopup(false);
      window.location.href = `/account/cart?make=${product.make}&model=${product.model}&year=${product.year}&part=${product.part}`;
    }, 100);
  };
 
  // Show loading if no selected product and still loading
  const shouldShowLoading = !selectedProduct && isLoading;
 
  return (
    <>
      <style jsx>{`
        .spinner {
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
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
 
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
 
      {shouldShowLoading ? (
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
                  {mediaUrls.length > 0 ? (
                    <>
                      <a
                        href={mediaUrls[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                        style={{ display: "contents" }}
                      >
                        <Image
                          src={mediaUrls[0]}
                          alt={`${selectedProduct?.title || part} image`}
                          width={250}
                          height={160}
                          className={`object-contain py-4 px-8 md:p-4 md:w-80 md:h-300 lg:w-100 lg:h-350
                            ${
                              imageLoaded ? "opacity-100" : "opacity-0"
                            } transition-opacity duration-200`}
                          priority
                          onLoadingComplete={() => setImageLoaded(true)}
                        />
                      </a>
                      <span className="absolute bottom-2 right-2 text-xs text-gray-300 pointer-events-none z-10">
                       Image shown is for reference only. Actual product may vary.
                      </span>
                    </>
                  ) : part === "Engine" || part == "engine" ? (
                    <>
                      <a
                        href="https://s3.us-east-1.amazonaws.com/partscentral.us/public/engine-1.png"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                        style={{ display: "contents" }}
                      >
                        <Image
                          src="https://s3.us-east-1.amazonaws.com/partscentral.us/public/engine-1.png"
                          alt="Engine"
                          width={250}
                          height={160}
                          className="object-contain py-4 px-8 md:p-4 md:w-80 md:h-300 lg:w-100 lg:h-350"
                          priority
                        />
                      </a>
                      <span className="absolute bottom-2 right-2 text-xs text-gray-300 pointer-events-none z-10">
                        Image shown is for reference only. Actual product may vary.
                      </span>
                    </>
                  ) : part === "Transmission" || part == "transmission" ? (
                    <>
                      <a
                        href="https://s3.us-east-1.amazonaws.com/partscentral.us/Trasmission_.png"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                        style={{ display: "contents" }}
                      >
                        <Image
                          src="https://s3.us-east-1.amazonaws.com/partscentral.us/Trasmission_.png"
                          alt="Transmission"
                          width={250}
                          height={160}
                          className="object-contain py-4 px-8 md:p-4 md:w-80 md:h-300 lg:w-100 lg:h-350"
                          priority
                        />
                      </a>
                      <span className="absolute bottom-2 right-2 text-xs text-gray-300 pointer-events-none z-10">
                        Image shown is for reference only. Actual product may vary.
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
                  {(() => {
                    const year =
                      selectedProduct?.year || productInfo.year || "";
                    const make =
                      selectedProduct?.make || productInfo.make || "";
                    const model =
                      selectedProduct?.model || productInfo.model || "";
                    const part = (
                      selectedProduct?.part ||
                      productInfo.part ||
                      ""
                    ).toLowerCase();
 
                    const partName = part.includes("engine")
                      ? "Engine"
                      : "Transmission";
                    return `${year} ${make} ${model} Used ${partName}`.trim();
                  })()}
                </h1>
 
                <div className="text-sm sm:text-base text-gray-400 font-semibold">
                  options:{" "}
                  {groupedVariants.find(
                    (g) => g.subPart.id === selectedSubPartId,
                  )?.subPart.name || "Select a specification"}
                </div>
 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  <select
                    value={selectedSubPartId || ""}
                    onChange={(e) => {
                      const subPartId = Number(e.target.value);
                      setSelectedSubPartId(subPartId);
 
                      const group = groupedVariants.find(
                        (g: any) => g.subPart.id === subPartId,
                      );
 
                      if (group && group.variants.length > 0) {
                        const variant =
                          group.variants.find((v: any) => v.inStock) ||
                          group.variants[0];
 
                        setSelectedMilesSku(variant.sku);
                        setSelectedProduct({
                          ...variant,
                          make: productInfo.make,
                          model: productInfo.model,
                          year: productInfo.year,
                          part: productInfo.part,
                          subPart: group.subPart,
                          title: (() => {
                            const p = productInfo.part?.toLowerCase() || "";
                            const partName = p.includes("engine")
                              ? "Engine"
                              : "Transmission";
                            return `${productInfo.year} ${productInfo.make} ${productInfo.model} Used ${partName}`.trim();
                          })(),
                        });
 
                        updateProductUrl(variant, group.subPart.name);
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
 
                  <select
                    value={selectedMilesSku}
                    onChange={(e) => {
                      const sku = e.target.value;
                      setSelectedMilesSku(sku);
 
                      const group = groupedVariants.find(
                        (g: any) => g.subPart.id === selectedSubPartId,
                      );
 
                      if (group) {
                        const variant = group.variants.find(
                          (v: any) => v.sku === sku,
                        );
 
                        if (variant) {
                          setSelectedProduct({
                            ...variant,
                            make: productInfo.make,
                            model: productInfo.model,
                            year: productInfo.year,
                            part: productInfo.part,
                            subPart: group.subPart,
                            title: (() => {
                              const p = productInfo.part?.toLowerCase() || "";
                              const partName = p.includes("engine")
                                ? "Engine"
                                : "Transmission";
                              return `${productInfo.year} ${productInfo.make} ${productInfo.model} Used ${partName}`.trim();
                            })(),
                          });
 
                          updateProductUrl(variant, group.subPart.name);
                        }
                      }
                    }}
                    className="bg-[#12263A] text-white rounded border border-blue-400 text-base sm:text-sm md:text-base py-3 px-4 sm:py-2 sm:px-3 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!selectedSubPartId}
                  >
                    <option value="">
                      {selectedSubPartId
                        ? "Select Miles"
                        : "Select specification first"}
                    </option>
 
                    {selectedSubPartId &&
                      groupedVariants
                        .find((g: any) => g.subPart.id === selectedSubPartId)
                        ?.variants.map((variant: any) => (
                          <option key={variant.sku} value={variant.sku}>
                            {cleanMiles(variant.miles)} miles
                          </option>
                        ))}
                  </select>
                </div>
 
                <div className="flex flex-row gap-2 mt-4 mb-6">
                  <div className="text-sm sm:text-base text-white">
                    Availability:{" "}
                    <span className="text-gray-400">
                      {selectedProduct?.inStock === undefined
                        ? "Select options"
                        : selectedProduct.inStock
                          ? "In stock"
                          : "Out of stock"}
                    </span>
                  </div>
                  <div className="text-sm sm:text-base text-white">
                    Condition: <span className="text-gray-400">Used</span>
                  </div>
                </div>
 
                {/* FIXED: Simplified condition - only show Part Request if product is actually out of stock */}
                {isOutOfStock ? (
  <>
    <div className="flex flex-col sm:flex-row gap-3 w-full">

      {/* Part Request Button */}
      <button
        onClick={() => setShowPopup(true)}
        className="flex-1 bg-[#00a3ff] hover:bg-[#1558b0] text-white py-3 px-4 rounded transition text-sm sm:text-base"
      >
        Part Request
      </button>

      {/* Call Us Button */}
      <a
        href="tel:+18883382540"
        className="flex-1 text-center bg-[#00a3ff] text-white py-3 px-4 rounded border border-sky-400 hover:bg-[#1558b0] transition text-sm sm:text-base flex items-center justify-center"
      >
        Call Us
      </a>

    </div>

    {/* Popup */}
    {showPopup && (
      <PartRequestPopup
        setClosePopup={setShowPopup}
        defaultMake={
          selectedProduct?.make || productInfo.make || ""
        }
        defaultModel={
          selectedProduct?.model || productInfo.model || ""
        }
        defaultYear={
          selectedProduct?.year || productInfo.year || ""
        }
      />
    )}
  </>
) : (

                  <>
                    <div className="flex items-end gap-4 mb-4">
                      <span className="product-price text-2xl sm:text-3xl md:text-4xl font-bold">
                        $
                        {selectedProduct?.discountedPrice
                          ? `${selectedProduct.discountedPrice}`
                          : selectedProduct?.actualprice
                            ? `${selectedProduct.actualprice}`
                            : "0"}
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
                    <div className="flex flex-col sm:flex-row gap-3 w-full">

  {/* Add to Cart */}
  <button
    className={`flex-1 cursor-pointer py-3 px-4 rounded transition text-sm sm:text-base ${
      inCart
        ? "bg-[#1d3759] text-white cursor-default"
        : "bg-[#00a3ff] text-white hover:bg-[#1558b0]"
    }`}
    disabled={inCart}
    onClick={handleAddToCart}
  >
    {inCart ? "Already in Cart" : "Add to cart"}
  </button>

  {/* Buy Now */}
  <button
    onClick={handleBuyNow}
    className="flex-1 cursor-pointer bg-[#00a3ff] text-white py-3 px-4 rounded border border-sky-400 hover:bg-[#1558b0] transition text-sm sm:text-base"
  >
    Buy in one click
  </button>

  {/* Call Us Button */}
  <a
    href="tel:+18883382540"
    className="flex-1 text-center bg-[#00a3ff] text-white py-3 px-4 rounded border border-sky-400 hover:bg-[#1558b0] transition text-sm sm:text-base flex items-center justify-center"
  >
    Call Us
  </a>

</div>

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
        />
      )}
    </>
  );
}
 

"use client";
import ProductSection from "@/components/productSection";
import ShopByVehicle from "@/components/shopByVehicle";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import AddedCartPopup from "@/app/account/modal/AddedCartPopup/AddedCartPopup";
import { redirect, useSearchParams } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import PartRequestPopup from "@/components/partRequestPopup";

const galleryImages = [
  "/Images/var.png",
  "/Images/main.png",
  "/Images/var.png",
];

const accordionData = [
  {
    title: "Payment",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. Secure checkout is guaranteed.",
  },
  {
    title: "Delivery",
    content:
      "Standard shipping 3-5 business days. Expedited options available at checkout. Tracking provided.",
  },
  {
    title: "Warranty",
    content:
      "You may return any item in its original condition for a full refund within 30 days of receipt of your shipment, less shipping charges. It typically takes us approximately 3-5 business days to process a credit back to your account and 2-3 business days for the credit to appear on your account.\n\nEngine warranties are limited to manufacturing defects in the block, heads, pistons, crankshafts, camshafts, rockers, and oil pumps.",
  },
];

interface SubPart {
  id: number;
  name: string;
  // add more fields if needed
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
  // add more fields if needed
}

export default function EngineProductPage() {
  const [selectedImg, setSelectedImg] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [allSubParts, setAllSubParts] = useState<SubPart[]>([]);
  // NEW: State for all variants and selected product (variant)
  const [allVariants, setAllVariants] = useState<any[]>([]); // any for now, can type
  const [selectedProductSku, setSelectedProductSku] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [openAccordion, setOpenAccordion] = useState<number | null>(2);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const searchParams = useSearchParams();
  const make = searchParams.get("make");
  const model = searchParams.get("model");
  const year = searchParams.get("year");
  const part = searchParams.get("part");
  const sku = searchParams.get("sku"); // optional
  const API_BASE = process.env.NEXT_PUBLIC_API_URL;
  const addItem = useCartStore((s) => s.addItem);
  const [showPopup, setShowPopup] = useState(false);

  const handleBuyNow = () => {
    redirect("/account/payMethod");
  };

  useEffect(() => {
    if (!make || !model || !year || !part) return;
    fetch(
      `${API_BASE}/products/v2/grouped-with-subparts?make=${make}&model=${model}&year=${year}&part=${part}`
    )
      .then((res) => res.json())
      .then((data) => {
        // Flatten all variants from groupedVariants
        let variants: any[] = [];
        if (data.groupedVariants) {
          data.groupedVariants.forEach((group: any) => {
            group.variants.forEach((variant: any) => {
              variants.push({
                ...variant,
                // Add top-level info to each variant
                make: data.make,
                model: data.model,
                year: data.year,
                part: data.part,
                subPart: group.subPart,
                product: variant.product || group.product || null,
              });
            });
          });
        }
        setAllVariants(variants);
        // Set initial selected product (variant)
        const initialProduct = sku
          ? variants.find((v) => v.sku === sku)
          : variants[0];
        setSelectedProductSku(initialProduct?.sku || "");
        setSelectedProduct(initialProduct || null);
      });
  }, [make, model, year, part, sku, API_BASE]);

  // When selectedProductSku changes, update selectedProduct
  useEffect(() => {
    if (!selectedProductSku || allVariants.length === 0) return;
    const product = allVariants.find((v) => v.sku === selectedProductSku);
    setSelectedProduct(product || null);
  }, [selectedProductSku, allVariants]);

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    const price =
      selectedProduct.discountedPrice ?? selectedProduct.actualprice ?? 0;
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
        selectedProduct.product?.images &&
        selectedProduct.product.images.length > 0
          ? selectedProduct.product.images[0]
          : "/Images/default-engine.png",
      price,
      quantity,
    });
    setShowCartPopup(true);
    setInCart(true);
    setTimeout(() => setShowCartPopup(false), 2000);
  };

  return (
    <>
      {/* Breadcrumb at the very top */}
      <div className="w-full bg-[#091b33] overflow-hidden">
        <div className="max-w-6xl mx-auto md:mx-20 px-4 flex items-start gap-2 py-6 text-[#0F1E35] text-[15px] font-medium">
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
        <div className="max-w-6xl mx-auto px-4 ">
          <div className="pt-18 pb-4">
            <ShopByVehicle />
          </div>
        </div>
      </div>
      <div className="px-6 md:pl-40 md:mx-auto w-full bg-[#091b33] flex flex-col md:flex-row gap-10 min-h-screen text-white -py-4 md:py-28">
        {/* Left: Image Gallery */}
        {/* <div className="flex flex-row items-start"> */}
        {/* Thumbnails column */}
        {/* <div className="w-full max-w-md rounded-md overflow-hidden border border-blue-400">
            <Image
              src={galleryImages[0]} // Or directly use a static path like "/images/example.jpg"
              alt="Image"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div> */}

        {/* Main image column */}
        <div className="ml-6 md:ml-20">
          <div className="relative w-[200px] h-[200px] gap-2 md:w-[280px] md:h-[280px] bg-[#12263A] rounded-lg flex flex-col items-center justify-center">
            <Image
              src={galleryImages[selectedImg]}
              alt="main"
              fill
              className="object-contain"
            />
            <span className="absolute bottom-2 right-2 text-xs text-gray-300">
              *Stock image
            </span>
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex-1 flex flex-col gap-1 max-w-xl">
          <h1
            className="text-xl md:text-3xl font-audiowide font-bold tracking-wide uppercase"
            style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            {selectedProduct
              ? `${selectedProduct.year || ""} ${selectedProduct.make || ""} ${
                  selectedProduct.model || ""
                } Used ${ selectedProduct.part || ""}`.trim()
              : "ENGINE ASSEMBLY"}
          </h1>
          <div className="text-base text-gray-400 mb-2">
            Option:{" "}
            <span className="text-gray-400">
              {selectedProduct ? selectedProduct.sku : ""}
            </span>
          </div>
          <div className="mb-2">
            <select
              className="w-full bg-[#12263A] border  border-[#1a2a44] rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={selectedProductSku}
              onChange={(e) => setSelectedProductSku(e.target.value)}
            >
              {allVariants.map((variant) => (
                <option key={variant.sku} value={variant.sku}>
                  {variant.sku} 
                  {/* // // {variant.miles ? `(${variant.miles})` : "" */}
                </option>
              ))}
            </select>
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
            {" "}
            Miles:{" "}
            <span className="text-gray-400">
            {selectedProduct?.miles}
            </span>
          
            
          </div>
          {selectedProduct?.inStock ? (
            <>
              <div className="flex items-end gap-4 mb-2">
                <span className="text-4xl font-bold">
                  ${selectedProduct?.discountedPrice
                    ? `${selectedProduct.discountedPrice}`
                    : selectedProduct?.actualprice
                    ? `${selectedProduct.actualprice}`
                    : "N/A"}
                </span>
                {selectedProduct?.actualprice &&
                  selectedProduct.discountedPrice &&
                  selectedProduct.actualprice !==
                    selectedProduct.discountedPrice && (
                    <span className="text-2xl text-gray-400 line-through">
                      ${selectedProduct.actualprice}
                    </span>
                  )}
              </div>
              <div className="flex gap-4 mb-4">
                {inCart ? (
                  <div className="flex items-center gap-2">
                    {/* <button
                      className="px-3 py-2 bg-[#1d3759] text-white rounded-l disabled:opacity-50"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 bg-[#12263A]">{quantity}</span>
                    <button
                      className="px-3 py-2 bg-[#1d3759] text-white rounded-r"
                      onClick={() => setQuantity((q) => q + 1)}
                    >
                      +
                    </button> */}
                  </div>
                ) : (
                  <button
                    className={`flex-1 py-2 rounded transition ${
                      inCart
                        ? "bg-[#1d3759] text-white cursor-default"
                        : "bg-[#00a3ff] text-white hover:bg-[#1558b0]"
                    }`}
                    disabled={inCart}
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </button>
                )}
                <button
                  onClick={handleBuyNow}
                  className="flex-1 cursor-pointer bg-[#00a3ff] text-white py-2 rounded border border-sky-400 hover:bg-[#1558b0] transition"
                >
                  Buy in one click
                </button>
              </div>
            </>
          ) : (
  <>
    <button
          onClick={() => setShowPopup(true)}
          className="bg-sky-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-md transition-colors text-center w-1/3 block mb-6"
        >
          Part Request
        </button>

        {showPopup && <PartRequestPopup />}
      </>
    )}
    
      
          {/* Accordion */}
          <div className=" w-full">
            {accordionData.map((item, i) => (
              <div key={i} className="border-b border-white">
                <button
                  className="w-full flex justify-between items-center py-3 text-lg font-semibold focus:outline-none"
                  onClick={() =>
                    setOpenAccordion(openAccordion === i ? null : i)
                  }
                >
                  {item.title}
                  <span
                    className={`ml-2 text-2xl inline-block transition-transform duration-300 ${
                      openAccordion === i ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ^
                  </span>
                </button>
                {openAccordion === i && (
                  <div className="pb-4 text-gray-300 text-sm whitespace-pre-line">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
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
  );
}

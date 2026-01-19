"use client";
import AddedCartPopup from "@/app/account/modal/AddedCartPopup/AddedCartPopup";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ShopByVehicle from "@/components/shopByVehicle";
import EngineFilterSidebar from "@/components/EngineFilterSidebar";
import { useCartStore } from "@/store/cartStore";
import { getGroupedProducts } from "@/utils/api";
import PartRequestPopup from "@/components/partRequestPopup";
import { VerifyPartPopup } from "@/components/fitment";
import { useSkuStore } from "@/store/skuStore";
 
// Import your models data from vehicleData
import { MODELS, MAKES } from "@/components/vehicleData";
 
interface SubPart {
  id: number;
  name: string;
  partTypeId: number;
}
 
interface Product {
  id: number;
  sku: string;
  title: string;
  price: number;
  modelYearId: number;
  partTypeId: number;
  inStock: boolean;
  description: string | null;
  actualprice: number | null;
  discountedPrice: number | null;
  status: string | null;
  miles: string | null;
  Availability: string | null;
  warranty: string | null;
  categoryId: number | null;
  images: any[];
  inventory: any | null;
  subParts: SubPart[];
  subPart?: SubPart;
  specifications: string | null;
  make: string;
  model: string;
  modelYear: string;
  part: string;
  partType: string | null;
  product_img?: string;
}
 
interface CatalogEnginePageProps {
  products?: Product[];
  year?: string;
  make?: string;
  model?: string;
  canonicalUrl?: string | null;
  subPartsList?: SubPart[];
  part?: string;
}
 
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
 
// Utility function to create SEO-friendly slugs
const createSlug = (text: string): string => {
  if (!text) return '';
  
  return text
    .toLowerCase()
    // First, handle specific cases:
    // 1. Replace commas with spaces first
    .replace(/,/g, ' ')
    // 2. Replace forward slashes with spaces
    .replace(/\//g, ' ')
    // 3. Replace parentheses and other special chars with spaces
    .replace(/[()]/g, ' ')
    // 4. Keep existing hyphens but normalize spaces around them
    .replace(/\s*-\s*/g, '-')  // "New Yorker - FWD" → "new-yorker-fwd"
    // 5. Replace all other special characters with spaces
    .replace(/[^a-z0-9\s-]/g, ' ')
    // 6. Replace multiple spaces with single space
    .replace(/\s+/g, ' ')
    .trim()
    // 7. Replace spaces with hyphens
    .replace(/\s/g, '-')
    // 8. Replace multiple consecutive hyphens with single hyphen
    .replace(/-+/g, '-');
};
 
// Helper function to find matching model from MODELS array
const findMatchingModel = (make: string, modelSlug: string): string => {
  if (!make || !modelSlug) return modelSlug;
  
  // Get the make's models from MODELS
  const makeKey = make.toUpperCase();
  const modelsForMake = MODELS[makeKey as keyof typeof MODELS];
  
  if (!modelsForMake || !Array.isArray(modelsForMake)) {
    return modelSlug;
  }
  
  // Clean the model slug (remove commas that might be in URL)
  const cleanedSlug = createSlug(modelSlug.replace(/,/g, ' '));
  
  // Find matching model in MODELS
  const matchingModel = modelsForMake.find((dbModel: string) => {
    const normalizedDbModel = createSlug(dbModel);
    return normalizedDbModel === cleanedSlug;
  });
  
  return matchingModel || modelSlug.replace(/,/g, ' ').trim();
};
 
// Helper function to convert URL-friendly model to database model
const convertUrlModelToDbModel = (urlModel: string, make: string): string => {
  if (!urlModel || !make) return urlModel;
  
  // Get the make's models from MODELS
  const makeKey = make.toUpperCase();
  const modelsForMake = MODELS[makeKey as keyof typeof MODELS];
  
  if (!modelsForMake || !Array.isArray(modelsForMake)) {
    return urlModel;
  }
  
  // Normalize the URL model for comparison
  const normalizedUrlModel = createSlug(urlModel);
  
  // Find matching model in MODELS
  const matchingModel = modelsForMake.find((dbModel: string) => {
    const normalizedDbModel = createSlug(dbModel);
    return normalizedDbModel === normalizedUrlModel;
  });
  
  return matchingModel || urlModel;
};
 
export default function CatalogEnginePage({
  products: initialProducts = [],
  year: initialYear,
  make: initialMake,
  model: initialModel,
  canonicalUrl,
  subPartsList: initialSubPartsList = [],
  part: initialPart,
}: CatalogEnginePageProps) {
  const searchParams = useSearchParams();
  
  const rawMake = initialMake || searchParams.get("make") || "";
  const rawModel = initialModel || searchParams.get("model") || "";
  const rawYear = initialYear || searchParams.get("year") || "";
  const rawPart = initialPart || searchParams.get("part") || "";
  const subPartParam = searchParams.get("subPartFilter");
 
  // Normalize the make (capitalize first letter)
  const make = rawMake ? rawMake.charAt(0).toUpperCase() + rawMake.slice(1).toLowerCase() : "";
  
  // Find the correct model from MODELS using the slug
  const findCorrectModel = (make: string, modelSlug: string): string => {
    if (!make || !modelSlug) return modelSlug;
    
    // Decode URL-encoded model
    const decodedModel = decodeURIComponent(modelSlug);
    
    // Try to find matching model in MODELS
    const matchingModel = findMatchingModel(make, createSlug(decodedModel));
    
    return matchingModel || decodedModel;
  };
 
  const model = findCorrectModel(make, rawModel);
  const year = rawYear;
  const part = rawPart ? rawPart.charAt(0).toUpperCase() + rawPart.slice(1).toLowerCase() : "";
 
  const [subPartsList, setSubPartsList] = useState<SubPart[]>(initialSubPartsList);
  const [subPartFilter, setSubPartFilter] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProductForVerify, setSelectedProductForVerify] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const setSku = useSkuStore((state) => state.setSku);
  const cartItems = useCartStore((s) => s.items);
  const addItem = useCartStore((s) => s.addItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
 
  const itemsPerPage = 9;
 
  useEffect(() => {
    if (subPartParam) {
      setSubPartFilter(Number(subPartParam));
    }
  }, [subPartParam]);
 
  useEffect(() => {
    setSubPartFilter(null);
    setCurrentPage(1);
 
    if (initialProducts.length === 0 && make && model && year && part) {
      const fetchProducts = async () => {
        try {
          setLoading(true);
          const response = await getGroupedProducts({
            make: make.toLowerCase(),
            model: model.toLowerCase(),
            year,
            part: part.toLowerCase(),
          });
 
          const flattenedProducts: Product[] =
            response.data.groupedVariants.flatMap((group: any) =>
              group.variants.map((variant: any) => ({
                id: variant.product.id,
                sku: variant.sku,
                title: variant.title,
                price: variant.product.price,
                modelYearId: variant.product.modelYearId,
                partTypeId: variant.product.partTypeId,
                inStock: variant.inStock,
                description: variant.product.description,
                actualprice: variant.actualprice || variant.product.price,
                discountedPrice: variant.discountedPrice || null,
                status: null,
                miles: variant.miles,
                specifications: variant.specification || null,
                Availability: null,
                warranty: null,
                categoryId: null,
                images: variant.product.images || [],
                inventory: null,
                subParts: [group.subPart],
                subPart: group.subPart,
                make: response.data.make,
                model: response.data.model,
                modelYear: response.data.year,
                part: response.data.part,
                partType: group.subPart?.name || null,
              }))
            );
 
          const dedupedSubParts = Array.from(
            new Map(
              (response.data.groupedVariants || []).map(
                (g: any) => [g.subPart.id, g.subPart]
              )
            ).values()
          );
          setSubPartsList(dedupedSubParts as SubPart[]);
          setProducts(flattenedProducts);
          setError(null);
        } catch (err) {
          setError("Failed to fetch products. Please try again later.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchProducts();
    }
  }, [make, model, year, part, initialProducts.length]);
 
  const filteredProducts =
    subPartFilter !== null
      ? products.filter(
          (p) =>
            typeof p.subPart?.id === "number" && p.subPart?.id === subPartFilter
        )
      : products;
 
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
 
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
 
  const renderPaginationButtons = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
 
    if (endPage - startPage + 1 < maxPageButtons) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }
 
    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push("...");
      }
    }
 
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
 
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push("...");
      }
      pageNumbers.push(totalPages);
    }
 
    return (
      <nav className="flex justify-center mt-8">
        <ul className="flex items-center space-x-1">
          <li>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`flex items-center justify-center w-8 h-8 rounded-md bg-transparent ${
                currentPage === 1
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-white hover:text-gray-300 transition-colors"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
          {pageNumbers.map((number, index) => (
            <li key={index}>
              {number === "..." ? (
                <span className="flex items-center justify-center w-8 h-8 text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  onClick={() => paginate(Number(number))}
                  className={`flex items-center justify-center w-8 h-8 rounded-md font-bold ${
                    Number(number) === currentPage
                      ? "bg-black text-white"
                      : "bg-transparent text-gray-500 hover:text-gray-300 transition-colors"
                  }`}
                >
                  {number}
                </button>
              )}
            </li>
          ))}
          <li>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center w-8 h-8 rounded-md bg-transparent ${
                currentPage === totalPages
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-white hover:text-gray-300 transition-colors"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    );
  };
 
  const handleAddToCartAndRedirect = (
    product: Product,
    quantity: number = 1
  ) => {
    addItem({
      id: product.sku,
      name: `${make} ${model} ${year} ${part || "Engine assembly"}`,
      title: `${product.title}` || `${year} ${make} ${model}  ${part}`,
      subtitle: product.specifications + " " + product.miles + " miles",
      image:
        product.product_img || (product.images && product.images.length > 0
          ? product.images[0]
          : part === "Engine"
          ? "/catalog/Engine 1.png"
          : "/catalog/Trasmission_.png"),
      quantity: quantity,
      price: product.discountedPrice || 0,
    });
 
    setShowCartPopup(true);
 
    setTimeout(() => {
      setIsPopupOpen(false);
      setSelectedProductForVerify(null);
      setShowCartPopup(false);
      window.location.href = `/account/cart?make=${make.toLowerCase()}&model=${createSlug(model)}&year=${year}&part=${part.toLowerCase()}`;
    }, 100);
  };
 
  if (loading) {
    return (
      <div className="bg-[#061C37] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">Loading engines...</div>
      </div>
    );
  }
 
  if (error) {
    return (
      <div className="bg-[#061C37] text-white min-h-screen flex items-center justify-center">
        <div className="text-center text-red-300">
          <p className="text-xl mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-md"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
 
  return (
    <div className="bg-[#061C37] text-white min-h-screen">
      <div className="px-2 pt-4 md:py-0">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8 mb-8 pt-4 text-sm text-gray-300 flex items-center space-x-2">
          <Link href="/" className="flex items-center gap-2 hover:text-white transition-colors">
            <Image src="/account/HouseLine.png" alt="Home" width={24} height={24} />
          </Link>
          <Image src="/autoparts/arrows (1).png" alt="Arrow" width={16} height={16} />
          <Link href="/autoParts" className="hover:text-white">
            Auto parts
          </Link>
          <Image src="/autoparts/arrows (1).png" alt="Arrow" width={16} height={16} />
          
          <Link
            href={`/${part.toLowerCase()}`}
            className="hover:text-white"
          >
            {part}
          </Link>
          
          <Image src="/autoparts/arrows (1).png" alt="Arrow" width={16} height={16} />
          <span className="text-white">
            {year} {make} {model}
          </span>
        </nav>
      </div>
 
      <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6 pb-12">
        <div className="relative pt-12 md:pt-10 lg:pt-24 pb-1 md:pb-16 lg:pb-20">
          <ShopByVehicle />
        </div>
 
        <div className="lg:hidden mb-8 px-2 md:px-4 lg:px-0 mt-6 ">
          <label
            htmlFor="subpart-filter"
            className="block text-sm text-gray-300 mb-1 "
          >
            Select Specification
          </label>
          <select
            id="subpart-filter"
            name="subpart-filter"
            className="w-full bg-[#1C2A3A] text-white border border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={subPartFilter !== null ? String(subPartFilter) : "ALL"}
            onChange={(e) => {
              const val = e.target.value;
              setSubPartFilter(val === "ALL" ? null : Number(val));
              setCurrentPage(1);
            }}
          >
            <option value="ALL">All Specification</option>
            {subPartsList.map((sp) => (
              <option key={sp.id} value={String(sp.id)}>
                {sp.name}
              </option>
            ))}
          </select>
        </div>
 
        <h2
          className="text-xl md:text-2xl lg:text-3xl font-audiowide md:mt-4 lg:mt-8 mb-2 md:mb-6 lg:mb-6 pl-3 md:pl-4"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          {year && make && model && part
            ? `${year.toUpperCase()} ${make.toUpperCase()} ${model.toUpperCase()} USED ${part.toUpperCase()}S`
            : "USED ENGINES"}
        </h2>
 
        <div className="flex gap-6 px-3">
          <aside className="hidden md:block w-[250px] text-sm flex-shrink-0">
            <EngineFilterSidebar
              subPartsList={subPartsList}
              subPartFilter={subPartFilter}
              setSubPartFilter={(id) => {
                setSubPartFilter(id);
                setCurrentPage(1);
              }}
            />
          </aside>
 
          <main className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <button
                className="md:hidden w-1/2 rounded-lg px-4 py-1.5 mr-1 border-2 border-blue-600 shadow-2xl"
                onClick={() => setShowMobileFilter(true)}
              >
                Filter
              </button>
              <div className="hidden md:block text-sm text-gray-300">
                Quantity of products:{" "}
                <span className="font-semibold">{filteredProducts.length}</span>
              </div>
              <div className="relative flex justify-end items-center w-full md:w-auto">
                <select
                  id="sort-by"
                  className="bg-[#091b33] border border-white text-white text-sm rounded-md shadow-xl focus:outline-none px-4 py-[6px] pr-10 appearance-none"
                >
                  <option className="text-white">Recommended</option>
                  <option className="text-white">Price: Low to High</option>
                  <option className="text-white">Price: High to Low</option>
                  <option className="text-white">Newest Arrivals</option>
                </select>
 
                <div className="absolute right-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
 
            {showMobileFilter && (
              <div className="fixed justify-end inset-0 z-50 backdrop-blur-sm flex items-center md:hidden h-screen">
                <div className="relative top-0 right-0 w-11/12 max-w-xs bg-[#0C2A4D] rounded-l-lg p-0 overflow-y-auto max-h-[100vh]">
                  <button
                    className="absolute top-2 right-2 text-white text-2xl font-bold"
                    onClick={() => setShowMobileFilter(false)}
                    aria-label="Close filter"
                  >
                    &times;
                  </button>
                  <EngineFilterSidebar
                    subPartsList={subPartsList}
                    subPartFilter={subPartFilter}
                    setSubPartFilter={(id) => {
                      setSubPartFilter(id);
                      setCurrentPage(1);
                      setShowMobileFilter(false);
                    }}
                  />
                </div>
              </div>
            )}
 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-10">
              {currentItems.map((item, index) => {
                const cartItem = cartItems.find(
                  (i) => i.id === item.sku
                );
 
                let engineSpecification = createSlug(item.subPart?.name || "");
                let modelSlug = createSlug(model);
 
                return (
                  <div
                    key={`${item.id}-${item.sku}`}
                    className="bg-[#0C2A4D] p-4 rounded-lg shadow-md hover:scale-[1.02] transition-all relative overflow-hidden group"
                  >
                    <button type="button"
                      className="cursor-pointer"
                      tabIndex={-1}
                      onClick={(e) => {
                        setSku(item.sku);
                        document.cookie = `sku=${item.sku}; path=/; max-age=3600; SameSite=Lax`;
                        window.location.href = `/product/${year}-${make.toLowerCase()}-${modelSlug}-${part.toLowerCase()}-${engineSpecification}-${encodeURIComponent(item.miles || "N-A")}`;
                      }}
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
                        {(part === "Engine" || part === "engine") && (
                          <>
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
                          </>
                        )}
                        {(part === "Transmission" || part === "transmission") && (
                          <>
                            <Image
                              src="/catalog/Trasmission_.png"
                              alt="Transmission"
                              width={250}
                              height={160}
                              className="relative z-10 rounded-md object-contain"
                              priority
                            />
                            <p className="absolute bottom-2 right-2 text-xs text-gray-400 z-20">
                              Stock image
                            </p>
                          </>
                        )}
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10 rounded-b-lg pointer-events-none"></div>
                    <div className="relative z-20 pt-2 w-full text-left ">
                        <h3 className="text-white text-base mb-1">
                          {year} {make} {model}
                        </h3>
                        <p className="text-sm text-gray-300 mb-1">
                          {"used"} {part || "Engine/Transmission assembly"}
                        </p>
                        <p className="text-xs text-gray-400 mb-1">
                          {item.subPart?.name || "N/A"}
                        </p>
                        <p className="text-xs text-gray-400 mb-1">
                          Genuine Used Part
                        </p>
                        <p className="text-xs text-gray-400 mb-1">
                          {item.miles} {"miles"}
                        </p>
                        <p className="text-xs text-gray-400 mb-2">
                          {item.warranty || "90 Days Warranty"}
                        </p>
                      </div>
                    </button>
                    <div className="flex justify-between items-center mt-3 relative z-30">
                      {item.inStock ? (
                        <>
                          <span className="text-2xl font-bold text-white">
                            ${item.discountedPrice}
                          </span>
                          <span className="text-lg sm:text-xl md:text-xl text-gray-400 line-through">
                            $ {item.actualprice}
                          </span>
 
                          {cartItem ? (
                            <button
                              className="bg-sky-600 hover:bg-sky-700 w-10 h-9 text-white text-base py-1 rounded-md transition-colors flex items-center justify-center gap-3"
                              style={{ minWidth: 120 }}
                              tabIndex={0}
                              onClick={(e) => e.preventDefault()}
                            >
                              <span
                                className="cursor-pointer select-none text-3xl px-1"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (cartItem.quantity <= 1) {
                                    removeItem(cartItem.id);
                                  } else {
                                    updateQuantity(
                                      cartItem.id,
                                      cartItem.quantity - 1
                                    );
                                  }
                                }}
                              >
                                -
                              </span>
                              <span className="text-white text-[17px] font-exo-2 text-center select-none">
                                {cartItem.quantity}
                              </span>
                              <span
                                className="cursor-pointer select-none px-1 text-3xl "
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateQuantity(
                                    cartItem.id,
                                    cartItem.quantity + 1
                                  );
                                }}
                              >
                                +
                              </span>
                            </button>
                          ) : (
                            <button
                              className="bg-sky-600 hover:bg-sky-700 text-white text-sm px-4 py-2 rounded-md transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProductForVerify(item);
                                setIsPopupOpen(true);
                              }}
                            >
                              Add to Cart
                            </button>
                          )}
                        </>
                      ) : (
                        <button
                          onClick={() => setShowPopup(true)}
                          className="bg-sky-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-md transition-colors text-center md:w-full w-full block mb-6"
                        >
                          Part Request
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
 
              {showCartPopup && selectedProductForVerify && (
                <AddedCartPopup
                  title={`${make} ${model} ${year} ${
                    part || "Engine assembly"
                  }`}
                  subtitle={selectedProductForVerify.sku}
                  price={selectedProductForVerify.actualprice || 0}
                  image={
                    part === "Engine"
                      ? "/catalog/Engine 1.png"
                      : "/catalog/Trasmission_.png"
                  }
                />
              )}
            </div>
 
            {totalPages > 1 && renderPaginationButtons()}
 
            {showPopup && <PartRequestPopup setClosePopup={setShowPopup}
            defaultMake={make || ""}
            defaultModel={model || ""}
            defaultYear={year || ""}
            />
            }
 
            <VerifyPartPopup
              isOpen={isPopupOpen}
              onClose={() => {
                setIsPopupOpen(false);
                setSelectedProductForVerify(null);
              }}
              make={make || ""}
              model={model || ""}
              year={year || ""}
              part={part || ""}
              subPartsList={subPartsList}
              selectedProduct={selectedProductForVerify}
              onConfirm={() => {
                if (selectedProductForVerify) {
                  handleAddToCartAndRedirect(selectedProductForVerify);
                }
              }}
              vinNumber=""
            />
          </main>
        </div>
      </div>
    </div>
  );
}
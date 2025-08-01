"use client";

import AddedCartPopup from "../../../account/modal/AddedCartPopup/AddedCartPopup";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import ShopByVehicle from "@/components/shopByVehicle";
import EngineFilterSidebar from "@/components/EngineFilterSidebar";
import { useCartStore } from "@/store/cartStore";
import { getGroupedProducts } from "@/utils/api";

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

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showCartPopup, setShowCartPopup] = useState(false);
  const [inCartIdx, setInCartIdx] = useState<number | null>(null);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  
  const searchParams = useSearchParams();
  const make = searchParams.get('make');
  const model = searchParams.get('model');
  const year = searchParams.get('year');
  const part = searchParams.get('part');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of items to display per page

  const cartItems = useCartStore((s) => s.items);
  const addItem = useCartStore((s) => s.addItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  useEffect(() => {
    if (make && model && year && part) {
      const fetchProducts = async () => {
        try {
          setLoading(true);
          const response = await getGroupedProducts({ make, model, year, part });
          setProducts(response.data);
          setError(null);
        } catch (err) {
          setError('Failed to fetch products. Please try again later.');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchProducts();
    } else {
      setLoading(false);
    }
  }, [make, model, year, part]);


  // Calculate pagination values
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const renderPaginationButtons = () => {
    const pageNumbers = [];
    const maxPageButtons = 5; // Max number of page buttons to show
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
          {/* Left Arrow Button */}
          <li>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`flex items-center justify-center w-8 h-8 rounded-md bg-transparent ${
                currentPage === 1
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-white hover:text-gray-300 transition-colors" // Adjusted hover for consistency
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
          {/* Page Numbers */}
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
                      ? "bg-black text-white" // Active button: black background, white text
                      : "bg-transparent text-gray-500 hover:text-gray-300 transition-colors" // Inactive: transparent background, specific gray text, subtle hover
                  }`}
                >
                  {number}
                </button>
              )}
            </li>
          ))}
          {/* Right Arrow Button */}
          <li>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center w-8 h-8 rounded-md bg-transparent ${
                currentPage === totalPages
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-white hover:text-gray-300 transition-colors" // Adjusted hover for consistency
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

  return (
    <div className="bg-[#061C37] text-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="px-2  pt-4 md:py-0">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-4 text-sm text-gray-300 flex items-center space-x-2">

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
            {/* <span>Home</span> */}
          </Link>
          <Image
            src="/autoparts/arrows (1).png"
            alt="Arrow"
            width={16}
            height={16}
          />
          <Link href="/autoParts" className=" hover:text-white">
            Auto parts
          </Link>
          <Image
            src="/autoparts/arrows (1).png"
            alt="Arrow"
            width={16}
            height={16}
          />
          <Link href="/engine" className=" hover:text-white">
            Engine
          </Link>
          <Image
            src="/autoparts/arrows (1).png"
            alt="Arrow"
            width={16}
            height={16}
          />
          <span className="text-white">Engines</span>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-2 md:px-6 pb-12">
        <div className="relative pt-12 md:pt-24 pb-10 md:pb-20">
          <ShopByVehicle />
        </div>

        <h2
          className="text-xl md:text-3xl font-audiowide md:mt-8 mb-2 md:mb-6 pl-3 "
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          {make && model && year ? `${make.toUpperCase()} ${model.toUpperCase()} ${year}` : 'ENGINES'}
        </h2>

        {/* Filters + Cards Section */}
        <div className="flex gap-6 px-3">
          {/* Filter Sidebar (Desktop) */}
          <aside className="hidden md:block w-[250px] text-sm flex-shrink-0">
            <EngineFilterSidebar />
          </aside>
          {/* Product Cards Grid */}
          <main className="flex-1">
            {/* Quantity and Sort */}
            <div className="flex justify-between items-center mb-4">
              <button
                className="md:hidden w-full rounded-lg px-4 py-1.5 mr-1 border-2 border-blue-600 shadow-2xl"
                onClick={() => setShowMobileFilter(true)}
              >
                Filter
              </button>
              <div className="hidden md:block text-sm text-gray-300">
                Quantity of products:{" "}
                <span className="font-semibold">{products.length}</span>
              </div>
              <div className="relative flex justify-end items-center w-full">
                <select
                  id="sort-by"
                  className="bg-[#091b33] border border-white text-white text-sm rounded-md shadow-xl focus:outline-none px-4 py-[6px] pr-10 appearance-none"
                >
                  <option className="text-white">Recommended</option>
                  <option className="text-white">Price: Low to High</option>
                  <option className="text-white">Price: High to Low</option>
                  <option className="text-white">Newest Arrivals</option>
                </select>

                {/* Custom dropdown arrow */}
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
            {/* Mobile Filter Modal */}
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
                  <EngineFilterSidebar />
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {currentItems.map((item, index) => {
                const cartItem = cartItems.find(
                  (i) => i.id === `engine-${item.id}` // Use unique ID for item
                );
                
                const getEngineSpecs = (subParts: SubPart[]) => {
                    if (!subParts || subParts.length === 0) return 'N/A';
                    const name = subParts[0].name;
                    const match = name.match(/(\d+\.\d+L)/);
                    return match ? match[1] : 'N/A';
                };

                return (
                  <div
                    key={item.id} // Ensure unique key
                    className="bg-[#0C2A4D] p-4 rounded-lg shadow-md hover:scale-[1.02] transition-all relative overflow-hidden group"
                  >
                    <Link
                      href={{
                        pathname: "/product/engines",
                        query: { make, model, year, part, sku: item.sku }
                      }}
                      className="block cursor-pointer"
                      tabIndex={-1}
                    >
                      {/* Image container */}
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
                          src="/catalog/card.png"
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
                      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10 rounded-b-lg pointer-events-none"></div>
                      <div className="relative z-20 pt-2">
                        <h3 className="text-white text-base mb-1">
                          {part || 'Engine assembly'}
                        </h3>
                        <p className="text-sm text-gray-300 mb-1">
                          {make} {model} {year}
                        </p>
                        <p className="text-xs text-gray-400 mb-1">
                          {getEngineSpecs(item.subParts)}
                        </p>
                        <p className="text-xs text-gray-400 mb-1">
                          Genuine Used Part
                        </p>
                        <p className="text-xs text-gray-400 mb-1">
                          A Grade Condition
                        </p>
                        <p className="text-xs text-gray-400 mb-1">
                          {item.miles}
                        </p>
                        <p className="text-xs text-gray-400 mb-2">
                          {item.warranty || '90 Days Warranty'}
                        </p>
                      </div>
                    </Link>
                    <div className="flex justify-between items-center mt-3 relative z-30">
                      {item.inStock ? (
                        <>
                          <span className="text-xl font-bold text-white">
                            {item.actualprice}
                          </span>
                          {cartItem ? (
                            <button
                              className="bg-sky-600 hover:bg-sky-700 w-10 h-9 text-white text-base py-1 rounded-md transition-colors flex items-center justify-center gap-3"
                              style={{ minWidth: 120 }}
                              tabIndex={0}
                              onClick={(e) => e.preventDefault()} // prevent card click
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
                                setShowCartPopup(true);
                                setInCartIdx(indexOfFirstItem + index);
                                addItem({
                                  id: `engine-${indexOfFirstItem + index}`,
                                  name: `${make} ${model} ${year} ${part || 'Engine assembly'}`,
                                  title: `${make} ${model} ${year} ${part || 'Engine assembly'}`,
                                  subtitle: item.subParts && item.subParts.length > 0 ? item.subParts.map(subPart => subPart.name).join(', ') : 'N/A',
                                  image: item.images && item.images.length > 0 ? item.images[0] : '/Images/default-engine.png',
                                  quantity: 1,
                                  price: item.actualprice || 0
                                });
                                setTimeout(() => setShowCartPopup(false), 2000);
                              }}
                            >
                              Add to Cart
                            </button>
                          )}
                        </>
                      ) : (
                        <Link
                          href="/account/modal/partRequestPopup"
                          className="bg-sky-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-md transition-colors text-center w-full block mt-6"
                          tabIndex={0}
                        >
                          Part Request
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
              {showCartPopup && inCartIdx !== null && currentItems[inCartIdx] && (
  <AddedCartPopup
    title={`${make} ${model} ${year} ${part || 'Engine assembly'}`}
    subtitle={currentItems[inCartIdx].subParts && currentItems[inCartIdx].subParts.length > 0 ? currentItems[inCartIdx].subParts.map((subPart: any) => subPart.name).join(', ') : 'N/A'}
    price={currentItems[inCartIdx].actualprice || 0}
    image={currentItems[inCartIdx].images && currentItems[inCartIdx].images.length > 0 ? currentItems[inCartIdx].images[0] : '/Images/default-engine.png'}
  />
)}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && renderPaginationButtons()}
          </main>
        </div>
      </div>
    </div>
  );
}

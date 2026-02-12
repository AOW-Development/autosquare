"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { useCartStore } from "@/store/cartStore"
import { getGroupedProducts } from "@/utils/api"
import Link from "next/link"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import AddedCartPopup from "@/app/account/modal/AddedCartPopup/AddedCartPopup"
import { VerifyPartPopup } from "./fitment"

interface SubPart {
  id: number
  name: string
  partTypeId: number
}

interface Product {
  sku: string
  title?: string
  subParts?: SubPart[]
  subPart?: SubPart
  make?: string
  model?: string
  year?: string
  part?: string
  inStock?: boolean
  discountedPrice?: number
  actualprice?: number
  miles?: string | number
  warranty?: string
  specifications?: string
  specification?: string
  images?: any[]
  product?: {
    images?: any[]
  }
}

interface ProductSectionProps {
  product: Product
  make: string
  model: string
  year: string
  part: string
  subPartsList?: SubPart[]
}

export default function ProductSection({
  product,
  make,
  model,
  year,
  part,
  subPartsList: externalSubPartsList,
}: ProductSectionProps) {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isVerifyPopupOpen, setIsVerifyPopupOpen] = useState(false)
  const [selectedProductForVerify, setSelectedProductForVerify] = useState<any | null>(null)
  const [showCartPopup, setShowCartPopup] = useState(false)
  const [internalSubPartsList, setInternalSubPartsList] = useState<SubPart[]>([])
  const [direction, setDirection] = useState(0)

  const subPartsList = externalSubPartsList || internalSubPartsList

  const router = useRouter()
  const cartItems = useCartStore((s) => s.items)
  const addItem = useCartStore((s) => s.addItem)
  const updateQuantity = useCartStore((s) => s.updateQuantity)
  const removeItem = useCartStore((s) => s.removeItem)

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true)
        setError(null)

        console.log(" Starting fetch with params:", { make, model, year, part })

        const oppositePart = part === "Engine" ? "Transmission" : "Engine"
        console.log(" Fetching opposite part type:", oppositePart)

        let response = await getGroupedProducts({
          make,
          model,
          year,
          part: oppositePart,
        })

        console.log(" Opposite part API Response:", response)

        const flattenedProducts: any[] = []
        const allSubParts: SubPart[] = []

        if (response?.data?.groupedVariants && Array.isArray(response.data.groupedVariants)) {
          console.log(" Found", response.data.groupedVariants.length, "opposite part groups")

          response.data.groupedVariants.forEach((group: any) => {
            if (group.subPart && group.subPart.partTypeId) {
              allSubParts.push({
                id: group.subPart.id,
                name: group.subPart.name,
                partTypeId: Number(group.subPart.partTypeId),
              })
            }
            if (group.variants && Array.isArray(group.variants)) {
              group.variants.forEach((variant: any) => {
                if (variant.sku !== product.sku) {
                  flattenedProducts.push({
                    ...variant,
                    make: response.data.make,
                    model: response.data.model,
                    year: response.data.year,
                    part: response.data.part,
                    subPart:
                      group.subPart && group.subPart.partTypeId
                        ? {
                            id: group.subPart.id,
                            name: group.subPart.name,
                            partTypeId: Number(group.subPart.partTypeId),
                          }
                        : undefined,
                    product: variant.product || null,
                  })
                }
              })
            }
          })
        }

        if (flattenedProducts.length === 0) {
          console.log(" No opposite part found, trying same part type as fallback")

          response = await getGroupedProducts({
            make,
            model,
            year,
            part,
          })

          console.log("Same part API Response:", response)

          if (response?.data?.groupedVariants && Array.isArray(response.data.groupedVariants)) {
            console.log(" Found", response.data.groupedVariants.length, "same part groups")

            response.data.groupedVariants.forEach((group: any) => {
              if (group.subPart && group.subPart.partTypeId) {
                allSubParts.push({
                  id: group.subPart.id,
                  name: group.subPart.name,
                  partTypeId: Number(group.subPart.partTypeId),
                })
              }
              if (group.variants && Array.isArray(group.variants)) {
                group.variants.forEach((variant: any) => {
                  if (variant.sku !== product.sku) {
                    flattenedProducts.push({
                      ...variant,
                      make: response.data.make,
                      model: response.data.model,
                      year: response.data.year,
                      part: response.data.part,
                      subPart:
                        group.subPart && group.subPart.partTypeId
                          ? {
                              id: group.subPart.id,
                              name: group.subPart.name,
                              partTypeId: Number(group.subPart.partTypeId),
                            }
                          : undefined,
                      product: variant.product || null,
                    })
                  }
                })
              }
            })
          }
        }

        console.log(" Total flattened products (excluding current):", flattenedProducts.length)

        setFeaturedProducts(flattenedProducts)
        if (!externalSubPartsList) {
          setInternalSubPartsList(allSubParts)
        }
      } catch (err: any) {
        console.error(" Error fetching featured products:", err)
        setError(err.message || "Failed to load featured products")
        setFeaturedProducts([])
      } finally {
        setLoading(false)
        console.log(" Fetch complete")
      }
    }

    if (make && model && year && part) {
      fetchFeaturedProducts()
    } else {
      console.log(" Missing required params")
      setLoading(false)
    }
  }, [make, model, year, part, product.sku])

  const handleAddToCartAndRedirect = (prod: any, quantity = 1) => {
    const price = prod.discountedPrice ?? prod.actualprice ?? 0

    addItem({
      id: prod.sku,
      name: `${prod.year || year} ${prod.make || make} ${prod.model || model} ${prod.part || part}`.trim(),
      title:
        prod.title || `${prod.year || year} ${prod.make || make} ${prod.model || model} ${prod.part || part}`.trim(),
      subtitle: `${prod.specification || prod.subPart?.name || ""} ${prod.miles || ""}`.trim(),
      image:
        prod.product?.images && prod.product.images.length > 0
          ? prod.product.images[0]
          : prod.part === "Engine"
            ? "/catalog/Engine 1.png"
            : "/catalog/Trasmission_.png",
      price,
      quantity,
    })

    setShowCartPopup(true)

    setTimeout(() => {
      setIsVerifyPopupOpen(false)
      setSelectedProductForVerify(null)
      setShowCartPopup(false)
      router.push("/account/cart")
    }, 100)
  }

  const handleAddToCart = (prod: any) => {
    setSelectedProductForVerify(prod)
    setIsVerifyPopupOpen(true)
  }

const scrollRef = useRef<HTMLDivElement>(null)

// const scrollLeft = () => {
//   scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" })
// }

// const scrollRight = () => {
//   scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" })
// }
const [currentIndex, setCurrentIndex] = useState(0)
const productsPerPage = 3

const handlePrev = () => {
  if (currentIndex === 0) return
    setDirection(-1)
    setCurrentIndex((prev) => Math.max(prev - productsPerPage, 0))
  } 

const handleNext = () => {
   if (currentIndex + productsPerPage >= featuredProducts.length) return
  setDirection(1)
  setCurrentIndex((prev) => prev + productsPerPage)
}

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: ["easeInOut"] },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    transition: { duration: 0.5, ease: ["easeInOut"] },
  }),
}

const buildProductSlug = (prod: any) => {
  const clean = (val?: string) =>
    val
      ?.replace(/[ ,()./"';:]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase()

  const engineSpecification = clean(
    prod.subPart?.name || prod.specification || ""
  )

  const cleanedModel = clean(prod.model || model)

  return `/product/${prod.year || year}-${prod.make || make}-${cleanedModel}-${prod.part || part}-${engineSpecification}-${encodeURIComponent(prod.miles || "N/A")}`
}


// Slice products to show only 3 at a time
const visibleProducts = featuredProducts.slice(currentIndex, currentIndex + productsPerPage)

  return (
    <section className="bg-[#091b33] text-white w-full py-8 md:py-2 lg:py-2 px-2 flex flex-col gap-12">
      {showCartPopup && selectedProductForVerify && (
        <AddedCartPopup
          title={`${selectedProductForVerify.year || year} ${selectedProductForVerify.make || make} ${selectedProductForVerify.model || model} ${selectedProductForVerify.part || part}`}
          price={selectedProductForVerify.discountedPrice ?? selectedProductForVerify.actualprice ?? 0}
          image={
            selectedProductForVerify.product?.images && selectedProductForVerify.product.images.length > 0
              ? selectedProductForVerify.product.images[0]
              : selectedProductForVerify.part === "Engine"
                ? "/catalog/Engine 1.png"
                : "/catalog/Trasmission_.png"
          }
        />
      )}

      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-between mb-6 md:px-4">
          <h2 className="text-2xl font-bold">FEATURED PRODUCTS</h2>
          <div className="flex gap-2">
             <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`p-2 rounded-full transition-all ${
                  currentIndex === 0 ? "cursor-not-allowed" : "bg-[#0C2A4D] hover:bg-sky-600"
                }`}
              >
                <span className="text-2xl">&#60;</span>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex + productsPerPage >= featuredProducts.length}
                className={`p-2 rounded-full transition-all ${
                  currentIndex + productsPerPage >= featuredProducts.length
                    ? " cursor-not-allowed"
                    : "bg-[#0C2A4D] hover:bg-sky-600"
                }`}
              >
                <span className="text-2xl">&#62;</span>
              </button>
            </div>

            </div>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-400">Loading featured products...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-400">{error}</p>
          </div>
        ) : featuredProducts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-400">No related products available at this time</p>
          </div>
        ) : (
          
            <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 md:px-4 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 min-h-[400px]"
            >
            {visibleProducts.map((prod, i) => {
              const cartItem = cartItems.find((item) => item.id === prod.sku)
              const productImage =
                prod.product?.images && prod.product.images.length > 0
                  ? prod.product.images[0]
                  : prod.part === "Engine"
                    ? "/catalog/Engine 1.png"
                    : "/catalog/Trasmission_.png"

              return (
                <div
                  key={`${prod.sku}-${i}`}
                  className="bg-[#0C2A4D] p-4 rounded-lg shadow-md hover:scale-[1.02] transition-all relative overflow-hidden group mb-10"
                >
                  <button
                      type="button"
                      className="block cursor-pointer text-left w-full"
                      onClick={() => {
                        document.cookie = `sku=${prod.sku}; path=/; max-age=3600; SameSite=Lax`
                        window.location.href = buildProductSlug(prod)
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
                      <Image
                        src={productImage || "/placeholder.svg"}
                        alt={prod.part || "Product"}
                        width={250}
                        height={190}
                        className="relative z-10 rounded-md object-contain"
                        priority
                      />
                      {/* <p className="absolute bottom-2 right-2 text-xs text-gray-400 z-20">Stock image</p> */}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10 rounded-b-lg pointer-events-none"></div>

                    <div className="relative z-20 pt-2">
                      <h3 className="text-white text-base lg:text-xl mb-1">
                        {prod.year || year} {prod.make || make} {prod.model || model}
                      </h3>
                      <p className="text-sm lg:text-lg text-gray-300 mb-1">used {prod.part || part} assembly</p>
                      <p className="text-xs lg:text-sm text-gray-400 mb-1">{prod.subPart?.name || prod.specification || "N/A"}</p>
                      <p className="text-xs lg:text-sm text-gray-400 mb-1">Genuine Used Part</p>
                      <p className="text-xs lg:text-sm text-gray-400 mb-1">{prod.miles || "N/A"} miles</p>
                      <p className="text-xs lg:text-sm text-gray-400 mb-2">{prod.warranty || "90 Days Warranty"}</p>
                    </div>
                  </button>

                  <div className="flex justify-between items-center mt-3 relative z-30">
                    {prod.inStock ? (
                      <>
                        <span className="text-2xl font-bold text-white">
                          ${prod.discountedPrice || prod.actualprice}
                        </span>
                        {prod.actualprice && prod.discountedPrice && prod.actualprice !== prod.discountedPrice && (
                          <span className="text-lg text-gray-400 line-through">${prod.actualprice}</span>
                        )}

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
                                e.stopPropagation()
                                if (cartItem.quantity <= 1) {
                                  removeItem(cartItem.id)
                                } else {
                                  updateQuantity(cartItem.id, cartItem.quantity - 1)
                                }
                              }}
                            >
                              -
                            </span>
                            <span className="text-white text-[17px] font-exo-2 text-center select-none">
                              {cartItem.quantity}
                            </span>
                            <span
                              className="cursor-pointer select-none px-1 text-3xl"
                              onClick={(e) => {
                                e.stopPropagation()
                                updateQuantity(cartItem.id, cartItem.quantity + 1)
                              }}
                            >
                              +
                            </span>
                          </button>
                        ) : (
                          <button
                            className="bg-sky-600 hover:bg-sky-700 text-white text-sm px-4 py-2 rounded-md transition-colors"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleAddToCart(prod)
                            }}
                          >
                            Add to Cart
                          </button>
                        )}
                      </>
                    ) : (
                      <button className="bg-sky-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-md transition-colors w-full">
                        Part Request
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
            </motion.div>
            </AnimatePresence>
          
        )}
      </div>

      {/* <div className="max-w-6xl mx-auto w-full mt-12">
        <h2 className="text-2xl font-bold mb-6 md:px-4">YOU HAVE VIEWED</h2>
        <div className="flex flex-wrap gap-6 md:px-4">
          <div className="bg-[#0C2A4D] p-4 rounded-lg shadow-md hover:scale-[1.02] transition-all relative overflow-hidden w-full md:max-w-xs">
            <Link
              href={`/product/engines?make=${make}&model=${model}&year=${year}&part=${part}&sku=${product.sku}`}
              className="block cursor-pointer"
              tabIndex={-1}
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
                  src={
                    product.product?.images && product.product.images.length > 0
                      ? product.product.images[0]
                      : part === "Engine"
                        ? "/catalog/Engine 1.png"
                        : "/catalog/Trasmission_.png"
                  }
                  alt={part || "Product"}
                  width={250}
                  height={160}
                  className="relative z-10 rounded-md object-contain"
                  priority
                />
                <p className="absolute bottom-2 right-2 text-xs text-gray-400 z-20">Stock image</p>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10 rounded-b-lg pointer-events-none"></div>

              <div className="relative z-20 pt-2">
                <h3 className="text-white text-base mb-1">
                  {year} {make} {model}
                </h3>
                <p className="text-sm text-gray-300 mb-1">used {part} assembly</p>
                <p className="text-xs text-gray-400 mb-1">
                  {product.subPart?.name || product.specifications || product.specification || "N/A"}
                </p>
                <p className="text-xs text-gray-400 mb-1">Genuine Used Part</p>
                <p className="text-xs text-gray-400 mb-1">{product.miles || "N/A"} miles</p>
                <p className="text-xs text-gray-400 mb-2">{product.warranty || "90 Days Warranty"}</p>

                <div className="flex justify-between items-center mt-3">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-white">
                      ${product.discountedPrice || product.actualprice || "N/A"}
                    </span>
                    {product.actualprice &&
                      product.discountedPrice &&
                      product.actualprice !== product.discountedPrice && (
                        <span className="text-sm text-gray-400 line-through">${product.actualprice}</span>
                      )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div> */}

      <VerifyPartPopup
        isOpen={isVerifyPopupOpen}
        onClose={() => {
          setIsVerifyPopupOpen(false)
          setSelectedProductForVerify(null)
        }}
        make={make || ""}
        model={model || ""}
        year={year || ""}
        part={selectedProductForVerify?.part || part || ""}
        subPartsList={subPartsList}
        selectedProduct={selectedProductForVerify}
        onConfirm={() => {
          if (selectedProductForVerify) {
            handleAddToCartAndRedirect(selectedProductForVerify, 1)
          }
        }}
        vinNumber=""
      />
    </section>
  )
}

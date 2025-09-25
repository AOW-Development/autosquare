"use client"

import { useState, useEffect } from "react"
import { X, ChevronDown, CheckCircle } from "lucide-react"

interface SubPart {
  id: number
  name: string
  partTypeId: number
}

interface Product {
  id: number
  sku: string
  title: string
  price: number
  modelYearId: number
  partTypeId: number
  inStock: boolean
  description: string | null
  actualprice: number | null
  discountedPrice: number | null
  status: string | null
  miles: string | null
  Availability: string | null
  warranty: string | null
  categoryId: number | null
  images: any[]
  inventory: any | null
  subParts: SubPart[]
  subPart?: SubPart
  make?: string
  model?: string
  year?: string
}

interface VerifyPartPopupProps {
  isOpen: boolean
  onClose: () => void
  make?: string
  model?: string
  year?: string
  part?: string
  subPartsList?: SubPart[]
  selectedProduct?: Product | null
  vinNumber?: string
  onConfirm: () => void
}

// Fixed VIN data
const DEMO_VIN = "KUQGN85T3B015891"
const VIN_TARGET_INDEX = 7

const FIXED_VIN_CHECK_DETAILS = {
  instruction: "VIN T ( 8th Digit )",
  digitPosition: "8th",
  targetDigit: "T",
  detailInstruction: "Then Verify that the 8th digit of your VIN is T",
}

export function VerifyPartPopup({
  isOpen,
  onClose,
  make = "Acura",
  model = "MDX",
  year = "2023",
  part = "Engine",
  subPartsList = [],
  selectedProduct,
  vinNumber = "KUDC0H3J3P0015891",
  onConfirm,
}: VerifyPartPopupProps) {
  const [selectedFitOption, setSelectedFitOption] = useState("")
  const [fitError, setFitError] = useState(false)

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setSelectedFitOption("")
      setFitError(false)
    }
  }, [isOpen])

  // =========================
  // Find selected sub-part
  // =========================
  const selectedSubPart = subPartsList.find(
    (sub) => String(sub.id) === selectedFitOption
  )

  // =========================
  // Dynamic validation: all specs
  // =========================
  const isSpecMatch = (): boolean => {
    if (!selectedProduct || !selectedSubPart) return false

    // Match each spec dynamically
    const makeMatch = !selectedProduct.make || selectedProduct.make === make
    const modelMatch = !selectedProduct.model || selectedProduct.model === model
    const yearMatch = !selectedProduct.year || selectedProduct.year === year
    const partMatch =
      !selectedProduct.subPart || selectedProduct.subPart.name === selectedSubPart.name

    return makeMatch && modelMatch && yearMatch && partMatch
  }

  const isFitCorrect = isSpecMatch()

  // Update error state
  useEffect(() => {
    if (selectedFitOption && !isFitCorrect) setFitError(true)
    else setFitError(false)
  }, [selectedFitOption, isFitCorrect])

  if (!isOpen) return null

  const vehicleDisplay = `${year} ${make} ${model}`
  const showVinCheckVisual = !selectedFitOption
  const vinPrefix = DEMO_VIN.substring(0, VIN_TARGET_INDEX)
  const vinTarget = DEMO_VIN.charAt(VIN_TARGET_INDEX)
  const vinSuffix = DEMO_VIN.substring(VIN_TARGET_INDEX + 1)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#061C37] rounded-lg max-w-3xl w-full p-6 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center px-6 pt-6 pb-4">
          <h2
            className="text-xl font-normal text-white mb-3"
            style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            Please Verify Your Part
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            In order to accurately match this part to your vehicle, please
            verify the fitment below.
          </p>
        </div>

        <div className="bg-[#02305A] mx-6 rounded-lg p-5 mb-6 ">
          <h3 className="text-white font-medium text-lg mb-4">Verify Fitment</h3>
          <p className="text-white text-base mb-4">{vehicleDisplay}</p>

          <div className="relative">
            <select
              value={selectedFitOption}
              onChange={(e) => setSelectedFitOption(e.target.value)}
              className="w-full px-4 py-3 rounded-md appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-gray-200 text-gray-800"
            >
              <option value="">Select Fit Options...</option>
              {subPartsList.length > 0 ? (
                subPartsList.map((subPart) => (
                  <option key={subPart.id} value={String(subPart.id)}>
                    {subPart.name}
                  </option>
                ))
              ) : (
                <option disabled>No specific fitment options available</option>
              )}
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600 pointer-events-none"
            />
          </div>

          {/* Fitment confirmation or error */}
          {selectedFitOption && (
            <div className="mt-8 text-center">
              {isFitCorrect ? (
                <>
                  <div className="flex items-center justify-center text-green-400 font-semibold text-lg">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    <span>This Part Fits the Vehicle</span>
                  </div>
                  <button
                    onClick={onConfirm}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors w-full max-w-xs"
                  >
                    Proceed to Checkout
                  </button>
                </>
              ) : (
                <p className="text-red-500 font-medium">
                  Selected option does not match the vehicle specifications. Please
                  check year, make, model, or sub-part.
                </p>
              )}
            </div>
          )}

          {/* VIN visual */}
          {showVinCheckVisual && (
            <div className="pb-2 mt-2 ">
              <div className="flex items-start relative p-4">
                <div className="flex-1">
                  <h4 className="text-white font-medium text-base mb-3">
                    Find Your VIN Option
                  </h4>
                  <div className="space-y-2">
                    <p className="text-gray-300 text-sm">If Selected fitment is..</p>
                    <p
                      id="vin-option-box"
                      className="text-white text-sm font-medium p-1 inline-block"
                      style={{ border: "1px solid #f87171" }}
                    >
                      {FIXED_VIN_CHECK_DETAILS.instruction}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {FIXED_VIN_CHECK_DETAILS.detailInstruction}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 relative z-10 pt-4">
                  <div
                    className="bg-cyan-600 text-white p-4 w-48 rounded-lg shadow-xl relative"
                    style={{ backgroundColor: "#00B2EE" }}
                  >
                    <div className="text-center">
                      <p className="text-xs font-medium mb-3 tracking-wide uppercase">
                        YOUR INSURANCE CARD
                      </p>
                      <div className="h-2 bg-white rounded mb-2 w-3/4 mx-auto"></div>
                      <div className="h-2 bg-white rounded mb-3 w-1/2 mx-auto"></div>
                      <div className="pt-3">
                        <p className="text-xs mb-1 text-left">VIN :</p>
                        <p className="text-sm font-mono break-all text-left">
                          {vinPrefix}
                          <span
                            id="target-vin-digit"
                            className="bg-red-500 p-0.5 relative top-[-1px]"
                            style={{ backgroundColor: "#F87171" }}
                          >
                            {vinTarget}
                          </span>
                          {vinSuffix}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {selectedProduct && (
          <div className="mt-6 pt-4 border-t border-slate-600 px-6">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-white font-medium">Selected Part Details</h4>
                <p className="text-slate-300 text-sm">SKU: {selectedProduct.sku}</p>
                {selectedProduct.miles && (
                  <p className="text-slate-300 text-sm">
                    Mileage: {selectedProduct.miles} miles
                  </p>
                )}
                {selectedProduct.warranty && (
                  <p className="text-slate-300 text-sm">
                    Warranty: {selectedProduct.warranty}
                  </p>
                )}
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-lg">
                  ${selectedProduct.actualprice || selectedProduct.price}
                </p>
                <p
                  className={`text-sm ${
                    selectedProduct.inStock ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {selectedProduct.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

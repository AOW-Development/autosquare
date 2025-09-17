import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Listbox } from '@headlessui/react' 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MAKES, MODELS, YEARS } from './vehicleData';
import { useEffect } from "react";
import { usePathname } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Yaldevi } from "next/font/google";
import SearchableDropdown from "./Searchable";


const PARTS = ["Engine", "Transmission"];

const ShopByVehicle: React.FC = () => {
  const router = useRouter();
  const path = usePathname();

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [part, setPart] = useState("");
  const [focused, setFocused] = useState<string | null>(null);
  const [availableYears, setAvailableYears] = useState<number[]>([]);
  const [boxHeight, setBoxHeight] = useState(0);

  const API_BASE = process.env.NEXT_PUBLIC_API_URL;
  const boxRef = useRef<HTMLDivElement>(null);

  const makeActive = true;
  const modelActive = make !== "";
  const yearActive = make !== "" && model !== "";
  const partActive = make !== "" && model !== "" && year !== "";

  const arrowUrl = "/Images/home/arrows.png";
  const arrowStyle = {
    backgroundImage: `url('${arrowUrl}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 1rem center",
    backgroundSize: "20px 20px",
  };

  // Reset or load saved values based on page
  useEffect(() => {
    if (path === "/" || path === "/engine" || path === "/transmission" || path === "/autoParts") {
      setMake("");
      setModel("");
      setYear("");
      setPart("");
    } else {
      const stored = localStorage.getItem("shopByVehicle");
      if (stored) {
        try {
          const { make: storedMake, model: storedModel, year: storedYear, part: storedPart } =
            JSON.parse(stored);
          if (storedMake) setMake(storedMake);
          if (storedModel) setModel(storedModel);
          if (storedYear) setYear(storedYear);
          if (storedPart) setPart(storedPart);
        } catch {
          // Ignore parse errors
        }
      }
    }
  }, [path]);

  // Fetch available years when make & model change
  useEffect(() => {
    if (make && model) {
      fetch(
        `${API_BASE}/products/years?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`
      )
        .then((res) => res.json())
        .then((data) => setAvailableYears(data.sort((a: number, b: number) => b - a)))
        .catch(() => setAvailableYears([]));
    } else {
      setAvailableYears([]);
    }
  }, [make, model, API_BASE]);

  // Redirect when all selections are made
  // Corrected useEffect hook in your ShopByVehicle.tsx file

useEffect(() => {
  if (make && model && year && part) {
    const query = new URLSearchParams({ make, model, year, part }).toString();
    const newUrl = `/catalogue/engine/home?${query}`;

    // Always save the selection to local storage, regardless of the page.
    localStorage.setItem("shopByVehicle", JSON.stringify({ make, model, year, part }));

    // Check if the current path is one of the initial search pages
    const isInitialSearchPage = 
      path === "/" || 
      path === "/engine" || 
      path === "/transmission" || 
      path === "/autoParts";

    // If on an initial search page, perform a full navigation.
    if (isInitialSearchPage) {
      router.push(newUrl);
    } 
    // If we are already on the catalogue page, update the URL without a full reload.
    // This makes the page dynamic and responsive to changes in the dropdowns.
    else if (path.startsWith("/catalogue/") || path.startsWith("/product/")) {
      // Use the native History API to change the URL without a full refresh.
      window.history.pushState(null, '', newUrl);
    }
  }
}, [make, model, year, part, path, router]);


    const [isOpen, setIsOpen] = useState(false);
// useEffect(() => {
//   const spacer = document.getElementById("shop-spacer");
//   if (spacer && boxRef.current) {
//     spacer.style.height = `${boxRef.current.offsetHeight}px`;
//   }
// }, [
//   make || "",
//   model || "",
//   year || "",
//   part || "",
//   !!makeActive,
//   !!modelActive,
//   !!yearActive,
//   !!partActive
// ]);

  return (
    <div className="relative z-20">
      {/* Desktop Layout */}
      <div
        className="absolute top-[-47px] left-1/2 transform -translate-x-1/2 w-[1200px] h-[121px]  rounded-lg shadow-lg px-6 py-4  flex-col justify-center hidden lg:block"
        style={{ background: "#00A3FF80" }}
      >
        <div
          className="text-left text-[16px] tracking-wider mb-2 uppercase text-white"
          id="shop-by-vehicle-title"
          // style={{
          //   fontFamily: "var(--font-exo-2), sans-serif",
          // }}
        >
          SHOP BY VEHICLE
        </div>

        <div className="flex flex-row gap-4 justify-center items-center">
        
            <SearchableDropdown
              options={MAKES}
              value={make}
              onChange={(selectedMake) => {
                setMake(selectedMake);
                setModel("");
                setYear("");
                setPart("");
              }}
              placeholder="Select make..."
              disabled={!makeActive}
            />

            <SearchableDropdown
              options={make ? MODELS[make] || [] : []}
              value={model}
              onChange={(selectedModel) => {
                setModel(selectedModel);
                setYear("");
                setPart("");
              }}
              placeholder="Select model..."
              disabled={!modelActive}
            />

            <SearchableDropdown
              options={availableYears.map(String)}
              value={year}
              onChange={(selectedYear) => {
                setYear(selectedYear);
                setPart("");
              }}
              placeholder="Select year..."
              disabled={!yearActive}
            />

            <SearchableDropdown
              options={PARTS}
              value={part}
              onChange={(selectedPart) => {
                setPart(selectedPart);
              }}
              placeholder="Select part..."
              disabled={!partActive}
            />
          {/* sub-category Dropdown */}
          {/* <select
            id="subcat-select"
            aria-label="Select sub-category"
            className={`w-[368px] h-[38px] px-4 text-sm rounded-md border-2 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none ${
              subCategoryActive
                ? "bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer"
                : "bg-gray-200 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed"
            }`}
            value={subCategory}
            onChange={(e) => {
              setSubCategory(e.target.value);
              setOption("");
            }}
            onFocus={() => setFocused("subCategory")}
            onBlur={() => setFocused(null)}
            disabled={!subCategoryActive}
            style={arrowStyle}
          >
            <option value="" disabled>
              Select sub-category...
            </option>
            {SUBCAT.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select> */}

          {/* options Dropdown */}
          {/* <select
            id="option-select"
            aria-label="Select option"
            className={`w-[368px] h-[38px] px-4 text-sm rounded-md border-2 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none ${
              optionActive
                ? "bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer"
                : "bg-gray-200 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed"
            }`}
            value={option}
            onChange={(e) => setOption(e.target.value)}
            onFocus={() => setFocused("option")}
            onBlur={() => setFocused(null)}
            disabled={!optionActive}
            style={arrowStyle}
          >
            <option value="" disabled>
              Select option...
            </option>
            {OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select> */}
        </div>
      </div>

      {/* Mobile Layout */}
  
<div className="bg-[#091B33] w-full lg:hidden relative">
  <div
    ref={boxRef}
    className="absolute left-1/2 -translate-x-1/2 w-[95%] sm:w-[80%] md:w-[93%]  
               -mt-10 xs:-mt-2 sm:-mt-4 md:-mt-12 xs425:mt-0 xs425:top-0
               rounded-md shadow-lg px-3 py-4 sm:px-4 sm:py-4 
               flex flex-col gap-2 sm:gap-3 justify-center"
    style={{ background: "#00A3FF80" }}
  >
    <div
      className="text-left font-exo-2 font-bold text-[14px] sm:text-[16px] md:text-[20px] 
                 tracking-wider mb-3 sm:mb-4 uppercase text-white"
      id="shop-by-vehicle-title-mobile"
    >
      SHOP BY VEHICLE
    </div>

    <div className="flex flex-col gap-2 sm:gap-3">
      {/* ✅ Make Dropdown always visible */}
      <SearchableDropdown
        options={MAKES}
        value={make}
        onChange={(selectedMake) => {
          setMake(selectedMake);
          setModel("");
          setYear("");
          setPart("");
        }}
        placeholder="Select make..."
        disabled={!makeActive}
      />

      {/* ✅ Model shows only if make selected */}
      {modelActive && (
        <SearchableDropdown
          options={make ? MODELS[make] || [] : []}
          value={model}
          onChange={(selectedModel) => {
            setModel(selectedModel);
            setYear("");
            setPart("");
          }}
          placeholder="Select model..."
          disabled={!modelActive}
        />
      )}

      {/* ✅ Year shows only if make + model selected */}
      {yearActive && (
        <SearchableDropdown
          options={availableYears.map(String)}
          value={year}
          onChange={(selectedYear) => {
            setYear(selectedYear);
            setPart("");
          }}
          placeholder="Select year..."
          disabled={!yearActive}
        />
      )}

      {/* ✅ Part shows only if make + model + year selected */}
      {partActive && (
        <SearchableDropdown
          options={PARTS}
          value={part}
          onChange={(selectedPart) => {
            setPart(selectedPart);
          }}
          placeholder="Select part..."
          disabled={!partActive}
        />
      )}
    </div>
  </div>

  {/* ✅ Spacer adjusts based on how many dropdowns are visible */}
    <div
      id="shop-spacer"
      className="transition-all duration-300"
      style={{
        height:
          partActive ? 220 : // all 4 visible
          yearActive ? 180 : // 3 visible
          modelActive ? 160 : // 2 visible
          80            // only make visible
      }}
    />
  </div>
        

      {/* Screen reader only styling */}
      <style>{`
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0,0,0,0) !important;
          border: 0 !important;
        }
        
        /* Extra small screen adjustments */
        @media (max-width: 375px) {
          .mobile-shop-container {
            width: 96% !important;
            max-width: 350px !important;
            top: -50px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ShopByVehicle;
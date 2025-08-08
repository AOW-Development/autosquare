import React, { useState } from "react";
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

const PARTS = [
  "Engine",
  "Transmission",
];

// const SUBCAT = [
//   "Alternator",
//   "Blower Motor",
//   "Coil / Ignitor",
//   "Engine / Motor Control Module",
//   "Engine Cooling",
//   "Engine Misc",
//   "Engine Parts",
//   "Exhaust Parts",
// ];

// const OPTIONS = [
//   "Air cleaner",
//   "Oil plan",
//   "Throttle body assembly",
//   "Fan Blade",
//   "Fan Clutch",
// ];

const ShopByVehicle: React.FC = () => {
    const router = useRouter();
    const path=usePathname();
  // Get localStorage details if available
  useEffect(() => {
    if(path=="/"){
      setMake("")
      setModel("")
      setYear("")
      setPart("")
      
    }else if(path=="/product/engines") {
       setMake("")
      setModel("")
      setYear("")
      setPart("")
     
    }else{
      const stored = localStorage.getItem("shopByVehicle");
      if (stored) {
        try {
          const { make: storedMake, model: storedModel, year: storedYear, part: storedPart } = JSON.parse(stored);
          if (storedMake) setMake(storedMake);
          if (storedModel) setModel(storedModel);
          if (storedYear) setYear(storedYear);
          if (storedPart) setPart(storedPart);
        } catch {
          // Ignore parse errors
        }
      }
    }
  }, [router]);
  
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [part, setPart] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [focused, setFocused] = useState<string | null>(null);
  const [availableYears, setAvailableYears] = useState([]);
  const API_BASE = process.env.NEXT_PUBLIC_API_URL; 
  const makeActive = true;
  const modelActive = make !== "";
  const yearActive = make !== "" && model !== "";
  const partActive = make !== "" && model !== "" && year !== "";
  // const subCategoryActive = partActive && part !== "";
  // const optionActive = subCategoryActive && subCategory !== "";

  const arrowUrl = "/Images/home/arrows.png";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const arrowStyle = {
    backgroundImage: `url('${arrowUrl}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 1rem center",
    backgroundSize: "20px 20px",
  };

  useEffect(() => {
    if (make && model) {
      fetch(`${API_BASE}/products/years?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`)
        .then(res => res.json())
        .then(data => setAvailableYears(data.sort((a:number,b:number) => Number(b) - Number(a))))
        .catch(() => setAvailableYears([]));
    } else {
      setAvailableYears([]);
    }
  }, [make, model]);

  React.useEffect(() => {
    if (make && model && year && part) {
      const query = new URLSearchParams({ make, model, year, part }).toString();
      localStorage.setItem("shopByVehicle", JSON.stringify({
        make,
        model,
        year,
        part
      }));
      // setMake(make)
      // setModel(model)
      // setYear(year)
      // setPart(part)
      router.push(`/catalogue/engine/home?${query}`);
    }
  }, [make, model, year, part]);

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
              options={availableYears}
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
  {/* Mobile Layout */}
  <div className="w-full lg:hidden" style={{ position: "relative" }}>
    <div className="bg-[#091B33] pt-12 sm:pt-20 ">
      <div
        className="relative -mt-12 sm:-mt-20 mx-auto md:w-[50%] max-w-[400px] rounded-md shadow-lg px-4 py-4 sm:py-6 flex flex-col justify-center mobile-shop-container"
        style={{ background: "#00A3FF80" }}
      >
        <div
          className="text-left font-exo-2 font-bold text-[14px] sm:text-[16px] tracking-wider mb-3 sm:mb-4 uppercase text-white"
          id="shop-by-vehicle-title-mobile"
        >
          SHOP BY VEHICLE
        </div>

        <div className="flex flex-col gap-2 sm:gap-3 ">
          {/* Make Dropdown */}
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

          {/* Model Dropdown */}
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

          {/* Year Dropdown */}
          {yearActive && (
            <SearchableDropdown
              options={availableYears}
              value={year}
              onChange={(selectedYear) => {
                setYear(selectedYear);
                setPart("");
              }}
              placeholder="Select year..."
              disabled={!yearActive}
            />
          )}

          {/* Part Dropdown */}
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
    </div>
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
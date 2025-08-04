import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Listbox } from '@headlessui/react' 
import { MAKES, MODELS, YEARS } from './vehicleData';
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Yaldevi } from "next/font/google";

const PARTS = [
  "Engine",
  "Transmission",
  "Axel assembly",
  "Transfer case",
  "Head light",
  "Tail light",
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
        .then(data => setAvailableYears(data))
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
          {/* Make Dropdown */}
           <select
            id="make-select"
            aria-label="Select make"
            className={`w-[368px] h-[38px] px-4 text-sm rounded-md border-2 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none ${
              makeActive
                ? "bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer"
                : "bg-gray-200 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed"
            }`}
            value={make}
            onChange={(e) => {
              setMake(e.target.value);
              setModel("");
              setYear("");
              setPart("");
            }}
            onFocus={() => setFocused("make")}
            onBlur={() => setFocused(null)}
            disabled={!makeActive}
            style={arrowStyle}
          >
            <option value="" disabled>
              Select make...
            </option>
            {MAKES.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          {/* Model Dropdown */}
          <select
            id="model-select-desktop"
            aria-label="Select model"
            className={`w-[368px] h-[38px] px-4 text-sm rounded-md border-2 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none ${
              modelActive
                ? "bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer"
                : "bg-gray-200 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed"
            }`}
            value={model}
            onChange={(e) => {
              setModel(e.target.value);
              setYear("");
              setPart("");
            }}
            onFocus={() => setFocused("model")}
            onBlur={() => setFocused(null)}
            disabled={!modelActive}
            style={arrowStyle}
          >
            <option value="" disabled>
              Select model...
            </option>
            {(MODELS[make] || []).map((mo) => (
              <option key={mo} value={mo}>
                {mo}
              </option>
            ))}
          </select>

          {/* Year Dropdown */}
          <select
            id="year-select-desktop"
            aria-label="Select year"
            className={`w-[368px] h-[38px] px-4 text-sm rounded-md border-2 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none ${
              yearActive
                ? "bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer"
                : "bg-gray-200 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed"
            }`}
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              setPart("");
            }}
            onFocus={() => setFocused("year")}
            onBlur={() => setFocused(null)}
            disabled={!yearActive}
            style={arrowStyle}
          >
            <option value="" disabled>
              Select year...
            </option>
            {availableYears.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          {/* Part Dropdown */}
          <select
            id="part-select"
            aria-label="Select part"
            className={`w-[368px] h-[38px] px-4 text-sm rounded-md border-2 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none ${
              partActive
                ? "bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer"
                : "bg-gray-200 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed"
            }`}
            value={part}
            onChange={(e) => {
              setPart(e.target.value);
            }}
            onFocus={() => setFocused("part")}
            onBlur={() => setFocused(null)}
            disabled={!partActive}
            style={arrowStyle}
          >
            <option value="" disabled>
              Select part...
            </option>
            {PARTS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

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
      <div className="w-full lg:hidden" style={{ position: "relative" }}>
        {/* This wrapper gives the background color only below the overlap */}
        <div className="bg-[#091B33] pt-12 sm:pt-20">
      <div
            className="relative -mt-12 sm:-mt-20 mx-auto  w-[92%] max-w-[400px]  rounded-md shadow-lg px-4 py-4 sm:py-6 flex flex-col justify-center mobile-shop-container"
            style={{ background: "#00A3FF80" }}
      >
        <div
              className="text-left font-exo-2 font-bold text-[14px] sm:text-[16px] tracking-wider mb-3 sm:mb-4 uppercase text-white"
          id="shop-by-vehicle-title-mobile"
        >
          SHOP BY VEHICLE
        </div>

        <div className="flex flex-col gap-2 sm:gap-3">
          {/* Make Dropdown - Always visible */}
          <Listbox value={make} onChange={(value) => {
            setMake(value);
            setModel("");
            setYear("");
            setPart("");
          }}>
            {({ open }) => (
              <div className="relative">
                <Listbox.Button className="w-full h-[40px] sm:h-[44px] px-3 sm:px-4 text-sm rounded-md border bg-white border-gray-200 text-gray-900 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none flex items-center justify-between">
                  {make || "Select make..."}
                  <svg
                    className={`ml-2 h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-50 max-h-60 overflow-auto">
                  {MAKES.map((m) => (
                    <Listbox.Option
                      key={m}
                      value={m}
                      className={({ active }) =>
                        `cursor-pointer select-none px-4 py-2 ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'}`
                      }
                    >
                      {m}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            )}
          </Listbox>

          {/* Model Dropdown - Only visible when make is selected */}
          {modelActive && (
            <Listbox value={model} onChange={(value) => {
              setModel(value);
              setYear("");
              setPart("");
            }}>
              {({ open }) => (
                <div className="relative">
                  <Listbox.Button className="w-full h-[40px] sm:h-[44px] px-3 sm:px-4 text-sm rounded-md border-2 bg-white border-gray-200 text-gray-900 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none flex items-center justify-between">
                    {model || "Select model..."}
                    <svg
                      className={`ml-2 h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Listbox.Button>
                  <Listbox.Options className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-50 max-h-60 overflow-auto">
                    {(MODELS[make] || []).map((mo) => (
                      <Listbox.Option
                        key={mo}
                        value={mo}
                        className={({ active }) =>
                          `cursor-pointer select-none px-4 py-2 ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'}`
                        }
                      >
                        {mo}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              )}
            </Listbox>
          )}

          {/* Year Dropdown - Only visible when make and model are selected */}
          {yearActive && (
            <Listbox value={year} onChange={(value) => {
              setYear(value);
              setPart("");
            }}>
              {({ open }) => (
                <div className="relative">
                  <Listbox.Button className="w-full h-[40px] sm:h-[44px] px-3 sm:px-4 text-sm rounded-md border-2 bg-white border-gray-200 text-gray-900 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none flex items-center justify-between">
                    {year || "Select year..."}
                    <svg
                      className={`ml-2 h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Listbox.Button>
                  <Listbox.Options className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-50 max-h-60 overflow-auto">
                    {availableYears.map((y) => (
                      <Listbox.Option
                        key={y}
                        value={y}
                        className={({ active }) =>
                          `cursor-pointer select-none px-4 py-2 ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'}`
                        }
                      >
                        {y}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              )}
            </Listbox>
          )}

          {/* Part Dropdown - Only visible when make, model, and year are selected */}
          {partActive && (
            <Listbox value={part} onChange={(value) => {
              setPart(value);
            }}>
              {({ open }) => (
                <div className="relative">
                  <Listbox.Button className="w-full h-[40px] sm:h-[44px] px-3 sm:px-4 text-sm rounded-md border-2 bg-white border-gray-200 text-gray-900 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none flex items-center justify-between">
                    {part || "Select part..."}
                    <svg
                      className={`ml-2 h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Listbox.Button>
                  <Listbox.Options className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-50 max-h-60 overflow-auto">
                    {PARTS.map((p) => (
                      <Listbox.Option
                        key={p}
                        value={p}
                        className={({ active }) =>
                          `cursor-pointer select-none px-4 py-2 ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'}`
                        }
                      >
                        {p}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              )}
            </Listbox>
          )}

          {/* Sub-category Dropdown */}
          {/* Options Dropdown */}
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

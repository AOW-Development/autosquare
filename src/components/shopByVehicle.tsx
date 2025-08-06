import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MAKES, MODELS, YEARS } from './vehicleData';
import { usePathname } from "next/navigation";
import { Yaldevi } from "next/font/google";

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
  const path = usePathname();

  // Get localStorage details if available
  useEffect(() => {
    if (path == "/") {
      setMake("")
      setModel("")
      setYear("")
      setPart("")
      setSubCategory("")
      setOption("")
    } else if (path == "/product/engines") {
      setMake("")
      setModel("")
      setYear("")
      setPart("")
      setSubCategory("")
      setOption("")
    } else {
      const stored = localStorage.getItem("shopByVehicle");
      if (stored) {
        try {
          const { make: storedMake, model: storedModel, year: storedYear, part: storedPart, subCategory: storedSubCategory, option: storedOption } = JSON.parse(stored);
          if (storedMake) setMake(storedMake);
          if (storedModel) setModel(storedModel);
          if (storedYear) setYear(storedYear);
          if (storedPart) setPart(storedPart);
          if (storedSubCategory) setSubCategory(storedSubCategory);
          if (storedOption) setOption(storedOption);
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
  const [subCategory, setSubCategory] = useState("");
  const [option, setOption] = useState("");
  
  // Search states
  const [makeSearch, setMakeSearch] = useState("");
  const [modelSearch, setModelSearch] = useState("");
  const [yearSearch, setYearSearch] = useState("");
  const [partSearch, setPartSearch] = useState("");
  const [subCategorySearch, setSubCategorySearch] = useState("");
  const [optionSearch, setOptionSearch] = useState("");
  
  // Dropdown visibility states
  const [showMakeDropdown, setShowMakeDropdown] = useState(false);
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [showPartDropdown, setShowPartDropdown] = useState(false);
  const [showSubCategoryDropdown, setShowSubCategoryDropdown] = useState(false);
  const [showOptionDropdown, setShowOptionDropdown] = useState(false);

  const [focused, setFocused] = useState<string | null>(null);
  const [availableYears, setAvailableYears] = useState([]);
  const API_BASE = process.env.NEXT_PUBLIC_API_URL;

  // Refs for input elements
  const makeRef = useRef<HTMLInputElement>(null);
  const modelRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const partRef = useRef<HTMLInputElement>(null);
  const subCategoryRef = useRef<HTMLInputElement>(null);
  const optionRef = useRef<HTMLInputElement>(null);

  const makeActive = true;
  const modelActive = make !== "";
  const yearActive = make !== "" && model !== "";
  const partActive = make !== "" && model !== "" && year !== "";
  const subCategoryActive = partActive && part !== "";
  const optionActive = subCategoryActive && subCategory !== "";

  const arrowUrl = "/Images/home/arrows.png";
  const arrowStyle = {
    backgroundImage: `url('${arrowUrl}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 1rem center",
    backgroundSize: "20px 20px",
  };

  // Filter functions
  const filteredMakes = MAKES.filter(m => 
    m.toLowerCase().includes(makeSearch.toLowerCase())
  );

  const filteredModels = (MODELS[make] || []).filter(m => 
    m.toLowerCase().includes(modelSearch.toLowerCase())
  );

  const filteredYears = availableYears.filter((y: string) => 
    y.includes(yearSearch)
  );

  const filteredParts = PARTS.filter(p => 
    p.toLowerCase().includes(partSearch.toLowerCase())
  );

  // const filteredSubCategories = SUBCAT.filter(s => 
  //   s.toLowerCase().includes(subCategorySearch.toLowerCase())
  // );

  // const filteredOptions = OPTIONS.filter(o => 
  //   o.toLowerCase().includes(optionSearch.toLowerCase())
  // );

  useEffect(() => {
    if (make && model) {
      fetch(`${API_BASE}/products/years?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`)
        .then(res => res.json())
        .then(data => setAvailableYears(data.sort((a: number, b: number) => Number(b) - Number(a))))
        .catch(() => setAvailableYears([]));
    } else {
      setAvailableYears([]);
    }
  }, [make, model]);

  React.useEffect(() => {
    if (make && model && year && part && subCategory && option) {
      const query = new URLSearchParams({ make, model, year, part, subCategory, option }).toString();
      localStorage.setItem("shopByVehicle", JSON.stringify({
        make,
        model,
        year,
        part,
        subCategory,
        option
      }));
      router.push(`/catalogue/engine/home?${query}`);
    }
  }, [make, model, year, part, subCategory, option]);

  // Handle selection functions
  const handleMakeSelect = (selectedMake: string) => {
    setMake(selectedMake);
    setMakeSearch(selectedMake);
    setModel("");
    setYear("");
    setPart("");
    setSubCategory("");
    setOption("");
    setModelSearch("");
    setYearSearch("");
    setPartSearch("");
    setSubCategorySearch("");
    setOptionSearch("");
    setShowMakeDropdown(false);
  };

  const handleModelSelect = (selectedModel: string) => {
    setModel(selectedModel);
    setModelSearch(selectedModel);
    setYear("");
    setPart("");
    setSubCategory("");
    setOption("");
    setYearSearch("");
    setPartSearch("");
    setSubCategorySearch("");
    setOptionSearch("");
    setShowModelDropdown(false);
  };

  const handleYearSelect = (selectedYear: string) => {
    setYear(selectedYear);
    setYearSearch(selectedYear);
    setPart("");
    setSubCategory("");
    setOption("");
    setPartSearch("");
    setSubCategorySearch("");
    setOptionSearch("");
    setShowYearDropdown(false);
  };

  const handlePartSelect = (selectedPart: string) => {
    setPart(selectedPart);
    setPartSearch(selectedPart);
    setSubCategory("");
    setOption("");
    setSubCategorySearch("");
    setOptionSearch("");
    setShowPartDropdown(false);
  };

  const handleSubCategorySelect = (selectedSubCategory: string) => {
    setSubCategory(selectedSubCategory);
    setSubCategorySearch(selectedSubCategory);
    setOption("");
    setOptionSearch("");
    setShowSubCategoryDropdown(false);
  };

  const handleOptionSelect = (selectedOption: string) => {
    setOption(selectedOption);
    setOptionSearch(selectedOption);
    setShowOptionDropdown(false);
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (makeRef.current && !makeRef.current.contains(event.target as Node)) {
        setShowMakeDropdown(false);
      }
      if (modelRef.current && !modelRef.current.contains(event.target as Node)) {
        setShowModelDropdown(false);
      }
      if (yearRef.current && !yearRef.current.contains(event.target as Node)) {
        setShowYearDropdown(false);
      }
      if (partRef.current && !partRef.current.contains(event.target as Node)) {
        setShowPartDropdown(false);
      }
      if (subCategoryRef.current && !subCategoryRef.current.contains(event.target as Node)) {
        setShowSubCategoryDropdown(false);
      }
      if (optionRef.current && !optionRef.current.contains(event.target as Node)) {
        setShowOptionDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-20">
      {/* Desktop Layout */}
      <div
        className="absolute top-[-47px] left-1/2 transform -translate-x-1/2 w-[1200px] h-[121px] rounded-lg shadow-lg px-6 py-4 flex-col justify-center hidden lg:block"
        style={{ background: "#00A3FF80" }}
      >
        <div
          className="text-left text-[16px] tracking-wider mb-2 uppercase text-white"
          id="shop-by-vehicle-title"
        >
          SHOP BY VEHICLE
          </div>
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

          {/* Sub-category Search */}
          {/* <div ref={subCategoryRef} className="relative">
            <input
              type="text"
              placeholder="Search sub-category..."
              value={subCategorySearch}
              onChange={(e) => {
                setSubCategorySearch(e.target.value);
                setShowSubCategoryDropdown(true);
              }}
              onFocus={() => {
                setFocused("subCategory");
                setShowSubCategoryDropdown(true);
              }}
              onBlur={() => setFocused(null)}
              disabled={!subCategoryActive}
              className={`w-[368px] h-[38px] px-4 text-sm rounded-md border-2 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none ${
                subCategoryActive
                  ? "bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer"
                  : "bg-gray-200 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed"
              }`}
              style={arrowStyle}
            />
            {showSubCategoryDropdown && filteredSubCategories.length > 0 && subCategoryActive && (
              <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-50 max-h-60 overflow-auto border">
                {filteredSubCategories.map((s) => (
                  <div
                    key={s}
                    onClick={() => handleSubCategorySelect(s)}
                    className="cursor-pointer select-none px-4 py-2 hover:bg-blue-100 hover:text-blue-900 text-gray-900"
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div> */}

          {/* Options Search */}
          {/* <div ref={optionRef} className="relative">
            <input
              type="text"
              placeholder="Search option..."
              value={optionSearch}
              onChange={(e) => {
                setOptionSearch(e.target.value);
                setShowOptionDropdown(true);
              }}
              onFocus={() => {
                setFocused("option");
                setShowOptionDropdown(true);
              }}
              onBlur={() => setFocused(null)}
              disabled={!optionActive}
              className={`w-[368px] h-[38px] px-4 text-sm rounded-md border-2 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none ${
                optionActive
                  ? "bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer"
                  : "bg-gray-200 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed"
              }`}
              style={arrowStyle}
            />
            {showOptionDropdown && filteredOptions.length > 0 && optionActive && (
              <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-50 max-h-60 overflow-auto border">
                {filteredOptions.map((o) => (
                  <div
                    key={o}
                    onClick={() => handleOptionSelect(o)}
                    className="cursor-pointer select-none px-4 py-2 hover:bg-blue-100 hover:text-blue-900 text-gray-900"
                  >
                    {o}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div> */}

      {/* Mobile Layout */}
      <div className="w-full lg:hidden" style={{ position: "relative" }}>
        <div className="bg-[#091B33] pt-12 sm:pt-20">
          <div
            className="relative -mt-12 sm:-mt-20 mx-auto w-[92%] max-w-[400px] rounded-md shadow-lg px-4 py-4 sm:py-6 flex flex-col justify-center mobile-shop-container"
            style={{ background: "#00A3FF80" }}
          >
            <div
              className="text-left font-exo-2 font-bold text-[14px] sm:text-[16px] tracking-wider mb-3 sm:mb-4 uppercase text-white"
              id="shop-by-vehicle-title-mobile"
            >
              SHOP BY VEHICLE
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              {/* Make Search - Always visible */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search make..."
                  value={makeSearch}
                  onChange={(e) => {
                    setMakeSearch(e.target.value);
                    setShowMakeDropdown(true);
                  }}
                  onFocus={() => setShowMakeDropdown(true)}
                  className="w-full h-[40px] sm:h-[44px] px-3 sm:px-4 text-sm rounded-md border bg-white border-gray-200 text-gray-900 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
                {showMakeDropdown && filteredMakes.length > 0 && (
                  <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-50 max-h-60 overflow-auto border">
                    {filteredMakes.map((m) => (
                      <div
                        key={m}
                        onClick={() => handleMakeSelect(m)}
                        className="cursor-pointer select-none px-4 py-2 hover:bg-blue-100 hover:text-blue-900 text-gray-900"
                      >
                        {m}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Model Search - Only visible when make is selected */}
              {modelActive && (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search model..."
                    value={modelSearch}
                    onChange={(e) => {
                      setModelSearch(e.target.value);
                      setShowModelDropdown(true);
                    }}
                    onFocus={() => setShowModelDropdown(true)}
                    className="w-full h-[40px] sm:h-[44px] px-3 sm:px-4 text-sm rounded-md border-2 bg-white border-gray-200 text-gray-900 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  />
                  {showModelDropdown && filteredModels.length > 0 && (
                    <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-50 max-h-60 overflow-auto border">
                      {filteredModels.map((m) => (
                        <div
                          key={m}
                          onClick={() => handleModelSelect(m)}
                          className="cursor-pointer select-none px-4 py-2 hover:bg-blue-100 hover:text-blue-900 text-gray-900"
                        >
                          {m}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Year Search - Only visible when make and model are selected */}
              {yearActive && (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search year..."
                    value={yearSearch}
                    onChange={(e) => {
                      setYearSearch(e.target.value);
                      setShowYearDropdown(true);
                    }}
                    onFocus={() => setShowYearDropdown(true)}
                    className="w-full h-[40px] sm:h-[44px] px-3 sm:px-4 text-sm rounded-md border-2 bg-white border-gray-200 text-gray-900 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  />
                  {showYearDropdown && filteredYears.length > 0 && (
                    <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-50 max-h-60 overflow-auto border">
                      {filteredYears.map((y) => (
                        <div
                          key={y}
                          onClick={() => handleYearSelect(y)}
                          className="cursor-pointer select-none px-4 py-2 hover:bg-blue-100 hover:text-blue-900 text-gray-900"
                        >
                          {y}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Part Search - Only visible when make, model, and year are selected */}
              {partActive && (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search part..."
                    value={partSearch}
                    onChange={(e) => {
                      setPartSearch(e.target.value);
                      setShowPartDropdown(true);
                    }}
                    onFocus={() => setShowPartDropdown(true)}
                    className="w-full h-[40px] sm:h-[44px] px-3 sm:px-4 text-sm rounded-md border-2 bg-white border-gray-200 text-gray-900 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  />
                  {showPartDropdown && filteredParts.length > 0 && (
                    <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-50 max-h-60 overflow-auto border">
                      {filteredParts.map((p) => (
                        <div
                          key={p}
                          onClick={() => handlePartSelect(p)}
                          className="cursor-pointer select-none px-4 py-2 hover:bg-blue-100 hover:text-blue-900 text-gray-900"
                        >
                          {p}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Sub-category Search - Only visible when part is selected */}
              {subCategoryActive && (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search sub-category..."
                    value={subCategorySearch}
                    onChange={(e) => {
                      setSubCategorySearch(e.target.value);
                      setShowSubCategoryDropdown(true);
                    }}
                    onFocus={() => setShowSubCategoryDropdown(true)}
                    className="w-full h-[40px] sm:h-[44px] px-3 sm:px-4 text-sm rounded-md border-2 bg-white border-gray-200 text-gray-900 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  />
                  {showSubCategoryDropdown && filteredSubCategories.length > 0 && (
                    <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-50 max-h-60 overflow-auto border">
                      {filteredSubCategories.map((s) => (
                        <div
                          key={s}
                          onClick={() => handleSubCategorySelect(s)}
                          className="cursor-pointer select-none px-4 py-2 hover:bg-blue-100 hover:text-blue-900 text-gray-900"
                        >
                          {s}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              

              {/* Options Search - Only visible when sub-category is selected */}
              {/* {optionActive && (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search option..."
                    value={optionSearch}
                    onChange={(e) => {
                      setOptionSearch(e.target.value);
                      setShowOptionDropdown(true);
                    }}
                    onFocus={() => setShowOptionDropdown(true)}
                    className="w-full h-[40px] sm:h-[44px] px-3 sm:px-4 text-sm rounded-md border-2 bg-white border-gray-200 text-gray-900 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  />
                  {showOptionDropdown && filteredOptions.length > 0 && (
                    <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-50 max-h-60 overflow-auto border">
                      {filteredOptions.map((o) => (
                        <div
                          key={o}
                          onClick={() => handleOptionSelect(o)}
                          className="cursor-pointer select-none px-4 py-2 hover:bg-blue-100 hover:text-blue-900 text-gray-900"
                        >
                          {o}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )} */}
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

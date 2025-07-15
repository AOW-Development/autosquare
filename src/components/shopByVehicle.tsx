import React, { useState } from "react";
import { useRouter } from "next/navigation";

const MAKES = ["Acura", "Audi", "BMW", "Buick", "Cadillac", "Ford"];
const MODELS: Record<string, string[]> = {
  Ford: ["Aerostar", "Bronco", "Country Squire", "E-150 Econoline"],
  Acura: ["ILX", "MDX", "RDX", "TLX"],
  Audi: ["A3", "A4", "Q5", "Q7"],
  BMW: ["3 Series", "5 Series", "X3", "X5"],
  Buick: ["Enclave", "Encore", "LaCrosse", "Regal"],
  Cadillac: ["ATS", "CT5", "Escalade", "XT5"],
};
const YEARS = ["1991", "2020", "2021", "2022", "2023", "2024"];
const PARTS = [
  "Engine",
  "Transmission",
  "Axel assembly",
  "Transfer case",
  "Head light",
  "Tail light",
];

const SUBCAT = [
  "Alternator",
  "Blower Motor",
  "Coil / Ignitor",
  "Engine / Motor Control Module",
  "Engine Cooling",
  "Engine Misc",
  "Engine Parts",
  "Exhaust Parts",
];

const OPTIONS = [
  "Air cleaner",
  "Oil plan",
  "Throttle body assembly",
  "Fan Blade",
  "Fan Clutch",
];

const ShopByVehicle: React.FC = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [part, setPart] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [option, setOption] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

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

  const router = useRouter();

  React.useEffect(() => {
    if (make && model && year && part && subCategory && option) {
      router.push("/catalogue/engine/home");
    }
  }, [make, model, year, part, subCategory, option, router]);

  return (
    <div className="relative z-20">
      {/* Desktop Layout */}
      <div
        className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 w-[1200px] h-[121px] backdrop-blur-md rounded-lg shadow-lg px-6 py-4  flex-col justify-center hidden lg:block"
        style={{ background: "#00A3FFA6" }}
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
              setSubCategory("");
              setOption("");
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
              setSubCategory("");
              setOption("");
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
              setSubCategory("");
              setOption("");
            }}
            onFocus={() => setFocused("year")}
            onBlur={() => setFocused(null)}
            disabled={!yearActive}
            style={arrowStyle}
          >
            <option value="" disabled>
              Select year...
            </option>
            {YEARS.map((y) => (
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
              setSubCategory("");
              setOption("");
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
          <select
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
          </select>

          {/* options Dropdown */}
          <select
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
          </select>
        </div>
      </div>

      {/* Mobile Layout */}
      <div
        className="absolute top-[-60px] sm:top-[-80px] left-1/2 transform -translate-x-1/2 w-[92%] max-w-[400px] backdrop-blur-md rounded-lg shadow-lg px-4 py-4 sm:py-6 flex flex-col justify-center lg:hidden mobile-shop-container"
        style={{ background: "#00A3FFA6" }}
      >
        <div
          className="text-center font-exo-2 font-bold text-[14px] sm:text-[16px] tracking-wider mb-3 sm:mb-4 uppercase text-white"
          id="shop-by-vehicle-title-mobile"
        >
          SHOP BY VEHICLE
        </div>

        <div className="flex flex-col gap-2 sm:gap-3">
          {/* Make Dropdown - Always visible */}
          <select
            id="make-select-mobile"
            aria-label="Select make"
            className={`w-full h-[40px] sm:h-[44px] px-3 sm:px-4 text-sm rounded-md border-2 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none ${
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
              setSubCategory("");
              setOption("");
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

          {/* Model Dropdown - Only visible when make is selected */}
          {modelActive && (
            <select
              id="model-select-mobile"
              aria-label="Select model"
              className={`w-full h-[40px] sm:h-[44px] px-3 sm:px-4 text-sm rounded-md border-2 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer`}
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
                setYear("");
                setPart("");
                setSubCategory("");
                setOption("");
              }}
              onFocus={() => setFocused("model")}
              onBlur={() => setFocused(null)}
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
          )}

          {/* Year Dropdown - Only visible when make and model are selected */}
          {yearActive && (
            <select
              id="year-select-mobile"
              aria-label="Select year"
              className={`w-full h-[40px] sm:h-[44px] px-3 sm:px-4 text-sm rounded-md border-2 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer`}
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
                setPart("");
                setSubCategory("");
                setOption("");
              }}
              onFocus={() => setFocused("year")}
              onBlur={() => setFocused(null)}
              style={arrowStyle}
            >
              <option value="" disabled>
                Select year...
              </option>
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          )}

          {/* Part Dropdown - Only visible when make, model, and year are selected */}
          {partActive && (
            <>
              <select
                id="part-select-mobile"
                aria-label="Select part"
                className={`w-full h-[40px] sm:h-[44px] px-3 sm:px-4 text-sm rounded-md border-2 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer`}
                value={part}
                onChange={(e) => {
                  setPart(e.target.value);
                  setSubCategory("");
                  setOption("");
                }}
                onFocus={() => setFocused("part")}
                onBlur={() => setFocused(null)}
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
              {subCategoryActive && (
                <select
                  id="subcat-select-mobile"
                  aria-label="Select sub-category"
                  className={`w-full h-[40px] sm:h-[44px] px-3 sm:px-4 text-sm rounded-md border-2 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer`}
                  value={subCategory}
                  onChange={(e) => {
                    setSubCategory(e.target.value);
                    setOption("");
                  }}
                  onFocus={() => setFocused("subCategory")}
                  onBlur={() => setFocused(null)}
                  style={arrowStyle}
                  disabled={!subCategoryActive}
                >
                  <option value="" disabled>
                    Select sub-category...
                  </option>
                  {SUBCAT.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              )}
              {/* options Dropdown */}
              {optionActive && (
                <select
                  id="option-select-mobile"
                  aria-label="Select option"
                  className={`w-full h-[40px] sm:h-[44px] px-3 sm:px-4 text-sm rounded-md border-2 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer`}
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
                  onFocus={() => setFocused("option")}
                  onBlur={() => setFocused(null)}
                  style={arrowStyle}
                  disabled={!optionActive}
                >
                  <option value="" disabled>
                    Select option...
                  </option>
                  {OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              )}
            </>
          )}
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

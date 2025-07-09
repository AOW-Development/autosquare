import React, { useState } from "react";

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

const ShopByVehicle: React.FC = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [part, setPart] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

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

  return (
    <div className="relative z-20">
      <div
        className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 w-[1200px] h-[121px] backdrop-blur-md rounded-lg shadow-lg px-6 py-4 flex flex-col justify-center"
        style={{ background: "#00A3FFA6" }}
      >
        <div
          className="text-left font-exo-2 font-bold text-[16px] tracking-wider mb-2 uppercase text-white"
          id="shop-by-vehicle-title"
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
            {YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          <select
            id="part-select"
            aria-label="Select part"
            className={`w-[368px] h-[38px] px-4 text-sm rounded-md border-2 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none ${
              partActive
                ? "bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer"
                : "bg-gray-200 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed"
            }`}
            value={part}
            onChange={(e) => setPart(e.target.value)}
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
      `}</style>
    </div>
  );
};

export default ShopByVehicle;

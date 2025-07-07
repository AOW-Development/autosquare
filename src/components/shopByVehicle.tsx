
import React, { useState } from "react";

// Sample data
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

const PRIMARY_COLOR = "#2563eb";
const GRAY = "#e5e7eb";
const FONT = '"Inter", "Segoe UI", Arial, sans-serif';

const ShopByVehicle: React.FC = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

  // Each dropdown stays active after selection; only future dropdowns are disabled
  const makeActive = true;
  const modelActive = make !== "";
  const yearActive = make !== "" && model !== "";

  // Arrow image path (relative to public)
  const arrowUrl = "/Images/home/arrows.png";

  const arrowStyle = { 
    backgroundImage: `url('${arrowUrl}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1rem center', // right side
    backgroundSize: '20px 20px',
  };

  return (
    <div className="max-w-[1200px] mx-auto px-2 py-4 bg-[#00A3FF]/60 rounded-lg">
      <div className="text-left font-exo-2 font-bold text-2xl tracking-wider mb-4 uppercase lg:text-4xl" id="shop-by-vehicle-title">
        SHOP BY VEHICLE
      </div>
      <div className="flex flex-row gap-2 w-full justify-center items-center">
        {/* Make Dropdown */}
        <div>
          <label htmlFor="make-select" className="sr-only">Select make</label>
          <select
            id="make-select"
            aria-label="Select make"
            className={`w-64 px-4 py-3 text-base rounded-lg border-2 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none ${makeActive ? "bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer" : "bg-gray-200 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed"}`}
            value={make}
            onChange={e => { setMake(e.target.value); setModel(""); setYear(""); }}
            onFocus={() => setFocused("make")}
            onBlur={() => setFocused(null)}
            disabled={!makeActive}
            style={{ ...arrowStyle }}
          >
            <option value="" disabled>Select make...</option>
            {MAKES.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        {/* Model Dropdown */}
        <div>
          <label htmlFor="model-select" className="sr-only">Select model</label>
          <select
            id="model-select"
            aria-label="Select model"
            className={`w-64 px-4 py-3 text-base rounded-lg border-2 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none ${modelActive ? "bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer" : "bg-gray-200 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed"}`}
            value={model}
            onChange={e => { setModel(e.target.value); setYear(""); }}
            onFocus={() => setFocused("model")}
            onBlur={() => setFocused(null)}
            disabled={!modelActive}
            style={{ ...arrowStyle }}
          >
            <option value="" disabled>Select model...</option>
            {(MODELS[make] || []).map(mo => <option key={mo} value={mo}>{mo}</option>)}
          </select>
        </div>
        {/* Year Dropdown */}
        <div>
          <label htmlFor="year-select" className="sr-only">Select year</label>
          <select
            id="year-select"
            aria-label="Select year"
            className={`w-64 px-4 py-3 text-base rounded-lg border-2 appearance-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none ${yearActive ? "bg-white border-gray-200 text-gray-900 opacity-100 cursor-pointer" : "bg-gray-200 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed"}`}
            value={year}
            onChange={e => setYear(e.target.value)}
            onFocus={() => setFocused("year")}
            onBlur={() => setFocused(null)}
            disabled={!yearActive}
            style={{ ...arrowStyle }}
          >
            <option value="" disabled>Select year...</option>
            {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
      </div>
      {/* Visually hidden class for screen readers */}
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
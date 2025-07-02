// # Responsive "Shop by Vehicle" Component

// ## Design Requirements
// Create a responsive vehicle selector that transforms across screen sizes. Component must include:
// - Title: "SHOP BY VEHICLE"
// - Make dropdown
// - Model dropdown (initially hidden/disabled)
// - Year dropdown (initially hidden/disabled)
// - Search button

// ### Visual Details from Images
// 1. **Text Content**:
//    - Title: "SHOP BY VEHICLE" (all caps)
//    - Placeholders: "Select make...", "Select model...", "Select year..."
//    - Button: "Search"
//    - Sample Options:
//      - Makes: Acura, Audi, BMW, Buick, Cadillac, Ford
//      - Models: Aerostar, Bronco, Country Squire, E-150 Econoline
//      - Years: 1991, 2020-2024

// 2. **Component States**:
//    - Initial: Only make dropdown + search button visible
//    - Make selected: Model dropdown appears
//    - Model selected: Year dropdown appears
//    - All selected: Search button becomes active

// 3. **Visual Style**:
//    - Clean, modern dropdowns with down arrow icons
//    - Selected values replace placeholders (e.g., "Ford" instead of "Select make...")
//    - Search button with active/inactive states
//    - Consistent spacing and alignment

// ## Responsive Behavior

// ### Mobile (SM: <576px)
// ![Mobile Layout](mobile-states.jpg)
// - **Vertical stacking** of all elements
// - Full-width elements (100% container width)
// - Element order:
//   1. Title (centered)
//   2. Make dropdown
//   3. Model dropdown (appears after make selection)
//   4. Year dropdown (appears after model selection)
//   5. Search button (always visible)
// - Spacing: 12px vertical gap between elements
// - Button: Full-width with centered text

// ### Tablet (MD: 576-767px)
// - Two-column layout:

// - 8px horizontal gap between columns
// - Dropdowns: Full width in their columns
// - Button: Full height of row

// ### Desktop (LG: 768-991px)
// - Horizontal inline layout:

// - Equal width dropdowns (flexible)
// - 8px horizontal gap between elements
// - Button: Auto width (120px min-width)

// ### Large Desktop (XL: ≥992px)
// - Same as LG layout
// - Max-width container: 1200px
// - Larger font sizes

// ## Interaction States
// 1. **Dropdowns**:
//  - Default: Light border, down arrow
//  - Focus: Border accent color, subtle shadow
//  - Disabled: 50% opacity, grayed text
 
// 2. **Search Button**:
//  - Inactive: Gray background, 50% opacity
//  - Active: Primary color, full opacity
//  - Hover: 10% darker than active state
//  - Active state animation: slight scale (0.98)

// ## Implementation Requirements
// 1. **Progressive Display**:
//  - Model dropdown only appears after make selection
//  - Year dropdown only appears after model selection
//  - Search button always visible but disabled until all selections made

// 2. **Accessibility**:
//  - ARIA labels for all inputs
//  - Keyboard navigable
//  - Focus states visible
//  - Semantic HTML structure

// 3. **Performance**:
//  - Mobile-first CSS
//  - Fluid transitions between states
//  - Efficient reflow between breakpoints

// 4. **Visual Fidelity**:
//  - Match spacing and proportions from images
//  - Consistent font stack (sans-serif)
//  - Clean dropdown styling with custom arrow
//  - Smooth state transitions (300ms)

// ## Mobile-Specific Notes
// - Maintain vertical rhythm in stacked layout
// - Ensure touch targets ≥44px
// - Prevent horizontal scrolling
// - Optimize dropdown height for mobile
// - Use device-native select menus for better UX

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
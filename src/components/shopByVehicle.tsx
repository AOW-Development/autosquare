import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { MAKES, MODELS } from './vehicleData';
import SearchableDropdown from "./Searchable";
 
interface ShopByVehicleProps {
  initialMake?: string;
}
 
const PARTS = ["Engine", "Transmission"];
 
const ShopByVehicle: React.FC<ShopByVehicleProps> = ({
  initialMake = "",
}) => {
  const router = useRouter();
  const path = usePathname();
 
  const [make, setMake] = useState(denormalizeSlug(initialMake));
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [part, setPart] = useState("");
  const [availableYears, setAvailableYears] = useState<number[]>([]);
  const [apiError, setApiError] = useState<string | null>(null);
  
  // Use ref instead of state to prevent infinite loops
  const hasRedirectedRef = useRef(false);
  const userChangedRef = useRef(false);
 
  const API_BASE = process.env.NEXT_PUBLIC_API_URL;
 
  const makeActive = true;
  const modelActive = make !== "";
  const yearActive = make !== "" && model !== "";
  const partActive = make !== "" && model !== "" && year !== "";
 
  function denormalizeSlug(value: string): string {
    const ACRONYMS = new Set([
      "bmw",
      "gmc",
      "ram",
      "vw",
      "usa",
    ]);
 
    const COMPOUND_BRANDS = new Set([
      "land-rover",
    ]);
    if (!value) return "";
 
    const lower = value.toLowerCase();
 
    // Handle compound brands like "land-rover" → "LandRover"
    if (COMPOUND_BRANDS.has(lower)) {
      return lower
        .split("-")
        .map(
          part => part.charAt(0).toUpperCase() + part.slice(1)
        )
        .join("");
    }
 
    return lower
      .split("-")
      .map(word => {
        if (ACRONYMS.has(word)) {
          return word.toUpperCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
 
  useEffect(() => {
    setMake(denormalizeSlug(initialMake));
  }, [initialMake]);
 
  const normalizeValue = (value: string, list: string[]) => {
    return (
      list.find(
        (item) => item.toLowerCase() === value.toLowerCase()
      ) || ""
    );
  };
 
  // Reset or load saved values based on page
  useEffect(() => {
    if (path === "/" || path === "/engine" || path === "/transmission" || path === "/auto-Parts" || path.startsWith("/parts") || path.startsWith("/used-auto-parts")) {
      setMake("");
      setModel("");
      setYear("");
      setPart("");
      hasRedirectedRef.current = false;
    } else if (typeof window !== 'undefined') {
      // SSR safety check
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
 
  // Parse pathname for new URL format: /catalogue/engine/2025/bmw/1m
  useEffect(() => {
    if (!path.startsWith("/catalogue/")) return;
 
    const pathParts = path.split('/').filter(Boolean);
    // Expected: ['catalogue', 'engine', '2025', 'bmw', '1m']
    
    if (pathParts.length >= 5 && pathParts[0] === 'catalogue') {
      const partFromPath = pathParts[1]; // 'engine' or 'transmission'
      const yearFromPath = pathParts[2]; // '2025'
      const makeFromPath = pathParts[3]; // 'bmw'
      const modelFromPath = pathParts[4]; // '1m' or 'new-yorker'
      
      // Denormalize make (bmw → BMW)
      const normalizedMake = denormalizeSlug(makeFromPath);
      if (!normalizedMake || !MAKES.includes(normalizedMake)) return;
      
      // Find matching model from MODELS using slug
      const modelsForMake = MODELS[normalizedMake];
      if (!modelsForMake) return;
      
      // Match model slug to actual model name
      const normalizedModel = modelsForMake.find((dbModel: string) => {
        const dbModelSlug = createSlug(dbModel);
        return dbModelSlug === modelFromPath;
      });
      
      if (!normalizedModel) return;
      
      // Normalize part (engine → Engine)
      const normalizedPart = partFromPath.charAt(0).toUpperCase() + partFromPath.slice(1);
      if (!PARTS.includes(normalizedPart)) return;
      
      // Set state with correct casing
      setMake(normalizedMake);
      setModel(normalizedModel);
      setYear(yearFromPath);
      setPart(normalizedPart);
    }
  }, [path]);
 
  // Fetch available years when make & model change
  useEffect(() => {
    if (make && model) {
      setApiError(null);
      fetch(
        `${API_BASE}/products/years?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`
      )
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch years');
          return res.json();
        })
        .then((data) => {
          setAvailableYears(data.sort((a: number, b: number) => b - a));
          setApiError(null);
        })
        .catch((error) => {
          console.error('Error fetching years:', error);
          setApiError('Unable to load years. Please try again.');
          setAvailableYears([]);
        });
    } else {
      setAvailableYears([]);
      setApiError(null);
    }
  }, [make, model, API_BASE]);
 
  // Utility function to create SEO-friendly slugs
  const createSlug = (text: string): string => {
    if (!text) return '';
    
    return text
      .toLowerCase()
      .replace(/,/g, ' ')
      .replace(/\//g, ' ')
      .replace(/[()]/g, ' ')
      .replace(/\s*-\s*/g, '-')
      .replace(/[^a-z0-9\s-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s/g, '-')
      .replace(/-+/g, '-');
  };
 
// Redirect when all selections are made - FIXED for homepage
useEffect(() => {
  if (!make || !model || !year || !part) return;

  const makeSlug = make.toLowerCase().replace(/\s+/g, '-').replace(/-/g, '-');
  const modelSlug = createSlug(model);
  const partSlug = part.toLowerCase();
  const cleanUrl = `/catalogue/${partSlug}/${year}/${makeSlug}/${modelSlug}`;

  // Skip if already on correct catalogue page
  if (path === cleanUrl) return;

  // Skip product pages (protect product navigation)
  if (path.startsWith("/product/")) return;

  // Redirect from homepage OR wrong catalogue page
  localStorage.setItem("shopByVehicle", JSON.stringify({ make, model, year, part }));
  
  if (path.startsWith("/catalogue/")) {
    router.replace(cleanUrl);  // Same catalog → replace (no history)
  } else {
    router.push(cleanUrl);     // Homepage/other → push (add history)
  }
}, [make, model, year, part, path, router]);


  const boxRef = useRef<HTMLDivElement>(null);
 
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
              userChangedRef.current = true;
              hasRedirectedRef.current = false;
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
              userChangedRef.current = true;
              hasRedirectedRef.current = false;
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
              userChangedRef.current = true;
              hasRedirectedRef.current = false;
            }}
            placeholder="Select year..."
            disabled={!yearActive}
          />
 
          <SearchableDropdown
            options={PARTS}
            value={part}
            onChange={(selectedPart) => {
              setPart(selectedPart);
              userChangedRef.current = true;
              hasRedirectedRef.current = false;
            }}
            placeholder="Select part..."
            disabled={!partActive}
          />
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
                userChangedRef.current = true;
                hasRedirectedRef.current = false;
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
                  userChangedRef.current = true;
                  hasRedirectedRef.current = false;
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
                  userChangedRef.current = true;
                  hasRedirectedRef.current = false;
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
                  userChangedRef.current = true;
                  hasRedirectedRef.current = false;
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
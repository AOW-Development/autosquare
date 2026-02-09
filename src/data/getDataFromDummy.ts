import { PARTS } from "@/data/parts";

/**
 * Get a part from the dummy data by matching URL slugs to part names
 * 
 * This function handles ALL possible formats in your data:
 * - "Conv/Invert/Charger" (all slashes)
 * - "Corner/Park Light" (slash + space)
 * - "Air Flow Meter" (all spaces)
 * - "Alternator" (single word)
 * 
 * URL slugs are always hyphenated:
 * - conv-invert-charger
 * - corner-park-light
 * - air-flow-meter
 * - alternator
 */
export function getPartFromDummy(categories: string, id: string) {
  const categorySlug = categories.toLowerCase().trim();
  const idSlug = id.toLowerCase().trim();
  
  return PARTS.find((p) => {
    const partName = p.name.toLowerCase().trim();
    const partCategory = (p.category || "").toLowerCase().trim();
    
    // Convert the part name to slug format for comparison
    // This handles: "Conv/Invert/Charger" → "conv-invert-charger"
    //               "Corner/Park Light" → "corner-park-light"
    //               "Air Flow Meter" → "air-flow-meter"
    const partNameSlug = partName
      .replace(/\//g, "-")    // Replace slashes with hyphens
      .replace(/\s+/g, "-");  // Replace spaces with hyphens
    
    // Convert the category to slug format for comparison
    const partCategorySlug = partCategory
      .replace(/\//g, "-")
      .replace(/\s+/g, "-");
    
    // Now compare slugs directly
    return partNameSlug === idSlug && partCategorySlug === categorySlug;
  });
}
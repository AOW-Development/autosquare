import { PARTS } from "@/data/parts";

const normalize = (value?: string | string[]) => {
  if (!value) return [];

  const val = Array.isArray(value) ? value[0] : value;
  const lower = val.toLowerCase().trim();
  const parts = lower.split("-");

  const results = new Set<string>();
  results.add(parts.join(" "));

  for (let i = 0; i < parts.length - 1; i++) {
    const withSlash = parts
      .map((part, idx) => {
        if (idx === i) return part + "/" + parts[idx + 1];
        if (idx === i + 1) return null;
        return part;
      })
      .filter(Boolean)
      .join(" ");

    results.add(withSlash);
  }

  return Array.from(results);
};

export function getPartFromDummy(categories: string, id: string) {
  const possibleNames = normalize(id);
  const possibleCategories = normalize(categories);

  return PARTS.find(
    (p) =>
      possibleNames.includes(p.name.toLowerCase()) &&
      possibleCategories.includes(p.category?.toLowerCase() ?? "")
  );
}

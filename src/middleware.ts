import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { MODELS } from "@/components/vehicleData";
 
// Helper function to normalize values for URLs
const normalizeForUrl = (value: string) =>
  value
    .replace(/[ ,().;"'’‘"“”′″/]/g, "-")
    .replace(/''/g, "-")
    .replace(/([a-zA-Z]{2,})(\d+)/g, "$1-$2")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
 
// Canonical slug creator (same logic used in catalogue)
const createSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/,/g, " ")
    .replace(/\//g, " ")
    .replace(/[()]/g, " ")
    .replace(/\s*-\s*/g, "-")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\s/g, "-")
    .replace(/-+/g, "-");
 
// Resolve model against MODELS to preserve canonical hyphens
const resolveModelSlug = (make: string, modelParam: string) => {
  const models = MODELS[make.toUpperCase() as keyof typeof MODELS];
  if (!models) return normalizeForUrl(modelParam); // Use SAME normalizeForUrl
 
  // Test ALL models with YOUR normalizeForUrl logic
  const incoming = normalizeForUrl(modelParam);
  const match = models.find((m: string) =>
    normalizeForUrl(m) === incoming  //Same normalization!
  );
 
  return match ? normalizeForUrl(match) : normalizeForUrl(modelParam);
};
 
export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
 
  // 🔥 NEW: Fix malformed slugs like /ptcruiser → /pt-cruiser
  const catalogueMatch = pathname.match(/^\/catalogue\/(engine|transmission)\/(\d{4})\/([^\/]+)\/([^\/]+)$/);
  if (catalogueMatch) {
    const [, part, year, makeSlug, modelSlug] = catalogueMatch;
    const make = makeSlug.toUpperCase();
    const resolvedModel = resolveModelSlug(make, decodeURIComponent(modelSlug));
    const normalizedMake = normalizeForUrl(decodeURIComponent(makeSlug));
    const newPath = `/catalogue/${part}/${year}/${normalizedMake}/${resolvedModel}`;
    if (pathname !== newPath) {
      console.log(`🔄 301: ${pathname} → ${newPath}`);
      const res = NextResponse.redirect(new URL(newPath, request.url), 301);
      res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
      return res;
    }
  }
 
  // OLD → NEW redirect for engine
  if (pathname === "/catalogue/engine/home") {
    const year = searchParams.get("year");
    const make = searchParams.get("make")?.toLowerCase();
    const rawModel = searchParams.get("model") || "";
 
    if (year && make && rawModel) {
      const modelSlug = resolveModelSlug(make, rawModel);
      const newUrl = new URL(
        `/catalogue/engine/${year}/${make}/${modelSlug}`,
        request.url
      );
 
      const res = NextResponse.redirect(newUrl, 301);
      res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
      return res;
    }
  }
 
  // OLD → NEW redirect for transmission
  if (pathname === "/catalogue/transmission/home") {
    const year = searchParams.get("year");
    const make = searchParams.get("make")?.toLowerCase();
    const rawModel = searchParams.get("model") || "";
 
    if (year && make && rawModel) {
      const modelSlug = resolveModelSlug(make, rawModel);
      const newUrl = new URL(
        `/catalogue/transmission/${year}/${make}/${modelSlug}`,
        request.url
      );
 
      const res = NextResponse.redirect(newUrl, 301);
      res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
      return res;
    }
  }
 
  // ✅ Handle redirect for /product/engines with query params
  if (pathname === "/product/engines") {
    const make = searchParams.get("make");
    const model = searchParams.get("model");
    const year = searchParams.get("year");
    const part = searchParams.get("part");
    const sku = searchParams.get("sku");
 
    if (make && model && year && part && sku) {
      try {
        const miles = sku.split("-").at(-1)?.replace(/[^\d]/g, "");
 
        // ✅ PRODUCTION URL (not localhost)
        const apiUrl = `https://partscentral.us/api/products/v2/grouped-with-subparts?make=${make}&model=${model}&year=${year}`;
 
        const resApi = await fetch(apiUrl, {
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
        });
 
        if (resApi.ok) {
          const data = await resApi.json();
          let specName = "";
 
          if (Array.isArray(data.groupedVariants)) {
            for (const group of data.groupedVariants) {
              const match = group.variants?.find((v: any) => v.sku === sku);
              if (match) {
                specName = group.subPart?.name || "";
                break;
              }
            }
 
            if (!specName && data.groupedVariants[0]?.subPart?.name) {
              specName = data.groupedVariants[0].subPart.name;
            }
          }
 
          const newUrl = `/product/${year}-${normalizeForUrl(make)}-${normalizeForUrl(
            model
          )}-${normalizeForUrl(part)}-${normalizeForUrl(specName)}${
            miles ? `-${miles}` : ""
          }`;
 
          const res = NextResponse.redirect(new URL(newUrl, request.url), 301);
          res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
          return res;
        }
      } catch (error) {
        console.error("Middleware redirect error:", error);
      }
    }
  }
 
  // Default behavior
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
 
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
 
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
 
// Helper function to normalize values for URLs
const normalizeForUrl = (value: string) =>
  value
    .replace(/[ ,().;/]/g, "-")
    .replace(/([a-zA-Z]{2,})(\d+)/g, "$1-$2")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
 
export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
 
  // ✅ Handle 301 redirect for /product/engines with query params
  if (pathname === "/product/engines") {
    const make = searchParams.get("make");
    const model = searchParams.get("model");
    const year = searchParams.get("year");
    const part = searchParams.get("part");
    const sku = searchParams.get("sku");
 
    // Only redirect if all required params are present
    if (make && model && year && part && sku) {
      try {
        // Extract miles from SKU
        const miles = sku.split("-").at(-1)?.replace(/[^\d]/g, "");
 
        // Fetch product data to get specification
        const apiUrl = `https://partscentral.us/api/products/v2/grouped-with-subparts?make=${make}&model=${model}&year=${year}&part=${part}`;
       
        const res = await fetch(apiUrl, {
          cache: "no-store",
          headers: {
            'Content-Type': 'application/json',
          }
        });
 
        if (res.ok) {
          const data = await res.json();
          let specName = "";
 
          // Match SKU to find correct specification
          if (data.groupedVariants && Array.isArray(data.groupedVariants)) {
            for (const group of data.groupedVariants) {
              if (group.variants && Array.isArray(group.variants)) {
                const matchingVariant = group.variants.find((v: any) => v.sku === sku);
                if (matchingVariant) {
                  specName = group.subPart?.name || "";
                  break;
                }
              }
            }
 
            // Fallback to first specification
            if (!specName && data.groupedVariants[0]?.subPart?.name) {
              specName = data.groupedVariants[0].subPart.name;
            }
          }
 
          // Build new URL
          const newUrl = `/product/${year}-${normalizeForUrl(make)}-${normalizeForUrl(model)}-${normalizeForUrl(part)}-${normalizeForUrl(specName)}${miles ? `-${miles}` : ""}`;
 
          // Return 301 Permanent Redirect
          return NextResponse.redirect(new URL(newUrl, request.url), 301);
        }
      } catch (error) {
        console.error("Middleware redirect error:", error);
        // Fall through to default behavior on error
      }
    }
  }
 
  // Default behavior: set pathname header
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
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
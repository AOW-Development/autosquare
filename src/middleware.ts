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

  // 🚫 Do not touch real product pages
  if (pathname.startsWith("/product/") && pathname !== "/product/engines") {
    return NextResponse.next();
  }

  if (pathname === "/catalogue/engine/home") {
    const year = searchParams.get("year");
    const make = searchParams.get("make")?.toLowerCase();
    const model = searchParams.get("model")?.toLowerCase();

    if (year && make && model) {
      return NextResponse.redirect(
        new URL(`/catalogue/engine/${year}/${make}/${model}`, request.url),
        301
      );
    }
  }

  if (pathname === "/catalogue/transmission/home") {
    const year = searchParams.get("year");
    const make = searchParams.get("make")?.toLowerCase();
    const model = searchParams.get("model")?.toLowerCase();

    if (year && make && model) {
      return NextResponse.redirect(
        new URL(`/catalogue/transmission/${year}/${make}/${model}`, request.url),
        301
      );
    }
  }

  if (pathname === "/product/engines") {
    const make = searchParams.get("make");
    const model = searchParams.get("model");
    const year = searchParams.get("year");
    const part = searchParams.get("part");
    const sku = searchParams.get("sku");

    if (make && model && year && part && sku) {
      const newUrl = `/product/${year}-${normalizeForUrl(make)}-${normalizeForUrl(
        model
      )}-${normalizeForUrl(part)}`;

      return NextResponse.redirect(new URL(newUrl, request.url), 301);
    }
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

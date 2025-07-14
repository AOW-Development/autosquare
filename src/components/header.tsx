"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "@/public/header/hamburgur-button.png";
import Arrow from "@/public/header/arrows (4).png";

const categories = [
  {
    name: "Air and Fuel",
    sub: [
      "Air Flow Meter",
      "Carburetor",
      "Fuel Injection Parts",
      "Fuel Pump",
      "Fuel Tank",
      "Fuel Tank Sending Unit",
      "Throttle Body",
    ],
  },
  { name: "Axle" },
  { name: "Brakes" },
  { name: "Center Body" },
  { name: "Cooling and Heating" },
  { name: "Doors" },
  { name: "Electrical" },
  { name: "Engine", href: "/catalogue/engine/home" },
  { name: "Engine Accessories" },
  { name: "Entertainment" },
  { name: "Front Body" },
  { name: "Glass and Mirrors" },
  { name: "Interior" },
  { name: "Lights" },
  { name: "Rear Body" },
  { name: "Safety" },
  { name: "Suspension/Steering" },
  { name: "Transmission" },
  { name: "Wheels" },
];

const navLinks = [
  { label: "Shop by Categories", type: "categories" },
  {
    label: "Auto Parts",
    type: "dropdown",
    sub: [
      { label: "Engine", href: "/engine" },
      { label: "Transmission", href: "/transmission" },
      { label: "Brakes", href: "/autoParts" },
    ],
  },
  { label: "Engine", type: "link", href: "/engine" },
  { label: "Transmission", type: "link", href: "/transmission" },
  { label: "Contact Us", type: "link", href: "/contactUs" },
  {
    label: "Info",
    type: "submenu",
    sub: [
      { label: "About us", href: "/aboutUs" },
      { label: "Warranty and Return", href: "/account/warrantyAndReturn" },
      { label: "Shipping and Payment", href: "/account/shippingPaymentPolicy" },
      { label: "Privacy Policy", href: "/account/privacyPolicy" },
      { label: "Terms & Conditions", href: "/account/t&c" },
      { label: "Blogs", href: "/Blog/blogListing" },
      { label: "Testimonials", href: "/Testimonials" },
      { label: "Track my order", href: "/account/trackOrder" },
      { label: "Submit a ticket", href: "/account/submitTicket" },
      { label: "Make a Payment", href: "/account/paymentInfo" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // for md/sm sidebar
  const [activeCategory, setActiveCategory] = useState<string | null>(null); // for flyout
  const [categoriesOpen, setCategoriesOpen] = useState(false); // for xl/lg overlay
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); // for nav dropdowns
  const [submenuOpen, setSubmenuOpen] = useState(false); // for Info submenu
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false); // for mobile categories panel
  const [mobileSelectedCategory, setMobileSelectedCategory] = useState<
    string | null
  >(null); // for mobile selected category

  // Utility: close all overlays
  const closeAll = () => {
    setMenuOpen(false);
    setCategoriesOpen(false);
    setActiveCategory(null);
    setDropdownOpen(null);
    setSubmenuOpen(false);
    setMobileCategoriesOpen(false);
    setMobileSelectedCategory(null);
  };

  // Keyboard nav stub (expand as needed)
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // --- Top Bar ---
  return (
    <header className="w-full bg-[#091B33] text-white ">
      {/* Mobile Header */}
      <div className="md:hidden w-full px-2 pt-2 pb-1 bg-[#091B33]">
        {/* Row 1: Logo left, contact info right */}
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <Image
              src="/header/logo (2).png"
              alt="Logo"
              width={110}
              height={28}
              className="w-[110px] h-[28px]"
            />
          </Link>
          <div className="flex flex-col items-end text-xs">
            <span className="font-bold">(888) 748-0882</span>
            <span>Mon-Fri: 8AM - 7PM EST</span>
          </div>
        </div>
        {/* Row 2: Menu button left, icons right */}
        <div className="flex items-center justify-between w-full mt-2">
          <button
            className="flex items-center py-1"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="ml-1 font-medium">Menu</span>
          </button>
          <div className="flex items-center gap-4">
            <Image
              src="/header/MagnifyingGlass.png"
              alt="Search"
              width={22}
              height={22}
            />
            <Link href="/account/cart">
              <Image
                src="/header/ShoppingCartSimple.png"
                alt="Cart"
                width={22}
                height={22}
              />
            </Link>
            <Link href="/account/garage">
              <Image
                src="/header/Garage.png"
                alt="Garage"
                width={22}
                height={22}
              />
            </Link>
            <Link href="/account/profile">
              <Image
                src="/header/User.png"
                alt="Profile"
                width={22}
                height={22}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Desktop/Tablet Header */}
      <div className="hidden md:grid grid-cols-3 items-center px-4 py-4 text-sm font-medium gap-2 md:gap-0">
        {/* Left: Logo */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-start">
          <Link href="/">
            <Image
              src="/header/logo (2).png"
              alt="Logo"
              width={140}
              height={32}
              className="md:w-[200px] md:h-[40px] w-[140px] h-[32px]"
            />
          </Link>
        </div>
        {/* Center: Contact Info */}
        <div className="flex flex-row gap-2 items-center justify-center">
          <span className="ml-6">(888) 748‑0882</span>|
          <span className="border-l-0 pl-0 ml-0">Mon‑Fri: 8AM ‑ 7PM EST</span>
        </div>
        {/* Right: Icons */}
        <div className="flex items-center gap-6 justify-end">
          <Image
            src="/header/MagnifyingGlass.png"
            alt="Search"
            width={24}
            height={24}
          />
          <Link href="/account/cart">
            <Image
              src="/header/ShoppingCartSimple.png"
              alt="Cart"
              width={24}
              height={24}
            />
          </Link>
          <Link href="/account/garage">
            <Image
              src="/header/Garage.png"
              alt="Garage"
              width={24}
              height={24}
            />
          </Link>
          <Link href="/account/profile">
            <Image
              src="/header/User.png"
              alt="Profile"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
      {/* Navbar */}
      <nav className="bg-[#090d15]">
        {/* Desktop xl/lg */}
        <div className="hidden lg:flex items-center px-4 h-14 w-full">
          {navLinks.map((link, i) => (
            <React.Fragment key={link.label}>
              {/* {link.label === "Shop by Categories" && (
                <button
                  className="flex items-center justify-center px-2 h-10 mr-2 border border-gray-700 rounded bg-gray-900 hover:bg-gray-800 transition"
                  aria-label="Open menu"
                  tabIndex={-1}
                  style={{ minWidth: 40 }}
                >
                  <Image
                    src="/header/vector.png"
                    alt="Menu"
                    width={24}
                    height={24}
                  />
                </button>
              )} */}
              <div
                className={`relative group flex items-center justify-center h-full border-l border-r border-gray-700 ${
                  link.label === "Shop by Categories" ? "flex-[2]" : "flex-1"
                }`}
                onMouseEnter={() => {
                  if (link.type === "categories") setCategoriesOpen(true);
                  if (link.type === "dropdown") setDropdownOpen(link.label);
                  if (link.type === "submenu") setSubmenuOpen(true);
                }}
                onMouseLeave={() => {
                  if (link.type === "categories") setCategoriesOpen(false);
                  if (link.type === "dropdown") setDropdownOpen(null);
                  if (link.type === "submenu") setSubmenuOpen(false);
                }}
              >
                {link.label === "Shop by Categories" && (
                  <button
                    className="flex items-center justify-center px-2 h-10 ml-2 rounded  hover:text-blue-400 focus:outline-none transition gap-2"
                    aria-label="Open menu"
                    tabIndex={-1}
                    style={{ minWidth: 40 }}
                  >
                    <Image
                      src="/Images/ham.png"
                      alt="Menu"
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                  </button>
                )}
                {link.type === "link" ? (
                  <Link
                    href={link.href || "#"}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 hover:bg-gray-800 hover:text-blue-400 transition rounded focus:outline-none h-full"
                    onClick={closeAll}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 hover:bg-gray-800 hover:text-blue-400 transition rounded focus:outline-none h-full"
                    aria-haspopup={link.type !== "link"}
                    aria-expanded={
                      (link.type === "categories" && categoriesOpen) ||
                      (link.type === "dropdown" &&
                        dropdownOpen === link.label) ||
                      (link.type === "submenu" && submenuOpen)
                    }
                  >
                    {link.label}
                    {(link.type === "categories" ||
                      link.type === "submenu") && (
                      <Image
                        src="/header/arrows (4).png"
                        alt="arrow"
                        className="w-3 h-3 ml-1"
                        width={12}
                        height={12}
                      />
                    )}
                  </button>
                )}
                {/* Categories Flyout */}
                {link.type === "categories" && categoriesOpen && (
                  <div className="absolute left-0 top-full mt-2 w-[600px] bg-gray-900 border border-gray-700 shadow-xl flex z-30 animate-fade-in">
                    {/* Category List */}
                    <div className="w-1/2 h-full border-r border-gray-700">
                      {categories.map((cat) => (
                        <div
                          key={cat.name}
                          className={`px-4 py-2 cursor-pointer hover:bg-gray-800 ${
                            activeCategory === cat.name
                              ? "bg-gray-800 text-blue-400"
                              : ""
                          }`}
                          onMouseEnter={() => setActiveCategory(cat.name)}
                          tabIndex={0}
                          role="menuitem"
                          aria-haspopup={!!cat.sub}
                          aria-expanded={activeCategory === cat.name}
                        >
                          {cat.href ? (
                            <Link href={cat.href} onClick={closeAll}>
                              {cat.name}
                            </Link>
                          ) : (
                            cat.name
                          )}
                        </div>
                      ))}
                    </div>
                    {/* Subcategory Panel */}
                    <div className="w-1/2 p-4">
                      {(() => {
                        const cat =
                          categories.find((c) => c.name === activeCategory) ||
                          categories[0];
                        return cat.sub ? (
                          <ul>
                            {cat.sub.map((sub) => (
                              <li
                                key={sub}
                                className="py-1 hover:text-blue-400 cursor-pointer"
                              >
                                {sub}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="text-gray-400">No subcategories</div>
                        );
                      })()}
                    </div>
                  </div>
                )}
                {/* Dropdown Panel */}
                {link.type === "dropdown" && dropdownOpen === link.label && (
                  <div className="absolute left-0 top-full mt-2 bg-gray-900 border border-gray-700 shadow-xl min-w-[200px] z-30 animate-fade-in">
                    <ul>
                      {link.sub?.map((item) => (
                        <li
                          key={item.label}
                          className="px-4 py-2 hover:bg-gray-800 hover:text-blue-400 cursor-pointer"
                        >
                          <Link href={item.href} onClick={closeAll}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Info Submenu */}
                {link.type === "submenu" && submenuOpen && (
                  <div className="absolute left-0 top-full mt-2 bg-gray-900 border border-gray-700 shadow-xl min-w-[180px] z-30 animate-fade-in">
                    <ul>
                      {link.sub?.map((item) => (
                        <li
                          key={item.label}
                          className="px-4 py-2 hover:bg-gray-800 hover:text-blue-400 cursor-pointer flex items-center justify-between"
                        >
                          <Link href={item.href} onClick={closeAll}>
                            {item.label}
                          </Link>
                          {/* <Image
                            src="/header/arrows (4).png"
                            alt="arrow"
                            className="w-3 h-3 ml-1"
                            width={12}
                            height={12}
                          /> */}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
        {/* Mobile/Tablet Hamburger - now only shows label, button is in top bar */}
        {/* <div className="lg:hidden flex items-center px-4 h-14">
          <span className="font-bold text-lg">Menu</span>
        </div> */}
        {/* Sidebar/Drawer for md/sm - now shows all navLinks */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 bg-transparent backdrop-blur-sm"
            onClick={closeAll}
          >
            <aside
              className="fixed top-0 left-0 h-full w-80 max-w-full bg-gray-900 shadow-xl p-4 flex flex-col transition-transform duration-300 z-50"
              onClick={(e) => e.stopPropagation()}
              aria-label="Sidebar menu"
            >
              <button
                className="self-end mb-4 text-gray-400 hover:text-white"
                aria-label="Close menu"
                onClick={closeAll}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  if (link.type === "categories") {
                    return (
                      <li key={link.label}>
                        <button
                          className="w-full flex items-center justify-between px-2 py-2 rounded hover:bg-gray-800 text-left"
                          onClick={() =>
                            setMobileCategoriesOpen(!mobileCategoriesOpen)
                          }
                          aria-expanded={mobileCategoriesOpen}
                        >
                          <span>{link.label}</span>
                          <Image
                            src="/header/arrows (4).png"
                            alt="arrow"
                            width={14}
                            height={14}
                            className={`transition-transform ${
                              mobileCategoriesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {/* Categories Panel */}
                        {mobileCategoriesOpen && (
                          <div className="pl-4 mt-2">
                            <ul>
                              {categories.map((cat) => (
                                <React.Fragment key={cat.name}>
                                  <li
                                    className="py-1 hover:text-blue-400 cursor-pointer flex items-center justify-between"
                                    onClick={() => {
                                      if (cat.sub && cat.sub.length > 0) {
                                        setMobileSelectedCategory(
                                          mobileSelectedCategory === cat.name
                                            ? null
                                            : cat.name
                                        );
                                      } else {
                                        closeAll();
                                      }
                                    }}
                                  >
                                    <span>{cat.name}</span>
                                    {cat.sub && cat.sub.length > 0 && (
                                      <span
                                        className={`transition-transform ${
                                          mobileSelectedCategory === cat.name
                                            ? "rotate-90"
                                            : ""
                                        }`}
                                      >
                                        &gt;
                                      </span>
                                    )}
                                  </li>
                                  {/* Inline subcategories accordion */}
                                  {mobileSelectedCategory === cat.name &&
                                    cat.sub &&
                                    cat.sub.length > 0 && (
                                      <ul className="pl-4 border-l border-gray-700 bg-gray-800">
                                        {cat.sub.map((sub) => (
                                          <li
                                            key={sub}
                                            className="py-1 hover:text-blue-400 cursor-pointer"
                                            onClick={() => closeAll()}
                                          >
                                            {sub}
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                </React.Fragment>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    );
                  }
                  if (link.type === "dropdown") {
                    return (
                      <li key={link.label}>
                        <DropdownSidebar
                          label={link.label}
                          items={link.sub || []}
                        />
                      </li>
                    );
                  }
                  if (link.type === "submenu") {
                    return (
                      <li key={link.label}>
                        <DropdownSidebar
                          label={link.label}
                          items={link.sub || []}
                        />
                      </li>
                    );
                  }
                  // Simple link
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href || "#"}
                        className="w-full text-left px-2 py-2 rounded hover:bg-gray-800 block"
                        onClick={closeAll}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {/* Footer in sidebar */}
              {/* <div className="mt-auto pt-6 border-t border-gray-700 flex flex-col gap-2 text-sm">
                <span>(888) 748‑0882</span>
                <span>Mon‑Fri: 8AM ‑ 7PM EST</span>
                <div className="flex gap-4 mt-2">
                  <Image
                    src="/header/MagnifyingGlass.png"
                    alt="Search"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/header/ShoppingCartSimple.png"
                    alt="Cart"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/header/Garage.png"
                    alt="Home"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/header/User.png"
                    alt="Profile"
                    width={20}
                    height={20}
                  />
                </div>
              </div> */}
            </aside>
          </div>
        )}
      </nav>
    </header>
  );
}

// --- Add DropdownSidebar helper component for mobile sidebar ---
function DropdownSidebar({
  label,
  items,
}: {
  label: string;
  items: Array<{ label: string; href: string }>;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button
        className="w-full flex items-center justify-between px-2 py-2 rounded hover:bg-gray-800 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{label}</span>
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 9l6 6 6-6"
          />
        </svg>
      </button>
      {open && (
        <ul className="pl-4 mt-1">
          {items.map((item) => (
            <li
              key={item.label}
              className="py-1 hover:text-blue-400 cursor-pointer"
            >
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

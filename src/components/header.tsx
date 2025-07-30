"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Hamburger from "@/public/header/hamburgur-button.png";
// import Arrow from "@/public/header/arrows (4).png";
import { useCartStore } from "@/store/cartStore";
import { useState, useRef } from 'react';

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
    type: "link",
    href: "/autoParts",
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
      { label: "Make a Payment", href: "/account/paymentDetails" },
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
  const [showSearch, setShowSearch] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);


  // --- Hover logic for menus ---
  // Categories
  const categoriesHover = React.useRef(false);
  const categoriesTimeout = React.useRef<NodeJS.Timeout | null>(null);
  // Dropdown
  const dropdownHover = React.useRef(false);
  const dropdownTimeout = React.useRef<NodeJS.Timeout | null>(null);
  // Submenu
  const submenuHover = React.useRef(false);
  const submenuTimeout = React.useRef<NodeJS.Timeout | null>(null);

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

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMenuOpen(false);
    }, 300); // 300ms delay before closing
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
              src="/logos/header-3.png"
              alt="Logo"
              width={200}
              height={60}
              className="w-[160px] h-[28px] md:w-[110px] md:h-[28px]"
            />
          </Link>
          <div className="flex flex-col items-end text-xs ">
            <span className="font-bold">(888) 338-2540</span>
            <span>Mon-Fri: 8AM - 7PM EST</span>
          </div>
        </div>
        {/* Row 2: Menu button left, icons right */}
        <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Toggle Button */}
      <button
        className="flex items-center py-1"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              menuOpen
                ? 'M6 18L18 6M6 6l12 12' // X icon
                : 'M4 6h16M4 12h16M4 18h16' // Hamburger
            }
          />
        </svg>
        <span className="ml-1 font-medium">{menuOpen ? 'Close' : 'Menu'}</span>
      </button>

          <div className="flex items-center gap-4">
            {showSearch ? (
              <input
                type="text"
                autoFocus
                className="px-1 md:px-2 py-1 md:py-2 rounded-lg bg-gray-800 text-white outline-none  w-40 transition"
                placeholder="Search..."
                onBlur={() => setShowSearch(false)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setShowSearch(false);
                }}
              />
            ) : (
              <Image
                src="/header/MagnifyingGlass.png"
                alt="Search"
                width={24}
                height={24}
                className="hover:text-blue-400 cursor-pointer"
                onClick={() => setShowSearch(true)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setShowSearch(true);
                }}
                role="button"
                aria-label="Open search"
              />
            )}
            <Link href="/account/cart" className="relative">
              <Image
                src="/header/ShoppingCartSimple.png"
                alt="Cart"
                width={22}
                height={22}
              />
              <span className="absolute -top-2 -right-2 bg-[#0270ae] text-white rounded-full text-xs px-2 py-0.5 z-10 min-w-[20px] text-center">
                {useCartStore((s) =>
                  s.items.reduce((sum, i) => sum + i.quantity, 0)
                )}
              </span>
            </Link>
            <Link href="/account/garage" className="hover:text-blue-400">
              <Image
                src="/header/Garage.png"
                alt="Garage"
                width={22}
                height={22}
              />
            </Link>
            <Link href="/account/profile" className="hover:text-blue-400">
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
              src="/logos/pc2.png"
              alt="Logo"
              width={140}
              height={32}
              className="md:w-[200px] md:h-[40px] w-[140px] h-[32px]"
            />
          </Link>
        </div>
        {/* Center: Contact Info */}
        <div
          className="flex flex-row gap-2 items-center justify-center font-exo-2"
          style={{
            fontFamily: "var(--font-exo-2), sans-serif",
          }}
        >
          {/* <span className="ml-6 font-exo-2">(888) 748‑0882</span>| */}
          <span className="ml-6 font-exo-2">(888) 338‑2540</span>|
          <span className="border-l-0 pl-0 ml-0">Mon‑Fri: 8AM ‑ 7PM EST</span>
        </div>
        {/* Right: Icons */}
        <div className="flex items-center gap-6 justify-end">
          {showSearch ? (
            <input
              type="text"
              autoFocus
              className="px-1 md:px-2 py-1 md:py-2 bg-gray-800 rounded-lg text-white outline-none border-0 border-blue-400 w-40 md:w-60 transition"
              placeholder="Search..."
              onBlur={() => setShowSearch(false)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setShowSearch(false);
              }}
            />
          ) : (
            <Image
              src="/header/MagnifyingGlass.png"
              alt="Search"
              width={24}
              height={24}
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => setShowSearch(true)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setShowSearch(true);
              }}
              role="button"
              aria-label="Open search"
            />
          )}
          <Link
            href="/account/cart"
            className="relative hover:text-blue-400 cursor-pointer"
          >
            <Image
              src="/header/ShoppingCartSimple.png"
              alt="Cart"
              width={24}
              height={24}
            />
            <span className="absolute -top-2 -right-2 bg-[#0270ae] text-white rounded-full text-xs px-2 py-0.5 z-10 min-w-[20px] text-center">
              {useCartStore((s) =>
                s.items.reduce((sum, i) => sum + i.quantity, 0)
              )}
            </span>
          </Link>
          <Link href="/account/garage" className="hover:text-blue-400">
            <Image
              src="/header/Garage.png"
              alt="Garage"
              width={24}
              height={24}
            />
          </Link>
          <Link href="/account/profile" className="hover:text-blue-400">
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
        {/* Desktop xl/lg       DESKTOP -------------- */}
        <div className="hidden lg:flex items-center px-4 h-12 w-full font-exo-2">
          {navLinks.map((link) => (
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
                className={`relative group flex items-center justify-center h-full border-l border-r border-gray-700 font-exo-2 transition-all ${
                  link.label === "Shop by Categories" ? "flex-[2]" : "flex-1"
                }`}
                onMouseEnter={() => {
                  if (link.type === "categories") {
                    categoriesHover.current = true;
                    if (categoriesTimeout.current)
                      clearTimeout(categoriesTimeout.current);
                    setCategoriesOpen(true);
                  }
                  if (link.type === "dropdown") {
                    dropdownHover.current = true;
                    if (dropdownTimeout.current)
                      clearTimeout(dropdownTimeout.current);
                    setDropdownOpen(link.label);
                  }
                  if (link.type === "submenu") {
                    submenuHover.current = true;
                    if (submenuTimeout.current)
                      clearTimeout(submenuTimeout.current);
                    setSubmenuOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (link.type === "categories") {
                    categoriesHover.current = false;
                    if (categoriesTimeout.current)
                      clearTimeout(categoriesTimeout.current);
                    categoriesTimeout.current = setTimeout(() => {
                      if (!categoriesHover.current) setCategoriesOpen(false);
                    }, 200);
                  }
                  if (link.type === "dropdown") {
                    dropdownHover.current = false;
                    if (dropdownTimeout.current)
                      clearTimeout(dropdownTimeout.current);
                    dropdownTimeout.current = setTimeout(() => {
                      if (!dropdownHover.current) setDropdownOpen(null);
                    }, 200);
                  }
                  if (link.type === "submenu") {
                    submenuHover.current = false;
                    if (submenuTimeout.current)
                      clearTimeout(submenuTimeout.current);
                    submenuTimeout.current = setTimeout(() => {
                      if (!submenuHover.current) setSubmenuOpen(false);
                    }, 200);
                  }
                }}
              >
                {link.label === "Shop by Categories" && (
                  <button
                    className="flex items-center justify-center px-2 h-10 ml-2 rounded hover:text-blue-400 focus:outline-none transition gap-2"
                    aria-label="Open menu"
                    tabIndex={-1}
                    style={{ minWidth: 40 }}
                    onMouseEnter={() => setCategoriesOpen(true)}
                    onMouseLeave={() => setCategoriesOpen(true)}
                  >
                    {categoriesOpen ? (
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                      >
                        <line
                          x1="6"
                          y1="6"
                          x2="18"
                          y2="18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <line
                          x1="6"
                          y1="18"
                          x2="18"
                          y2="6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                      >
                        <rect
                          x="4"
                          y="6"
                          width="16"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        />
                        <rect
                          x="4"
                          y="11"
                          width="16"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        />
                        <rect
                          x="4"
                          y="16"
                          width="16"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        />
                      </svg>
                    )}
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
                      <svg
                        className={`w-5 h-5 ml-1 transition-transform duration-200 ${
                          (link.type === "categories" && categoriesOpen) ||
                          (link.type === "submenu" && submenuOpen)
                            ? "rotate-180"
                            : ""
                        }`}
                        width={12}
                        height={12}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 8l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                )}
                {/* Categories Flyout */}
                {link.type === "categories" && categoriesOpen && (
                  <div
                    className="absolute left-0 top-full mt-2 w-[800px] bg-gray-900 border border-gray-700 shadow-xl flex z-30 animate-fade-in"
                    onMouseEnter={() => {
                      categoriesHover.current = true;
                      if (categoriesTimeout.current)
                        clearTimeout(categoriesTimeout.current);
                      setCategoriesOpen(true);
                    }}
                    onMouseLeave={() => {
                      categoriesHover.current = false;
                      if (categoriesTimeout.current)
                        clearTimeout(categoriesTimeout.current);
                      categoriesTimeout.current = setTimeout(() => {
                        if (!categoriesHover.current) setCategoriesOpen(false);
                      }, 200);
                    }}
                  >
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
                    <div className="w-1/2 px-4 pt-1 bg-[#0D3453]">
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
                  <div
                    className="absolute left-0 top-full mt-2 bg-gray-900 border border-gray-700 shadow-xl min-w-[200px] z-30 animate-fade-in"
                    onMouseEnter={() => {
                      dropdownHover.current = true;
                      if (dropdownTimeout.current)
                        clearTimeout(dropdownTimeout.current);
                      setDropdownOpen(link.label);
                    }}
                    onMouseLeave={() => {
                      dropdownHover.current = false;
                      if (dropdownTimeout.current)
                        clearTimeout(dropdownTimeout.current);
                      dropdownTimeout.current = setTimeout(() => {
                        if (!dropdownHover.current) setDropdownOpen(null);
                      }, 200);
                    }}
                  >
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
                  <div
                    className="absolute left-0 top-full mt-2 bg-gray-900 border border-gray-700 shadow-xl min-w-[180px] z-30 animate-fade-in"
                    onMouseEnter={() => {
                      submenuHover.current = true;
                      if (submenuTimeout.current)
                        clearTimeout(submenuTimeout.current);
                      setSubmenuOpen(true);
                    }}
                    onMouseLeave={() => {
                      submenuHover.current = false;
                      if (submenuTimeout.current)
                        clearTimeout(submenuTimeout.current);
                      submenuTimeout.current = setTimeout(() => {
                        if (!submenuHover.current) setSubmenuOpen(false);
                      }, 200);
                    }}
                  >
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
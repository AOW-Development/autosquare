"use client"
import React, {  useState } from 'react';
import Image from 'next/image';
import Hamburger from '@/public/header/hamburgur-button.png';
import Arrow from '@/public/header/arrows (4).png';


const categories = [
  {
    name: 'Air and Fuel',
    sub: [
      'Air Flow Meter',
      'Carburetor',
      'Fuel Injection Parts',
      'Fuel Pump',
      'Fuel Tank',
      'Fuel Tank Sending Unit',
      'Throttle Body',
    ],
  },
  { name: 'Axle' },
  { name: 'Brakes' },
  { name: 'Center Body' },
  { name: 'Cooling and Heating' },
  { name: 'Doors' },
  { name: 'Electrical' },
  { name: 'Engine' },
  { name: 'Engine Accessories' },
  { name: 'Entertainment' },
  { name: 'Front Body' },
  { name: 'Glass and Mirrors' },
  { name: 'Interior' },
  { name: 'Lights' },
  { name: 'Rear Body' },
  { name: 'Safety' },
  { name: 'Suspension/Steering' },
  { name: 'Transmission' },
  { name: 'Wheels' },
];

const navLinks = [
  { label: 'Shop by Categories', type: 'categories' },
  { label: 'Auto Parts', type: 'dropdown', sub: ['Engine', 'Transmission', 'Brakes'] },
  { label: 'Engine', type: 'link' },
  { label: 'Transmission', type: 'link' },
  { label: 'Contact Us', type: 'link' },
  { label: 'Info', type: 'submenu', sub: ['About us', 'Warranty and Return','Shipping and Payment', 'Privacy Policy','Terms & Conditions','Blogs','Testimonials','Track my order','Submit a ticket','Make a Payment'] },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // for md/sm sidebar
  const [activeCategory, setActiveCategory] = useState<string | null>(null); // for flyout
  const [categoriesOpen, setCategoriesOpen] = useState(false); // for xl/lg overlay
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); // for nav dropdowns
  const [submenuOpen, setSubmenuOpen] = useState(false); // for Info submenu

  // Utility: close all overlays
  const closeAll = () => {
    setMenuOpen(false);
    setCategoriesOpen(false);
    setActiveCategory(null);
    setDropdownOpen(null);
    setSubmenuOpen(false);
  };

  // Keyboard nav stub (expand as needed)
  React.useEffect(() => {
    const handler = (e : KeyboardEvent) => {
      if (e.key === 'Escape') closeAll();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // --- Top Bar ---
  return (
    <header className="w-full  bg-[#091B33] text-white ">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-4 text-sm font-medium">
        <div className="flex items-center gap-4">
          <Image src="/header/logo (2).png" alt="Logo" width={200} height={40} />
          <span className="hidden md:inline ml-6">(888) 748‑0882</span>
          <span className="hidden md:inline border-l border-gray-700 pl-4 ml-4">Mon‑Fri: 8AM ‑ 7PM EST</span>
        </div>
        <div className="flex items-center gap-6">
          <Image src="/header/MagnifyingGlass.png" alt="Search" width={24} height={24} />
          <Image src="/header/ShoppingCartSimple.png" alt="Cart" width={24} height={24} />
          <Image src="/header/Garage.png" alt="Home" width={24} height={24} />
          <Image src="/header/User.png" alt="Profile" width={24} height={24} />
        </div>
      </div>
      {/* Navbar */}
      <nav className=" bg-[#090d15]">
        {/* Desktop xl/lg */}
        <div className="hidden lg:flex items-center px-4 h-14 w-full">
          {navLinks.map((link, i) => (
            <React.Fragment key={link.label}>
              {link.label === 'Shop by Categories' && (
                <button
                  className="flex items-center justify-center px-2 h-10 mr-2 border border-gray-700 rounded bg-gray-900 hover:bg-gray-800 transition"
                  aria-label="Open menu"
                  tabIndex={-1}
                  style={{ minWidth: 40 }}
                >
                  <Image src="/header/vector.png" alt="Menu" width={24} height={24} />
                </button>
              )}
              <div
                className={`relative group flex items-center justify-center h-full border-l border-r border-gray-700 ${link.label === 'Shop by Categories' ? 'flex-[2]' : 'flex-1'}`}
                onMouseEnter={() => {
                  if (link.type === 'categories') setCategoriesOpen(true);
                  if (link.type === 'dropdown') setDropdownOpen(link.label);
                  if (link.type === 'submenu') setSubmenuOpen(true);
                }}
                onMouseLeave={() => {
                  if (link.type === 'categories') setCategoriesOpen(false);
                  if (link.type === 'dropdown') setDropdownOpen(null);
                  if (link.type === 'submenu') setSubmenuOpen(false);
                }}
              >
                <button
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 hover:bg-gray-800 hover:text-blue-400 transition rounded focus:outline-none h-full"
                  aria-haspopup={link.type !== 'link'}
                  aria-expanded={
                    (link.type === 'categories' && categoriesOpen) ||
                    (link.type === 'dropdown' && dropdownOpen === link.label) ||
                    (link.type === 'submenu' && submenuOpen)
                  }
                >
                  {link.label}
                  {(link.type === 'categories' || link.type === 'submenu') && (
                    <Image src="/header/arrows (4).png" alt="arrow" className="w-3 h-3 ml-1" width={12} height={12} />
                  )}
                </button>
                {/* Categories Flyout */}
                {link.type === 'categories' && categoriesOpen && (
                  <div className="absolute left-0 top-full mt-2 w-[600px] bg-gray-900 border border-gray-700 shadow-xl flex z-30 animate-fade-in">
                    {/* Category List */}
                    <div className="w-1/2 max-h-80 overflow-y-auto border-r border-gray-700">
                      {categories.map((cat) => (
                        <div
                          key={cat.name}
                          className={`px-4 py-2 cursor-pointer hover:bg-gray-800 ${activeCategory === cat.name ? 'bg-gray-800 text-blue-400' : ''}`}
                          onMouseEnter={() => setActiveCategory(cat.name)}
                          tabIndex={0}
                          role="menuitem"
                          aria-haspopup={!!cat.sub}
                          aria-expanded={activeCategory === cat.name}
                        >
                          {cat.name}
                        </div>
                      ))}
                    </div>
                    {/* Subcategory Panel */}
                    <div className="w-1/2 p-4">
                      {(() => {
                        const cat = categories.find((c) => c.name === activeCategory) || categories[0];
                        return cat.sub ? (
                          <ul>
                            {cat.sub.map((sub) => (
                              <li key={sub} className="py-1 hover:text-blue-400 cursor-pointer">{sub}</li>
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
                {link.type === 'dropdown' && dropdownOpen === link.label && (
                  <div className="absolute left-0 top-full mt-2 bg-gray-900 border border-gray-700 shadow-xl min-w-[200px] z-30 animate-fade-in">
                    <ul>
                      {link.sub?.map((item) => (
                        <li key={item} className="px-4 py-2 hover:bg-gray-800 hover:text-blue-400 cursor-pointer">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Info Submenu */}
                {link.type === 'submenu' && submenuOpen && (
                  <div className="absolute left-0 top-full mt-2 bg-gray-900 border border-gray-700 shadow-xl min-w-[180px] z-30 animate-fade-in">
                    <ul>
                      {link.sub?.map((item) => (
                        <li key={item} className="px-4 py-2 hover:bg-gray-800 hover:text-blue-400 cursor-pointer flex items-center justify-between">
                          {item}
                          <Image src="/header/arrows (4).png" alt="arrow" className="w-3 h-3 ml-1" width={12} height={12} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
        {/* Mobile/Tablet Hamburger */}
        <div className="lg:hidden flex items-center px-4 h-14">
          <button
            className="mr-4 focus:outline-none"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Image src="/header/hamburgur-button.png" alt="Menu" width={28} height={28} />
          </button>
          <span className="font-bold text-lg">Menu</span>
        </div>
        {/* Sidebar/Drawer for md/sm */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={closeAll}>
            <aside
              className="fixed top-0 left-0 h-full w-72 bg-gray-900 shadow-xl p-4 flex flex-col transition-transform duration-300 z-50"
              onClick={(e) => e.stopPropagation()}
              aria-label="Sidebar menu"
            >
              {/* Back button for subcategory */}
              {activeCategory ? (
                <>
                  <button
                    className="mb-4 flex items-center gap-2 text-blue-400 hover:underline"
                    onClick={() => setActiveCategory(null)}
                  >
                    <span>&lt; Back</span>
                    <span className="font-bold">Categories</span>
                  </button>
                  <div>
                    <h3 className="font-semibold mb-2">{activeCategory}</h3>
                    <ul>
                      {(categories.find((c) => c.name === activeCategory)?.sub || []).map((sub) => (
                        <li key={sub} className="py-1 hover:text-blue-400 cursor-pointer">{sub}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <ul>
                    {categories.map((cat) => (
                      <li
                        key={cat.name}
                        className="py-2 px-2 hover:bg-gray-800 hover:text-blue-400 cursor-pointer rounded"
                        onClick={() => cat.sub ? setActiveCategory(cat.name) : closeAll()}
                      >
                        {cat.name}
                        {cat.sub && <span className="float-right">&gt;</span>}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {/* Footer in sidebar */}
              <div className="mt-auto pt-6 border-t border-gray-700 flex flex-col gap-2 text-sm">
                <span>(888) 748‑0882</span>
                <span>Mon‑Fri: 8AM ‑ 7PM EST</span>
                <div className="flex gap-4 mt-2">
                  <Image src="/header/MagnifyingGlass.png" alt="Search" width={20} height={20} />
                  <Image src="/header/ShoppingCartSimple.png" alt="Cart" width={20} height={20} />
                  <Image src="/header/Garage.png" alt="Home" width={20} height={20} />
                  <Image src="/header/User.png" alt="Profile" width={20} height={20} />
                </div>
              </div>
            </aside>
          </div>
        )}
      </nav>
    </header>
  );
}

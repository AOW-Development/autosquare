// # Responsive Header & Navbar Component Prompt

// **Objective**

// Create a fully responsive header and navbar React component (Next.js + Tailwind) based directly on the supplied design mockups. The component should adapt at the following breakpoints:

// * **xl** (≥1280px) – desktop full-width submenu layout
// * **lg** (≥1024px) – wide tablet / small desktop, horizontal menu + dropdown panels
// * **md** (≥768px) – tablet, collapsible sidebar + flyout submenus
// * **sm** (<768px) – mobile, full-screen sliding menu

// ---

// ## 1. Extracted Text & Structure

// ### Header Top Bar (all breakpoints)

// * **Logo**: `@/public/images/autosquare-logo.svg` - ill add later
// * **Phone**: `(888) 748‑0882`
// * **Hours**: `Mon‑Fri: 8AM ‑ 7PM EST`
// * **Utility Icons** (right side):

//   * Search icon:  take all the images from public\header folder . logos ,arrows icons find there read name.
//   * Cart icon:   `
//   * Home icon:   
//   * Profile icon:  -

// ### Navbar Content
// header
// #### Primary Links (xl/lg horizontal)

// | Label              | Behavior                        |
// | ------------------ | ------------------------------- |
// | Shop by Categories |  opens full-panel sidebar/flyout |(add hamburgur button here ) Shop by Categories (dropdown arrow icon)
// | Auto Parts         | dropdown → with sub-items       |
// | Engine             | simple link or flyout           |
// | Transmission       | link or flyout                  |
// | Contact Us         | direct link                     |
// | Info               | opens small submenu  (add arow next to it)           |

// #### Categories Sidebar (when Shop by Categories active)

// * **List of Categories**:

//   * Air and Fuel
//   * Axle
//   * Brakes
//   * Center Body
//   * Cooling and Heating
//   * Doors
//   * Electrical
//   * Engine
//   * Engine Accessories
//   * Entertainment
//   * Front Body
//   * Glass and Mirrors
//   * Interior
//   * Lights
//   * Rear Body
//   * Safety
//   * Suspension/Steering
//   * Transmission
//   * Wheels

// * **Flyout Panel** (on select of any category with sub-items):

//   * Air and Fuel → \[Air Flow Meter, Carburetor, Fuel Injection Parts, Fuel Pump, Fuel Tank, Fuel Tank Sending Unit, Throttle Body]
//   * (repeat same pattern structure for other categories)
//   * Prepend a "< Back" link at top to return to category list in mobile/md view.

// ---

// ## 2. Responsive Behavior & Layout

// ### Desktop (xl)

// * Top bar remains fixed, dark-blue background.
// * Primary menu horizontally aligned beneath top bar.
// * Hovering "Shop by Categories" opens wide two-panel overlay:

//   * Left: scrollable category list
//   * Right: subcategories for hovered category

// ### Large (lg)

// * Similar to xl but condensed spacing.
// * Dropdown panels align under each nav item instead of full-width overlay.

// ### Medium (md)

// * Replace horizontal links with a hamburger "Menu" button:

//   * Clicking slides in a sidebar from left (full-height)
//   * Shows category list as first screen
//   * Submenus slide in from right when category tapped

// ### Mobile (sm)

// * Full-screen sliding menu from left.
// * Top-level items listed first, with carets for nested items.
// * Footer within menu for contact info and utility icons.

// ---

// ## 3. Assets & Styling

// * Use Tailwind CSS classes for spacing, typography, colors:

//   * **Background**: `bg-gray-900` / `bg-[color:#0D1B38]`
//   * **Text**: `text-white`, `text-sm`, `font-medium`
//   * **Hover**: `hover:bg-gray-800`, `hover:text-blue-400`
//   * **Dividers**: `border-b`, `border-gray-700`
//   * **Flex/Grid**: `flex`, `grid`, `gap-4`, `items-center`
// * Import SVG icons from `public/images/*.svg` and wrap with `next/image` or inline `<svg>`.
// * Include ARIA attributes for accessibility on menus and toggles.

// ---

// ## 4. Interaction & Accessibility

// * All dropdowns/flyouts must be keyboard-navigable (focus, Esc to close).
// * Hamburger toggles should announce expanded/collapsed state.
// * Ensure no layout shifts; use `transition` classes for smooth animations.

// ---

// ## 5. Deliverables

// 1. `components/Header.tsx` – contains Top Bar + Navbar logic & markup.
// 2. `components/Header.module.css` (if needed) or pure Tailwind.
// 3. Storybook stories or example page demonstrating each breakpoint.
// 

// ---

// > **Note:** All design details (padding, colors, font sizes) should match the provided screenshots exactly. Breakpoints use Tailwind's default `sm, md, lg, xl`.

import React, {  useState } from 'react';
import Image from 'next/image';
import Hamburger from '@/public/header/hamburgur-button.png';
import Arrow from '@/public/header/arrows (4).png';

/**
 * fix hegiht for top bar
 * 
 * 
 * 
 */

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

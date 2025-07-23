import Link from "next/link";

const navLinks = [
  { key: "Profile", label: "Profile", href: "/account/profile" },
  // {
  //   key: "Shipping Address",
  //   label: "Shipping Address",
  //   href: "/account/shipping",
  // },
  {
    key: "Billing Address",
    label: "Billing Address",
    href: "/account/billing",
  },
  {
    key: "Order History",
    label: "Order History",
    href: "/account/orderHistory",
  },
  { key: "Garage", label: "Garage", href: "/account/garage" },
  { key: "Log Out", label: "Log Out", href: "/logout" },
];

export default function Sidebar({ activeKey }: { activeKey: string }) {
  return (
    <aside className="bg-[#091627] text-white shadow-lg p-4 md:p-6 lg:p-8 w-full md:w-64 md:h-full flex-shrink-0 mb-6 md:mb-0">
      <nav className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              activeKey === link.key
                ? " text-blue-600"
                : "hover:bg-[#112244] text-blue-100"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

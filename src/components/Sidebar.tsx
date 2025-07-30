"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";

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
];

export default function Sidebar({ activeKey }: { activeKey: string }) {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    // Clear auth state and localStorage
    logout();
    // Redirect to sign in page
    router.push("/account/signIn");
  };

  return (
    <aside className="bg-[#091627] text-white shadow-lg p-4 md:p-6 lg:p-8 w-full md:w-64 md:h-full flex-shrink-0 mb-6 md:mb-0">
      <nav className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className={`px-4 py-2 rounded-lg font-normal text-[18px] transition-colors ${
              activeKey === link.key
                ? " text-blue-600"
                : "hover:bg-[#112244] text-blue-100"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg font-normal text-[18px] transition-colors hover:bg-[#112244] text-blue-100 text-left"
        >
          Log Out
        </button>
      </nav>
    </aside>
  );
}

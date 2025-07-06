// I'm building a responsive "My Account" area for an automotive-parts site. All pages (except Registration) share:

//  • A full-width banner with the brand logo centered over a car image
//  • A left sidebar nav with links: Profile, Shipping Address, Billing Address, Order History, Garage, Log Out 
//  • A main content area that changes per page

// Please generate Tailwind-styled React components (or plain HTML+Tailwind) with:
//  • breakpoints: mobile (≤640px), md (≥768px), lg (≥1024px)
//  • 2xl rounded corners, soft shadows, consistent spacing (p-4 mobile, p-6 md, p-8 lg)
//  • a `<Banner />`, a `<Sidebar activeKey="xxx" />` and a `<Content />` that reads its config
// add banner from here : Images/acc_banner.png w-full,h-320px 
// bg color for all pages is same : bg-[#091B33], text-#FFFFFF ,sidebar/placeholder color is : bg-[#091627]
// Below is the JSON‐like config for each page's dynamic text, form fields, and buttons. Include real placeholder text and icons exactly as shown:
// leave any imge or 
// ```js
// const pages = {
//   Registration: { path : src/app/account/signUp/page.tsx
//     banner: false,
//     title: "REGISTRATION",
//     fields: [
//       { label: "Email*", type: "email", placeholder: "example@gmail.com" },
//       { label: "Password*", type: "password", placeholder: "••••" },
//       { label: "Confirm password*", type: "password", placeholder: "••••" },
//     ],
//     button: { text: "Register now", styles: "bg-blue-500 hover:bg-blue-600 text-white" }
//   },
//   Profile: { path: src/app/account/profile
//     banner: true,
//     activeKey: "Profile",
//     title: "PROFILE",
//     fields: [
//       { label: "Email*", type: "email", placeholder: "example@gmail.com" },
//       { section: "CHANGE PASSWORD" },
//       { label: "Current Password (leave blank to keep unchanged)", type: "password", placeholder: "••••" },
//       { label: "New Password (leave blank to keep unchanged)", type: "password", placeholder: "••••" },
//       { label: "Confirm New Password", type: "password", placeholder: "••••" }
//     ],
//     button: { text: "Save Changes", styles: "border border-blue-600 text-blue-100 hover:bg-blue-600" }
//   },
//   "Shipping Address": { path: src/app/account/shipping
//     banner: true,
//     activeKey: "Shipping Address",
//     title: "SHIPPING ADDRESS",
//     fields: [
//       { label: "First Name*", type: "text", placeholder: "Kseniiia" },
//       { label: "Last Name*", type: "text", placeholder: "Melnyk" },
//       { label: "Phone*", type: "tel", placeholder: "(888) 000-0000" },
//       { label: "Country*", type: "select", options: ["Choose Country…"] },
//       { label: "Street address*", type: "text", placeholder: "Address" },
//       { label: "Apartment, etc. (optional)", type: "text", placeholder: "Apt, suite…" },
//       { label: "City*", type: "text", placeholder: "City" },
//       { label: "State*", type: "select", options: ["Choose state…"] },
//       { label: "ZIP Code*", type: "text", placeholder: "ZIP Code" }
//     ],
//     button: { text: "Save Changes", styles: "border border-blue-600 text-blue-100" }
//   },
//   "Billing Address": { /* same as Shipping Address but title "BILLING ADDRESS" */ }, path: src/app/account/billing.tsx
//   Garage: {
//     banner: true,
//     activeKey: "Garage",
//     title: "GARAGE",
//     items: [
//       { logo: "ford-logo.svg", name: "Ford Bronco 1991", actions: ["edit","delete"] }
//     ],
//     button: { text: "Add new vehicle", styles: "bg-blue-500 text-white" }
//   },
//   "Order History": { path : src/app/account/orderHistory.tsx
//     banner: true,
//     activeKey: "Order History",
//     title: "ORDER HISTORY",
//     filters: ["All","This month","Last month","This year","Last year"],
//     orders: [
//       {
//         id: "#123456",
//         date: "11 July 2024",
//         status: "In progress",
//         total: "$3640",
//         items: ["part1.png","part2.png","+2"],
//         detailsBtn: { text:"Details" }
//       },
//       //…more orders
//     ],
//     pagination: { pages: 5, current: 1 }
//   },
//   "Order Details": { path: src/app/account/orderDetails
//     banner: true,
//     activeKey: "Order History",
//     title: "ORDER: #123456",
//     date: "11 July 2024",
//     statusSteps: ["Order accepted","Packed","Shipped","Delivered"],make stepper steps just like these read from here : src/app/account/checkout/page.tsx (step indicators , step connectors etc make exactly like this)
//     currentStep: 3,
//     items: [
//       {
//         image: "part-engine.png", path:  image: "/Images/photo-1.png"
//         title: "Title of part",
//         description: "Ford Bronco 1991 | 4.9L | from 2/3/91 (AIR inner manifold) | E4OD transmission",
//         qty: 1,
//         price: "$800"
//       },
//       { /* another line */ }
//     ],
//     payment: { methodLogo: "mastercard.svg", last4:"8888" },
//     summary: { cart: "$1600", shipping:"Free Shipping", tax:"$46", total:"$1646" },
//     shippingAddress: { /* copy of Shipping Address fields */ },
//     billingAddress: { /* copy of Billing Address fields */ }
//   }
// };
// use tailwind .
// put code in each respective file .
// write reusable code in seperate component file . here in : src/components\\

// <!-- registration.md -->
// # Registration Page Prompt

// Generate a **mobile-first**, responsive registration form using Tailwind (React or plain HTML+Tailwind) that displays **no banner** and **no sidebar**.

// - **Container padding**: `p-4` on mobile (≤640px), `p-6` on md (≥768px), `p-8` on lg (≥1024px).  
// - **Title** centered at top: **"REGISTRATION"** in uppercase, bold, `text-2xl` on mobile, `text-3xl` on md/lg.  
// - **Form fields** (stacked vertically, full width):
//   1. Label **Email*** + `<input type="email" placeholder="example@gmail.com">`  
//   2. Label **Password*** + `<input type="password" placeholder="••••">`  
//   3. Label **Confirm password*** + `<input type="password" placeholder="••••">`  
// - **Button**: full-width, text-center, `rounded-lg`, `py-2`, `bg-blue-500 hover:bg-blue-600 text-white`, `text-base` **"Register now"**.  
// - All form controls have 2xl rounded corners and subtle shadow.  
// - Ensure accessible labels, focus states, and (optionally) two-column grouping on wider screens.
"use client";
import FormField from '@/components/FormField';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function RegistrationPage() {
  const [fields, setFields] = useState({
    email: '',
    password: '',
    confirm: '',
  });
  return (
    <div className="min-h-screen bg-[#091B33] text-white flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-md mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-[#FFFFFF] mb-6 text-left">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image 
              src="/Images/HouseLine.png" 
              alt="Home" 
              width={16} 
              height={16}
              className="w-4 h-4"
            />
          </Link>
          <Image 
            src="/Images/arrows.png" 
            alt="Arrow" 
            width={12} 
            height={12}
            className="w-3 h-3"
          />
          <span className="font-exo2">Account</span>
        </div>
        <main className="bg-[#091B33] rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 w-full flex flex-col gap-6">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">REGISTRATION</h1>
          <FormField label="Email*" type="email" placeholder="example@gmail.com" value={fields.email} onChange={v => setFields(f => ({ ...f, email: v }))} />
          <FormField label="Password*" type="password" placeholder="••••" value={fields.password} onChange={v => setFields(f => ({ ...f, password: v }))} />
          <FormField label="Confirm password*" type="password" placeholder="••••" value={fields.confirm} onChange={v => setFields(f => ({ ...f, confirm: v }))} />
          <button className="w-full rounded-lg py-2 bg-blue-500 hover:bg-blue-600 text-white text-base font-semibold transition-colors mt-2">Register now</button>
        </main>
      </div>
    </div>
  );
}

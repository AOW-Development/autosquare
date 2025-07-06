// <!-- profile.md -->
// # Profile Page Prompt

// Generate a **responsive** "Profile" page component with:

// - **Banner** at top: full-width car image background, centered `brand-logo.svg` overlay.  
// - **Sidebar** on left: links "Profile" (active), "Shipping Address", "Billing Address", "Order History", "Garage", "Log out". Collapsible on mobile.  
// - **Content** area:  
//   - Title **"PROFILE"** (uppercase, `text-2xl` mobile → `text-3xl` md/lg)  
//   - Form fields:
//     1. **Email*** `(type="email")`, placeholder `"example@gmail.com"`  
//     2. Section header **"CHANGE PASSWORD"**  
//     3. **Current Password (leave blank to keep unchanged)** `(type="password")`, placeholder `"••••"`  
//     4. **New Password (leave blank to keep unchanged)** `(type="password")`, placeholder `"••••"`  
//     5. **Confirm New Password** `(type="password")`, placeholder `"••••"`  
//   - **Save Changes** button: `border-2 border-blue-600 text-blue-100 hover:bg-blue-600 rounded-lg py-2 px-4`  
// - **Spacing**: sidebar `p-4`, content `p-4` mobile → `p-6` md → `p-8` lg.  
// - **Inputs**: `w-full` mobile, `max-w-md` on md/lg. 2xl rounded, subtle shadow, with show/hide icon on password fields.
"use client";
import Banner from '@/components/Banner';
import Sidebar from '@/components/Sidebar';
import FormField from '@/components/FormField';
import { use, useState } from 'react';

export default function ProfilePage() {
  const [fields, setFields] = useState({
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  return (
    <div className="min-h-screen bg-[#091B33] text-white flex flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-6 lg:p-8">
      <div className="md:w-1/4">
        <Sidebar activeKey="Profile" />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <Banner />
        <main className="bg-[#091B33] rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 flex flex-col gap-6 max-w-xl mx-auto w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">PROFILE</h1>
          <FormField label="Email*" type="email" placeholder="example@gmail.com" value={fields.email} onChange={v => setFields(f => ({ ...f, email: v }))} />
          <div className="font-bold text-lg mt-6 mb-2">CHANGE PASSWORD</div>
          <FormField label="Current Password (leave blank to keep unchanged)" type="password" placeholder="••••" value={fields.currentPassword} onChange={v => setFields(f => ({ ...f, currentPassword: v }))} />
          <FormField label="New Password (leave blank to keep unchanged)" type="password" placeholder="••••" value={fields.newPassword} onChange={v => setFields(f => ({ ...f, newPassword: v }))} />
          <FormField label="Confirm New Password" type="password" placeholder="••••" value={fields.confirmNewPassword} onChange={v => setFields(f => ({ ...f, confirmNewPassword: v }))} />
          <button className="mt-6 border-2 border-blue-600 text-blue-100 hover:bg-blue-600 rounded-lg py-2 px-4 font-semibold transition-colors">Save Changes</button>
        </main>
      </div>
    </div>
  );
}

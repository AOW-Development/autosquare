
"use client";
import Banner from '@/components/Banner';
import Sidebar from '@/components/Sidebar';
import FormField from '@/components/FormField';
import { useState } from 'react';

export default function ShippingPage() {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    country: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
  });
  return (
    <div className="min-h-screen bg-[#091B33] text-white flex flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-6 lg:p-8">
      <div className="md:w-1/4">
        <Sidebar activeKey="Shipping Address" />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <Banner />
        <main className="bg-[#091B33] rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 flex flex-col gap-6 max-w-2xl mx-auto w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">SHIPPING ADDRESS</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="First Name*" type="text" placeholder="Kseniiia" value={fields.firstName} onChange={v => setFields(f => ({ ...f, firstName: v }))} />
            <FormField label="Last Name*" type="text" placeholder="Melnyk" value={fields.lastName} onChange={v => setFields(f => ({ ...f, lastName: v }))} />
          </div>
          <FormField label="Phone*" type="tel" placeholder="(888) 000-0000" value={fields.phone} onChange={v => setFields(f => ({ ...f, phone: v }))} />
          <FormField label="Country*" type="select" options={["Choose Country…"]} value={fields.country} onChange={v => setFields(f => ({ ...f, country: v }))} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Street address*" type="text" placeholder="Address" value={fields.street} onChange={v => setFields(f => ({ ...f, street: v }))} />
            <FormField label="Apartment, etc. (optional)" type="text" placeholder="Apt, suite…" value={fields.apartment} onChange={v => setFields(f => ({ ...f, apartment: v }))} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField label="City*" type="text" placeholder="City" value={fields.city} onChange={v => setFields(f => ({ ...f, city: v }))} />
            <FormField label="State*" type="select" options={["Choose state…"]} value={fields.state} onChange={v => setFields(f => ({ ...f, state: v }))} />
            <FormField label="ZIP Code*" type="text" placeholder="ZIP Code" value={fields.zip} onChange={v => setFields(f => ({ ...f, zip: v }))} />
          </div>
          <button className="mt-6 border border-blue-600 text-blue-100 hover:bg-blue-600 rounded-lg py-2 px-6 font-semibold transition-colors">Save Changes</button>
        </main>
      </div>
    </div>
  );
}

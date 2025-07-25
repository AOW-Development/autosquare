"use client";
import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";
import FormField from "@/components/FormField";
import React, { useEffect, useState } from "react";
import useBillingStore from "@/store/billingStore";

export default function BillingPage() {
  const { setBillingInfo, billingInfo } = useBillingStore();
  const [fields, setFields] = useState(
    billingInfo || {
      firstName: "",
      lastName: "",
      phone: "",
      country: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      zipCode: "",
    }
  );
  useEffect(() => {
    console.log(billingInfo);

    if (billingInfo) {
      setFields({
        // ...fields,
        // ...billingInfo,
        firstName: billingInfo.firstName,
        lastName: billingInfo.lastName,
        phone: billingInfo.phone,
        country: billingInfo.country,
        address: billingInfo.address,
        apartment: billingInfo.apartment || "",
        city: billingInfo.city,
        state: billingInfo.state,
        zipCode: billingInfo.zipCode,
      });
    }
  }, [billingInfo]);
  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    setBillingInfo({
      firstName: fields.firstName,
      lastName: fields.lastName,
      phone: fields.phone,
      country: fields.country,
      address: fields.address,
      apartment: fields.apartment,
      city: fields.city,
      state: fields.state,
      zipCode: fields.zipCode,
    } as const);
    // console.log("Billing info saved:", billingInfo);
  };
  return (
    <div className="min-h-screen bg-[#091B33] text-white flex flex-col md:flex-row">
      {/* <div className="md:w-1/4">
        <Sidebar activeKey="Billing Address" />
      </div> */}
      <div className="flex-1 flex flex-col gap-6">
        <Banner />
        <form
          onSubmit={(e) => handleSave(e)}
          autoComplete="off"
          className="flex flex-col md:flex-row w-full max-w-4xl mx-auto md:mx-28"
        >
          {/* <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
            BILLING ADDRESS
          </h1> */}
          <div className="mb-6 md:mb-8">
            <Sidebar activeKey="Billing Address" />
          </div>
          <div className="bg-[#091B33] shadow-lg p-4 md:p-6 lg:p-8 flex flex-col w-full">
            <h1
              className="text-2xl md:text-3xl font-bold text-center mb-4"
              style={{
                fontFamily: "Audiowide, sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              BILLING ADDRESS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <FormField
                label="First Name*"
                type="text"
                placeholder="Kseniiia"
                value={fields.firstName}
                onChange={(v) => setFields((f) => ({ ...f, firstName: v }))}
              />
              <FormField
                label="Last Name*"
                type="text"
                placeholder="Melnyk"
                value={fields.lastName}
                onChange={(v) => setFields((f) => ({ ...f, lastName: v }))}
              />
            </div>
            <FormField
              label="Phone*"
              type="tel"
              placeholder="(888) 000-0000"
              value={fields.phone}
              onChange={(v) => setFields((f) => ({ ...f, phone: v }))}
            />
            <FormField
              label="Country*"
              type="select"
              options={["Choose Country…", "USA", "Canada", "UK"]}
              value={fields.country}
              onChange={(v) => setFields((f) => ({ ...f, country: v }))}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Street address*"
                type="text"
                placeholder="Address"
                value={fields.address}
                onChange={(v) => setFields((f) => ({ ...f, address: v }))}
              />
              <FormField
                label="Apartment, etc. (optional)"
                type="text"
                placeholder="Apt, suite…"
                value={fields.apartment}
                onChange={(v) => setFields((f) => ({ ...f, apartment: v }))}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                label="City*"
                type="text"
                placeholder="City"
                value={fields.city}
                onChange={(v) => setFields((f) => ({ ...f, city: v }))}
              />
              <FormField
                label="State*"
                type="select"
                options={["Choose state…", "California", "Texas", "Florida"]}
                value={fields.state}
                onChange={(v) => setFields((f) => ({ ...f, state: v }))}
              />
              <FormField
                label="ZIP Code*"
                type="text"
                placeholder="ZIP Code"
                value={fields.zipCode}
                onChange={(v) => setFields((f) => ({ ...f, zipCode: v }))}
              />
            </div>
            <button className="mt-6 cursor-pointer border border-blue-600 text-blue-100 hover:bg-blue-600 rounded-lg py-2 px-6 font-semibold transition-colors">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

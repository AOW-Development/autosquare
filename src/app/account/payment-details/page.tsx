"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { leads } from "@/utils/api";

export default function PaymentDetailsPage() {
  const params = useSearchParams();
  const [show, setShow] = useState(true);
  const [payment, setPayment] = useState(false);
  const [referenceNo, setReferenceNo] = useState("");
  const [lead, setLead] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ref = params.get("ref");
    if (ref) {
      setReferenceNo(ref);
      handleSearch(ref);
    }
  }, [params]);

  const handleSearch = async (ref?: string) => {
    try {
      setLoading(true);
      const searchRef = ref || referenceNo;
      if (!searchRef) return;

      const leadData = await leads.fetchById(searchRef);
      setLead(leadData);
      setShow(false);
      setPayment(true);
    } catch (error) {
      console.error(error);
      alert("Reference number not found");
    } finally {
      setLoading(false);
    }
  };

  const price = lead?.data?.selling_price ?? lead?.data?.price ?? 0;

  return (
    <>
      {payment && lead && (
        <div className="min-h-screen bg-[#091B33] text-[#ffffff]">
          <div className="max-w-6xl mx-auto md:mx-35 px-6 py-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 pb-6 py-4 mt-1 bg-[#091b33] text-[15px] font-medium">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Image src="/engine/HouseLine.png" alt="Home" width={24} height={24} />
              </Link>
              <Image src="/Images/arrows (1).svg" alt="Arrow" width={16} height={16} />
              <span className="text-white">Make a payment</span>
            </div>

            <div className="bg-[#091627] rounded-2xl shadow-sm overflow-hidden">
              {/* Order Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 px-6 py-4 gap-4">
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-medium">
                    Order number: <span className="font-bold">#{referenceNo}</span> {/* Changed from lead.id to referenceNo */}
                  </div>
                  <div className="text-sm text-white/70">
                    Date: {new Date(lead.data?.created_at || new Date()).toLocaleDateString()}
                  </div>
                </div>
                {/* CORRECTED: Use referenceNo instead of lead.id */}
                <Link
                  href={`/account/paymentInfo?ref=${referenceNo}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-lg text-base transition-colors w-full md:w-auto"
                >
                  Pay
                </Link>
              </div>

              {/* Product Details */}
              <div className="divide-y divide-white/10">
                <div className="flex flex-wrap md:flex-nowrap items-center px-6 py-3 text-sm font-semibold">
                  <div className="flex-1 min-w-[120px]">{lead.data.part}</div>
                  <div className="flex-1 min-w-[120px] text-white/80">
                    {lead.data.make} {lead.data.model} {lead.data.year}
                  </div>
                  <div className="flex-1 min-w-[120px] text-white/80">
                    {lead.data.specification || "-"}
                  </div>
                  <div className="flex-1 min-w-[180px] text-white/80">
                    Warranty: {lead.data.warranty || "-"}
                  </div>
                  <div className="flex-1 min-w-[120px] text-white/80">
                    Miles: {lead.data.miles_promised || "-"}
                  </div>
                  <div className="w-10 text-center">x1</div>
                  <div className="w-20 text-right font-bold">${price}</div>
                </div>
              </div>

              {/* Customer Info & Total */}
              <div className="px-6 py-4 border-t border-white/10 flex flex-col gap-2 md:gap-0 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-1 text-sm">
                  <div>
                    Name: <span className="text-white/90">{lead.data.customer_name}</span>
                  </div>
                  <div>
                    Email: <span className="text-white/90">{lead.data.email}</span>
                  </div>
                </div>
                <div className="text-lg font-bold mt-4 md:mt-0">
                  TOTAL: <span className="text-white">${price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for reference number input */}
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="absolute inset-0 -z-10 bg-black/60 backdrop-blur-sm" />
          <div className="relative bg-[#11213A] rounded-lg shadow-xl p-8 w-full max-w-lg md:max-w-2xl mx-4">
            <button
              className="absolute top-3 md:top-6 right-3 text-gray-400 hover:text-white text-xl"
              onClick={() => redirect("/")}
            >
              &times;
            </button>
            <h2 className="text-xl font-audiowide mb-2 tracking-wide text-white">MAKE A PAYMENT</h2>
            <p className="mb-5 text-gray-300 text-sm">
              Please provide the order number as indicated in the invoice copy sent to your email.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <input
                type="text"
                value={referenceNo}
                onChange={(e) => setReferenceNo(e.target.value)}
                placeholder="Reference Number"
                className="flex-1 bg-[#1A2B47] border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-sky-600 cursor-pointer hover:bg-sky-700 text-white px-5 py-2 rounded transition-colors font-semibold"
              >
                {loading ? "Searching..." : "Search"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
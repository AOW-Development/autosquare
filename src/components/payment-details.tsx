"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { leads } from "@/utils/api";
import { normalizeLeadData } from "@/utils/leadNormalizer";

export default function PaymentDetailsPage() {
  const params = useSearchParams();

  const urlPrice = params.get("price");
  const urlMiles = params.get("miles");  

  const [show, setShow] = useState(true);
  const [payment, setPayment] = useState(false);
  const [referenceNo, setReferenceNo] = useState("");
  const [lead, setLead] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  /**
   * ALWAYS read from lead.data
   */
  const getFieldValue = (field: string) => {
    if (!lead?.data) return "-";
    const value = lead.data[field];
    if (value === undefined || value === null || value === "") return "-";
    return value;
  };

  /**
   * FIXED TOTAL PRICE
   * Handles empty string, null, undefined properly
   */
const price =
  urlPrice !== null
    ? Number(urlPrice)
    : Number(lead?.data?.selling_price) || 0;

    const miles =
  urlMiles || lead?.data?.miles_promised || "";

  /**
   * Detect part type
   */
  const partType = lead?.data?.part?.toLowerCase() || "";

  useEffect(() => {
    const ref = params.get("ref") || lead?.lead_id;
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

      const rawLead = await leads.fetchById(searchRef);

      console.log("RAW LEAD RECEIVED:", rawLead);

      /**
       * Normalize Meta OR Manual lead automatically
       */
      const normalizedData = normalizeLeadData(rawLead?.data || rawLead);

      const finalLead = {
        ...rawLead,
        data: normalizedData,
        lead_id: normalizedData.lead_id || rawLead?.lead_id || rawLead?.id || "",
      };

      console.log("NORMALIZED LEAD:", finalLead);

      setLead(finalLead);
      setShow(false);
      setPayment(true);
    } catch (error) {
      console.error(error);
      alert("Reference number not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {payment && lead && (
        <div className="min-h-screen bg-[#091B33] text-white">
          <div className="max-w-6xl mx-auto px-6 py-10">
            {/* breadcrumb */}
            <div className="flex items-center gap-2 pb-6 py-4 text-[15px] font-medium">
              <Link href="/">
                <Image
                  src="/engine/HouseLine.png"
                  alt="Home"
                  width={24}
                  height={24}
                />
              </Link>
              <Image
                src="/Images/arrows (1).svg"
                alt="Arrow"
                width={16}
                height={16}
              />
              <span>Make a payment</span>
            </div>

            <div className="bg-[#091627] rounded-2xl shadow-sm overflow-hidden">
              {/* header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 px-6 py-4 gap-4">
                <div>
                  <div className="text-sm">
                    Order number:
                    <span className="font-bold"> #{lead.lead_id}</span>
                  </div>
                  <div className="text-sm text-white/70">
                    Date: {new Date(lead.created_at).toLocaleDateString()}
                  </div>
                </div>

                <Link
                  href={`/account/paymentInfo?ref=${lead.lead_id}&price=${price}&miles=${miles}`}
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-2 rounded-lg font-semibold"
                >
                  Pay
                </Link>
              </div>

              {/* product */}
              <div className="divide-y divide-white/10">
                <div className="flex flex-wrap items-center px-6 py-4 text-sm font-semibold">
                  {/* Part */}
                  <div className="flex-1 min-w-[120px]">
                    {getFieldValue("part")}
                  </div>

                  {/* Make Model Year */}
                  <div className="flex-1 min-w-[120px] text-white/80">
                    {getFieldValue("make")} {getFieldValue("model")}{" "}
                    {getFieldValue("year")}
                  </div>

                  {/* Specification */}
                  <div className="flex-1 min-w-[120px] text-white/80">
                    {lead?.data?.specification || "-"}
                  </div>

                  {/* SHOW ONLY ENGINE OR TRANSMISSION */}
                  <div className="flex-1 min-w-[180px] text-white/80">
                    {partType === "engine"
                      ? "Engine"
                      : partType === "transmission"
                      ? "Transmission"
                      : "-"}
                  </div>

                  {/* Miles */}
                  <div className="flex-1 min-w-[120px] text-white/80">
                   Miles: {urlMiles || lead?.data?.miles_promised || "-"}
                  </div>

                  {/* Qty */}
                  <div className="w-10 text-center">x1</div>

                  {/* Price */}
                  <div className="w-20 text-right font-bold">
                    {price > 0 ? `$${price}` : "-"}
                  </div>
                </div>
              </div>

              {/* customer */}
              <div className="px-6 py-4 border-t border-white/10 flex flex-col md:flex-row justify-between">
                <div className="text-sm">
                  <div>
                    Name:
                    <span className="text-white/90">
                      {getFieldValue("customer_name")}
                    </span>
                  </div>
                  <div>
                    Email:
                    <span className="text-white/90">
                      {getFieldValue("email")}
                    </span>
                  </div>
                </div>

                {/* TOTAL FIXED */}
                <div className="text-lg font-bold mt-4 md:mt-0">
                  TOTAL: {price > 0 ? `$${price}` : "-"}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* modal */}
      {show && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative bg-[#11213A] rounded-lg shadow-xl p-8 w-full max-w-lg mx-4">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
              onClick={() => redirect("/")}
            >
              ×
            </button>

            <h2 className="text-xl mb-2 text-white">MAKE A PAYMENT</h2>
            <p className="mb-5 text-gray-300 text-sm">
              Please enter your reference number.
            </p>

            <form
              className="flex gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <input
                value={referenceNo}
                onChange={(e) => setReferenceNo(e.target.value)}
                placeholder="Reference Number"
                className="flex-1 bg-[#1A2B47] border border-gray-600 rounded px-3 py-2 text-white"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-sky-600 hover:bg-sky-700 px-5 py-2 rounded font-semibold"
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
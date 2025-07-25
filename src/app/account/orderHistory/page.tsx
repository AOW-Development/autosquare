"use client";
import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";

const filters = ["All", "This month", "Last month", "This year", "Last year"];
const orders = [
  {
    id: "#123456",
    date: "11 July 2024",
    status: "In progress",
    total: "$3640",
    items: ["/Images/item2.png"],
  },
];

export default function OrderHistoryPage() {
  return (
    <div className="min-h-screen bg-[#091B33] text-white flex flex-col md:flex-row">
      {/* <div className="md:w-1/4">
        <Sidebar activeKey="Order History" />
      </div> */}
      <div className="flex-1 flex flex-col gap-6">
        <Banner />
        <div className="flex flex-col md:flex-row w-full max-w-4xl lg:max-w-6xl mx-auto">
          <div className="mb-6 md:mb-8">
            <Sidebar activeKey="Order History" />
          </div>
          <div className="bg-[#091B33] shadow-lg p-4 md:p-6 lg:p-8 flex flex-col w-full">
            <h1
              className="text-2xl md:text-3xl font-bold text-center mb-4"
              style={{
                fontFamily: "Audiowide, sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              ORDER HISTORY
            </h1>
            <div className="flex gap-2 flex-wrap mb-4">
              {filters.map((f, i) => (
                <button
                  key={f}
                  className={`px-4 py-1 rounded-full font-semibold text-sm ${
                    i === 0
                      ? "bg-gray-700 text-white"
                      : "border border-gray-500 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-6 w-full border-2 rounded-md border-blue-600 overflow-hidden">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-[#091627] rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center gap-4"
                >
                  {/* Left: Order Info */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">Order: {order.id}</span>
                      <span className="text-xs text-gray-400">
                        {order.date}
                      </span>
                    </div>
                    <div
                      className={`font-semibold text-sm mt-1 ${
                        order.status === "In progress"
                          ? "text-yellow-400"
                          : order.status === "Completed"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {order.status}
                    </div>
                  </div>

                  {/* Right: Total, Items, Details */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 min-w-[300px] justify-between">
                    <div className="flex flex-row  md:justify-center md:items-center">
                      <div className="font-bold">Total: {order.total}</div>
                      <div className="flex gap-2 -mt-1 pl-2 items-start md:items-center md:justify-end justify-start">
                        {order.items.map((img, j) =>
                          typeof img === "string" && img.startsWith("+") ? (
                            <span key={j} className="text-gray-400 font-bold">
                              {img}
                            </span>
                          ) : (
                            <Image
                              key={j}
                              src={img}
                              alt="item"
                              width={102}
                              height={102}
                              className="rounded"
                            />
                          )
                        )}
                      </div>
                    </div>
                    <button className="border border-blue-600 cursor-pointer text-blue-100 hover:bg-blue-600 rounded-lg py-1 px-3 font-semibold transition-colors self-start  md:self-center">
                      <Link href={"/account/trackOrder"}>Details</Link>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {[1, 2, 3, 4, 5].map((p) => (
                <button
                  key={p}
                  className={`px-3 py-1 rounded ${
                    p === 1
                      ? "bg-blue-600 text-white"
                      : "bg-[#091627] text-blue-100 hover:bg-blue-600"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

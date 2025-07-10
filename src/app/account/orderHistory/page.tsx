"use client";
import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

const filters = ["All", "This month", "Last month", "This year", "Last year"];
const orders = [
  {
    id: "#123456",
    date: "11 July 2024",
    status: "In progress",
    total: "$3640",
    items: ["/Images/part1.png", "/Images/part2.png", "+2"],
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
        <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto">
          <div className="mb-6 md:mb-0">
            <Sidebar activeKey="Order History" />
          </div>
          <div className="bg-[#091B33] shadow-lg p-4 md:p-6 lg:p-8 flex flex-col w-full">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
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
            <div className="flex flex-col gap-6">
              {orders.map((order, i) => (
                <div
                  key={order.id}
                  className="bg-[#091627] rounded-2xl shadow p-4 flex flex-col md:flex-row md:items-center gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold">Order {order.id}</span>
                      <span className="text-xs text-gray-400 ml-2">
                        {order.date}
                      </span>
                    </div>
                    <div
                      className={`font-semibold text-sm ${
                        order.status === "In progress"
                          ? "text-yellow-400"
                          : order.status === "Completed"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {order.status}
                    </div>
                    <div className="font-bold mt-1">Total: {order.total}</div>
                    <div className="flex gap-2 mt-2 items-center">
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
                            width={32}
                            height={32}
                            className="rounded"
                          />
                        )
                      )}
                    </div>
                  </div>
                  <button className="border border-blue-600 text-blue-100 hover:bg-blue-600 rounded-lg py-1 px-3 font-semibold transition-colors self-start md:self-center">
                    Details
                  </button>
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

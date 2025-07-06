// <!-- order-history.md -->
// # Order History Page Prompt

// Render a **responsive** "Order History" screen:

// - **Banner + Sidebar** (active "Order History").
// - Title **"ORDER HISTORY"**.
// - A row of **filter pills**:  
//   - **All** (active, `bg-gray-700 text-white`),  
//   - This month, Last month, This year, Last year (outline style).
// - A vertical list of **order cards** (up to 10):  
//   - On mobile: full-width stacked  
//   - On md/lg: `max-w-2xl` centered  
//   - Each card shows:
//     1. **Order #123456** – date **"11 July 2024"**
//     2. Status text colored: In progress (yellow), Completed (green), Canceled (red)
//     3. Total: **$3640**
//     4. Thumbnails of product images (up to 3), with "+2" if more
//     5. **Details** button: `border-blue-600 text-blue-100 hover:bg-blue-600 rounded-lg py-1 px-3`
// - **Pagination** at bottom: "< 1 2 3 4 5 >" with current page highlighted.
// - Spacing: `gap-6` between cards, `p-4` mobile → `p-6` md → `p-8` lg.
"use client";
import Banner from '@/components/Banner';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';

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
    <div className="min-h-screen bg-[#091B33] text-white flex flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-6 lg:p-8">
      <div className="md:w-1/4">
        <Sidebar activeKey="Order History" />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <Banner />
        <main className="bg-[#091B33] rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 flex flex-col gap-6 max-w-2xl mx-auto w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">ORDER HISTORY</h1>
          <div className="flex gap-2 flex-wrap mb-4">
            {filters.map((f, i) => (
              <button key={f} className={`px-4 py-1 rounded-full font-semibold text-sm ${i === 0 ? 'bg-gray-700 text-white' : 'border border-gray-500 text-gray-300 hover:bg-gray-700'}`}>{f}</button>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {orders.map((order, i) => (
              <div key={order.id} className="bg-[#091627] rounded-2xl shadow p-4 flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold">Order {order.id}</span>
                    <span className="text-xs text-gray-400 ml-2">{order.date}</span>
                  </div>
                  <div className={`font-semibold text-sm ${order.status === 'In progress' ? 'text-yellow-400' : order.status === 'Completed' ? 'text-green-400' : 'text-red-400'}`}>{order.status}</div>
                  <div className="font-bold mt-1">Total: {order.total}</div>
                  <div className="flex gap-2 mt-2 items-center">
                    {order.items.map((img, j) => (
                      typeof img === 'string' && img.startsWith('+')
                        ? <span key={j} className="text-gray-400 font-bold">{img}</span>
                        : <Image key={j} src={img} alt="item" width={32} height={32} className="rounded" />
                    ))}
                  </div>
                </div>
                <button className="border border-blue-600 text-blue-100 hover:bg-blue-600 rounded-lg py-1 px-3 font-semibold transition-colors self-start md:self-center">Details</button>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {[1,2,3,4,5].map(p => (
              <button key={p} className={`px-3 py-1 rounded ${p === 1 ? 'bg-blue-600 text-white' : 'bg-[#091627] text-blue-100 hover:bg-blue-600'}`}>{p}</button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

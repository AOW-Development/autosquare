// <!-- order-details.md -->
// # Order Details Page Prompt

// Generate a **responsive** "Order Details" view:

// - **Banner + Sidebar** (active "Order History").
// - Title row: **"ORDER: #123456"** on left, status **"In progress"** (yellow) on right.
// - A **four-step** horizontal progress bar:
//   1. Order accepted (✓)
//   2. Packed (✓)
//   3. Shipped (current, highlighted)
//   4. Delivered (future)
// - Under progress: text **"Your order has been delivered: DHL (tracking number 9988774455661122)"**.
// - **Itemized list**: for each part
//   - thumbnail (64×64)
//   - **Title of part**
//   - Description:  
//     "Ford Bronco 1991 | 4.9L | from 2/3/91 (AIR inner manifold) | E4OD transmission"
//   - qty "1 pc" or "2×"
//   - price "$800" or "$400"
// - **Payment Method**: show `mastercard.svg` + masked "**** 8888".
// - **Summary** block (right-aligned on md/lg):
//   - Cart total: **$1600**
//   - Shipping: **Free Shipping**
//   - Sales Tax: **$46**
//   - **TOTAL: $1646**
// - Two address cards below (side-by-side on md/lg): Shipping Address and Billing Address, each listing Name, Email, Phone Number, Full street.
// - Spacing: `p-4` mobile → `p-6` md → `p-8` lg; cards with `rounded-2xl`, `shadow`.
"use client";
import Banner from '@/components/Banner';
import Sidebar from '@/components/Sidebar';
import Stepper from '@/components/Stepper';
import Image from 'next/image';

const steps = ["Order accepted", "Packed", "Shipped", "Delivered"];
const currentStep = 3;
const items = [
  {
    image: "/Images/photo-1.png",
    title: "Title of part",
    description: "Ford Bronco 1991 | 4.9L | from 2/3/91 (AIR inner manifold) | E4OD transmission",
    qty: 1,
    price: "$800",
  },
];
const payment = { methodLogo: "/Images/mastercard.svg", last4: "8888" };
const summary = { cart: "$1600", shipping: "Free Shipping", tax: "$46", total: "$1646" };
const shippingAddress = {
  name: "Kseniiia Melnyk",
  email: "example@gmail.com",
  phone: "(888) 000-0000",
  address: "123 Main St, Apt 4B, New York, NY 10001, USA",
};
const billingAddress = { ...shippingAddress };

export default function OrderDetailsPage() {
  return (
    <div className="min-h-screen bg-[#091B33] text-white flex flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-6 lg:p-8">
      <div className="md:w-1/4">
        <Sidebar activeKey="Order History" />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <Banner />
        <main className="bg-[#091B33] rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 flex flex-col gap-6 max-w-3xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
            <h1 className="text-2xl md:text-3xl font-bold">ORDER: #123456</h1>
            <span className="font-semibold text-yellow-400 text-lg">In progress</span>
          </div>
          <Stepper steps={steps} currentStep={currentStep} />
          <div className="mb-4 text-sm text-gray-300">Your order has been delivered: DHL (tracking number 9988774455661122)</div>
          <div className="flex flex-col gap-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#091627] rounded-2xl shadow p-4">
                <Image src={item.image} alt={item.title} width={64} height={64} className="rounded" />
                <div className="flex-1">
                  <div className="font-bold">{item.title}</div>
                  <div className="text-sm text-gray-300">{item.description}</div>
                </div>
                <div className="text-sm font-semibold">{item.qty} pc</div>
                <div className="font-bold text-lg">{item.price}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="flex-1 bg-[#091627] rounded-2xl shadow p-4 flex flex-col gap-2">
              <div className="font-bold mb-2">Payment Method</div>
              <div className="flex items-center gap-2">
                <Image src={payment.methodLogo} alt="Payment" width={32} height={20} />
                <span className="text-lg font-semibold">**** {payment.last4}</span>
              </div>
            </div>
            <div className="flex-1 bg-[#091627] rounded-2xl shadow p-4 flex flex-col gap-2">
              <div className="font-bold mb-2">Summary</div>
              <div className="flex justify-between"><span>Cart total:</span><span>{summary.cart}</span></div>
              <div className="flex justify-between"><span>Shipping:</span><span>{summary.shipping}</span></div>
              <div className="flex justify-between"><span>Sales Tax:</span><span>{summary.tax}</span></div>
              <div className="flex justify-between font-bold text-lg"><span>TOTAL:</span><span>{summary.total}</span></div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="flex-1 bg-[#091627] rounded-2xl shadow p-4">
              <div className="font-bold mb-2">Shipping Address</div>
              <div>{shippingAddress.name}</div>
              <div>{shippingAddress.email}</div>
              <div>{shippingAddress.phone}</div>
              <div>{shippingAddress.address}</div>
            </div>
            <div className="flex-1 bg-[#091627] rounded-2xl shadow p-4">
              <div className="font-bold mb-2">Billing Address</div>
              <div>{billingAddress.name}</div>
              <div>{billingAddress.email}</div>
              <div>{billingAddress.phone}</div>
              <div>{billingAddress.address}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

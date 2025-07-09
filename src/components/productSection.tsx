// create product section where 3 items vertically : 
//  bg color is #091b33 and text is #FFFFFF
// top is table 
// below is featured product :
//           (left side is title, right side is <> (path is ) )
//           4 cards are in row path is pro/cards.png

//at bottom is "You have viewd" titel and one card path is pro/cards.png 

import Image from 'next/image';

const productDetails = [
  { label: 'Make', value: 'Volvo' },
  { label: 'Model', value: 'XC60' },
  { label: 'Year', value: '2018' },
  { label: 'Part', value: 'Engine Assembly' },
  { label: 'Miles', value: '60K' },
  { label: 'Genuine', value: 'Genuine Dodge Part' },
  { label: 'Condition', value: 'Excellent Condition' },
  { label: 'Warranty', value: '60 Days Warranty' },
];

const featuredProducts = Array(4).fill({
  title: 'Engine assembly',
  desc: 'Ford bronco 1991\n4.9L\nGenuine Used Part\nA Grade Condition\n110k miles\n90 Days Warranty',
  price: '100$',
  img: '/pro/cards.png',
});

const viewedProduct = {
  title: 'Engine assembly',
  desc: 'Ford bronco 1991\n4.9L\nGenuine Used Part\nA Grade Condition\n110k miles\n90 Days Warranty',
  price: '100$',
  img: '/pro/cards.png',
};

export default function ProductSection() {
  return (
    <section className="bg-[#091b33] text-white w-full py-8 px-2 flex flex-col gap-12">
      {/* Top Table */}
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-xl font-bold mb-4">DESCRIPTION</h2>
        <table className="w-full border-separate border-spacing-y-2">
          <tbody>
            {productDetails.map((row, i) => (
              <tr key={i} className="bg-[#091b33] border-b border-[#1a2a44]">
                <td className="py-2 px-4 font-semibold text-sm w-32 text-[#b0c4de]">{row.label}</td>
                <td className="py-2 px-4 text-sm">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Featured Products */}
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">FEATURED PRODUCTS</h2>
          <div className="flex gap-2">
            <button className="p-2"><span className="text-2xl">&#60;</span></button>
            <button className="p-2"><span className="text-2xl">&#62;</span></button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((prod, i) => (
            <div key={i} className="bg-[#12263A] rounded-lg shadow-lg flex flex-col items-center p-4 min-h-[340px]">
              <div className="w-full h-32 relative mb-4">
                <Image src={prod.img} alt={prod.title} fill className="object-contain rounded" />
              </div>
              <div className="font-bold text-lg mb-1">{prod.title}</div>
              <div className="text-xs whitespace-pre-line text-gray-300 mb-2">{prod.desc}</div>
              <div className="font-bold text-xl mb-2">{prod.price}</div>
              <button className="bg-[#00a3ff] text-white px-4 py-1 rounded hover:bg-[#1558b0] transition text-sm">Add cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* You Have Viewed */}
      <div className="max-w-6xl mx-auto w-full mt-12">
        <h2 className="text-2xl font-bold mb-6">YOU HAVE VIEWED</h2>
        <div className="flex flex-wrap gap-6">
          <div className="bg-[#12263A] rounded-lg shadow-lg flex flex-col items-center p-4 min-h-[340px] w-full max-w-xs">
            <div className="w-full h-32 relative mb-4">
              <Image src={viewedProduct.img} alt={viewedProduct.title} fill className="object-contain rounded" />
            </div>
            <div className="font-bold text-lg mb-1">{viewedProduct.title}</div>
            <div className="text-xs whitespace-pre-line text-gray-300 mb-2">{viewedProduct.desc}</div>
            <div className="font-bold text-xl mb-2">{viewedProduct.price}</div>
            <button className="bg-[#00a3ff] text-white px-4 py-1 rounded hover:bg-[#1558b0] transition text-sm">Add cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

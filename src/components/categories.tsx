
import Image from 'next/image';

const categories = [
  {
    src: '/categories_section/engine.png',
    alt: 'Engine',
    width: 282,
    height: 284,
    gridClass: 'col-span-1 row-span-1',
  },
  {
    src: '/categories_section/transmission.png',
    alt: 'Transmission',
    width: 282,
    height: 284,
    gridClass: 'col-span-1 row-span-1',
  },
  {
    src: '/categories_section/axel.png',
    alt: 'Axel',
    width: 588,
    height: 284,
    gridClass: 'col-span-2 row-span-1',
  },
  {
    src: '/categories_section/transfer-case.png',
    alt: 'Transfer Case',
    width: 588,
    height: 284,
    gridClass: 'col-span-2 row-span-1',
  },
  {
    src: '/categories_section/head-light.png',
    alt: 'Head Light',
    width: 282,
    height: 284,
    gridClass: 'col-span-1 row-span-1',
  },
  {
    src: '/categories_section/tail-light.png',
    alt: 'Tail Light',
    width: 282,
    height: 284,
    gridClass: 'col-span-1 row-span-1',
  },
];

export default function CategoriesSection() {
  return (
    <section
      className="w-full h-[918px] bg-[#091b33] flex flex-col items-center justify-center px-4"
    > 
    
    <div className='justify-center'>

    
      <h2
        className="font-audiowide text-white text-4xl mt-6 mb-6 tracking-wide uppercase  text-left w-full"
        style={{ fontFamily: 'Audiowide, sans-serif' }}
      >
        featured categories
      </h2>
      <div
        className="grid grid-cols-4 grid-rows-2 gap-x-2 gap-y-0 w-full max-w-[1200px]"
        style={{ height: '684px' }}
      >
        {/* Top row */}
        <div className="col-span-1 row-span-1 flex items-center justify-center relative">
          <Image src={categories[0].src} alt={categories[0].alt} width={282} height={284} />
          <div className="absolute top-4 right-4 flex flex-col items-end mt-8 pr-4">
            <span className="text-white text-xl font-bold mb-2 drop-shadow">ENGINE</span>
            <button className="bg-[#00A3FF] text-white font-semibold rounded-md py-2 px-8 text-sm hover:bg-[#0086cc] transition">Go shop</button>
          </div>
        </div>
        <div className="col-span-1 row-span-1 flex items-center justify-center relative">
          <Image src={categories[1].src} alt={categories[1].alt} width={282} height={284} />
          <div className="absolute top-4 right-4 flex flex-col items-end  mt-8 pr-4">
            <span className="text-white text-lg font-bold mb-2 drop-shadow">TRANSMISSION</span>
            <button className="bg-[#00A3FF] text-white font-semibold rounded-md py-2 px-8 text-sm hover:bg-[#0086cc] transition">Go shop</button>
          </div>
        </div>
        <div className="col-span-2 row-span-1 flex items-center justify-center relative">
          <Image src={categories[2].src} alt={categories[2].alt} width={588} height={284} />
          <div className="absolute top-4 right-4 flex flex-col items-end mt-8 pr-4 ">
            <span className="text-white text-lg font-bold mb-2 drop-shadow">AXLE ASSEMBLY</span>
            <button className="bg-[#00A3FF] text-white font-semibold rounded-md py-2 px-8 text-sm hover:bg-[#0086cc] transition">Go shop</button>
          </div>
        </div>
        {/* Bottom row */}
        <div className="col-span-2 row-span-1 flex items-center justify-center relative mb-22">
          <Image src={categories[3].src} alt={categories[3].alt} width={588} height={284} />
          <div className="absolute top-4 right-4 flex flex-col items-end pr-4">
            <span className="text-white text-lg font-bold mb-2 drop-shadow">TRANSFER CASE</span>
            <button className="bg-[#00A3FF] text-white font-semibold rounded-md py-2 px-8 text-sm hover:bg-[#0086cc] transition">Go shop</button>
          </div>
        </div>
        <div className="col-span-1 row-span-1 flex items-center justify-center relative mb-22">
          <Image src={categories[4].src} alt={categories[4].alt} width={282} height={284} />
          <div className="absolute top-4 right-4 flex flex-col items-end pr-4">
            <span className="text-white text-lg font-bold mb-2 drop-shadow ">HEADLIGHT</span>
            <button className="bg-[#00A3FF] text-white font-semibold rounded-md py-2 px-8 text-sm hover:bg-[#0086cc] transition">Go shop</button>
          </div>
        </div>
        <div className="col-span-1 row-span-1 flex items-center justify-center relative mb-22">
          <Image src={categories[5].src} alt={categories[5].alt} width={282} height={284} />
          <div className="absolute top-4 right-4 flex flex-col items-end pr-4">
            <span className="text-white text-lg font-bold mb-2 drop-shadow">TAIL LIGHT</span>
            <button className="bg-[#00A3FF] text-white font-semibold rounded-md py-2 px-8 text-sm hover:bg-[#0086cc] transition">Go shop</button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
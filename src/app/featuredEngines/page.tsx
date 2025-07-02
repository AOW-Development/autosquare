// create ENgines featured  page where :


//  : title "Quantity of Products"
//  : 15 images in grid, 3 col format(so each row has 3 imges, total  5 rows) . img size is 282*477 px 
//  path for 15 imges (use this same img for all 15 cards/images): 
// public/featuredEngines/cards (1).png
// 

//  so this grid containing 15 img is right side and left side create :
 // 5 vertically stacked cards sizes (top to bottom) : (make black bg for these 5 cards)
 // card 1 : 250*400px 
 // card 2 : 250* 170px
 // card 3 : 250* 150px
 // card 4 : 250* 250px
 // card 5 : 250* 150px 
 
//  card 1 text : Choose your specification , 4.9L , from2/391 inner, 
// card 2 text : price range
// card 3 text : state : used , new
// card 4 text : car milage miles , upto 50 , 50 to 100 ,100 to 150
// card 5 : condition


// bg color is bg-[#091b33]

// at last  add center : public/transmission/arrows (1).png 1 2 3 4  5  public/arrows.png





import Image from 'next/image';

export default function FeaturedEngines() {
  return (
    <div className="min-h-screen w-full bg-[#091b33] flex flex-col items-center py-10">
      <h1 className="text-white text-3xl font-bold mb-8">Quantity of Products</h1>
      <div className="flex w-full max-w-7xl gap-8">
        {/* Left: 5 stacked cards */}
        <div className="flex flex-col gap-4">
          <div className="bg-black text-white w-[250px] h-[400px] rounded-lg flex flex-col justify-center items-center p-4">
            <div className="text-lg font-semibold mb-2">Choose your specification</div>
            <div className="text-2xl font-bold">4.9L</div>
            <div className="text-sm mt-2">from 2/391 inner</div>
          </div>
          <div className="bg-black text-white w-[250px] h-[170px] rounded-lg flex justify-center items-center p-4">
            <span className="text-lg font-semibold">price range</span>
          </div>
          <div className="bg-black text-white w-[250px] h-[150px] rounded-lg flex justify-center items-center p-4">
            <span className="text-lg font-semibold">state: used, new</span>
          </div>
          <div className="bg-black text-white w-[250px] h-[250px] rounded-lg flex flex-col justify-center items-center p-4">
            <span className="text-lg font-semibold mb-2">car milage miles</span>
            <span className="text-sm">upto 50</span>
            <span className="text-sm">50 to 100</span>
            <span className="text-sm">100 to 150</span>
          </div>
          <div className="bg-black text-white w-[250px] h-[150px] rounded-lg flex justify-center items-center p-4">
            <span className="text-lg font-semibold">condition</span>
          </div>
        </div>
        {/* Right: 15 images grid */}
        <div className="flex-1 grid grid-cols-3 gap-6">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="w-[282px] h-[477px] bg-white rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/featuredEngines/cards (1).png"
                alt={`Engine Card ${i + 1}`}
                width={282}
                height={477}
                className="object-cover"
                priority={i < 3}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Bottom center arrows and numbers */}
      <div className="flex items-center gap-4 mt-12">
        <Image src="/transmission/arrows (1).png" alt="arrows left" width={32} height={32} />
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className="text-white text-xl font-bold px-2">{n}</span>
        ))}
        <Image src="/featuredEngines/arrows.png" alt="arrows right" width={32} height={32} />
      </div>
    </div>
  );
}
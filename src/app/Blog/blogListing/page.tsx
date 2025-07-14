"use client";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    img: "/Blog/img-1.png",
    title: "How to Choose the Right Engine Oil",
    excerpt:
      "Choosing the right engine oil is crucial for your car's performance and longevity. Here's what you need to know...",
    link: "#",
  },
  {
    img: "/Blog/img-2.png",
    title: "5 Signs Your Brakes Need Attention",
    excerpt:
      "Brakes are a critical safety component. Learn the top signs that indicate it's time for a checkup...",
    link: "#",
  },
  {
    img: "/Blog/img-3.png",
    title: "Winter Car Care Tips",
    excerpt:
      "Winter can be tough on vehicles. Follow these tips to keep your car running smoothly all season...",
    link: "#",
  },
];

export default function BlogListingPage() {
  return (
    <div className="min-h-screen bg-[#091b33] text-white flex flex-col">
      {/* Banner */}
      <div
        className="relative w-full h-[240px] md:h-[320px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/Blog/banner.png)" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center">
          {/* <Image src="/Images/brand-logo.svg"  width={80} height={80} className="mb-2" /> */}
        </div>
      </div>
      {/* Sidebar + Content */}
      <div className="flex flex-1 w-full max-w-7xl mx-auto gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8">
        {/* Sidebar */}
        {/* <aside className="hidden md:flex flex-col w-56 shrink-0 bg-[#091627] rounded-2xl shadow-sm p-4 gap-4 h-fit sticky top-8">
          {['Profile', 'Shipping Address', 'Billing Address', 'Order History', 'Garage', 'Log out'].map((item) => (
            <a key={item} href="#" className="text-white/80 hover:text-white text-base font-medium py-1 px-2 rounded transition-colors">
              {item}
            </a>
          ))}
        </aside> */}
        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Breadcrumb */}
          {/* <div className="flex items-center gap-2 text-xs text-white mb-6">
            <Image src="/engine/HouseLine.png" alt="Home" width={18} height={18} />
            {/* <span>/</span> */}
          {/* <Image src="/Images/arrows.png" alt="Arrow" width={16} height={16} /> */}
          {/* <span> Blogs</span> */}
          <div className="flex items-center gap-2  py-1 mt-1 mb-6 bg-[#091b33] text-[#0F1E35] text-[15px] font-medium ">
            <Image
              src="/engine/HouseLine.png"
              alt="Home"
              width={20}
              height={20}
            />
            <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
            <span className="text-white">Blogs</span>
          </div>
          {/* Mobile Sidebar Toggle */}
          {/* <div className="md:hidden mb-4">
            <details className="bg-[#091627] rounded-2xl shadow-sm">
              <summary className="py-2 px-4 cursor-pointer text-white/80 font-medium">Menu</summary>
              <nav className="flex flex-col gap-2 p-4">
                {['Profile', 'Shipping Address', 'Billing Address', 'Order History', 'Garage', 'Log out'].map((item) => (
                  <a key={item} href="#" className="text-white/80 hover:text-white text-base font-medium py-1 px-2 rounded transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
            </details>
          </div> */}
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {blogs.map((blog, i) => (
              <div
                key={i}
                className="bg-[#091627] rounded-2xl shadow-sm p-4 flex flex-col"
              >
                <div className="w-full aspect-[16/9] relative rounded-xl overflow-hidden mb-3">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-1 text-white">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-300 line-clamp-2 mb-2">
                  {blog.excerpt}
                </p>
                <Link
                  href="/Blog/blogDetails"
                  className="text-blue-400 text-right underline hover:underline font-medium text-sm mt-4"
                >
                  Read more
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

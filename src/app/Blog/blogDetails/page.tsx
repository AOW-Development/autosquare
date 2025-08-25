"use client";
import Image from "next/image";

const featuredBlogs = [
  {
    title: "Elevate Your Ride: A Guide to Online Auto Parts Shopping",
    excerpt: "Welcome to autosquare.su – your one-stop destination for premium auto parts and acc...",
    link: "#",
  },
  {
    title: "title",
    excerpt: "Velit ut eveniet voluptas odit quam. Est numquam et. Maxime recusandae velit veniam voluptatibus sed recusandae eaque...",
    link: "#",
  },
];

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen bg-[#091b33] text-white flex flex-col  md:px-6 py-8 pb-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 px-10">
        {/* Main Content */}
        <div className="flex-1 max-w-3xl">
        <div className="flex items-center gap-2 text-base text-white mb-6">
            <Image src="/engine/HouseLine.png" alt="Home" width={18} height={18} />
            {/* <span>/</span> */}
            <Image src="/Images/arrows.png" alt="Arrow" width={16} height={16} />
            <span> Registration</span>
          </div>
          {/* <a href="#" className="text-xs text-white/60 mb-4 inline-block">&lt; Registration</a> */}
          <h1 className="text-2xl md:text-[32px]  mb-4 leading-tight uppercase " style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}>ELEVATE YOUR RIDE: A GUIDE TO ONLINE AUTO PARTS SHOPPING</h1>
         <div className="w-full rounded-2xl overflow-hidden mb-4">
            <Image src="/Blog/blog11.png" alt="Blog Main" width={800} height={300} className="w-full h-auto object-cover" />
          </div>
          <p className="mb-4 text-white/90">Welcome to autosquare.su – your one-stop destination for premium auto parts and accessories. We understand the importance of keeping your vehicle in top-notch condition, and that's why we offer a wide range of high-quality products to enhance performance, safety, and style. In this guide, we'll explore the benefits of shopping for auto parts online and how autosquare.su can be your trusted partner in maintaining and upgrading your vehicle.</p>
          <h2 className="text-lg md:text-xl font-bold mb-2 mt-6 uppercase" style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}>1. THE CONVENIENCE OF ONLINE AUTO PARTS SHOPPING</h2>
          <p className="mb-4 text-white/90">In today's fast-paced world, convenience is key. Discover the ease and efficiency of browsing and purchasing auto parts from the comfort of your home. Autosquare.su provides a user-friendly interface, allowing you to navigate through our extensive catalog effortlessly. With just a few clicks, you can find the perfect parts for your vehicle, saving you time and hassle.</p>
          <h2 className="text-lg md:text-xl font-bold mb-2 mt-6 uppercase" style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}>2. EXTENSIVE RANGE OF PREMIUM AUTO PARTS</h2>
          <p className="mb-4 text-white/90">At AutoSquare we take pride in offering a diverse selection of top-quality auto parts and accessories. Whether you're looking for essential components like brake pads, filters, or spark plugs, or you want to enhance your vehicle's aesthetics with stylish accessories, we've got you covered. Our products are sourced from reputable manufacturers to ensure durability, reliability, and optimal performance.</p>
        </div>
        {/* Sidebar */}
        <aside className="w-full md:w-96 flex-shrink-0 flex flex-col gap-4">
        <h3 className="mt-12 text-[24px] mb-2 uppercase tracking-wide" style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}>Featured Blogs</h3>
          <div className="bg-[#091627] rounded-2xl shadow-sm p-6">
            
            <div className="flex flex-col gap-4">
              {featuredBlogs.map((blog, i) => (
                <div key={i} className="bg-[#091b33] rounded-xl p-4 flex flex-col">
                  <h4 className="font-semibold text-base mb-1 text-white line-clamp-2 ">{blog.title}</h4>
                  <p className="text-xs text-white/70 line-clamp-2 mb-2">{blog.excerpt}</p>
                  <a href={blog.link} className="text-blue-400 text-right underline hover:underline text-xs font-medium mt-auto">Read more</a>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

'use client'
import Image from 'next/image'
import React from 'react'

const testimonials = [
  {
    name: 'Brad Jenkins III',
    text: 'Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface. The order processing was quick, and the delivery was right on time. The quality of the parts is top-notch. The staff is professional and responsive. I highly recommend this store to all car enthusiasts!',
  },
  {
    name: 'Dr. Jim Parker',
    text: 'Extremely pleased with my experience at this online auto parts store.',
  },
  {
    name: 'Raymond Rippin DVM',
    text: 'Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface.',
  },
  {
    name: 'Isabel D amore',
    text: 'Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface.',
  },
  {
    name: 'Virgil Shields',
    text: 'Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface. The order processing was quick, and the delivery was right on time. The quality of the parts is top-notch. The staff is professional and responsive. I highly recommend this store to all car enthusiasts!',
  },
  {
    name: 'Santiago Beer',
    text: 'Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface. The order processing was quick, and the delivery was right on time. The quality of the parts is top-notch. The staff is professional and responsive. I highly recommend this store to all car enthusiasts!',
  },
  {
    name: 'Nettie Oberbrunner',
    text: 'Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface. The order processing was quick, and the delivery was right on time. The quality of the parts is top-notch.',
  },
  {
    name: 'Sandra Wehner',
    text: 'Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface. The order processing was quick, and the delivery was right on time. The quality of the parts is top-notch. The staff is professional and responsive. I highly recommend this store to all car enthusiasts!',
  },
  {
    name: 'Sandra Wehner',
    text: 'Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface. The order processing was quick, and the delivery was right on time. The quality of the parts is top-notch. The staff is professional and responsive. I highly recommend this store to all car enthusiasts!',
  },
  {
    name: 'Sandra Wehner',
    text: 'Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface. The order processing was quick, and the delivery was right on time. The quality of the parts is top-notch. The staff is professional and responsive. I highly recommend this store to all car enthusiasts!',
  },
]

const categories = [
  'This month',
  'Last month',
  'This year',
  'Last year',
]

export default function TestimonialsPage() {
  return (
    <div className="relative min-h-screen bg-[#0A1621] pb-32">
      {/* Banner */}
      <div className="w-full h-64 relative">
        <Image
          src="/Images/banner.png"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
       
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 px-8 py-6">
        <Image src="/Images/HouseLine.png" alt="Home" width={24} height={24} />
        <Image src="/Images/arrows (1).svg" alt="Arrow" width={16} height={16} />
        <span className="text-white/70 text-lg">Testimonials</span>
      </div>

      {/* Category Buttons */}
      <div className="flex gap-4 px-8 mb-8">
      <button
            className="px-6 py-2 rounded-full bg-black text-white/80 hover:bg-black transition"
          >
            All
          </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-6 py-2 rounded-full bg-[#1B2A3A] text-white/80 hover:bg-black transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="relative z-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="rounded-md border border-blue-400 bg-[#12263A] p-0 flex flex-col shadow-lg w-full max-w-[370px] mx-auto"
            >
              <Image
                src={`/Testimonials/title${i === 0 ? '' : '-' + i}.png`}
                alt={t.name}
                width={320}
                height={80}
                className=" mb-2 mt-4 pl-6 rounded-t-xl"
                priority={i < 3}
              />
              <div className="px-6 pb-6 pt-0">
                <p className="text-white/80 text-base leading-relaxed">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-12 z-20 relative">
        <button className="bg-[#1B6CF6] text-white px-10 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#1558b0] transition">
          View more
        </button>
      </div>

      {/* Blue Gradient Shade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-64 z-0"
        style={{
          background: 'linear-gradient(0deg, #0A1621 0%, rgba(10,22,33,0.0) 100%)'
        }}
      />
    </div>
  )
}





// import Image from 'next/image';

// const MAKES = [
//   "Acura", "Audi", "BMW", "Buick",
//   "Cadillac", "Chevrolet", "Chrysler", "Dodge",
//   "Ford", "GMC", "Honda", "Hyundai",
//   "Infiniti", "Isuzu", "Jaguar", "Jeep",
//   "Kia", "Land Rover", "Lexus", "Lincoln",
//   "Mazda", "Mercedes", "Mitsubishi", "Nissan",
//   "Pontiac", "Porsche", "Saab", "Saturn",
//   "Subaru", "Suzuki", "Toyota", "Volkswagen",
//   "Volvo"
// ];

// function MakeItem({ make }) {
//   return (
//     <a
//       href={`/makes/${make.toLowerCase().replace(' ', '-')}`}
//       className="
//         flex items-center
//         px-[8px] sm:px-[12px] md:px-[16px] xl:px-[24px]
//         py-[16px] md:py-[20px] xl:py-[24px]
//         border-b border-[rgba(30,74,143,1)]
//         hover:bg-[rgba(255,255,255,0.05)]
//       "
//     >
//       <Image
//         src="/placeholder-logo.png"
//         alt={`${make} logo`}
//         width={40}
//         height={40}
//         className="bg-[#1E2A44]"
//       />
//       <span className="ml-[12px] text-[16px] font-medium text-white leading-[1.3]">
//         {make}
//       </span>
//       <Image
//         src="/icons/chevron-right.svg"
//         alt=">"
//         width={12}
//         height={12}
//         className="ml-auto"
//       />
//     </a>
//   );
// }

// export default function AutoMakes() {
//   return (
//     <section className="w-full bg-[#0F1E35]">
//       <div className="
//         mx-auto max-w-[1440px]
//         px-[24px] md:px-[16px] sm:px-[12px]
//         pt-[80px] md:pt-[60px] sm:pt-[40px]
//         pb-[80px] md:pb-[40px] sm:pb-[24px]
//       ">
//         <h2 className="
//           text-white uppercase tracking-[2px] leading-[1.2]
//           text-[24px] md:text-[20px] sm:text-[18px]
//           mb-[32px] md:mb-[24px] sm:mb-[16px]
//         ">
//           AUTO PARTS FOR YOUR MAKE
//         </h2>
//         <div className="
//           grid gap-[24px] md:gap-[20px] sm:gap-[16px]
//           grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
//         ">
//           {MAKES.map(m => <MakeItem key={m} make={m} />)}
//         </div>
//       </div>
//     </section>
//   );
// }

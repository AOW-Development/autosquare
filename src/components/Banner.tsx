import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full h-[220px] md:h-[320px] relative bg-[#091B33] shadow-lg overflow-hidden flex items-center justify-center">
      <Image
        src="/Images/acc_banner.png"
        alt="Account Banner"
        fill
        className="object-cover object-center opacity-80"
        priority
      />
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/Images/brand-logo.svg"
          alt="Brand Logo"
          width={120}
          height={120}
          className="mx-auto"
          priority
        />
      </div> */}
    </div>
  );
}

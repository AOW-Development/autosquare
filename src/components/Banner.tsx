import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full h-[220px] md:h-[320px] relative bg-[#091B33] shadow-lg overflow-hidden flex items-center justify-center">
      <Image
        src="/account/account-banner.png"
        alt="Account Banner"
        fill
        className="object-cover object-center opacity-80"
        priority
      />

      {/* Title overlay */}
      <h1 className="absolute text-white text-3xl md:text-6xl font-normal z-10"    style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}>
        My account
      </h1>

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

// src/app/notFound/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A1A2F] text-white">
      <Image
        src="/404.png"
        alt="404 Not Found"
        width={996}
        height={456}
        style={{ maxWidth: "90vw", height: "auto" }}
        priority
      />
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold mb-2 uppercase">Page not found</h1>
        <Link href="/" className="text-sky-400 hover:underline text-lg">
          Go Home
        </Link>
      </div>
    </div>
  );
}

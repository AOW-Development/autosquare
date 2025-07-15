export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#091b33] w-full">
      <div className="relative flex items-center justify-center mb-6">
        <span className="sr-only">Loading...</span>
        {/* <div className="w-16 h-16 border-4 border-[#00A3FF] border-t-transparent rounded-full animate-spin"></div> */}
        <div className="absolute w-8 h-8 border-2 border-[#1558b0] border-t-transparent rounded-full animate-spin-slow"></div>
      </div>
      <div
        className="text-white text-lg font-audiowide tracking-widest"
        style={{
          fontFamily: "Audiowide, sans-serif",
          letterSpacing: "0.1em",
        }}
      >
        Loading...
      </div>
    </div>
  );
}

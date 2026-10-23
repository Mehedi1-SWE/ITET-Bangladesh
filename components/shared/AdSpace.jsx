import Link from "next/link";

export default function AdSpace({ ratio = "3:4", className = "" }) {
  return (
    <div className={`relative flex h-full min-h-[360px] flex-col items-center justify-center overflow-hidden border border-[#d7d0c2] bg-[#f3efe6] p-7 text-center ${className}`}>
      <div className="absolute inset-3 border border-dashed border-[#c9b58e]" />
      <div className="relative z-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8d6c32]">Advertisement</p>
        <h3 className="mt-3 text-[24px] font-semibold leading-tight text-[#25211a]">AD SPACE</h3>
        <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7a7368]">{ratio} (Portrait)</p>
        <Link href="/contact" className="mt-6 inline-flex items-center gap-3 border border-[#8d6c32] bg-[#8d6c32] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#725623]">
          <span>Book this space</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}

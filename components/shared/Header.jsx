import Link from "next/link";
import Navbar from "@/components/shared/Navbar";

const logoUrl = "/images/logo/itet-logo.jpg";

export default function Header() {
  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto flex min-h-[94px] max-w-[1440px] items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-4">
          <img src={logoUrl} alt="ITET Logo" className="h-16 w-16 shrink-0 object-contain sm:h-[70px] sm:w-[70px]" />
          <div className="min-w-0">
            <p className="max-w-[720px] text-[13px] font-bold leading-[1.35] text-[#202020] sm:text-[16px] lg:text-[19px]">The Institution of Textile Engineers & Technologists (ITET), Bangladesh</p>
            <p className="mt-1 hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8d6c32] sm:block">Premier Community of Textile Professionals</p>
          </div>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8d6c32]">Contact Us</p>
            <a href="tel:+8801715771454" className="mt-1 block text-[13px] font-semibold text-[#292929]">+880 1715-771454</a>
            <a href="mailto:info@itetbd.net" className="block text-[12px] text-[#6b6b6b]">info@itetbd.net</a>
          </div>
          <Link href="/membership-overview" className="border border-[#8d6c32] bg-[#8d6c32] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#745725]">
            Become a Member
          </Link>
        </div>
      </div>

      <Navbar />
    </header>
  );
}

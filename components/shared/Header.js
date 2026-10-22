import Link from "next/link";
import Navbar from "@/components/shared/Navbar";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="bg-[#0f6b3f] text-white">
        <div className="mx-auto flex min-h-10 max-w-[1440px] flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6 lg:px-10">
          <p>House #6, Road #2, Sector #11, Uttara, Dhaka</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href="tel:+8801715771454">+880 1715-771454</a>
            <a href="mailto:info@itetbd.net">info@itetbd.net</a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex min-h-24 max-w-[1440px] items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0f6b3f] text-lg font-black text-white">ITET</div>
          <div>
            <p className="max-w-2xl text-sm font-bold uppercase leading-5 text-slate-900 sm:text-lg">The Institution of Textile Engineers & Technologists (ITET), Bangladesh</p>
            <p className="mt-1 text-xs font-medium text-slate-500">Premier Community of Textile Professionals</p>
          </div>
        </Link>

        <Link href="/membership-overview" className="hidden rounded-md bg-[#f2b705] px-5 py-3 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5 sm:inline-flex">
          Become a Member
        </Link>
      </div>

      <Navbar />
    </header>
  );
}

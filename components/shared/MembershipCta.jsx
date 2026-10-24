import Link from "next/link";

export default function MembershipCta() {
  return (
    <section className="w-full bg-[#f7f5ef] py-10 md:py-16">
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="relative overflow-hidden rounded-lg border border-orange-100/50 bg-white px-6 py-12 text-center shadow-[0_20px_50px_rgba(245,74,0,0.06),0_4px_16px_rgba(15,23,43,0.04)] sm:px-14 sm:py-16">
          <div className="pointer-events-none absolute -left-10 top-[-10px] z-0 h-44 w-44 select-none sm:-left-6 sm:top-0 sm:h-60 sm:w-60 md:-left-2 md:top-2 md:h-76 md:w-76" aria-hidden="true">
            <div className="absolute left-6 top-6 h-40 w-40 rounded-full bg-[#f54a00]/15 blur-3xl" />
            <svg viewBox="0 0 260 260" fill="none" className="h-full w-full"><defs><linearGradient id="sharedBrandLeftRingGrad" x1="0%" y1="70%" x2="90%" y2="10%"><stop offset="0%" stopColor="#c83800"/><stop offset="35%" stopColor="#f54a00"/><stop offset="70%" stopColor="#ff7839"/><stop offset="92%" stopColor="#ffab7a" stopOpacity=".8"/><stop offset="100%" stopColor="#ffd8c2" stopOpacity="0"/></linearGradient></defs><path d="M 2 110 C 10 170, 60 200, 110 180 C 160 160, 195 110, 215 65" stroke="url(#sharedBrandLeftRingGrad)" strokeWidth="36" strokeLinecap="round"/></svg>
          </div>
          <div className="pointer-events-none absolute -right-10 bottom-[-15px] z-0 h-48 w-48 select-none sm:-right-6 sm:bottom-0 sm:h-64 sm:w-64 md:-right-2 md:bottom-2 md:h-80 md:w-80" aria-hidden="true">
            <div className="absolute bottom-6 right-6 h-44 w-44 rounded-full bg-[#ff7839]/15 blur-3xl" />
            <svg viewBox="0 0 280 280" fill="none" className="h-full w-full"><defs><linearGradient id="sharedBrandRightRingGrad" x1="10%" y1="90%" x2="90%" y2="50%"><stop offset="0%" stopColor="#ffd8c2" stopOpacity="0"/><stop offset="15%" stopColor="#ffab7a" stopOpacity=".85"/><stop offset="40%" stopColor="#ff7839"/><stop offset="75%" stopColor="#f54a00"/><stop offset="100%" stopColor="#d33c00"/></linearGradient></defs><path d="M 30 220 C 55 125, 135 75, 215 80 C 245 82, 268 95, 280 115" stroke="url(#sharedBrandRightRingGrad)" strokeWidth="38" strokeLinecap="round"/></svg>
          </div>

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white px-2.5 py-1 shadow-xs sm:mb-5 md:px-3.5 md:py-1.5"><span className="h-2 w-2 animate-pulse rounded-full bg-primary"/><span className="text-[10px] font-semibold uppercase tracking-wider text-gray-700 md:text-xs">ITET Bangladesh • Premier Community</span></div>
            <h2 className="mb-3 text-balance font-manuale text-2xl font-semibold leading-tight tracking-tight text-gray-800 sm:text-4xl md:text-5xl">Empower Your Textile Career Today</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">Join the largest network of textile engineers &amp; technologists in Bangladesh. Access exclusive industry insights, professional development, and career networking.</p>
            <div className="mt-7 sm:mt-8"><Link className="group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-md bg-secondary px-7 py-3 text-xs font-semibold text-white transition-all duration-200 hover:bg-primary hover:brightness-105 active:scale-[0.98] sm:text-sm" href="/membership-overview"><span className="relative z-10">Become a Member</span><div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"/></Link></div>
          </div>
        </div>
      </div>
    </section>
  );
}

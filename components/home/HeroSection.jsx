import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050813] text-white">
      <img src="/images/home/hero-texture.jpg" alt="Textile Texture Background" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,8,19,0.95)_0%,rgba(5,8,19,0.86)_48%,rgba(5,8,19,0.58)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%] flex min-h-[560px] items-center py-16 sm:min-h-[620px] sm:py-20 lg:min-h-[660px] lg:py-24">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90 sm:text-xs">ITET Bangladesh • Premier Community</span>
          </div>

          <h1 className="max-w-4xl font-manuale text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Empower Your Textile Career Today
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8 lg:text-lg">
            Join the largest network of textile engineers &amp; technologists in Bangladesh. Access exclusive industry insights, professional development, and career networking.
          </p>

          <div className="mt-8 sm:mt-10">
            <Link href="/membership-overview" className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-primary px-7 py-3 text-xs font-semibold text-white shadow-lg transition-all duration-200 hover:brightness-105 active:scale-[0.98] sm:text-sm">
              <span className="relative z-10">Become a Member</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

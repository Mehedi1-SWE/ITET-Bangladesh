import Link from "next/link";
import WelcomeSection from "@/components/home/WelcomeSection";
import LeadershipMessages from "@/components/home/LeadershipMessages";
import PartnersSection from "@/components/home/PartnersSection";

const heroTexture = "/images/home/hero-texture.jpg";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#10100f] text-white">
        <div className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("${heroTexture}")` }} />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(12,12,11,0.96)_0%,rgba(12,12,11,0.83)_48%,rgba(12,12,11,0.48)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/35 to-transparent" />

        <div className="mx-auto flex min-h-[610px] max-w-[1440px] items-center px-4 py-20 sm:min-h-[660px] sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <div className="max-w-[860px]">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c4a05a]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d8bc82] sm:text-[12px]">ITET Bangladesh <span className="mx-1.5 text-white/35">•</span> Premier Community</p>
            </div>

            <h1 className="max-w-[830px] text-[44px] font-semibold leading-[1.03] tracking-[-0.035em] text-white sm:text-[58px] lg:text-[76px]">Empower Your Textile Career Today</h1>

            <p className="mt-7 max-w-[690px] text-[15px] leading-7 text-white/72 sm:text-[17px] sm:leading-8">Join the largest network of textile engineers & technologists in Bangladesh. Access exclusive industry insights, professional development, and career networking.</p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/membership-overview" className="group inline-flex min-h-12 items-center gap-5 border border-[#c4a05a] bg-[#c4a05a] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-[#17130d] transition-colors hover:bg-[#d4b16d]">
                <span>Become a Member</span>
                <span className="text-base transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 right-4 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:right-6 md:flex lg:right-10">
          <span>Scroll to explore</span>
          <span className="relative h-px w-20 overflow-hidden bg-white/20">
            <span className="absolute inset-y-0 left-0 w-1/3 bg-[#c4a05a]" />
          </span>
        </div>
      </section>

      <WelcomeSection />
      <LeadershipMessages />
      <PartnersSection />
    </>
  );
}

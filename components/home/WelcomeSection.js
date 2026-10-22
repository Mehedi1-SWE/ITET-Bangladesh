import AdSpace from "@/components/shared/AdSpace";

const architectureImage = "https://itetbd.net/_next/image?q=75&url=%2Fhero-building-bg.jpg&w=3840";

export default function WelcomeSection() {
  return (
    <section className="bg-[#f4f1ea] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)_300px] lg:gap-8 lg:px-10">
        <div className="relative min-h-[420px] overflow-hidden bg-[#d7d2c8] sm:min-h-[520px] lg:min-h-[610px]">
          <img src={architectureImage} alt="ITET Architecture" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-4 p-5 text-white sm:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">ITET Architecture</p>
            <span className="h-px w-14 bg-[#d1af6a]" />
          </div>
        </div>

        <div className="flex min-h-[420px] flex-col justify-center bg-white px-6 py-12 sm:px-9 sm:py-14 lg:min-h-[610px] lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#b69049]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8d6c32]">Welcome to ITET</p>
          </div>

          <h2 className="mt-7 max-w-[520px] text-[38px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#202020] sm:text-[48px] lg:text-[54px]">
            Uniting Textile Professionals.<span className="block text-[#8d6c32]">Advancing Industry.</span>
          </h2>

          <p className="mt-7 max-w-[500px] text-[15px] leading-7 text-[#66615a] sm:text-[16px]">
            ITET is the trusted platform for textile engineers to connect and contribute to sustainable success.
          </p>

          <div className="mt-10 grid gap-5 border-t border-black/10 pt-7 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8d6c32]">Professional Network</p>
              <p className="mt-2 text-[13px] leading-6 text-[#6c675f]">Connecting engineers, technologists, academia, and industry leaders.</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8d6c32]">Industry Impact</p>
              <p className="mt-2 text-[13px] leading-6 text-[#6c675f]">Supporting innovation, knowledge sharing, and sustainable textile growth.</p>
            </div>
          </div>
        </div>

        <AdSpace ratio="3:4" className="min-h-[420px] lg:min-h-[610px]" />
      </div>
    </section>
  );
}

export const metadata = {
  title: "History of ITET | ITET Bangladesh",
  description: "Discover the four-decade journey of The Institution of Textile Engineers & Technologists (ITET), Bangladesh.",
};

export default function HistoryOfITET() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-14 border-b border-gray-200/70 overflow-hidden bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">About ITET</span>
              <span className="text-gray-300">|</span>
              <span className="text-xs text-gray-500 font-medium">Established 1983</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold font-manuale tracking-tight text-gray-800 leading-tight">
              Legacy, Evolution <br className="hidden sm:inline" />
              <span className="text-primary font-semibold">&amp; History</span> of ITET
            </h1>

            <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
              Discover the four-decade journey of the Institution of Textile Engineers and Technologists — uniting engineers, driving industrial development, and shaping the future of Bangladesh&apos;s apparel sector.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="animate-pulse space-y-6">
            <div className="w-1/3 h-8 bg-gray-200 rounded" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-4/6" />
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-4/6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50/60 border-t border-gray-100" aria-label="ITET Timeline">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="md:flex md:items-start md:justify-between gap-8 mb-16 animate-pulse">
            <div className="w-1/2 h-10 bg-gray-200 rounded" />
            <div className="w-1/2 h-16 bg-gray-200 rounded" />
          </div>

          <div className="flex justify-center items-center py-12">
            <div className="w-10 h-10 border-4 border-primary rounded-full border-t-transparent animate-spin" />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16 border-t border-gray-200">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0Z" /><path d="M20 3v4M22 5h-4M4 17v2M5 18H3" /></svg>
              <span>Support &amp; Inquiries</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary tracking-tight">
              Have Questions? <span className="text-primary">Contact the Secretariat</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">Our administrative and membership desk is available to assist with your inquiries.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" />
        </div>
      </section>
    </div>
  );
}

import SupportInquiries from "@/components/shared/SupportInquiries";
import CouncilLoadingPanel from "@/components/shared/CouncilLoadingPanel";

export default function Committee() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-14 overflow-hidden bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">About ITET</span>
              <span className="text-gray-300">|</span>
              <span className="text-xs text-gray-500 font-medium">Council Committee</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold font-manuale tracking-tight text-gray-800 leading-tight">
              Warmest Congratulations to the Newly Elected ITET
              <span className="text-primary font-semibold"> 15<sup className="text-xl sm:text-2xl md:text-3xl font-bold">th</sup> Council Committee</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">Wishing you a term filled with visionary leadership and continued success</p>
          </div>
        </div>
      </section>

      <CouncilLoadingPanel type="committee" />
      <SupportInquiries />
    </div>
  );
}

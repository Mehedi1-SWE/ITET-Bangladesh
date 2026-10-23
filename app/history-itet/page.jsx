import AboutHero from "@/components/shared/AboutHero";
import SupportInquiries from "@/components/shared/SupportInquiries";

export const metadata = {
  title: "History & Heritage | ITET Bangladesh | ITET Bangladesh",
  description:
    "Discover the four-decade journey of the Institution of Textile Engineers and Technologists — uniting engineers, driving industrial development, and shaping the future of Bangladesh's apparel sector.",
};

function LoadError({ message }) {
  return (
    <div className="flex min-h-[160px] items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-10 text-center shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
      <div>
        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v5M12 16h.01" />
          </svg>
        </div>
        <p className="text-sm font-medium text-gray-600">{message}</p>
      </div>
    </div>
  );
}

export default function HistoryOfITET() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero
        meta="Established 1983"
        before="Legacy, Evolution"
        accent="& History"
        after="of ITET"
        description="Discover the four-decade journey of the Institution of Textile Engineers and Technologists — uniting engineers, driving industrial development, and shaping the future of Bangladesh's apparel sector."
      />

      <section className="bg-white py-12 md:py-16">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <LoadError message="Failed to load history text. Please try again later." />
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50/60 py-14 md:py-20">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <LoadError message="Failed to load timeline data. Please try again later." />
        </div>
      </section>

      <SupportInquiries />
    </div>
  );
}

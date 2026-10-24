import AboutHero from "@/components/shared/AboutHero";
import SupportInquiries from "@/components/shared/SupportInquiries";

export const metadata = {
  title: "History & Heritage | ITET Bangladesh | ITET Bangladesh",
  description: "Discover the four-decade journey of the Institution of Textile Engineers and Technologists.",
};

export default function HistoryOfITET() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero meta="Established 1983" before="Legacy, Evolution" accent="& History" after="of ITET" description="Discover the four-decade journey of the Institution of Textile Engineers and Technologists — uniting engineers, driving industrial development, and shaping the future of Bangladesh's apparel sector." />

      <section className="bg-white py-6 md:py-10">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="space-y-4">
            <div className="rounded-xl border border-red-100 bg-red-50/60 px-5 py-4 text-sm text-red-700">
              Failed to load history text. Please try again later.
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/60 px-5 py-4 text-sm text-red-700">
              Failed to load timeline data. Please try again later.
            </div>
          </div>
        </div>
      </section>

      <SupportInquiries />
    </div>
  );
}

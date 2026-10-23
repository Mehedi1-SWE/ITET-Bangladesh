import AboutHero from "@/components/shared/AboutHero";
import SupportInquiries from "@/components/shared/SupportInquiries";

export default function Constitution() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero
        meta="Governance & By-Laws"
        before="Governance, Charter"
        accent="& Constitution"
        after="of ITET"
        description="The foundational legal framework, democratic electoral processes, and institutional by-laws governing the Institution of Textile Engineers & Technologists."
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="animate-pulse space-y-8">
            <div className="w-1/3 h-8 bg-gray-200 rounded" />
            <div className="w-full h-24 bg-gray-100 rounded" />
            <div className="h-40 bg-gray-100 rounded-md" />
          </div>
        </div>
      </section>

      <SupportInquiries />
    </div>
  );
}

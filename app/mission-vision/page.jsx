import AboutHero from "@/components/shared/AboutHero";
import SupportInquiries from "@/components/shared/SupportInquiries";

export default function MissionVision() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero
        meta="Purpose & Goals"
        before="Strategic Vision"
        accent="& Core Mission"
        after="of ITET"
        description="Our strategic vision, institutional objectives, and steadfast commitment to advancing Bangladesh's textile engineering profession."
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="animate-pulse space-y-12">
            {[1, 2].map((item) => (
              <div key={item} className="space-y-6">
                <div className="w-1/3 h-8 bg-gray-200 rounded" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
                  {[1, 2].map((column) => (
                    <div key={column} className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-full" />
                      <div className="h-4 bg-gray-200 rounded w-5/6" />
                      <div className="h-4 bg-gray-200 rounded w-4/6" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SupportInquiries />
    </div>
  );
}

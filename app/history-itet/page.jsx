import AboutHero from "@/components/shared/AboutHero";
import SupportInquiries from "@/components/shared/SupportInquiries";

export const metadata = {
  title: "History & Heritage | ITET Bangladesh | ITET Bangladesh",
  description: "Discover the four-decade journey of the Institution of Textile Engineers and Technologists.",
};

const timeline = [
  ["1983", "Foundation", "ITET began its journey as a professional platform dedicated to textile engineers and technologists."],
  ["Growth", "Professional Community", "The institution expanded its network across industry, academia, research, and professional practice."],
  ["Evolution", "Industry Engagement", "ITET strengthened professional dialogue, industry collaboration, knowledge sharing, and member representation."],
  ["Today", "A Modern Professional Platform", "ITET continues to connect textile professionals while advancing welfare, learning, advocacy, and digital member services."],
];

export default function HistoryOfITET() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero meta="Established 1983" before="Legacy, Evolution" accent="& History" after="of ITET" description="Discover the four-decade journey of the Institution of Textile Engineers and Technologists — uniting engineers, driving industrial development, and shaping the future of Bangladesh's apparel sector." />

      <section className="bg-white py-12 md:py-16">
        <div className="mx-[5%] grid gap-8 md:mx-[5%] lg:mx-[5%] lg:grid-cols-2 xl:mx-[6%] 2xl:mx-[8%]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Our Heritage</span>
            <h2 className="mt-3 font-manuale text-3xl font-semibold text-secondary sm:text-4xl">Four decades of professional unity and service</h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-gray-600">
            <p>Since its establishment in 1983, ITET has served as a professional home for Bangladesh&apos;s textile engineers and technologists. The institution connects professionals from manufacturing, education, research, management, and related fields.</p>
            <p>Its continuing purpose is to strengthen professional identity, encourage knowledge exchange, support members, and contribute constructively to the development of the national textile and apparel sector.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50/60 py-14 md:py-20" aria-label="ITET Timeline">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Institutional Journey</span>
            <h2 className="mt-2 font-manuale text-3xl font-semibold text-secondary sm:text-4xl">Milestones in the evolution of ITET</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {timeline.map(([year,title,body], index) => <article key={year} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_7px_26px_rgba(15,23,42,0.04)]"><div className="mb-5 flex items-center justify-between"><span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-primary">{year}</span><span className="font-manuale text-4xl font-bold text-gray-100">0{index+1}</span></div><h3 className="text-lg font-semibold text-secondary">{title}</h3><p className="mt-3 text-sm leading-7 text-gray-600">{body}</p></article>)}
          </div>
        </div>
      </section>

      <SupportInquiries />
    </div>
  );
}

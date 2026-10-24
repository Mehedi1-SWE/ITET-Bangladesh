import AboutHero from "@/components/shared/AboutHero";
import SupportInquiries from "@/components/shared/SupportInquiries";

const goals = [
  ["Professional Unity", "Bring textile engineers and technologists together under a strong, inclusive professional platform."],
  ["Knowledge & Innovation", "Promote continuous learning, technical excellence, research, and industry-academia exchange."],
  ["Member Welfare", "Support professional growth, networking, welfare initiatives, and member-focused services."],
  ["National Contribution", "Contribute informed professional perspectives to the sustainable development of Bangladesh's textile sector."],
];

export const metadata = { title: "Mission & Vision | ITET Bangladesh | ITET Bangladesh" };

export default function MissionVision() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero meta="Purpose & Goals" before="Strategic Vision" accent="& Core Mission" after="of ITET" description="Our strategic vision, institutional objectives, and steadfast commitment to advancing Bangladesh's textile engineering profession." />

      <section className="bg-[#fbfaf7] py-12 sm:py-16">
        <div className="mx-[5%] grid gap-6 md:mx-[5%] lg:mx-[5%] lg:grid-cols-2 xl:mx-[6%] 2xl:mx-[8%]">
          <article className="rounded-3xl bg-secondary p-7 text-white shadow-xl sm:p-9"><span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-300">Our Vision</span><h2 className="mt-3 font-manuale text-3xl font-semibold sm:text-4xl">A respected, connected, future-ready textile engineering community</h2><p className="mt-5 text-sm leading-7 text-white/70">To strengthen the professional stature of textile engineers and technologists and help position Bangladesh's textile community for sustainable, innovative, and globally competitive growth.</p></article>
          <article className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9"><span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Our Mission</span><h2 className="mt-3 font-manuale text-3xl font-semibold text-secondary sm:text-4xl">Serve, unite, develop and represent the profession</h2><p className="mt-5 text-sm leading-7 text-gray-600">ITET works to create meaningful professional connections, improve access to knowledge and development opportunities, support members, encourage ethical practice, and strengthen collaboration among industry, academia, policymakers, and professionals.</p></article>
        </div>

        <div className="mx-[5%] mt-10 grid gap-5 md:mx-[5%] md:grid-cols-2 lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          {goals.map(([title,body], index) => <article key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"><div className="flex items-center gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-sm font-bold text-primary">0{index+1}</span><h3 className="text-lg font-semibold text-secondary">{title}</h3></div><p className="mt-4 text-sm leading-7 text-gray-600">{body}</p></article>)}
        </div>
      </section>

      <SupportInquiries />
    </div>
  );
}

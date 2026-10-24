import AboutHero from "@/components/shared/AboutHero";
import SupportInquiries from "@/components/shared/SupportInquiries";

const focus = [
  ["Member Assistance", "Support initiatives for members facing professional, medical, or personal hardship."],
  ["Emergency Welfare", "A structured platform for coordinating welfare responses and community support."],
  ["Long-term Sustainability", "Responsible stewardship of welfare resources with a focus on continuity and transparency."],
  ["Community Solidarity", "Strengthening a culture where textile professionals support one another beyond professional networking."],
];

export const metadata = { title: "ITET Welfare Trust | ITET Bangladesh" };

export default function WelfareTrust() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero meta="Welfare Trust & Leadership" before="Support, Welfare" accent="& Trust Board" after="of ITET" description="A pillar of wisdom, experience, and ethical leadership — the Board of Trustees of ITET ensures the institution stays true to its mission, fosters transparency, and promotes sustainable growth in the textile engineering community." />
      <section className="bg-[#fbfaf7] py-12 sm:py-16">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="grid gap-7 lg:grid-cols-[.9fr_1.1fr]">
            <div className="rounded-3xl bg-secondary p-7 text-white sm:p-9"><span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-300">Purpose of the Trust</span><h2 className="mt-3 font-manuale text-3xl font-semibold sm:text-4xl">Professional community with a welfare safety net</h2><p className="mt-5 text-sm leading-7 text-white/70">The Welfare Trust supports ITET's commitment to member wellbeing, responsible institutional support, and long-term community solidarity.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">{focus.map(([title,body], index) => <article key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><span className="text-xs font-bold text-primary">0{index+1}</span><h3 className="mt-2 text-base font-semibold text-secondary">{title}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{body}</p></article>)}</div>
          </div>
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"><h3 className="text-lg font-semibold text-secondary">Trustee directory</h3><p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-500">Trustee names and roles can be connected here when the official welfare-trust data source is available. The page no longer remains stuck on a loading skeleton.</p></div>
        </div>
      </section>
      <SupportInquiries />
    </div>
  );
}

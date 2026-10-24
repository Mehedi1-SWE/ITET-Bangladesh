import AboutHero from "@/components/shared/AboutHero";
import SupportInquiries from "@/components/shared/SupportInquiries";

const areas = [
  ["Institutional Governance", "Defines the organizational structure, leadership responsibilities, and institutional decision-making framework."],
  ["Membership Framework", "Establishes membership categories, rights, responsibilities, and professional standards."],
  ["Election & Representation", "Provides the framework for representative leadership and democratic institutional processes."],
  ["Meetings & Administration", "Guides council meetings, resolutions, records, administration, and accountability."],
  ["Financial Stewardship", "Supports transparent management of institutional resources, funds, and financial responsibilities."],
  ["Amendment & Continuity", "Provides a structured process for institutional improvement while preserving ITET's purpose and continuity."],
];

export const metadata = { title: "Constitution & By-Laws | ITET Bangladesh | ITET Bangladesh" };

export default function Constitution() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero meta="Governance & By-Laws" before="Governance, Charter" accent="& Constitution" after="of ITET" description="The foundational legal framework, democratic electoral processes, and institutional by-laws governing the Institution of Textile Engineers & Technologists." />

      <section className="bg-[#fbfaf7] py-12 sm:py-16">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="mx-auto max-w-3xl text-center"><span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Governance Framework</span><h2 className="mt-2 font-manuale text-3xl font-semibold text-secondary sm:text-4xl">Principles that guide the institution</h2><p className="mt-3 text-sm leading-7 text-gray-600">The constitution and by-laws provide the framework through which ITET is governed, represented, administered, and developed.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{areas.map(([title,body], index) => <article key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_7px_26px_rgba(15,23,42,0.04)]"><span className="text-xs font-bold text-primary">ARTICLE {String(index+1).padStart(2,"0")}</span><h3 className="mt-3 text-lg font-semibold text-secondary">{title}</h3><p className="mt-3 text-sm leading-7 text-gray-600">{body}</p></article>)}</div>
          <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50/60 p-5 text-sm leading-7 text-gray-700"><strong className="text-secondary">Official document note:</strong> This frontend presents the governance structure and page design. Any legally controlling constitutional text should be published from the latest approved ITET document.</div>
        </div>
      </section>

      <SupportInquiries />
    </div>
  );
}

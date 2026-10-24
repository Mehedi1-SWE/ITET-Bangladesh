import Link from "next/link";
import SupportInquiries from "@/components/shared/SupportInquiries";

const pillars = [
  ["Apex Representation", "Reclaim Unity and Collective Strength", "Bring all textile engineers under one purposeful institutional umbrella for national policy advocacy, professional representation, and industry leadership."],
  ["Community Safety Net", "Support Each Other — In Crisis and Beyond", "A reformed ITET stands by members during career transitions, medical emergencies, and personal hardship with a trusted welfare safety net."],
  ["Knowledge & Innovation", "Shape the Future Through Skill & Strategy", "Access specialized technical masterclasses, CPD certifications, and strategic roundtables covering automation, sustainability, and global competitiveness."],
  ["Digital Ecosystem", "Professional Recognition & Verified Presence", "Maintain a verified engineer profile, connect with industry executives, explore vacancies, and access sector research."],
  ["Permanent Assets", "Welfare Trust & Permanent Uttara HQ", "Membership strengthens the Welfare Trust Fund and supports ITET's long-term institutional assets and permanent headquarters."],
  ["Government Policy", "Textile Cadre & Civil Service Advocacy", "ITET advocates for stronger representation and professional dignity for textile engineers in public service and national policy."],
  ["Worldwide Network", "International Wing & Expatriate Exchange", "Connect Bangladeshi textile engineers across North America, Europe, and Asia to exchange expertise and advance local industry and education."],
];

export const metadata = { title: "Membership Benefits & Privileges | ITET Bangladesh" };

export default function MemberBenefitsPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-gray-200/70 bg-gradient-to-b from-amber-500/[0.05] via-white to-white py-12 sm:py-16">
        <div className="mx-[5%] text-center md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-700 shadow-sm"><span className="h-2 w-2 rounded-full bg-primary"/>Membership <span className="text-gray-300">|</span><span className="font-medium normal-case text-gray-500">Privileges & Welfare</span></div>
          <h1 className="mx-auto mt-4 max-w-4xl font-manuale text-3xl font-semibold leading-tight text-secondary sm:text-5xl">Membership Benefits <span className="text-primary">& Exclusive Privileges</span></h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">Discover the professional advantages, welfare safety nets, national policy advocacy, and career acceleration programs available to registered ITET members.</p>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-12 sm:py-16">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="grid gap-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:grid-cols-[1.1fr_.9fr] lg:p-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Professional Manifesto</span>
              <h2 className="mt-3 font-manuale text-3xl font-semibold leading-tight text-secondary sm:text-4xl">Why You Should Become a Member of ITET</h2>
              <p className="mt-5 text-sm leading-7 text-gray-600">Textile and apparel is the lifeline of our nation’s economy. ITET exists to unite textile engineers across Bangladesh and abroad, strengthen professional representation, and build the institutional platform required to shape the future of the sector.</p>
              <div className="mt-6 flex flex-wrap gap-3"><Link href="/membership-overview" className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d94100]">Apply For Membership</Link><Link href="/membership-login" className="rounded-lg border border-gray-200 px-5 py-3 text-sm font-semibold text-secondary transition hover:border-primary hover:text-primary">Member Sign In</Link></div>
            </div>
            <div className="rounded-2xl bg-secondary p-6 text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-300">Current Reality</span>
              <h3 className="mt-2 text-xl font-semibold">The Challenges We Are Resolving</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/75">
                <li>• Policy decisions without enough direct textile engineering leadership</li>
                <li>• Underdeveloped industry-academia collaboration</li>
                <li>• Lack of a structured welfare and emergency safety net</li>
                <li>• Limited global bilateral recognition for Bangladeshi textile engineers</li>
              </ul>
            </div>
          </div>

          <div className="mb-8 mt-14 text-center"><span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Core Privileges</span><h2 className="mt-2 font-manuale text-3xl font-semibold text-secondary sm:text-4xl">7 Pillars of ITET Membership</h2></div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map(([label,title,body], index) => <article key={label} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_7px_26px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-wider text-primary">{label}</span><span className="font-manuale text-3xl font-bold text-gray-200 group-hover:text-orange-100">0{index+1}</span></div><h3 className="mt-4 text-lg font-semibold text-secondary">{title}</h3><p className="mt-3 text-sm leading-7 text-gray-600">{body}</p></article>)}
          </div>
        </div>
      </section>
      <SupportInquiries />
    </div>
  );
}

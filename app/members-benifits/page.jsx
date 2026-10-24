import Link from "next/link";
import SupportInquiries from "@/components/shared/SupportInquiries";

const pillars = [
  ["Apex Representation", "Reclaim Unity and Collective Strength", "Bring all textile engineers under one purposeful institutional umbrella — not just for social gatherings, but for national policy advocacy, professional representation, and industry leadership."],
  ["Community Safety Net", "Support Each Other — In Crisis and Beyond", "A reformed ITET stands by you during career transitions, medical emergencies, and personal hardship. Beyond networking, this is a trusted, lifelong welfare safety net."],
  ["Knowledge & Innovation", "Shape the Future Through Skill & Strategy", "Gain access to specialized technical masterclasses, CPD certifications, and strategic roundtables covering 4IR automation, sustainable materials, and global market competitiveness."],
  ["Digital Ecosystem", "Professional Recognition & Verified Presence", "Maintain a verified engineer profile on the official ITET Member Portal. Connect directly with industry executives, explore high-value vacancies, and access sector research reports."],
  ["Permanent Assets", "Welfare Trust & Permanent Uttara HQ", "Your membership strengthens the ITET Welfare Trust Fund to support underprivileged members. Our prime land at Sector 18, Uttara is fully secured for the permanent ITET Tower."],
  ["Government Policy", "Textile Cadre & Civil Service Advocacy", "We are actively engaging the Ministry of Textiles and civil service authorities to establish a recognized Textile Cadre in public service — granting long-overdue professional dignity."],
  ["Worldwide Network", "International Wing & Expatriate Exchange", "Our dedicated International Wing connects Bangladeshi textile engineers across North America, Europe, and Asia — leveraging global expertise to advance local industry and education."],
];

export const metadata = { title: "Membership Benefits & Privileges | ITET Bangladesh" };

export default function MemberBenefitsPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-gray-200/70 bg-gradient-to-b from-amber-500/[0.05] via-white to-white py-12 sm:py-16">
        <div className="mx-[5%] text-center md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-700 shadow-sm"><span className="h-2 w-2 rounded-full bg-primary"/>Membership <span className="text-gray-300">|</span><span className="font-medium normal-case text-gray-500">Privileges &amp; Welfare</span></div>
          <h1 className="mx-auto mt-4 max-w-4xl font-manuale text-3xl font-semibold leading-tight text-secondary sm:text-5xl">Membership Benefits <span className="text-primary">&amp; Exclusive Privileges</span></h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">Discover the professional advantages, welfare safety nets, national policy advocacy, and career acceleration programs available to registered ITET members.</p>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-12 sm:py-16">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="mx-auto max-w-6xl rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.05)] sm:p-9">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Professional Manifesto</span>
            <h2 className="mt-3 max-w-4xl font-manuale text-3xl font-semibold leading-tight text-secondary sm:text-4xl">Why You Should Become a Member of ITET — A Call to Reclaim Our Platform</h2>
            <div className="mt-7 grid gap-7 lg:grid-cols-[1.1fr_.9fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Reclaim Your Professional Platform</span>
                <h3 className="mt-2 text-xl font-semibold text-secondary">Dear Respected Textile Engineer,</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">Assalamu Alaikum &amp; Warm Greetings.</p>
                <p className="mt-3 text-sm leading-7 text-gray-600">Textile and apparel is the lifeline of our nation’s economy. Yet, despite our immense contribution to this sector, our professional community has often lacked the united voice, strategic platform, and institutional strength needed to shape our future. It is time to change that — and ITET is your platform to make it happen.</p>
                <p className="mt-3 text-sm leading-7 text-gray-600">The Institution of Textile Engineers and Technologists (ITET) was founded to unite all textile engineers across Bangladesh and abroad — serving as the voice, strength, and driving engine behind national industrial progress.</p>
                <div className="mt-5 rounded-xl border border-orange-100 bg-orange-50/70 p-4 text-sm font-semibold leading-6 text-primary">✦ It’s Time to Change That. ITET is your unified institutional platform to lead national progress.</div>
              </div>

              <div className="rounded-2xl bg-secondary p-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-300">Current Reality</span>
                <h3 className="mt-2 text-xl font-semibold">The Challenges We Are Resolving</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">For decades, individual excellence has carried Bangladesh&apos;s textile dominance, but an institutional vacuum left structural barriers unresolved:</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-white/75">
                  <li>• Policy decisions shaped without direct textile engineering leadership</li>
                  <li>• Underdeveloped industry-academia collaboration and curriculum alignment</li>
                  <li>• Absence of a structured welfare and emergency crisis safety net</li>
                  <li>• Limited global bilateral recognition for Bangladeshi textile engineers</li>
                </ul>
                <p className="mt-5 rounded-lg border border-white/10 bg-white/[0.05] p-3 text-xs font-semibold leading-5 text-white/80">Resolution: Unified collective bargaining and active Cadre advocacy.</p>
              </div>
            </div>

            <div className="mt-9 grid gap-6 border-t border-gray-100 pt-8 lg:grid-cols-[1fr_.9fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Strategic Mission</span>
                <h3 className="mt-2 font-manuale text-2xl font-semibold text-secondary sm:text-3xl">Why ITET Matters Today</h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">Founded with a clear mandate, ITET serves as the singular representative body for Bangladesh&apos;s textile engineering community, bridging engineers, policymakers, academia, and global textile leaders.</p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-gray-600"><li>• ITET is your collective voice, your legal and welfare shield, and your future career launchpad.</li><li>• Together, we are building a progressive institution that positions textile engineers at the forefront of national policy and industrial innovation.</li></ul>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-gray-500">Officially registered apex engineering institution</p>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Collective Empowerment</span>
                <blockquote className="mt-3 font-manuale text-2xl font-semibold leading-snug text-secondary">“We can no longer afford to be sidelined in our own industry.”</blockquote>
                <p className="mt-4 text-sm leading-7 text-gray-600">Your active membership powers this structural transformation. • Let’s not stay silent ✦ Let’s not stay sidelined ✦ Let’s rise — together.</p>
                <div className="mt-5 flex flex-wrap gap-3"><Link href="/membership-overview" className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d94100]">Apply For Membership</Link><Link href="/membership-login" className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-secondary transition hover:border-primary hover:text-primary">Member Sign In</Link></div>
              </div>
            </div>
          </div>

          <div className="mb-8 mt-14 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Core Privileges</span>
            <h2 className="mt-2 font-manuale text-3xl font-semibold text-secondary sm:text-4xl">7 Pillars of ITET Membership</h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-gray-600">Every membership contributes directly to the advancement, welfare, and institutional stature of Bangladesh&apos;s textile engineering fraternity.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map(([label,title,body], index) => (
              <article key={label} className="group flex min-h-[270px] flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_7px_26px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{label}</span>
                <h3 className="mt-4 text-lg font-semibold text-secondary">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">{body}</p>
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-xs"><span className="font-semibold text-gray-400">Pillar {String(index+1).padStart(2,"0")}</span><span className="font-semibold text-primary">Learn More</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-12 sm:py-16">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="rounded-3xl bg-secondary px-6 py-10 text-center text-white shadow-xl sm:px-10 sm:py-12">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-300">Get Started Today</span>
            <h2 className="mx-auto mt-3 max-w-3xl font-manuale text-3xl font-semibold sm:text-4xl">Ready to join Bangladesh&apos;s apex textile body?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/65">Apply online in minutes, upload your credentials, and become a verified member of the ITET community.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/membership-overview" className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d94100]">Apply for Membership</Link>
              <Link href="/membership-login" className="rounded-lg border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Existing Member Login</Link>
            </div>
          </div>
        </div>
      </section>
      <SupportInquiries />
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-[linear-gradient(120deg,#082d20_0%,#0f6b3f_65%,#188653_100%)] text-white">
        <div className="mx-auto grid min-h-[560px] max-w-[1440px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-10">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">ITET Bangladesh • Premier Community</p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Empower Your Textile Career Today</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">Join the largest network of textile engineers and technologists in Bangladesh. Access industry insights, professional development, and career networking.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/membership-overview" className="rounded-md bg-[#f2b705] px-6 py-3.5 text-sm font-bold text-slate-950">Become a Member</Link>
              <Link href="/events" className="rounded-md border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white">Explore Events</Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f2d86b]">Our Portal</p>
            <h2 className="mt-3 text-2xl font-bold">Connect with the ITET community</h2>
            <p className="mt-3 text-sm leading-6 text-white/75">Member services and advertiser tools will be integrated with the full backend in the upcoming milestones.</p>
            <div className="mt-6 grid gap-3">
              <Link href="/members-portal" className="rounded-md bg-white px-5 py-3 text-center text-sm font-bold text-[#0f6b3f]">Members Portal</Link>
              <Link href="/advertiser-portal" className="rounded-md border border-white/30 px-5 py-3 text-center text-sm font-bold text-white">Advertiser Portal</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f6b3f]">Welcome to ITET</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">Uniting Textile Professionals. Advancing Industry.</h2>
          </div>
          <p className="text-base leading-8 text-slate-600">ITET is a trusted platform for textile engineers to connect, collaborate, develop professionally, and contribute to the sustainable success of Bangladesh's textile and apparel sector.</p>
        </div>
      </section>

      <section className="bg-[#f5f7f6]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Events & Conclaves", "Explore ITET programs, professional events, and industry gatherings.", "/events"],
              ["Latest Notices", "Stay informed with official notices, announcements, and attachments.", "/notice"],
              ["Textile Market Updates", "Track yarn, chemical, fabric, and accessories market information.", "/market-updates"],
            ].map(([title, text, href]) => (
              <Link key={title} href={href} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                <span className="mt-5 inline-block text-sm font-bold text-[#0f6b3f]">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

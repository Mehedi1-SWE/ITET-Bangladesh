import Link from "next/link";

const quickLinks = [
  ["History of ITET", "/history-itet"],
  ["ITET's Mission & Vision", "/mission-vision"],
  ["Constitution", "/constitution"],
  ["Committee Members", "/committee"],
  ["Welfare Trust", "/welfareTrust"],
  ["Photo Gallery", "/gallery"],
];

const membershipLinks = [
  ["Membership Overview", "/membership-overview"],
  ["Member Benefits", "/members-benifits"],
  ["Directory & Update Info", "/membership-login"],
  ["Contact Us", "/contact"],
];

function Arrow() {
  return <svg viewBox="0 0 320 512" className="text-[10px] text-primary/70 group-hover:text-primary group-hover:translate-x-0.5 transition-all w-2.5 h-3.5" fill="currentColor"><path d="M285.476 272.971 91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>;
}

function FooterTitle({ children }) {
  return <h3 className="font-semibold text-base text-white mb-5 pb-2.5 relative inline-block">{children}<span className="absolute left-0 bottom-0 w-8 h-[2px] bg-gradient-to-r from-primary to-amber-500 rounded-full"/></h3>;
}

function Social({ label, href, children }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-8 h-8 rounded-md bg-white/10 border border-white/15 flex items-center justify-center text-white transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm">{children}</a>;
}

export default function Footer() {
  return (
    <footer className="relative bg-[#050813] text-white pt-16 pb-8 text-sm overflow-hidden selection:bg-primary selection:text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/images/home/hero-texture.jpg" alt="Textile Texture Background" className="absolute inset-0 h-full w-full object-cover object-center opacity-25 mix-blend-screen scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d1a]/90 via-[#050813]/85 to-[#02040a]/95 backdrop-blur-[1px]" />
      </div>

      <div aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[25%] font-black text-[13vw] tracking-[0.06em] text-transparent select-none pointer-events-none leading-none z-0 uppercase whitespace-nowrap text-center blur-[1px]" style={{ WebkitTextStroke: "2px rgba(255,255,255,.09)", textShadow: "0 0 60px rgba(255,255,255,.03)" }}>ITET</div>
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f54a00]/70 to-transparent z-10" />
      <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-[#f54a00]/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 -right-28 w-96 h-96 rounded-full bg-[#3b82f6]/10 blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-20 left-1/3 w-64 h-64 rounded-full bg-[#B07210]/15 blur-3xl pointer-events-none z-0" />

      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10 mb-14">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link className="inline-block group" href="/">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="p-1.5 bg-white rounded-md shadow-lg group-hover:scale-105 transition-all duration-300 ring-1 ring-white/20 shrink-0">
                    <img src="/images/logo/itet-logo.jpg" alt="ITET Logo" width="50" height="50" className="rounded-sm object-contain" />
                  </div>
                  <h2 className="font-semibold text-base md:text-[17px] leading-snug tracking-tight text-white group-hover:text-primary-light transition-colors">The Institution of Textile Engineers <br />&amp; Technologists (ITET), Bangladesh</h2>
                </div>
              </Link>
              <p className="text-gray-300/85 text-sm leading-relaxed mb-6 pr-2">Empowering textile engineering professionals through innovation, education, and collaboration. Join us in shaping the future of textile technology in Bangladesh.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-5 lg:max-w-xs">
              <Link className="group flex items-center justify-between p-2.5 rounded-md bg-white/[0.05] border border-white/10 hover:border-white/20 hover:bg-white/[0.09] transition-all duration-300 backdrop-blur-sm" href="/member-portal">
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary animate-pulse"/><span className="text-xs font-semibold text-white group-hover:text-primary-light transition-colors">Members Portal</span></div><span className="text-primary">→</span>
              </Link>
              <Link className="group flex items-center justify-between p-2.5 rounded-md bg-white/[0.05] border border-white/10 hover:border-white/20 hover:bg-white/[0.09] transition-all duration-300 backdrop-blur-sm" href="/client-portal">
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-sky-400"/><span className="text-xs font-medium text-gray-200 group-hover:text-white transition-colors">Advertiser Portal</span></div><span className="text-gray-400">→</span>
              </Link>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 mt-5">Connect With Us</p>
              <div className="flex items-center gap-2.5 flex-wrap">
                <Social label="Facebook" href="https://www.facebook.com/groups/itetbd/?ref=share&mibextid=KtfwRi"><span className="font-bold text-xs">f</span></Social>
                <Social label="LinkedIn" href="https://www.linkedin.com/in"><span className="font-bold text-xs">in</span></Social>
                <Social label="Instagram" href="https://www.instagram.com"><span className="font-bold text-xs">◎</span></Social>
                <Social label="Twitter" href="https://twitter.com"><span className="font-bold text-xs">X</span></Social>
                <Social label="YouTube" href="https://youtube.com"><span className="font-bold text-xs">▶</span></Social>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterTitle>Quick Links</FooterTitle>
            <ul className="space-y-2.5">
              {quickLinks.map(([label, href]) => <li key={href}><Link className="text-gray-300/80 hover:text-primary hover:translate-x-1.5 transition-all duration-200 flex items-center gap-2 text-sm group py-0.5" href={href}><Arrow/><span>{label}</span></Link></li>)}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <FooterTitle>Membership</FooterTitle>
            <ul className="space-y-2.5">
              {membershipLinks.map(([label, href]) => <li key={href}><Link className="text-gray-300/80 hover:text-primary hover:translate-x-1.5 transition-all duration-200 flex items-center gap-2 text-sm group py-0.5" href={href}><Arrow/><span>{label}</span></Link></li>)}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <FooterTitle>Contact &amp; Support</FooterTitle>
            <div className="rounded-md bg-white/[0.02] p-4 lg:p-5 backdrop-blur-md hover:border-primary/30 transition-all duration-300 space-y-4 shadow-xl">
              <a target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group pb-3.5 border-b border-white/[0.08]" href="https://maps.google.com/?q=House+%236,+Road+%232,+Sector+%2311,+Uttara,+Dhaka">
                <div className="w-8 h-8 rounded-md text-primary border border-primary/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-all">⌖</div>
                <div><p className="text-[10px] text-gray-400 uppercase font-medium">Office Address</p><p className="text-xs text-gray-200 font-semibold leading-relaxed group-hover:text-primary-light transition-colors">House #6, Road #2, Sector #11, Uttara, Dhaka</p></div>
              </a>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="tel:+8801715771454" className="flex items-center gap-2.5 group"><div className="w-8 h-8 rounded-md text-primary border border-primary/30 flex items-center justify-center">☎</div><div className="min-w-0"><p className="text-[10px] text-gray-400 uppercase font-medium">Hotline</p><p className="text-xs text-gray-200 font-semibold truncate group-hover:text-primary">+880 1715-771454</p></div></a>
                <a href="mailto:info@itetbd.net" className="flex items-center gap-2.5 group"><div className="w-8 h-8 rounded-md text-primary border border-primary/30 flex items-center justify-center">✉</div><div className="min-w-0"><p className="text-[10px] text-gray-400 uppercase font-medium">Support</p><p className="text-xs text-gray-200 font-semibold truncate group-hover:text-primary">info@itetbd.net</p></div></a>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Department Inquiries</p>
                <a href="mailto:pressnpublication@itetbd.net" className="flex items-center justify-between p-2 rounded-md bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 transition-all group"><span className="text-xs text-gray-200 truncate"><span className="text-gray-400 font-medium">Press:</span> pressnpublication@itetbd.net</span><span>→</span></a>
                <a href="mailto:secretarygeneral@itetbd.net" className="flex items-center justify-between p-2 rounded-md bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 transition-all group"><span className="text-xs text-gray-200 truncate"><span className="text-gray-400 font-medium">Secretary:</span> secretarygeneral@itetbd.net</span><span>→</span></a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 my-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1.5 text-center md:text-left"><span>©</span><span>2026 The Institution of Textile Engineers &amp; Technologists (ITET), Bangladesh. All rights reserved.</span></div>
          <div className="flex items-center gap-1.5 shrink-0"><span className="text-gray-400">Designed &amp; Developed by</span><a target="_blank" rel="noopener noreferrer" className="hover:underline" href="https://360dsoul.com/">360d SOUL Ltd.</a><span>&amp;</span><a target="_blank" rel="noopener noreferrer" className="hover:underline" href="https://goinnovior.com/">Goinnovior Ltd.</a></div>
        </div>
      </div>
    </footer>
  );
}

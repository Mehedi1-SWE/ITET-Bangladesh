import Link from "next/link";

const logoUrl = "https://itetbd.net/_next/image?q=75&url=%2F_next%2Fstatic%2Fmedia%2Fitet-logo.18l-2n8two3ye.jpg&w=64";

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="ITET Logo" className="h-14 w-14 object-contain" />
            <p className="text-xl font-bold">ITET</p>
          </div>
          <p className="mt-4 max-w-[360px] text-sm leading-6 text-white/65">Empowering textile engineering professionals through innovation, education, and collaboration. Join us in shaping the future of textile technology in Bangladesh.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/member-portal" className="border border-white/20 bg-white px-3 py-2 text-xs font-semibold text-[#171717]">Members Portal</Link>
            <Link href="/client-portal" className="border border-white/25 px-3 py-2 text-xs font-semibold text-white">Advertiser Portal</Link>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-[#c6a45e]">Quick Links</h2>
          <div className="flex flex-col gap-3 text-sm text-white/65">
            <Link href="/history-itet">History of ITET</Link>
            <Link href="/mission-vision">ITET&apos;s Mission & Vision</Link>
            <Link href="/constitution">Constitution</Link>
            <Link href="/committee">Committee Members</Link>
            <Link href="/welfareTrust">Welfare Trust</Link>
            <Link href="/gallery">Photo Gallery</Link>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-[#c6a45e]">Membership</h2>
          <div className="flex flex-col gap-3 text-sm text-white/65">
            <Link href="/membership-overview">Membership Overview</Link>
            <Link href="/members-benifits">Member Benefits</Link>
            <Link href="/membership-login">Directory & Update Info</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-[#c6a45e]">Contact & Support</h2>
          <div className="space-y-4 text-sm leading-6 text-white/65">
            <p>House #6, Road #2, Sector #11, Uttara, Dhaka.</p>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">Hotline</p>
              <a href="tel:+8801715771454">+880 1715-771454</a>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">Support</p>
              <a href="mailto:info@itetbd.net">info@itetbd.net</a>
            </div>
            <div className="text-xs leading-5">
              <p>Press: <a href="mailto:pressnpublication@itetbd.net">pressnpublication@itetbd.net</a></p>
              <p>Secretary: <a href="mailto:secretarygeneral@itetbd.net">secretarygeneral@itetbd.net</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>2026 The Institution of Textile Engineers & Technologists (ITET), Bangladesh. All rights reserved.</p>
          <p>Next.js Full-Stack Implementation</p>
        </div>
      </div>
    </footer>
  );
}

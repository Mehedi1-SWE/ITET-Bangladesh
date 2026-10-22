import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b1f17] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0f6b3f] font-black">ITET</div>
          <p className="text-sm leading-6 text-white/70">Empowering textile engineering professionals through innovation, education, collaboration, and a strong professional network in Bangladesh.</p>
        </div>

        <div>
          <h2 className="mb-4 text-base font-bold">Quick Links</h2>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            <Link href="/history-itet">History of ITET</Link>
            <Link href="/mission-vision">Mission & Vision</Link>
            <Link href="/constitution">Constitution</Link>
            <Link href="/committee">Committee Members</Link>
            <Link href="/welfare-trust">Welfare Trust</Link>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-base font-bold">Membership</h2>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            <Link href="/membership-overview">Membership Overview</Link>
            <Link href="/member-benefits">Member Benefits</Link>
            <Link href="/members-portal">Members Portal</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-base font-bold">Contact & Support</h2>
          <div className="space-y-3 text-sm leading-6 text-white/70">
            <p>House #6, Road #2, Sector #11, Uttara, Dhaka.</p>
            <p><a href="tel:+8801715771454">+880 1715-771454</a></p>
            <p><a href="mailto:info@itetbd.net">info@itetbd.net</a></p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-4 py-5 text-xs text-white/55 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 The Institution of Textile Engineers & Technologists (ITET), Bangladesh. All rights reserved.</p>
          <p>Full-stack Next.js implementation</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

const aboutItems = [
  { label: "History of ITET", href: "/history-itet" },
  { label: "ITET's Mission & Vision", href: "/mission-vision" },
  { label: "Constitution", href: "/constitution" },
  { label: "Committee Members", href: "/committee" },
  { label: "Welfare Trust", href: "/welfareTrust" },
];

const membershipItems = [
  { label: "Membership Overview", href: "/membership-overview" },
  { label: "Member Benefits", href: "/members-benifits" },
  { label: "Directory & Update Info", href: "/membership-login" },
];

const mainItems = [
  { label: "Events", href: "/events" },
  { label: "Notice", href: "/notice" },
  { label: "Publication", href: "/publication" },
  { label: "Job Circular", href: "/job-circular" },
  { label: "Gallery", href: "/gallery" },
];

function ChevronDown() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <span className="relative block h-5 w-5">
      <span className={`absolute left-0 top-[3px] h-[1.5px] w-5 bg-current transition-all ${open ? "translate-y-[6px] rotate-45" : ""}`} />
      <span className={`absolute left-0 top-[9px] h-[1.5px] w-5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
      <span className={`absolute left-0 top-[15px] h-[1.5px] w-5 bg-current transition-all ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
    </span>
  );
}

function DesktopDropdown({ label, items }) {
  return (
    <div className="group relative">
      <button type="button" className="flex h-16 items-center gap-1.5 px-3 text-[14px] font-semibold text-[#272727] transition-colors hover:text-[#8d6c32]">
        <span>{label}</span>
        <ChevronDown />
      </button>
      <div className="invisible absolute left-0 top-full z-50 min-w-[245px] translate-y-2 border border-black/10 bg-white p-2 opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block border-b border-black/[0.06] px-4 py-3 text-[13px] font-medium text-[#343434] transition-colors last:border-b-0 hover:bg-[#f7f2e8] hover:text-[#8d6c32]">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileGroup({ label, items, value, onToggle, onNavigate }) {
  const active = value === label;

  return (
    <div className="border-b border-black/10">
      <button type="button" onClick={() => onToggle(active ? "" : label)} className="flex w-full items-center justify-between py-4 text-left text-[15px] font-semibold text-[#222222]">
        <span>{label}</span>
        <span className={`transition-transform ${active ? "rotate-180" : ""}`}><ChevronDown /></span>
      </button>
      {active && (
        <div className="pb-3 pl-3">
          {items.map((item) => (
            <Link key={item.href} href={item.href} onClick={onNavigate} className="block py-2.5 text-[14px] text-[#626262]">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState("");

  function closeMenu() {
    setMenuOpen(false);
    setMobileGroup("");
  }

  return (
    <>
      <nav className="border-y border-black/10 bg-white">
        <div className="mx-auto flex h-[66px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <div className="hidden h-full items-center xl:flex">
            <Link href="/" className="flex h-16 items-center px-3 text-[14px] font-semibold text-[#8d6c32]">Home</Link>
            <DesktopDropdown label="About ITET" items={aboutItems} />
            <DesktopDropdown label="Membership" items={membershipItems} />
            {mainItems.map((item) => (
              <Link key={item.href} href={item.href} className="flex h-16 items-center px-3 text-[14px] font-semibold text-[#272727] transition-colors hover:text-[#8d6c32]">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 xl:hidden">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#8d6c32]">ITET Bangladesh</span>
          </div>

          <button type="button" onClick={() => setMenuOpen(true)} className="flex h-10 items-center gap-2.5 border border-black/15 bg-white px-3.5 text-[13px] font-semibold text-[#222222] transition-colors hover:border-[#8d6c32] hover:text-[#8d6c32]" aria-label="Open menu" aria-expanded={menuOpen}>
            <MenuIcon open={false} />
            <span>Menu</span>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[100] transition ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!menuOpen}>
        <button type="button" onClick={closeMenu} className={`absolute inset-0 bg-black/45 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`} aria-label="Close menu overlay" />
        <aside className={`absolute right-0 top-0 h-full w-full max-w-[430px] overflow-y-auto bg-[#f8f6f1] shadow-2xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8d6c32]">ITET Bangladesh</p>
              <h2 className="mt-1 text-[22px] font-bold text-[#202020]">Menu</h2>
            </div>
            <button type="button" onClick={closeMenu} className="flex h-10 w-10 items-center justify-center border border-black/15 bg-white text-[#222222]" aria-label="Close menu">
              <MenuIcon open />
            </button>
          </div>

          <div className="px-6 py-3">
            <Link href="/" onClick={closeMenu} className="block border-b border-black/10 py-4 text-[15px] font-semibold text-[#222222]">Home <span className="float-right">→</span></Link>
            <MobileGroup label="About ITET" items={aboutItems} value={mobileGroup} onToggle={setMobileGroup} onNavigate={closeMenu} />
            <MobileGroup label="Membership" items={membershipItems} value={mobileGroup} onToggle={setMobileGroup} onNavigate={closeMenu} />
            {mainItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu} className="block border-b border-black/10 py-4 text-[15px] font-semibold text-[#222222]">
                {item.label} <span className="float-right">→</span>
              </Link>
            ))}
          </div>

          <div className="mx-6 mt-4 border border-[#c9b58e] bg-[#efe6d4] p-5 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#806630]">AD SPACE 1:1 (Square)</p>
            <Link href="/contact" onClick={closeMenu} className="mt-3 inline-flex border border-[#8d6c32] bg-[#8d6c32] px-4 py-2 text-[12px] font-bold text-white">Book this space</Link>
          </div>

          <div className="px-6 py-7">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#8d6c32]">Our Portal</h3>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link href="/member-portal" onClick={closeMenu} className="border border-[#222222] bg-[#222222] px-3 py-3 text-center text-[12px] font-semibold text-white">Members Portal</Link>
              <Link href="/client-portal" onClick={closeMenu} className="border border-[#222222] px-3 py-3 text-center text-[12px] font-semibold text-[#222222]">Advertiser Portal</Link>
            </div>

            <h3 className="mt-7 text-[12px] font-bold uppercase tracking-[0.16em] text-[#8d6c32]">Contact Us</h3>
            <div className="mt-3 space-y-2 text-[14px] text-[#494949]">
              <a href="tel:+8801715771454" className="block">+880 1715-771454</a>
              <a href="mailto:info@itetbd.net" className="block">info@itetbd.net</a>
            </div>

            <Link href="/member-portal/qna" onClick={closeMenu} className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-[#8d6c32]">
              Query & Answer <span>→</span>
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

const aboutItems = [
  ["History of ITET", "/history-itet"],
  ["ITET's Mission & Vision", "/mission-vision"],
  ["Constitution", "/constitution"],
  ["Committee Members", "/committee"],
  ["Welfare Trust", "/welfareTrust"],
];

const membershipItems = [
  ["Membership Overview", "/membership-overview"],
  ["Member Benefits", "/members-benifits"],
  ["Directory & Update Info", "/membership-login"],
];

function Chevron() {
  return <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 transition-transform duration-200 text-gray-400 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>;
}

function AdSquare() {
  return (
    <div className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-lg border border-[#1d355c]/60 bg-gradient-to-b from-[#0a1c3b] via-[#081734] to-[#051126] flex flex-col items-center justify-center p-4 text-center select-none">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="none">
        <path d="M -10,180 C 60,250 120,240 180,165 C 240,90 280,50 310,65 C 340,80 355,230 380,410" fill="none" stroke="rgba(148,185,235,.30)" strokeWidth="1.6"/>
        <path d="M -15,120 C 55,210 120,275 190,195 C 255,120 300,195 345,350 C 370,435 395,300 420,120" fill="none" stroke="rgba(148,185,235,.24)" strokeWidth="1.5"/>
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center max-w-[260px]">
        <div className="w-16 h-16 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-inner flex items-center justify-center text-white mb-3.5">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
        </div>
        <span className="text-[11.5px] font-bold tracking-[0.22em] text-[#9db3d4] uppercase leading-none">AD SPACE</span>
        <span className="text-5xl font-black text-white tracking-tight leading-none mt-2">1:1</span>
        <span className="text-xs text-[#8fa7c7] font-medium mt-1">(Square)</span>
        <Link className="mt-3.5 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-md transition-all hover:border-white/35" href="/contact">Book this space</Link>
      </div>
    </div>
  );
}

function MegaMenu({ label, items }) {
  return (
    <div className="group">
      <button type="button" className="px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-150 flex items-center gap-1.5 cursor-pointer text-gray-700 hover:text-primary hover:bg-gray-50">
        <span>{label}</span><Chevron />
      </button>
      <div className="hidden xl:block absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-out origin-top opacity-0 -translate-y-3 invisible pointer-events-none py-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible group-hover:pointer-events-auto group-hover:py-6 group-hover:max-h-[520px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-7">
              <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-800">Menu</span>
                <span className="text-xs text-gray-400 font-medium">Select an option</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {items.map(([text, href]) => (
                  <Link key={href} href={href} className="group/item flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-white hover:bg-orange-50/50 hover:border-orange-100 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-orange-50 text-primary flex items-center justify-center text-xs font-bold">•</div>
                      <span className="text-sm font-medium text-gray-700 group-hover/item:text-primary">{text}</span>
                    </div>
                    <span className="text-gray-300 group-hover/item:text-primary">→</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-span-5 flex justify-center items-center">
              <AdSquare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2">
        <Link className="px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-150 flex items-center gap-1 text-primary font-semibold" href="/">Home</Link>
        <MegaMenu label="About ITET" items={aboutItems} />
        <MegaMenu label="Membership" items={membershipItems} />
        <Link className="px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-150 flex items-center gap-1 text-gray-700 hover:text-primary hover:bg-gray-50" href="/events">Events</Link>
        <Link className="px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-150 flex items-center gap-1 text-gray-700 hover:text-primary hover:bg-gray-50" href="/notices">Notice</Link>
        <Link className="px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-150 flex items-center gap-1 text-gray-700 hover:text-primary hover:bg-gray-50" href="/publication">Publication</Link>
        <Link className="px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-150 flex items-center gap-1 text-gray-700 hover:text-primary hover:bg-gray-50" href="/job-circular">Job Circular</Link>
        <Link className="px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-150 flex items-center gap-1 text-gray-700 hover:text-primary hover:bg-gray-50" href="/gallery">Gallery</Link>
      </nav>

      <div className="hidden xl:flex items-center gap-3 ml-3">
        <Link className="bg-secondary hover:bg-primary text-white text-xs font-semibold px-4 py-2 rounded-md shadow-xs hover:shadow-sm transition-all duration-200 flex items-center gap-1.5 group" href="/member-portal">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/></svg>
          <span>Member Portal</span>
        </Link>
      </div>

      <div className="flex items-center gap-2 xl:hidden">
        <button type="button" onClick={() => setOpen(true)} className="p-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition-colors" aria-label="Toggle Navigation Menu">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>

      <div className={`xl:hidden fixed inset-0 z-[60] transition-opacity duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <button className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} aria-label="Close menu overlay" />
        <aside className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[70] transform transition-all duration-500 ease-out flex flex-col ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
              <img src="/images/logo/itet-logo.jpg" alt="ITET Logo" className="w-10 h-10 object-contain" />
              <span className="text-xs font-semibold leading-tight text-gray-900">ITET Bangladesh</span>
            </Link>
            <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-gray-100 text-gray-700" aria-label="Close menu">✕</button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3">
            <Link href="/" onClick={() => setOpen(false)} className="block py-3 text-sm font-semibold text-primary border-b border-gray-100">Home</Link>
            <p className="mt-4 mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">About ITET</p>
            {aboutItems.map(([text, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block py-2.5 text-sm text-gray-700 border-b border-gray-50">{text}</Link>)}
            <p className="mt-4 mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Membership</p>
            {membershipItems.map(([text, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block py-2.5 text-sm text-gray-700 border-b border-gray-50">{text}</Link>)}
            {[
              ["Events","/events"],["Notice","/notices"],["Publication","/publication"],["Job Circular","/job-circular"],["Gallery","/gallery"]
            ].map(([text,href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100">{text}</Link>)}

            <div className="mt-5"><AdSquare /></div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <Link href="/member-portal" className="bg-secondary text-white text-xs font-semibold text-center py-2.5 px-3 rounded-md">Members Portal</Link>
              <Link href="/client-portal" className="border border-gray-200 text-gray-700 text-xs font-semibold text-center py-2.5 px-3 rounded-md">Advertiser Portal</Link>
            </div>

            <div className="mt-5 space-y-2 text-xs text-gray-600">
              <a href="tel:+8801715771454" className="block">+880 1715-771454</a>
              <a href="mailto:info@itetbd.net" className="block">info@itetbd.net</a>
            </div>
          </div>

          <div className="px-4 pb-2">
            <Link href="/member-portal/qna" className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 px-4 rounded-lg text-xs text-center flex items-center justify-center gap-2 shadow-xs transition-colors">Query &amp; Answer</Link>
          </div>
        </aside>
      </div>
    </>
  );
}

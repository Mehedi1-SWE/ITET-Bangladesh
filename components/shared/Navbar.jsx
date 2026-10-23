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
  return <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>;
}

function Drop({ label, items }) {
  return (
    <div className="relative group">
      <button type="button" className="px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-150 flex items-center gap-1.5 cursor-pointer text-gray-700 hover:text-primary hover:bg-gray-50">
        <span>{label}</span><Chevron />
      </button>
      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        <div className="w-64 bg-white border border-gray-200 rounded-lg shadow-xl p-2">
          {items.map(([text, href]) => <Link key={href} href={href} className="block px-3 py-2.5 rounded-md text-sm text-gray-700 hover:text-primary hover:bg-gray-50">{text}</Link>)}
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
        <Link className="px-3.5 py-2 rounded-md text-sm font-semibold text-primary" href="/">Home</Link>
        <Drop label="About ITET" items={aboutItems} />
        <Drop label="Membership" items={membershipItems} />
        <Link className="px-3.5 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50" href="/events">Events</Link>
        <Link className="px-3.5 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50" href="/notices">Notice</Link>
        <Link className="px-3.5 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50" href="/publication">Publication</Link>
        <Link className="px-3.5 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50" href="/job-circular">Job Circular</Link>
        <Link className="px-3.5 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50" href="/gallery">Gallery</Link>
      </nav>

      <div className="hidden xl:flex items-center gap-3 ml-3">
        <Link className="bg-secondary hover:bg-primary text-white text-xs font-semibold px-4 py-2 rounded-md shadow-xs hover:shadow-sm transition-all duration-200 flex items-center gap-1.5" href="/member-portal">
          <span>Member Portal</span>
        </Link>
      </div>

      <div className="flex items-center gap-2 xl:hidden">
        <button type="button" onClick={() => setOpen(!open)} className="p-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition-colors" aria-label="Toggle Navigation Menu">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>

      {open && (
        <div className="xl:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[70] flex flex-col">
          <div className="p-4 border-b flex items-center justify-between">
            <span className="font-semibold">Menu</span>
            <button onClick={() => setOpen(false)} className="p-2">✕</button>
          </div>
          <div className="p-4 overflow-y-auto">
            <Link href="/" className="block py-3 border-b">Home</Link>
            {aboutItems.map(([text, href]) => <Link key={href} href={href} className="block py-3 border-b">{text}</Link>)}
            {membershipItems.map(([text, href]) => <Link key={href} href={href} className="block py-3 border-b">{text}</Link>)}
            <Link href="/events" className="block py-3 border-b">Events</Link>
            <Link href="/notices" className="block py-3 border-b">Notice</Link>
            <Link href="/publication" className="block py-3 border-b">Publication</Link>
            <Link href="/job-circular" className="block py-3 border-b">Job Circular</Link>
            <Link href="/gallery" className="block py-3 border-b">Gallery</Link>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About ITET", href: "/history-itet" },
  { label: "Membership", href: "/membership-overview" },
  { label: "Events", href: "/events" },
  { label: "Notice", href: "/notice" },
  { label: "Publication", href: "/publication" },
  { label: "Job Circular", href: "/job-circular" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-y border-black/10 bg-white">
      <div className="mx-auto flex min-h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="px-3 py-5 text-sm font-semibold text-slate-700 transition-colors hover:text-[#0f6b3f]">
              {item.label}
            </Link>
          ))}
        </div>

        <span className="text-sm font-semibold text-[#0f6b3f] lg:hidden">Menu</span>

        <button type="button" onClick={() => setOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center rounded-md border border-black/10 text-xl lg:hidden" aria-label="Toggle navigation" aria-expanded={open}>
          ☰
        </button>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/members-portal" className="rounded-md bg-[#0f6b3f] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#084c2d]">Members Portal</Link>
          <Link href="/advertiser-portal" className="rounded-md border border-[#0f6b3f] px-4 py-2.5 text-sm font-semibold text-[#0f6b3f] transition-colors hover:bg-[#eaf5ef]">Advertiser Portal</Link>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/10 px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-black/5 py-3 text-sm font-semibold text-slate-700">
                {item.label}
              </Link>
            ))}
            <div className="mt-4 grid gap-2">
              <Link href="/members-portal" onClick={() => setOpen(false)} className="rounded-md bg-[#0f6b3f] px-4 py-3 text-center text-sm font-semibold text-white">Members Portal</Link>
              <Link href="/advertiser-portal" onClick={() => setOpen(false)} className="rounded-md border border-[#0f6b3f] px-4 py-3 text-center text-sm font-semibold text-[#0f6b3f]">Advertiser Portal</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

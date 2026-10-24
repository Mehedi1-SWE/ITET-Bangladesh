"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const leafPanel = "/images/home/welcome-leaf.webp";

export default function WelcomePortalModal({ disabled = false }) {
  const [open, setOpen] = useState(true);
  const [remaining, setRemaining] = useState(3);
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    if (disabled) return undefined;

    const frame = requestAnimationFrame(() => setProgress(true));

    const interval = setInterval(() => {
      setRemaining((value) => Math.max(0, value - 1));
    }, 1000);

    const timeout = setTimeout(() => setOpen(false), 3000);

    function onKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(interval);
      clearTimeout(timeout);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [disabled]);

  if (disabled || !open) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/45 backdrop-blur-[5px] px-4">
      <div className="relative h-[426px] w-full max-w-[670px] overflow-hidden rounded-[6px] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
        <div className="relative z-10 flex h-full w-full flex-col px-[30px] pb-[28px] pt-[31px] sm:w-[420px]">
          <div className="flex items-center gap-3">
            <img src="/images/logo/itet-logo.jpg" alt="ITET Logo" className="h-[30px] w-[30px] object-contain" />
            <span className="text-[19px] font-semibold tracking-[-0.02em] text-[#111827]">ITET Bangladesh</span>
          </div>

          <div className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#f4f4f4] px-3 py-1">
            <span className="text-[10px]">✣</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#111827]">Official Portal</span>
          </div>

          <h2 className="mt-4 font-manuale text-[25px] font-semibold leading-none text-[#111827]">Welcome to ITET</h2>
          <p className="mt-3 max-w-[290px] text-[14px] leading-6 text-[#27324a]">The Institution of Textile Engineers &amp; Technologists (ITET), Bangladesh</p>

          <div className="mt-7 space-y-2.5">
            <Link href="/membership-overview" onClick={() => setOpen(false)} className="flex h-[42px] items-center justify-center gap-3 rounded-[3px] bg-[#0f172b] px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#17223d]">
              <span>Become A Member</span>
              <span className="text-base leading-none">→</span>
            </Link>

            <Link href="/client-portal" onClick={() => setOpen(false)} className="flex h-[42px] items-center justify-center rounded-[3px] border border-[#dfe3ea] bg-[#fafafa] px-4 text-[13px] font-semibold text-[#111827] transition-colors hover:bg-white">
              Become a Partner
            </Link>
          </div>

          <div className="mt-auto">
            <div className="flex items-center gap-1.5 text-[11px] text-[#8a94a6]">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              <span>Auto-closing in <strong className="font-semibold text-[#344054]">{remaining}s</strong></span>
            </div>
            <div className="mt-2 h-[4px] overflow-hidden rounded-full bg-[#f0f1f4]">
              <div className={"h-full bg-[#f54a00] transition-[width] duration-[3000ms] ease-linear " + (progress ? "w-full" : "w-0")} />
            </div>
          </div>
        </div>

        <img src={leafPanel} alt="" aria-hidden="true" className="absolute right-0 top-0 hidden h-full w-[250px] object-cover sm:block" />

        <button type="button" onClick={() => setOpen(false)} aria-label="Close welcome modal" className="absolute right-[18px] top-[18px] z-20 hidden h-8 w-8 rounded-full bg-transparent sm:block" />

        <button type="button" onClick={() => setOpen(false)} aria-label="Close welcome modal" className="absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-[#173527]/90 text-white sm:hidden">×</button>
      </div>
    </div>
  );
}

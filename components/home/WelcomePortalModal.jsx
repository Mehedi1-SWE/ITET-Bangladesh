"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5L12 3Z" />
      <path d="m19 15-.75 2.25L16 18l2.25.75L19 21l.75-2.25L22 18l-2.25-.75L19 15Z" />
      <path d="m5 2-.75 2.25L2 5l2.25.75L5 8l.75-2.25L8 5l-2.25-.75L5 2Z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export default function WelcomePortalModal({ disabled = false }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [remaining, setRemaining] = useState(6);
  const [progress, setProgress] = useState(100);

  const closeModal = useCallback(() => {
    setVisible(false);
    window.setTimeout(() => setMounted(false), 300);
  }, []);

  const navigateTo = useCallback(
    (path) => {
      closeModal();
      router.push(path);
    },
    [closeModal, router]
  );

  useEffect(() => {
    if (disabled) {
      setMounted(false);
      setVisible(false);
      return undefined;
    }

    const openTimer = window.setTimeout(() => {
      setRemaining(6);
      setProgress(100);
      setMounted(true);
      window.setTimeout(() => setVisible(true), 50);
    }, 1000);

    return () => window.clearTimeout(openTimer);
  }, [disabled]);

  useEffect(() => {
    if (disabled || !mounted || !visible) return undefined;

    const endTime = Date.now() + 6000;
    const interval = window.setInterval(() => {
      const timeLeft = endTime - Date.now();
      const seconds = Math.max(0, Math.ceil(timeLeft / 1000));
      const percentage = Math.max(0, (timeLeft / 6000) * 100);

      setRemaining(seconds);
      setProgress(percentage);

      if (timeLeft <= 0) {
        window.clearInterval(interval);
        closeModal();
      }
    }, 50);

    return () => window.clearInterval(interval);
  }, [closeModal, disabled, mounted, visible]);

  if (disabled || !mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ease-out sm:p-6 ${
        visible
          ? "pointer-events-auto bg-black/50 opacity-100 backdrop-blur-sm"
          : "pointer-events-none bg-black/0 opacity-0 backdrop-blur-none"
      }`}
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to ITET"
    >
      <div
        className={`relative flex min-h-[420px] w-full max-w-2xl flex-col overflow-hidden rounded-lg bg-white text-gray-900 transition-all duration-300 ease-out md:flex-row ${
          visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-4 top-4 z-40 cursor-pointer rounded-full bg-black/30 p-2 text-white/90 shadow-md backdrop-blur-md transition-all hover:bg-black/50 hover:text-white"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        <div className="relative z-20 flex w-full flex-col justify-between bg-white p-6 sm:p-8 sm:py-9 md:w-[58%]">
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white p-1 shadow-2xs ring-1 ring-gray-200/80">
                <img src="/images/logo/itet-logo.jpg" alt="ITET Logo" className="h-full w-full object-contain p-0.5" />
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-xl font-medium leading-tight text-gray-800">ITET Bangladesh</h3>
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="inline-flex items-center gap-1 rounded-full border border-neutral-100 bg-stone-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-secondary">
                <SparklesIcon />
                Official Portal
              </span>
              <h2 className="pt-1 font-manuale text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-[28px]">Welcome to ITET</h2>
              <p className="text-sm font-medium leading-relaxed text-gray-600 lg:text-md">The Institution of Textile Engineers &amp; Technologists (ITET), Bangladesh</p>
            </div>

            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={() => navigateTo("/membership-overview")}
                className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-primary hover:shadow-lg"
              >
                <span>Become A Member</span>
                <ArrowRightIcon />
              </button>

              <button
                type="button"
                onClick={() => navigateTo("/client-portal")}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded border border-gray-200 bg-gray-50 px-4 py-2.5 text-xs font-semibold text-gray-800 transition-all duration-200 hover:border-gray-300 hover:bg-gray-100 sm:text-sm"
              >
                <span>Become a Partner</span>
              </button>
            </div>
          </div>

          <div className="space-y-2 pt-5">
            <div className="flex items-center justify-between text-[11px] font-medium text-gray-400">
              <span className="flex items-center gap-1">
                <ClockIcon />
                <span>
                  Auto-closing in <strong className="font-semibold text-gray-700">{remaining}s</strong>
                </span>
              </span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary-dark transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="relative hidden min-h-[180px] w-full overflow-hidden bg-[#1a2f27] md:block md:min-h-full md:w-[42%]">
          <img src="/modal-botanical-art.jpg" alt="ITET Botanical Art" className="absolute inset-0 h-full w-full scale-105 object-cover object-center" />

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 md:block">
            <svg className="h-full w-full" viewBox="0 0 100 500" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <filter id="welcomeCutShadow1" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="-4" dy="0" stdDeviation="5" floodColor="#000000" floodOpacity="0.45" />
                </filter>
                <filter id="welcomeCutShadow2" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="-3" dy="0" stdDeviation="4" floodColor="#000000" floodOpacity="0.3" />
                </filter>
                <filter id="welcomeCutShadow3" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="-2" dy="0" stdDeviation="3" floodColor="#000000" floodOpacity="0.2" />
                </filter>
              </defs>
              <path d="M 0,0 L 25,0 C 75,130 5,230 65,340 C 95,410 40,470 20,500 L 0,500 Z" fill="#0f172a" opacity="0.25" filter="url(#welcomeCutShadow1)" />
              <path d="M 0,0 L 18,0 C 60,130 -5,230 50,340 C 80,410 28,470 10,500 L 0,500 Z" fill="#e2e8f0" opacity="0.9" filter="url(#welcomeCutShadow2)" />
              <path d="M 0,0 L 12,0 C 48,130 -12,230 38,340 C 68,410 18,470 4,500 L 0,500 Z" fill="#f8fafc" filter="url(#welcomeCutShadow3)" />
              <path d="M 0,0 L 6,0 C 38,130 -20,230 28,340 C 56,410 10,470 0,500 Z" fill="#ffffff" />
            </svg>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 md:hidden">
            <svg className="h-full w-full" viewBox="0 0 500 50" preserveAspectRatio="none" aria-hidden="true">
              <path d="M 0,0 L 500,0 L 500,10 C 350,45 150,5 0,35 Z" fill="#ffffff" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

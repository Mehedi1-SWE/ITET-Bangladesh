"use client";

import { useEffect, useState } from "react";
import AdSpace from "@/components/shared/AdSpace";

const leaders = [
  {
    role: "SECRETARY GENERAL, ITET'S MESSAGE",
    quote: '"Reform, Modernization & Global Recognition"',
    name: "Engr. A.S.M Hafizur Rahman Nixon",
    designation: "Secretary General, ITET",
    image: "/images/leadership/secretary-general.jpg",
    excerpt:
      "ITET aims to unite textile engineers, strengthen professional identity, modernize member services, and expand Bangladesh’s global textile engineering presence.",
  },
  {
    role: "PRESIDENT, ITET'S MESSAGE",
    quote: '"Connecting Textile Engineers, Building a Stronger Future"',
    name: "Engr. Md. Enayet Hossain",
    designation: "President, ITET",
    image: "/images/leadership/president.jpg",
    excerpt:
      "The ITET digital platform connects members, shares professional knowledge, supports careers, and strengthens the collective voice of Bangladesh’s textile engineers.",
  },
];

function ArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function LeadershipMessages() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % leaders.length);
    }, 8000);

    return () => window.clearInterval(interval);
  }, []);

  const leader = leaders[active];

  function previous() {
    setActive((current) => (current - 1 + leaders.length) % leaders.length);
  }

  function next() {
    setActive((current) => (current + 1) % leaders.length);
  }

  return (
    <section className="overflow-hidden bg-[#11110f] text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-8">
          <div className="grid min-h-[620px] lg:grid-cols-[0.88fr_1.12fr]">
            <div className="relative min-h-[500px] overflow-hidden bg-[#24231f] lg:min-h-[620px]">
              <img src={leader.image} alt={leader.name} className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
            </div>

            <div className="relative flex min-h-[620px] flex-col justify-center bg-[#f2eee5] px-6 py-12 text-[#26231e] sm:px-10 lg:px-12">
              <div className="absolute right-6 top-6 text-[72px] font-serif leading-none text-[#c9ae77]/25 sm:right-10 sm:top-8 sm:text-[96px]">“</div>

              <div className="relative z-10 max-w-[620px]">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8d6c32] sm:text-[11px]">{leader.role}</p>
                <h2 className="mt-5 max-w-[590px] text-[30px] font-medium leading-[1.16] tracking-[-0.03em] text-[#1f1d19] sm:text-[40px] lg:text-[43px]">{leader.quote}</h2>
                <p className="mt-7 max-w-[590px] text-[14px] leading-7 text-[#686157] sm:text-[15px] sm:leading-8">{leader.excerpt}</p>

                <div className="mt-9 flex flex-wrap items-end justify-between gap-6 border-t border-[#cfc6b7] pt-7">
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#24211d]">{leader.name}</h3>
                    <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.08em] text-[#8d6c32]">{leader.designation}</p>
                  </div>

                  <button type="button" className="group inline-flex items-center gap-3 border-b border-[#8d6c32] pb-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#5f4925]">
                    <span>Read</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 flex items-center gap-2 sm:bottom-8 sm:right-10">
                <button type="button" onClick={previous} className="flex h-11 w-11 items-center justify-center border border-[#b9ad9b] text-[#544d44] transition-colors hover:border-[#8d6c32] hover:text-[#8d6c32]" aria-label="Previous message">
                  <ArrowLeft />
                </button>
                <button type="button" onClick={next} className="flex h-11 w-11 items-center justify-center border border-[#b9ad9b] text-[#544d44] transition-colors hover:border-[#8d6c32] hover:text-[#8d6c32]" aria-label="Next message">
                  <ArrowRight />
                </button>
              </div>

              <div className="absolute bottom-7 left-6 flex gap-2 sm:bottom-9 sm:left-10 lg:left-12">
                {leaders.map((item, index) => (
                  <button key={item.name} type="button" onClick={() => setActive(index)} className={`h-[3px] transition-all ${index === active ? "w-10 bg-[#8d6c32]" : "w-5 bg-[#bdb4a7]"}`} aria-label={`Show ${item.designation} message`} />
                ))}
              </div>
            </div>
          </div>

          <AdSpace ratio="3:4" className="min-h-[430px] xl:min-h-[620px]" />
        </div>
      </div>
    </section>
  );
}

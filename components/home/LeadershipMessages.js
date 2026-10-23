"use client";

import { useEffect, useState } from "react";

const leaders = [
  {
    role: "SECRETARY GENERAL, ITET'S MESSAGE",
    quote: '"Reform, Modernization & Global Recognition"',
    name: "Engr. A.S.M Hafizur Rahman Nixon",
    designation: "Secretary General, ITET",
    image: "https://itetbd.net/_next/image?q=75&url=https%3A%2F%2Fres.cloudinary.com%2Fdov6k7xdk%2Fimage%2Fupload%2Fv1784604127%2Ft401koolwosautufl57y.jpg&w=3840",
    excerpt:
      "It is both an honor and a profound responsibility to serve as Secretary General of ITET. Since its establishment, ITET has been the professional home of Bangladesh’s textile engineers—a platform to unite our voices, strengthen our professional identity, and contribute meaningfully to the nation’s textile and apparel sector.",
    details:
      "His message emphasizes institutional reform, digital transformation, stronger member services, industry-academia collaboration, and a more visible international role for ITET. The focus is on building a modern, inclusive, transparent institution that supports textile engineers across industry, research, and academia.",
  },
  {
    role: "PRESIDENT, ITET'S MESSAGE",
    quote: '"Connecting Textile Engineers, Building a Stronger Future"',
    name: "Engr. Md. Enayet Hossain",
    designation: "President, ITET",
    image: "https://itetbd.net/_next/image?q=75&url=https%3A%2F%2Fres.cloudinary.com%2Fdov6k7xdk%2Fimage%2Fupload%2Fv1788451721%2Feuf8qnccsryjcjw2vdix.jpg&w=3840",
    excerpt:
      "Bismillahir Rahmanir Rahim Assalamu Alaikum. It is a proud moment to introduce the official website of the Institution of Textile Engineers & Technologists (ITET). This platform is designed to be the digital home of our members — connecting professionals, sharing knowledge, and strengthening our collective voice.",
    details:
      "His message presents the website as a central member platform for news, services, career resources, professional benefits, networking, emergency support, and member participation. It also highlights professionalism, ethics, innovation, sustainability, digitalization, and unity as priorities for the textile engineering community.",
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
  const [openMessage, setOpenMessage] = useState(null);

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
    <>
      <section className="overflow-hidden bg-[#11110f] text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid min-h-[620px] lg:grid-cols-[0.88fr_1.12fr]">
            <div className="relative min-h-[500px] overflow-hidden bg-[#24231f] lg:min-h-[620px]">
              <img src={leader.image} alt={leader.name} className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d3b06b]">ITET Leadership</p>
                <h3 className="mt-2 text-[24px] font-semibold leading-tight sm:text-[28px]">{leader.name}</h3>
                <p className="mt-1 text-[13px] text-white/65">{leader.designation}</p>
              </div>
            </div>

            <div className="relative flex min-h-[620px] flex-col justify-center bg-[#f2eee5] px-6 py-12 text-[#26231e] sm:px-10 lg:px-14 xl:px-16">
              <div className="absolute right-6 top-6 text-[72px] font-serif leading-none text-[#c9ae77]/25 sm:right-10 sm:top-8 sm:text-[96px]">“</div>

              <div className="relative z-10 max-w-[690px]">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8d6c32] sm:text-[11px]">{leader.role}</p>
                <h2 className="mt-5 max-w-[650px] text-[32px] font-medium leading-[1.16] tracking-[-0.03em] text-[#1f1d19] sm:text-[42px] lg:text-[46px]">{leader.quote}</h2>
                <p className="mt-7 max-w-[650px] text-[14px] leading-7 text-[#686157] sm:text-[15px] sm:leading-8">{leader.excerpt}</p>

                <div className="mt-9 flex flex-wrap items-end justify-between gap-6 border-t border-[#cfc6b7] pt-7">
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#24211d]">{leader.name}</h3>
                    <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.08em] text-[#8d6c32]">{leader.designation}</p>
                  </div>

                  <button type="button" onClick={() => setOpenMessage(leader)} className="group inline-flex items-center gap-3 border-b border-[#8d6c32] pb-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#5f4925]">
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

              <div className="absolute bottom-7 left-6 flex gap-2 sm:bottom-9 sm:left-10 lg:left-14 xl:left-16">
                {leaders.map((item, index) => (
                  <button key={item.name} type="button" onClick={() => setActive(index)} className={`h-[3px] transition-all ${index === active ? "w-10 bg-[#8d6c32]" : "w-5 bg-[#bdb4a7]"}`} aria-label={`Show ${item.designation} message`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {openMessage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/65 p-4" role="dialog" aria-modal="true" aria-label={openMessage.role}>
          <button type="button" onClick={() => setOpenMessage(null)} className="absolute inset-0 cursor-default" aria-label="Close message" />
          <div className="relative z-10 max-h-[88vh] w-full max-w-[760px] overflow-y-auto bg-[#f4f0e7] p-7 text-[#24211d] shadow-2xl sm:p-10">
            <button type="button" onClick={() => setOpenMessage(null)} className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-black/15 text-lg" aria-label="Close message">×</button>
            <p className="pr-12 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8d6c32]">{openMessage.role}</p>
            <h2 className="mt-4 pr-12 text-[30px] font-medium leading-tight sm:text-[38px]">{openMessage.quote}</h2>
            <p className="mt-6 text-[15px] leading-8 text-[#665f55]">{openMessage.excerpt}</p>
            <p className="mt-5 text-[15px] leading-8 text-[#665f55]">{openMessage.details}</p>
            <div className="mt-8 border-t border-black/10 pt-6">
              <h3 className="text-lg font-semibold">{openMessage.name}</h3>
              <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8d6c32]">{openMessage.designation}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

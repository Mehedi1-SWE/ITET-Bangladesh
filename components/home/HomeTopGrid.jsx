"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const leaders = [
  {
    role: "SECRETARY GENERAL, ITET'S MESSAGE",
    quote: '"Reform, Modernization & Global Recognition"',
    name: "Engr. A.S.M Hafizur Rahman Nixon",
    designation: "Secretary General, ITET",
    image: "/images/leadership/secretary-general.jpg",
    text: "It is both an honor and a profound responsibility to serve as Secretary General of ITET. Since its establishment, ITET has been the professional home of Bangladesh’s textile engineers.",
  },
  {
    role: "PRESIDENT, ITET'S MESSAGE",
    quote: '"Connecting Textile Engineers, Building a Stronger Future"',
    name: "Engr. Md. Enayet Hossain",
    designation: "President, ITET",
    image: "/images/leadership/president.jpg",
    text: "It is a proud moment to introduce the official website of ITET. This platform is designed to be the digital home of our members — connecting professionals and sharing knowledge.",
  },
];

const notices = [
  ["OCT", "20", "আইটিইটি বাংলাদেশের মহাসচিবের বিদেশে অবস্থানকালীন দায়িত্ব হস্তান্তর প্রসঙ্গে", "October 20, 2026", true],
  ["OCT", "19", "ITET Membership Renewal & Revised Fee Notice", "October 19, 2026", false],
  ["OCT", "19", "ITET Membership Announcement", "October 19, 2026", true],
  ["OCT", "17", "শোকবার্তা", "October 17, 2026", true],
  ["SEP", "14", "তিতাস গ্যাসকে আইটিইটির প্রস্তাবনা।", "September 14, 2026", true],
  ["AUG", "23", "বস্ত্র খাতের উন্নয়ন ও সংস্কারে বস্ত্র অধিদপ্তরের মহাপরিচালকের সাথে ITET-এর ১৫তম কাউন্সিলের ফলপ্রসূ বৈঠক", "August 23, 2026", true],
];

const partners = [
  "/images/partners/360d-soul.webp",
  "/images/partners/emmtex-solutions.webp",
  "/images/partners/knit-empir.webp",
  "/images/partners/texpro-worldno1.webp",
  "/images/partners/auko-tex.webp",
  "/images/partners/van-lin.webp",
];

function ImageIcon({ size = 28 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect width="18" height="18" x="3" y="3" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>;
}

function AdCard({ ratio, portrait = false, className = "" }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl shadow-lg border border-[#1d355c]/60 bg-gradient-to-b from-[#0a1c3b] via-[#081734] to-[#051126] flex items-center justify-center p-4 text-center select-none ${portrait ? "aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[220px] flex-col" : "aspect-[21/9] p-3 sm:p-4"} ${className}`}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={portrait ? "0 0 320 420" : "0 0 700 300"} preserveAspectRatio="none">
        <path d={portrait ? "M -10,170 C 40,240 85,240 140,165 C 185,100 215,48 238,55 C 265,65 278,240 295,430" : "M -20,130 C 100,240 220,240 350,130 C 450,40 520,30 580,45 C 640,60 670,220 720,280"} fill="none" stroke="rgba(148,185,235,.30)" strokeWidth="1.6" />
        <path d={portrait ? "M -15,130 C 35,220 85,270 145,190 C 205,110 240,210 270,360 C 290,440 310,320 335,130" : "M -30,80 C 80,180 200,250 340,160 C 460,70 540,160 620,260 C 660,310 690,240 730,120"} fill="none" stroke="rgba(148,185,235,.24)" strokeWidth="1.5" />
      </svg>
      {portrait ? (
        <div className="relative z-10 flex flex-col items-center justify-center max-w-[260px]">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-inner flex items-center justify-center text-white mb-3 sm:mb-3.5"><ImageIcon /></div>
          <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.22em] text-[#9db3d4] uppercase leading-none">AD SPACE</span>
          <span className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none mt-2">{ratio}</span>
          <span className="text-xs sm:text-[13px] text-[#8fa7c7] font-medium mt-1.5">(Portrait)</span>
          <Link className="mt-4 sm:mt-5 inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-md border border-white/20 text-white text-xs sm:text-[13px] font-medium shadow-md transition-all hover:border-white/35" href="/contact">Book this space</Link>
        </div>
      ) : (
        <div className="relative z-10 flex items-center justify-between w-full max-w-xl px-2 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-inner flex items-center justify-center text-white shrink-0"><ImageIcon size={22} /></div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.22em] text-[#9db3d4] uppercase leading-tight">AD SPACE</span>
              <div className="flex items-baseline gap-2 mt-0.5"><span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">{ratio}</span><span className="text-[11px] sm:text-xs text-[#8fa7c7] font-medium">(Landscape)</span></div>
            </div>
          </div>
          <Link className="inline-flex items-center px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-md transition-all hover:border-white/35" href="/contact">Book this space</Link>
        </div>
      )}
    </div>
  );
}

function LeadershipCard({ leader }) {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-xs bg-[#0B1426] text-white border border-slate-800/80">
      <div className="flex flex-row items-stretch h-full min-h-[120px]">
        <div className="w-[28%] sm:w-[29%] min-w-[95px] max-w-[140px] relative shrink-0 overflow-hidden rounded-l-xl">
          <img src={leader.image} alt={leader.name} className="absolute inset-0 h-full w-full object-cover object-top" />
        </div>
        <div className="flex-1 min-w-0 p-2.5 sm:p-3 flex flex-col justify-between relative">
          <div className="relative z-10 space-y-1">
            <div className="flex items-center gap-1.5"><span className="text-primary text-sm">❝</span><span className="text-[10px] sm:text-[11px] font-semibold text-white uppercase tracking-wider">{leader.role}</span></div>
            <p className="text-[10px] sm:text-[10.5px] font-medium italic line-clamp-1 text-primary">{leader.quote}</p>
            <p className="text-[10px] sm:text-[11px] text-[#CBD5E1] leading-relaxed line-clamp-2 font-normal">{leader.text}</p>
          </div>
          <div className="pt-1 relative z-10">
            <div className="border-t border-[#1E293B] mb-1" />
            <div className="flex items-center justify-between">
              <div className="min-w-0"><h4 className="text-[11px] sm:text-xs font-semibold text-white truncate">{leader.name}</h4><p className="text-[10px] sm:text-[11px] text-[#94A3B8] font-normal truncate">{leader.designation}</p></div>
              <div className="text-[10px] font-medium text-primary">Read →</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeTopGrid() {
  const [leaderIndex, setLeaderIndex] = useState(1);
  const [partnerIndex, setPartnerIndex] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("visual")) return undefined;

    const a = setInterval(() => setLeaderIndex((i) => (i + 1) % leaders.length), 6500);
    const b = setInterval(() => setPartnerIndex((i) => (i + 1) % partners.length), 2600);
    return () => { clearInterval(a); clearInterval(b); };
  }, []);

  return (
    <section className="w-full bg-base-light pt-1.5 sm:pt-2 px-3 sm:px-4 md:px-4 pb-3 sm:pb-4 lg:pb-2.5 xl:pb-3 h-auto lg:h-[calc(100vh-106px)] lg:max-h-[calc(100vh-106px)] lg:min-h-[520px] flex flex-col justify-between">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(0,1.72fr)_minmax(0,1.72fr)_minmax(0,1.06fr)] xl:grid-cols-[minmax(0,1.7fr)_minmax(0,1.7fr)_minmax(0,1.08fr)] 2xl:grid-cols-[minmax(0,1.68fr)_minmax(0,1.68fr)_minmax(0,1.08fr)] gap-2 sm:gap-2.5 lg:gap-2 xl:gap-2.5 2xl:gap-3 w-full flex-1 items-stretch min-h-0">
        <div className="flex flex-col justify-between gap-2 sm:gap-2.5 lg:gap-2 xl:gap-2.5 2xl:gap-3 w-full min-w-0 h-full lg:order-1">
          <div className="rounded-xl shadow-xs border border-stone-200 p-2.5 sm:p-3 xl:p-3.5 relative overflow-hidden flex flex-col justify-center shrink-0 lg:shrink lg:flex-1 min-h-0 bg-white">
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none select-none">
              <img src="/images/home/itet-architecture.jpg" alt="ITET Architecture" className="absolute inset-0 h-full w-full object-cover object-right opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
            </div>
            <div className="relative z-10 flex flex-col justify-center h-full space-y-2 sm:space-y-2.5">
              <div className="space-y-1.5 sm:space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white border border-stone-100 text-[11px] font-semibold text-gray-700 shadow-2xs"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><span>Welcome to ITET</span></div>
                <h2 className="text-lg sm:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold tracking-tight leading-tight"><span className="text-gray-800 block">Uniting Textile Professionals.</span><span className="text-primary block">Advancing Industry.</span></h2>
              </div>
              <p className="text-sm lg:text-sm text-gray-600 font-normal leading-relaxed max-w-xl line-clamp-2">ITET is the trusted platform for textile engineers to connect and contribute to sustainable success.</p>
            </div>
          </div>

          <div className="block md:hidden"><AdCard ratio="3:4" portrait /></div>

          <div className="flex-1 min-h-0 flex flex-col">
            <LeadershipCard leader={leaders[leaderIndex]} />
          </div>
        </div>

        <div className="flex flex-col md:col-span-2 md:grid md:grid-cols-2 lg:flex lg:flex-col lg:col-span-1 gap-2 sm:gap-2.5 lg:gap-2 xl:gap-2.5 2xl:gap-3 w-full min-w-0 h-full lg:order-2">
          <div className="flex-1 min-h-0 flex flex-col">
            <div className="bg-white p-2 sm:p-2.5 xl:p-3 rounded-xl shadow-xs border border-gray-200/80 flex flex-col h-full min-h-0">
              <div className="flex items-center justify-between mb-0.5 shrink-0">
                <h3 className="font-semibold text-gray-800 text-xs sm:text-sm flex gap-1.5 items-center"><span className="text-primary">▣</span><span>Events &amp; Conclaves</span></h3>
                <Link className="text-xs text-primary font-medium underline hover:text-primary-light transition-colors" href="/events">View All</Link>
              </div>
              <div className="border border-dashed border-gray-300 my-1.5 sm:my-2 shrink-0" />
              <div className="space-y-1.5 sm:space-y-2 flex-1 min-h-0 overflow-y-auto pr-1 custom-scrollbar">
                <div className="group bg-white rounded-md border border-gray-200/90 shadow-2xs p-2 sm:p-2.5 flex flex-row items-stretch gap-2 sm:gap-2.5 relative cursor-pointer">
                  <div className="w-[50px] sm:w-[54px] shrink-0 flex flex-col rounded-md overflow-hidden border border-gray-200/90 shadow-2xs bg-white self-start">
                    <div className="bg-[#f43f5e] w-full py-0.5"><span className="block text-[8.5px] font-black tracking-wider text-white text-center uppercase leading-tight pt-0.5">SEP</span></div>
                    <div className="flex-1 flex flex-col items-center justify-center p-0.5 bg-white"><span className="text-base sm:text-lg font-black text-[#f43f5e] tracking-tighter leading-none">26</span><span className="text-[7.5px] text-gray-400 font-medium mt-0.5">2026</span></div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-1"><h4 className="font-semibold text-[11.5px] sm:text-xs text-gray-800 leading-snug line-clamp-1 flex-1 min-w-0 truncate">Installation Ceremony of the 15th ITET Council (2026–2028)</h4><span className="text-[8.5px] font-bold px-1.5 rounded-xs bg-purple-50 text-purple-600 border border-purple-200">৳0</span></div>
                      <div className="flex items-center gap-1 my-0.5 text-[8.5px]"><span className="font-semibold px-1.5 rounded-xs bg-rose-50 text-rose-600">Members Only</span><span className="font-medium bg-stone-50 text-stone-600 border border-stone-200 px-1.5 rounded-xs">Reg: 24 Sept 2026</span><span className="font-bold px-1.5 rounded-xs bg-rose-50 text-rose-600 border border-rose-100">Closed</span></div>
                    </div>
                    <div className="flex items-center justify-between gap-1 pt-0.5 mt-0.5 border-t border-gray-100 text-[9px] sm:text-[9.5px] text-gray-500"><span className="truncate">গল্ফ গার্ডেন, আর্মি গল্ফ ক্লাব</span><span className="text-[8.5px] font-medium shrink-0">07:00 PM - 11:00 PM</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-0 flex flex-col">
            <div className="bg-white p-2 sm:p-2.5 xl:p-3 rounded-xl shadow-xs border border-gray-200/80 flex flex-col h-full min-h-0">
              <div className="flex items-center justify-between mb-1.5 shrink-0"><div className="flex items-center gap-1.5"><span className="text-primary">●</span><h3 className="font-bold text-gray-900 text-xs sm:text-sm">Latest Notices</h3></div><Link className="text-xs text-primary font-semibold hover:underline" href="/notices">View All ›</Link></div>
              <div className="mb-2 shrink-0"><div className="bg-stone-100 p-0.5 rounded-md flex items-center gap-0.5 border border-stone-200/60 text-[10.5px] sm:text-[11px]"><button className="flex-1 text-center py-1 px-1 rounded-md font-bold bg-white text-stone-900 shadow-2xs">All</button><button className="flex-1 text-center py-1 px-1 rounded-md font-medium text-stone-600">Today</button><button className="flex-1 text-center py-1 px-1 rounded-md font-medium text-stone-600">This Week</button><button className="flex-1 text-center py-1 px-1 rounded-md font-medium text-stone-600">Month</button></div></div>
              <div className="divide-y divide-gray-100 flex-1 min-h-0 overflow-y-auto pr-0.5 custom-scrollbar">
                {notices.map(([mon, day, title, date, attached]) => (
                  <div key={date+title} className="group py-2 px-1 flex items-center gap-2.5 sm:gap-3 cursor-pointer hover:bg-slate-50/70 rounded-md transition-colors">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg border border-gray-200/90 bg-white flex flex-col items-center justify-center shrink-0 shadow-2xs"><span className="text-[8px] sm:text-[8.5px] font-bold text-gray-400 uppercase tracking-wider leading-tight">{mon}</span><span className="text-sm sm:text-base font-extrabold text-gray-900 leading-none mt-0.5">{day}</span></div>
                    <div className="flex-1 min-w-0"><h4 className="font-semibold text-xs sm:text-[12px] text-gray-900 leading-snug line-clamp-1 truncate">{title}</h4><div className="flex items-center gap-1.5 text-[9.5px] sm:text-[10px] text-gray-500 mt-0.5 truncate"><span>{date}</span>{attached && <><span className="text-gray-300">•</span><span className="text-primary font-medium">Attached</span></>}</div></div>
                    <span className="text-[9px] sm:text-[9.5px] font-semibold px-2 py-0.5 rounded-sm bg-emerald-50 text-emerald-700 border border-emerald-200/80 capitalize">general</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block w-full shrink-0"><AdCard ratio="21:9" /></div>
        </div>

        <div className="hidden md:flex flex-col justify-between gap-2 sm:gap-2.5 lg:gap-2 xl:gap-2.5 2xl:gap-3 w-full min-w-0 h-full lg:order-3">
          <div className="w-full flex-1 min-h-0"><AdCard ratio="3:4" portrait className="h-full" /></div>
          <div className="shrink-0 w-full">
            <div className="bg-white p-2 sm:p-2.5 xl:p-3 rounded-xl w-full shadow-xs border border-gray-200/80 shrink-0">
              <div className="flex items-center gap-1.5 mb-1"><div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-orange-50 text-primary flex items-center justify-center shrink-0">⌁</div><h3 className="text-[10.5px] sm:text-[11.5px] font-bold text-gray-800 tracking-tight leading-tight">We are proud to work with our valued partners</h3></div>
              <div className="overflow-hidden">
                <div className="py-0.5 px-0.5">
                  <div className="relative w-full h-[46px] sm:h-[50px] xl:h-[54px] overflow-hidden rounded-lg bg-white/90 border border-gray-100 flex items-center justify-center p-1 shadow-2xs">
                    <img src={partners[partnerIndex]} alt="ABC" className="h-full w-full object-contain p-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

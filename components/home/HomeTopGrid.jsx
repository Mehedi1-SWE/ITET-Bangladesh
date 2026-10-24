"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const leaders = [
  {
    role: "SECRETARY GENERAL, ITET'S MESSAGE",
    quote: '"Reform, Modernization & Global Recognition"',
    name: "Engr. A.S.M Hafizur Rahman Nixon",
    designation: "Secretary General, ITET",
    image: "/images/leadership/secretary-general.jpg",
    text: "It is both an honor and a profound responsibility to serve as Secretary General of ITET. Since its establishment, ITET has been the professional home of Bangladesh’s textile engineers—a platform to unite our voices, strengthen our professional identity, and contribute meaningfully to the nation’s textile and apparel sector.",
  },
  {
    role: "PRESIDENT, ITET'S MESSAGE",
    quote: '"Connecting Textile Engineers, Building a Stronger Future"',
    name: "Engr. Md. Enayet Hossain",
    designation: "President, ITET",
    image: "/images/leadership/president.jpg",
    text: "Bismillahir Rahmanir Rahim Assalamu Alaikum. It is a proud moment to introduce the official website of the Institution of Textile Engineers & Technologists (ITET). This platform is designed to be the digital home of our members — connecting professionals, sharing knowledge, and strengthening our collective voice.",
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
    <div className={`relative w-full overflow-hidden rounded-2xl shadow-lg border border-[#1d355c]/60 bg-gradient-to-b from-[#0a1c3b] via-[#081734] to-[#051126] flex items-center justify-center text-center select-none ${portrait ? "aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[220px] flex-col p-4" : "aspect-[21/9] shrink-0 p-3 sm:p-4"} ${className}`}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={portrait ? "0 0 320 420" : "0 0 700 300"} preserveAspectRatio="none">
        {portrait ? (
          <>
            <path d="M -10,170 C 40,240 85,240 140,165 C 185,100 215,48 238,55 C 265,65 278,240 295,430" fill="none" stroke="rgba(148, 185, 235, 0.32)" strokeWidth="1.6" />
            <path d="M -15,130 C 35,220 85,270 145,190 C 205,110 240,210 270,360 C 290,440 310,320 335,130" fill="none" stroke="rgba(148, 185, 235, 0.26)" strokeWidth="1.5" />
            <path d="M -10,300 C 45,170 85,145 140,220 C 190,290 230,420 280,390 C 310,370 325,240 335,100" fill="none" stroke="rgba(148, 185, 235, 0.22)" strokeWidth="1.4" />
            <path d="M -10,370 C 50,290 100,280 150,340 C 200,400 240,430 285,350 C 310,300 320,190 335,150" fill="none" stroke="rgba(148, 185, 235, 0.18)" strokeWidth="1.3" />
          </>
        ) : (
          <>
            <path d="M -20,130 C 100,240 220,240 350,130 C 450,40 520,30 580,45 C 640,60 670,220 720,280" fill="none" stroke="rgba(148, 185, 235, 0.3)" strokeWidth="1.6" />
            <path d="M -30,80 C 80,180 200,250 340,160 C 460,70 540,160 620,260 C 660,310 690,240 730,120" fill="none" stroke="rgba(148, 185, 235, 0.25)" strokeWidth="1.5" />
            <path d="M -20,240 C 110,130 210,110 320,180 C 420,240 510,320 620,280 C 670,260 700,180 730,100" fill="none" stroke="rgba(148, 185, 235, 0.2)" strokeWidth="1.4" />
          </>
        )}
      </svg>

      {portrait ? (
        <div className="relative z-10 flex flex-col items-center justify-center max-w-[260px]">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-inner flex items-center justify-center text-white mb-3 sm:mb-3.5"><ImageIcon /></div>
          <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.22em] text-[#9db3d4] uppercase leading-none">AD SPACE</span>
          <span className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none mt-2">{ratio}</span>
          <span className="text-xs sm:text-[13px] text-[#8fa7c7] font-medium mt-1.5">(Portrait)</span>
          <Link className="mt-4 sm:mt-5 inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-md border border-white/20 text-white text-xs sm:text-[13px] font-medium shadow-md transition-all hover:border-white/35" href="/contact"><span>Book this space</span></Link>
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
          <div className="flex items-center gap-3"><Link className="inline-flex items-center px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-md transition-all hover:border-white/35" href="/contact"><span>Book this space</span></Link></div>
        </div>
      )}
    </div>
  );
}

function HandshakeIcon() {
  return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg>;
}

function PartnerCard({ images }) {
  return (
    <div className="bg-white p-2 sm:p-2.5 xl:p-3 rounded-xl w-full shadow-xs border border-gray-200/80 shrink-0">
      <div className="flex items-center gap-1.5 mb-1">
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-orange-50 text-primary flex items-center justify-center shrink-0"><HandshakeIcon /></div>
        <h3 className="text-[10.5px] sm:text-[11.5px] font-bold text-gray-800 tracking-tight leading-tight">We are proud to work with our valued partners</h3>
      </div>
      <div className="overflow-hidden">
        <Swiper
          className="my-0.5"
          modules={[Autoplay]}
          loop
          speed={900}
          spaceBetween={4}
          slidesPerView={1}
          autoplay={{ delay: 2200, disableOnInteraction: false, pauseOnMouseEnter: false }}
          breakpoints={{
            1536: {
              slidesPerView: 2,
              spaceBetween: 4,
            },
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <div className="py-0.5 px-0.5">
                <div className="relative w-full h-[46px] sm:h-[50px] xl:h-[54px] overflow-hidden rounded-lg bg-white/90 border border-gray-100 transition-all duration-300 flex items-center justify-center p-1 shadow-2xs">
                  <img src={image} alt="ABC" className="w-full h-full object-contain p-1 transition-all duration-300 hover:scale-105" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}


function QuoteIcon() {
  return <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" /><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" /></svg>;
}

function LoomWatermark() {
  return <svg width="48" height="48" viewBox="0 0 100 100" fill="none"><path d="M25 20 C35 12, 65 12, 75 20 C85 28, 88 72, 75 80 C65 88, 35 88, 25 80 C12 72, 15 28, 25 20 Z" stroke="#475569" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 28 Q50 20 80 28" stroke="#475569" strokeWidth="6" strokeLinecap="round" /><path d="M20 72 Q50 80 80 72" stroke="#475569" strokeWidth="6" strokeLinecap="round" /><line x1="38" y1="26" x2="38" y2="74" stroke="#475569" strokeWidth="5" strokeLinecap="round" /><line x1="50" y1="24" x2="50" y2="76" stroke="#475569" strokeWidth="5" strokeLinecap="round" /><line x1="62" y1="26" x2="62" y2="74" stroke="#475569" strokeWidth="5" strokeLinecap="round" /></svg>;
}

function ArrowRightTiny({ size = 10 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
}

function LeadershipCard({ leader }) {
  return (
    <Link href={`/leadership#${leader.id}`} className="group block h-full w-full overflow-hidden rounded-xl border border-slate-800/80 bg-[#0B1426] text-white shadow-xs">
      <div className="flex h-full min-h-[120px] flex-row items-stretch">
        <div className="relative w-[28%] min-w-[95px] max-w-[140px] shrink-0 overflow-hidden rounded-l-xl sm:w-[29%]">
          <img src={leader.image} alt={leader.name} className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="relative flex min-w-0 flex-1 flex-col justify-center gap-2 bg-[#0B1426] px-3 py-2 sm:gap-2.5 sm:px-3.5 sm:py-2.5">
          <div className="pointer-events-none absolute bottom-1.5 right-2 select-none opacity-20"><LoomWatermark /></div>
          <div className="relative z-10 space-y-1">
            <div className="flex items-center gap-1.5"><div className="flex h-3.5 w-3.5 shrink-0 items-center justify-center text-primary"><QuoteIcon /></div><span className="text-[10px] font-semibold uppercase tracking-wider text-white sm:text-[11px]">{leader.role}</span></div>
            <p className="line-clamp-1 text-[10px] font-medium italic text-primary sm:text-[10.5px]">{leader.quote}</p>
            <p className="line-clamp-2 text-[10px] font-normal leading-relaxed text-[#CBD5E1] sm:text-[11px]">{leader.text}</p>
          </div>
          <div className="relative z-10 pt-1">
            <div className="mb-1 border-t border-[#1E293B]" />
            <div className="flex items-center justify-between">
              <div className="min-w-0"><h4 className="truncate text-[11px] font-semibold text-white sm:text-xs">{leader.name}</h4><p className="truncate text-[10px] font-normal text-[#94A3B8] sm:text-[11px]">{leader.designation}</p></div>
              <div className="ml-1 flex shrink-0 items-center gap-0.5 text-[10px] font-medium text-white/70 opacity-70 transition-all group-hover:translate-x-0.5 group-hover:text-primary group-hover:opacity-100"><span>Read</span><ArrowRightTiny /></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function CalendarHeaderIcon() {
  return <svg viewBox="0 0 448 512" className="text-sm sm:text-base text-primary" width="14" height="14" fill="currentColor"><path d="M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z" /></svg>;
}
function CalendarSmall() { return <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-stone-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>; }
function MapPinIcon() { return <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>; }
function ClockIcon({ size = "w-2.5 h-2.5" }) { return <svg viewBox="0 0 24 24" className={`${size} text-gray-400 shrink-0`} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>; }
function BellIcon() { return <svg viewBox="0 0 24 24" className="text-primary w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" /></svg>; }
function ChevronRightIcon() { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>; }
function FileTextIcon() { return <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>; }

function EventPanel() {
  return (
    <div className="flex h-full min-h-0 flex-col rounded-xl border border-gray-200/80 bg-white p-2 shadow-xs sm:p-2.5 xl:p-3">
      <div className="mb-0.5 flex shrink-0 items-center justify-between">
        <h3 className="flex items-center gap-1.5 text-xs font-semibold text-gray-800 sm:text-sm"><CalendarHeaderIcon /><span>Events &amp; Conclaves</span></h3>
        <Link className="text-xs font-medium text-primary underline transition-colors hover:text-primary-light" href="/events">View All</Link>
      </div>
      <div className="my-1.5 shrink-0 border border-dashed border-gray-300 sm:my-2" />
      <Link href="/events" className="group flex flex-1 items-stretch gap-2 rounded-md border border-gray-200/90 bg-white p-2 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:gap-2.5 sm:p-2.5">
        <div className="w-[50px] shrink-0 self-start overflow-hidden rounded-md border border-gray-200/90 bg-white shadow-2xs sm:w-[54px]">
          <div className="relative bg-[#f43f5e] px-0.5 py-0.5"><span className="block pt-0.5 text-center text-[8.5px] font-black uppercase leading-tight tracking-wider text-white">SEP</span></div>
          <div className="flex flex-col items-center justify-center bg-white p-1"><span className="text-base font-black leading-none tracking-tighter text-[#f43f5e] sm:text-lg">26</span><span className="mt-0.5 text-[7.5px] font-medium text-gray-400">2026</span></div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-1"><h4 className="line-clamp-2 flex-1 text-[11.5px] font-semibold leading-snug text-gray-800 transition-colors group-hover:text-primary sm:text-xs">Installation Ceremony of the 15th ITET Council (2026–2028)</h4><span className="shrink-0 rounded-xs border border-purple-200 bg-purple-50 px-1.5 text-[8.5px] font-bold text-purple-600">৳0</span></div>
            <div className="mt-1 flex flex-wrap items-center gap-1 text-[8.5px]"><span className="rounded-xs bg-rose-50 px-1.5 font-semibold text-rose-600">Members Only</span><span className="rounded-xs border border-stone-200 bg-stone-50 px-1.5 font-medium text-stone-600">Reg: 24 Sept 2026</span><span className="rounded-xs border border-rose-100 bg-rose-50 px-1.5 font-bold text-rose-600">Closed</span></div>
          </div>
          <div className="mt-1 flex items-center justify-between gap-1 border-t border-gray-100 pt-1 text-[9px] text-gray-500 sm:text-[9.5px]"><div className="flex min-w-0 items-center gap-1"><MapPinIcon /><span className="truncate">গল্ফ গার্ডেন, আর্মি গল্ফ ক্লাব</span></div><div className="flex shrink-0 items-center gap-0.5"><ClockIcon /><span className="text-[8.5px] font-medium">07:00 PM - 11:00 PM</span></div></div>
        </div>
      </Link>
    </div>
  );
}

function NoticePanel() {
  const [filter, setFilter] = useState("All");

  const visibleNotices = notices.filter(([, , , date]) => {
    if (filter === "All") return true;
    const value = new Date(date);
    const now = new Date();
    const sameDay = value.getFullYear() === now.getFullYear() && value.getMonth() === now.getMonth() && value.getDate() === now.getDate();
    if (filter === "Today") return sameDay;
    if (filter === "Month") return value.getFullYear() === now.getFullYear() && value.getMonth() === now.getMonth();
    if (filter === "This Week") {
      const startOfWeek = new Date(now);
      const day = startOfWeek.getDay();
      startOfWeek.setDate(now.getDate() - ((day + 6) % 7));
      startOfWeek.setHours(0,0,0,0);
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 7);
      return value >= startOfWeek && value < endOfWeek;
    }
    return true;
  });

  return (
    <div className="flex h-full min-h-0 flex-col rounded-xl border border-gray-200/80 bg-white p-2 shadow-xs sm:p-2.5 xl:p-3">
      <div className="mb-1.5 flex shrink-0 items-center justify-between">
        <div className="flex items-center gap-1.5"><BellIcon /><h3 className="text-xs font-bold text-gray-900 sm:text-sm">Latest Notices</h3></div>
        <Link className="flex items-center gap-0.5 text-xs font-semibold text-primary transition-colors hover:underline" href="/notices"><span>View All</span><ChevronRightIcon /></Link>
      </div>
      <div className="mb-2 shrink-0">
        <div className="flex items-center gap-0.5 rounded-md border border-stone-200/60 bg-stone-100 p-0.5 text-[10.5px] sm:text-[11px]">
          {["All","Today","This Week","Month"].map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={`flex-1 rounded-md px-1 py-1 text-center font-medium transition-all duration-150 ${filter === item ? "bg-white font-bold text-stone-900 shadow-2xs" : "text-stone-600 hover:bg-stone-200/50 hover:text-stone-900"}`}>{item}</button>)}
        </div>
      </div>
      <div className="custom-scrollbar min-h-0 flex-1 divide-y divide-gray-100 overflow-y-auto pr-0.5">
        {visibleNotices.length ? visibleNotices.map(([mon, day, title, date, attached], index) => (
          <Link href="/notices" key={date+title} className="group flex items-center gap-2.5 rounded-md px-1 py-2 transition-colors hover:bg-slate-50/70 sm:gap-3">
            <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg border border-gray-200/90 bg-white shadow-2xs transition-colors group-hover:border-primary/40 sm:h-11 sm:w-11"><span className="text-[8px] font-bold uppercase leading-tight tracking-wider text-gray-400 sm:text-[8.5px]">{mon}</span><span className="mt-0.5 text-sm font-extrabold leading-none text-gray-900 sm:text-base">{day}</span></div>
            <div className="min-w-0 flex-1"><h4 className="line-clamp-1 flex items-center gap-1 text-xs font-semibold leading-snug text-gray-900 transition-colors group-hover:text-primary sm:text-[12px]"><span className="truncate">{title}</span>{index < 3 && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />}</h4><div className="mt-0.5 flex items-center gap-1.5 truncate text-[9.5px] text-gray-500 sm:gap-2 sm:text-[10px]"><span className="flex shrink-0 items-center gap-1"><ClockIcon size="w-[11px] h-[11px]" /><span>{date}</span></span>{attached && <><span className="text-gray-300">•</span><span className="flex shrink-0 items-center gap-0.5 font-medium text-primary"><FileTextIcon /><span>Attached</span></span></>}</div></div>
            <span className="shrink-0 rounded-sm border border-emerald-200/80 bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold capitalize tracking-tight text-emerald-700 sm:text-[9.5px]">general</span>
          </Link>
        )) : <div className="flex h-full min-h-[90px] items-center justify-center text-center text-xs text-gray-400">No notices in this period.</div>}
      </div>
    </div>
  );
}

export default function HomeTopGrid() {
  const [leaderIndex, setLeaderIndex] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("visual")) return undefined;

    const a = setInterval(() => setLeaderIndex((i) => (i + 1) % leaders.length), 6500);
    return () => clearInterval(a);
  }, []);

  return (
    <section className="w-full bg-base-light pt-1.5 sm:pt-2 px-3 sm:px-4 md:px-4 pb-3 sm:pb-4 lg:pb-2.5 xl:pb-3 h-auto lg:h-[calc(100vh-106px)] lg:max-h-[calc(100vh-106px)] lg:min-h-[520px] flex flex-col justify-between">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(0,1.72fr)_minmax(0,1.72fr)_minmax(0,1.06fr)] xl:grid-cols-[minmax(0,1.7fr)_minmax(0,1.7fr)_minmax(0,1.08fr)] 2xl:grid-cols-[minmax(0,1.68fr)_minmax(0,1.68fr)_minmax(0,1.08fr)] gap-2 sm:gap-2.5 lg:gap-2 xl:gap-2.5 2xl:gap-3 w-full flex-1 items-stretch min-h-0">
        <div className="flex flex-col justify-between gap-2 sm:gap-2.5 lg:gap-2 xl:gap-2.5 2xl:gap-3 w-full min-w-0 h-full lg:order-1">
          <div className="rounded-xl shadow-xs border border-stone-200 p-2.5 sm:p-3 xl:p-3.5 relative overflow-hidden flex flex-col justify-center shrink-0 lg:shrink lg:flex-[1.12] min-h-0 bg-white">
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
          <div className="hidden md:block w-full shrink-0"><AdCard ratio="21:9" /></div>
        </div>

        <div className="flex flex-col md:col-span-2 md:grid md:grid-cols-2 lg:flex lg:flex-col lg:col-span-1 gap-2 sm:gap-2.5 lg:gap-2 xl:gap-2.5 2xl:gap-3 w-full min-w-0 h-full lg:order-2">
          <div className="flex-1 min-h-0 flex flex-col"><EventPanel /></div>
          <div className="flex-1 min-h-0 flex flex-col"><NoticePanel /></div>
        </div>

        <div className="flex flex-col gap-2.5 sm:gap-3 md:hidden">
          <div className="w-full"><AdCard ratio="21:9" /></div>
          <div><PartnerCard images={partners} /></div>
        </div>

        <div className="hidden md:flex flex-col justify-between gap-2 sm:gap-2.5 lg:gap-2 xl:gap-2.5 2xl:gap-3 w-full min-w-0 h-full lg:order-3">
          <div className="w-full flex-1 min-h-0"><AdCard ratio="3:4" portrait className="h-full" /></div>
          <div className="shrink-0 w-full"><PartnerCard images={partners} /></div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const quickLinks = [
  ["History of ITET", "/history-itet"],
  ["ITET's Mission & Vision", "/mission-vision"],
  ["Constitution", "/constitution"],
  ["Committee Members", "/committee"],
  ["Welfare Trust", "/welfareTrust"],
  ["Photo Gallery", "/gallery"],
];

const membershipLinks = [
  ["Membership Overview", "/membership-overview"],
  ["Member Benefits", "/members-benifits"],
  ["Directory & Update Info", "/membership-login"],
  ["Contact Us", "/contact"],
];

function ArrowForward({ className = "text-xs" }) {
  return (
    <svg viewBox="0 0 512 512" className={className} width="1em" height="1em" fill="currentColor">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="m268 112 144 144-144 144m124-144H100" />
    </svg>
  );
}

function LinkChevron() {
  return (
    <svg viewBox="0 0 320 512" className="text-[10px] text-primary/70 group-hover:text-primary group-hover:translate-x-0.5 transition-all w-2.5 h-3.5" fill="currentColor">
      <path d="M285.476 272.971 91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
    </svg>
  );
}

function FooterTitle({ children }) {
  return (
    <h3 className="font-semibold text-base text-white mb-5 pb-2.5 relative inline-block">
      {children}
      <span className="absolute left-0 bottom-0 w-8 h-[2px] bg-gradient-to-r from-primary to-amber-500 rounded-full" />
    </h3>
  );
}

function FacebookIcon() {
  return <svg viewBox="0 0 320 512" width="14" height="14" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>;
}

function LinkedinIcon() {
  return <svg viewBox="0 0 448 512" width="14" height="14" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 448 512" width="14" height="14" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" /></svg>;
}

function XIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l16 16M20 4 4 20" /></svg>;
}

function YoutubeIcon() {
  return <svg viewBox="0 0 576 512" width="14" height="14" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597C14.933 166.95 14.933 256.388 14.933 256.388s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>;
}

function Social({ label, href, children }) {
  const brand = {
    Facebook: "hover:bg-[#1877F2] hover:border-[#1877F2]",
    LinkedIn: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
    Instagram: "hover:bg-[radial-gradient(circle_at_30%_107%,#FDF497_0%,#FDF497_5%,#FD5949_45%,#D6249F_60%,#285AEB_90%)] hover:border-[#D6249F]",
    Twitter: "hover:bg-white hover:text-black hover:border-white",
    YouTube: "hover:bg-[#FF0000] hover:border-[#FF0000]",
  }[label] || "hover:bg-primary hover:border-primary";

  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${brand}`}>{children}</a>;
}

function MapPinIcon() {
  return <svg viewBox="0 0 1024 1024" className="text-sm" width="1em" height="1em" fill="currentColor"><path d="M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008z" /></svg>;
}

function PhoneIcon() {
  return <svg viewBox="0 0 512 512" className="text-sm" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="32"><path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374z" /></svg>;
}

function MailIcon() {
  return <svg viewBox="0 0 512 512" className="text-sm" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="32"><rect width="416" height="320" x="48" y="96" rx="40" /><path d="m112 160 144 112 144-112" /></svg>;
}

function NewspaperIcon() {
  return <svg viewBox="0 0 512 512" className="text-xs text-amber-400 shrink-0" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="32"><path d="M368 415.86V72a24.07 24.07 0 0 0-24-24H72a24.07 24.07 0 0 0-24 24v352a40.12 40.12 0 0 0 40 40h328" /><path d="M416 464a48 48 0 0 1-48-48V128h72a24 24 0 0 1 24 24v264a48 48 0 0 1-48 48z" /><path d="M240 128h64m-64 64h64m-192 64h192m-192 64h192m-192 64h192" /></svg>;
}

function PersonIcon() {
  return <svg viewBox="0 0 512 512" className="text-xs text-sky-400 shrink-0" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="32"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" /><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" /></svg>;
}

function CopyrightIcon() {
  return <svg viewBox="0 0 512 512" className="text-xs shrink-0" width="1em" height="1em" fill="currentColor"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200z" /></svg>;
}

export default function Footer() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0);
    }
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const dash = 138.23007675795088;
  const dashOffset = dash * (1 - progress / 100);

  return (
    <footer className="relative bg-[#050813] text-white pt-16 pb-8 text-sm overflow-hidden selection:bg-primary selection:text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/images/home/hero-texture.jpg" alt="Textile Texture Background" className="absolute inset-0 h-full w-full object-cover object-center opacity-25 mix-blend-screen scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d1a]/90 via-[#050813]/85 to-[#02040a]/95 backdrop-blur-[1px]" />
      </div>

      <div aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[25%] font-raleway font-black text-[13vw] tracking-[0.06em] text-transparent select-none pointer-events-none leading-none z-0 uppercase whitespace-nowrap text-center blur-[1px]" style={{ WebkitTextStroke: "2px rgba(255,255,255,.09)", textShadow: "0 0 60px rgba(255,255,255,.03)" }}>ITET</div>
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f54a00]/70 to-transparent z-10" />
      <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-[#f54a00]/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 -right-28 w-96 h-96 rounded-full bg-[#3b82f6]/10 blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-20 left-1/3 w-64 h-64 rounded-full bg-[#B07210]/15 blur-3xl pointer-events-none z-0" />

      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10 mb-14">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link className="inline-block group" href="/">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="p-1.5 bg-white rounded-md shadow-lg group-hover:scale-105 transition-all duration-300 ring-1 ring-white/20 shrink-0">
                    <img src="/images/logo/itet-logo.jpg" alt="ITET Logo" width="50" height="50" className="rounded-sm object-contain" />
                  </div>
                  <div><h2 className="font-semibold text-base md:text-[17px] leading-snug tracking-tight text-white group-hover:text-primary-light transition-colors">The Institution of Textile Engineers <br />&amp; Technologists (ITET), Bangladesh</h2></div>
                </div>
              </Link>
              <p className="text-gray-300/85 text-sm leading-relaxed mb-6 pr-2">Empowering textile engineering professionals through innovation, education, and collaboration. Join us in shaping the future of textile technology in Bangladesh.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-5 lg:max-w-xs">
              <Link className="group flex items-center justify-between p-2.5 rounded-md bg-white/[0.05] border border-white/10 hover:border-white/20 hover:bg-white/[0.09] transition-all duration-300 backdrop-blur-sm" href="/member-portal">
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary animate-pulse" /><span className="text-xs font-semibold text-white group-hover:text-primary-light transition-colors">Members Portal</span></div><ArrowForward className="text-xs text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link className="group flex items-center justify-between p-2.5 rounded-md bg-white/[0.05] border border-white/10 hover:border-white/20 hover:bg-white/[0.09] transition-all duration-300 backdrop-blur-sm" href="/client-portal">
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-sky-400" /><span className="text-xs font-medium text-gray-200 group-hover:text-white transition-colors">Advertiser Portal</span></div><ArrowForward className="text-xs text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 mt-5">Connect With Us</p>
              <div className="flex items-center gap-2.5 flex-wrap">
                <Social label="Facebook" href="https://www.facebook.com/groups/itetbd/?ref=share&mibextid=KtfwRi"><FacebookIcon /></Social>
                <Social label="LinkedIn" href="https://www.linkedin.com/in"><LinkedinIcon /></Social>
                <Social label="Instagram" href="https://www.instagram.com"><InstagramIcon /></Social>
                <Social label="Twitter" href="https://twitter.com"><XIcon /></Social>
                <Social label="YouTube" href="https://www.youtube.com"><YoutubeIcon /></Social>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterTitle>Quick Links</FooterTitle>
            <ul className="space-y-2.5">
              {quickLinks.map(([label, href]) => <li key={href}><Link className="text-gray-300/80 hover:text-primary hover:translate-x-1.5 transition-all duration-200 flex items-center gap-2 text-sm group py-0.5" href={href}><LinkChevron /><span>{label}</span></Link></li>)}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <FooterTitle>Membership</FooterTitle>
            <ul className="space-y-2.5">
              {membershipLinks.map(([label, href]) => <li key={href}><Link className="text-gray-300/80 hover:text-primary hover:translate-x-1.5 transition-all duration-200 flex items-center gap-2 text-sm group py-0.5" href={href}><LinkChevron /><span>{label}</span></Link></li>)}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <FooterTitle>Contact &amp; Support</FooterTitle>
            <div className="rounded-md bg-white/[0.02] p-4 lg:p-5 backdrop-blur-md hover:border-primary/30 transition-all duration-300 space-y-4 shadow-xl">
              <a target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group pb-3.5 border-b border-white/[0.08]" href="https://maps.google.com/?q=House+%236,+Road+%232,+Sector+%2311,+Uttara,+Dhaka">
                <div className="w-8 h-8 rounded-md text-primary border border-primary/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300"><MapPinIcon /></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between"><p className="text-[11px] font-semibold uppercase tracking-wider">Address</p><span className="text-[10px] text-gray-400 group-hover:text-primary transition-colors flex items-center gap-0.5">Map <ArrowForward className="text-[9px]" /></span></div>
                  <p className="text-xs text-gray-300/95 mt-0.5 leading-relaxed group-hover:text-white transition-colors">House #6, Road #2, Sector #11, Uttara, Dhaka.</p>
                </div>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2.5 pb-3.5 border-b border-white/[0.08]">
                <a href="tel:+8801715-771454" className="flex items-center gap-2.5 p-2 rounded-md bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all duration-200 group">
                  <div className="w-7 h-7 rounded-md text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"><PhoneIcon /></div>
                  <div className="min-w-0"><p className="text-[10px] text-gray-400 uppercase font-medium">Hotline</p><p className="text-xs text-gray-200 font-semibold truncate group-hover:text-primary transition-colors">+880 1715-771454</p></div>
                </a>
                <a href="mailto:info@itetbd.net" className="flex items-center gap-2.5 p-2 rounded-md bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all duration-200 group">
                  <div className="w-7 h-7 rounded-md bg-white/5 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"><MailIcon /></div>
                  <div className="min-w-0"><p className="text-[10px] text-gray-400 uppercase font-medium">Support</p><p className="text-xs text-gray-200 font-semibold truncate group-hover:text-primary transition-colors">info@itetbd.net</p></div>
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Department Inquiries</p>
                <div className="space-y-1.5">
                  <a href="mailto:pressnpublication@itetbd.net" className="flex items-center justify-between p-2 rounded-md bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 transition-all duration-200 group">
                    <div className="flex items-center gap-2 min-w-0"><NewspaperIcon /><span className="text-xs text-gray-400 font-medium">Press:</span><span className="text-xs text-gray-200 truncate group-hover:text-primary-light transition-colors">pressnpublication@itetbd.net</span></div><ArrowForward className="text-xs text-gray-500 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                  </a>
                  <a href="mailto:secretarygeneral@itetbd.net" className="flex items-center justify-between p-2 rounded-md bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 transition-all duration-200 group">
                    <div className="flex items-center gap-2 min-w-0"><PersonIcon /><span className="text-xs text-gray-400 font-medium">Secretary:</span><span className="text-xs text-gray-200 truncate group-hover:text-primary-light transition-colors">secretarygeneral@itetbd.net</span></div><ArrowForward className="text-xs text-gray-500 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 my-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1.5 text-center md:text-left"><CopyrightIcon /><span>2026 The Institution of Textile Engineers &amp; Technologists (ITET), Bangladesh. All rights reserved.</span></div>
          <div className="flex items-center gap-1.5 shrink-0"><span className="text-gray-400">Designed &amp; Developed by</span><a target="_blank" rel="noopener noreferrer" className="hover:underline" href="https://360dsoul.com/">360d SOUL Ltd.</a>&amp;<a target="_blank" rel="noopener noreferrer" className="hover:underline" href="https://goinnovior.com/">Goinnovior Ltd.</a></div>
        </div>
      </div>

      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 group transition-all duration-500 ease-out cursor-pointer ${progress > 0 ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-4 scale-75 pointer-events-none"}`} aria-label="Back to top">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white shadow-lg md:shadow-xl border border-gray-100 transition-shadow duration-300 group-hover:shadow-2xl">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="none" stroke="#f3f4f6" strokeWidth="3" /></svg>
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="none" stroke="#f54a00" strokeWidth="3" strokeLinecap="round" strokeDasharray={dash} strokeDashoffset={dashOffset} className="transition-all duration-150 ease-out" /></svg>
          <svg viewBox="0 0 24 24" className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-gray-700 transition-transform duration-300 group-hover:-translate-y-0.5" fill="currentColor"><path d="M12 4.83582 5.79291 11.0429 7.20712 12.4571 12 7.66424 16.7929 12.4571 18.2071 11.0429 12 4.83582ZM12 10.4857 5.79291 16.6928 7.20712 18.107 12 13.3141 16.7929 18.107 18.2071 16.6928 12 10.4857Z" /></svg>
        </div>
        <div className="absolute -top-9 sm:-top-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-lg text-white text-[10px] sm:text-xs font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">{progress}% Scrolled<div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" /></div>
      </button>
    </footer>
  );
}

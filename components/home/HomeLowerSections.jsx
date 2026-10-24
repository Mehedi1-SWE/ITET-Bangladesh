import Link from "next/link";

const marketGroups = [
  { title: "Yarn Prices", icon: "/images/market/yarn.png", unit: "BDT/kg", category: "yarn" },
  { title: "Chemical Prices", icon: "/images/market/chemical.png", unit: "BDT/kg", category: "chemical" },
  { title: "Fabrics & Accessories Prices", icon: "/images/market/fabrics-accessories.png", unit: "BDT/cone", category: "fabrics" },
];

const gallery = [
  {
    file: "gallery-01.jpg",
    span: "lg:col-span-3",
    category: "Industry & Policy",
    badge: "ITET TIE- MoU",
    title: "টেক্সটাইল খাতে উদ্ভাবন ও গবেষণার নতুন দিগন্ত: ITET এবং TIE-এর মধ্যে ঐতিহাসিক MoU স্বাক্ষর!",
  },
  {
    file: "gallery-02.jpg",
    span: "lg:col-span-6",
    category: "Highlights",
    badge: "",
    title: "ITET Curated Moment",
  },
  {
    file: "gallery-03.jpg",
    span: "lg:col-span-3",
    category: "Council & Leadership",
    badge: "",
    title: "Textile Today highlights the newly elected 15th Council Committee of ITET in their July 2026 edition.",
  },
  {
    file: "gallery-04.jpg",
    span: "lg:col-span-4",
    category: "Council & Leadership",
    badge: "02 August 2026",
    title: "02 August 2026, IEB Central Leaders and the newly elected ITET Executive Committee met in an exchange of views meeting at the IEB Headquarters.",
  },
  {
    file: "gallery-05.jpg",
    span: "lg:col-span-4",
    category: "Industry & Policy",
    badge: "On 29 July",
    title: "On 29 July 2026, ITET officially submitted a policy recommendation paper titled 'Building a Productive, and Innovative Textile Economy for Bangladesh'.",
  },
  {
    file: "gallery-06.jpg",
    span: "lg:col-span-4",
    category: "Council & Leadership",
    badge: "",
    title: "On 26th June, 2026; Historic Landslide Victory for ITET: Enayet–Sumayel–Nixon (GG) Panel Achieves a Historic Clean Sweep!",
  },
  {
    file: "gallery-07.jpg",
    span: "lg:col-span-6",
    category: "Council & Leadership",
    badge: "",
    title: "On 14th July 2026, Engr. Abdus Sobhan, CIP, Managing Director of Auko-Tex Group, extended a warm reception to the newly elected members.",
  },
  {
    file: "gallery-08.jpg",
    span: "lg:col-span-6",
    category: "Council & Leadership",
    badge: "On 18th July",
    title: "On 18th July 2026, Leadership transition marks a new chapter for ITET with the Handover & Takeover Ceremony of the 15th Council.",
  },
  {
    file: "gallery-09.jpg",
    span: "lg:col-span-4",
    category: "Council & Leadership",
    badge: "On July 27",
    title: "On July 27, 2026, a delegation from the 15th Central Executive Council of ITET paid a courtesy visit to the Honorable Minister of Textiles and Jute.",
  },
  {
    file: "gallery-10.jpg",
    span: "lg:col-span-4",
    category: "Council & Leadership",
    badge: "",
    title: "On 1st August 2026, The 15th Council of ITET Bangladesh organized a discussion meeting and prayer program to remember the martyrs of the July Movement.",
  },
  {
    file: "gallery-11.jpg",
    span: "lg:col-span-4",
    category: "Council & Leadership",
    badge: "",
    title: "On 1st August 2026, The 15th Council of ITET Bangladesh organized a discussion meeting and prayer program to remember the martyrs of the July Movement.",
  },
];

function PriceCard({ title, icon, unit, category }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-300 bg-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex-grow p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="rounded-lg bg-yellow-600/20 p-2">
              <img src={icon} alt={`${title} icon`} width="32" height="32" className="object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          </div>
          <Link href={`/market-prices?category=${category}`} className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700" aria-label={`Open ${title}`}>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM10 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></svg>
          </Link>
        </div>

        <div className="space-y-3">
          {[1,2,3,4].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-lg bg-stone-100 p-4 transition-colors hover:bg-gray-200">
              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-medium text-gray-900">ABC</h4>
                <p className="truncate text-xs text-gray-500">100% Cotton Yarn</p>
              </div>
              <div className="ml-4 flex items-center">
                <span className="text-sm font-semibold text-green-600">0</span>
                <span className="ml-1 text-xs text-gray-500">{unit}</span>
                <Link href={`/market-prices?category=${category}`} className="ml-3 text-xs text-blue-500 transition hover:text-blue-700 hover:underline">Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto flex justify-end border-t border-gray-100 bg-gray-50 px-6 py-4">
        <Link href={`/market-prices?category=${category}`} className="inline-flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-800 hover:underline">
          View all {title}
          <svg viewBox="0 0 448 512" className="ml-2 h-4 w-4" fill="currentColor"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" /></svg>
        </Link>
      </div>
    </div>
  );
}

function ResponsibilityIcon({ type }) {
  const iconClass = "w-6 h-6 text-[#0b1830]";

  if (type === "shield") {
    return <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z" /><path d="m9 12 2 2 4-4" /></svg>;
  }

  if (type === "bulb") {
    return <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M8.4 14.5A7 7 0 1 1 15.6 14.5C14.6 15.3 14 16.4 14 18h-4c0-1.6-.6-2.7-1.6-3.5Z" /></svg>;
  }

  if (type === "handshake") {
    return <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 0 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 0 0 3-3l-4.2-4.2a3 3 0 0 0-4.2 0l-.9.9a1 1 0 0 1-1.4-1.4l2.7-2.7a5.8 5.8 0 0 1 7.1-.9l.4.3a2 2 0 0 0 1.4.2L22 3" /><path d="M2 3l1.5 11H6l6.5 6.5a1 1 0 0 0 1.5-1.3" /></svg>;
  }

  return <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" /></svg>;
}

function ResponsibilitySection() {
  const items = [
    {
      number: "01",
      icon: "shield",
      title: "Recognizing Industry Excellence",
      description: "We are committed to recognize and honor the valuable contributions of individuals within our community who have significant impact in textile and RMG industry.",
      shape: "rounded-tl-[48px] rounded-br-[48px] rounded-tr-none rounded-bl-none",
    },
    {
      number: "02",
      icon: "bulb",
      title: "Support Current Students",
      description: "We facilitate interactive sessions with industry experts and provide access to market intelligence to help students remain updated and to make them fit for industry.",
      shape: "rounded-tr-[48px] rounded-bl-[48px] rounded-tl-none rounded-br-none",
    },
    {
      number: "03",
      icon: "handshake",
      title: "Assist Our Alumni",
      description: "We stand beside our alumni during their times of need, offering guidance, support, and professional networking opportunities.",
      shape: "rounded-tl-[48px] rounded-tr-[48px] rounded-br-[48px] rounded-bl-none",
    },
    {
      number: "04",
      icon: "globe",
      title: "Strengthen Our Community",
      description: "We aim to foster a vibrant, supportive community built on knowledge sharing, mutual respect, and collective growth.",
      shape: "rounded-tr-[48px] rounded-bl-[48px] rounded-tl-[48px] rounded-br-none",
    },
  ];

  return (
    <section className="py-16 md:py-16 bg-white border-t border-gray-100" aria-label="Our Responsibility">
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#10213d] tracking-tight font-manuale leading-tight">Our Responsibility</h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">Dedicated to serving the national textile engineering fraternity through institutional empowerment, professional standards, and community welfare.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <article key={item.number} className={`relative min-h-[260px] bg-white border border-gray-200 px-8 py-8 shadow-[0_1px_2px_rgba(15,23,42,0.02)] hover:shadow-md transition-shadow duration-300 ${item.shape}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0">
                  <ResponsibilityIcon type={item.icon} />
                </div>
                <span className="text-[52px] leading-none font-bold text-gray-200/90 tracking-tight select-none">{item.number}</span>
              </div>

              <div className="mt-8">
                <h3 className="text-[17px] sm:text-lg font-semibold text-gray-950 tracking-tight leading-snug">{item.title}</h3>
                <p className="mt-3 text-[13px] sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WideAd() {
  return (
    <section className="py-10 lg:py-16">
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="mt-8 sm:mt-12 flex justify-center">
          <div className="relative w-full aspect-[2.35/1] min-h-[140px] max-h-[360px] overflow-hidden rounded-2xl shadow-lg border border-[#1d355c]/60 bg-gradient-to-b from-[#0a1c3b] via-[#081734] to-[#051126] flex items-center justify-center p-4 sm:p-6 select-none">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 250" preserveAspectRatio="none">
              <path d="M -20,130 C 150,240 300,240 500,130 C 650,40 750,30 820,45 C 900,60 950,220 1020,280" fill="none" stroke="rgba(148,185,235,.28)" strokeWidth="1.6" />
              <path d="M -30,80 C 120,180 300,250 500,160 C 680,70 800,160 900,260 C 950,310 990,240 1030,120" fill="none" stroke="rgba(148,185,235,.22)" strokeWidth="1.5" />
              <path d="M -20,220 C 140,120 280,110 440,180 C 580,240 700,310 840,270 C 910,250 950,170 1020,90" fill="none" stroke="rgba(148,185,235,.18)" strokeWidth="1.4" />
            </svg>
            <div className="relative z-10 flex items-center justify-between w-full max-w-4xl px-2 sm:px-6 gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-inner flex items-center justify-center text-white shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect width="18" height="18" x="3" y="3" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#9db3d4] uppercase leading-tight">AD SPACE</span>
                  <div className="flex items-baseline gap-2 mt-0.5"><span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-none">2.35:1</span><span className="text-[11px] sm:text-xs text-[#8fa7c7] font-medium">(Landscape)</span></div>
                </div>
              </div>
              <Link className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium shadow-md transition-all hover:border-white/35" href="/contact">Book this space</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ type }) {
  const common = "w-3.5 h-3.5";

  if (type === "facebook") {
    return <svg viewBox="0 0 24 24" className={common} fill="currentColor"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1Z" /></svg>;
  }

  if (type === "linkedin") {
    return <svg viewBox="0 0 24 24" className={common} fill="currentColor"><path d="M6.5 8.4H3.2V21h3.3V8.4ZM4.9 3A1.9 1.9 0 1 0 5 6.8 1.9 1.9 0 0 0 5 3Zm3.6 5.4V21h3.3v-6.2c0-1.6.3-3.2 2.3-3.2 2 0 2 1.9 2 3.3V21h3.3v-6.9c0-3.4-.7-6-4.7-6-1.9 0-3.2 1-3.8 2h-.1V8.4H8.5Z" /></svg>;
  }

  return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}

function AlumniSection() {
  const alumni = [
    {
      slug: "sanjida-islam-tulee",
      name: "Engr. Sanjida Islam Tulee",
      designation: "Honorable Member of Parliament (MP)",
      image: "/images/alumni/sanjida-islam-tulee.jpg",
    },
    {
      slug: "mahbuba-hakim",
      name: "Engr. Mahbuba Hakim",
      designation: "Honorable Member of Parliament (MP)",
      image: "/images/alumni/mahbuba-hakim.jpg",
    },
  ];

  return (
    <section id="alumni" className="scroll-mt-24 bg-[#f8f6f0] py-16 lg:py-[72px]">
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <h2 className="font-manuale text-3xl font-semibold leading-tight tracking-tight text-[#10213d] sm:text-4xl md:text-5xl">Meet Our Proud Alumni</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#31415d] sm:text-base">Connecting you with the remarkable leaders, innovators, and textile experts shaping our global industry.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4">
          {alumni.map((person) => (
            <article key={person.name} className="group rounded-lg border border-[#dedede] bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]">
              <div className="mb-[18px]">
                <h3 className="text-[18px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#0b1830] sm:text-[19px]">{person.name}</h3>
                <p className="mt-1 text-[14px] leading-snug text-[#5a6477]">{person.designation}</p>
              </div>

              <Link href={`/alumni/${person.slug}`} className="relative block aspect-square overflow-hidden rounded-2xl border border-[#f4cdbd] bg-[#ecebea]">
                <img src={person.image} alt={person.name} className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025]" />
              </Link>

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#eeeeec] pt-4">
                <div className="flex items-center gap-2">
                  <button type="button" aria-label="Facebook profile unavailable" title="Verified Facebook profile will be added when available" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f5f3] text-[#777d87] transition-all duration-200 ease-out hover:bg-[#1877F2] hover:text-white focus:bg-[#1877F2] focus:text-white focus:outline-none active:bg-[#1877F2] active:text-white"><SocialIcon type="facebook" /></button>
                  <button type="button" aria-label="LinkedIn profile unavailable" title="Verified LinkedIn profile will be added when available" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f5f3] text-[#777d87] transition-all duration-200 ease-out hover:bg-[#0A66C2] hover:text-white focus:bg-[#0A66C2] focus:text-white focus:outline-none active:bg-[#0A66C2] active:text-white"><SocialIcon type="linkedin" /></button>
                  <button type="button" aria-label="Instagram profile unavailable" title="Verified Instagram profile will be added when available" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f5f3] text-[#777d87] transition-all duration-200 ease-out hover:bg-[radial-gradient(circle_at_30%_107%,#FDF497_0%,#FDF497_5%,#FD5949_45%,#D6249F_60%,#285AEB_90%)] hover:text-white focus:bg-[radial-gradient(circle_at_30%_107%,#FDF497_0%,#FDF497_5%,#FD5949_45%,#D6249F_60%,#285AEB_90%)] focus:text-white focus:outline-none active:bg-[radial-gradient(circle_at_30%_107%,#FDF497_0%,#FDF497_5%,#FD5949_45%,#D6249F_60%,#285AEB_90%)] active:text-white"><SocialIcon type="instagram" /></button>
                </div>

                <Link href={`/alumni/${person.slug}`} className="group/details inline-flex h-8 items-center gap-2 rounded-full border border-transparent bg-[#fafafa] px-4 text-[12px] font-semibold text-[#1c2940] shadow-[0_1px_3px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out hover:border-primary/15 hover:bg-[#fff4ed] hover:text-primary hover:shadow-[0_5px_14px_rgba(245,74,0,0.12)]">
                  <span>View Details</span>
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover/details:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="relative py-10 lg:py-16 bg-[#fafaf8] border-t border-b border-neutral-200/60 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/[0.04] blur-3xl rounded-full pointer-events-none" />
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-manuale text-neutral-900 tracking-tight">Moments &amp; <span className="text-primary font-normal">Media Gallery</span></h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-600 max-w-xl">Glimpses into ITET leadership councils, engineering summits, industrial conventions, and fellowship celebrations.</p>
          </div>
          <Link className="text-sm sm:text-base text-gray-700 hover:text-primary hover:underline font-medium inline-flex items-center gap-1.5 self-start sm:self-end transition-colors group cursor-pointer shrink-0" href="/gallery">
            <span>Explore All Archives</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-2.5 sm:gap-3.5 md:gap-4">
          {gallery.map((item) => (
            <Link href="/gallery" key={item.file} className={`group relative overflow-hidden rounded-md sm:rounded-lg bg-neutral-200/90 cursor-pointer shadow-[0_2px_10px_-3px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 ring-1 ring-black/[0.04] ${item.span} h-[165px] xs:h-[190px] sm:h-[240px] md:h-[280px] lg:h-[360px]`}>
              <img src={`/images/gallery/${item.file}`} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {item.badge && (
                <div className="hidden sm:block absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 transition-all duration-300 transform group-hover:translate-y-[-2px]">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-white/95 hover:bg-white text-neutral-900 text-[11px] sm:text-xs font-semibold rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-200 border border-white/40">
                    <span className="truncate max-w-[120px] sm:max-w-[180px] tracking-tight">{item.badge}</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-neutral-700"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                  </div>
                </div>
              )}

              <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
                <span className="p-1.5 sm:p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-colors border border-white/20 inline-flex items-center justify-center">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6" /><path d="m21 3-7 7" /><path d="m3 21 7-7" /><path d="M9 21H3v-6" /></svg>
                </span>
              </div>

              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
                <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/50 text-white/90 text-[9px] sm:text-[10px] font-medium backdrop-blur-md border border-white/10 uppercase tracking-wider">{item.category}</span>
              </div>

              <div className={`absolute inset-x-0 bottom-0 p-2.5 sm:p-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 ${item.badge ? "sm:bottom-14" : ""}`}>
                <h4 className="text-white text-[11px] sm:text-sm font-medium line-clamp-2 leading-tight drop-shadow-sm">{item.title}</h4>
                <div className="flex items-center gap-1 mt-1 text-primary text-[9.5px] sm:text-[11px] font-semibold">
                  <span>View photo</span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 sm:mt-12 flex justify-center items-center">
          <Link className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 rounded-md bg-primary hover:bg-[#d94100] active:bg-[#c93c00] text-white text-sm sm:text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer" href="/gallery">
            <span> See More</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function MembershipCta() {
  return (
    <section className="w-full py-10 md:py-16 bg-[#f7f5ef]">
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="relative overflow-hidden rounded-lg bg-white shadow-[0_20px_50px_rgba(245,74,0,0.06),0_4px_16px_rgba(15,23,43,0.04)] border border-orange-100/50 px-6 py-12 sm:py-16 sm:px-14 text-center">
          <div className="pointer-events-none absolute -left-10 sm:-left-6 md:-left-2 top-[-10px] sm:top-0 md:top-2 w-44 h-44 sm:w-60 sm:h-60 md:w-76 md:h-76 select-none z-0" aria-hidden="true">
            <div className="absolute left-6 top-6 w-40 h-40 rounded-full bg-[#f54a00]/15 blur-3xl" />
            <svg viewBox="0 0 260 260" fill="none" className="w-full h-full"><defs><linearGradient id="brandLeftRingGrad" x1="0%" y1="70%" x2="90%" y2="10%"><stop offset="0%" stopColor="#c83800"/><stop offset="35%" stopColor="#f54a00"/><stop offset="70%" stopColor="#ff7839"/><stop offset="92%" stopColor="#ffab7a" stopOpacity=".8"/><stop offset="100%" stopColor="#ffd8c2" stopOpacity="0"/></linearGradient></defs><path d="M 2 110 C 10 170, 60 200, 110 180 C 160 160, 195 110, 215 65" stroke="url(#brandLeftRingGrad)" strokeWidth="36" strokeLinecap="round"/></svg>
          </div>
          <div className="pointer-events-none absolute -right-10 sm:-right-6 md:-right-2 bottom-[-15px] sm:bottom-0 md:bottom-2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 select-none z-0" aria-hidden="true">
            <div className="absolute right-6 bottom-6 w-44 h-44 rounded-full bg-[#ff7839]/15 blur-3xl" />
            <svg viewBox="0 0 280 280" fill="none" className="w-full h-full"><defs><linearGradient id="brandRightRingGrad" x1="10%" y1="90%" x2="90%" y2="50%"><stop offset="0%" stopColor="#ffd8c2" stopOpacity="0"/><stop offset="15%" stopColor="#ffab7a" stopOpacity=".85"/><stop offset="40%" stopColor="#ff7839"/><stop offset="75%" stopColor="#f54a00"/><stop offset="100%" stopColor="#d33c00"/></linearGradient></defs><path d="M 30 220 C 55 125, 135 75, 215 80 C 245 82, 268 95, 280 115" stroke="url(#brandRightRingGrad)" strokeWidth="38" strokeLinecap="round"/></svg>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 md:px-3.5 md:py-1.5 rounded-full bg-white border border-gray-200/80 shadow-xs mb-4 sm:mb-5"><span className="w-2 h-2 rounded-full bg-primary animate-pulse"/><span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-700">ITET Bangladesh • Premier Community</span></div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-800 tracking-tight mb-3 font-manuale leading-tight text-balance">Empower Your Textile Career Today</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">Join the largest network of textile engineers &amp; technologists in Bangladesh. Access exclusive industry insights, professional development, and career networking.</p>
            <div className="mt-7 sm:mt-8"><Link className="group relative inline-flex items-center justify-center px-7 py-3 text-xs sm:text-sm font-semibold text-white rounded-md bg-secondary hover:bg-primary hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-hidden" href="/membership-overview"><span className="relative z-10">Become a Member</span><div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"/></Link></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomeLowerSections() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-10 lg:py-16">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-3 text-center font-manuale">Textile Market Updates</h2>
          <p className="text-center text-gray-600 mb-8">Real-Time Pricing Insights on Industry Materials.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketGroups.map((group) => <PriceCard key={group.title} {...group} />)}
          </div>
        </div>
      </section>
      <ResponsibilitySection />
      <WideAd />
      <AlumniSection />
      <GallerySection />
      <MembershipCta />
    </>
  );
}

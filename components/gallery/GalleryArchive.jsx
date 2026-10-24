"use client";

import { useState } from "react";

const gallery = [
  ["gallery-01.jpg","Industry & Policy","টেক্সটাইল খাতে উদ্ভাবন ও গবেষণার নতুন দিগন্ত: ITET এবং TIE-এর মধ্যে ঐতিহাসিক MoU স্বাক্ষর!"],
  ["gallery-02.jpg","Highlights","ITET Curated Moment"],
  ["gallery-03.jpg","Council & Leadership","Textile Today highlights the newly elected 15th Council Committee of ITET in their July 2026 edition."],
  ["gallery-04.jpg","Council & Leadership","02 August 2026, IEB Central Leaders and the newly elected ITET Executive Committee met in an exchange of views meeting at the IEB Headquarters."],
  ["gallery-05.jpg","Industry & Policy","On 29 July 2026, ITET officially submitted a policy recommendation paper titled 'Building a Productive, and Innovative Textile Economy for Bangladesh'."],
  ["gallery-06.jpg","Council & Leadership","On 26th June, 2026; Historic Landslide Victory for ITET: Enayet–Sumayel–Nixon (GG) Panel Achieves a Historic Clean Sweep!"],
  ["gallery-07.jpg","Council & Leadership","On 14th July 2026, Engr. Abdus Sobhan, CIP, Managing Director of Auko-Tex Group, extended a warm reception to the newly elected members."],
  ["gallery-08.jpg","Council & Leadership","On 18th July 2026, Leadership transition marks a new chapter for ITET with the Handover & Takeover Ceremony of the 15th Council."],
  ["gallery-09.jpg","Council & Leadership","On July 27, 2026, a delegation from the 15th Central Executive Council of ITET paid a courtesy visit to the Honorable Minister of Textiles and Jute."],
  ["gallery-10.jpg","Council & Leadership","On 1st August 2026, The 15th Council of ITET Bangladesh organized a discussion meeting and prayer program to remember the martyrs of the July Movement."],
  ["gallery-11.jpg","Moments & Archives","Key Activities and Milestones of the ITET Interim Convening Committee"],
];

export default function GalleryArchive() {
  const [visible, setVisible] = useState(6);
  const shown = gallery.slice(0, visible);
  const remaining = Math.max(0, gallery.length - visible);

  return (
    <div className="mx-[5%] py-10 sm:py-12 lg:mx-[5%] lg:py-16 xl:mx-[6%] 2xl:mx-[8%]">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map(([file,category,title], index) => <article key={file} className="group overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-[0_6px_22px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,42,0.12)]"><div className={`relative overflow-hidden bg-neutral-200 ${index % 5 === 0 ? "aspect-[4/5]" : index % 4 === 0 ? "aspect-[4/3]" : "aspect-[5/4]"}`}><img src={`/images/gallery/${file}`} alt={title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]" /><div className="absolute inset-0 bg-gradient-to-t from-[#0f172b]/90 via-[#0f172b]/20 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-90" /><div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">{category}</div><div className="absolute inset-x-0 bottom-0 p-4 sm:p-5"><h2 className="line-clamp-3 text-[15px] font-semibold leading-snug text-white sm:text-base">{title}</h2><div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff6b2d] transition-all duration-300 group-hover:gap-2.5">View photo <span>↗</span></div></div></div></article>)}
      </div>
      {remaining > 0 ? <div className="flex justify-center py-12 sm:py-14"><button type="button" onClick={() => setVisible((v) => Math.min(gallery.length, v + 5))} className="group inline-flex items-center gap-3 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(245,74,0,0.18)] transition-all duration-300 hover:bg-[#d94100] hover:shadow-[0_12px_24px_rgba(245,74,0,0.24)] active:bg-[#c93c00]"><span>Load More Memories</span><span className="rounded bg-white/15 px-2 py-0.5 text-xs">+{remaining}</span><span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span></button></div> : <p className="py-10 text-center text-sm text-gray-400">All available gallery photographs are shown.</p>}
    </div>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";

const gallery = [
  { file:"gallery-01.jpg", category:"Industry & Policy", span:"lg:col-span-3", badge:"ITET TIE- MoU", title:"টেক্সটাইল খাতে উদ্ভাবন ও গবেষণার নতুন দিগন্ত: ITET এবং TIE-এর মধ্যে ঐতিহাসিক MoU স্বাক্ষর!" },
  { file:"gallery-02.jpg", category:"Highlights", span:"lg:col-span-6", title:"ITET Curated Moment" },
  { file:"gallery-03.jpg", category:"Council & Leadership", span:"lg:col-span-3", title:"Textile Today constraint highlights the newly elected 15th Council Committee of ITET in their July 2026 edition (Page 25). We extend our sincere gratitude to Textile Today for featuring our leadership team. The 15th Council Committee remains committed to driving professional excellence, and sustainable growth across the textile engineering community." },
  { file:"gallery-04.jpg", category:"Council & Leadership", span:"lg:col-span-4", badge:"02 August 2026", title:"02 August 2026, IEB Central Leaders and the newly elected ITET Executive Committee met in an exchange of views meeting, at the IEB Headquarters, chaired by IEB President and RAJUK Chairman Engr. Mohammad Riazul Islam (Riju)." },
  { file:"gallery-05.jpg", category:"Industry & Policy", span:"lg:col-span-4", badge:"On 29 July", title:"On 29 July 2026, ITET officially submitted a comprehensive and timely policy recommendation paper titled 'Building a Productive, and Innovative Textile Economy for Bangladesh' to the office of Honorable Prime Minister Tarique Rahman." },
  { file:"gallery-06.jpg", category:"Council & Leadership", span:"lg:col-span-4", title:"On 26th June, 2026; Historic Landslide Victory for ITET: Enayet–Sumayel–Nixon (GG) Panel Achieves a Historic Clean Sweep!" },
  { file:"gallery-07.jpg", category:"Council & Leadership", span:"lg:col-span-6", title:"On 14th July 2026, Engr. Abdus Sobhan, CIP, the honorable Managing Director of Auko-Tex Group, extended a warm reception, heartiest greetings, and congratulations through a grand event to the newly elected members following their historic victory in the 15th Central Executive Council election of ITET." },
  { file:"gallery-08.jpg", category:"Council & Leadership", span:"lg:col-span-6", badge:"On 18th July", title:"On 18th July 2026, Leadership transition marks a new chapter for ITET. The Institution of Textile Engineers & Technologists (ITET), officially held its Handover & Takeover Ceremony, marking the transition to the 15th Council." },
  { file:"gallery-09.jpg", category:"Council & Leadership", span:"lg:col-span-4", badge:"On July 27", title:"On July 27, 2026, a newly elected delegation from the 15th Central Executive Council of The Institution of Textile Engineers and Technologists (ITET), led by its Honorable President Engr. Md. Enayet Hossain, paid a courtesy visit to Khandaker Abdul Muktadir, Honorable Minister of Textiles and Jute, at his residence." },
  { file:"gallery-10.jpg", category:"Council & Leadership", span:"lg:col-span-4", title:"On 1st August 2026, The 15th Council of ITET Bangladesh organized a discussion meeting and prayer program to remember the martyrs of the July Movement and pray for the forgiveness of their souls." },
  { file:"gallery-11.jpg", category:"Council & Leadership", span:"lg:col-span-4", title:"On 1st August 2026, The 15th Council of ITET Bangladesh organized a discussion meeting and prayer program to remember the martyrs of the July Movement and pray for the forgiveness of their souls." },
  { file:"gallery-12.jpg", category:"Moments & Archives", span:"lg:col-span-3", title:"Key Activities and Milestones of the ITET Interim Convening Committee" },
  { file:"gallery-13.jpg", category:"Moments & Archives", span:"lg:col-span-6", title:"Key Activities and Milestones of the ITET Interim Convening Committee" },
  { file:"gallery-14.jpg", category:"Moments & Archives", span:"lg:col-span-3", title:"ITET Gallery" },
  { file:"gallery-15.jpg", category:"Moments & Archives", span:"lg:col-span-4", title:"Key Activities and Milestones of the ITET Interim Convening Committee" },
  { file:"gallery-16.jpg", category:"Moments & Archives", span:"lg:col-span-4", title:"Key Activities and Milestones of the ITET Interim Convening Committee" },
  { file:"gallery-17.jpg", category:"Moments & Archives", span:"lg:col-span-4", title:"Key Activities and Milestones of the ITET Interim Convening Committee" },
  { file:"gallery-18.jpg", category:"Moments & Archives", span:"lg:col-span-6", title:"Key Activities and Milestones of the ITET Interim Convening Committee" },
  { file:"gallery-19.jpg", category:"Moments & Archives", span:"lg:col-span-6", title:"ITET Gallery" },
  { file:"gallery-20.jpg", category:"Moments & Archives", span:"lg:col-span-4", title:"Key Activities and Milestones of the ITET Interim Convening Committee" },
  { file:"gallery-21.jpg", category:"Moments & Archives", span:"lg:col-span-4", title:"Key Activities and Milestones of the ITET Interim Convening Committee" },
  { file:"gallery-22.jpg", category:"Moments & Archives", span:"lg:col-span-4", title:"Key Activities and Milestones of the ITET Interim Convening Committee" },
  ...Array.from({ length: 24 }, (_, index) => {
    const number = index + 23;
    const pattern = ["lg:col-span-3","lg:col-span-6","lg:col-span-3","lg:col-span-4","lg:col-span-4","lg:col-span-4","lg:col-span-6","lg:col-span-6","lg:col-span-4","lg:col-span-4","lg:col-span-4"];
    return {
      file: `gallery-${String(number).padStart(2, "0")}.jpg`,
      category: "Moments & Archives",
      span: pattern[index % pattern.length],
      title: index % 5 === 1 ? "ITET Gallery" : "Key Activities and Milestones of the ITET Interim Convening Committee",
    };
  }),
];

export default function GalleryArchive() {
  const [visible, setVisible] = useState(22);
  const [selected, setSelected] = useState(null);
  const shown = gallery.slice(0, visible);
  const remaining = Math.max(0, gallery.length - visible);

  const moveSelection = useCallback((direction) => {
    setSelected((current) => {
      if (!current || shown.length === 0) return current;
      const index = shown.findIndex((item) => item.file === current.file);
      return shown[(index + direction + shown.length) % shown.length];
    });
  }, [shown]);

  useEffect(() => {
    if (!selected) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") moveSelection(1);
      if (event.key === "ArrowLeft") moveSelection(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, moveSelection]);

  return (
    <>
      <section className="pt-8 sm:pt-10">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="mb-6 flex items-center justify-between px-1 text-xs text-neutral-500 sm:text-sm">
            <span>Showing <strong className="font-semibold text-neutral-900">{shown.length}</strong> of {gallery.length} curated moments</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 md:grid-cols-3 md:gap-4 lg:grid-cols-12">
            {shown.map((item) => (
              <button type="button" onClick={() => setSelected(item)} key={item.file} className={`group relative h-[165px] cursor-pointer overflow-hidden rounded-md bg-neutral-200/90 text-left shadow-[0_2px_10px_-3px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)] xs:h-[190px] sm:h-[240px] sm:rounded-lg md:h-[280px] lg:h-[360px] ${item.span}`}>
                <img src={`/images/gallery/${item.file}`} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {item.badge ? <div className="absolute bottom-3 left-3 z-10 hidden transition-all duration-300 group-hover:-translate-y-0.5 sm:bottom-4 sm:left-4 sm:block"><div className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-neutral-900 shadow-[0_4px_16px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all hover:bg-white sm:px-3.5 sm:py-2 sm:text-xs"><span className="max-w-[120px] truncate tracking-tight sm:max-w-[180px]">{item.badge}</span><span>↗</span></div></div> : null}

                <div className="absolute right-2.5 top-2.5 z-10 -translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:right-3 sm:top-3"><span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/50 p-1.5 text-white backdrop-blur-md transition-colors hover:bg-black/70 sm:p-2">⛶</span></div>
                <div className="absolute left-2.5 top-2.5 z-10 -translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-3 sm:top-3"><span className="rounded-full border border-white/10 bg-black/50 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-md sm:px-2.5 sm:py-1 sm:text-[10px]">{item.category}</span></div>

                <div className={`absolute inset-x-0 bottom-0 z-10 translate-y-2 p-2.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4 ${item.badge ? "sm:bottom-14" : ""}`}>
                  <h4 className="line-clamp-2 text-[11px] font-medium leading-tight text-white drop-shadow-sm sm:text-sm">{item.title}</h4>
                  <div className="mt-1 flex items-center gap-1 text-[9.5px] font-semibold text-primary sm:text-[11px]"><span>View photo</span><span>↗</span></div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-14 text-center">
            {remaining > 0 ? (
              <button type="button" onClick={() => setVisible((value) => Math.min(gallery.length, value + 15))} className="group inline-flex items-center gap-2.5 rounded-md bg-secondary px-5 py-3 text-sm font-medium text-white shadow-lg shadow-neutral-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-primary/20">
                <span>Load More Memories</span><span className="rounded-full bg-white/20 px-2 py-0.5 text-xs text-white/90">+{Math.min(15, remaining)}</span><span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            ) : (
              <div className="border-t border-neutral-200/70 pt-8"><p className="text-xs font-medium tracking-wide text-neutral-400 sm:text-sm">✦ You have explored all {gallery.length} curated photographs in this collection ✦</p></div>
            )}
          </div>
        </div>
      </section>

      {selected ? <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-3 sm:p-6" role="dialog" aria-modal="true" aria-label="Gallery image viewer" onClick={() => setSelected(null)}>
        <button type="button" onClick={(event) => { event.stopPropagation(); moveSelection(-1); }} className="absolute left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white backdrop-blur transition hover:bg-white/20 sm:left-6">‹</button>
        <div className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-[#0b1220] shadow-2xl" onClick={(event) => event.stopPropagation()}>
          <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black"><img src={`/images/gallery/${selected.file}`} alt={selected.title} className="max-h-[76vh] w-auto max-w-full object-contain" /><button type="button" onClick={() => setSelected(null)} className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition hover:bg-black/80">✕</button></div>
          <div className="border-t border-white/10 p-4 sm:p-5"><span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">{selected.category}</span><p className="mt-2 text-sm font-medium leading-6 text-white sm:text-base">{selected.title}</p><p className="mt-2 text-xs text-white/45">Use ← → arrow keys to browse • Esc to close</p></div>
        </div>
        <button type="button" onClick={(event) => { event.stopPropagation(); moveSelection(1); }} className="absolute right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white backdrop-blur transition hover:bg-white/20 sm:right-6">›</button>
      </div> : null}
    </>
  );
}

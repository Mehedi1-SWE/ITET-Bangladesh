"use client";

import { useMemo, useState } from "react";

const notices = [
  { date: "Oct 20", iso: "2026-10-20", category: "General", title: "আইটিইটি বাংলাদেশের মহাসচিবের বিদেশে অবস্থানকালীন দায়িত্ব হস্তান্তর প্রসঙ্গে", attached: true },
  { date: "Oct 19", iso: "2026-10-19", category: "General", title: "ITET Membership Renewal & Revised Fee Notice", attached: false },
  { date: "Oct 19", iso: "2026-10-19", category: "General", title: "ITET Membership Announcement", attached: true },
  { date: "Oct 17", iso: "2026-10-17", category: "General", title: "শোকবার্তা", attached: true },
  { date: "Sep 14", iso: "2026-09-14", category: "General", title: "তিতাস গ্যাসকে আইটিইটির প্রস্তাবনা।", attached: true },
  { date: "Aug 23", iso: "2026-08-23", category: "General", title: "বস্ত্র খাতের উন্নয়ন ও সংস্কারে বস্ত্র অধিদপ্তরের মহাপরিচালকের সাথে ITET-এর ১৫তম কাউন্সিলের ফলপ্রসূ বৈঠক", attached: true },
];

export default function NoticesArchive() {
  const [search, setSearch] = useState("");
  const [range, setRange] = useState("All");

  const visible = useMemo(() => notices.filter((notice) => {
    const q = search.toLowerCase();
    const matches = notice.title.toLowerCase().includes(q) || notice.category.toLowerCase().includes(q);
    if (!matches) return false;
    if (range === "October") return notice.iso.startsWith("2026-10");
    if (range === "Earlier") return notice.iso < "2026-10-01";
    return true;
  }), [search, range]);

  return (
    <section className="bg-[#fbfaf7] py-10 sm:py-14">
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-secondary">Notice Center</h2>
          <p className="mt-1 text-sm text-gray-500">Filter by date intervals, categories, or search circular titles</p>
          <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]">
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search notices..." className="h-11 rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10" />
            <div className="flex flex-wrap gap-2">
              {["All","October","Earlier"].map((item) => <button key={item} type="button" onClick={() => setRange(item)} className={`h-11 rounded-lg px-4 text-xs font-semibold transition ${range === item ? "bg-primary text-white" : "border border-gray-200 bg-white text-gray-600 hover:text-primary"}`}>{item}</button>)}
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-4">
          {visible.map((notice) => (
            <article key={notice.date + notice.title} className="group grid gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_6px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-orange-200 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] sm:grid-cols-[78px_1fr_auto] sm:items-center">
              <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-secondary text-white">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-orange-300">{notice.date.split(" ")[0]}</span>
                <span className="text-xl font-bold">{notice.date.split(" ")[1]}</span>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">{notice.category}</span>
                  {notice.attached ? <span className="text-[11px] text-gray-400">• Attached</span> : null}
                </div>
                <h3 className="text-sm font-semibold leading-6 text-secondary sm:text-base">{notice.title}</h3>
              </div>
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 transition hover:border-primary hover:bg-orange-50 hover:text-primary">View <span>→</span></button>
            </article>
          ))}
          {visible.length === 0 ? <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center text-sm text-gray-500">No notices found.</div> : null}
        </div>
      </div>
    </section>
  );
}

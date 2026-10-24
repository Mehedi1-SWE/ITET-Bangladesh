"use client";

import { useMemo, useState } from "react";

const notices = [
  { date: "Oct 20", iso: "2026-10-20", category: "General", title: "আইটিইটি বাংলাদেশের মহাসচিবের বিদেশে অবস্থানকালীন দায়িত্ব হস্তান্তর প্রসঙ্গে", attached: true, body: "Official ITET circular regarding transfer of responsibilities during the Secretary General's stay abroad." },
  { date: "Oct 19", iso: "2026-10-19", category: "General", title: "ITET Membership Renewal & Revised Fee Notice", attached: false, body: "ITET members are requested to update their profiles, renew membership, and complete necessary member-card procedures within the announced period. Revised membership fees are scheduled to take effect from January 1, 2027." },
  { date: "Oct 19", iso: "2026-10-19", category: "General", title: "ITET Membership Announcement", attached: true, body: "Official membership announcement from ITET Bangladesh." },
  { date: "Oct 17", iso: "2026-10-17", category: "General", title: "শোকবার্তা", attached: true, body: "Official condolence notice from ITET Bangladesh." },
  { date: "Sep 14", iso: "2026-09-14", category: "General", title: "তিতাস গ্যাসকে আইটিইটির প্রস্তাবনা।", attached: true, body: "Official ITET proposal and institutional communication." },
  { date: "Aug 23", iso: "2026-08-23", category: "General", title: "বস্ত্র খাতের উন্নয়ন ও সংস্কারে বস্ত্র অধিদপ্তরের মহাপরিচালকের সাথে ITET-এর ১৫তম কাউন্সিলের ফলপ্রসূ বৈঠক", attached: true, body: "Official update regarding the productive meeting of ITET's 15th Council with the Director General of the Department of Textiles." },
];

export default function NoticesArchive() {
  const [search, setSearch] = useState("");
  const [range, setRange] = useState("All");
  const [category, setCategory] = useState("All Categories");
  const [selected, setSelected] = useState(null);

  const visible = useMemo(() => notices.filter((notice) => {
    const q = search.trim().toLowerCase();
    const matchesSearch = !q || notice.title.toLowerCase().includes(q) || notice.category.toLowerCase().includes(q);
    const matchesCategory = category === "All Categories" || notice.category === category;
    if (!matchesSearch || !matchesCategory) return false;

    const date = new Date(notice.iso + "T00:00:00");
    const now = new Date("2026-10-24T12:00:00");
    if (range === "Today") return notice.iso === "2026-10-24";
    if (range === "This Week") {
      const start = new Date("2026-10-19T00:00:00");
      const end = new Date("2026-10-26T00:00:00");
      return date >= start && date < end;
    }
    if (range === "Earlier") return date < new Date("2026-10-19T00:00:00");
    return true;
  }), [search, range, category]);

  return (
    <>
      <section className="bg-[#fbfaf7] py-8 sm:py-10">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-secondary">Notice Center</h2>
            <p className="mt-1 text-sm text-gray-500">Filter by date intervals, categories, or search circular titles</p>
            <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto_180px]">
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search notices..." className="h-11 rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10" />
              <div className="flex flex-wrap gap-2">
                {["All","Today","This Week","Earlier"].map((item) => <button key={item} type="button" onClick={() => setRange(item)} className={`h-11 rounded-lg px-4 text-xs font-semibold transition ${range === item ? "bg-primary text-white" : "border border-gray-200 bg-white text-gray-600 hover:text-primary"}`}>{item}</button>)}
              </div>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="h-11 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-600 outline-none focus:border-primary">
                <option>All Categories</option>
                <option>General</option>
              </select>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold">
              <CountPill label="All Notices" count={6} active />
              <CountPill label="Official Circulars" count={0} />
              <CountPill label="Academic & Tech" count={0} />
              <CountPill label="Holidays" count={0} />
              <CountPill label="General" count={6} />
              <CountPill label="Events" count={0} />
              <CountPill label="Grants & Fellowship" count={0} />
              <CountPill label="Exam & Assessment" count={0} />
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
                  </div>
                  <h3 className="text-sm font-semibold leading-6 text-secondary sm:text-base">{notice.title}</h3>
                  {notice.attached ? <button type="button" onClick={() => setSelected(notice)} className="mt-2 text-xs font-semibold text-blue-600 hover:underline">Download Image</button> : null}
                </div>
                <button type="button" onClick={() => setSelected(notice)} className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 transition hover:border-primary hover:bg-orange-50 hover:text-primary">View <span>→</span></button>
              </article>
            ))}
            {visible.length === 0 ? <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center text-sm text-gray-500">No notices found.</div> : null}
          </div>
        </div>
      </section>

      {selected ? <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" onClick={() => setSelected(null)}>
        <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-start justify-between gap-5"><div><span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">{selected.category}</span><h2 className="mt-3 text-xl font-semibold leading-8 text-secondary">{selected.title}</h2><p className="mt-1 text-xs text-gray-400">{selected.date}, 2026</p></div><button type="button" onClick={() => setSelected(null)} className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-600">✕</button></div>
          <div className="my-6 h-px bg-gray-100" />
          <p className="text-sm leading-7 text-gray-600">{selected.body}</p>
          {selected.attached ? <div className="mt-6 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 text-xs text-gray-500">Attachment is listed on the official notice. Local attachment file is not included in the current repository snapshot.</div> : null}
        </div>
      </div> : null}
    </>
  );
}

function CountPill({ label, count, active = false }) {
  return <span className={`rounded-full border px-3 py-1.5 ${active ? "border-primary bg-orange-50 text-primary" : "border-gray-200 bg-white text-gray-500"}`}>{label} <b>{count}</b></span>;
}

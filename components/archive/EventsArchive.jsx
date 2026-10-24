"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const events = [
  {
    title: "Installation Ceremony of the 15th ITET Council (2026–2028)",
    date: "Sep 26, 2026",
    month: "SEP",
    day: "26",
    time: "07:00 PM - 11:00 PM",
    location: "গল্ফ গার্ডেন, আর্মি গল্ফ ক্লাব",
    price: "৳0",
    tag: "Members Exclusive",
    status: "Closed",
    deadline: "24 Sept 2026",
  },
];

export default function EventsArchive() {
  const [search, setSearch] = useState("");
  const [membersOnly, setMembersOnly] = useState(false);

  const visible = useMemo(() => events.filter((event) => {
    const matchesSearch = (event.title + " " + event.location).toLowerCase().includes(search.toLowerCase());
    return matchesSearch && (!membersOnly || event.tag === "Members Exclusive");
  }), [search, membersOnly]);

  return (
    <section className="bg-[#fbfaf7] py-10 sm:py-14">
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="mb-8 grid gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_auto_auto]">
          <div className="relative">
            <svg viewBox="0 0 24 24" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search events, topic or city..." className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10" />
          </div>
          <button type="button" onClick={() => setMembersOnly((v) => !v)} className={`h-11 rounded-lg border px-4 text-sm font-medium transition ${membersOnly ? "border-primary bg-primary text-white" : "border-gray-200 bg-white text-gray-700 hover:border-primary/40 hover:text-primary"}`}>Members Only</button>
          <span className="flex h-11 items-center justify-center rounded-lg bg-gray-50 px-4 text-sm font-medium text-gray-500">{visible.length} event{visible.length === 1 ? "" : "s"}</span>
        </div>

        <div className="space-y-5">
          {visible.map((event) => (
            <article key={event.title} className="group grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.09)] md:grid-cols-[110px_1fr_auto]">
              <div className="flex flex-row items-center justify-center gap-2 bg-secondary px-5 py-5 text-white md:flex-col md:gap-0">
                <span className="text-xs font-bold tracking-[0.18em] text-orange-300">{event.month}</span>
                <span className="font-manuale text-4xl font-bold">{event.day}</span>
                <span className="text-[11px] text-white/60">2026</span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">{event.tag}</span>
                  <span className="text-sm font-semibold text-primary">{event.price}</span>
                </div>
                <Link href="/events/6aa8fbc9e68ea0aea6623f9a" className="mt-3 block text-lg font-semibold leading-snug text-secondary transition hover:text-primary sm:text-xl">{event.title}</Link>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-500 sm:text-sm">
                  <span>◷ {event.time}</span>
                  <span>⌖ {event.location}</span>
                  <span>Reg Deadline: {event.deadline}</span>
                </div>
              </div>
              <div className="flex items-center justify-center border-t border-gray-100 p-5 md:border-l md:border-t-0">
                <Link href="/events/6aa8fbc9e68ea0aea6623f9a" className="rounded-lg bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-500 transition hover:bg-primary hover:text-white">View Event</Link>
              </div>
            </article>
          ))}
          {visible.length === 0 ? <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center text-sm text-gray-500">No events match your filters.</div> : null}
        </div>
      </div>
    </section>
  );
}

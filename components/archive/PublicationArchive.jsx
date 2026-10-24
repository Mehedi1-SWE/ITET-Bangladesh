"use client";

import { useState } from "react";

const types = ["All Types","Journal Articles","Theses & Dissertations","Conference Papers","Book Chapters","Research Articles","Review Papers","Whitepapers"];

export default function PublicationArchive() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All Types");

  return (
    <section className="bg-[#fbfaf7] py-10 sm:py-14">
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-xl font-semibold text-secondary">Scholarly Archive</h2>
          <p className="mt-1 text-sm text-gray-500">Explore articles, filter by discipline, category, and year</p>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search title, author, keyword, institution..." className="mt-5 h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10" />
          <div className="mt-4 flex flex-wrap gap-2">
            {types.map((item) => <button type="button" key={item} onClick={() => setType(item)} className={`rounded-full px-3 py-2 text-[11px] font-semibold transition ${type === item ? "bg-primary text-white" : "border border-gray-200 bg-white text-gray-600 hover:border-primary/40 hover:text-primary"}`}>{item}</button>)}
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-20 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-primary">⌕</div>
          <h3 className="mt-4 text-lg font-semibold text-secondary">No publications available yet</h3>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-gray-500">Showing 0 of 0 publications. New scholarly works will appear here when they are published.</p>
          {(search || type !== "All Types") ? <button type="button" onClick={() => { setSearch(""); setType("All Types"); }} className="mt-5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white">Clear filters</button> : null}
        </div>
      </div>
    </section>
  );
}

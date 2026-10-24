"use client";

import { useState } from "react";

export default function JobsArchive() {
  const [search, setSearch] = useState("");
  return (
    <section className="bg-[#fbfaf7] py-10 sm:py-14">
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="grid gap-3 md:grid-cols-[1fr_auto]">
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search job title, company or location..." className="h-11 rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10" />
            <button type="button" className="h-11 rounded-lg bg-secondary px-5 text-xs font-semibold text-white transition hover:bg-primary">Search Jobs</button>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-20 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-xl text-primary">⌁</div>
          <h3 className="mt-4 text-lg font-semibold text-secondary">No active job circulars</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-500">Career opportunities published by ITET and partner organizations will appear here.</p>
        </div>
      </div>
    </section>
  );
}

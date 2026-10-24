"use client";

import { useState } from "react";

const types = ["All Types","Journal Articles","Theses & Dissertations","Conference Papers","Book Chapters","Research Articles","Review Papers","Whitepapers"];

export default function PublicationArchive() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All Types");
  const [discipline, setDiscipline] = useState("All Disciplines");
  const [year, setYear] = useState("All Years");
  const [institution, setInstitution] = useState("All Institutions");

  return (
    <section className="bg-[#fbfaf7] py-8 sm:py-10">
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-xl font-semibold text-secondary">Scholarly Archive</h2>
          <p className="mt-1 text-sm text-gray-500">Explore articles, filter by discipline, category, and year</p>

          <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_210px]">
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search title, author, keyword, institution..." className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10" />
            <select value={discipline} onChange={(e) => setDiscipline(e.target.value)} className="h-11 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-600 outline-none focus:border-primary">
              <option>All Disciplines</option>
            </select>
          </div>

          <div className="mt-4">
            <span className="mr-2 text-xs font-semibold text-gray-500">Type:</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {types.map((item) => <button type="button" key={item} onClick={() => setType(item)} className={`rounded-full px-3 py-2 text-[11px] font-semibold transition ${type === item ? "bg-primary text-white" : "border border-gray-200 bg-white text-gray-600 hover:border-primary/40 hover:text-primary"}`}>{item}</button>)}
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <select value={year} onChange={(e) => setYear(e.target.value)} className="h-11 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-600 outline-none focus:border-primary">
              <option>All Years</option>
            </select>
            <select value={institution} onChange={(e) => setInstitution(e.target.value)} className="h-11 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-600 outline-none focus:border-primary">
              <option>All Institutions</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 text-sm">
          <span className="text-gray-500">Showing 0 of 0 publications</span>
          {(search || type !== "All Types" || discipline !== "All Disciplines" || year !== "All Years" || institution !== "All Institutions") ? (
            <button type="button" onClick={() => { setSearch(""); setType("All Types"); setDiscipline("All Disciplines"); setYear("All Years"); setInstitution("All Institutions"); }} className="text-xs font-semibold text-primary hover:underline">Clear filters</button>
          ) : null}
        </div>

        <div className="mt-10 flex min-h-[180px] items-center justify-center">
          <div className="text-center">
            <span className="itet-square-loader mx-auto block" aria-hidden="true" />
            <p className="mt-5 text-sm text-gray-500">Loading research publications...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

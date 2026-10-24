"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import members from "@/data/welfare-members.json";

function WelfareCard({ member, onClick }) {
  return (
    <button type="button" onClick={() => onClick(member)} className="group overflow-hidden rounded-xl border border-gray-100 bg-white text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-100 hover:shadow-xl">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
        <Image src={member.image} alt={member.name} fill sizes="(max-width:640px) 50vw,(max-width:1024px) 25vw,16vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]" />
      </div>
      <div className="px-2.5 py-3">
        <p className="mb-1 line-clamp-2 text-[10px] font-semibold uppercase leading-tight tracking-wide text-primary sm:text-[11px]">{member.role}</p>
        <h3 className="line-clamp-2 text-[12px] font-bold leading-tight text-gray-800 transition-colors group-hover:text-primary sm:text-[13px]">{member.name}</h3>
      </div>
    </button>
  );
}

function ProfileModal({ member, onClose }) {
  if (!member) return null;
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-500" aria-label="Close profile">✕</button>
        <div className="relative mx-auto aspect-[4/5] w-40 overflow-hidden rounded-xl bg-gray-100">
          <Image src={member.image} alt={member.name} fill sizes="160px" className="object-cover object-top" />
        </div>
        <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">{member.role}</p>
        <h2 className="mt-2 text-xl font-bold leading-snug text-gray-900">{member.name}</h2>
        <p className="mt-4 text-xs leading-6 text-gray-500">{member.category.toLowerCase().includes("trustee") ? "Board of Trustees" : "Welfare Trust Executive Member"} • ITET Bangladesh</p>
      </div>
    </div>
  );
}

function SectionTitle({ children, accent = false }) {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
      <div className="relative flex justify-center text-xs uppercase"><span className={`flex items-center gap-1.5 bg-white px-4 font-bold tracking-wider ${accent ? "text-gray-600" : "text-gray-500"}`}><span className="text-primary">♥</span>{children}</span></div>
    </div>
  );
}

export default function WelfareMembers() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const trustees = useMemo(() => members.filter((member) => member.category.toLowerCase().includes("trustee")), []);
  const executives = useMemo(() => members.filter((member) => !member.category.toLowerCase().includes("trustee")), []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return null;
    return members.filter((member) => member.name.toLowerCase().includes(needle) || member.role.toLowerCase().includes(needle) || member.category.toLowerCase().includes(needle));
  }, [query]);

  return (
    <>
      <section className="relative overflow-hidden py-6 md:py-10">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="relative rounded-3xl border border-primary/20 bg-white/90 p-4 shadow-xl shadow-primary/5 backdrop-blur-sm sm:p-7 md:p-10 lg:p-12">
            <div className="absolute -top-1 left-8 right-8 h-2 rounded-t-full bg-gradient-to-r from-primary via-yellow-500 to-primary opacity-80" />
            <div className="mx-auto mb-8 max-w-md md:mb-12">
              <div className="relative flex items-center">
                <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-3.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by trustee name or role..." className="w-full rounded-full border border-gray-200 bg-gray-50/80 py-2 pl-10 pr-9 text-xs shadow-inner outline-none transition-all hover:bg-gray-50 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 sm:text-sm" />
                {query ? <button type="button" onClick={() => setQuery("")} className="absolute right-3 rounded-full p-0.5 text-xs text-gray-400 hover:bg-gray-100" aria-label="Clear search">✕</button> : null}
              </div>
            </div>

            {filtered ? (
              <div>
                <div className="mb-5 flex items-center justify-between gap-3"><p className="text-xs text-gray-500">{filtered.length} member{filtered.length === 1 ? "" : "s"} matching “{query}”</p><button type="button" onClick={() => setQuery("")} className="text-xs font-semibold text-primary hover:underline">Show all trustees</button></div>
                {filtered.length ? <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:grid-cols-6">{filtered.map((member) => <WelfareCard key={member.id} member={member} onClick={setSelected} />)}</div> : <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 py-16 text-center"><p className="text-sm font-medium text-gray-600">No trustee or member found matching your search.</p><button type="button" onClick={() => setQuery("")} className="mt-3 inline-flex items-center text-xs font-semibold text-primary hover:underline">Clear Search</button></div>}
              </div>
            ) : (
              <div className="space-y-12">
                {trustees.length ? <div><SectionTitle accent>Board of Trustees</SectionTitle><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:grid-cols-6">{trustees.map((member) => <WelfareCard key={member.id} member={member} onClick={setSelected} />)}</div></div> : null}
                {executives.length ? <div><SectionTitle>Welfare Trust Executive Members</SectionTitle><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:grid-cols-6">{executives.map((member) => <WelfareCard key={member.id} member={member} onClick={setSelected} />)}</div></div> : null}
              </div>
            )}
          </div>
        </div>
      </section>
      <ProfileModal member={selected} onClose={() => setSelected(null)} />
    </>
  );
}

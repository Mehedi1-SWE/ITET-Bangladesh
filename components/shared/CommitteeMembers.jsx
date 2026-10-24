"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import members from "@/data/committee-members.json";

function SafeMemberImage({ src, alt, className = "", priority = false }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-2 text-gray-400">
        <svg viewBox="0 0 24 24" className="mb-1 h-1/3 w-1/3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <span className="line-clamp-1 px-1 text-center text-xs font-medium text-gray-500">{alt}</span>
      </div>
    );
  }

  return <Image src={src} alt={alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw" quality={95} priority={priority} className={`object-cover object-top transition-transform duration-500 group-hover:scale-105 ${className}`} onError={() => setFailed(true)} />;
}

function ZoomIcon({ className = "" }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6M8 11h6"/></svg>;
}

function MemberCard({ member, onClick }) {
  return (
    <div onClick={() => onClick(member)} className="group relative flex cursor-pointer flex-col items-center justify-between rounded-xl border border-gray-200/90 bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg sm:p-2.5">
      <div className="mb-1.5 flex min-h-[32px] w-full items-center justify-center px-1 text-center sm:min-h-[36px]">
        <span className="line-clamp-2 text-[11px] font-semibold leading-tight text-primary sm:text-xs">{member.role}</span>
      </div>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-gray-200/60 bg-gray-100 shadow-inner transition-shadow group-hover:shadow-md">
        <SafeMemberImage src={member.image} alt={member.name} />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ZoomIcon className="h-5 w-5 text-white opacity-0 drop-shadow-md transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>
      <div className="mt-2 flex min-h-[32px] w-full items-start justify-center px-0.5 text-center">
        <h4 className="line-clamp-2 text-xs font-bold leading-tight text-gray-800 transition-colors group-hover:text-primary sm:text-[13px]">{member.name}</h4>
      </div>
    </div>
  );
}

function Spotlight({ member, size = "side", onClick }) {
  if (!member) return null;
  const center = size === "center";
  return (
    <div className={`group flex items-center ${center ? "relative" : ""}`}>
      <div onClick={() => onClick(member)} className={`flex cursor-pointer flex-col items-center text-center transition-all duration-300 ${center ? "hover:-translate-y-1.5" : "hover:-translate-y-1"}`}>
        <div className={`relative aspect-[4/5] overflow-hidden bg-gray-100 transition-all duration-300 ${center ? "w-52 rounded-2xl border-2 border-primary shadow-xl shadow-primary/10 ring-4 ring-primary/20 group-hover:border-primary-dark group-hover:shadow-2xl md:w-56 lg:w-60 xl:w-64" : "w-40 rounded-xl border-2 border-gray-200 shadow-md group-hover:border-primary group-hover:shadow-lg md:w-44 lg:w-48 xl:w-52"}`}>
          <SafeMemberImage src={member.image} alt={member.name} priority />
          <div className={`absolute inset-0 flex items-end justify-center bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${center ? "pb-3" : "pb-2.5"}`}>
            <span className={`flex items-center gap-1.5 rounded-full bg-black/70 text-xs font-medium text-white shadow-sm ${center ? "px-3 py-1" : "px-2.5 py-1"}`}><ZoomIcon className="h-3.5 w-3.5" />{center ? "View Profile" : "View"}</span>
          </div>
        </div>
        <h3 className={`mt-3 font-bold leading-tight ${center ? "max-w-[240px] text-base text-gray-900 md:text-lg" : "max-w-[200px] text-sm text-gray-800 md:text-base"}`}>{member.name}</h3>
      </div>
      <div className="flex self-stretch flex-col items-center justify-center border-r border-dashed border-gray-300 pl-3 lg:pl-5">
        <span className={`select-none whitespace-nowrap text-xs font-semibold uppercase tracking-widest ${center ? "text-primary" : "text-gray-400"}`} style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>{member.role}</span>
      </div>
    </div>
  );
}

function ProfileModal({ member, onClose }) {
  if (!member) return null;
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute right-4 top-4 rounded-full bg-gray-100 p-1.5 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-800" aria-label="Close member profile">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
        <div className="relative mx-auto mb-4 h-44 w-36 overflow-hidden rounded-xl border-2 border-primary/30 bg-gray-100 shadow-md">
          <SafeMemberImage src={member.image} alt={member.name} priority />
        </div>
        <div className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">{member.role}</div>
        <h3 className="text-lg font-bold leading-snug text-gray-900">{member.name}</h3>
        {typeof member.priority === "number" ? <p className="mt-1 text-xs font-medium text-gray-400">Executive Order: #{member.priority}</p> : null}
        <div className="mt-5 flex justify-center border-t border-gray-100 pt-4"><button type="button" onClick={onClose} className="rounded bg-secondary px-5 py-2 text-xs font-semibold text-white shadow-sm shadow-primary/20 transition-colors hover:bg-primary">Close</button></div>
      </div>
    </div>
  );
}

export default function CommitteeMembers() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const sorted = useMemo(() => [...members].sort((a, b) => (a.priority ?? Number.MAX_SAFE_INTEGER) - (b.priority ?? Number.MAX_SAFE_INTEGER)), []);
  const leadership = useMemo(() => ({ center: sorted[0] ?? null, left: sorted[1] ?? null, right: sorted[2] ?? null }), [sorted]);
  const executive = useMemo(() => sorted.length <= 3 ? [] : sorted.slice(3), [sorted]);
  const filtered = useMemo(() => {
    if (!query.trim()) return null;
    const needle = query.toLowerCase();
    return sorted.filter((member) => member.name?.toLowerCase().includes(needle) || member.role?.toLowerCase().includes(needle));
  }, [query, sorted]);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-full max-w-7xl -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/10 via-amber-100/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-amber-100/20 blur-3xl" />
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="relative rounded-3xl border border-primary/20 bg-white/90 p-4 shadow-xl shadow-primary/5 backdrop-blur-sm sm:p-7 md:p-10 lg:p-12">
            <div className="absolute -top-1 left-8 right-8 h-2 rounded-t-full bg-gradient-to-r from-primary via-yellow-500 to-primary opacity-80" />

            <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
              <div className="relative mx-auto mt-6 flex max-w-md items-center">
                <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-3.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by member name or role..." className="w-full rounded-full border border-gray-200 bg-gray-50/80 py-2 pl-10 pr-9 text-xs shadow-inner outline-none transition-all hover:bg-gray-50 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 sm:text-sm" />
                {query ? <button type="button" onClick={() => setQuery("")} className="absolute right-3 rounded-full p-0.5 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-600" aria-label="Clear search"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg></button> : null}
              </div>
            </div>

            {filtered !== null ? (
              <div className="mb-12">
                <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-3">
                  <p className="text-sm font-semibold text-gray-700">Found {filtered.length} member{filtered.length === 1 ? "" : "s"} matching “{query}”</p>
                  <button type="button" onClick={() => setQuery("")} className="text-xs font-semibold text-primary hover:underline">Show full council poster</button>
                </div>
                {filtered.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 py-16 text-center">
                    <svg viewBox="0 0 24 24" className="mx-auto mb-3 h-12 w-12 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <p className="text-sm font-medium text-gray-600">No committee member found matching your search.</p>
                    <button type="button" onClick={() => setQuery("")} className="mt-3 inline-flex items-center text-xs font-semibold text-primary hover:underline">Clear Search</button>
                  </div>
                ) : <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:grid-cols-6">{filtered.map((member) => <MemberCard key={member.id} member={member} onClick={setSelected} />)}</div>}
              </div>
            ) : (
              <>
                {leadership.center ? (
                  <div className="mb-12 md:mb-16">
                    <div className="mx-auto hidden max-w-5xl flex-row items-end justify-center gap-6 md:flex lg:gap-10 xl:gap-12">
                      <Spotlight member={leadership.left} onClick={setSelected} />
                      <Spotlight member={leadership.center} size="center" onClick={setSelected} />
                      <Spotlight member={leadership.right} onClick={setSelected} />
                    </div>

                    <div className="mx-auto flex max-w-sm flex-col items-center gap-6 md:hidden">
                      {leadership.center ? <div onClick={() => setSelected(leadership.center)} className="group flex cursor-pointer flex-col items-center text-center"><div className="relative aspect-[4/5] w-44 overflow-hidden rounded-2xl border-2 border-primary bg-gray-100 shadow-lg ring-4 ring-primary/20"><SafeMemberImage src={leadership.center.image} alt={leadership.center.name} priority /></div><h3 className="mt-2.5 text-base font-bold leading-tight text-gray-900">{leadership.center.name}</h3><p className="mt-0.5 text-xs font-semibold text-primary">{leadership.center.role}</p></div> : null}
                      {leadership.left || leadership.right ? <div className="grid w-full grid-cols-2 gap-4 border-t border-dashed border-gray-200 pt-2">
                        {[leadership.left, leadership.right].filter(Boolean).map((member) => <div key={member.id} onClick={() => setSelected(member)} className="flex cursor-pointer flex-col items-center text-center"><div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border-2 border-gray-200 bg-gray-100 shadow-sm"><SafeMemberImage src={member.image} alt={member.name} /></div><div className="mt-1.5 line-clamp-1 rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-[11px] font-semibold text-primary">{member.role}</div><h3 className="mt-1.5 line-clamp-2 text-xs font-bold leading-tight text-gray-800 sm:text-sm">{member.name}</h3></div>)}
                      </div> : null}
                    </div>
                  </div>
                ) : null}

                <div className="relative my-8"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div><div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 font-semibold tracking-wider text-gray-500">Executive Committee Members</span></div></div>
                {executive.length > 0 ? <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:grid-cols-6">{executive.map((member) => <MemberCard key={member.id} member={member} onClick={setSelected} />)}</div> : !leadership.center ? <div className="py-16 text-center text-sm font-medium text-gray-500">No committee members available at the moment.</div> : null}
              </>
            )}
          </div>
        </div>
      </section>
      <ProfileModal member={selected} onClose={() => setSelected(null)} />
    </>
  );
}

"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const members = [
  {
    name: "Engr. Md. Enayet Hossain",
    role: "President, ITET",
    image: "/images/leadership/president.jpg",
  },
  {
    name: "Engr. A.S.M Hafizur Rahman Nixon",
    role: "Secretary General, ITET",
    image: "/images/leadership/secretary-general.jpg",
  },
];

export default function CommitteeMembers() {
  const [query, setQuery] = useState("");

  const filteredMembers = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return members;
    }

    return members.filter((member) => member.name.toLowerCase().includes(search) || member.role.toLowerCase().includes(search));
  }, [query]);

  return (
    <section className="relative overflow-hidden pb-8 md:pb-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-primary/10 via-amber-100/10 to-transparent pointer-events-none rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-amber-100/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="relative bg-white/90 backdrop-blur-sm border border-primary/20 rounded-3xl p-4 sm:p-7 md:p-10 lg:p-12 shadow-xl shadow-primary/5">
          <div className="absolute -top-1 left-8 right-8 h-2 bg-gradient-to-r from-primary via-yellow-500 to-primary rounded-t-full opacity-80" />

          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
            <div className="mt-2 max-w-md mx-auto relative flex items-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
              <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by member name or role..." className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm bg-gray-50/80 hover:bg-gray-50 focus:bg-white border border-gray-200 focus:border-primary rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner" />
            </div>
          </div>

          {filteredMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
              {filteredMembers.map((member) => (
                <article key={member.name} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                    <Image src={member.image} alt={member.name} fill sizes="(max-width: 640px) 90vw, 360px" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" priority />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute left-4 right-4 bottom-4">
                      <span className="inline-flex rounded-full bg-primary px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-white shadow-sm">{member.role}</span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 text-center">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">{member.name}</h2>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-primary">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-sm text-gray-500">No committee member found for “{query}”.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const schedule = [
  ["06:00 PM - 07:00 PM", "Reception & Registration"],
  ["07:00 PM - 07:05 PM", "Guests take their seats"],
  ["07:05 PM - 07:10 PM", "Recitation from the Holy Quran"],
  ["07:10 PM - 07:15 PM", "National Anthem"],
  ["07:15 PM - 07:20 PM", "Welcome Address"],
  ["07:20 PM - 07:30 PM", "A Journey of Progress — short documentary"],
  ["07:30 PM - 07:45 PM", "Addresses by the Guests of Honour"],
  ["07:45 PM - 08:30 PM", "Addresses by the Special Guests"],
  ["08:30 PM - 08:35 PM", "Address by the Chair"],
  ["08:35 PM - 08:50 PM", "Address by the Chief Guest"],
  ["08:50 PM - 09:10 PM", "Handover of Mementos and Crests"],
  ["09:10 PM - 09:15 PM", "Vote of Thanks"],
  ["09:15 PM - 11:00 PM", "Cultural Program and Dinner"],
];

export const metadata = { title: "Installation Ceremony of the 15th ITET Council | ITET Bangladesh" };

export default function EventDetailsPage() {
  return (
    <section className="bg-[#fbfaf7] py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-6 flex items-center gap-2 text-sm"><Link href="/events" className="font-semibold text-gray-500 transition hover:text-primary">All Events</Link><span className="text-gray-300">/</span><span className="line-clamp-1 text-gray-400">Installation Ceremony of the 15th ITET Council (2026–2028)</span></div>

        <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.07)]">
          <div className="border-b border-gray-100 bg-gradient-to-br from-[#0f172b] to-[#172554] p-7 text-white sm:p-10">
            <div className="flex flex-wrap gap-2"><span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider">ITET Members Exclusive</span><span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-wider">Closed</span><span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-wider">Free Registration</span></div>
            <h1 className="mt-5 max-w-4xl font-manuale text-3xl font-semibold leading-tight sm:text-5xl">Installation Ceremony of the 15th ITET Council (2026–2028)</h1>
            <div className="mt-7 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
              <Meta label="Event Date" value="Sat, 26 Sept 2026" />
              <Meta label="Time Frame" value="07:00 PM - 11:00 PM" />
              <Meta label="Venue & City" value="গল্ফ গার্ডেন, আর্মি গল্ফ ক্লাব" />
              <Meta label="Reg Deadline" value="24 Sept 2026 (Ended)" />
            </div>
          </div>

          <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">About the Event</span>
              <h2 className="mt-2 text-2xl font-semibold text-secondary">A formal installation ceremony for the 15th Council</h2>
              <p className="mt-4 text-sm leading-7 text-gray-600">ITET Bangladesh scheduled the installation of its newly elected 15th Council for the evening of 26 September 2026 at Golf Garden, Army Golf Club, Dhaka. The gathering was intended for ITET members, senior engineers, industry representatives, government officials, academics, and invited guests. Registration closed on 24 September 2026.</p>
              <div className="mt-6 flex flex-wrap gap-2"><span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-primary">Professional Networking</span><span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-primary">Textile Engineering Summit</span><span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-primary">Official Ceremony</span></div>

              <div className="mt-9">
                <h2 className="text-2xl font-semibold text-secondary">Program Schedule</h2>
                <p className="mt-1 text-sm text-gray-500">13 sessions</p>
                <div className="mt-5 divide-y divide-gray-100 rounded-2xl border border-gray-200">
                  {schedule.map(([time,title], index) => <div key={time} className="grid gap-2 p-4 sm:grid-cols-[150px_1fr] sm:items-center"><div className="text-xs font-bold text-primary">{time}</div><div className="flex items-center gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[10px] font-bold text-gray-500">{String(index+1).padStart(2,"0")}</span><span className="text-sm font-medium text-secondary">{title}</span></div></div>)}
                </div>
              </div>
            </div>

            <aside className="space-y-5">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5"><span className="text-xs font-bold uppercase tracking-wider text-gray-400">Venue & Directions</span><h3 className="mt-2 text-lg font-semibold text-secondary">গল্ফ গার্ডেন, আর্মি গল্ফ ক্লাব</h3><p className="mt-1 text-sm text-gray-500">Dhaka • Members only • Free delegate admission</p><a href="https://www.google.com/maps/search/?api=1&query=Army+Golf+Club+Dhaka" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-lg bg-secondary px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-primary">Open Directions →</a></div>
              <div className="rounded-2xl border border-red-100 bg-red-50 p-5"><span className="text-xs font-bold uppercase tracking-wider text-red-500">Registration Status</span><h3 className="mt-2 text-lg font-semibold text-red-800">Registration Closed</h3><p className="mt-2 text-sm leading-6 text-red-700/70">The registration deadline has passed and this event is marked closed.</p></div>
              <div className="rounded-2xl border border-gray-200 bg-white p-5"><span className="text-xs font-bold uppercase tracking-wider text-gray-400">Organized By</span><h3 className="mt-2 text-lg font-semibold text-secondary">ITET Bangladesh</h3><p className="mt-2 text-sm leading-6 text-gray-500">Institution of Textile Engineers & Technologists Central Executive Committee (CEC)</p><Link href="/contact" className="mt-4 inline-flex text-xs font-semibold text-primary hover:underline">Contact Event Secretariat →</Link></div>
            </aside>
          </div>
        </article>
      </div>
    </section>
  );
}

function Meta({ label, value }) { return <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3"><p className="text-[10px] uppercase tracking-wider text-white/45">{label}</p><p className="mt-1 text-xs font-semibold leading-5 text-white">{value}</p></div>; }

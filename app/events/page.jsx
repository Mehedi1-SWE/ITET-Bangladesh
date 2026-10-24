import Link from "next/link";
import ArchiveHero from "@/components/shared/ArchiveHero";
import EventsArchive from "@/components/archive/EventsArchive";

export const metadata = { title: "Events & Seminars | ITET Bangladesh" };

export default function EventsPage() {
  return (
    <div>
      <ArchiveHero eyebrow="ITET Events & Conclaves" count="1 Total Events" before="Conferences, Seminars" accent="& Conclaves of ITET">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm text-gray-500">Showing 1 events</span>
          <Link href="/member-portal" className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-secondary shadow-sm transition hover:border-primary hover:text-primary">My Registered Events</Link>
        </div>
      </ArchiveHero>
      <EventsArchive />
    </div>
  );
}
import ArchiveHero from "@/components/shared/ArchiveHero";
import EventsArchive from "@/components/archive/EventsArchive";

export const metadata = { title: "Events & Seminars | ITET Bangladesh" };

export default function EventsPage() {
  return (
    <div>
      <ArchiveHero eyebrow="ITET Events & Conclaves" count="1 Total Events" before="Conferences, Seminars" accent="& Conclaves of ITET" description="Discover professional gatherings, council programs, seminars, and industry conclaves organized by ITET." />
      <EventsArchive />
    </div>
  );
}

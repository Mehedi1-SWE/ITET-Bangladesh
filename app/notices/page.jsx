import ArchiveHero from "@/components/shared/ArchiveHero";
import NoticesArchive from "@/components/archive/NoticesArchive";

export const metadata = { title: "Official Notices & Circulars | ITET" };

export default function NoticesPage() {
  return (
    <div>
      <ArchiveHero eyebrow="ITET Official Notices" count="6 Total Notices" before="Official Circulars" accent="& Notice Board of ITET" />
      <NoticesArchive />
    </div>
  );
}
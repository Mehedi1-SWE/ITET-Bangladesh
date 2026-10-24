import ArchiveHero from "@/components/shared/ArchiveHero";
import PublicationArchive from "@/components/archive/PublicationArchive";

export const metadata = { title: "Research Publications & Theses | ITET Bangladesh" };

export default function PublicationPage() {
  return (
    <div>
      <ArchiveHero eyebrow="Academic & Research" count="0 Published" before="Research Publications" accent="& Scholarly Works of ITET" description="Browse scholarly articles, research papers, theses, conference works and technical publications from the ITET community." />
      <PublicationArchive />
    </div>
  );
}

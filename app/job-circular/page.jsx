import ArchiveHero from "@/components/shared/ArchiveHero";
import JobsArchive from "@/components/archive/JobsArchive";

export const metadata = { title: "Job Circulars & Career Opportunities | ITET" };

export default function JobCircularPage() {
  return (
    <div>
      <ArchiveHero eyebrow="Career & Opportunities" count="ITET Jobs" before="Job Circulars" accent="& Career Opportunities" description="Explore career opportunities, industry vacancies and professional openings shared with the ITET community." />
      <JobsArchive />
    </div>
  );
}

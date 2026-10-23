import AboutHero from "@/components/shared/AboutHero";
import SupportInquiries from "@/components/shared/SupportInquiries";

export const metadata = {
  title: "Mission & Vision | ITET Bangladesh | ITET Bangladesh",
  description:
    "Our strategic vision, institutional objectives, and steadfast commitment to advancing Bangladesh's textile engineering profession.",
};

export default function MissionVision() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero
        meta="Purpose & Goals"
        before="Strategic Vision"
        accent="& Core Mission"
        after="of ITET"
        description="Our strategic vision, institutional objectives, and steadfast commitment to advancing Bangladesh's textile engineering profession."
      />

      <SupportInquiries />
    </div>
  );
}

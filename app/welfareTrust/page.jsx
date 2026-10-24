import AboutHero from "@/components/shared/AboutHero";
import WelfareMembers from "@/components/shared/WelfareMembers";
import SupportInquiries from "@/components/shared/SupportInquiries";

export const metadata = { title: "ITET Welfare Trust | ITET Bangladesh" };

export default function WelfareTrust() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero meta="Welfare Trust & Leadership" before="Support, Welfare" accent="& Trust Board" after="of ITET" description="A pillar of wisdom, experience, and ethical leadership — the Board of Trustees of ITET ensures the institution stays true to its mission, fosters transparency, and promotes sustainable growth in the textile engineering community." />
      <WelfareMembers />
      <SupportInquiries />
    </div>
  );
}

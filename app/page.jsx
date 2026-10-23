import HomeTopGrid from "@/components/home/HomeTopGrid";
import HomeLowerSections from "@/components/home/HomeLowerSections";
import WelcomePortalModal from "@/components/home/WelcomePortalModal";

export default function Home() {
  return (
    <>
      <WelcomePortalModal />
      <HomeTopGrid />
      <HomeLowerSections />
    </>
  );
}

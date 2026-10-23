import HomeTopGrid from "@/components/home/HomeTopGrid";
import HomeLowerSections from "@/components/home/HomeLowerSections";
import WelcomePortalModal from "@/components/home/WelcomePortalModal";

export const dynamic = "force-dynamic";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 650));

  return (
    <>
      <WelcomePortalModal />
      <HomeTopGrid />
      <HomeLowerSections />
    </>
  );
}

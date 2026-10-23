import HomeTopGrid from "@/components/home/HomeTopGrid";
import HomeLowerSections from "@/components/home/HomeLowerSections";
import WelcomePortalModal from "@/components/home/WelcomePortalModal";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const visualMode = Object.prototype.hasOwnProperty.call(params ?? {}, "visual");

  return (
    <>
      <WelcomePortalModal disabled={visualMode} />
      <HomeTopGrid />
      <HomeLowerSections />
    </>
  );
}

import HomeTopGrid from "@/components/home/HomeTopGrid";
import HomeLowerSections from "@/components/home/HomeLowerSections";

export const dynamic = "force-dynamic";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 650));

  return (
    <>
      <HomeTopGrid />
      <HomeLowerSections />
    </>
  );
}

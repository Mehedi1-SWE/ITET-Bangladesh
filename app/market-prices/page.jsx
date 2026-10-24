import ArchiveHero from "@/components/shared/ArchiveHero";
import MarketArchive from "@/components/market/MarketArchive";

export const metadata = { title: "Textile Market Updates | ITET Bangladesh" };

export default async function MarketPricesPage({ searchParams }) {
  const params = await searchParams;
  const category = typeof params?.category === "string" ? params.category : "yarn";
  return (
    <div>
      <ArchiveHero eyebrow="Market Intelligence" count="Industry Materials" before="Textile Market Updates" accent="& Pricing Insights" description="Browse yarn, chemical, fabric, and accessories pricing listings published for the ITET textile engineering community." />
      <MarketArchive initialCategory={category} />
    </div>
  );
}

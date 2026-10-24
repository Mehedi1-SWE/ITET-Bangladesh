import GalleryArchive from "@/components/gallery/GalleryArchive";

export const metadata = { title: "Gallery | ITET Bangladesh", description: "Explore moments, milestones and memories from ITET Bangladesh." };

export default function GalleryPage() {
  return (
    <section className="bg-[#fbfaf7]">
      <div className="border-b border-black/[0.05] bg-[#f8f7f2]">
        <div className="mx-[5%] py-14 sm:py-16 lg:mx-[5%] lg:py-20 xl:mx-[6%] 2xl:mx-[8%]">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.06] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs"><span className="h-1.5 w-1.5 rounded-full bg-primary" />ITET Visual Archives<span className="text-neutral-400">|</span>46 Photographs</div>
            <h1 className="font-manuale text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#10213d] sm:text-5xl lg:text-6xl">Moments, Milestones<span className="block text-primary">&amp; Memories of ITET</span></h1>
            <div className="mt-5 flex items-center gap-3 text-sm text-neutral-500 sm:text-base"><span className="h-px w-10 bg-primary" />Explore curated photographs from ITET activities and milestones</div>
          </div>
        </div>
      </div>
      <GalleryArchive />
    </section>
  );
}

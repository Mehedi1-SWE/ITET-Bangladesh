import GalleryArchive from "@/components/gallery/GalleryArchive";

export const metadata = { title: "Gallery | ITET Bangladesh", description: "Explore moments, milestones and memories from ITET Bangladesh." };

export default function GalleryPage() {
  return (
    <section className="bg-[#fafaf8] pb-14">
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent pb-8 pt-12 sm:pb-10 sm:pt-16">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-700 md:text-xs">ITET Visual Archives</span>
              <span className="text-gray-300">|</span>
              <span className="text-[10px] font-medium text-gray-500 md:text-xs">46 Photographs</span>
            </div>
            <h1 className="font-manuale text-2xl font-semibold leading-tight tracking-tight text-gray-800 sm:text-4xl md:text-5xl">Moments, Milestones <br/><span className="font-semibold text-primary">&amp; Memories</span> of ITET</h1>
          </div>
        </div>
      </section>
      <GalleryArchive />
    </section>
  );
}

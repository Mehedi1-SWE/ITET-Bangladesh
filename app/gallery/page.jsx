const gallery = [
  {
    file: "gallery-01.jpg",
    category: "Industry & Policy",
    title: "টেক্সটাইল খাতে উদ্ভাবন ও গবেষণার নতুন দিগন্ত: ITET এবং TIE-এর মধ্যে ঐতিহাসিক MoU স্বাক্ষর!",
  },
  {
    file: "gallery-02.jpg",
    category: "Highlights",
    title: "ITET Curated Moment",
  },
  {
    file: "gallery-03.jpg",
    category: "Council & Leadership",
    title: "Textile Today highlights the newly elected 15th Council Committee of ITET in their July 2026 edition.",
  },
  {
    file: "gallery-04.jpg",
    category: "Council & Leadership",
    title: "02 August 2026, IEB Central Leaders and the newly elected ITET Executive Committee met in an exchange of views meeting at the IEB Headquarters.",
  },
  {
    file: "gallery-05.jpg",
    category: "Industry & Policy",
    title: "On 29 July 2026, ITET officially submitted a policy recommendation paper titled 'Building a Productive, and Innovative Textile Economy for Bangladesh'.",
  },
  {
    file: "gallery-06.jpg",
    category: "Council & Leadership",
    title: "On 26th June, 2026; Historic Landslide Victory for ITET: Enayet–Sumayel–Nixon (GG) Panel Achieves a Historic Clean Sweep!",
  },
  {
    file: "gallery-07.jpg",
    category: "Council & Leadership",
    title: "On 14th July 2026, Engr. Abdus Sobhan, CIP, Managing Director of Auko-Tex Group, extended a warm reception to the newly elected members.",
  },
  {
    file: "gallery-08.jpg",
    category: "Council & Leadership",
    title: "On 18th July 2026, Leadership transition marks a new chapter for ITET with the Handover & Takeover Ceremony of the 15th Council.",
  },
  {
    file: "gallery-09.jpg",
    category: "Council & Leadership",
    title: "On July 27, 2026, a delegation from the 15th Central Executive Council of ITET paid a courtesy visit to the Honorable Minister of Textiles and Jute.",
  },
  {
    file: "gallery-10.jpg",
    category: "Council & Leadership",
    title: "On 1st August 2026, The 15th Council of ITET Bangladesh organized a discussion meeting and prayer program to remember the martyrs of the July Movement.",
  },
  {
    file: "gallery-11.jpg",
    category: "Moments & Archives",
    title: "Key Activities and Milestones of the ITET Interim Convening Committee",
  },
];

export const metadata = {
  title: "Gallery | ITET Bangladesh",
  description: "Explore moments, milestones and memories from ITET Bangladesh.",
};

export default function GalleryPage() {
  return (
    <section className="bg-[#fbfaf7]">
      <div className="border-b border-black/[0.05] bg-[#f8f7f2]">
        <div className="mx-[5%] py-14 sm:py-16 lg:mx-[5%] lg:py-20 xl:mx-[6%] 2xl:mx-[8%]">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.06] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              ITET Visual Archives
              <span className="text-neutral-400">|</span>
              46 Photographs
            </div>
            <h1 className="font-manuale text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#10213d] sm:text-5xl lg:text-6xl">
              Moments, Milestones
              <span className="block text-primary">&amp; Memories of ITET</span>
            </h1>
            <div className="mt-5 flex items-center gap-3 text-sm text-neutral-500 sm:text-base">
              <span className="h-px w-10 bg-primary" />
              Showing {gallery.length} curated moments
            </div>
          </div>
        </div>
      </div>

      <div className="mx-[5%] py-10 sm:py-12 lg:mx-[5%] lg:py-16 xl:mx-[6%] 2xl:mx-[8%]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <article key={item.file} className="group overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-[0_6px_22px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,42,0.12)]">
              <div className={`relative overflow-hidden bg-neutral-200 ${index % 5 === 0 ? "aspect-[4/5]" : index % 4 === 0 ? "aspect-[4/3]" : "aspect-[5/4]"}`}>
                <img src={`/images/gallery/${item.file}`} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172b]/90 via-[#0f172b]/20 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md sm:text-[11px]">
                  {item.category}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <h2 className="line-clamp-3 text-[15px] font-semibold leading-snug text-white sm:text-base">{item.title}</h2>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff6b2d] transition-all duration-300 group-hover:gap-2.5">
                    <span>View photo</span>
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center py-12 sm:py-14">
          <button type="button" className="group inline-flex items-center gap-3 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(245,74,0,0.18)] transition-all duration-300 hover:bg-[#d94100] hover:shadow-[0_12px_24px_rgba(245,74,0,0.24)] active:bg-[#c93c00]">
            <span>Load More Memories</span>
            <span className="rounded bg-white/15 px-2 py-0.5 text-xs">+15</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

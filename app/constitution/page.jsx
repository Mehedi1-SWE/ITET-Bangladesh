import AboutHero from "@/components/shared/AboutHero";
import SupportInquiries from "@/components/shared/SupportInquiries";

export const metadata = { title: "Constitution & By-Laws | ITET Bangladesh | ITET Bangladesh" };

export default function Constitution() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero meta="Governance & By-Laws" before="Governance, Charter" accent="& Constitution" after="of ITET" description="The foundational legal framework, democratic electoral processes, and institutional by-laws governing the Institution of Textile Engineers & Technologists." />

      <section className="bg-white py-10 md:py-14">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="font-manuale text-2xl font-semibold leading-tight text-secondary sm:text-3xl md:text-4xl">The Constitution of The Institution of Textile Engineers and Technologists, Bangladesh (ITET)</h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600">This Constitution outlines the mission, structure, and governance of ITET, ensuring transparency, accountability, and excellence in advancing textile engineering and technology.</p>
            </div>

            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-primary">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h6"/></svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">Official Statutory Publication</span>
                    <h3 className="mt-1 text-lg font-semibold text-secondary">Constitution_of_ITET.pdf</h3>
                    <p className="mt-1 text-xs leading-5 text-gray-500">Verified charter covering institutional bylaws, electoral frameworks, and member rights.</p>
                  </div>
                </div>
                <a href="https://drive.google.com/file/d/1cz2MRfMW5BFSC_M8jJ_eWWWu-QQTgbxb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d94100]">Download Full Constitution <span>↓</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SupportInquiries />
    </div>
  );
}

import Link from "next/link";

export const metadata = { title: "Client Portal | ITET Bangladesh" };

export default function ClientPortalPage() {
  return (
    <section className="flex min-h-[620px] items-center justify-center bg-[#070d1d] px-5 py-16 text-white">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold">IT</div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">Client Portal v1.0.0</p>
        <h1 className="mt-3 font-manuale text-4xl font-semibold sm:text-5xl">ITET Bangladesh Client & Partner Portal</h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/60">Under Development — please stay tuned. The advertiser and partner dashboard will be available here.</p>
        <div className="mt-8 flex justify-center gap-3"><Link href="/" className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d94100]">Back to Main Site</Link><Link href="/contact" className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Contact ITET</Link></div>
      </div>
    </section>
  );
}

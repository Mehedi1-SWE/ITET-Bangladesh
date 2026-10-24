import Link from "next/link";

export const metadata = { title: "Query & Answer | ITET Bangladesh" };

export default function QnaPage() {
  return (
    <section className="bg-[#fbfaf7] py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5">
        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Member Support</span>
          <h1 className="mt-3 font-manuale text-4xl font-semibold text-secondary">Query & Answer</h1>
          <p className="mt-3 text-sm leading-7 text-gray-600">For membership, account, event, or institutional questions, contact the ITET Secretariat. Member-specific answers require an active membership account.</p>
          <div className="mt-7 flex flex-wrap gap-3"><Link href="/membership-login" className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white">Member Sign In</Link><Link href="/contact" className="rounded-lg border border-gray-200 px-5 py-3 text-sm font-semibold text-secondary hover:border-primary hover:text-primary">Contact Secretariat</Link></div>
        </div>
      </div>
    </section>
  );
}

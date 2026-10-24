import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[620px] items-center justify-center bg-[#fbfaf7] px-5 py-16">
      <div className="max-w-xl text-center"><span className="font-manuale text-8xl font-bold text-primary/15">404</span><h1 className="-mt-5 font-manuale text-4xl font-semibold text-secondary">Page not found</h1><p className="mt-3 text-sm leading-7 text-gray-600">The page you are looking for may have moved or is not available. Use the main navigation or return to the ITET homepage.</p><div className="mt-7 flex justify-center gap-3"><Link href="/" className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white">Back to Home</Link><Link href="/contact" className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-secondary">Contact ITET</Link></div></div>
    </section>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";

const alumni = {
  "sanjida-islam-tulee": {
    name: "Engr. Sanjida Islam Tulee",
    designation: "Honorable Member of Parliament (MP)",
    image: "/images/alumni/sanjida-islam-tulee.jpg",
  },
  "mahbuba-hakim": {
    name: "Engr. Mahbuba Hakim",
    designation: "Honorable Member of Parliament (MP)",
    image: "/images/alumni/mahbuba-hakim.jpg",
  },
};

export function generateStaticParams() { return Object.keys(alumni).map((slug) => ({ slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const person = alumni[slug];
  return person ? { title: `${person.name} | ITET Alumni` } : {};
}

export default async function AlumniProfilePage({ params }) {
  const { slug } = await params;
  const person = alumni[slug];
  if (!person) notFound();

  return (
    <section className="bg-[#f8f6f0] py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-5">
        <Link href="/#alumni" className="text-sm font-semibold text-gray-500 transition hover:text-primary">← Back to Proud Alumni</Link>
        <div className="mt-6 grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] md:grid-cols-[.85fr_1.15fr]">
          <div className="bg-[#ecebea]"><img src={person.image} alt={person.name} className="h-full min-h-[420px] w-full object-cover object-top" /></div>
          <div className="p-7 sm:p-10"><span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Proud Alumni • ITET Bangladesh</span><h1 className="mt-3 font-manuale text-4xl font-semibold text-secondary sm:text-5xl">{person.name}</h1><p className="mt-3 text-base font-medium text-gray-500">{person.designation}</p><div className="my-7 h-px bg-gray-100" /><h2 className="text-lg font-semibold text-secondary">Profile Overview</h2><p className="mt-3 text-sm leading-7 text-gray-600">This alumni profile is connected to the ITET Proud Alumni section. The frontend is ready for extended biography, career history, achievements, and verified social profiles when those official records are provided.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/contact" className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d94100]">Contact ITET Secretariat</Link><Link href="/gallery" className="rounded-lg border border-gray-200 px-5 py-3 text-sm font-semibold text-secondary transition hover:border-primary hover:text-primary">Explore ITET Gallery</Link></div></div>
        </div>
      </div>
    </section>
  );
}

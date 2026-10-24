import ContactForm from "@/components/contact/ContactForm";

const contacts = [
  ["ADDRESS", "Visit our central office for inquiries & paperwork", "House #6, Road #2, Sector #11, Uttara, Dhaka."],
  ["General Support", "Help with membership portal, account & services", "info@itetbd.net • +880 1715-771454"],
  ["Advertisement Support", "Advertisement, media and publication support", "pressnpublication@itetbd.net • +8801715771454"],
  ["General Correspondence", "Direct communications with General Secretariat", "secretarygeneral@itetbd.net • +8801715771454"],
];

export const metadata = { title: "Contact Us | ITET Bangladesh" };

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-gray-200/70 bg-gradient-to-b from-amber-500/[0.05] via-white to-white py-12 sm:py-16">
        <div className="mx-[5%] text-center md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-700 shadow-sm"><span className="h-2 w-2 rounded-full bg-primary"/>Contact ITET <span className="text-gray-300">|</span><span className="font-medium normal-case text-gray-500">Secretariat & Inquiries</span></div>
          <h1 className="mx-auto mt-4 max-w-4xl font-manuale text-3xl font-semibold leading-tight text-secondary sm:text-5xl">Get in Touch <span className="text-primary">& Contact Secretariat of ITET</span></h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">Have questions about membership, events, or collaboration? Reach out to the Institution of Textile Engineers & Technologists. We are here to assist you.</p>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-10 sm:py-14">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{contacts.map(([title,desc,value]) => <article key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-primary">✦</div><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">{title}</h2><p className="mt-2 text-xs leading-5 text-gray-400">{desc}</p><p className="mt-3 break-words text-sm font-medium leading-6 text-secondary">{value}</p></article>)}</div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"><span className="text-xs font-bold uppercase tracking-wider text-primary">Direct Inquiry</span><h2 className="mt-2 text-2xl font-semibold text-secondary">Send us a Message</h2><p className="mt-2 mb-6 text-sm text-gray-500">Fill out the form below and our administrative team will get back to you promptly.</p><ContactForm /></div>
            <div className="rounded-2xl bg-secondary p-6 text-white sm:p-8"><span className="text-xs font-bold uppercase tracking-wider text-orange-300">Location & Hours</span><h2 className="mt-2 text-2xl font-semibold">Visit Our Office</h2><p className="mt-2 text-sm leading-6 text-white/65">Visit our secretariat in Uttara for in-person support, registration, and consultations.</p><div className="mt-8 space-y-5"><div><p className="text-xs uppercase tracking-wider text-white/45">ITET Central Secretariat</p><p className="mt-1 text-sm">House #6, Road #2, Sector #11, Uttara, Dhaka.</p></div><div><p className="text-xs uppercase tracking-wider text-white/45">Office Working Hours</p><p className="mt-1 text-sm">Saturday – Thursday: 10:00 AM – 6:00 PM</p><p className="mt-1 text-sm text-white/65">Friday: Weekly Holiday</p></div><a href="https://www.google.com/maps/search/?api=1&query=House+6+Road+2+Sector+11+Uttara+Dhaka" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#d94100]">Get Directions →</a></div></div>
          </div>
        </div>
      </section>
    </div>
  );
}

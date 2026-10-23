const partners = [
  { name: "360d SOUL Limited", image: "/images/partners/360d-soul.webp" },
  { name: "EMMTEX Solutions BD Ltd.", image: "/images/partners/emmtex-solutions.webp" },
  { name: "Knit Empir Ltd.", image: "/images/partners/knit-empir.webp" },
  { name: "Texpro Worldno1", image: "/images/partners/texpro-worldno1.webp" },
  { name: "AUKO-TEX Group", image: "/images/partners/auko-tex.webp" },
  { name: "Van Lin Textile Innovations Ltd.", image: "/images/partners/van-lin.webp" },
];

export default function PartnersSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <h2 className="text-center text-[22px] font-semibold leading-tight text-[#252525] sm:text-[26px]">We are proud to work with our valued partners</h2>

        <div className="mt-10 grid grid-cols-2 border-l border-t border-black/10 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div key={partner.name} className="flex min-h-[150px] items-center justify-center border-b border-r border-black/10 bg-white p-5 sm:min-h-[170px] lg:min-h-[180px]">
              <img src={partner.image} alt={partner.name} className="max-h-[92px] w-full max-w-[170px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

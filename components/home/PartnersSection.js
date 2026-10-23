const partners = [
  {
    name: "360d SOUL Limited",
    image: "https://itetbd.net/_next/image?q=75&url=https%3A%2F%2Fres.cloudinary.com%2Fdov6k7xdk%2Fimage%2Fupload%2Fv1789365280%2Fz4w2tnpphbqfifogzghm.webp&w=3840",
  },
  {
    name: "EMMTEX Solutions BD Ltd.",
    image: "https://itetbd.net/_next/image?q=75&url=https%3A%2F%2Fres.cloudinary.com%2Fdov6k7xdk%2Fimage%2Fupload%2Fv1789365281%2Fghsg9xis6ehmjqe3ygow.webp&w=3840",
  },
  {
    name: "Knit Empir Ltd.",
    image: "https://itetbd.net/_next/image?q=75&url=https%3A%2F%2Fres.cloudinary.com%2Fdov6k7xdk%2Fimage%2Fupload%2Fv1789365282%2Fyfnhpmf2tvekprgsxsx9.webp&w=3840",
  },
  {
    name: "Texpro Worldno1",
    image: "https://itetbd.net/_next/image?q=75&url=https%3A%2F%2Fres.cloudinary.com%2Fdov6k7xdk%2Fimage%2Fupload%2Fv1789365283%2Ftxtth9ndbcypx5nwrfo7.webp&w=3840",
  },
  {
    name: "AUKO-TEX Group",
    image: "https://itetbd.net/_next/image?q=75&url=https%3A%2F%2Fres.cloudinary.com%2Fdov6k7xdk%2Fimage%2Fupload%2Fv1789365283%2Fshmhsayunyipq43jgjki.webp&w=3840",
  },
  {
    name: "Van Lin Textile Innovations Ltd.",
    image: "https://itetbd.net/_next/image?q=75&url=https%3A%2F%2Fres.cloudinary.com%2Fdov6k7xdk%2Fimage%2Fupload%2Fv1789365284%2Fc8ha8ag7jkwqjjm2xb0t.webp&w=3840",
  },
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

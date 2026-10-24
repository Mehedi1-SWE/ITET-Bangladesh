const leaders = [
  {
    id: "secretary-general",
    role: "SECRETARY GENERAL, ITET'S MESSAGE",
    quote: "Reform, Modernization & Global Recognition",
    name: "Engr. A.S.M Hafizur Rahman Nixon",
    designation: "Secretary General, ITET",
    image: "/images/leadership/secretary-general.jpg",
    paragraphs: [
      "It is both an honor and a profound responsibility to serve as Secretary General of ITET. Since its establishment, ITET has been the professional home of Bangladesh’s textile engineers—a platform to unite our voices, strengthen our professional identity, and contribute meaningfully to the nation’s textile and apparel sector.",
      "Today Bangladesh is recognized as a global leader in textiles and garments. Behind this success stand thousands of dedicated engineers whose knowledge, innovation, and perseverance continue to drive the industry forward. ITET must preserve its proud legacy while embracing reform, modernization, digital transformation, member empowerment, stronger industry-academia linkage, and global positioning.",
      "ITET belongs to all of us. Its strength comes from active participation and unity. Together, we can transform ITET into a modern, inclusive, and globally recognized organization that reflects the pride and potential of Bangladesh’s textile engineers.",
    ],
  },
  {
    id: "president",
    role: "PRESIDENT, ITET'S MESSAGE",
    quote: "Connecting Textile Engineers, Building a Stronger Future",
    name: "Engr. Md. Enayet Hossain",
    designation: "President, ITET",
    image: "/images/leadership/president.jpg",
    paragraphs: [
      "Bismillahir Rahmanir Rahim. Assalamu Alaikum. It is a proud moment to introduce the official website of the Institution of Textile Engineers & Technologists (ITET). This platform is designed to be the digital home of our members—connecting professionals, sharing knowledge, and strengthening our collective voice.",
      "Through this website, ITET members can stay informed about programs and activities, access member services, explore job opportunities, learn about privileges and benefits, connect with fellow members, and participate in initiatives that shape ITET’s future.",
      "The textile industry faces new challenges and opportunities shaped by sustainability, digitalization, and global competition. ITET will continue to guide and support its members with professionalism, ethics, innovation, and unity.",
    ],
  },
];

export const metadata = { title: "Leadership Messages | ITET Bangladesh" };

export default function LeadershipPage() {
  return (
    <section className="bg-[#fbfaf7] py-12 sm:py-16">
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="mx-auto mb-10 max-w-3xl text-center"><span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Leadership Messages</span><h1 className="mt-2 font-manuale text-4xl font-semibold text-secondary sm:text-5xl">Vision from ITET Leadership</h1></div>
        <div className="space-y-8">
          {leaders.map((leader) => <article id={leader.id} key={leader.id} className="grid scroll-mt-28 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] lg:grid-cols-[320px_1fr]"><div className="bg-secondary"><img src={leader.image} alt={leader.name} className="h-full min-h-[380px] w-full object-cover object-top opacity-95" /></div><div className="p-7 sm:p-10"><span className="text-xs font-bold uppercase tracking-wider text-primary">{leader.role}</span><h2 className="mt-3 font-manuale text-3xl font-semibold text-secondary">{leader.quote}</h2><div className="mt-6 space-y-4">{leader.paragraphs.map((text) => <p key={text} className="text-sm leading-7 text-gray-600">{text}</p>)}</div><div className="mt-7 border-t border-gray-100 pt-5"><h3 className="text-base font-semibold text-secondary">{leader.name}</h3><p className="text-sm text-gray-500">{leader.designation}</p></div></div></article>)}
        </div>
      </div>
    </section>
  );
}

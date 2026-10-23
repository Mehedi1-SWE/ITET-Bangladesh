const contacts = [
  {
    title: "ADDRESS",
    primary: "House #6, Road #2, Sector #11, Uttara, Dhaka.",
    type: "address",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    title: "General Support",
    primary: "info@itetbd.net",
    secondary: "+880 1715-771454",
    email: "info@itetbd.net",
    phone: "+8801715771454",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    title: "Advertisement Support",
    primary: "pressnpublication@itetbd.net",
    secondary: "+8801715771454",
    email: "pressnpublication@itetbd.net",
    phone: "+8801715771454",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M3 11v2a2 2 0 0 0 2 2h1l3 4h2l-1-4h1l8 3V6l-8 3H5a2 2 0 0 0-2 2Z" />
      </svg>
    ),
  },
  {
    title: "General Correspondence",
    primary: "secretarygeneral@itetbd.net",
    secondary: "+8801715771454",
    email: "secretarygeneral@itetbd.net",
    phone: "+8801715771454",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M4 4h16v16H4z" />
        <path d="m4 6 8 6 8-6" />
      </svg>
    ),
  },
];

export default function SupportInquiries() {
  return (
    <section className="border-t border-gray-200 bg-white py-12 md:py-16">
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0Z" />
              <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
            </svg>
            <span>Support &amp; Inquiries</span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-secondary sm:text-3xl md:text-4xl">
            Have Questions? <span className="text-primary">Contact the Secretariat</span>
          </h2>
          <p className="mt-2 text-xs text-gray-600 sm:text-sm">
            Our administrative and membership desk is available to assist with your inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {contacts.map((contact) => (
            <article key={contact.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_16px_35px_rgba(15,23,42,0.08)]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-primary">
                {contact.icon}
              </div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">{contact.title}</h3>

              {contact.type === "address" ? (
                <p className="mt-3 text-sm font-medium leading-6 text-gray-800">{contact.primary}</p>
              ) : (
                <div className="mt-3 space-y-2">
                  <a href={`mailto:${contact.email}`} className="block break-words text-sm font-medium text-gray-800 transition-colors hover:text-primary">
                    {contact.primary}
                  </a>
                  <a href={`tel:${contact.phone}`} className="block text-sm text-gray-500 transition-colors hover:text-primary">
                    {contact.secondary}
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

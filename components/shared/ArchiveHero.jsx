export default function ArchiveHero({ eyebrow, count, before, accent, description, children }) {
  return (
    <section className="relative overflow-hidden border-b border-gray-200/70 bg-gradient-to-b from-amber-500/[0.05] via-white to-white py-12 sm:py-16">
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 shadow-sm ring-1 ring-gray-100">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">{eyebrow}</span>
            {count ? <><span className="text-gray-300">|</span><span className="text-xs font-medium text-gray-500">{count}</span></> : null}
          </div>
          <h1 className="font-manuale text-3xl font-semibold leading-tight tracking-tight text-secondary sm:text-5xl">
            {before}<span className="block text-primary">{accent}</span>
          </h1>
          {description ? <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">{description}</p> : null}
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

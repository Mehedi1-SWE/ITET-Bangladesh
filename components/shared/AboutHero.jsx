export default function AboutHero({ meta, before, accent, after, description, border = true }) {
  return (
    <section className={`relative pt-12 pb-10 sm:pt-16 sm:pb-14 overflow-hidden bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent ${border ? "border-b border-gray-200/70" : ""}`}>
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">About ITET</span>
            <span className="text-gray-300">|</span>
            <span className="text-xs text-gray-500 font-medium">{meta}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold font-manuale tracking-tight text-gray-800 leading-tight">
            {before} <br className="hidden sm:inline" />
            <span className="text-primary font-semibold">{accent}</span>{after ? ` ${after}` : ""}
          </h1>

          <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}

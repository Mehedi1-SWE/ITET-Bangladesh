export default function CouncilLoadingPanel({ type = "committee" }) {
  const isCommittee = type === "committee";
  const count = isCommittee ? 18 : 12;

  return (
    <section className={isCommittee ? "relative overflow-hidden" : "relative overflow-hidden py-6 md:py-10"}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-primary/10 via-amber-100/10 to-transparent pointer-events-none rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-amber-100/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="relative bg-white/90 backdrop-blur-sm border border-primary/20 rounded-3xl p-4 sm:p-7 md:p-10 lg:p-12 shadow-xl shadow-primary/5">
          <div className="absolute -top-1 left-8 right-8 h-2 bg-gradient-to-r from-primary via-yellow-500 to-primary rounded-t-full opacity-80" />

          <div className={isCommittee ? "text-center max-w-4xl mx-auto mb-10 md:mb-14" : "text-center max-w-4xl mx-auto mb-8 md:mb-12"}>
            <div className={isCommittee ? "mt-6 max-w-md mx-auto relative flex items-center" : "mt-2 max-w-md mx-auto relative flex items-center"}>
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" />
              </svg>
              <input
                type="text"
                placeholder={isCommittee ? "Search by member name or role..." : "Search by trustee name or role..."}
                className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm bg-gray-50/80 hover:bg-gray-50 focus:bg-white border border-gray-200 focus:border-primary rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                defaultValue=""
              />
            </div>
          </div>

          <div className="space-y-12 animate-pulse">
            {isCommittee ? (
              <div className="flex justify-center items-end gap-6 max-w-3xl mx-auto pt-6 pb-10">
                <div className="w-40 sm:w-48 h-56 bg-gray-200 rounded-xl" />
                <div className="w-48 sm:w-56 h-64 bg-gray-300 rounded-2xl" />
                <div className="w-40 sm:w-48 h-56 bg-gray-200 rounded-xl" />
              </div>
            ) : (
              <div className="h-6 bg-gray-200 rounded w-48 mx-auto" />
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="h-60 bg-gray-100 rounded-xl border border-gray-200 p-2 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
                  <div className="h-40 bg-gray-200 rounded-lg" />
                  <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

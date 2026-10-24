import MembershipPlans from "@/components/membership/MembershipPlans";
import CopyButton from "@/components/membership/CopyButton";
import Link from "next/link";

const steps = [
  ["01", "Fill the Online Form"],
  ["02", "Upload Necessary Information"],
  ["03", "Pay via Bank Transfer or bKash"],
  ["04", "Approval within 7–14 Working Days"],
];

function StepIcon({ index }) {
  const common = "w-6 h-6 text-gray-800 group-hover:text-white transition-colors duration-300";
  if (index === 0) return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8M16 13H8M16 17H8"/></svg>;
  if (index === 1) return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/></svg>;
  if (index === 2) return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>;
  return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>;
}

export default function MembershipOverview() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-14 border-b border-gray-200/70 overflow-hidden bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"/>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">Membership</span>
              <span className="text-gray-300">|</span>
              <span className="text-xs text-gray-500 font-medium">Categories &amp; Admissions</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold font-manuale tracking-tight text-gray-800 leading-tight">
              Membership Overview <br className="hidden sm:inline"/>
              <span className="text-primary font-semibold">&amp; Registration Categories</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">Become a recognized member of Bangladesh&apos;s leading textile engineering community. Explore eligibility, steps to apply, and category tiers.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-base-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 tracking-tight">How To Apply</h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-2.5 rounded-full transition-all duration-300"/>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map(([number, title], index) => (
                <div key={number} className="relative group flex flex-col">
                  <div className="flex-1 flex flex-col justify-between bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-2xs hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out relative overflow-hidden min-h-[140px]">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center p-2.5 group-hover:bg-primary group-hover:border-primary group-hover:scale-105 transition-all duration-300 ease-in-out shadow-2xs">
                          <StepIcon index={index}/>
                        </div>
                        <span className="text-3xl font-mono font-black text-gray-300 group-hover:text-gray-800 transition-colors duration-300 ease-in-out select-none">{number}</span>
                      </div>
                      <div className="pt-1"><h3 className="text-sm md:text-base font-semibold text-gray-800 transition-colors duration-300 leading-snug">{title}</h3></div>
                    </div>
                  </div>
                  {index < steps.length - 1 && <div className="hidden lg:block absolute -right-5 top-1/2 transform -translate-y-1/2 z-10 text-gray-300 group-hover:text-primary transition-colors duration-300 pointer-events-none"><svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 bg-neutral-50/40 border-t border-b border-stone-200 font-poppins relative overflow-hidden">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 tracking-tight">Bank Account &amp; Payment Details</h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-1.5 rounded-full"/>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 max-w-5xl mx-auto">
            <div className="lg:col-span-7 bg-white rounded-lg border border-stone-300 p-4 sm:p-5 shadow-2xs hover:shadow-sm transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-primary"/>
              <div>
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-stone-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700 shadow-2xs">▦</div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-800">Bank Transfer Details</h3>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100/80 text-emerald-800 border border-emerald-200">Trust Bank PLC</span>
                </div>

                <div className="mt-3.5 space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="bg-gray-50/80 rounded-lg p-2 border border-stone-300"><span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider block">Bank Name</span><span className="text-xs sm:text-sm font-semibold text-gray-800 block">Trust Bank PLC</span></div>
                    <div className="bg-gray-50/80 rounded-lg p-2 border border-stone-300"><span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider block">Branch</span><span className="text-xs sm:text-sm font-semibold text-gray-800 block">Mirpur DOHS Branch</span></div>
                  </div>
                  <div className="bg-gray-50/80 rounded-lg p-2 border border-stone-300"><span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider block">Account Name</span><span className="text-xs font-semibold text-gray-900 block leading-snug break-words">THE INSTITUTION OF TEXTILE ENGINEERING &amp; TECHNOLOGISTS, BANGLADESH</span></div>
                  <div className="bg-emerald-50/50 rounded-lg p-2.5 border border-emerald-300 flex items-center justify-between gap-2"><div><span className="text-[10px] font-medium text-emerald-800 uppercase tracking-wider block">Account Number</span><span className="text-sm sm:text-base font-mono font-bold text-gray-900 tracking-wider">3004-0212000538</span></div><CopyButton value="3004-0212000538" tone="green" /></div>
                  <div className="bg-gray-50/80 rounded-lg p-2.5 border border-stone-300 flex items-center justify-between gap-2"><div><span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider block">Routing Number</span><span className="text-xs sm:text-sm font-mono font-semibold text-gray-800 tracking-wider">240261283</span></div><CopyButton value="240261283" /></div>
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-stone-200 flex items-center gap-1.5 text-[11px] text-gray-500"><span className="text-emerald-600">ⓘ</span><span>Upload bank deposit voucher or payment receipt when applying.</span></div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-xl border border-stone-300 p-4 sm:p-5 shadow-2xs hover:shadow-sm transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-primary"/>
              <div>
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-stone-200">
                  <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-lg bg-pink-50 border border-pink-200/60 flex items-center justify-center text-pink-600 shadow-2xs">▣</div><h3 className="text-sm sm:text-base font-bold text-gray-800">bKash Payment</h3></div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-pink-100/80 text-pink-800 border border-pink-200">Send Money (Personal)</span>
                </div>
                <div className="mt-3.5 space-y-2">
                  {[
                    ["bKash Personal 1", "01308-317841"],
                    ["bKash Personal 2", "01715-771454"],
                  ].map(([label, number]) => <div key={number} className="bg-pink-50/40 rounded-lg p-2.5 border border-pink-200/70 flex items-center justify-between gap-2"><div><span className="text-[10px] font-medium text-pink-700 uppercase tracking-wider block">{label}</span><span className="text-sm font-mono font-bold text-gray-800 select-all tracking-wide">{number}</span></div><CopyButton value="01308-317841" tone="pink" /></div>)}
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-stone-200 space-y-1"><div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-700"><span className="text-primary">✓</span><span>Verification Requirement</span></div><p className="text-[11px] text-gray-500 leading-snug">Enter your <strong>TrxID</strong> or upload the <strong>Payment Slip Screenshot</strong> during registration.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 bg-base-light antialiased overflow-hidden font-poppins">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#ffeade]/60 via-[#ffebd9]/40 to-transparent blur-3xl pointer-events-none rounded-full"/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-medium tracking-tight text-gray-800">Choose Your Membership</h2>
            <p className="mt-3.5 text-md sm:text-base text-neutral-600 max-w-4xl mx-auto">Choose the membership plan that fits your journey and unlock training, events, networking, career opportunities, industry resources, and lifelong connections.</p>
          </div>
          <div className="max-w-6xl mx-auto"><MembershipPlans /></div>
        </div>
      </section>
    </div>
  );
}

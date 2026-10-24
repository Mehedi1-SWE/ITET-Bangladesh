import Link from "next/link";
import MembershipApplicationForm from "@/components/membership/MembershipApplicationForm";

export const metadata = { title: "Membership Application | ITET Bangladesh" };

export default async function MembershipApplicationPage({ searchParams }) {
  const params = await searchParams;
  const type = typeof params?.type === "string" ? params.type : "general";

  return (
    <section className="bg-[#fbfaf7] py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-5">
        <div className="mb-6"><Link href="/membership-overview" className="text-sm font-semibold text-gray-500 transition hover:text-primary">← Back to Membership Overview</Link></div>
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_15px_45px_rgba(15,23,42,0.07)] sm:p-9">
          <div className="mb-7"><span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Online Registration</span><h1 className="mt-2 font-manuale text-3xl font-semibold text-secondary sm:text-4xl">Apply for ITET Membership</h1><p className="mt-2 text-sm leading-7 text-gray-600">Complete your details and payment reference. In this frontend implementation, submitting prepares the application for the ITET Secretariat by email.</p></div>
          <MembershipApplicationForm type={type} />
        </div>
      </div>
    </section>
  );
}

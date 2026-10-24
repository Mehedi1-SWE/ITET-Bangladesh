"use client";

import { useMemo, useState } from "react";

const labels = { general: "General Member (GM)", life: "Life Member (LM)", renew: "Re-New Membership" };
const fees = { general: "1530 BDT / 2 Years", life: "5100 BDT / Lifetime", renew: "1020 BDT / 2 Years" };

export default function MembershipApplicationForm({ type = "general" }) {
  const normalized = labels[type] ? type : "general";
  const [status, setStatus] = useState("");
  const title = useMemo(() => labels[normalized], [normalized]);

  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const required = ["name","email","phone","degree","institution","passingYear","paymentMethod","paymentReference"];
    if (required.some((key) => !String(data.get(key) || "").trim())) {
      setStatus("Please complete all required fields before submitting.");
      return;
    }

    const lines = [
      "ITET Membership Application",
      `Membership Type: ${title}`,
      `Fee: ${fees[normalized]}`,
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Degree: ${data.get("degree")}`,
      `Institution: ${data.get("institution")}`,
      `Passing Year: ${data.get("passingYear")}`,
      `Current Organization: ${data.get("organization") || "N/A"}`,
      `Payment Method: ${data.get("paymentMethod")}`,
      `Payment Reference/TrxID: ${data.get("paymentReference")}`,
      `Notes: ${data.get("notes") || "N/A"}`,
    ];
    window.location.href = `mailto:info@itetbd.net?subject=${encodeURIComponent("ITET Membership Application - " + title)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setStatus("Application prepared. Your email app is opening with the completed application.");
  }

  const inputClass = "h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10";

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="rounded-xl border border-orange-100 bg-orange-50/70 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-primary">Selected Membership</p><div className="mt-1 flex flex-wrap items-center justify-between gap-2"><h2 className="text-lg font-semibold text-secondary">{title}</h2><span className="text-sm font-bold text-primary">{fees[normalized]}</span></div></div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name *"><input name="name" className={inputClass} placeholder="Your full name" /></Field>
        <Field label="Email Address *"><input name="email" type="email" className={inputClass} placeholder="you@example.com" /></Field>
        <Field label="Mobile Number *"><input name="phone" className={inputClass} placeholder="+880..." /></Field>
        <Field label="Degree *"><input name="degree" className={inputClass} placeholder="B.Sc. in Textile Engineering" /></Field>
        <Field label="Institution *"><input name="institution" className={inputClass} placeholder="University / Institute" /></Field>
        <Field label="Passing Year *"><input name="passingYear" className={inputClass} placeholder="2024" /></Field>
        <Field label="Current Organization"><input name="organization" className={inputClass} placeholder="Company / Institution" /></Field>
        <Field label="Payment Method *"><select name="paymentMethod" defaultValue="" className={inputClass}><option value="" disabled>Select payment method</option><option>Trust Bank</option><option>bKash Personal 1</option><option>bKash Personal 2</option></select></Field>
      </div>
      <Field label="Payment Reference / TrxID *"><input name="paymentReference" className={inputClass} placeholder="Transaction ID or bank reference" /></Field>
      <Field label="Additional Notes"><textarea name="notes" rows="4" className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10" placeholder="Any additional information..." /></Field>
      <label className="flex items-start gap-2 text-xs leading-5 text-gray-600"><input type="checkbox" required className="mt-0.5 h-4 w-4 accent-[#f54a00]" /><span>I confirm that the information provided is accurate and I agree to follow ITET constitution and rules.</span></label>
      {status ? <p className="rounded-lg bg-orange-50 px-3 py-2 text-xs font-medium text-primary">{status}</p> : null}
      <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d94100]">Submit Application <span>→</span></button>
    </form>
  );
}

function Field({ label, children }) { return <label className="block"><span className="mb-2 block text-xs font-semibold text-gray-700">{label}</span>{children}</label>; }

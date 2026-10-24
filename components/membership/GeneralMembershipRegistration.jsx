"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const steps = ["Personal","Professional","Contact","Academic","Payment","Preview"];

export default function GeneralMembershipRegistration() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({});
  const [status, setStatus] = useState("");
  const inputClass = "h-11 w-full rounded-lg border border-gray-200 bg-white px-3.5 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10";

  function update(name, value) { setValues((current) => ({ ...current, [name]: value })); }
  function next(event) { event?.preventDefault(); setStatus(""); setStep((value) => Math.min(steps.length - 1, value + 1)); }
  function back() { setStatus(""); setStep((value) => Math.max(0, value - 1)); }
  function submit() {
    const lines = Object.entries(values).map(([key,value]) => `${key}: ${value}`);
    window.location.href = `mailto:info@itetbd.net?subject=${encodeURIComponent("General Membership Registration")}&body=${encodeURIComponent(lines.join("\n"))}`;
    setStatus("Registration details prepared. Your email app is opening for submission to ITET.");
  }

  const field = (name, label, options) => <label className="block"><span className="mb-2 block text-xs font-semibold text-gray-700">{label}</span>{options ? <select value={values[name] || ""} onChange={(e) => update(name,e.target.value)} className={inputClass}><option value="">Select {label.replace(" *","")}</option>{options.map((option) => <option key={option}>{option}</option>)}</select> : <input value={values[name] || ""} onChange={(e) => update(name,e.target.value)} className={inputClass} />}</label>;

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-gray-900">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link href="/membership-overview" className="text-sm font-semibold text-gray-600 hover:text-primary">← Back</Link>
          <div className="text-center"><p className="text-xs font-semibold text-secondary">The Institution of Textile Engineers &amp; Technologists (ITET), Bangladesh</p></div>
          <div className="flex items-center gap-2 text-xs text-gray-500"><span className="hidden sm:inline">Already Have An Account ?</span><Link href="/membership-login" className="font-semibold text-primary hover:underline">Login</Link></div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-8 sm:py-12">
        <Link href="/" className="mb-5 inline-flex text-xs font-semibold text-gray-500 hover:text-primary">← Back To Home</Link>
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
          <div className="border-b border-gray-100 px-6 py-6 sm:px-8">
            <h1 className="text-xl font-semibold text-secondary sm:text-2xl">Multi-Step Registration Form for General Member</h1>
            <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-6">{steps.map((label,index) => <button key={label} type="button" onClick={() => index <= step && setStep(index)} className={`rounded-lg border px-2 py-2 text-[10px] font-semibold transition sm:text-xs ${index === step ? "border-primary bg-primary text-white" : index < step ? "border-orange-200 bg-orange-50 text-primary" : "border-gray-200 bg-gray-50 text-gray-400"}`}><span className="mr-1">{index+1}</span>{label}</button>)}</div>
          </div>

          <div className="p-6 sm:p-8">
            {step === 0 ? <div><h2 className="text-lg font-semibold text-secondary">Personal Information</h2><p className="mt-1 text-sm text-gray-500">Please fill your information so we can get in touch with you.</p><div className="mt-6 grid gap-4 sm:grid-cols-2">{field("fullName","Full Name *")}{field("fatherName","Father's Name")}{field("motherName","Mother's Name")}{field("spouseName","Spouse Name")}{field("dateOfBirth","Date Of Birth")}{field("nationality","Nationality")}{field("nid","NID / Passport Number")}{field("bloodGroup","Blood Group",["A+","A-","B+","B-","AB+","AB-","O+","O-"])}{field("gender","Gender",["Male","Female","Other"])}{field("zone","Present Address Zone",["Dhaka","Gazipur","Narayanganj","Chattogram"])}<label className="block sm:col-span-2"><span className="mb-2 block text-xs font-semibold text-gray-700">Mailing Address</span><textarea value={values.mailingAddress || ""} onChange={(e) => update("mailingAddress",e.target.value)} rows="3" className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" /></label><label className="block sm:col-span-2"><span className="mb-2 block text-xs font-semibold text-gray-700">Photo</span><div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-7 text-center text-xs text-gray-500">Click to upload or drag and drop<br/><span className="text-[10px] text-gray-400">PNG, JPG, JPEG up to 5MB</span></div></label></div></div> : null}
            {step === 1 ? <Step title="Professional Information" subtitle="Tell us about your current professional profile">{field("organization","Organization / Company *")}{field("designation","Designation *")}{field("department","Department")}{field("experience","Years of Experience")}</Step> : null}
            {step === 2 ? <Step title="Contact Information" subtitle="Provide your primary communication details">{field("email","Email Address *")}{field("phone","Mobile Number *")}{field("emergencyContact","Emergency Contact")}{field("linkedin","LinkedIn Profile")}</Step> : null}
            {step === 3 ? <Step title="Academic Information" subtitle="Provide your textile engineering academic information">{field("degree","Degree *")}{field("institution","Institution *")}{field("passingYear","Passing Year *")}{field("studentId","Student / Registration ID")}</Step> : null}
            {step === 4 ? <Step title="Payment Information" subtitle="Provide your membership payment reference">{field("paymentMethod","Payment Method *",["Trust Bank","bKash Personal 1","bKash Personal 2"])}{field("paymentReference","Transaction ID / Bank Reference *")}<div className="sm:col-span-2 rounded-xl border border-orange-100 bg-orange-50 p-4 text-sm text-gray-700"><strong className="text-primary">General Member Fee:</strong> 1530 BDT / 2 Years</div></Step> : null}
            {step === 5 ? <div><h2 className="text-lg font-semibold text-secondary">Preview Registration</h2><p className="mt-1 text-sm text-gray-500">Review your information before submitting.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{Object.entries(values).map(([key,value]) => value ? <div key={key} className="rounded-lg border border-gray-100 bg-gray-50 p-3"><p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">{key.replace(/([A-Z])/g," $1")}</p><p className="mt-1 break-words text-sm font-medium text-secondary">{value}</p></div> : null)}</div>{status ? <p className="mt-5 rounded-lg bg-orange-50 px-3 py-2 text-xs font-medium text-primary">{status}</p> : null}</div> : null}

            <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">
              <div><p className="text-xs font-semibold text-gray-500">Step {step+1} of 6</p>{step > 0 ? <button type="button" onClick={back} className="mt-2 text-xs font-semibold text-gray-600 hover:text-primary">← Previous</button> : null}</div>
              {step < 5 ? <button type="button" onClick={next} className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d94100]">Next Step →</button> : <button type="button" onClick={submit} className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d94100]">Submit Registration →</button>}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Step({ title, subtitle, children }) { return <div><h2 className="text-lg font-semibold text-secondary">{title}</h2><p className="mt-1 text-sm text-gray-500">{subtitle}</p><div className="mt-6 grid gap-4 sm:grid-cols-2">{children}</div></div>; }

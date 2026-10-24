"use client";

import Link from "next/link";
import { useState } from "react";

export default function RenewMembershipForm() {
  const [mode, setMode] = useState("id");
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");

  function verify(event) {
    event.preventDefault();
    if (!value.trim()) {
      setStatus(mode === "id" ? "Please enter your Membership ID." : "Please enter your registered email.");
      return;
    }
    setStatus("Verification request is ready. Production member verification requires the ITET member service.");
  }

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-gray-900">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link href="/membership-overview" className="text-sm font-semibold text-gray-600 hover:text-primary">← Back</Link>
          <div className="text-center"><p className="text-xs font-semibold text-secondary">The Institution of Textile Engineers &amp; Technologists (ITET), Bangladesh</p></div>
          <div className="flex items-center gap-2 text-xs text-gray-500"><span className="hidden sm:inline">Already Have An Account ?</span><Link href="/membership-login" className="font-semibold text-primary hover:underline">Login</Link></div>
        </div>
      </header>

      <section className="mx-auto max-w-xl px-5 py-10 sm:py-16">
        <Link href="/" className="mb-5 inline-flex text-xs font-semibold text-gray-500 hover:text-primary">← Back To Home</Link>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.07)] sm:p-8">
          <div className="text-center"><span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-primary">General Member</span><h1 className="mt-4 text-2xl font-semibold text-secondary">Renew Your Membership</h1><p className="mt-2 text-sm leading-6 text-gray-500">Continue enjoying exclusive benefits by renewing your membership</p></div>

          <form onSubmit={verify} className="mt-8">
            <div className="grid grid-cols-2 rounded-lg bg-gray-100 p-1">
              <button type="button" onClick={() => {setMode("id");setValue("");setStatus("");}} className={`rounded-md px-3 py-2 text-xs font-semibold transition ${mode === "id" ? "bg-white text-primary shadow-sm" : "text-gray-500"}`}>Verify with Membership ID</button>
              <button type="button" onClick={() => {setMode("email");setValue("");setStatus("");}} className={`rounded-md px-3 py-2 text-xs font-semibold transition ${mode === "email" ? "bg-white text-primary shadow-sm" : "text-gray-500"}`}>Verify with registered email</button>
            </div>
            <div className="my-5 flex items-center gap-3"><span className="h-px flex-1 bg-gray-200"/><span className="text-xs text-gray-400">or,</span><span className="h-px flex-1 bg-gray-200"/></div>
            <label className="block"><span className="mb-2 block text-xs font-semibold text-gray-700">{mode === "id" ? "Membership ID" : "Registered Email"}</span><input type={mode === "email" ? "email" : "text"} value={value} onChange={(e) => setValue(e.target.value)} placeholder={mode === "id" ? "Enter membership ID" : "Enter registered email"} className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10" /></label>
            {status ? <p className="mt-4 rounded-lg bg-orange-50 px-3 py-2 text-xs font-medium text-primary">{status}</p> : null}
            <button type="submit" className="mt-5 w-full rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d94100]">Verify Membership</button>
          </form>

          <div className="mt-7 border-t border-gray-100 pt-5 text-center text-xs text-gray-500">Need help? <Link href="/contact" className="font-semibold text-primary hover:underline">Contact our support team</Link></div>
        </div>
      </section>
    </main>
  );
}

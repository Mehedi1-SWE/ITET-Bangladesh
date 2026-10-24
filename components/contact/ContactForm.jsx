"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function submit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const mobile = String(form.get("mobile") || "");
    const reason = String(form.get("reason") || "");
    const subject = String(form.get("subject") || "ITET Website Inquiry");
    const message = String(form.get("message") || "");
    if (!name || !email || !mobile || !reason || !message) {
      setStatus("Please complete all required fields.");
      return;
    }
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nReason: ${reason}\n\n${message}`);
    window.location.href = `mailto:info@itetbd.net?subject=${encodeURIComponent(subject)}&body=${body}`;
    setStatus("Your email app is opening with the message prepared.");
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Full Name *"><input name="name" placeholder="Enter your name" className="field" /></Field>
        <Field label="Email Address *"><input name="email" type="email" placeholder="you@domain.com" className="field" /></Field>
        <Field label="Mobile Number *"><input name="mobile" placeholder="Enter your valid mobile number" className="field" /></Field>
        <Field label="Reason for Contact *"><select name="reason" defaultValue="" className="field"><option value="" disabled>Select a reason</option><option>Membership</option><option>Events</option><option>Advertisement</option><option>General Inquiry</option><option>Other</option></select></Field>
      </div>
      <Field label="Subject"><input name="subject" placeholder="What is your message regarding?" className="field" /></Field>
      <Field label="Message *"><textarea name="message" rows="6" placeholder="Write your message..." className="field resize-none" /></Field>
      {status ? <p className="text-xs font-medium text-primary">{status}</p> : null}
      <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d94100]">Send Message <span>→</span></button>
    </form>
  );
}

function Field({ label, children }) {
  return <label className="block"><span className="mb-2 block text-xs font-semibold text-gray-700">{label}</span>{children}</label>;
}

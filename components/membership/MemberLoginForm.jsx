"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function makeCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let value = "";
  for (let i = 0; i < 5; i += 1) value += chars[Math.floor(Math.random() * chars.length)];
  return value;
}

export default function MemberLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [status, setStatus] = useState("");

  function refreshCaptcha(clearStatus = true) {
    setCaptcha(makeCaptcha());
    setCaptchaInput("");
    if (clearStatus) setStatus("");
  }

  useEffect(() => {
    refreshCaptcha();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");

    if (!email || !password) {
      setStatus("Enter your member email and password.");
      return;
    }
    if (!captcha || captchaInput.trim().toUpperCase() !== captcha.toUpperCase()) {
      setStatus("CAPTCHA does not match. Please try again.");
      refreshCaptcha(false);
      return;
    }
    setStatus("CAPTCHA verified. Member authentication requires the ITET account service.");
  }

  return (
    <div className="flex flex-col items-center justify-center bg-base-light px-4 py-10 sm:px-6">
      <div className="w-full max-w-[500px]">
        <div className="mb-6 rounded-md border border-[#f0e3d5] bg-[#fcfaf7] p-4 shadow-xs sm:p-5">
          <div className="flex items-start gap-3">
            <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
            <p className="text-xs leading-snug text-gray-700 sm:text-sm"><span className="font-bold text-gray-900">Members-Only Access: </span>ITET is a closed organization. To access members exclusive features, you must hold an active membership account.</p>
          </div>
          <Link href="/membership-overview" className="mt-3.5 flex w-full items-center justify-center gap-2 rounded-lg border border-[#ebd6c3] bg-white px-4 py-2.5 text-sm font-semibold text-primary shadow-xs transition-all hover:border-primary hover:bg-orange-50/40">Buy / Apply for Membership <span>↗</span></Link>
        </div>

        <div className="rounded-md border border-gray-100 bg-white p-7 shadow-[0_10px_35px_-8px_rgba(0,0,0,0.20)] sm:p-9">
          <div className="mb-6"><h1 className="text-2xl font-semibold tracking-tight text-gray-900">Member Sign In</h1><p className="mt-1 text-sm font-normal text-gray-500">Enter your member email, password, and CAPTCHA</p></div>
          <div className="mb-6 h-px w-full bg-gray-100" />

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-800">Email Address</label>
              <input id="email" name="email" type="email" placeholder="Enter your email" autoComplete="username" className="w-full rounded-md border border-gray-200 bg-[#f9fafb] px-3.5 py-2.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-orange-500/20" />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between"><label htmlFor="password" className="text-sm font-medium text-gray-800">Password</label><a href="mailto:info@itetbd.net?subject=ITET%20Member%20Password%20Reset" className="text-xs text-primary transition-colors hover:text-orange-700">Forgot password?</a></div>
              <div className="relative">
                <input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="*******" autoComplete="current-password" className="w-full rounded-md border border-gray-200 bg-[#f9fafb] px-3.5 py-2.5 pr-10 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-orange-500/20" />
                <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 transition-colors hover:text-gray-700" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? "◉" : "◎"}</button>
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between"><label htmlFor="captcha" className="text-sm font-semibold text-gray-800">CAPTCHA Verification</label><span className="text-xs font-normal text-gray-400">Case-insensitive</span></div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative flex h-[44px] items-center justify-between overflow-hidden rounded-md border border-[#303640] bg-[#252930] px-3.5 py-2 shadow-inner select-none">
                  <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-25"><line x1="5%" y1="75%" x2="95%" y2="25%" stroke="#ff9b50" strokeWidth="1.5"/><line x1="8%" y1="30%" x2="90%" y2="70%" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3 3"/></svg>
                  <span className="z-10 pl-1 font-mono text-base font-bold italic tracking-[0.22em] text-[#ffbe8a] drop-shadow-sm sm:text-lg">{captcha || "-----"}</span>
                  <button type="button" onClick={refreshCaptcha} className="z-10 rounded p-1 text-gray-400 transition-colors hover:text-white" aria-label="Refresh CAPTCHA">↻</button>
                </div>
                <input id="captcha" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} type="text" placeholder="ENTER CAPTCHA" className="h-[44px] rounded-md border border-gray-200 bg-[#f9fafb] px-3.5 py-2 text-sm uppercase tracking-wider text-gray-900 outline-none transition-all placeholder:text-xs placeholder:tracking-widest placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-orange-500/20" autoComplete="off" />
              </div>
            </div>

            {status ? <p className={`rounded-md px-3 py-2 text-xs font-medium ${status.startsWith("CAPTCHA verified") ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`}>{status}</p> : null}

            <button type="submit" className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#d94100] active:scale-[0.99] sm:text-base"><span>Sign In</span><span>→</span></button>
          </form>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">Official portal: <a href="https://itetbd.net" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline underline-offset-2 transition-colors hover:text-gray-700">itetbd.net</a></p>
      </div>
    </div>
  );
}

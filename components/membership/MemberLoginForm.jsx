"use client";

import Link from "next/link";
import { useState } from "react";

export default function MemberLoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-base-light flex flex-col items-center justify-center py-10 px-4 sm:px-6">
      <div className="w-full max-w-[500px]">
        <div className="bg-[#fcfaf7] border border-[#f0e3d5] rounded-md p-4 sm:p-5 mb-6 shadow-xs">
          <div className="flex items-start gap-3">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-xs sm:text-sm text-gray-700 leading-snug">
              <span className="font-bold text-gray-900">Members-Only Access: </span>
              ITET is a closed organization. To access members exclusive features, you must hold an active membership account.
            </p>
          </div>

          <Link className="mt-3.5 w-full py-2.5 px-4 bg-white border border-[#ebd6c3] hover:border-primary hover:bg-orange-50/40 text-primary font-semibold text-sm rounded-lg flex items-center justify-center gap-2 transition-all shadow-xs" href="/membership-overview">
            <span>Buy / Apply for Membership</span>
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
          </Link>
        </div>

        <div className="bg-white rounded-md shadow-[0_10px_35px_-8px_rgba(0,0,0,0.20)] border border-gray-100 p-7 sm:p-9">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Member Sign In</h1>
            <p className="text-sm text-gray-500 mt-1 font-normal">Enter your member email, password, and CAPTCHA</p>
          </div>

          <div className="w-full h-px bg-gray-100 mb-6" />

          <form className="space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                <label htmlFor="email" className="text-sm font-medium text-gray-800">Email Address</label>
              </div>
              <input id="email" name="email" type="email" placeholder="Enter your email" autoComplete="username" className="w-full bg-[#f9fafb] border border-gray-200 rounded-md px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-primary focus:bg-white transition-all" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  <label htmlFor="password" className="text-sm font-medium text-gray-800">Password</label>
                </div>
                <button type="button" className="text-xs text-primary hover:text-orange-700 transition-colors cursor-pointer">Forgot password?</button>
              </div>
              <div className="relative">
                <input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="*******" autoComplete="current-password" className="w-full bg-[#f9fafb] border border-gray-200 rounded-md px-3.5 py-2.5 pr-10 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-primary focus:bg-white transition-all" />
                <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer p-0.5" aria-label="Show password">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
                  <label htmlFor="captcha" className="text-sm font-semibold text-gray-800">CAPTCHA Verification</label>
                </div>
                <span className="text-xs text-gray-400 font-normal">Case-insensitive</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative bg-[#252930] rounded-md px-3.5 py-2 flex items-center justify-between overflow-hidden select-none border border-[#303640] shadow-inner h-[44px]">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25">
                    <line x1="5%" y1="75%" x2="95%" y2="25%" stroke="#ff9b50" strokeWidth="1.5" />
                    <line x1="8%" y1="30%" x2="90%" y2="70%" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3 3" />
                  </svg>
                  <span className="font-mono text-base sm:text-lg font-bold tracking-[0.25em] text-[#ffbe8a] italic select-none pl-1 drop-shadow-sm" />
                  <button type="button" className="text-gray-400 hover:text-white p-1 rounded transition-colors z-10 cursor-pointer" aria-label="Refresh CAPTCHA">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
                  </button>
                </div>

                <input id="captcha" type="text" placeholder="ENTER CAPTCHA" className="bg-[#f9fafb] border border-gray-200 rounded-md px-3.5 py-2 text-sm text-gray-900 tracking-wider placeholder:text-gray-400 placeholder:text-xs placeholder:tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-primary focus:bg-white transition-all h-[44px]" autoComplete="off" />
              </div>
            </div>

            <button type="submit" className="w-full mt-2 py-2.5 px-4 rounded-md bg-primary hover:bg-primary-light active:scale-[0.99] text-white font-semibold text-sm sm:text-base shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="m10 17 5-5-5-5" /><path d="M15 12H3" /><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /></svg>
              <span>Sign In</span>
            </button>
          </form>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          Official portal: <a href="https://itetbd.net" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 underline underline-offset-2 transition-colors">itetbd.net</a>
        </p>
      </div>
    </div>
  );
}

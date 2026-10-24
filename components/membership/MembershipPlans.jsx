"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    key: "general",
    name: "General Member (GM)",
    price: "1530",
    period: "For 2 Years",
    eligibility: "For B.Sc Graduates From CTET / BUTEX, Tejgaon Campus",
    recommended: false,
    benefits: [
      "Access to all ITET facilities and events.",
      "Eligible for professional training, seminars, and job portals.",
      "Eligibility for certificates, training, and awards.",
      "Network with industry experts and alumni.",
      "Renewable for continued benefits",
    ],
  },
  {
    key: "life",
    name: "Life Member (LM)",
    price: "5100",
    period: "Lifetime",
    eligibility: "For B.Sc Graduates From CTET / BUTEX, Tejgaon Campus",
    recommended: true,
    benefits: [
      "Enjoy all benefits without renewal hassles – for life!",
      "Priority access to national & international conferences, training, and scholarships",
      "Recognition as a Life Fellow in ITET member directory.",
      "Get exclusive invitations to high-profile industry events & leadership meets.",
      "Perfect for textile leaders who want long-term recognition and contribution.",
    ],
  },
  {
    key: "renew",
    name: "Re-New Membership",
    price: "1020",
    period: "For 2 Years",
    eligibility: "Only for existing General Members (GM)",
    recommended: false,
    benefits: [
      "Maintain your professional credibility as an active ITET member.",
      "Access the members-only portal for job posts, industry news & resources.",
      "Be eligible for upcoming national & international events.",
      "Strengthen your alumni and industry connections.",
      "Regular access to resources or training.",
      "Stay informed, stay empowered, stay ITET Strong.",
    ],
  },
];

export default function MembershipPlans() {
  const [agreed, setAgreed] = useState({});

  return (
    <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
      {plans.map((plan) => {
        const enabled = Boolean(agreed[plan.key]);
        return (
          <article key={plan.key} className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,42,0.10)] ${plan.recommended ? "border-primary ring-1 ring-primary/15" : "border-gray-200"}`}>
            {plan.recommended ? <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">Most Recommended</span> : null}
            <div>
              <h3 className="text-xl font-semibold text-secondary">{plan.name}</h3>
              <div className="mt-4 flex items-end gap-2"><span className="font-manuale text-4xl font-bold text-primary">{plan.price}</span><span className="pb-1 text-sm font-semibold text-gray-500">BDT/{plan.period}</span></div>
              <div className="mt-4 rounded-xl bg-orange-50/70 p-3 text-xs leading-5 text-gray-700"><strong className="text-secondary">Eligibility:</strong> {plan.eligibility}</div>
              <ul className="mt-5 space-y-3">
                {plan.benefits.map((benefit) => <li key={benefit} className="flex gap-2 text-sm leading-6 text-gray-600"><span className="mt-1 text-primary">✓</span><span>{benefit}</span></li>)}
              </ul>
            </div>

            <div className="mt-auto pt-6">
              <label className="flex cursor-pointer items-start gap-2 rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs leading-5 text-gray-600">
                <input type="checkbox" checked={enabled} onChange={(e) => setAgreed((current) => ({...current, [plan.key]: e.target.checked}))} className="mt-0.5 h-4 w-4 accent-[#f54a00]" />
                <span>I agree with ITET constitution &amp; rules</span>
              </label>
              {enabled ? (
                <Link href={`/membership-application?type=${plan.key}`} className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d94100]">Apply for {plan.name.replace(/ \(.+?\)/,"")} <span>→</span></Link>
              ) : (
                <button type="button" disabled className="mt-3 w-full cursor-not-allowed rounded-lg bg-gray-200 px-4 py-3 text-sm font-semibold text-gray-400">Agree to continue</button>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}

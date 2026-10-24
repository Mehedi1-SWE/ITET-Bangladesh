"use client";

import { useState } from "react";

export default function CopyButton({ value, tone = "gray" }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  const toneClass = tone === "green" ? "text-emerald-800 border-emerald-300" : tone === "pink" ? "text-pink-700 border-pink-300" : "text-gray-700 border-stone-300";

  return <button type="button" onClick={copy} className={`inline-flex items-center gap-1 rounded-md border bg-white px-2.5 py-1 text-[11px] font-semibold shadow-2xs transition hover:-translate-y-0.5 ${toneClass}`}>{copied ? "Copied!" : "Copy"}</button>;
}

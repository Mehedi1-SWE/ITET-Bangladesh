"use client";

import { useMemo, useState } from "react";

const categories = {
  yarn: { label: "Yarn Prices", unit: "BDT/kg", icon: "/images/market/yarn.png" },
  chemical: { label: "Chemical Prices", unit: "BDT/kg", icon: "/images/market/chemical.png" },
  fabrics: { label: "Fabrics & Accessories Prices", unit: "BDT/cone", icon: "/images/market/fabrics-accessories.png" },
};

const items = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  brand: "ABC",
  product: "100% Cotton Yarn",
  price: 0,
}));

export default function MarketArchive({ initialCategory = "yarn" }) {
  const first = categories[initialCategory] ? initialCategory : "yarn";
  const [category, setCategory] = useState(first);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const meta = categories[category];

  const visible = useMemo(() => items.filter((item) => (item.brand + " " + item.product).toLowerCase().includes(search.toLowerCase())), [search]);

  return (
    <>
      <section className="bg-[#fbfaf7] py-10 sm:py-14">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2">
                {Object.entries(categories).map(([key, value]) => <button key={key} type="button" onClick={() => setCategory(key)} className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition ${category === key ? "border-primary bg-primary text-white" : "border-gray-200 bg-white text-gray-600 hover:border-primary/30 hover:text-primary"}`}><img src={value.icon} alt="" className="h-5 w-5 object-contain" />{value.label}</button>)}
              </div>
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search material..." className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 lg:w-72" />
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-gray-100 p-5"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50"><img src={meta.icon} alt={meta.label} className="h-7 w-7 object-contain" /></div><div><h2 className="text-lg font-semibold text-secondary">{meta.label}</h2><p className="text-xs text-gray-500">Current material listing • placeholder prices mirror the published ITET data state</p></div></div>
            <div className="divide-y divide-gray-100">
              {visible.map((item) => <div key={item.id} className="flex flex-col gap-3 p-4 transition hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between"><div><h3 className="text-sm font-semibold text-secondary">{item.brand}</h3><p className="mt-0.5 text-xs text-gray-500">{item.product}</p></div><div className="flex items-center gap-4"><div><span className="text-base font-bold text-emerald-600">{item.price}</span><span className="ml-1 text-xs text-gray-500">{meta.unit}</span></div><button type="button" onClick={() => setSelected(item)} className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-blue-600 transition hover:border-blue-200 hover:bg-blue-50">Details</button></div></div>)}
            </div>
          </div>
        </div>
      </section>

      {selected ? <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" onClick={() => setSelected(null)}><div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="flex items-start justify-between"><div><span className="text-xs font-bold uppercase tracking-wider text-primary">{meta.label}</span><h2 className="mt-1 text-2xl font-semibold text-secondary">{selected.brand}</h2><p className="mt-1 text-sm text-gray-500">{selected.product}</p></div><button type="button" onClick={() => setSelected(null)} className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-600">✕</button></div><div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-xl bg-gray-50 p-4"><p className="text-[10px] uppercase tracking-wider text-gray-400">Current Price</p><p className="mt-1 text-xl font-bold text-emerald-600">{selected.price} <span className="text-xs font-medium text-gray-500">{meta.unit}</span></p></div><div className="rounded-xl bg-gray-50 p-4"><p className="text-[10px] uppercase tracking-wider text-gray-400">Status</p><p className="mt-1 text-sm font-semibold text-secondary">Published listing</p></div></div><p className="mt-5 text-xs leading-6 text-gray-500">Market values are shown exactly in the available frontend dataset. Connect the production pricing API when the live data service is available.</p></div></div> : null}
    </>
  );
}

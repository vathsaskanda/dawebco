"use client";

import { cn } from "@/lib/utils";
import { Check, Sparkles } from "lucide-react";

const PLANS = [
  {
    name: "Basic",
    desc: "Perfect for small businesses just getting online.",
    price: "₹2,999",
    isMostPop: false,
    features: [
      "1–3 pages",
      "Works perfectly on mobile phones",
      "Direct WhatsApp chat button",
      "Simple contact form",
      "Google Maps location integration",
      "Basic Google search setup (SEO)",
    ],
  },
  {
    name: "Standard",
    desc: "A complete website that looks professional and brings in customers.",
    price: "₹5,999",
    isMostPop: true,
    features: [
      "Up to 5 pages",
      "Custom design tailored to your business",
      "Photo / Product Gallery",
      "Customer Inquiry form",
      "Social media links integration",
      "Basic Google search setup (SEO)",
      "1 month of free technical support",
    ],
  },
  {
    name: "Professional",
    desc: "The premium choice for businesses ready to dominate online.",
    price: "₹9,999",
    isMostPop: false,
    features: [
      "Up to 10 pages",
      "Premium, high-end look and feel",
      "Online booking or advanced enquiry system",
      "Fast loading speed optimization",
      "Advanced Google ranking setup (SEO)",
      "3 months of free technical support",
    ],
  },
];

const ADDONS = [
  { label: "Domain & Hosting", value: "Charged at actual cost" },
  { label: "Logo Design", value: "₹1,000 – ₹2,000" },
  { label: "Monthly Maintenance", value: "₹500 – ₹1,500 / mo" },
  { label: "Additional Pages", value: "₹300 – ₹500 / page" },
];

export function PricingSection() {
  return (
    <section className="relative py-14 md:py-28 bg-[#FFF8F3] dark:bg-[#05060a] text-gray-700 dark:text-gray-300 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 z-[0] h-[80vh] w-full bg-[#FFB38A]/15 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(255,179,138,0.3),rgba(255,255,255,0))] dark:bg-indigo-950/20 dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.35),rgba(255,255,255,0))]" />

      <div className="relative max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="relative max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.04] px-3 py-1 mb-5 text-[11px] uppercase tracking-[0.2em] text-[#F26B5B] dark:border-white/10 dark:bg-white/5 dark:text-indigo-300">
            <Sparkles className="w-3 h-3" />
            Simple, honest pricing
          </div>
          <h2 className="text-gray-900 dark:text-gray-100 tracking-tighter text-2xl font-semibold sm:text-5xl">
            Plans for every{" "}
            <span className="bg-gradient-to-r from-[#F26B5B] to-[#FFB38A] dark:from-indigo-300 dark:to-indigo-500 bg-clip-text text-transparent">
              business size
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-gray-500 dark:text-white/50 font-normal">
            No hidden charges. No confusing tiers. Straightforward packages designed to get you online and winning customers.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 md:mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {PLANS.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "relative flex-1 flex items-stretch flex-col rounded-xl mt-6 sm:mt-0 transform-gpu [border:1px_solid_rgba(0,0,0,0.06)] dark:[border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#FFB38A1f_inset] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] bg-white/70 dark:bg-[#08091240]",
                item.isMostPop && "mt-10 sm:mt-0 sm:-translate-y-4",
              )}
            >
              {item.isMostPop && (
                <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border border-black/[0.08] dark:border-white/10 shadow-md bg-[#F26B5B] text-white dark:bg-indigo-950/80 dark:text-white/90 dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.4),rgba(255,255,255,0))] text-center text-sm font-semibold">
                  Most popular
                </span>
              )}
              <div
                className={cn(
                  "p-5 md:p-8 space-y-4 border-b border-gray-200/60 dark:border-white/10",
                  item.name === "Professional" &&
                    "bg-[linear-gradient(110deg,transparent,45%,#FFE4D6,55%,transparent)] dark:bg-[linear-gradient(110deg,transparent,45%,#1e1b4b,55%,transparent)] rounded-t-xl",
                )}
              >
                <span className="text-[#F26B5B] dark:text-indigo-400 font-normal tracking-tight">
                  {item.name}
                </span>
                <div className="text-gray-900 dark:text-gray-100 text-3xl md:text-4xl font-semibold">
                  {item.price}{" "}
                  <span className="text-lg text-gray-500 font-normal">
                    one-time
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <button className="w-full tracking-tight text-center rounded-md bg-gradient-to-br from-[#FFB38A] to-[#F26B5B] dark:from-indigo-400 dark:to-indigo-700 px-4 py-2.5 text-base text-white dark:text-zinc-50 ring-2 ring-[#FFB38A]/50 dark:ring-indigo-500/50 ring-offset-2 ring-offset-[#FFF8F3] dark:ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98]">
                  Get Started
                </button>
              </div>
              <ul className="p-5 md:p-8 space-y-3">
                <li className="pb-2 text-gray-800 dark:text-gray-200 font-medium">Features</li>
                {item.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <Check className="h-4 w-4 mt-0.5 shrink-0 text-[#F26B5B] dark:text-indigo-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Special offer */}
        <div className="mt-6 md:mt-16 rounded-xl border border-[#F26B5B]/25 dark:border-indigo-500/30 bg-[#F26B5B]/8 dark:bg-indigo-950/30 p-4 md:p-8 flex flex-col md:flex-row items-center gap-3 md:gap-6 [box-shadow:0_-20px_80px_-20px_#FFB38A1f_inset] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
          <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center bg-[#FFB38A]/25 dark:bg-indigo-500/20">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#F26B5B] dark:text-indigo-300" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-base md:text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-1">
              Launch Offer — First 10 Clients Only
            </h3>
            <p className="text-xs md:text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Get <span className="text-[#F26B5B] dark:text-indigo-300 font-medium">Free Basic SEO</span>,{" "}
              <span className="text-[#F26B5B] dark:text-indigo-300 font-medium">Free WhatsApp Integration</span>, and{" "}
              <span className="text-[#F26B5B] dark:text-indigo-300 font-medium">1 Month of Free Maintenance</span> with any plan.
            </p>
          </div>
        </div>

        {/* Addons */}
        <div className="mt-8 md:mt-12">
          <h3 className="text-center text-base md:text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-200 mb-4 md:mb-8">
            Optional Extras
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {ADDONS.map((a) => (
              <div
                key={a.label}
                className="rounded-xl [border:1px_solid_rgba(0,0,0,0.06)] dark:[border:1px_solid_rgba(255,255,255,.08)] bg-white/60 dark:bg-white/[0.02] p-4 md:p-5 hover:border-[#F26B5B]/40 dark:hover:border-indigo-500/40 transition-colors"
              >
                <p className="text-[10px] md:text-[11px] uppercase tracking-widest mb-1.5 md:mb-2 text-[#F26B5B] dark:text-indigo-400">
                  {a.label}
                </p>
                <p className="text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200">{a.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

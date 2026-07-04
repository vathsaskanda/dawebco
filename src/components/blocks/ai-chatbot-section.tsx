import React, { Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Brain, Globe, ArrowRight, Bot } from "lucide-react";
import { SlimeViewer } from "./slime-viewer";
import { useTheme } from "@/components/theme-toggle";

const PILLARS = [
  {
    icon: MessageCircle,
    title: "Instantly Answers Customers",
    desc: "No more missed leads or delayed replies on your website. Your chatbot responds to every visitor immediately, day or night.",
  },
  {
    icon: Brain,
    title: "Learns Your Business",
    desc: "Trained specifically on your products, pricing, and services to give accurate answers that feel like talking to your best employee.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    desc: "Integrate seamlessly directly onto your website, WhatsApp, or Instagram — wherever your customers already are.",
  },
];

export function AiChatbotSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  // Performance fix: Lazy loading canvas mounting logic
  const [shouldRenderCanvas, setShouldRenderCanvas] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldRenderCanvas(entry.isIntersecting);
      },
      { threshold: 0.01 } // Mount immediately when the section baseline clips the frame view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`relative py-16 md:py-32 transition-colors duration-300 ${isDark ? "bg-[#000000] border-y border-dashed border-[#1c1c1c]" : "bg-[#F8C8DC] border-y border-border"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 lg:gap-16 items-start">
        <div>
          {/* Tagline */}
          <div className="inline-flex items-center gap-3 mb-4">
            {!isDark && <span className="h-px w-8 bg-primary" />}
            <span className={isDark ? "font-mono text-[9px] uppercase tracking-[0.02em] font-medium text-white border border-dashed border-white rounded-[100px] px-3 py-1" : "text-[10px] uppercase tracking-[0.3em] font-medium text-primary"}>
              {isDark ? "NEW · Build your AI chatbot today" : "Build your AI chatbot today"}
            </span>
          </div>

          {/* Headline */}
          <h2 className={`max-w-4xl mb-4 md:mb-6 ${isDark ? "text-[clamp(2rem,4vw,48px)] font-black tracking-tight leading-[1.1] text-white" : "text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-foreground"}`}>
            Imagine a 24/7 sales assistant that never sleeps, handles every customer inquiry instantly, and captures leads while you{" "}
            <span className={isDark ? "text-[#7089ba]" : "italic font-serif opacity-80"}>rest.</span>
          </h2>

          {/* Subtext */}
          <p className={`max-w-xl mb-10 md:mb-16 leading-relaxed ${isDark ? "text-base md:text-lg text-[#808080]" : "text-base md:text-lg text-muted-foreground"}`}>
            Turn casual visitors into qualified leads without lifting a finger. Our custom AI chatbots work around the clock so you do not have to.
          </p>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  style={{
                    // Optimized performance: Replaced expensive dynamic standard framer evaluation transitions with hardware-accelerated style transforms
                    opacity: shouldRenderCanvas ? 1 : 0,
                    transform: shouldRenderCanvas ? "translateY(0px)" : "translateY(20px)",
                    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`
                  }}
                  className={`relative group p-5 md:p-8 ${isDark ? "bg-[#1c1c1c] border border-dashed border-[#000000] rounded-[20px]" : "rounded-2xl border border-border bg-card backdrop-blur-sm hover:shadow-lg"}`}
                >
                  <div className={`mb-4 md:mb-6 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 flex-shrink-0 ${isDark ? "bg-[#000000] border border-dashed border-[#1c1c1c] text-[#7089ba] rounded-full" : "rounded-xl bg-primary/10 text-primary border border-primary/20"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-lg md:text-xl font-semibold tracking-tight mb-3 ${isDark ? "text-white" : "text-card-foreground"}`}>
                    {pillar.title}
                  </h3>
                  <p className={`text-sm md:text-base leading-relaxed ${isDark ? "text-[#808080]" : "text-muted-foreground"}`}>
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div
            style={{
              opacity: shouldRenderCanvas ? 1 : 0,
              transition: "opacity 0.5s ease-out 0.3s"
            }}
            className="mt-10 md:mt-16 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#contact"
              onClick={handleScrollTo("contact")}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-3.5 rounded-[100px] text-sm transition-colors ${isDark ? "border border-solid border-white text-white font-medium hover:bg-white/10" : "bg-primary text-primary-foreground font-medium hover:opacity-90"}`}
            >
              <Bot className="w-4 h-4" />
              Get Your Custom AI Chatbot
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-3.5 rounded-[100px] text-sm transition-colors ${isDark ? "border border-solid border-[#4d4d4d] text-white font-medium hover:bg-[#1c1c1c]" : "bg-secondary text-secondary-foreground font-medium hover:opacity-90"}`}
            >
              Try Coco for free
            </a>
          </div>
        </div>

        {/* Sticky 3D Slime Container */}
        <div className="order-first lg:order-last w-full">
          <div className="sticky top-8 sm:top-24 h-[240px] sm:h-[420px] lg:h-[480px] w-full p-2 sm:p-6">
            {/* Optimized performance: Completely drops out Canvas from React Lifecycle entirely when off-screen */}
            {shouldRenderCanvas ? <SlimeViewer /> : <div className="w-full h-full bg-transparent" />}
          </div>
        </div>
      </div>
    </section>
  );
}
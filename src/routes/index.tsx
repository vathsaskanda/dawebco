import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  Rocket,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";
import dawebcoLogo from "@/assets/dawebco-logo-cropped.png.asset.json";
import { InteractiveRobotSpline } from "@/components/blocks/interactive-3d-robot";
import { BunnyModel } from "@/components/blocks/bunny-model";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ShaderBackground } from "@/components/ui/shader-background";
import { useTheme } from "@/components/theme-toggle";
import ToggleSwitch from "@/components/ui/toggle-switch";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChatDialog } from "@/components/chat-dialog";
import { AiChatbotSection } from "@/components/blocks/ai-chatbot-section";
import { PricingSection } from "@/components/blocks/pricing-section";
import { ContactSection } from "@/components/blocks/contact-section";
import { Footer } from "@/components/blocks/footer";
import {
  DentalPreview,
  CafePreview,
  GymPreview,
  FashionPreview,
} from "@/components/template-previews";
import { Stethoscope, Coffee, Dumbbell, Shirt, X } from "lucide-react";
import tplDental from "@/assets/tpl-dental.jpg.asset.json";
import tplCafe from "@/assets/tpl-cafe.jpg.asset.json";
import tplGym from "@/assets/tpl-gym.jpg.asset.json";
import tplFashion from "@/assets/tpl-fashion.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DAWEBCO — Bold Web Frameworks Built to Outperform" },
      {
        name: "description",
        content:
          "DAWEBCO builds bold, high-performance web frameworks engineered for trust, speed, and continuous revenue growth.",
      },
      { property: "og:title", content: "DAWEBCO — Bold Web Frameworks Built to Outperform" },
      {
        property: "og:description",
        content:
          "DAWEBCO builds bold, high-performance web frameworks engineered for trust, speed, and continuous revenue growth.",
      },
    ],
  }),
  component: Index,
});

const TIMELINE = [
  { icon: Search, title: "Discover", kicker: "Phase 01", desc: "Understand your business, audience, and competitive edge." },
  { icon: ClipboardList, title: "Plan", kicker: "Phase 02", desc: "Map structure, flow, and a roadmap for strategic execution." },
  { icon: Palette, title: "Design", kicker: "Phase 03", desc: "Craft pixel-perfect interfaces that express your brand beautifully." },
  { icon: Code2, title: "Develop", kicker: "Phase 04", desc: "Build fast, secure, accessible code with continuous quality checks." },
  { icon: Rocket, title: "Launch", kicker: "Phase 05", desc: "Stress-test, tune performance, and deploy with maximum impact." },
  { icon: LifeBuoy, title: "Support", kicker: "Phase 06", desc: "Monitor, iterate, and evolve the product as your business grows." },
];

function Index() {
  return <IndexInner />;
}

function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 30%", "end 70%"],
  });
  
  const [activeIdx, setActiveIdx] = useState(0);

  // Optimized Scroll Tracking: Avoids triggering state resets if index matches
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(TIMELINE.length - 1, Math.max(0, Math.floor(v * TIMELINE.length)));
    setActiveIdx((prev) => (prev !== next ? next : prev));
  });

  const accent = isDark ? "#3B5998" : "#D97757";
  const accentRgb = isDark ? "59,89,152" : "217,119,87";
  const bgGradient = isDark
    ? "linear-gradient(180deg, #05060a 0%, #0a0a1a 15%, #2a0a4a 50%, #0a0a1a 85%, #05060a 100%)"
    : "linear-gradient(180deg, #FBF3E7 0%, #F9E1CB 50%, #FBF3E7 100%)";
  const borderCol = isDark ? "#05060a" : "#F5C6A5";
  const headingClr = isDark ? "#ffffff" : "#3B2A1A";
  const mutedClr = isDark ? "text-slate-400" : "text-[#8a6f55]";
  const navInactive = isDark ? "text-slate-400" : "text-[#a08872]";
  const navActive = isDark ? "text-white" : "text-[#3B2A1A]";
  const bodyClr = isDark ? "text-slate-300/80" : "text-[#5a4432]";
  const cardBg = isDark ? "rgba(20,20,50,0.8)" : "rgba(255,250,243,0.85)";
  const cardBorder = isDark ? "#1e1e5a" : "#EAD3B8";
  const cardBorderActive = isDark ? "rgba(30,30,80,0.9)" : "#D97757";
  const cardShadowActive = isDark
    ? "0 30px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(30,30,80,0.6)"
    : "0 30px 60px -20px rgba(217,119,87,0.35), 0 0 0 1px rgba(217,119,87,0.4)";
  const cardShadow = isDark
    ? "0 20px 40px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(30,30,80,0.4)"
    : "0 20px 40px -20px rgba(217,119,87,0.25), 0 0 0 1px rgba(234,211,184,0.6)";
  const iconInactiveBg = isDark ? "rgba(30,30,90,0.6)" : "#FBEAD7";
  const iconInactiveBorder = isDark ? "rgba(255,255,255,0.1)" : "#EAD3B8";
  const bigNumInactive = isDark ? "rgba(255,255,255,0.03)" : "rgba(217,119,87,0.06)";
  const navRule = isDark ? "rgba(255,255,255,0.05)" : "rgba(217,119,87,0.15)";

  return (
    <section
      ref={sectionRef}
      className={`relative py-16 md:py-24 lg:py-32 border-y-8 will-change-transform ${isDark ? "text-slate-200" : "text-[#3B2A1A]"}`}
      style={{
        background: bgGradient,
        borderTopColor: borderCol,
        borderBottomColor: borderCol,
        ["--accent" as any]: accent,
      }}
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-24 items-start">
        {/* Sticky Left */}
        <aside className="lg:col-span-5 lg:sticky lg:top-24 space-y-6 md:space-y-10">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8" style={{ background: accent }} />
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium" style={{ color: accent }}>
                Execution Framework
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]" style={{ color: headingClr }}>
              How we bring{" "}
              <span className="italic font-serif opacity-80">vision</span> to life.
            </h2>
            <p className={`text-sm md:text-lg max-w-md leading-relaxed ${mutedClr}`}>
              A rigorous, six-stage methodology for teams that value precision over shortcuts, and craft over convenience.
            </p>
          </div>

          <nav className="hidden lg:block space-y-3" aria-label="Process steps">
            {TIMELINE.map((step, i) => {
              const isActive = i === activeIdx;
              return (
                <div
                  key={step.title}
                  className={`flex items-center gap-3 md:gap-6 transition-all duration-300 ${
                    isActive ? `${navActive} opacity-100 translate-x-1` : `${navInactive} opacity-40`
                  }`}
                >
                  <span
                    className="text-xs font-mono transition-colors"
                    style={isActive ? { color: accent } : undefined}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm uppercase tracking-widest">{step.title}</span>
                  <span
                    aria-hidden
                    className="h-px flex-grow transition-all duration-300"
                    style={{ background: isActive ? accent : navRule }}
                  />
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Scrolling Right */}
        <div className="lg:col-span-7 space-y-10">
          {TIMELINE.map((step, i) => {
            const Icon = step.icon;
            const isActive = i === activeIdx;
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative group will-change-transform"
              >
                <div
                  aria-hidden
                  className="absolute -left-4 md:-left-10 top-0 text-[4.5rem] md:text-[10rem] font-bold leading-none select-none pointer-events-none transition-colors duration-500"
                  style={{
                    color: isActive ? `rgba(${accentRgb},0.14)` : bigNumInactive,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  className="relative border rounded-2xl p-4 md:p-8 overflow-hidden backdrop-blur-sm transition-all duration-300"
                  style={{
                    background: cardBg,
                    borderColor: isActive ? cardBorderActive : cardBorder,
                    boxShadow: isActive ? cardShadowActive : cardShadow,
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute top-0 right-0 w-40 h-40 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to bottom left, rgba(${accentRgb},0.2), transparent)`,
                      opacity: isActive ? 1 : 0.4,
                    }}
                  />
                  <header className="mb-3 flex items-start justify-between gap-6">
                    <div>
                      <span className="font-mono text-xs tracking-widest uppercase block mb-1" style={{ color: accent }}>
                        {step.kicker}
                      </span>
                      <h3 className="text-lg md:text-2xl font-semibold tracking-tight" style={{ color: headingClr }}>
                        {step.title}
                      </h3>
                    </div>
                    <div
                      className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl border flex items-center justify-center transition-colors duration-300"
                      style={{
                        background: isActive ? accent : iconInactiveBg,
                        borderColor: isActive ? accent : iconInactiveBorder,
                        color: isActive ? "#ffffff" : accent,
                      }}
                    >
                      <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </div>
                  </header>
                  <p className={`text-sm md:text-base leading-relaxed ${bodyClr}`}>
                    {step.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndexInner() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const HeroBg = isDark ? ShaderBackground : AuroraBackground;
  
  const [chatOpen, setChatOpen] = useState(false);
  const [preview, setPreview] = useState<null | "dental" | "cafe" | "gym" | "fashion">(null);
  
  // Performance Optimization: Section visibility viewport state tracking
  const [renderHeroMascot, setRenderHeroMascot] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setRenderHeroMascot(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
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

  const TEMPLATES = [
    { id: "dental" as const, title: "Dental Clinic", tag: "HEALTHCARE", Icon: Stethoscope, image: tplDental.url },
    { id: "cafe" as const, title: "Café", tag: "FOOD & DRINK", Icon: Coffee, image: tplCafe.url },
    { id: "gym" as const, title: "Gym", tag: "FITNESS", Icon: Dumbbell, image: tplGym.url },
    { id: "fashion" as const, title: "Fashion", tag: "CLOTHING", Icon: Shirt, image: tplFashion.url },
  ];

  return (
    <div className="min-h-screen bg-background text-black dark:bg-black dark:text-white transition-colors">
      <nav
        className="relative px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between max-w-7xl mx-auto animate-fade-in-up overflow-hidden"
        style={{ opacity: 0, animationDelay: "0.1s" }}
      >
        <div className="absolute inset-0 bg-transparent pointer-events-none" />
        <a href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="relative z-10 flex items-center gap-2" aria-label="DaWebCo home">
          <img
            src={dawebcoLogo.url}
            alt="DaWebCo"
            width={683}
            height={128}
            className="h-2 sm:h-3 md:h-3 lg:h-3.5 w-auto object-contain"
          />
        </a>
        <div className="relative z-10 hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          <a href="#our-process" onClick={handleScrollTo("our-process")} className="text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white">
            Our Process
          </a>
          <a href="#services" onClick={handleScrollTo("services")} className="text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white">
            Services
          </a>
          <a href="#pricing" onClick={handleScrollTo("pricing")} className="text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white">
            Pricing
          </a>
          <a href="#contact" onClick={handleScrollTo("contact")} className="text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white">
            Contact
          </a>
        </div>
        <div className="relative z-10 flex items-center gap-4">
          <ToggleSwitch />
        </div>
      </nav>

      <div ref={heroRef} className="w-full">
        <HeroBg className={isDark ? "h-[calc(100dvh-56px)] overflow-hidden md:h-[calc(100dvh-56px)] md:overflow-visible" : "h-[calc(100dvh-56px)] overflow-hidden sm:h-auto sm:min-h-[calc(100vh-64px)] sm:overflow-visible"}>
          <section
            className={`relative w-full flex flex-col items-center ${
              isDark
                ? "h-full justify-start pt-20 pb-28 md:justify-center md:pt-0 md:pb-0"
                : "h-full justify-start pt-20 pb-28 sm:h-auto sm:min-h-[calc(100vh-64px)] sm:justify-center sm:py-28 md:py-32"
            }`}
          >
            {/* Optimized performance: Completely drops out heavy Canvas 3D models when out of viewport range */}
            {renderHeroMascot && (
              <>
                {isDark ? (
                  <div className="absolute inset-x-0 bottom-0 md:inset-x-auto md:right-0 md:w-1/2 h-[clamp(340px,56vh,520px)] md:h-[65vh] z-0 flex justify-end overflow-visible pointer-events-none">
                    <InteractiveRobotSpline className="w-full h-full max-w-[280px] md:max-w-none scale-[clamp(0.40,0.46,0.55)] md:scale-100 origin-bottom pointer-events-auto" />
                  </div>
                ) : (
                  <div className="absolute bottom-14 right-3 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-[120px] h-[110px] sm:w-[220px] sm:h-[198px] md:w-[286px] md:h-[253px] lg:w-[352px] lg:h-[308px] z-0 pointer-events-auto">
                    <BunnyModel className="w-full h-full cursor-grab active:cursor-grabbing" />
                  </div>
                )}
              </>
            )}

            <button
              type="button"
              onClick={() => setChatOpen(true)}
              aria-label="Open chat assistant"
              className="absolute bottom-2 right-3 dark:bottom-0 dark:right-3 dark:left-auto md:dark:bottom-2 md:dark:right-3 md:dark:left-auto z-20 h-12 w-[160px] rounded-t-md bg-black border border-white/30 border-b-0 text-white text-sm font-medium flex items-center justify-center hover:bg-neutral-900 hover:border-white/60 transition-colors shadow-lg"
            >
              Ask COCO
            </button>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
              className={`relative z-10 px-6 max-w-7xl mx-auto text-center ${!isDark ? "pointer-events-none" : ""}`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight mb-4 sm:mb-8 dark:mb-2 dark:sm:mb-8">
                <span className="block text-black dark:text-white">Your competitors have one.</span>
                <span className="block bg-gradient-to-r from-black via-gray-500 to-gray-400 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent -ml-2">
                  Do you?
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-12 dark:mb-3 dark:sm:mb-12 max-w-xl mx-auto">
                We build custom websites engineered for{" "}
                <span className="font-semibold text-black dark:text-white">trust</span>,{" "}
                <span className="font-semibold text-black dark:text-white">speed</span>, and continuous revenue{" "}
                <span className="font-semibold text-black dark:text-white">growth</span> that turn visitors into paying
                customers. Stop losing leads to your competitors.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-900 dark:hover:bg-gray-200 transition-colors ${!isDark ? "pointer-events-auto" : ""}`}>
                  Book Free Discovery Call <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </section>
        </HeroBg>
      </div>

      <div id="our-process" className="scroll-mt-24" />
      <ProcessSection />

      <section
        className={`relative py-16 md:py-24 lg:py-32 border-y-8 ${isDark ? "text-slate-200" : "text-[#3B2A1A]"}`}
        style={{
          background: isDark
            ? "linear-gradient(180deg, #05060a 0%, #0a0a1a 50%, #05060a 100%)"
            : "linear-gradient(180deg, #FBF3E7 0%, #F9E1CB 50%, #FBF3E7 100%)",
          borderTopColor: isDark ? "#05060a" : "#F5C6A5",
          borderBottomColor: isDark ? "#05060a" : "#F5C6A5",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-8" style={{ background: isDark ? "#3B5998" : "#D97757" }} />
            <p className="text-[10px] uppercase tracking-[0.3em] font-medium" style={{ color: isDark ? "#3B5998" : "#D97757" }}>
              Our Work Speaks
            </p>
          </div>
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] max-w-2xl" style={{ color: isDark ? "#ffffff" : "#3B2A1A" }}>
              See your website{" "}
              <span className="italic font-serif opacity-80">come alive.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {TEMPLATES.map((t) => {
              return (
                <button
                  key={t.id}
                  onClick={() => setPreview(t.id)}
                  className="group relative rounded-2xl overflow-hidden aspect-[3/4] text-left text-white border backdrop-blur-sm focus:outline-none focus:ring-2 transition-all duration-300 hover:-translate-y-1.5 will-change-transform"
                  style={{
                    background: isDark ? "rgba(20,20,50,0.8)" : "rgba(255,250,243,0.9)",
                    borderColor: isDark ? "#1e1e5a" : "#EAD3B8",
                    boxShadow: isDark
                      ? "0 20px 40px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(30,30,80,0.4)"
                      : "0 20px 40px -20px rgba(217,119,87,0.3), 0 0 0 1px rgba(234,211,184,0.6)",
                  }}
                  aria-label={`Preview ${t.title} template`}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${t.image})` }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background: isDark
                        ? "linear-gradient(180deg, rgba(5,6,10,0.35) 0%, rgba(10,10,26,0.65) 55%, rgba(5,6,10,0.92) 100%)"
                        : "linear-gradient(180deg, rgba(59,42,26,0.15) 0%, rgba(59,42,26,0.45) 55%, rgba(59,42,26,0.85) 100%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute top-0 right-0 w-40 h-40 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: isDark
                        ? "linear-gradient(to bottom left, rgba(59,89,152,0.35), transparent)"
                        : "linear-gradient(to bottom left, rgba(245,198,165,0.55), transparent)",
                    }}
                  />
                  <div className="relative h-full flex flex-col justify-between p-4 md:p-6">
                    <div>
                      <p className="text-[10px] tracking-[0.25em] font-semibold" style={{ color: isDark ? "#3B5998" : "#FBEAD7" }}>
                        {t.tag}
                      </p>
                      <h3 className="text-xl md:text-2xl font-semibold leading-tight mt-2 text-white">
                        {t.title}
                      </h3>
                    </div>
                    <div className="flex items-end justify-end">
                      <span
                        className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors group-hover:text-white"
                        style={{
                          background: isDark ? "rgba(30,30,90,0.4)" : "rgba(217,119,87,0.35)",
                          borderColor: isDark ? "rgba(59,89,152,0.4)" : "rgba(255,240,220,0.5)",
                          color: isDark ? "#8fa8d4" : "#FBEAD7",
                        }}
                      >
                        Preview <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div id="services" className="scroll-mt-24" />
      <AiChatbotSection />

      <div id="pricing" className="scroll-mt-24" />
      <PricingSection />

      <ContactSection id="contact" />
      <Footer />

      <AnimatePresence>
        {preview && (
          <motion.div
            key={preview}
            layoutId={`tpl-overlay-${preview}`}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
          >
            <button
              onClick={() => setPreview(null)}
              aria-label="Close preview"
              className="fixed top-3 right-3 z-[110] w-9 h-9 rounded-full bg-white text-black border border-black/10 shadow flex items-center justify-center hover:bg-gray-100"
            >
              <X className="w-4 h-4" />
            </button>
            {preview === "dental" && <DentalPreview onExit={() => setPreview(null)} />}
            {preview === "cafe" && <CafePreview onExit={() => setPreview(null)} />}
            {preview === "gym" && <GymPreview onExit={() => setPreview(null)} />}
            {preview === "fashion" && <FashionPreview onExit={() => setPreview(null)} />}
          </motion.div>
        )}
      </AnimatePresence>

      <ChatDialog open={chatOpen} onOpenChange={setChatOpen} />
    </div>
  );
}
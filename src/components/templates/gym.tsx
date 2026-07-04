import { motion } from "framer-motion";
import { ArrowRight, Check, Dumbbell, Quote } from "lucide-react";
import hero from "@/assets/gym-hero.jpg.asset.json";
import about from "@/assets/gym-about.jpg.asset.json";
import deadlift from "@/assets/gym-deadlift.jpg.asset.json";
import trial from "@/assets/gym-trial.jpg.asset.json";
import coach1 from "@/assets/gym-coach1.jpg.asset.json";
import coach2 from "@/assets/gym-coach2.jpg.asset.json";
import coach3 from "@/assets/gym-coach3.jpg.asset.json";
import coach4 from "@/assets/gym-coach4.jpg.asset.json";

const NEON = "#D6FF3B";
const INK = "#0B0B0B";
const PANEL = "#141414";

function TopBar({ onExit }: { onExit: () => void }) {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-black/85 backdrop-blur text-white border-b border-white/10">
      <span className="text-[10px] tracking-[0.3em] font-semibold opacity-80">PREVIEW · GYMTEAM</span>
      <button
        onClick={onExit}
        className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-1.5 text-xs font-semibold hover:bg-gray-200 transition-colors"
      >
        Exit Preview
      </button>
    </div>
  );
}

function Nav() {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2 font-black tracking-widest">
          <Dumbbell className="w-5 h-5" style={{ color: NEON }} />
          <span>GYMTEAM</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[12px] tracking-widest uppercase">
          {["Home", "About", "Shop", "Blog", "Contact"].map((l) => (
            <a key={l} className="text-white/70 hover:text-white">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-[11px] tracking-widest">
          <button className="text-white/70 hover:text-white">EN</button>
          <span className="opacity-40">/</span>
          <button className="text-white/70 hover:text-white">DE</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${hero.url})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-8 py-32 md:py-44">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.95] tracking-tight">
            Work with<br />
            <span style={{ color: NEON }}>professionals</span>
          </h1>
          <p className="mt-6 text-white/70 max-w-md leading-relaxed">
            Individual training programs, convenient schedule, certified coaches. Push past your limit — every rep counts.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              className="px-6 py-3 rounded-full text-sm font-bold tracking-widest text-black inline-flex items-center gap-2"
              style={{ background: NEON }}
            >
              ENTRY NOW <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 rounded-full text-sm font-bold tracking-widest text-white border border-white/30 hover:border-white transition">
              LEARN MORE
            </button>
          </div>
        </motion.div>
      </div>
      {/* Ticker */}
      <div className="relative border-y border-white/10 bg-black/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center gap-8 overflow-x-auto text-[11px] tracking-[0.3em] text-white/70 whitespace-nowrap">
          <span style={{ color: NEON }}>◆</span> CONVENIENT LOCATION &amp; SCHEDULE
          <span style={{ color: NEON }}>◆</span> INDIVIDUAL TRAINING PROGRAM
          <span style={{ color: NEON }}>◆</span> BEST PROFESSIONAL COACHES
          <span style={{ color: NEON }}>◆</span> 24/7 ACCESS
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { title: "Muscles Building", desc: "Progressive overload programs designed to grow strength and mass safely.", featured: true },
  { title: "Cardio Endurance", desc: "HIIT, cycling and running plans that build stamina without burnout." },
  { title: "Flexibility & Recovery", desc: "Mobility, stretching and recovery sessions to keep you injury-free." },
];

function WhyChooseUs() {
  return (
    <section className="py-24" style={{ background: INK }}>
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">Why choose us</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {WHY.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-8 flex flex-col justify-between min-h-[240px]"
              style={{
                background: w.featured ? NEON : PANEL,
                color: w.featured ? "#000" : "#fff",
              }}
            >
              <div>
                <Dumbbell className="w-8 h-8" style={{ color: w.featured ? "#000" : NEON }} />
                <h3 className="mt-6 text-lg font-bold uppercase tracking-wide">{w.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${w.featured ? "text-black/70" : "text-white/60"}`}>
                  {w.desc}
                </p>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold tracking-widest">
                LEARN MORE <ArrowRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">About our gym</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-10 items-stretch">
          <div className="relative rounded-2xl overflow-hidden min-h-[440px]">
            <img src={about.url} alt="About" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div
              className="absolute bottom-6 right-6 w-28 h-28 rounded-full flex flex-col items-center justify-center text-black text-center"
              style={{ background: NEON }}
            >
              <span className="text-2xl font-black">10+</span>
              <span className="text-[10px] font-bold tracking-widest mt-1">YEARS</span>
            </div>
          </div>
          <div>
            <p className="text-white/70 leading-relaxed">
              A gym isn't just equipment — it's a community of people showing up for themselves every day. Our coaches build programs around your goals, your schedule, and your body.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl p-6" style={{ background: PANEL }}>
                <p className="text-sm font-bold uppercase" style={{ color: NEON }}>Lorem Ipsum Color</p>
                <p className="mt-2 text-xs text-white/60 leading-relaxed">
                  Assembled masterfully with attention to detail. Trainers, equipment, atmosphere.
                </p>
              </div>
              <div className="rounded-2xl p-6" style={{ background: PANEL }}>
                <p className="text-sm font-bold uppercase" style={{ color: NEON }}>Lorem Ipsum Dolor</p>
                <p className="mt-2 text-xs text-white/60 leading-relaxed">
                  Individual plans, group classes and open gym — all under one roof, 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const COACHES = [
  { name: "Jane Cooper", role: "Head Coach", img: coach1.url },
  { name: "Brooklyn Simmons", role: "Strength", img: coach2.url },
  { name: "Savannah Nguyen", role: "Conditioning", img: coach4.url },
  { name: "Kathryn Murphy", role: "Mobility", img: coach3.url },
];

function Coaches() {
  return (
    <section className="py-24" style={{ background: INK }}>
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">Our best coaches</h2>
        <p className="mt-3 text-white/60 max-w-xl text-sm">
          Certified strength, conditioning, and mobility coaches ready to build your custom program.
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
          {COACHES.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4]"
            >
              <img src={c.img} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold">{c.name}</p>
                <p className="text-[10px] tracking-widest" style={{ color: NEON }}>{c.role.toUpperCase()}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const SCHEDULE = [
  ["Open Gym", "Cardio", "Open Gym", "Crossfit", "Stretching", "Crossfit", "Open Gym"],
  ["Crossfit", "Powerlifting", "Cardio", "Crossfit", "Powerlifting", "Open Gym", "Cardio"],
  ["Cardio", "Open Gym", "Crossfit", "Open Gym", "Stretching", "Crossfit", "Powerlifting"],
];

function Schedule() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Class schedule</h2>
          <button className="hidden md:inline-flex items-center gap-2 text-[11px] font-bold tracking-widest" style={{ color: NEON }}>
            VIEW FULL <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm min-w-[720px]">
            <thead>
              <tr className="text-[11px] tracking-widest text-white/60">
                <th className="p-4 text-left">TIME</th>
                {DAYS.map((d) => (
                  <th key={d} className="p-4 text-left">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["08:00", "10:00", "12:00"].map((time, ri) => (
                <tr key={time} className="border-t border-white/10">
                  <td className="p-4 font-bold" style={{ color: NEON }}>{time}</td>
                  {SCHEDULE[ri].map((cls, ci) => (
                    <td key={ci} className="p-4 text-white/70">{cls}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Cta1() {
  return (
    <section
      className="h-[380px] bg-cover bg-center"
      style={{ backgroundImage: `url(${deadlift.url})` }}
      aria-label="Deadlift"
    />
  );
}

const PASSES = [
  { name: "CROSSFIT", price: "120", bullets: ["Unlimited crossfit classes", "Personal coach onboarding", "Nutrition guide"] },
  { name: "OPEN GYM", price: "109", bullets: ["24/7 open gym access", "Locker + shower access", "Guest pass monthly"] },
];

function Pricing() {
  return (
    <section className="py-24" style={{ background: INK }}>
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">Our gym passes</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {PASSES.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-8 border border-white/10"
              style={{ background: PANEL }}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold tracking-widest text-white/70">{p.name}</p>
                <div className="w-10 h-6 rounded-full border border-white/20 flex items-center px-1">
                  <span className="w-3 h-3 rounded-full block" style={{ background: NEON }} />
                </div>
              </div>
              <p className="mt-6 text-5xl font-black text-white">
                {p.price}<span style={{ color: NEON }}>$</span>
                <span className="text-sm text-white/50 font-normal">/mo</span>
              </p>
              <ul className="mt-6 space-y-3">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-white/70">
                    <Check className="w-4 h-4" style={{ color: NEON }} /> {b}
                  </li>
                ))}
              </ul>
              <button
                className="mt-8 w-full py-3 rounded-full text-sm font-bold tracking-widest text-black"
                style={{ background: NEON }}
              >
                BUY NOW
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Reviews from clients</h2>
        <div className="mt-10 relative rounded-2xl overflow-hidden min-h-[360px]" style={{ background: PANEL }}>
          <img src={coach1.url} loading="lazy" alt="" className="absolute inset-0 w-1/2 h-full object-cover" />
          <div
            className="absolute right-8 top-1/2 -translate-y-1/2 max-w-md p-8 rounded-2xl"
            style={{ background: NEON, color: "#000" }}
          >
            <Quote className="w-6 h-6" />
            <p className="mt-4 text-lg font-semibold leading-snug">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="mt-6 text-xs font-bold tracking-widest">— ALEXEY FLORES</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const POSTS = [
  { title: "How to build a lasting workout habit", tag: "MINDSET" },
  { title: "5 lifts every beginner should master", tag: "STRENGTH" },
  { title: "Recovery essentials for athletes", tag: "RECOVERY" },
];

function Blog() {
  return (
    <section className="py-24" style={{ background: INK }}>
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">Blog &amp; news</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {POSTS.map((p, i) => (
            <article key={p.title} className="rounded-2xl overflow-hidden" style={{ background: PANEL }}>
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(${[coach2.url, coach3.url, coach4.url][i]})` }}
              />
              <div className="p-6">
                <span
                  className="text-[10px] font-bold tracking-widest px-3 py-1 rounded-full text-black"
                  style={{ background: NEON }}
                >
                  {p.tag}
                </span>
                <h3 className="mt-4 text-white font-bold text-lg leading-tight">{p.title}</h3>
                <button className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-widest" style={{ color: NEON }}>
                  READ MORE <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trial() {
  return (
    <section
      className="relative min-h-[420px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${trial.url})` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-lg text-white">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Get your first trial visit</h2>
          <p className="mt-4 text-white/70 text-sm">
            Leave your contact and a coach will reach out within 24 hours to book your first session — completely free.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-sm placeholder-white/50 focus:outline-none focus:border-white"
            />
            <button
              type="button"
              className="px-6 py-3 rounded-full text-sm font-bold tracking-widest text-black"
              style={{ background: NEON }}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    ["INFO", ["About", "Careers", "Press", "Contacts"]],
    ["SERVICES", ["Personal", "Group", "Nutrition", "Recovery"]],
    ["SUPPORT", ["Help", "FAQ", "Terms", "Privacy"]],
  ] as const;
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-black tracking-widest text-lg">
            <Dumbbell className="w-5 h-5" style={{ color: NEON }} /> GYMTEAM
          </div>
          <p className="mt-4 text-white/60 text-sm max-w-xs">
            A gym for people who show up. Individual programs, certified coaches, 24/7 access.
          </p>
        </div>
        {cols.map(([title, items]) => (
          <div key={title}>
            <p className="text-[11px] font-bold tracking-widest text-white/60 mb-4">{title}</p>
            <ul className="space-y-2 text-sm text-white/80">
              {items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © GYMTEAM. All rights reserved.
      </div>
    </footer>
  );
}

export function GymTemplate({ onExit }: { onExit: () => void }) {
  return (
    <div className="bg-black text-white">
      <TopBar onExit={onExit} />
      <Nav />
      <Hero />
      <WhyChooseUs />
      <About />
      <Coaches />
      <Schedule />
      <Cta1 />
      <Pricing />
      <Reviews />
      <Blog />
      <Trial />
      <Footer />
    </div>
  );
}
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Phone, Star, Utensils, ChefHat, Coffee } from "lucide-react";
import cafeHero from "@/assets/cafe-hero.jpg.asset.json";
import cafeDishes from "@/assets/cafe-dishes.jpg.asset.json";
import cafeChef from "@/assets/cafe-chef.jpg.asset.json";

const ORANGE = "#E85A2C";
const CREAM = "#FDF3EE";
const INK = "#0F0F10";

function TopBar({ onExit }: { onExit: () => void }) {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-black/85 backdrop-blur text-white border-b border-white/10">
      <span className="text-[10px] tracking-[0.3em] font-semibold opacity-80">PREVIEW · DELISH CAFÉ</span>
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
    <header className="bg-[#111] text-white/90 text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-2 border-b border-white/10 text-[11px] text-white/60">
        <span>Mon–Wed: 11a–9p · Thurs–Sat: 11a–10p</span>
        <span className="hidden md:inline">reservation@delish.com · +1 256 3254 2568 · 296 Ridao, Berlin</span>
      </div>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2 font-semibold tracking-widest text-lg">
          <span style={{ color: ORANGE }}>✕</span> DELISH
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide">
          {["Home", "Pages", "Menu", "Shop", "Blog", "Contact"].map((l) => (
            <a key={l} className="hover:text-white/100 text-white/70">{l}</a>
          ))}
        </nav>
        <button
          className="text-xs font-semibold tracking-widest px-5 py-3 rounded-sm"
          style={{ background: ORANGE, color: "white" }}
        >
          BOOK A TABLE
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative min-h-[86vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${cafeHero.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.4em] rotate-180 [writing-mode:vertical-rl] opacity-70">
        OPENING HOURS · 10:00–23:00
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.4em] [writing-mode:vertical-rl] opacity-70">
        OPENING HOURS · 10:00–23:00
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-4xl border border-white/20 py-16"
      >
        <p className="text-xs md:text-sm tracking-[0.5em] font-light opacity-80">THE GREAT</p>
        <h1 className="mt-4 text-6xl md:text-8xl font-serif italic tracking-tight">
          Flavored Food
        </h1>
        <p className="mt-4 text-xs md:text-sm tracking-[0.5em] font-light opacity-80">PART OF US</p>
        <div className="mt-10 flex items-center justify-center gap-6 text-xs tracking-[0.3em]">
          <button className="border-b border-white pb-1 hover:opacity-80" style={{ borderColor: ORANGE, color: ORANGE }}>
            BOOK A TABLE
          </button>
          <button className="border-b border-white pb-1 hover:opacity-80">VIEW MENU</button>
        </div>
      </motion.div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={cafeChef.url} loading="lazy" width={1024} height={1024} alt="Chef" className="w-full h-[520px] object-cover rounded-sm" />
          <div
            className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full flex flex-col items-center justify-center text-white text-center text-xs font-semibold tracking-widest"
            style={{ background: ORANGE }}
          >
            <span className="text-2xl font-serif italic">25+</span>
            <span className="mt-1">YEARS OF<br />EXPERIENCE</span>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.4em] font-semibold" style={{ color: ORANGE }}>OUR RESERVATION</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif italic leading-tight text-[#0F0F10]">
            Welcome to our<br />luxury restaurant
          </h2>
          <p className="mt-6 text-neutral-600 leading-relaxed">
            The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef's attention to detail.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-full grid place-items-center text-white"
              style={{ background: ORANGE }}
            >
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] text-neutral-500">HOTLINE 24/7</p>
              <p className="font-semibold text-lg text-[#0F0F10]">+256 3254 2568</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { title: "Wedding Service", desc: "The perfect setting for your reception with a curated tasting menu and full catering.", Icon: Utensils },
  { title: "Buffet Service", desc: "Assembled masterfully with attention to seasonal produce and refined technique.", Icon: ChefHat },
  { title: "Party Service", desc: "Signature bites, craft cocktails and warm hospitality for private events.", Icon: Coffee },
];

function Services() {
  return (
    <section className="py-24" style={{ background: CREAM }}>
      <div className="max-w-7xl mx-auto px-8 text-center">
        <p className="text-xs tracking-[0.4em] font-semibold" style={{ color: ORANGE }}>OUR SERVICES</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-serif italic text-[#0F0F10]">Our Restaurant Service</h2>
        <div className="w-10 h-[3px] mx-auto mt-6" style={{ background: ORANGE }} />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-8 text-left"
            >
              <div
                className="w-16 h-16 rounded-full grid place-items-center text-white mb-6"
                style={{ background: ORANGE }}
              >
                <s.Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F0F10]">{s.title}</h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
              <button
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-widest"
                style={{ color: ORANGE }}
              >
                READ MORE <ArrowRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const DISHES = [
  { name: "Braised Short Ribs", price: "$18.00" },
  { name: "Roasted Vegetable Platter", price: "$18.00" },
  { name: "Classic Caesar Salad", price: "$18.00" },
  { name: "Szechuan Beef Stir-Fry", price: "$18.00" },
  { name: "Vegan Buddha Bowl", price: "$15.00" },
  { name: "Chocolate Lava Cake", price: "$10.00" },
];

function Menu() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.4em] font-semibold" style={{ color: ORANGE }}>FOOD MENU</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-serif italic text-[#0F0F10]">Our Delicious Foods</h2>
          </div>
          <div className="flex items-center gap-6 text-xs font-semibold tracking-widest">
            <button className="border-b-2 pb-1" style={{ borderColor: ORANGE, color: ORANGE }}>ALL FOOD</button>
            <button className="text-neutral-500">BREAKFAST</button>
            <button className="text-neutral-500">LUNCH</button>
            <button className="text-neutral-500">DINNER</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ul className="divide-y divide-neutral-200">
            {DISHES.map((d) => (
              <li key={d.name} className="flex items-center justify-between py-5">
                <div>
                  <p className="font-semibold text-[#0F0F10]">{d.name}</p>
                  <p className="text-xs text-neutral-500 mt-1">Fine cuts, seasonal spices, chef's fusion touch.</p>
                </div>
                <span className="font-semibold" style={{ color: ORANGE }}>{d.price}</span>
              </li>
            ))}
          </ul>
          <img src={cafeDishes.url} loading="lazy" width={1024} height={1024} alt="Dishes" className="w-full h-[520px] object-cover rounded-sm" />
        </div>
      </div>
    </section>
  );
}

const STATS = [
  ["15", "COOL PROJECTS"],
  ["15", "TOTAL AWARDS WIN"],
  ["20", "UNIQUE FOOD SPECIALTIES"],
  ["69", "HARD TEAM MEMBERS"],
];

function Stats() {
  return (
    <section className="py-20" style={{ background: INK }}>
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-10 text-white text-center">
        {STATS.map(([n, l]) => (
          <div key={l}>
            <div className="text-6xl font-serif italic" style={{ color: ORANGE }}>{n}</div>
            <div className="mt-3 text-[10px] tracking-[0.3em] opacity-70">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24" style={{ background: CREAM }}>
      <div className="max-w-7xl mx-auto px-8 text-center">
        <p className="text-xs tracking-[0.4em] font-semibold" style={{ color: ORANGE }}>CLIENT TESTIMONIAL</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-serif italic text-[#0F0F10]">Our Customer Feedbacks</h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6 text-left">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white p-8 border-l-4" style={{ borderColor: ORANGE }}>
              <div className="flex gap-1 mb-4" style={{ color: ORANGE }}>
                {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-neutral-600 leading-relaxed">
                "The only minor downside was the noise level, which made conversation a bit challenging at times. However, this did not significantly detract from the overall experience. The Culinary Corner excels in delivering delicious food and exceptional service."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-neutral-200" />
                <div>
                  <p className="font-semibold text-[#0F0F10]">Amanda Martin</p>
                  <p className="text-xs text-neutral-500">Food Reviewer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reservation() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="p-10" style={{ background: CREAM }}>
          <p className="text-xs tracking-[0.4em] font-semibold text-center" style={{ color: ORANGE }}>BOOK A TABLE</p>
          <h3 className="mt-4 text-3xl md:text-4xl font-serif italic text-center text-[#0F0F10]">Make Reservation</h3>
          <div className="mt-8 space-y-4">
            <select className="w-full bg-white border border-neutral-200 px-4 py-3 text-sm">
              <option>1 Person</option><option>2 People</option><option>4 People</option>
            </select>
            <input type="date" className="w-full bg-white border border-neutral-200 px-4 py-3 text-sm" />
            <input type="time" className="w-full bg-white border border-neutral-200 px-4 py-3 text-sm" />
            <button className="w-full py-3 text-white text-xs font-semibold tracking-widest" style={{ background: ORANGE }}>
              BOOK NOW
            </button>
          </div>
        </div>
        <img src={cafeHero.url} loading="lazy" width={1024} height={1024} alt="Interior" className="w-full h-[460px] object-cover" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="text-white/80" style={{ background: INK }}>
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <div className="font-semibold tracking-widest text-lg text-white">
            <span style={{ color: ORANGE }}>✕</span> DELISH
          </div>
          <p className="mt-4 text-white/60 leading-relaxed text-xs">
            Warm interiors, seasonal menus, and flavors crafted with heart. Reserve your table today.
          </p>
        </div>
        <div>
          <p className="text-white text-xs tracking-[0.3em] font-semibold mb-4">GET IN TOUCH</p>
          <p className="flex items-start gap-2 text-white/60 text-xs mb-2"><MapPin className="w-4 h-4 mt-0.5" style={{ color: ORANGE }} /> 5th St. Berlin, London E21, UK</p>
          <p className="flex items-center gap-2 text-white/60 text-xs mb-2"><Phone className="w-4 h-4" style={{ color: ORANGE }} /> +91 656 123456</p>
        </div>
        <div>
          <p className="text-white text-xs tracking-[0.3em] font-semibold mb-4">FOOD MENU</p>
          <ul className="space-y-2 text-white/60 text-xs">
            <li>White Castle</li><li>Beef Sandwich</li><li>Cherry Limeade</li><li>Wendy's Frosty</li>
          </ul>
        </div>
        <div>
          <p className="text-white text-xs tracking-[0.3em] font-semibold mb-4">WORKING HOURS</p>
          <p className="text-white/60 text-xs flex items-center gap-2"><Clock className="w-4 h-4" style={{ color: ORANGE }} /> Mon–Fri: 09:00–22:00</p>
          <p className="text-white/60 text-xs mt-2">Sunday: 11:00–23:00</p>
          <p className="text-white/60 text-xs mt-2">Happy hour 17:00–21:00</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © Copyright Delish. All Rights Reserved.
      </div>
    </footer>
  );
}

export function CafeTemplate({ onExit }: { onExit: () => void }) {
  return (
    <div className="bg-white text-[#0F0F10]">
      <TopBar onExit={onExit} />
      <Nav />
      <Hero />
      <Welcome />
      <Services />
      <Menu />
      <Stats />
      <Testimonials />
      <Reservation />
      <Footer />
    </div>
  );
}
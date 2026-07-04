import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Instagram, Facebook, Send, Scissors, Shirt, Sparkles } from "lucide-react";
import heroBg from "@/assets/fashion-hero-bg.jpg.asset.json";
import rack from "@/assets/fashion-rack.jpg.asset.json";
import model1 from "@/assets/fashion-model1.jpg.asset.json";
import model2 from "@/assets/fashion-model2.jpg.asset.json";
import blog1 from "@/assets/fashion-blog1.jpg.asset.json";
import blog2 from "@/assets/fashion-blog2.jpg.asset.json";
import blog3 from "@/assets/fashion-blog3.jpg.asset.json";
import pol1 from "@/assets/fashion-polaroid1.jpg.asset.json";
import pol2 from "@/assets/fashion-polaroid2.jpg.asset.json";

const CREAM = "#F5EFE6";
const INK = "#141210";
const MUTED = "#8B7F72";

const serif = { fontFamily: '"Cormorant Garamond", "Playfair Display", ui-serif, Georgia, serif' };
const sans = { fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif' };

function TopBar({ onExit }: { onExit: () => void }) {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-black/85 backdrop-blur text-white border-b border-white/10">
      <span className="text-[10px] tracking-[0.3em] font-semibold opacity-80">PREVIEW · ATELIER</span>
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
    <header className="border-b border-black/10" style={{ background: CREAM }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6" style={sans}>
        <div className="text-[11px] tracking-[0.35em] text-black/60">ATELIER · EST. 2018</div>
        <div className="text-lg tracking-[0.5em] font-semibold" style={{ color: INK }}>ANNA · COOPER</div>
        <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.3em] uppercase text-black/70">
          {["Home", "Collection", "About", "Contact"].map((l) => (
            <a key={l} className="hover:text-black">{l}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundImage: `url(${heroBg.url})`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: CREAM }}
    >
      <div className="max-w-7xl mx-auto px-8 py-24 md:py-36 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
          style={{ color: INK }}
        >
          <h1
            style={serif}
            className="text-[64px] md:text-[128px] leading-[0.9] font-light tracking-tight text-center"
          >
            INDIVIDUAL<br />
            <span className="italic font-medium">luxury</span> APPROACH<br />
            <span className="italic font-normal">to</span> <span className="font-bold">CLIENTS</span>
          </h1>

          {/* floating polaroids */}
          <motion.img
            src={pol1.url}
            alt=""
            loading="lazy"
            initial={{ opacity: 0, rotate: -10, y: 20 }}
            animate={{ opacity: 1, rotate: -8, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="hidden md:block absolute left-[10%] top-[38%] w-[130px] shadow-xl"
          />
          <motion.img
            src={pol2.url}
            alt=""
            loading="lazy"
            initial={{ opacity: 0, rotate: 12, y: 20 }}
            animate={{ opacity: 1, rotate: 8, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="hidden md:block absolute right-[8%] top-[55%] w-[130px] shadow-xl"
          />

          {/* decorative circle */}
          <div className="absolute -right-24 top-4 w-72 h-72 rounded-full border border-black/20 opacity-40 hidden md:block" />
          <div className="absolute -left-24 bottom-8 w-56 h-56 rounded-full border border-black/20 opacity-40 hidden md:block" />
        </motion.div>

        <div className="mt-24 max-w-md mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] text-black/50" style={sans}>OUR STORY</p>
          <p className="mt-4 text-sm leading-relaxed text-black/70" style={sans}>
            A fashion house, boutique and retail atelier that specialises in luxury clothing, footwear and accessories — hand-tailored for every client.
          </p>
        </div>
      </div>

      {/* ticker */}
      <div className="border-y border-black/10 bg-white/40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center gap-6 overflow-x-auto whitespace-nowrap text-[11px] tracking-[0.4em] text-black/60" style={sans}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6">
              <span style={serif} className="text-lg italic">Fashion Design</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function RackImage() {
  return (
    <section style={{ background: CREAM }}>
      <div className="max-w-7xl mx-auto px-8 py-20">
        <motion.img
          src={rack.url}
          alt="Clothing rack"
          loading="lazy"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-full h-[280px] md:h-[440px] object-cover rounded-sm"
        />
      </div>
    </section>
  );
}

function Selected() {
  return (
    <section style={{ background: CREAM }}>
      <div className="max-w-6xl mx-auto px-8 py-24 text-center relative">
        <p className="text-[10px] tracking-[0.4em] text-black/50" style={sans}>SELECTED PROJECTS</p>
        <h2 style={serif} className="mt-6 text-5xl md:text-7xl leading-[0.95] font-light" >
          SIMPLE FIGURE<br />
          <span className="italic">graphics</span><br />
          BLACK <span className="italic">&amp;</span> WHITE<br />
          <span className="italic">colors</span> NEW DESIGN
        </h2>
        <button
          className="mt-10 inline-flex items-center gap-3 border border-black/30 rounded-full px-8 py-3 text-[11px] tracking-[0.3em] text-black/80 hover:bg-black hover:text-white transition"
          style={sans}
        >
          VIEW MORE <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: Shirt, title: "T-SHIRT", desc: "Our expert pattern makers create precise templates to serve as the perfect fit and structure of your garments or accessories." },
  { icon: Scissors, title: "JEANS", desc: "Our designers work closely with you to understand your ideas, inspirations and preferences. We help you develop a clear vision for your fashion project." },
  { icon: Sparkles, title: "DRESSES", desc: "We carefully choose fabrics and materials that align with your design concept, considering factors like texture, colour and functionality." },
];

function Services() {
  return (
    <section style={{ background: CREAM }}>
      <div className="max-w-7xl mx-auto px-8 py-20 border-t border-black/10">
        <h3 style={serif} className="text-3xl md:text-4xl font-light max-w-md">
          Our fashion design<br />services include:
        </h3>
        <div className="mt-14 grid md:grid-cols-3 gap-10">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Icon className="w-6 h-6" style={{ color: INK }} />
                <p className="mt-5 text-[11px] tracking-[0.3em] text-black/80" style={sans}>{s.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-black/60" style={sans}>{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Collection() {
  return (
    <section style={{ background: CREAM }} className="border-t border-black/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <h2 style={serif} className="text-5xl md:text-7xl leading-[0.95] font-light">
            CASUAL <span className="italic">&amp;</span> HAUTE<br />
            COUTURE <span className="font-bold">FASHION</span>
          </h2>
          <p className="text-sm text-black/60 md:pt-8 leading-relaxed" style={sans}>
            Capsule pieces crafted in our atelier — from casual daywear to red-carpet couture, each garment tells a story of individual style and precise craftsmanship.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-12 gap-6">
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7"
          >
            <img src={model1.url} alt="Burgundy couture" loading="lazy" className="w-full h-[520px] md:h-[640px] object-cover" />
            <figcaption className="mt-3 text-[10px] tracking-[0.3em] text-black/50" style={sans}>PART 1 · BURGUNDY VELVET · DESIGNER ANNA COOPER</figcaption>
          </motion.figure>
          <div className="md:col-span-5 flex flex-col gap-6">
            <motion.figure
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <img src={model2.url} alt="Black tulle couture" loading="lazy" className="w-full h-[300px] md:h-[380px] object-cover" />
              <figcaption className="mt-3 text-[10px] tracking-[0.3em] text-black/50" style={sans}>PART 2 · BLACK TULLE · DESIGNER ANNA COOPER</figcaption>
            </motion.figure>
            <motion.figure
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img src={blog3.url} alt="Ink graphics" loading="lazy" className="w-full h-[220px] md:h-[240px] object-cover" />
              <figcaption className="mt-3 text-[10px] tracking-[0.3em] text-black/50" style={sans}>PART 3 · GRAPHIC WHITE · DESIGNER ANNA COOPER</figcaption>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
}

const POSTS = [
  { img: blog1.url, tag: "MARCH 10, 2025 · CATWALKS · BY JANE COOPER", title: "Join us on a journey of creativity and style" },
  { img: blog2.url, tag: "MARCH 12, 2025 · ACCESSORIES · BY MIA WHITE", title: "Join us on a journey of creativity and style" },
  { img: blog3.url, tag: "MARCH 15, 2025 · EDITORIAL · BY ANNA COOPER", title: "Join us on a journey of creativity and style" },
];

function Journal() {
  return (
    <section style={{ background: CREAM }} className="border-t border-black/10">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {POSTS.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img src={p.img} alt="" loading="lazy" className="w-full h-[320px] object-cover" />
              <p className="mt-5 text-[9px] tracking-[0.3em] text-black/50" style={sans}>{p.tag}</p>
              <h3 style={serif} className="mt-3 text-2xl font-light leading-snug">{p.title}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GetInTouch() {
  return (
    <section style={{ background: CREAM }} className="border-t border-black/10">
      <div className="max-w-7xl mx-auto px-8 py-24 flex items-center justify-center gap-6 group cursor-pointer">
        <h2 style={serif} className="text-6xl md:text-8xl font-light">GET IN TOUCH</h2>
        <ArrowUpRight className="w-14 h-14 md:w-20 md:h-20 stroke-[1] group-hover:translate-x-2 group-hover:-translate-y-2 transition" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: CREAM, color: INK }} className="border-t border-black/10">
      <div className="max-w-7xl mx-auto px-8 py-14 grid md:grid-cols-4 gap-10 text-sm" >
        <div>
          <p className="text-[10px] tracking-[0.3em] text-black/50" style={sans}>WE WOULD LOVE TO</p>
          <p style={serif} className="text-2xl mt-2">Hear from you</p>
          <div className="flex gap-3 mt-4 text-black/60" style={sans}>
            <Send className="w-4 h-4" />
            <Instagram className="w-4 h-4" />
            <Facebook className="w-4 h-4" />
          </div>
        </div>
        <div style={sans} className="text-black/70">
          <p>2972 Westheimer Rd. Santa</p>
          <p>Ana, Illinois 85486</p>
          <p className="mt-2">(252) 555-0126</p>
          <p>hello@atelier.com</p>
        </div>
        <div style={sans} className="text-black/70">
          <p>Privacy Policy</p>
          <p>Terms &amp; Conditions</p>
        </div>
        <div style={sans} className="text-black/50 md:text-right text-[11px]">
          © 2026 Atelier Anna Cooper. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function FashionTemplate({ onExit }: { onExit: () => void }) {
  return (
    <div style={{ background: CREAM, color: INK, ...sans }}>
      <TopBar onExit={onExit} />
      <Nav />
      <Hero />
      <RackImage />
      <Selected />
      <Services />
      <Collection />
      <Journal />
      <GetInTouch />
      <Footer />
    </div>
  );
}
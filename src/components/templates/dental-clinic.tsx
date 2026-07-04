import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Calendar,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Star,
  Quote,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import dentalHeroImg from "@/assets/dental-hero-dentist.jpg";
import clinicInterior from "@/assets/dental-clinic-interior.jpg";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ kicker, title, align = "left" }: { kicker: string; title: React.ReactNode; align?: "left" | "center" }) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : ""}`}>
      <span className="inline-block text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">
        {kicker}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
        {title}
      </h2>
    </div>
  );
}

export function DentalClinicTemplate({ onExit }: { onExit: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const primary = "#2563EB";

  const services = [
    { title: "Teeth Checkup", desc: "Comprehensive oral examination and digital X-rays for accurate diagnosis." },
    { title: "Teeth Whitening", desc: "Professional whitening treatments for a brighter, more confident smile." },
    { title: "Dental Braces", desc: "Modern orthodontic solutions including clear aligners and traditional braces." },
    { title: "Teeth Implants", desc: "Permanent tooth replacement with titanium implants and natural-looking crowns." },
    { title: "Dental Filling", desc: "Tooth-colored composite fillings that blend seamlessly with your natural teeth." },
    { title: "Cosmetic Dentistry", desc: "Veneers, bonding, and smile makeovers tailored to your unique features." },
  ];

  const testimonials = [
    {
      name: "José Correia",
      role: "Marketing Manager",
      text: "The team here completely transformed my smile. The staff was incredibly professional and the results exceeded my expectations. Highly recommended!",
    },
    {
      name: "Agathe Dufour",
      role: "Company CEO",
      text: "I used to dread dental visits, but this clinic changed everything. The modern equipment and gentle approach made my treatment comfortable and stress-free.",
    },
  ];

  const blogs = [
    { tag: "News", title: "Oral Cancer Awareness: Signs, Symptoms, and Prevention", date: "June 15, 2024" },
    { tag: "Tips", title: "The Dos and Don'ts of Teeth Whitening: Expert Advice", date: "June 10, 2024" },
    { tag: "Health", title: "Oral Health for All Ages: Tips for Kids, Teens, and Adults", date: "June 5, 2024" },
  ];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Exit Bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-slate-900/90 backdrop-blur border-b border-white/10 text-white">
        <span className="text-xs tracking-[0.25em] font-semibold opacity-80">PREVIEW · DENTAL CLINIC</span>
        <button
          onClick={onExit}
          className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-1.5 text-xs font-semibold hover:bg-gray-200 transition-colors"
        >
          Exit Preview
        </button>
      </div>

      {/* Top Bar */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +01234 567 890</span>
            <span className="hidden sm:flex items-center gap-1"><MapPin className="w-3 h-3" /> Jl. Patimura II No. 18, Denpasar</span>
          </div>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Monday - Saturday: 9 am - 11:30 pm</span>
        </div>
      </div>

      {/* Navbar */}
      <header className="bg-white border-b border-slate-100 sticky top-[44px] z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">D</div>
            <div className="leading-tight">
              <span className="block text-sm font-bold tracking-wider text-slate-900">DENTAL</span>
              <span className="block text-[9px] tracking-[0.2em] text-slate-400 uppercase">Always Smile</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
            <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              Page <ChevronDown className="w-3 h-3" />
            </button>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a>
          </nav>

          <button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Make an Appointment
          </button>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="w-5 h-0.5 bg-slate-800 mb-1" />
            <div className="w-5 h-0.5 bg-slate-800 mb-1" />
            <div className="w-5 h-0.5 bg-slate-800" />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-slate-100 px-4 py-4 space-y-3 text-sm font-medium text-slate-600 bg-white">
            <a href="#" className="block text-blue-600">Home</a>
            <a href="#" className="block">About Us</a>
            <a href="#" className="block">Services</a>
            <a href="#" className="block">Contact Us</a>
            <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg">Make an Appointment</button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
                <Star className="w-3 h-3 fill-blue-700" /> Hey! We Are Dentic
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-6">
                Helping You to Bring Back Your{" "}
                <span className="text-blue-600">Happy Smile</span>
              </h1>
              <p className="text-slate-500 max-w-md mb-8 leading-relaxed">
                Experience modern dentistry with a gentle touch. Our expert team uses state-of-the-art technology to deliver exceptional care in a comfortable environment.
              </p>

              {/* Quick booking form */}
              <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100 p-4 md:p-5">
                <div className="grid sm:grid-cols-4 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Email Address</label>
                    <input type="email" placeholder="Your Email" className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Phone Number</label>
                    <input type="tel" placeholder="Telephone" className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Date</label>
                    <input type="date" className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-500" />
                  </div>
                  <div className="flex items-end">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4" /> Book Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">180+</p>
                    <p className="text-xs text-slate-500">Satisfied Customer</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">4.9/5</p>
                    <p className="text-xs text-slate-500">Review</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-60" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-100 rounded-full opacity-60" />
                <img
                  src={dentalHeroImg}
                  alt="Professional dentist"
                  className="relative z-10 w-full max-w-md mx-auto lg:max-w-none rounded-3xl shadow-2xl shadow-blue-900/10 object-cover"
                  width={1024}
                  height={1024}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "💎", title: "Affordable Price", desc: "Quality dental care at transparent, competitive prices with flexible payment options." },
              { icon: "👨‍⚕️", title: "Professional Dentist", desc: "Board-certified specialists with years of experience in all fields of dentistry." },
              { icon: "🤝", title: "Satisfactory Service", desc: "Patient-first approach with personalized treatment plans and follow-up care." },
            ].map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-100 rounded-3xl" />
                <img
                  src={dentalHeroImg}
                  alt="About our dental clinic"
                  className="relative z-10 rounded-3xl shadow-xl w-full object-cover"
                  width={1024}
                  height={1024}
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-2xl p-5 shadow-lg z-20 hidden md:block">
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-xs opacity-90">Years Experience</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <span className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">More About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
                The Best Dental Clinic<br />That You Can Trust
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                We combine cutting-edge technology with compassionate care to deliver dental services that exceed expectations. Our clinic is designed around your comfort and convenience.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Modern Equipment",
                  "Easy Online Appointment",
                  "Comfortable Clinic",
                  "Always Monitored",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors">
                  Learn More
                </button>
                <button className="border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 px-6 py-3 rounded-lg text-sm font-medium transition-colors">
                  Make an Appointment
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionHeading kicker="Why Choose Us" title={<>Helping Your<br />Dental Problems</>} />
              <p className="text-slate-500 leading-relaxed mb-8 max-w-md">
                Our skilled team addresses every dental concern with precision and empathy. From routine checkups to complex procedures, we ensure your oral health is in expert hands.
              </p>

              <div className="space-y-5">
                {[
                  { label: "Dental and Mouth Care", percent: 95 },
                  { label: "Cosmetic Treatment", percent: 87 },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between mb-2 text-sm font-medium text-slate-700">
                      <span>{bar.label}</span>
                      <span>{bar.percent}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 md:p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Don't Hesitate to Do Consultation</h3>
                <p className="text-sm text-slate-500 mb-6">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut elit tellus, luctus nec.
                </p>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-600">Monday - Friday</span>
                    <span className="font-semibold text-slate-900">8AM - 10PM</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-600">Saturday</span>
                    <span className="font-semibold text-slate-900">8AM - 10PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sunday</span>
                    <span className="font-semibold text-slate-900">8AM - 10PM</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" /> Call +01234 567 890
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "1,200+", label: "Happy Client" },
              { value: "15+", label: "Year Experience" },
              { value: "70+", label: "Doctor & Staff" },
              { value: "340+", label: "Online Appointment" },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase Banner */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={clinicInterior} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              The Best Services
            </h2>
            <p className="text-slate-300 leading-relaxed max-w-md mb-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod incididunt ut labore et magna.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors">
              Learn More
            </button>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Expert Doctor</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod incididunt ut labore et magna.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Best <span className="text-blue-600">Services</span> Quality
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula aenean massa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="group rounded-2xl border border-slate-100 p-6 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-300 bg-white">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <span className="text-xl group-hover:scale-110 transition-transform">🦷</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{s.desc}</p>
                  <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <FadeIn>
                <SectionHeading kicker="Our Testimonial" title={<>The Honest Review<br />From Our Client</>} />
                <p className="text-slate-500 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors">
                  See All Review
                </button>
              </FadeIn>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <FadeIn key={t.name} delay={i * 0.15}>
                  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <Quote className="w-8 h-8 text-blue-200 mb-4" />
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{t.text}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{t.name}</p>
                        <p className="text-xs text-slate-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Dedicated to Give You<br />The Best Services
            </h2>
            <p className="text-blue-100 leading-relaxed max-w-md mb-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg text-sm font-semibold transition-colors">
              Contact Us
            </button>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={clinicInterior} alt="Dental clinic" className="w-full object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blogs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">Our Blogs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Blogs & <span className="text-blue-600">Articles</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.1}>
                <article className="group rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 bg-white">
                  <div className="h-48 bg-slate-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-slate-200 group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      {b.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                      {b.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">{b.date}</p>
                    <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Become The Next<br />Our Happy Client
            </h2>
            <p className="text-slate-500 leading-relaxed max-w-lg mx-auto mb-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl text-sm font-semibold transition-colors inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Book an Appointment
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">D</div>
                <div className="leading-tight">
                  <span className="block text-sm font-bold tracking-wider text-white">DENTAL</span>
                  <span className="block text-[9px] tracking-[0.2em] text-slate-400 uppercase">Always Smile</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quality dental care for the whole family.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Helpful Link</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Contact Us</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p className="flex items-center gap-2"><MapPin className="w-3 h-3 shrink-0" /> Jl. Patimura II No. 18, Denpasar</p>
                <p className="flex items-center gap-2"><Phone className="w-3 h-3 shrink-0" /> +01234 567 890</p>
              </div>
              <div className="flex gap-3 mt-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>Dental Copyright © 2024. All rights reserved</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

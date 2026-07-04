import { useTheme } from "@/components/theme-toggle";
import { Linkedin, Github, Instagram, MessageCircle } from "lucide-react";
import dawebcoLogo from "@/assets/dawebco-logo-cropped.png.asset.json";

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleScrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerBg = isDark ? "bg-[#000000] border-t border-dashed border-[#1c1c1c]" : "bg-[#F9FAFB] border-t border-black/10";
  const textPrimary = isDark ? "text-white" : "text-[#111827]";
  const textSecondary = isDark ? "text-[#808080]" : "text-gray-600";
  const eyebrowClass = isDark
    ? "font-mono text-[9px] uppercase tracking-[0.02em] font-medium text-white mb-6"
    : "text-sm font-bold tracking-[0.2em] mb-6 text-[#111827]";
  const linkClass = isDark
    ? "text-sm text-[#808080] transition-colors hover:text-white"
    : "text-sm text-gray-600 transition-colors hover:text-[#B8860B]";
  const socialIconClass = isDark
    ? "w-10 h-10 rounded-full border border-solid border-white flex items-center justify-center transition-colors text-white hover:bg-white/10"
    : "w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-[#B8860B]/50 text-[#B8860B] hover:bg-[#B8860B] hover:text-white";
  const dividerClass = isDark ? "border-t border-dashed border-[#1c1c1c] mb-8" : "border-t border-black/10 mb-8";
  const watermarkClass = isDark ? "text-[#1c1c1c] opacity-[0.3]" : "text-black opacity-5";

  return (
    <footer className={`relative overflow-hidden pt-20 pb-10 transition-colors duration-300 ${footerBg}`}>
      {/* Background Watermark Logo */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[clamp(4rem,15vw,12rem)] font-black tracking-tighter ${watermarkClass}`} style={{ zIndex: 0 }}>
        DaWebCo.
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className={`text-lg font-medium mb-8 ${isDark ? "text-white/90" : "text-[#111827]"}`}>
              We build premium websites for small businesses.
            </p>
            <div className="mb-8">
              <img src={dawebcoLogo.url} alt="DaWebCo." className="h-8 object-contain" />
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/dawebco" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={socialIconClass}>
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com/dawebco" target="_blank" rel="noreferrer" aria-label="GitHub" className={socialIconClass}>
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/dawebco" target="_blank" rel="noreferrer" aria-label="Instagram" className={socialIconClass}>
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/917625072926" target="_blank" rel="noreferrer" aria-label="WhatsApp" className={socialIconClass}>
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className={eyebrowClass}>SERVICES</h3>
            <div className="flex flex-col gap-4">
              <a href="#pricing" onClick={handleScrollTo("pricing")} className={linkClass}>Web Design</a>
              <a href="#pricing" onClick={handleScrollTo("pricing")} className={linkClass}>Web Domain & Hosting</a>
              <a href="#pricing" onClick={handleScrollTo("pricing")} className={linkClass}>SEO & Performance</a>
              <a href="#services" onClick={handleScrollTo("services")} className={linkClass}>Ai Chatbot</a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className={eyebrowClass}>COMPANY</h3>
            <div className="flex flex-col gap-4">
              <a href="#our-process" onClick={handleScrollTo("our-process")} className={linkClass}>Our Process</a>
              <a href="#services" onClick={handleScrollTo("services")} className={linkClass}>Services</a>
              <a href="#pricing" onClick={handleScrollTo("pricing")} className={linkClass}>Pricing</a>
              <a href="#contact" onClick={handleScrollTo("contact")} className={linkClass}>Contact Us</a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <hr className={dividerClass} />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-xs ${isDark ? "text-[#4d4d4d]" : "text-gray-500"}`}>
            © 2026 DaWebCo. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <a href="/privacy-policy.html" className={`text-xs transition-colors ${isDark ? "text-[#808080] hover:text-white" : "text-gray-500 hover:text-[#111827]"}`}>Privacy Policy</a>
            <a href="/terms-of-service.html" className={`text-xs transition-colors ${isDark ? "text-[#808080] hover:text-white" : "text-gray-500 hover:text-[#111827]"}`}>Terms of Service</a>
            <a href="mailto:dawebsiteco@gmail.com" className={`text-xs font-medium transition-colors ${isDark ? "text-white hover:opacity-80" : "text-[#B8860B] hover:text-[#111827]"}`}>dawebsiteco@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

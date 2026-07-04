import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Mail, MessageCircle, Calendar } from "lucide-react";
import { useTheme } from "@/components/theme-toggle";

export function ContactSection({ id }: { id?: string }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brief, setBrief] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleEmailCardClick = () => {
    emailInputRef.current?.focus();
  };

  const handleScrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: name,
      reply_to: email,
      project_brief: brief,
      current_date: new Date().toLocaleDateString(),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setName("");
      setEmail("");
      setBrief("");
      toast.success("Message sent successfully! We'll get back to you shortly.");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please verify your EmailJS keys in the .env file.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Theming classes
  const sectionBg = isDark ? "bg-[#000000] border-y border-dashed border-[#1c1c1c]" : "bg-[#F9FAFB]";
  
  const headlineClass = isDark 
    ? "text-[clamp(2.5rem,5vw,70px)] font-black tracking-tight leading-[1.1] text-white"
    : "text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-[#111827]";
    
  const textSecondary = isDark ? "text-[#808080]" : "text-gray-600";
  
  const cardContainerClass = isDark 
    ? "w-full p-6 rounded-[20px] bg-[#1c1c1c] border border-dashed border-[#000000] transition-colors hover:bg-[#1c1c1c]/80 flex items-start gap-5 cursor-pointer" 
    : "w-full p-6 rounded-2xl border border-gray-200 transition-all flex items-start gap-5 cursor-pointer hover:bg-gray-100";
    
  const iconContainerClass = isDark
    ? "p-3 rounded-full flex-shrink-0 bg-[#000000] border border-dashed border-[#1c1c1c] text-[#7089ba]"
    : "p-3 rounded-full flex-shrink-0 bg-white border border-gray-200 text-[#B8860B]";
    
  const eyebrowClass = isDark
    ? "font-mono text-[9px] uppercase tracking-[0.02em] font-medium text-white mb-1"
    : "text-xs tracking-widest font-bold uppercase text-[#111827] mb-1";
    
  const labelClass = isDark
    ? "font-mono text-[9px] uppercase tracking-[0.02em] font-medium text-[#808080]"
    : "text-xs font-semibold uppercase tracking-wider text-gray-600";
    
  const formCardClass = isDark
    ? "p-8 md:p-10 rounded-[20px] bg-[#1c1c1c] border border-dashed border-[#000000] relative overflow-hidden"
    : "p-8 md:p-10 rounded-3xl bg-white border border-gray-200 shadow-xl relative overflow-hidden";
    
  const inputClass = isDark
    ? "w-full px-4 py-3 rounded-xl bg-[#000000] border border-solid border-[#4d4d4d] text-white focus:outline-none focus:border-[#7089ba] transition-colors"
    : "w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all";

  const submitBtnClass = isDark
    ? "w-full py-3.5 rounded-[100px] border border-solid border-white text-white font-medium text-sm transition-colors hover:bg-white/10 disabled:opacity-50"
    : "w-full py-4 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-bold text-sm tracking-widest uppercase transition-all hover:opacity-90 disabled:opacity-70 flex items-center justify-center gap-2";

  return (
    <section id={id} className={`py-24 transition-colors duration-300 ${sectionBg}`}>
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        {/* Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className={`mb-6 ${headlineClass}`}>
            Ready to {isDark ? "elevate" : <span className="italic font-serif opacity-90">elevate</span>} your digital presence?
          </h2>
          <p className={`text-lg md:text-xl ${textSecondary}`}>
            Reach out through any channel below - we reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-12">
          
          {/* Left Column: Cards */}
          <div className="flex flex-col gap-6">
            {/* Email Card */}
            <button 
              type="button"
              onClick={handleEmailCardClick}
              className={`text-left ${cardContainerClass}`}
            >
              <div className={iconContainerClass}>
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className={eyebrowClass}>Email Us</h3>
                <p className={`font-medium ${textSecondary}`}>dawebsiteco@gmail.com</p>
              </div>
            </button>

            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/917625072926"
              target="_blank"
              rel="noreferrer"
              className={cardContainerClass}
            >
              <div className={iconContainerClass}>
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className={eyebrowClass}>WhatsApp</h3>
                <p className={`font-medium ${textSecondary}`}>Chat with Studio</p>
              </div>
            </a>

            {/* Discovery Call Card */}
            <a 
              href="#booking"
              onClick={handleScrollToBooking}
              className={cardContainerClass}
            >
              <div className={iconContainerClass}>
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className={eyebrowClass}>Discovery Call</h3>
                <p className={`font-medium ${textSecondary}`}>Book a 30-min free consultation</p>
              </div>
            </a>
          </div>

          {/* Right Column: Form Card */}
          <div className={formCardClass}>
            <div className="mb-8">
              <h3 className={`text-2xl font-bold tracking-tight mb-2 ${isDark ? "text-white" : "text-[#111827]"}`}>Send a Message</h3>
              <p className={`text-sm ${textSecondary}`}>We respond within 24 hours on business days.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] sm:gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className={labelClass}>Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                
                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input
                    id="email"
                    ref={emailInputRef}
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Project Brief Textarea */}
              <div className="space-y-2">
                <label htmlFor="brief" className={labelClass}>Project Brief</label>
                <textarea
                  id="brief"
                  required
                  rows={4}
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder="Tell us about your business and what you'd like to build..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={submitBtnClass}
              >
                {isSubmitting ? "Sending..." : (isDark ? "Send Message" : "Send Message →")}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}

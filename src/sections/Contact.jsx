import { useState } from "react";
import { motion } from "framer-motion";
import { useIntersection } from "../hooks/useIntersection";
import { portfolio } from "../data/portfolio";

const contactItems = [
  { icon: "📧", label: "Email", value: portfolio.email, href: `mailto:${portfolio.email}` },
  { icon: "📱", label: "Phone", value: `+91 ${portfolio.phone}`, href: `tel:${portfolio.phone}` },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/swaminathnalwar", href: portfolio.linkedin },
  { icon: "🐙", label: "GitHub", value: "github.com/swaminath8358", href: portfolio.github },
];

export default function Contact() {
  const [ref, visible] = useIntersection();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-2">
            <span className="w-5 h-px bg-purple-400" />
            Let's Connect
            <span className="w-5 h-px bg-purple-400" />
          </div>
          <h2 className="font-display font-bold text-white tracking-tight mb-3" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Have an opportunity or integration challenge? I'd love to hear from you.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-5 bg-[#1c1c28] border border-white/7 rounded-xl hover:border-purple-500/30 hover:translate-x-1 transition-all duration-300 no-underline"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-sm text-white font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-gray-400 font-medium">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="bg-[#1c1c28] border border-white/7 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-purple-500/50 placeholder:text-gray-700 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-gray-400 font-medium">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="bg-[#1c1c28] border border-white/7 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-purple-500/50 placeholder:text-gray-700 transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400 font-medium">Subject</label>
              <input
                type="text"
                required
                placeholder="Integration opportunity at ACME Corp"
                className="bg-[#1c1c28] border border-white/7 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-purple-500/50 placeholder:text-gray-700 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400 font-medium">Message</label>
              <textarea
                required
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                className="bg-[#1c1c28] border border-white/7 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-purple-500/50 placeholder:text-gray-700 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className={`self-start px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                sent
                  ? "bg-emerald-500 text-white"
                  : "gradient-bg text-white hover:opacity-85 hover:-translate-y-0.5"
              }`}
            >
              {sent ? "Sent! ✅" : "Send Message ✉️"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

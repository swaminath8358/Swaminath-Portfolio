import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 pt-28 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(108,99,255,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_70%,rgba(56,189,248,0.08)_0%,transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-purple-300 font-medium mb-6">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          Open to Opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1 {...fadeUp(0.1)} className="font-display font-black leading-[1.05] tracking-tight mb-6" style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}>
          Hi, I'm{" "}
          <span className="gradient-text">Swaminath</span>
          <br />
          Nalwar.
        </motion.h1>

        {/* Sub */}
        <motion.p {...fadeUp(0.2)} className="text-gray-400 font-light max-w-xl mb-10 leading-relaxed" style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>
          Integration Developer & Boomi Specialist crafting enterprise-grade workflows that connect systems, streamline operations, and power business at scale.
        </motion.p>

        {/* Stats */}
        <motion.div {...fadeUp(0.3)} className="flex gap-10 flex-wrap mb-10">
          {portfolio.stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-display font-black gradient-text" style={{ fontSize: "2rem" }}>
                {s.number}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.4)} className="flex gap-4 flex-wrap">
          <a href="#experience" className="px-7 py-3.5 gradient-bg text-white rounded-full font-semibold text-sm hover:opacity-85 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/25">
            View My Work
          </a>
          <a href="#contact" className="px-7 py-3.5 bg-white/5 border border-white/10 text-white rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200">
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-purple-500 animate-pulse" />
        Scroll
      </div>
    </section>
  );
}

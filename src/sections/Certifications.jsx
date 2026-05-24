import { motion } from "framer-motion";
import { useIntersection } from "../hooks/useIntersection";
import { portfolio } from "../data/portfolio";

export default function Certifications() {
  const [headerRef, headerVisible] = useIntersection();

  return (
    <section id="certifications" className="py-24 px-8 bg-[#111118]">
      <div className="max-w-6xl mx-auto">
        {/* Certs header */}
        <div ref={headerRef} className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-2">
            <span className="w-5 h-px bg-purple-400" />
            Credentials
          </div>
          <h2 className="font-display font-bold text-white tracking-tight mb-3" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
            Certifications
          </h2>
          <p className="text-gray-400 max-w-lg">
            Industry-recognized certifications validating expertise in integration, automation, and software engineering.
          </p>
        </div>

        {/* Certs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {portfolio.certifications.map((cert, i) => {
            const [ref, visible] = useIntersection();
            return (
              <motion.div
                ref={ref}
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                animate={visible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-center gap-4 bg-[#1c1c28] border border-white/7 rounded-xl p-5 hover:border-purple-500/30 hover:translate-x-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-xl flex-shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white leading-snug">{cert.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{cert.issuer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-2">
            <span className="w-5 h-px bg-purple-400" />
            Academic
          </div>
          <h2 className="font-display font-bold text-white tracking-tight text-2xl">Education</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolio.education.map((edu, i) => {
            const [ref, visible] = useIntersection();
            return (
              <motion.div
                ref={ref}
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#1c1c28] border border-white/7 rounded-2xl p-7 relative overflow-hidden hover:border-white/12 transition-all"
              >
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-5" style={{ background: "linear-gradient(135deg,#6c63ff,#a78bfa)" }} />
                <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">{edu.period}</p>
                <h3 className="font-display font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-purple-400 text-sm mb-4">{edu.institution}</p>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-400/10 border border-emerald-400/20 rounded-full text-xs text-emerald-400 font-semibold">
                  {edu.scoreIcon} {edu.score}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

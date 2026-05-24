import { motion } from "framer-motion";
import { useIntersection } from "../hooks/useIntersection";
import { portfolio } from "../data/portfolio";

function TimelineItem({ item, index }) {
  const [ref, visible] = useIntersection();

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-[180px_1px_1fr] gap-0 md:gap-8 pb-12 last:pb-0">
      {/* Date */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:block text-right pt-1 text-xs text-gray-500 font-medium leading-relaxed"
      >
        {item.period}<br />{item.location}
      </motion.div>

      {/* Line */}
      <div className="hidden md:flex flex-col items-center">
        <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 mt-1.5 -mx-[6.5px] border-2 border-[#0a0a0f] shadow-[0_0_0_4px_rgba(108,99,255,0.2)] ${item.badgeColor === "cyan" ? "bg-sky-400" : "bg-purple-500"}`} />
        <div className="w-px flex-1 bg-gradient-to-b from-purple-500/50 to-transparent mt-1" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="bg-[#1c1c28] border border-white/7 rounded-2xl p-7 hover:border-white/12 transition-all duration-300"
      >
        <div className="flex flex-wrap justify-between items-start gap-3 mb-1">
          <h3 className="font-display font-bold text-white text-lg">{item.title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.badgeColor === "cyan" ? "bg-sky-400/10 border border-sky-400/25 text-sky-400" : "bg-purple-500/10 border border-purple-500/25 text-purple-400"}`}>
            {item.badge}
          </span>
        </div>
        <p className="text-purple-400 text-sm font-semibold mb-1">{item.company}</p>
        <p className="text-gray-600 text-xs mb-4 md:hidden">{item.period} · {item.location}</p>
        <ul className="list-disc list-outside pl-4 text-gray-400 text-sm space-y-2 leading-relaxed mb-5">
          {item.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
        <div className="flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 bg-[#111118] border border-white/7 rounded-md text-xs text-gray-500 font-mono">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 bg-[#111118]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-2">
            <span className="w-5 h-px bg-purple-400" />
            Career Journey
          </div>
          <h2 className="font-display font-bold text-white tracking-tight mb-3" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
            Work Experience
          </h2>
          <p className="text-gray-400 max-w-lg">
            A track record of delivering enterprise integration solutions across diverse industries.
          </p>
        </div>
        <div className="flex flex-col">
          {portfolio.experience.map((item, i) => (
            <TimelineItem key={item.company} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

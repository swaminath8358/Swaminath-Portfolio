import { motion } from "framer-motion";
import { useIntersection } from "../hooks/useIntersection";
import { portfolio } from "../data/portfolio";

function SkillCard({ category, icon, items, variant, delay }) {
  const [ref, visible] = useIntersection();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-[#1c1c28] border border-white/7 rounded-2xl p-7 hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl mb-5">
        {icon}
      </div>
      <h3 className="font-display font-bold text-white mb-5 text-base">{category}</h3>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.name} className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs text-gray-400">
              <span>{item.name}</span>
              <span>{item.level}%</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div
                className={`skill-bar-fill ${variant || ""}`}
                style={{ width: visible ? `${item.level}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-2">
            <span className="w-5 h-px bg-purple-400" />
            What I Work With
          </div>
          <h2 className="font-display font-bold text-white tracking-tight mb-3" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-lg">
            A comprehensive toolkit built across integration platforms, programming languages, APIs, and data systems.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {portfolio.skills.map((skill, i) => (
            <SkillCard key={skill.category} {...skill} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

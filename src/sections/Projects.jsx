import { motion } from "framer-motion";
import { useIntersection } from "../hooks/useIntersection";
import { portfolio } from "../data/portfolio";

function ProjectCard({ project, delay }) {
  const [ref, visible] = useIntersection();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group bg-[#1c1c28] border border-white/7 rounded-2xl p-7 flex flex-col gap-4 hover:border-white/12 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl">
        {project.icon}
      </div>
      <h3 className="font-display font-bold text-white text-base">{project.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="px-2.5 py-1 bg-[#111118] border border-white/7 rounded-md text-xs text-gray-500 font-mono">
            {t}
          </span>
        ))}
      </div>
      <div className="pt-3 border-t border-white/5 flex justify-between items-center">
        <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">{project.domain}</span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-2">
            <span className="w-5 h-px bg-purple-400" />
            Showcase
          </div>
          <h2 className="font-display font-bold text-white tracking-tight mb-3" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
            Integration Projects
          </h2>
          <p className="text-gray-400 max-w-lg">
            Real-world integrations delivered across healthcare, retail, and supply chain domains.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {portfolio.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

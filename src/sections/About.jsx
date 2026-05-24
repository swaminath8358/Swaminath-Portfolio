import { motion } from "framer-motion";
import { useIntersection } from "../hooks/useIntersection";
import { portfolio } from "../data/portfolio";

export default function About() {
  const [ref, visible] = useIntersection();

  return (
    <section id="about" className="py-24 px-8 bg-[#111118]">
      <div className="max-w-6xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          ref={ref}
        >
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div
                className="absolute -top-5 -right-5 w-48 h-48 rounded-full opacity-10"
                style={{
                  background: "linear-gradient(135deg,#6c63ff,#a78bfa)",
                  filter: "blur(40px)",
                }}
              />
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-[#1c1c28] border border-white/7 relative overflow-hidden">
                <img
                  src="/Image/avatar.jpeg"
                  alt="Swaminath Nalwar"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(108,99,255,0.12),transparent)]" />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-2">
                <span className="w-5 h-px bg-purple-400" />
                About Me
              </div>
              <h2
                className="font-display font-bold text-white leading-tight tracking-tight"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
              >
                Building the bridges between
                <br />
                systems that matter.
              </h2>
            </div>

            {portfolio.about.map((p, i) => (
              <p
                key={i}
                className="text-gray-400 leading-relaxed text-[1.02rem]"
              >
                {p}
              </p>
            ))}

            <div className="flex flex-wrap gap-2">
              {portfolio.aboutTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium text-purple-300 bg-white/4 border border-white/7 rounded-full hover:border-purple-500/40 hover:bg-white/7 transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="mailto:swaminathnalwar14@gmail.com"
              className="inline-flex w-fit px-6 py-3 gradient-bg text-white rounded-full font-semibold text-sm hover:opacity-85 transition-all duration-200 hover:-translate-y-0.5"
            >
              Say Hello 👋
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

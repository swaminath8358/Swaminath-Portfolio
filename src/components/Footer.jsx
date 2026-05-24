import { portfolio } from "../data/portfolio";

const socials = [
  { label: "in", href: portfolio.linkedin, title: "LinkedIn" },
  { label: "gh", href: portfolio.github, title: "GitHub" },
  { label: "@", href: `mailto:${portfolio.email}`, title: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111118] border-t border-white/5 py-10 px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <div className="font-display font-black text-lg gradient-text">Swaminath Nalwar</div>
          <p className="text-xs text-gray-600 mt-1">Integration Developer · Pune, India · Built with 💜</p>
        </div>
        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              title={s.title}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/7 flex items-center justify-center text-gray-400 text-sm font-semibold hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all duration-200"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

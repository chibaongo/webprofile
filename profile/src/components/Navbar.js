import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_ITEMS = [
  { id: "home",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact",    label: "Contact" },
];

export default function Navbar() {
  const [active, setActive]   = useState("home");
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Active section theo scroll
  useEffect(() => {
    const observers = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Shadow khi scroll xuống
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#1e1e2e]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16
                      flex items-center justify-between h-16">

        {/* ── Logo ── */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 group"
        >
          <span className="text-xl font-black text-white tracking-tight">
            N<span className="text-cyan-400">C</span>B
          </span>
          {/* <span className="hidden sm:block text-[10px] font-mono tracking-[0.2em]
                           text-slate-600 uppercase group-hover:text-slate-500
                           transition-colors">
            · portfolio
          </span> */}
        </button>

        {/* ── Desktop Menu ── */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative px-4 py-2 text-sm font-mono tracking-wide
                          transition-colors duration-200 rounded-lg
                          ${active === id
                            ? "text-cyan-400"
                            : "text-slate-500 hover:text-slate-300"
                          }`}
            >
              {active === id && (
                <span className="absolute inset-0 rounded-lg bg-cyan-400/8
                                 border border-cyan-400/20" />
              )}
              <span className="relative">{label}</span>
            </button>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/IT Helpdesk_ NGO CHI BAO.pdf"
            download
            className="inline-flex items-center gap-1.5 text-[11px] font-mono
                       tracking-widest uppercase text-cyan-400
                       border border-[#2a2a3a] hover:border-cyan-400/50
                       hover:bg-cyan-400/5 px-4 py-2 rounded-lg
                       transition-all duration-200"
          >
            Download CV
          </a>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex items-center justify-center
                     rounded-lg border border-[#2a2a3a] text-slate-400
                     hover:text-cyan-400 hover:border-cyan-400/50
                     transition-all duration-200"
        >
          {open ? <HiX className="w-4 h-4" /> : <HiMenuAlt3 className="w-4 h-4" />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden
                    border-t border-[#1e1e2e] bg-[#0a0a0f]/98 backdrop-blur-md
                    ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-left px-4 py-3 text-sm font-mono tracking-wide
                          rounded-lg transition-all duration-200
                          ${active === id
                            ? "text-cyan-400 bg-cyan-400/5 border border-cyan-400/20"
                            : "text-slate-500 hover:text-slate-300 hover:bg-[#1e1e2e]"
                          }`}
            >
              <span className="text-slate-700 mr-2">
                {String(NAV_ITEMS.indexOf({ id, label }) + 1).padStart(2, "0")}.
              </span>
              {label}
            </button>
          ))}

          <div className="mt-3 pt-3 border-t border-[#1e1e2e]">
            <a
              href="/cv.pdf"
              download
              className="flex items-center justify-center gap-2 text-[11px] font-mono
                         tracking-widest uppercase text-cyan-400
                         border border-[#2a2a3a] hover:border-cyan-400/50
                         hover:bg-cyan-400/5 px-4 py-2.5 rounded-lg
                         transition-all duration-200"
            >
              Download CV
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
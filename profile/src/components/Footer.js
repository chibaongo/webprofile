import { FaGithub, FaLinkedin, FaFacebook,  FaYoutube } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

const LINKS = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

const SOCIALS = [
    { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/chibao.ncb1/" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ch%C3%AD-b%E1%BA%A3o-ng%C3%B4-5101b4314/" },
    // { icon: FaDiscord,  label: "Discord",  href: "#" },
    { icon: FaGithub,   label: "GitHub",   href: "https://github.com/chibaongo" },
    { icon: FaYoutube,  label: "YouTube",  href: "https://www.youtube.com/@baongo4722" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-[#1e1e2e]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center
                        justify-between gap-8 mb-10">

          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-black tracking-tight">
              <span className="text-white">NGO</span>
              <span className="text-cyan-400"> CHI BAO</span>
            </p>
            <p className="text-slate-500 font-mono text-xs mt-1 tracking-widest uppercase">
              HELPDESK / SUPPORT · Fullstack Developer
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-slate-400 hover:text-cyan-400 font-mono
                           text-xs tracking-widest uppercase transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e1e2e] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center
                        justify-between gap-4">

          {/* Copyright */}
          <p className="text-slate-600 font-mono text-xs text-center">
            © {new Date().getFullYear()} Ngo Chi Bao. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg
                           border border-[#2a2a3a] text-slate-500
                           hover:text-cyan-400 hover:border-cyan-400/50
                           transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs font-mono
                       tracking-widest uppercase text-slate-500
                       hover:text-cyan-400 transition-colors duration-200"
          >
            <HiArrowUp className="w-3.5 h-3.5" />
            Back to top
          </a>
        </div>

      </div>
    </footer>
  );
}
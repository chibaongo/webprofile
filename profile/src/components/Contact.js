import { FaGithub, FaLinkedin, FaFacebook, } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";

const SOCIALS = [
 
  { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/chibao.ncb1/" },
  { icon: FaGithub,   label: "GitHub",   href: "https://github.com/chibaongo" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ch%C3%AD-b%E1%BA%A3o-ng%C3%B4-5101b4314/" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0a0a0f] flex items-center justify-center 
                 py-24 px-6 md:px-10 lg:px-16 "
    >
      <div className="max-w-2xl w-full mx-auto text-center">

        {/* Label */}
        <p className="text-xs font-mono tracking-[0.2em] text-indigo-400 mb-4">
          ## GET IN TOUCH
        </p>

        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
          <span className="text-white">Contact </span>
          <span className="text-cyan-400">Me</span>
        </h2>

        {/* Sub */}
        <p className="text-slate-400 font-mono text-sm leading-relaxed mb-12">
          Have a project in mind or want to collaborate?<br />
          Feel free to reach out anytime.
        </p>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">

          {/* Email */}
          <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl
                          p-5 text-left hover:border-indigo-500/50
                          transition-colors duration-200">
            <div className="flex items-center gap-2 mb-2">
              <HiMail className="text-cyan-400 w-4 h-4" />
              <span className="text-[11px] font-mono tracking-widest
                               text-cyan-400 uppercase">
                Email
              </span>
            </div>
            <a
              href="mailto:baongoncb@gmail.com"
              className="text-slate-200 font-mono text-sm
                         hover:text-cyan-400 transition-colors"
            >
              baongoncb@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl
                          p-5 text-left hover:border-indigo-500/50
                          transition-colors duration-200">
            <div className="flex items-center gap-2 mb-2">
              <HiPhone className="text-cyan-400 w-4 h-4" />
              <span className="text-[11px] font-mono tracking-widest
                               text-cyan-400 uppercase">
                Phone
              </span>
            </div>
            <a
              href="tel:+84826224670"
              className="text-slate-200 font-mono text-sm
                         hover:text-cyan-400 transition-colors"
            >
              +84 826 224 670
            </a>
          </div>
        </div>

        {/* Social buttons */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5
                         border border-[#2a2a3a] rounded-lg
                         text-slate-400 hover:text-white
                         hover:border-cyan-400/50 hover:bg-cyan-400/5
                         font-mono text-xs tracking-widest uppercase
                         transition-all duration-200"
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
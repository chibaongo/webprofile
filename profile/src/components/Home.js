import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const TEXTS = ["IT Support", ". . .", "FullStack Developer", ". . .",];
const IMAGES = ["/avatar1.jpg", "/avatar2.jpg","/avatar4copy.jpg"];
const DECRIPTION = "Là một người làm IT Support có khả năng code Fullstack, tôi xem việc tối ưu hệ thống là một nghệ thuật. Việc đang theo đuổi chứng chỉ CCNA giúp tôi kiện toàn kỹ năng về hạ tầng mạng, tạo bước đệm vững chắc để trở thành một DevOps Engineer chuyên nghiệp — nơi tôi có thể vận dụng kỹ năng lập trình để tự động hóa và vận hành hệ thống một cách tối ưu.";
export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const[textDescription] = useState(DECRIPTION);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setImgIndex((prev) => (prev + 1) % IMAGES.length);
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentText = TEXTS[textIndex];
    const speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, index + 1));
        setIndex(index + 1);
        if (index === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentText.substring(0, index - 1));
        setIndex(index - 1);
        if (index === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % TEXTS.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [index, isDeleting, textIndex]);

  const socials = [
    { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/chibao.ncb1/" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ch%C3%AD-b%E1%BA%A3o-ng%C3%B4-5101b4314/" },
    // { icon: FaDiscord,  label: "Discord",  href: "#" },
    { icon: FaGithub,   label: "GitHub",   href: "https://github.com/chibaongo" },
    { icon: FaYoutube,  label: "YouTube",  href: "https://www.youtube.com/@baongo4722" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0a0a0f] overflow-hidden
                 flex items-center"
    >
      {/* Glow nền */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px]
                      rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px]
                      rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16 py-24 lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center
                        justify-between gap-20 lg:gap-32">

          {/* ── LEFT ── */}
          <div className="flex-1 min-w-0 text-center lg:text-left">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 border border-[#2a2a3a]
                             text-cyan-400 text-[11px] font-mono tracking-[0.2em]
                             uppercase px-3 py-1.5 rounded-lg bg-cyan-400/5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              NGO CHI BAO
            </span>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-black mt-5 text-white
                           leading-tight lg:whitespace-nowrap">
              I&apos;m{" "}
              <span className="text-cyan-400">
                {displayText}
                <span className="ml-0.5 inline-block w-[2px] h-[1em]
                                 bg-cyan-400 align-text-bottom animate-pulse" />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-slate-400 font-mono text-sm leading-relaxed
                          max-w-md mx-auto lg:mx-0">
             {textDescription}
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3
                            justify-center lg:justify-start">
              <a
                href="/IT Helpdesk_ NGO CHI BAO.pdf"
                download
                className="inline-flex items-center justify-center gap-2
                           bg-cyan-400 hover:bg-cyan-300 text-[#0a0a0f]
                           text-sm font-bold px-6 py-3 rounded-lg
                           transition-colors duration-200"
              >
                <HiDownload className="w-4 h-4 shrink-0" />
                Download CV
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center
                           border border-[#2a2a3a] hover:border-cyan-400/50
                           text-slate-400 hover:text-cyan-400
                           text-sm font-mono px-6 py-3 rounded-lg
                           transition-all duration-200"
              >
                About Me
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-8 justify-center lg:justify-start">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg
                             border border-[#2a2a3a] text-slate-500
                             hover:text-cyan-400 hover:border-cyan-400/50
                             hover:bg-cyan-400/5
                             transition-all duration-200 shrink-0"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="shrink-0 flex flex-col items-center gap-4">
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px]
                            lg:w-[360px] lg:h-[360px]">

              {/* Vòng tròn xoay */}
              <div className="absolute -inset-4 rounded-full border border-dashed
                              border-cyan-400/30 animate-spin"
                   style={{ animationDuration: "60s" }} />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/10
                              blur-2xl scale-110 pointer-events-none" />

              {/* Viền + Avatar */}
              <div className="relative w-full h-full rounded-full p-[4px]
                              bg-gradient-to-br from-cyan-400 to-indigo-500">
                <img
                  src={IMAGES[imgIndex]}
                  alt="avatar"
                  className={`w-full h-full object-cover rounded-full
                              transition-all duration-700
                              ${fade ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                />
              </div>
            </div>

            {/* Status pill */}
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono
                             tracking-widest uppercase text-cyan-400
                             border border-[#2a2a3a] bg-cyan-400/5
                             px-3 py-1.5 rounded-lg mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for work
            </span>
          </div>

        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2
                      flex flex-col items-center gap-2 ">
        <div className="w-6 h-9 border border-slate-600 rounded-full
                        flex justify-center pt-1.5 animate-bounce">
          <div className="w-0.5 h-2 bg-cyan-400 rounded-full animate-bounce" />
        </div>
        <span className="text-[10px] font-mono tracking-[0.2em]
                         text-slate-600 uppercase">
          Scroll Down
        </span>
      </div>

    </section>
  );
}
export default function About() {
  const sections = [
    {
      badge: "01",
      title: "My Expertise & Vision",
      desc: "Tôi là một chuyên gia IT Support sở hữu tư duy của một lập trình viên Fullstack. Sự kết hợp giữa khả năng phát triển ứng dụng (Web/App) và nền tảng hạ tầng mạng (đang hoàn thiện CCNA) cho phép tôi tiếp cận hệ thống một cách toàn diện. Mục tiêu của tôi là vận dụng kỹ năng lập trình để tự động hóa hạ tầng, xây dựng các luồng triển khai mượt mà và tối ưu hóa hiệu suất vận hành.",
      skillTitle: "Infrastructure & Network",
      skills: ["CCNA (In Progress)", "Cisco Packet Tracer", "VLAN / Trunking", "Routing & Switching", "Firewall"],
      accent: "cyan",
    },
    {
      badge: "02",
      title: "System & Hardware Foundations",
      desc: "  Với am hiểu về phần cứng PC/Server và kinh nghiệm thực chiến từ môi trường dịch vụ khách hàng, tôi có khả năng xử lý sự cố linh hoạt và thiết kế các hệ thống có tính ổn định cao. Tôi chú trọng việc kết hợp giữa hạ tầng vật lý và giám sát an ninh để tạo ra một môi trường vận hành an toàn và toàn diện.",
      skillTitle: "Hardware - CCTV systems",
      skills: ["Server Hardware", "PC Troubleshooting", "CCTV Systems", "IP Phone Systems",],
      accent: "indigo",
    },
    {
      badge: "03",
      title: "Development & Roadmap to DevOps",
      desc: "Sở hữu nền tảng Công nghệ phần mềm, tôi có khả năng làm chủ nhiều ngôn ngữ và framework hiện đại. Đây là đòn bẩy quan trọng khi tôi đang tập trung nâng cao kỹ năng chuyên sâu về DevOps, định hướng sử dụng tư duy lập trình để tự động hóa hạ tầng và tối ưu hóa quy trình triển khai phần mềm.",
      skillTitle: "Development & Database" ,
      skills: ["ReactJS", "NodeJS", "Flutter", "C#", "Docker", "Firebase", "MySQL", "SQL Server"],
      accent: "violet",
    },
  ];

  const accentMap = {
    cyan:   {
      badge:  "bg-cyan-400/10 text-cyan-400",
      tag:    "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
      dot:    "bg-cyan-400",
      border: "border-cyan-400",
    },
    indigo: {
      badge:  "bg-indigo-400/10 text-indigo-400",
      tag:    "bg-indigo-400/10 text-indigo-300 border-indigo-400/20",
      dot:    "bg-indigo-400",
      border: "border-indigo-400",
    },
    violet: {
      badge:  "bg-violet-400/10 text-violet-400",
      tag:    "bg-violet-400/10 text-violet-300 border-violet-400/20",
      dot:    "bg-violet-400",
      border: "border-violet-400",
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-[#0a0a0f] py-24 px-6 md:px-10 lg:px-16 relative overflow-hidden"
    >
      {/* Glow nền */}
      <div className="absolute top-[-150px] right-[-100px] w-[400px] h-[400px]
                      rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-80px] w-[350px] h-[350px]
                      rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-[0.2em] text-cyan-400 uppercase mb-3">
            ## WHO I AM
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-12 h-[2px] rounded-full bg-cyan-400" />
        </div>

        {/* Cards */}
        <div className="space-y-5">
          {sections.map(({ badge, title, desc, skillTitle, skills, accent }) => {
            const a = accentMap[accent];
            return (
              <div
                key={badge}
                className={`rounded-2xl border-l-4 ${a.border}
                            border border-[#1e1e2e] border-l-4
                            grid md:grid-cols-5 overflow-hidden
                            hover:border-opacity-60 transition-all duration-200`}
                style={{ background: "#12121a" }}
              >
                {/* LEFT */}
                <div className="md:col-span-3 p-7 md:p-8
                                border-b md:border-b-0 md:border-r border-[#1e1e2e]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1
                                     rounded-md ${a.badge}`}>
                      {badge}
                    </span>
                    <h3 className="text-base font-semibold text-white">{title}</h3>
                  </div>
                  <p className="text-slate-400 font-mono text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="md:col-span-2 p-7 md:p-8 flex flex-col justify-center"
                     style={{ background: "#0e0e16" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${a.dot}`} />
                    <h4 className="text-[11px] font-mono font-semibold
                                   tracking-widest uppercase text-slate-500">
                      {skillTitle}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 text-xs font-mono font-medium
                                   rounded-md border ${a.tag}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
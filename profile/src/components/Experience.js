import { useState } from "react";
import { FiExternalLink, FiX } from "react-icons/fi";
import { HiBuildingOffice2 } from "react-icons/hi2";

const COMPANIES = [
  {
    id: 1,
    name: "ANH PHUONG INFORMATICS TRADING AND SERVICES",
    role: "IT Helpdesk",
    period: "04/2024 – 04/2026",
    website: "https://anhphuongtelecom.vn/",
    tech: "TCP/IP, LAN/WAN, Router, Switch, CCTV,Nas,Wordpress",
    description:
      "Triển khai, thi công và giám sát hệ thống mạng TCP/IP, LAN/WAN, Router, Switch. Cấu hình AP hệ thống mạng cho doanh nghiệp. Cấu hình và quản trị NAS Synology (phân quyền, lưu trữ dữ liệu). Lắp đặt, bảo trì và xử lý sự cố hệ thống CCTV doanh nghiệp. Chẩn đoán, sửa chữa và nâng cấp phần cứng PC, Laptop (RAM, SSD/HDD, PSU, Mainboard). Xử lý triệt để các sự cố hệ điều hành Windows và phần mềm văn phòng trực tiếp hoặc từ xa. Lập trình và tối ưu giao diện website công ty trên nền tảng WordPress. Quản lý, theo dõi vòng đời tài sản CNTT và hỗ trợ quản lý fanpage, các hoạt động truyền thông online",
  },
  {
    id: 2,
    name: "CARPTECH",
    role: " Intern Mobile Developer",
    period: "02/2023 – 05/2023",
    website: "https://carptech.vn/",
    tech: "Flutter (Dart), Firebase",
    description:
      "Nghiên cứu và ứng dụng framework Flutter để xây dựng UI/UX cho ứng dụng E-commerce. Kết nối và xử lý dữ liệu thời gian thực thông qua Google Firebase. Tối ưu hóa mã nguồn giúp ứng dụng hoạt động mượt mà trên cả Android và iOS",
  },
];

export default function Experience() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="experience"
      className="relative bg-[#0a0a0f] flex items-center justify-center 
                 py-32 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* Glow nền */}
      <div className="absolute top-[-100px] right-[-80px] w-[400px] h-[400px]
                      rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-80px] w-[350px] h-[350px]
                      rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-mono tracking-[0.2em] text-cyan-400 uppercase mb-3">
            ## WORK HISTORY
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            WORK <span className="text-cyan-400">EXPERIENCES</span>
          </h2>
          <div className="mt-4 mx-auto w-12 h-[2px] rounded-full bg-cyan-400" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {COMPANIES.map((company) => (
            <div
              key={company.id}
              className="bg-[#12121a] border border-[#1e1e2e] rounded-2xl
                         hover:border-cyan-400/30 hover:-translate-y-1
                         transition-all duration-200 p-6 flex flex-col gap-4"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-3">
                <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20
                                flex items-center justify-center shrink-0">
                  <HiBuildingOffice2 className="text-cyan-400 text-xl" />
                </div>
                <span className="text-[11px] font-mono tracking-widest
                                 text-slate-500 mt-1 ml-auto uppercase">
                  {company.period}
                </span>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-base font-bold text-white">{company.name}</h3>
                <p className="text-sm text-cyan-400 font-mono mt-0.5">{company.role}</p>
                <p className="text-xs text-slate-500 font-mono mt-2">{company.tech}</p>
              </div>

              {/* Footer */}
              <div className="mt-auto pt-4 border-t border-[#1e1e2e]
                              flex items-center justify-between gap-2">
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-slate-600 hover:text-cyan-400
                             transition-colors truncate max-w-[160px]"
                >
                  {company.website.replace("https://", "")}
                </a>
                <button
                  onClick={() => setSelected(company)}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono
                             tracking-widest uppercase text-cyan-400
                             border border-[#2a2a3a] hover:border-cyan-400/50
                             hover:bg-cyan-400/5 px-3 py-1.5 rounded-lg
                             transition-all duration-200 shrink-0"
                >
                  <FiExternalLink className="w-3 h-3" />
                  Chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Popup ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#12121a] border border-[#2a2a3a] rounded-2xl
                       w-full max-w-md p-7 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal dots */}
            <div className="flex items-center gap-1.5 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 text-[10px] font-mono text-slate-600 tracking-widest">
                company.detail
              </span>
            </div>

            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center
                         rounded-lg bg-[#1e1e2e] hover:bg-[#2a2a3a] text-slate-500
                         hover:text-white transition-all"
            >
              <FiX className="w-4 h-4" />
            </button>

            {/* Icon + Name */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20
                              flex items-center justify-center shrink-0">
                <HiBuildingOffice2 className="text-cyan-400 text-xl" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{selected.name}</h3>
                <p className="text-sm text-cyan-400 font-mono">{selected.role}</p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              {[
                { label: "Website",   value: selected.website,     isLink: true },
                { label: "Thời gian", value: selected.period },
                { label: "Công nghệ", value: selected.tech },
                { label: "Mô tả",     value: selected.description },
              ].map(({ label, value, isLink }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="text-[11px] font-mono tracking-widest uppercase
                                   text-slate-600 shrink-0 w-24 mt-0.5">
                    {label}
                  </span>
                  {isLink ? (
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-cyan-400 hover:underline break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-mono text-slate-300 leading-relaxed">
                      {value}
                    </span>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
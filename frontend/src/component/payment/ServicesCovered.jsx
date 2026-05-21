import React from "react";
import {
  Award,
  FileCheck,
  BadgeCheck,
  Video,
  ClipboardCheck,
  Settings,
  UserCog,
  Building2,
  CheckCircle,
} from "lucide-react";

export default function ServicesCovered() {
  const services = [
    {
      icon: <Award />,
      title: "Council Certificate",
      desc: "Official council-issued certification processing.",
    },
    {
      icon: <FileCheck />,
      title: "Standard Certificate",
      desc: "Standard certification documentation services.",
    },
    {
      icon: <BadgeCheck />,
      title: "Professional Certification",
      desc: "Industry-recognized professional credentials.",
    },
    {
      icon: <Video />,
      title: "Online Consultancy",
      desc: "Expert consultancy delivered virtually.",
    },
    {
      icon: <ClipboardCheck />,
      title: "Standard Testing",
      desc: "Standardized assessment and testing services.",
    },
    {
      icon: <Settings />,
      title: "Council Membership",
      desc: "Official council membership registration.",
    },
    {
      icon: <UserCog />,
      title: "Student Service Processing",
      desc: "Comprehensive student support processing.",
    },
    {
      icon: <Building2 />,
      title: "Institutional Coordination",
      desc: "Inter-institutional coordination services.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="mx-auto max-w-[1024px] text-center">
        <span className="inline-flex rounded-full bg-[#fff0f0] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#e31919]">
          Services Covered
        </span>

        <h2 className="mt-4 font-serif text-[34px] font-bold leading-tight text-[#07162d] md:text-[42px]">
          Services Covered Under This Portal
        </h2>

        <p className="mt-3 text-[15px] text-[#53687d]">
          This portal facilitates secure payments for the following official
          EduGlobe professional services.
        </p>

        <div className="mx-auto mt-5 h-[3px] w-[64px] rounded-full bg-[#d99a00]" />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex min-h-[88px] items-center justify-between rounded-[10px] border border-[#e1e1e1] bg-white px-5 py-4 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[7px] bg-[#fff1f1] text-[#ff1f1f]">
                  {React.cloneElement(item.icon, {
                    size: 20,
                    strokeWidth: 2,
                  })}
                </div>

                <div>
                  <h3 className="font-serif text-[17px] font-bold text-[#061327]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-[#53687d]">
                    {item.desc}
                  </p>
                </div>
              </div>

              <CheckCircle
                className="shrink-0 text-[#177d3c]"
                size={21}
                strokeWidth={2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function TradeTestLevelSection() {
  const levels = [
    { lvl: "01", name: "Assistant", desc: "Entry-level workforce skills" },
    { lvl: "02", name: "Skilled Technician", desc: "Independent task execution" },
    { lvl: "03", name: "Senior Technician", desc: "Advanced specialist competence" },
    { lvl: "04", name: "Supervisor", desc: "Team leadership & quality control" },
    { lvl: "05", name: "Master Technician", desc: "Expert trainer & assessor" },
  ];

  return (
    <section className="w-full bg-[#fafafa] py-12 md:py-16">
      <div className="mx-auto  px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-[30px] md:text-[38px] font-bold leading-tight text-[#061321]">
            Trade Test Level System
          </h2>

          <p className="mt-5 text-[15px] md:text-[17px] text-[#5f6f7f]">
            A five-tier global competency ladder under the IISD framework.
          </p>

          <div className="mx-auto mt-5 h-[4px] w-[64px] rounded-full bg-[#d89b11]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {levels.map((item) => (
            <div
              key={item.lvl}
              className="relative min-h-[110px] rounded-[10px] border border-[#dedede] bg-white px-5 pt-9 pb-6 transition-all duration-300 hover:border-[#d89b11] hover:shadow-md"
            >
              <span className="absolute -top-3 left-5 rounded-[5px] bg-[#dfa514] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.05em] text-white">
                LEVEL {item.lvl}
              </span>

              <h3 className="font-serif text-[19px] font-bold text-[#061321]">
                {item.name}
              </h3>

              <p className="mt-3 text-[12px] leading-relaxed text-[#66737f]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/trade-testing"
            className="inline-flex items-center gap-3 rounded-[6px] bg-[#d71920] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#b9151b]"
          >
            Register for Trade Test
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
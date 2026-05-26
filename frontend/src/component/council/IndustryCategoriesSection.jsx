import React from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Zap,
  Flame,
  HardHat,
  Cpu,
  Hotel,
  Sparkles,
  HeartPulse,
  Palette,
  Briefcase,
  GraduationCap,
  Cog,
  Factory,
  ArrowRight,
} from "lucide-react";

export default function IndustryCategoriesSection() {
  const industries = [
    { icon: Factory, label: "Industrial Trades" },
    { icon: Cog, label: "Mechanical Engineering" },
    { icon: Zap, label: "Electrical & HVAC" },
    { icon: Flame, label: "Welding & Fabrication" },
    { icon: Wrench, label: "Oil & Gas Skills" },
    { icon: HardHat, label: "Occupational Safety" },
    { icon: Cpu, label: "Computer Science & AI" },
    { icon: Hotel, label: "Hospitality & Tourism" },
    { icon: Sparkles, label: "Beauty & Aesthetics" },
    { icon: HeartPulse, label: "Allied Health Sciences" },
    { icon: Palette, label: "Design & Creative Arts" },
    { icon: Briefcase, label: "Corporate Leadership" },
    { icon: GraduationCap, label: "Vocational & Technical" },
  ];

  return (
    <section className="w-full bg-[#fafafa] py-12 md:py-16">
      <div className="mx-auto  px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-[30px] md:text-[38px] font-bold leading-tight text-[#07111f]">
            Industry Categories
          </h2>

          <p className="mt-5 text-[15px] md:text-[17px] text-[#5f6f7f]">
            Sector-aligned programs spanning trades, technology, healthcare,
            hospitality and leadership.
          </p>

          <div className="mx-auto mt-5 h-[4px] w-[64px] rounded-full bg-[#d89b11]" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex min-h-[118px] flex-col items-center justify-center rounded-[10px] border border-[#e2e2e2] bg-white px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#ef2b2b]/40 hover:shadow-md"
              >
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#fff2f2] text-[#ef2b2b] hover:bg-[#ef2b2b] hover:text-white duration-300">
                  <Icon className="h-[24px] w-[24px]" strokeWidth={2} />
                </div>

                <h3 className="mt-3 text-[13px] md:text-[14px] font-bold leading-tight text-[#061321]">
                  {item.label}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/industry-categories"
            className="inline-flex items-center justify-center gap-2 rounded-[6px] border border-[#ef2b2b] px-5 py-3 text-[13px] font-bold text-[#ef2b2b] transition-all duration-300 hover:bg-[#ef2b2b] hover:text-white"
          >
            Explore All Categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
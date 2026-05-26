import React from "react";
import { Link } from "react-router-dom";
import { Award, ArrowRight } from "lucide-react";

export default function MembershipProgramsSection() {
  const tiers = [
    {
      name: "Student Member",
      tier: "Entry",
      color: "bg-[#f4f4f4] text-[#111827]",
    },
    {
      name: "Associate Member",
      tier: "Verified Skill",
      color: "bg-[#e7f4ef] text-[#24865d]",
    },
    {
      name: "Fellow Member",
      tier: "Recognised Professional",
      color: "bg-[#fff0f0] text-[#d71920]",
    },
    {
      name: "Executive Member",
      tier: "Industry Leader",
      color: "bg-[#fff5dc] text-[#d89b11]",
    },
    {
      name: "Chartered Professional",
      tier: "Chartered Status",
      color: "bg-[#f4f4f4] text-[#111827]",
    },
    {
      name: "Senior Fellow Member",
      tier: "Lifetime Honour",
      color: "bg-[#fff0f0] text-[#d71920]",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto px-10">

        <div className="text-center mb-10">
          <h2 className="font-serif text-[30px] md:text-[38px] font-bold leading-tight text-[#061321]">
            International Membership Programs
          </h2>

          <p className="mt-3 text-[14px] md:text-[16px] text-[#5f6f7f]">
            From Student Member to Senior Fellow — a structured pathway to
            chartered status.
          </p>

          <div className="mx-auto mt-4 h-[3px] w-[52px] rounded-full bg-[#d89b11]" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((item) => (
            <div
              key={item.name}
              className="rounded-[8px] border border-[#dedede] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-full ${item.color}`}
              >
                <Award className="h-[20px] w-[20px]" strokeWidth={2} />
              </div>

              <h3 className="font-serif text-[19px] font-bold text-[#061321]">
                {item.name}
              </h3>

              <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-[#66737f]">
                {item.tier}
              </p>

              <div className="mt-5 border-t border-[#dedede] pt-4 text-[12px] leading-relaxed text-[#66737f]">
                Digital Member ID • Global Recognition • Verifiable Credential
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/membership"
            className="inline-flex items-center gap-3 rounded-[6px] border border-[#d71920] px-5 py-3 text-[13px] font-bold text-[#d71920] transition hover:bg-[#d71920] hover:text-white"
          >
            Apply for Membership
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
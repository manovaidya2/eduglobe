import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Users,
  BookOpen,
  ExternalLink,
} from "lucide-react";

export default function GlobalSkillEcosystemSection() {
  const eduGlobeItems = [
    { icon: Briefcase, label: "Career Consultancy" },
    { icon: Users, label: "Employment Support" },
    { icon: GraduationCap, label: "Global Placement" },
    { icon: BookOpen, label: "Workforce Guidance" },
  ];

  const iisdItems = [
    { icon: ShieldCheck, label: "Trade Testing" },
    { icon: Award, label: "Skill Certifications" },
    { icon: Users, label: "Memberships" },
    { icon: BookOpen, label: "Competency Standards" },
  ];

  const Pillar = ({ badge, title, subtitle, items, type, href }) => {
    const isRed = type === "red";

    return (
      <div className="rounded-[14px] border border-[#dedede] bg-white p-6 md:p-8 shadow-sm">
        <span
          className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold ${
            isRed
              ? "bg-[#fff0f0] text-[#d71920]"
              : "bg-[#fff5d9] text-[#d89b11]"
          }`}
        >
          {badge}
        </span>

        <h3 className="mt-5 font-serif text-[22px] md:text-[26px] font-bold leading-tight text-[#111827]">
          {title}
        </h3>

        <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed text-[#66737f]">
          {subtitle}
        </p>

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-[12px] font-bold text-[#d89b11] hover:underline"
          >
            Visit website <ExternalLink className="h-3 w-3" />
          </a>
        )}

        <ul className="mt-5 space-y-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label} className="flex items-center gap-3">
                <span
                  className={`flex h-[30px] w-[30px] items-center justify-center rounded-[6px] ${
                    isRed
                      ? "bg-[#fff0f0] text-[#d71920]"
                      : "bg-[#fff5d9] text-[#d89b11]"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </span>

                <span className="text-[13px] md:text-[14px] font-semibold text-[#111827]">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto px-20">
        <div className="text-center">
          <span className="inline-block rounded-full border border-[#efc45c] bg-[#fff7df] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#d89b11]">
            International Skill Standards & Certification Division
          </span>

          <h2 className="mt-5 font-serif text-[28px] md:text-[36px] font-bold leading-tight text-[#061321]">
            Our Global Skill Standards & Certification Ecosystem
          </h2>

          <p className="mx-auto mt-3 max-w-[720px] text-[13px] md:text-[14px] leading-relaxed text-[#66737f]">
            EduGlobe Services LLC and the International Institute of Skills
            Development (IISD) operate as one integrated platform — combining
            consultancy with internationally recognised standards.
          </p>
        </div>

        <div className="relative mt-10">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <Pillar
              badge="EduGlobe Services LLC"
              title="Career, Consultancy & Workforce Support"
              subtitle="Global consultancy ecosystem for career guidance, training facilitation and employment support."
              items={eduGlobeItems}
              type="red"
            />

            <Pillar
              badge="IISD — Skill Standards Division"
              title="Training, Trade Testing & Certification Council"
              subtitle="International Institute of Skills Development — the certification, assessment and standards wing of the EduGlobe ecosystem."
              items={iisdItems}
              type="gold"
              href="https://iisd.io/"
            />
          </div>

          {/* Center Arrow */}
   {/* Center Arrow */}
<div
  className="
  absolute
  left-1/2
  top-[50%]
  z-[9999]
  -translate-x-1/2
  -translate-y-1/2
  pointer-events-none
  "
>
  <div className="relative">
    <div className="absolute inset-0 rounded-full bg-black/20 blur-lg scale-110"></div>

    <div
      className="
      relative
      h-[58px]
      w-[58px]
      rounded-full
      bg-[#111827]
      flex
      items-center
      justify-center
      shadow-[0_12px_30px_rgba(0,0,0,0.25)]
      "
    >
      <ArrowRight
        className="h-[24px] w-[24px] text-white"
        strokeWidth={2.5}
      />
    </div>
  </div>
</div>
          

          <p className="mx-auto mt-6 max-w-[680px] text-center text-[13px] text-[#66737f]">
            An integrated global career, skill development & workforce
            certification ecosystem.
          </p>

        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/iisd"
            className="rounded-[6px] bg-[#d71920] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#b9151b]"
          >
            Visit Skill Standards Division
          </Link>

          <Link
            to="/certifications"
            className="rounded-[6px] border border-[#d89b11] px-5 py-3 text-[13px] font-bold text-[#d89b11] transition hover:bg-[#d89b11] hover:text-white"
          >
            Explore Certifications
          </Link>

          <a
            href="https://iisd.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[6px] border border-[#d71920] px-5 py-3 text-[13px] font-bold text-[#d71920] transition hover:bg-[#d71920] hover:text-white"
          >
            iisd.io <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
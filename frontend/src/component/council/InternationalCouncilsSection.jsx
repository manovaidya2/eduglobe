import React from "react";
import { Link } from "react-router-dom";

export default function InternationalCouncilsSection() {
  const councils = [
    "International Engineering Standards",
    "Global Industrial Trade Programs",
    "Hospitality & Tourism Certifications",
    "Occupational Safety Programs",
    "Allied Health Certifications",
    "Beauty & Aesthetic Certifications",
    "Computer Science & AI Certifications",
    "Corporate Leadership Programs",
  ];

  return (
    <section className="w-full bg-[#fafafa] py-12 md:py-10">
      <div className="mx-auto px-7">
        <div className="text-center mb-14">
          <h2 className="font-serif text-[34px] md:text-[40px] font-bold leading-tight text-[#061321]">
            International Councils & Global Programs
          </h2>

          <p className="mt-3 text-[17px] md:text-[20px] text-[#5f6f7f]">
            Premium standards-led tracks within the EduGlobe + IISD ecosystem.
          </p>

          <div className="mx-auto mt-6 h-[4px] w-[72px] rounded-full bg-[#d89b11]" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {councils.map((item) => (
            <div
              key={item}
              className="rounded-[12px] border border-[#dedede] bg-white px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d89b11]">
                IISD COUNCIL
              </span>

              <h3 className="mt-4 font-serif text-[18px] md:text-[15px] font-bold leading-snug text-[#061321]">
                {item}
              </h3>

              <Link
                to="/industry-categories"
                className="mt-4 inline-block text-[14px] font-normal text-[#d71920] hover:underline"
              >
                Explore Programs →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
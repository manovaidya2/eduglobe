import React from "react";
import SectionHeading from "../SectionHeading";

// Custom Icons
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const areas = [
  "Curriculum design and structuring",
  "Skill-based and vocational program integration",
  "Industry-aligned course frameworks",
  "Training module development",
  "Outcome-based education systems",
];

const benefits = [
  "Improved employability outcomes",
  "Industry relevance",
  "Scalable academic models",
  "Enhanced institutional positioning",
];

const SkillsAreas = () => {
  return (
    <section className="section-padding">
      <div className="container grid lg:grid-cols-2 gap-8 md:gap-12">
        {/* Key Areas Section */}
        <div>
          <SectionHeading title="Key Areas" centered={false} />
          <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
            EduGlobe works closely with institutions to design, develop, and implement curriculum frameworks that align with industry requirements, regulatory standards, and global education trends.
          </p>
          <ul className="space-y-3">
            {areas.map((area, index) => (
              <li 
                key={area} 
                className="flex items-start gap-3 group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-accent mt-0.5 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-primary">
                  <CheckIcon />
                </span>
                <span className="text-foreground text-sm sm:text-base transition-all duration-300 group-hover:text-primary">
                  {area}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits Section */}
        <div>
          <SectionHeading title="Benefits" centered={false} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="bg-gold-light p-5 sm:p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gold hover:text-white group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-foreground font-semibold text-sm sm:text-base transition-all duration-300 group-hover:text-white">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAreas;
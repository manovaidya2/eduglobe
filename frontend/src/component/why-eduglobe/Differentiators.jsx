import React from "react";
import SectionHeading from "../SectionHeading";

// Custom Icons
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const LayersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const TrendingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8 10 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const differentiators = [
  {
    icon: GlobeIcon,
    title: "UAE-Based Global Outlook",
    desc: "Strategic positioning in the UAE with global reach and operations across continents.",
    features: ["Global presence", "Strategic location", "International standards"],
  },
  {
    icon: LayersIcon,
    title: "Education & Skills Under One Brand",
    desc: "Complete ecosystem covering academic programs, skills training, and institutional management.",
    features: ["Academic programs", "Skills training", "Institutional management"],
  },
  {
    icon: UsersIcon,
    title: "Support for Individuals & Institutions",
    desc: "Dual-track approach serving both students and educational organizations.",
    features: ["Student support", "Institutional services", "Dual-track approach"],
  },
  {
    icon: ShieldIcon,
    title: "Structured Guidance & Service Delivery",
    desc: "Process-driven approach ensuring consistent quality and measurable outcomes.",
    features: ["Process-driven", "Quality assurance", "Measurable results"],
  },
  {
    icon: TrendingIcon,
    title: "Scalable Partnership Model",
    desc: "Flexible engagement models that grow with your institutional needs.",
    features: ["Flexible models", "Scalable solutions", "Growth partnership"],
  },
  {
    icon: AwardIcon,
    title: "Professional & Credible Positioning",
    desc: "Established reputation built on integrity, expertise, and proven results.",
    features: ["Proven expertise", "Integrity-driven", "Credible reputation"],
  },
];

const Differentiators = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading title="Key Differentiators" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 sm:p-8 border border-border hover:shadow-xl transition-all duration-500 hover:border-primary/30 group"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary group-hover:shadow-xl group-hover:scale-110">
                  <div className="transition-all duration-500 group-hover:text-white">
                    <IconComponent />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2 text-foreground transition-all duration-300 group-hover:text-primary">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 transition-all duration-300 group-hover:text-foreground">
                  {item.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-2 pt-4 border-t border-border transition-all duration-300 group-hover:border-primary/20">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground"
                    >
                      <span className="text-accent mt-0.5 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-primary">
                        <CheckIcon />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
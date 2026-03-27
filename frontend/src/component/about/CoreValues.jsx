import React from "react";
import SectionHeading from "../SectionHeading";

// Custom Icons
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
    <path d="M15 9a3 3 0 0 0-6 0c0 1.5-.5 2-1 3.5s-1 2.5-1 4.5h10c0-2-.5-3-1-4.5S15 10.5 15 9z"></path>
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const values = [
  { icon: ShieldIcon, title: "Integrity" },
  { icon: EyeIcon, title: "Transparency" },
  { icon: UsersIcon, title: "Student Success" },
  { icon: LightbulbIcon, title: "Professional Excellence" },
  { icon: GlobeIcon, title: "Global Collaboration" },
  { icon: BookIcon, title: "Practical Learning" },
];

const CoreValues = () => {
  return (
    <section className="section-padding">
      <div className="">
        <SectionHeading title="Our Core Values" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.title}
                className="text-center p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="text-gold mx-auto mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  <IconComponent />
                </div>
                <span className="font-semibold text-xs sm:text-sm text-foreground">
                  {value.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
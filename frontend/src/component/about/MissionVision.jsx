import React from "react";

// Custom Icons
const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const MissionVision = () => {
  return (
    <section className="section-padding section-light">
      <div className=" grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Mission Card */}
        <div className="bg-card p-6 sm:p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300">
          <div className="text-primary mb-4">
            <TargetIcon />
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2 md:mb-3 text-foreground">
            Our Mission
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            To create accessible, practical, and globally connected pathways for education, skills, and academic advancement.
          </p>
        </div>
        
        {/* Vision Card */}
        <div className="bg-card p-6 sm:p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300">
          <div className="text-accent mb-4">
            <EyeIcon />
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2 md:mb-3 text-foreground">
            Our Vision
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            To become a trusted international platform for education support, skill-building, and institutional collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
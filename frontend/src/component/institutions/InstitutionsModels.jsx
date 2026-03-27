import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import Button from "../Button";

// Custom Icons
const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <line x1="9" y1="22" x2="15" y2="22"></line>
    <line x1="9" y1="6" x2="9" y2="6"></line>
    <line x1="15" y1="6" x2="15" y2="6"></line>
    <line x1="9" y1="10" x2="9" y2="10"></line>
    <line x1="15" y1="10" x2="15" y2="10"></line>
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const TrendingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8 10 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const models = [
  { 
    icon: BuildingIcon, 
    title: "Institution Setup & Turnkey Projects", 
    desc: "Complete institutional establishment from concept to launch.",
    features: ["Concept to launch", "Infrastructure planning", "Operational setup"]
  },
  { 
    icon: SettingsIcon, 
    title: "Full Institutional Management", 
    desc: "Outsourced model for comprehensive operational oversight.",
    features: ["Complete management", "Operational oversight", "Performance monitoring"]
  },
  { 
    icon: TrendingIcon, 
    title: "Growth & Expansion Consulting", 
    desc: "Strategic advisory for scaling and expanding institutional reach.",
    features: ["Strategic planning", "Market expansion", "Growth strategies"]
  },
  { 
    icon: ShieldIcon, 
    title: "Regulatory & Compliance Advisory", 
    desc: "Expert guidance on approvals, compliance, and governance.",
    features: ["Regulatory guidance", "Compliance management", "Governance support"]
  },
];

const InstitutionsModels = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading 
          title="Engagement Models" 
          subtitle="EduGlobe collaborates exclusively with educational institutions, promoters, and investors to build, manage, and scale institutions across geographies." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {models.map((model, index) => {
            const IconComponent = model.icon;
            return (
              <div
                key={model.title}
                className="bg-card rounded-xl p-6 sm:p-8 border border-border hover:shadow-xl transition-all duration-500 hover:border-primary/30 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary group-hover:shadow-xl group-hover:scale-110">
                  <div className="transition-all duration-500 group-hover:text-white">
                    <IconComponent />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2 text-foreground transition-all duration-300 group-hover:text-primary">
                  {model.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-4 transition-all duration-300 group-hover:text-foreground">
                  {model.desc}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 pt-4 border-t border-border transition-all duration-300 group-hover:border-primary/20">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground">
                     
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
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="gold" size="md">
              Start Your Institutional Project <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InstitutionsModels;
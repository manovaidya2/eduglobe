import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import Button from "../Button";

// Custom Icons
const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const ClipboardListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    <line x1="9" y1="12" x2="15" y2="12"></line>
    <line x1="9" y1="16" x2="15" y2="16"></line>
  </svg>
);

const BarChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </svg>
);

const FileSearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <circle cx="10" cy="14" r="3"></circle>
    <line x1="12" y1="16" x2="14" y2="18"></line>
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

const academicServices = [
  { 
    icon: BookOpenIcon, 
    title: "Academic Planning & Coordination", 
    desc: "Structured academic calendar, program coordination, and faculty support.",
    features: ["Academic calendar planning", "Program coordination", "Faculty support system"]
  },
  { 
    icon: ClipboardListIcon, 
    title: "Quality Assurance & Accreditation", 
    desc: "Support for institutional quality standards and accreditation processes.",
    features: ["Quality standards implementation", "Accreditation support", "Compliance monitoring"]
  },
  { 
    icon: BarChartIcon, 
    title: "Student Performance Tracking", 
    desc: "Systems for monitoring and improving student academic outcomes.",
    features: ["Performance analytics", "Progress tracking", "Outcome improvement strategies"]
  },
  { 
    icon: FileSearchIcon, 
    title: "Research & Development Support", 
    desc: "Guidance for institutional research programs and academic publications.",
    features: ["Research program development", "Publication support", "R&D guidance"]
  },
];

const AcademicServices = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading 
          title="Academic Excellence Support" 
          subtitle="We help institutions build robust academic frameworks that drive quality education and measurable outcomes." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {academicServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
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
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-4 transition-all duration-300 group-hover:text-foreground">
                  {service.desc}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 pt-4 border-t border-border transition-all duration-300 group-hover:border-primary/20">
                  {service.features.map((feature) => (
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
            <Button variant="primary" size="md">
              Get Academic Support <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicServices;
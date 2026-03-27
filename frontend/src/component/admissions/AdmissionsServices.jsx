import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import Button from "../Button";

// Custom Icons
const GraduationCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
  </svg>
);

const FileTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
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

const services = [
  { 
    icon: FileTextIcon, 
    title: "Application & Documentation Guidance", 
    desc: "Complete assistance with applications, transcripts, and documentation.",
    features: ["Application review", "Document verification", "Transcript evaluation"]
  },
  { 
    icon: GlobeIcon, 
    title: "International Admission Coordination", 
    desc: "Support for admissions to universities and colleges worldwide.",
    features: ["University selection", "Application submission", "Follow-up support"]
  },
  { 
    icon: UsersIcon, 
    title: "Counseling & Career Guidance", 
    desc: "Professional guidance for course selection and career planning.",
    features: ["Career assessment", "Course selection", "Career roadmap"]
  },
  { 
    icon: GraduationCapIcon, 
    title: "Scholarship & Financial Aid Support", 
    desc: "Help with identifying and applying for scholarships and financial aid.",
    features: ["Scholarship search", "Application assistance", "Financial planning"]
  },
];

const AdmissionsServices = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading 
          title="How We Support Admissions" 
          subtitle="From application to enrollment, we guide students and institutions through every step of the admissions journey." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card rounded-xl p-6 sm:p-8 border border-border hover:shadow-xl transition-all duration-500 hover:border-primary/30 group"
              >
                {/* Icon Box - Primary color on hover */}
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary group-hover:shadow-xl group-hover:scale-110">
                  <div className="transition-all duration-500 group-hover:text-white">
                    <IconComponent />
                  </div>
                </div>
                
                {/* Title - Primary color on hover */}
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground transition-all duration-300 group-hover:text-primary">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-4 transition-all duration-300 group-hover:text-foreground">
                  {service.desc}
                </p>
                
                {/* Features List */}
                {service.features && (
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
                )}
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="primary" size="md" className="cursor-pointer">
              Get Admission Support <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsServices;
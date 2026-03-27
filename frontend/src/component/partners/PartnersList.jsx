import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import Button from "../Button";

// Custom Icons
const HandshakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12L20 8C20 5.8 18.2 4 16 4H8C5.8 4 4 5.8 4 8L4 12"></path>
    <path d="M20 12L16 12C14.9 12 14 12.9 14 14L14 18C14 19.1 14.9 20 16 20L20 20C21.1 20 22 19.1 22 18L22 14C22 12.9 21.1 12 20 12Z"></path>
    <path d="M4 12L8 12C9.1 12 10 12.9 10 14L10 18C10 19.1 9.1 20 8 20L4 20C2.9 20 2 19.1 2 18L2 14C2 12.9 2.9 12 4 12Z"></path>
    <path d="M12 7L12 11"></path>
    <path d="M12 15L12 17"></path>
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

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const PlaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
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

const partnerships = [
  {
    icon: UsersIcon,
    title: "Student Support Collaboration",
    desc: "Joint student guidance and support initiatives.",
    features: ["Student mentoring", "Career guidance", "Support programs"],
  },
  {
    icon: GlobeIcon,
    title: "Education Outreach Coordination",
    desc: "Collaborative outreach programs for wider educational access.",
    features: ["Community outreach", "Awareness programs", "Educational access"],
  },
  {
    icon: BookOpenIcon,
    title: "Skills & Training Partnerships",
    desc: "Co-develop training programs and skill initiatives.",
    features: ["Training programs", "Skill development", "Certification courses"],
  },
  {
    icon: HandshakeIcon,
    title: "Joint Program Support",
    desc: "Collaborative program design and delivery.",
    features: ["Program design", "Joint delivery", "Resource sharing"],
  },
  {
    icon: PlaneIcon,
    title: "International Collaboration",
    desc: "Cross-border educational partnership opportunities.",
    features: ["Global partnerships", "Student exchange", "International programs"],
  },
];

const PartnersList = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          title="Partnership Opportunities"
          subtitle="We work with institutions and organizations seeking outreach support, student support solutions, and collaboration in admissions, skills training, and professional development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerships.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <div
                key={partner.title}
                className="bg-card rounded-xl p-6 sm:p-8 border border-border hover:shadow-xl transition-all duration-500 hover:border-primary/30 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Box — matches InstitutionsModels exactly */}
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary group-hover:shadow-xl group-hover:scale-110">
                  <div className="transition-all duration-500 group-hover:text-white">
                    <IconComponent />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2 text-foreground transition-all duration-300 group-hover:text-primary">
                  {partner.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 transition-all duration-300 group-hover:text-foreground">
                  {partner.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-2 pt-4 border-t border-border transition-all duration-300 group-hover:border-primary/20">
                  {partner.features.map((feature) => (
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

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="primary" size="md">
              Become a Partner <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnersList;
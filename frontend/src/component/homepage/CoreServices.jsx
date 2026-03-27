import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import Button from "../Button";

// Icons as components
const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <line x1="9" y1="22" x2="15" y2="22"></line>
    <line x1="9" y1="6" x2="9" y2="6"></line>
    <line x1="15" y1="6" x2="15" y2="6"></line>
    <line x1="9" y1="10" x2="9" y2="10"></line>
    <line x1="15" y1="10" x2="15" y2="10"></line>
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

const TrendingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8 10 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const services = [
  { icon: BuildingIcon, title: "Institution Setup & Establishment", desc: "End-to-end support for launching universities, colleges, schools, boards, and associations." },
  { icon: UsersIcon, title: "Institutional Management Services", desc: "Complete management and operational oversight of educational institutions." },
  { icon: TrendingIcon, title: "Marketing & Business Development", desc: "Strategic growth, branding, and student acquisition systems for institutions." },
  { icon: BookIcon, title: "Curriculum & Skills Ecosystem Development", desc: "Designing industry-relevant academic and skill-based programs." },
  { icon: ShieldIcon, title: "Regulatory & Compliance Support", desc: "Handling government, council approvals, and ongoing compliance." },
];

const CoreServices = () => {
  return (
    <section className="section-padding section-light">
      <div className="">
        <SectionHeading 
          title="Core Service Verticals" 
          subtitle="Comprehensive solutions for every stage of institutional development and management." 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card rounded-xl p-8 border border-border hover:shadow-lg hover:border-primary/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <IconComponent />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="primary">
              View All Services <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import Button from "../Button";

// Icons
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const whyPoints = [
  "End-to-end institutional solutions",
  "UAE-based global operations",
  "Expertise in setup and management",
  "Strong regulatory and compliance knowledge",
  "Scalable partnership models",
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="px-2">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="Why Choose EduGlobe" centered={false} />
            <ul className="space-y-4">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="text-accent mt-0.5 shrink-0">
                    <CheckIcon />
                  </div>
                  <span className="text-foreground font-medium">{point}</span>
                </li>
              ))}
            </ul>
            <Link to="/why-eduglobe" className="inline-block mt-8">
              <Button>
                Learn More <ArrowRightIcon />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="bg-gold-light rounded-2xl p-8">
              <div className="text-gold mb-4">
                <AwardIcon />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Global Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                With a UAE-based global outlook, EduGlobe combines local regulatory expertise with international education standards to deliver sustainable institutional success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import Button from "../Button";

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const SkillsCta = () => {
  return (
    <section className="section-padding section-light text-center">
      <div className="container">
        <SectionHeading 
          title="Ready to Build Your Skills Ecosystem?" 
          subtitle="Partner with EduGlobe to design curriculum frameworks that prepare students for the future." 
        />
        <Link to="/contact" >
          <Button variant="primary" size="md" className="cursor-pointer">
            Start a Conversation <ArrowRightIcon />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default SkillsCta;
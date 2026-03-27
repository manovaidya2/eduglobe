import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const WhyCta = () => {
  return (
    <section className="section-padding hero-gradient text-center">
      <div className="container">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4 animate-fade-in-up">
          Ready to Get Started?
        </h2>
        <p className="text-primary-foreground/80 text-base sm:text-lg mb-6 md:mb-8 max-w-xl mx-auto animate-fade-in-up delay-100">
          Partner with EduGlobe for a complete institutional solution that delivers sustainable results.
        </p>
        <Link to="/contact" className="inline-block animate-fade-in-up delay-200">
          <Button variant="" size="md" className="
      px-8 py-3 
      rounded-xl 
      bg-gradient-to-r from-yellow-500 to-yellow-600 
      text-white font-semibold 
      shadow-md 
      hover:scale-105 hover:shadow-lg 
      transition-all duration-300
    ">
            Contact Us Today <ArrowRightIcon />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WhyCta;
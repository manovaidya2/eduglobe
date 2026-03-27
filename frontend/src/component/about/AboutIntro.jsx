import React from "react";
import SectionHeading from "../SectionHeading";

const AboutIntro = () => {
  return (
    <section className="section-padding">
      <div className=" grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <SectionHeading title="Who We Are" centered={false} />
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
            EduGlobe Services FZ LLC is a forward-looking education support and services company based in the UAE. The company is dedicated to helping students, professionals, institutions, and education partners access reliable support across admissions, academic coordination, training, and professional development.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            We exist to simplify educational access, improve academic coordination, and promote skill development through structured services that respond to modern learner and institutional needs.
          </p>
        </div>
        <div className="mt-6 lg:mt-0">
          <img 
            src="/src/assets/about-team.jpg" 
            alt="EduGlobe team" 
            className="rounded-xl shadow-lg w-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/1280x720?text=EduGlobe+Team";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
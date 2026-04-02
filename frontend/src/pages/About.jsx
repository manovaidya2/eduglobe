import React from "react";

import AboutHero from "../component/about/AboutHero";
import AboutIntro from "../component/about/AboutIntro";
import MissionVision from "../component/about/MissionVision";
import CoreValues from "../component/about/CoreValues";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
     
      <AboutHero />
      <AboutIntro />
      <MissionVision />
      <CoreValues />
   
    </div>
  );
};

export default About;
import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AboutHero from "../component/about/AboutHero";
import AboutIntro from "../component/about/AboutIntro";
import MissionVision from "../component/about/MissionVision";
import CoreValues from "../component/about/CoreValues";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AboutHero />
      <AboutIntro />
      <MissionVision />
      <CoreValues />
      <Footer />
    </div>
  );
};

export default About;
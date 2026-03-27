import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import WhyHero from "../component/why-eduglobe/WhyHero";
import Differentiators from "../component/why-eduglobe/Differentiators";
import WhyCta from "../component/why-eduglobe/WhyCta";

const WhyEduGlobe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhyHero />
      <Differentiators />
      <WhyCta />
      <Footer />
    </div>
  );
};

export default WhyEduGlobe;
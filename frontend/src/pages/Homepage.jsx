import React from 'react';
import Navbar from "../component/Navbar"
import Footer from "../component/Footer";
import Hero from "../component/homepage/Hero";
import WhatWeDo from "../component/homepage/WhatWeDo";
import CoreServices from "../component/homepage/CoreServices";
import WhoWeServe from "../component/homepage/WhoWeServe";
import WhyChooseUs from "../component/homepage/WhyChooseUs";
import CtaSection from "../component/homepage/CtaSection";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <CoreServices />
      <WhoWeServe />
      <WhyChooseUs />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Homepage;
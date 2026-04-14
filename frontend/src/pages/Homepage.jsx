import React from 'react';
import { Helmet } from "react-helmet-async";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Hero from "../component/homepage/Hero";
import WhatWeDo from "../component/homepage/WhatWeDo";
import CoreServices from "../component/homepage/CoreServices";
import WhoWeServe from "../component/homepage/WhoWeServe";
import WhyChooseUs from "../component/homepage/WhyChooseUs";
import CtaSection from "../component/homepage/CtaSection";

const Homepage = () => {
  return (
    <>
      {/* Helmet SEO */}
      <Helmet>
        <title>EduGlobe Services FZ LLC | Education Support UAE</title>

        <meta
          name="description"
          content="EduGlobe provides admissions support, academic coordination, and training services in UAE."
        />

        <link rel="canonical" href="https://eduglobe.ae/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Hero />
        <WhatWeDo />
        <CoreServices />
        <WhoWeServe />
        <WhyChooseUs />
        <CtaSection />
      </div>
    </>
  );
};

export default Homepage;
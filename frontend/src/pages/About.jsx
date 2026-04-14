import React from "react";
import { Helmet } from "react-helmet-async";

import AboutHero from "../component/about/AboutHero";
import AboutIntro from "../component/about/AboutIntro";
import MissionVision from "../component/about/MissionVision";
import CoreValues from "../component/about/CoreValues";

const About = () => {
  return (
    <>
      {/* Helmet SEO */}
      <Helmet>
        <title>About EduGlobe | Education Support & Services UAE</title>

        <meta
          name="description"
          content="Learn about EduGlobe Services FZ LLC, our mission, vision, and commitment to education support, training, and academic development."
        />

        <link rel="canonical" href="https://eduglobe.ae/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <AboutHero />
        <AboutIntro />
        <MissionVision />
        <CoreValues />
      </div>
    </>
  );
};

export default About;
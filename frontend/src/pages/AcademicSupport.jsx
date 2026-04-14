import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AcademicHero from "../component/academic-support/AcademicHero";
import AcademicServices from "../component/academic-support/AcademicServices";

const AcademicSupport = () => {
  return (
    <>
      {/* Helmet SEO */}
      <Helmet>
        <title>Academic Support Services | EduGlobe UAE</title>

        <meta
          name="description"
          content="EduGlobe offers academic support services including guidance, coordination, and assistance to help students succeed in their educational journey."
        />

        <link rel="canonical" href="https://eduglobe.ae/academic-support" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <AcademicHero />
        <AcademicServices />
      </div>
    </>
  );
};

export default AcademicSupport;
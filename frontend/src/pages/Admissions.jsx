import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AdmissionsHero from "../component/admissions/AdmissionsHero";
import AdmissionsServices from "../component/admissions/AdmissionsServices";

const Admissions = () => {
  return (
    <>
      {/* Helmet SEO */}
      <Helmet>
        <title>Admissions Support Services | EduGlobe UAE</title>

        <meta
          name="description"
          content="Get expert admissions support with EduGlobe. We provide guidance, application assistance, and complete support for university admissions."
        />

        <link rel="canonical" href="https://eduglobe.ae/admissions" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <AdmissionsHero />
        <AdmissionsServices />
      </div>
    </>
  );
};

export default Admissions;
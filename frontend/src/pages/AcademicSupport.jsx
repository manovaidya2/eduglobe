import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AcademicHero from "../component/academic-support/AcademicHero";
import AcademicServices from "../component/academic-support/AcademicServices";

const AcademicSupport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AcademicHero />
      <AcademicServices />
      <Footer />
    </div>
  );
};

export default AcademicSupport;
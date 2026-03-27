import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AdmissionsHero from "../component/admissions/AdmissionsHero";
import AdmissionsServices from "../component/admissions/AdmissionsServices";

const Admissions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AdmissionsHero />
      <AdmissionsServices />
      <Footer />
    </div>
  );
};

export default Admissions;
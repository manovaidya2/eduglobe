import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import InstitutionsHero from "../component/institutions/InstitutionsHero";
import InstitutionsModels from "../component/institutions/InstitutionsModels";

const Institutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <InstitutionsHero />
      <InstitutionsModels />
      <Footer />
    </div>
  );
};

export default Institutions;
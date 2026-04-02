import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import PartnersHero from "../component/partners/PartnersHero";
import PartnersList from "../component/partners/PartnersList";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
  
      <PartnersHero />
      <PartnersList />
    
    </div>
  );
};

export default Partners;
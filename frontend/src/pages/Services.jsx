import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ServicesHero from "../component/services/ServiceHero";
import ServicesList from "../component/services/ServicesList";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <Footer />
    </div>
  );
};

export default Services;
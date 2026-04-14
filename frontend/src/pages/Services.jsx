import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ServicesHero from "../component/services/ServiceHero";
import ServicesList from "../component/services/ServicesList";

const Services = () => {
  return (
    <>
      {/* Helmet SEO */}
      <Helmet>
        <title>Our Services | EduGlobe Education Support & Training UAE</title>

        <meta
          name="description"
          content="Explore EduGlobe services including admissions support, academic coordination, training programs, and skill development solutions in the UAE."
        />

        <link rel="canonical" href="https://eduglobe.ae/services" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <ServicesHero />
        <ServicesList />
      </div>
    </>
  );
};

export default Services;
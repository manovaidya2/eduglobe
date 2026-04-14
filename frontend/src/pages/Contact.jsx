import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ContactHero from "../component/contact/ContactHero";
import ContactForm from "../component/contact/ContactForm";
import ContactInfo from "../component/contact/ContactInfo";

const Contact = () => {
  return (
    <>
      {/* Helmet SEO */}
      <Helmet>
        <title>Contact EduGlobe | Get in Touch for Education Support</title>

        <meta
          name="description"
          content="Contact EduGlobe Services FZ LLC for admissions support, academic guidance, and training services. Get in touch with our expert team today."
        />

        <link rel="canonical" href="https://eduglobe.ae/contact" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <ContactHero />

        <section className="section-padding">
          <div className="container grid lg:grid-cols-5 gap-8 md:gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
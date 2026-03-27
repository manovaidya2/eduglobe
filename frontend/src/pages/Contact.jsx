import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ContactHero from "../component/contact/ContactHero";
import ContactForm from "../component/contact/ContactForm";
import ContactInfo from "../component/contact/ContactInfo";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
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
      
      <Footer />
    </div>
  );
};

export default Contact;
import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import PaymentHero from "../component/payment/PaymentHero";
import ServicesCovered from "../component/payment/ServicesCovered";
import PaymentStep from "../component/payment/PaymentStep";
import TrustSecurity from "../component/payment/TrustSecurity";
import HelpBeforePayment from "../component/payment/HelpBeforePayment";


const Paymentpage = () => {
  return (
    <div className="min-h-screen bg-background">
   
      <PaymentHero />
      <ServicesCovered />
      <PaymentStep />
      <TrustSecurity />
      <HelpBeforePayment />
   
    
    </div>
  );
};

export default Paymentpage;
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Services from "./pages/Services";
import Admissions from "./pages/Admissions";
import AcademicSupport from "./pages/AcademicSupport";
import SkillsTraining from "./pages/SkillsTraining";
import Institutions from "./pages/Institutions";
import Partners from "./pages/Partners";
import WhyEduGlobe from "./pages/WhyEduGlobe";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./component/ruleregulation/PrivacyPolicy";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import TermsConditions from "./component/ruleregulation/TermsConditions";
import RefundPolicy from "./component/ruleregulation/RefundPolicy";

// ScrollToTop Component - This will scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth" // "auto" for instant scroll, "smooth" for smooth animation
    });
  }, [pathname]); // Runs every time the route changes

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/academic-support" element={<AcademicSupport />} />
        <Route path="/skills-training" element={<SkillsTraining />} />
        <Route path="/institutions" element={<Institutions />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/why-eduglobe" element={<WhyEduGlobe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
        <Route path="/terms-conditions" element={<TermsConditions />} /> 
        <Route path="/refund-policy" element={<RefundPolicy />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
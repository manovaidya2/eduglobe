import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SkillsHero from "../component/skills/SkillsHero";
import SkillsAreas from "../component/skills/SkillsAreas";
import SkillsCta from "../component/skills/SkillsCta";

const SkillsTraining = () => {
  return (
    <div className="min-h-screen bg-background">
     
      <SkillsHero />
      <SkillsAreas />
      <SkillsCta />
    
    </div>
  );
};

export default SkillsTraining;
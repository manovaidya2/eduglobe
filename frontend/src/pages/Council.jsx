import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../component/council/Hero";
import WorkforcePlatform from "../component/council/WorkforcePlatform";
import TrainingCertificationSection from "../component/council/TrainingCertificationSection";
import IndustryCategoriesSection from "../component/council/IndustryCategoriesSection";
import GlobalSkillEcosystemSection from "../component/council/GlobalSkillEcosystemSection";
import TradeTestLevelSection from "../component/council/TradeTestLevelSection";
import MembershipProgramsSection from "../component/council/MembershipProgramsSection";
import InternationalCouncilsSection from "../component/council/InternationalCouncilsSection";
import GlobalImpactSection from "../component/council/GlobalImpactSection";
import WhoWeServeSection from "../component/council/WhoWeServeSection";
import WhyChooseEduGlobe from "../component/council/WhyChooseEduGlobe";
import JoinWorkforceSection from "../component/council/JoinWorkforceSection";


const Council = () => {
  return (
    <>
      {/* Helmet SEO */}
      <Helmet>
        <title>Council | EduGlobe Services FZ LLC</title>

        <meta
          name="description"
          content="Learn about EduGlobe Services FZ LLC, our mission, vision, and commitment to education support, training, and academic development."
        />

        <link rel="canonical" href="https://eduglobe.ae/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
    <Hero />
    <WorkforcePlatform />
    <TrainingCertificationSection />
    <IndustryCategoriesSection />
    <GlobalSkillEcosystemSection />
    <TradeTestLevelSection />
    <MembershipProgramsSection />
    <InternationalCouncilsSection />
    <GlobalImpactSection />
    <WhoWeServeSection />
    <WhyChooseEduGlobe />
    <JoinWorkforceSection />
      </div>
    </>
  );
};

export default Council;
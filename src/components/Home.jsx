import React from "react";

import HeroSection from "../section/HeroSection";
import ServiceSection from "../section/ServiceSection";
import Assest from "../section/Assest";
import WhyJoin from "../section/WhyJoin";
import OurPlan from "../section/OurPlan";
import FaqSection from "../section/FaqSection";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
      <Assest></Assest>
      <WhyJoin></WhyJoin>
      {/* <OurPlan></OurPlan> */}
      <FaqSection></FaqSection>
    </>
  );
};

export default Home;

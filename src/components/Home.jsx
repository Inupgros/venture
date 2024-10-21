import React from "react";

import HeroSection from "../section/HeroSection";
import ServiceSection from "../section/ServiceSection";
import Assest from "../section/Assest";
import WhyJoin from "../section/WhyJoin";

import FaqSection from "../section/FaqSection";

const Home = () => {
  return (
    <>
      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="service-section">
        <ServiceSection />
      </div>
      <div id="assest-section">
        <Assest />
      </div>
      <div id="why-join-section">
        <WhyJoin />
      </div>
      <div id="faq-section">
        <FaqSection />
      </div>
    </>
  );
};

export default Home;

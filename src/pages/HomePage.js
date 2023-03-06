import React, { useEffect } from "react";

import Header from "../components/Header";
import LandingSection from "../components/LandingSection";
import AboutMe from "../components/AboutMe";
import Work from "../components/Work";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import FixedSideBar from "../components/FixedSideBar";

import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <FixedSideBar />
      <Header />
      <LandingSection />
      <AboutMe />
      <Experience />
      <Work />
      <Contact />
    </>
  );
};

export default HomePage;

import React from "react";

import Header from "../components/Header";
import LandingSection from "../components/LandingSection";
import AboutMe from "../components/AboutMe";
import Work from "../components/Work";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import FixedSideBar from "../components/FixedSideBar";

const HomePage = () => {
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

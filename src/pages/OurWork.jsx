import React from "react";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";
import Heading from "../components/OurWork/Heading";
import Projects from "../components/OurWork/Projects";

const OurWork = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Heading />
        <Projects />
        <CollaborationSection />
        <Footer />
      </div>
    </div>
  );
};

export default OurWork;

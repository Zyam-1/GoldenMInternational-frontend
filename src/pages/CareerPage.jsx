import React from "react";
import Careers from "../components/Careers/Careers";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";

const CareerPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Careers />
        <CollaborationSection />
        <Footer />
      </div>
    </div>
  );
};

export default CareerPage;

import React from "react";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";
import Offices from "../components/OurLocation/Offices";

const OurLocation = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Offices />
        <CollaborationSection />
        <Footer />
      </div>
    </div>
  );
};

export default OurLocation;

import react from "react";
import AboutUs from "../components/AboutUsPage/AboutUs";
import ByTheNumbers from "../components/AboutUsPage/ByTheNumbers";
import Commitments from "../components/AboutUsPage/Commitments";
import HowWeShowUp from "../components/AboutUsPage/HowWeShowUp";
import ShowCase from "../components/AboutUsPage/ShowCase";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <AboutUs />
        <ShowCase />
        <Commitments />
        <HowWeShowUp />
        <ByTheNumbers />
        <CollaborationSection />
        <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;

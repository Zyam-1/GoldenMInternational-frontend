import React from "react";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";
import Article from "../components/Newsroom/Article";
import Heading from "../components/Newsroom/Heading";

const NewsRoom = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div style={{ marginTop: "80px" }}>
          <Heading />
          <Article />
          <CollaborationSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default NewsRoom;

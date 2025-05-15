import React from "react";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Hero from "../components/MainPage/Hero";
import Navbar from "../components/MainPage/Navbar";
import OwnersSection from "../components/MainPage/OwnersSection";
import SafetySection from "../components/MainPage/SafetySection";
import WhatWeBuild from "../components/MainPage/WhatWeBuild";
import WhatWeDo2 from "../components/MainPage/WhatWeDo2";
import WhereWeWork from "../components/MainPage/WhereWeWork";
import WhoAreWe from "../components/MainPage/WhoAreWe";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhoAreWe />
      <WhereWeWork />
      <WhatWeDo2 />
      <WhatWeBuild />
      <OwnersSection />
      <SafetySection />
      <CollaborationSection />
      <Footer />
    </div>
  );
};

export default Main;

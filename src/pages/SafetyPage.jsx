import React from "react";
import Hero from "../components/SafetyComp/Hero";
import InnovSection from "../components/SafetyComp/InnovSection";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";
import Commitments from "../components/ServicesComponents/Commitments";
import Showcase from "../components/ServicesComponents/Showcase";
import showcaseImage1 from "../images/leadership1.jpg";
import showcaseImage2 from "../images/leadership2.jpg";
import showcaseImage3 from "../images/market1.jpg";

const SafetyPage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <Hero />
          <InnovSection />
          <Showcase
            title="Leading the Way"
            description="We all contribute to the success of Golden M International’s safety program: the executives who instil a strong safety culture, the superintendent who leads the way, the project coordinator who helps trade partners understand our safety practices, the tradesperson who guides young apprentices, and so many more."
            imageSrc={showcaseImage1}
            imageAlt="Feature image"
            backgroundColor="white" // Light blue background
            textColor="#1a365d" // Dark blue text
            accentColor="#3182ce" // Blue accent
          />
          <Showcase
            title="Safety Stats"
            description="We maintain best in class industry safety with an average of more than 50 million hours worked annually and an overall total recordable incident rate and overall lost-time frequency rate, among the industry's lowest."
            imageSrc={showcaseImage2}
            imageAlt="Feature image"
            backgroundColor="white" // Light blue background
            textColor="#1a365d" // Dark blue text
            accentColor="#3182ce" // Blue accent
          />
          <Showcase
            title="Continuous Improvement"
            description="We recognize that our people are our most valuable asset, and we are dedicated to providing and maintaining a safe and healthy work environment for all. We’re continuously looking for innovative ways to improve our safety practices and to work with our trade partners to embrace a mindset that is unwilling to compromise when it comes to keeping people safe at work."
            imageSrc={showcaseImage3}
            imageAlt="Feature image"
            backgroundColor="white" // Light blue background
            textColor="#1a365d" // Dark blue text
            accentColor="#3182ce" // Blue accent
          />
          <Commitments
            sectionTitle="Safety at Golden M International"
            quote="At Golden M International, safety isn’t just a requirement — it’s our responsibility. From blueprint to build, we protect every hand that shapes our vision."
            personName="Malik Arshad"
            personTitle="CEO, Golden M International"
          />
          <CollaborationSection />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SafetyPage;

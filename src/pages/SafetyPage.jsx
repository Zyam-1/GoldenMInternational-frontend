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
import { translations } from "../translations/translations";
import { useLanguage } from "../contexts/LanguageContext";

const SafetyPage = () => {
  const { language } = useLanguage();
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <Hero />
          <InnovSection />
          <Showcase
            title={translations[language].showcase1Title}
            description={translations[language].showcase1Desc}
            imageSrc={showcaseImage1}
            imageAlt="Feature image"
            backgroundColor="white" // Light blue background
            textColor="#1a365d" // Dark blue text
            accentColor="#3182ce" // Blue accent
          />
          <Showcase
            title={translations[language].showcase2Title}
            description={translations[language].showcase2Desc}
            imageSrc={showcaseImage2}
            imageAlt="Feature image"
            backgroundColor="white" // Light blue background
            textColor="#1a365d" // Dark blue text
            accentColor="#3182ce" // Blue accent
          />
          <Showcase
            title={translations[language].showcase3Title}
            description={translations[language].showcase3Desc}
            imageSrc={showcaseImage3}
            imageAlt="Feature image"
            backgroundColor="white" // Light blue background
            textColor="#1a365d" // Dark blue text
            accentColor="#3182ce" // Blue accent
          />
          <Commitments
            sectionTitle={translations[language].safetySectionTitle}
            quote={translations[language].safetyQuote}
            personName={translations[language].quotePersonName}
            personTitle={translations[language].quotePersonTitle}
          />
          <CollaborationSection />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SafetyPage;

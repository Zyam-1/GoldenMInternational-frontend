import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import Hero from "../components/InnovComponents/Hero";
import InnovSection from "../components/InnovComponents/InnovSection";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";
import Commitments from "../components/ServicesComponents/Commitments";
import Showcase from "../components/ServicesComponents/Showcase";
import showcaseImage1 from "../images/leadership1.jpg";
import showcaseImage2 from "../images/leadership2.jpg";
import showcaseImage3 from "../images/market1.jpg";

const InnovPage = () => {
  const { language } = useLanguage();

  return (
    <div>
      <div>
        <Navbar />
        <div>
          <Hero />
          <InnovSection />
          <Showcase
            title={translations[language].buildingsTitle}
            description={translations[language].buildingsDesc}
            imageSrc={showcaseImage1}
            imageAlt={translations[language].featureImage}
            backgroundColor="white"
            textColor="#1a365d"
            accentColor="#3182ce"
          />
          <Showcase
            title={translations[language].civilTitle}
            description={translations[language].civilDesc}
            imageSrc={showcaseImage2}
            imageAlt={translations[language].featureImage}
            backgroundColor="white"
            textColor="#1a365d"
            accentColor="#3182ce"
          />
          <Showcase
            title={translations[language].industrialTitle}
            description={translations[language].industrialDesc}
            imageSrc={showcaseImage3}
            imageAlt={translations[language].featureImage}
            backgroundColor="white"
            textColor="#1a365d"
            accentColor="#3182ce"
          />
          <Commitments
            sectionTitle={translations[language].innovationsTitle}
            quote={translations[language].innovationsQuote}
            personName={translations[language].ceoName}
            personTitle={translations[language].ceoTitle}
          />
          <CollaborationSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default InnovPage;

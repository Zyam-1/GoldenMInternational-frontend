import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";
// import Slider from "../components/ServicesComponents/Slider";
import SmartConsHead from "../components/ServicesComponents/SmartConsHead";
import Slider from "../components/ServicesComponents/Slider";
import headImage from "../images/emergency1.jpg";
import Commitments from "../components/ServicesComponents/Commitments";

// import showcaseImage2 from "../images/smartCons6.jpg";

const Emergency = () => {
  const { language } = useLanguage();

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <SmartConsHead
          serviceCategory={translations[language].emergencyResponseCategory}
          serviceTitle={translations[language].emergencyResponseTitle}
          serviceDescription={translations[language].emergencyResponseDesc}
          overviewTitle={translations[language].emergencyOverviewTitle}
          innovationTitle={translations[language].emergencyInnovationTitle}
          innovationText={translations[language].emergencyInnovationText}
          innovationLabel={translations[language].emergencyInnovationLabel}
          imageSrc={headImage}
          imageAlt={translations[language].serviceIllustration}
        />
        <Commitments
          sectionTitle={translations[language].emergencyMissionTitle}
          quote={translations[language].emergencyMissionQuote}
          personName={translations[language].emergencyMissionName}
          personTitle={translations[language].emergencyMissionRole}
        />
        <CollaborationSection />
        <Footer />
      </div>
    </div>
  );
};

export default Emergency;

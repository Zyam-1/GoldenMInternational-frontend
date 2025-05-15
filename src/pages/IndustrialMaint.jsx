import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";
// import Slider from "../components/ServicesComponents/Slider";
import SmartConsHead from "../components/ServicesComponents/SmartConsHead";
import Slider from "../components/ServicesComponents/Slider";
import Showcase from "../components/ServicesComponents/Showcase";
import headImage from "../images/people1.jpg";
import sliderImage1 from "../images/people2.jpg";
import sliderImage2 from "../images/people3.jpg";
import sliderImage3 from "../images/people4.jpg";

import showcaseImage1 from "../images/people5.jpg";
import showcaseImage2 from "../images/people6.jpg";

const IndustrialMaint = () => {
  const { language } = useLanguage();

  const basicSlides = [
    {
      title: translations[language].heatExchangersTitle,
      subtitle: translations[language].heatExchangersSubtitle,
      description: translations[language].heatExchangersDesc,
      ctaText: translations[language].viewSelfPerform,
      ctaLink: "/services/smart-construction",
      image: sliderImage2,
      imageAlt: translations[language].teamCollaborating,
    },
    {
      title: translations[language].ventilationTitle,
      subtitle: translations[language].heatExchangersSubtitle,
      description: translations[language].ventilationDesc,
      ctaText: translations[language].learnMoreCta,
      ctaLink: "/services/smart-construction",
      image: sliderImage1,
      imageAlt: translations[language].teamWorking,
    },
    {
      title: translations[language].machiningTitle,
      subtitle: translations[language].heatExchangersSubtitle,
      description: translations[language].machiningDesc,
      ctaText: translations[language].exploreMethods,
      ctaLink: "/services/smart-construction",
      image: sliderImage3,
      imageAlt: translations[language].innovativeTechniques,
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <SmartConsHead
          serviceCategory={translations[language].service}
          serviceTitle={translations[language].maintenance}
          serviceDescription={translations[language].maintenanceDesc}
          overviewTitle={translations[language].serviceOverview}
          innovationTitle={translations[language].innovationTitle}
          innovationText={translations[language].innovationText}
          innovationLabel={translations[language].innovationLabel}
          imageSrc={headImage}
          imageAlt={translations[language].serviceIllustration}
        />

        <Showcase
          title={translations[language].showcaseTitle1}
          description={translations[language].showcaseDesc1}
          imageSrc={showcaseImage1}
          imageAlt={translations[language].featureImage}
          backgroundColor="white" // Light blue background
          textColor="#1a365d" // Dark blue text
          accentColor="#3182ce" // Blue accent
        />
        <Slider
          slides={basicSlides}
          autoplaySpeed={5000}
          showDots={true}
          showArrows={true}
          translations={translations}
          language={language}
        />
        <CollaborationSection />
        <Footer />
      </div>
    </div>
  );
};

export default IndustrialMaint;

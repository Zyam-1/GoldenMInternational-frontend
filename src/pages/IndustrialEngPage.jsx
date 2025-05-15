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
import headImage from "../images/industry1.jpg";
import sliderImage1 from "../images/smartCons2.jpg";
import sliderImage2 from "../images/industry1.jpg";
import sliderImage3 from "../images/smartCons4.jpg";
import sliderImage4 from "../images/sustain1.jpg";

import showcaseImage1 from "../images/smartCons5.jpg";
import showcaseImage2 from "../images/smartCons6.jpg";

const IndustrialEngPage = () => {
  const { language } = useLanguage();

  const basicSlides = [
    {
      title: translations[language].heviLiftTitle,
      subtitle: translations[language].heviLiftSubtitle,
      description: translations[language].heviLiftDesc,
      ctaText: translations[language].viewSelfPerform,
      ctaLink: "/services/smart-construction",
      image: sliderImage2,
      imageAlt: translations[language].teamCollaborating,
    },
    {
      title: translations[language].liftFrameTitle,
      subtitle: translations[language].liftFrameSubtitle,
      description: translations[language].liftFrameDesc,
      ctaText: translations[language].learnMoreCta,
      ctaLink: "/services/smart-construction",
      image: sliderImage1,
      imageAlt: translations[language].teamWorking,
    },
    {
      title: translations[language].researchTitle,
      subtitle: translations[language].researchSubtitle,
      description: translations[language].researchDesc,
      ctaText: translations[language].exploreMethods,
      ctaLink: "/services/smart-construction",
      image: sliderImage3,
      imageAlt: translations[language].innovativeTechniques,
    },
    {
      title: translations[language].hydrotestTitle,
      subtitle: translations[language].hydrotestSubtitle,
      description: translations[language].hydrotestDesc,
      ctaText: translations[language].exploreMethods,
      ctaLink: "/services/smart-construction",
      image: sliderImage4,
      imageAlt: translations[language].innovativeTechniques,
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <SmartConsHead
          serviceCategory={translations[language].industrialEngService}
          serviceTitle={translations[language].industrialEngTitle}
          serviceDescription={translations[language].industrialEngDesc}
          overviewTitle={translations[language].serviceOverview}
          innovationTitle={translations[language].industrialEngInnovTitle}
          innovationText={translations[language].industrialEngInnovText}
          innovationLabel={translations[language].industrialEngInnovLabel}
          imageSrc={headImage}
          imageAlt={translations[language].serviceIllustration}
        />

        <Showcase
          title={translations[language].preconstructionTitle}
          description={translations[language].preconstructionDesc}
          imageSrc={showcaseImage1}
          imageAlt={translations[language].featureImage}
          backgroundColor="white"
          textColor="#1a365d"
          accentColor="#3182ce"
        />
        <Showcase
          title={translations[language].awpTitle}
          description={translations[language].awpDesc}
          imageSrc={showcaseImage2}
          imageAlt={translations[language].featureImage}
          backgroundColor="white"
          textColor="#1a365d"
          accentColor="#3182ce"
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

export default IndustrialEngPage;

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
import Commitments from "../components/ServicesComponents/Commitments";
import headImage from "../images/industry1.jpg";
import sliderImage1 from "../images/smartCons2.jpg";
import sliderImage2 from "../images/industry1.jpg";
import sliderImage3 from "../images/smartCons4.jpg";
import sliderImage4 from "../images/sustain1.jpg";

import showcaseImage1 from "../images/smartCons5.jpg";
import showcaseImage2 from "../images/smartCons6.jpg";

const IndustrialExPage = () => {
  const { language } = useLanguage();

  const basicSlides = [
    {
      title: translations[language].earlyEngagementTitle,
      subtitle: translations[language].earlyEngagementSubtitle,
      description: translations[language].earlyEngagementDesc,
      ctaText: translations[language].viewSelfPerform,
      ctaLink: "/services/smart-construction",
      image: sliderImage2,
      imageAlt: translations[language].teamCollaborating,
    },
    {
      title: translations[language].fabricationTitle,
      subtitle: translations[language].fabricationSubtitle,
      description: translations[language].fabricationDesc,
      ctaText: translations[language].learnMoreCta,
      ctaLink: "/services/smart-construction",
      image: sliderImage1,
      imageAlt: translations[language].teamWorking,
    },
    {
      title: translations[language].projectManagementTitle,
      subtitle: translations[language].projectManagementSubtitle,
      description: translations[language].projectManagementDesc,
      ctaText: translations[language].exploreMethods,
      ctaLink: "/services/smart-construction",
      image: sliderImage3,
      imageAlt: translations[language].innovativeTechniques,
    },
    {
      title: translations[language].commissioningTitle,
      subtitle: translations[language].commissioningSubtitle,
      description: translations[language].commissioningDesc,
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
          serviceCategory={translations[language].industrialExService}
          serviceTitle={translations[language].industrialExTitle}
          serviceDescription={translations[language].industrialExDesc}
          overviewTitle={translations[language].serviceOverview}
          innovationTitle={translations[language].industrialExInnovTitle}
          innovationText={translations[language].industrialExInnovText}
          innovationLabel={translations[language].industrialExInnovLabel}
          imageSrc={headImage}
          imageAlt={translations[language].serviceIllustration}
        />

        <Showcase
          title={translations[language].collaborativeTitle}
          description={translations[language].collaborativeDesc}
          imageSrc={showcaseImage1}
          imageAlt={translations[language].featureImage}
          backgroundColor="white"
          textColor="#1a365d"
          accentColor="#3182ce"
        />
        <Showcase
          title={translations[language].fullServiceTitle}
          description={translations[language].fullServiceDesc}
          imageSrc={showcaseImage2}
          imageAlt={translations[language].featureImage}
          backgroundColor="white"
          textColor="#1a365d"
          accentColor="#3182ce"
        />
        <Showcase
          title={translations[language].workfaceTitle}
          description={translations[language].workfaceDesc}
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
        <Commitments
          sectionTitle={translations[language].ourMission}
          quote={translations[language].missionQuote}
          personName={translations[language].ceoName}
          personTitle={translations[language].ceoTitle}
        />
        <CollaborationSection />
        <Footer />
      </div>
    </div>
  );
};

export default IndustrialExPage;

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

const IndustrialPeoplePage = () => {
  const { language } = useLanguage();

  const basicSlides = [
    {
      title: translations[language].directHireTitle,
      subtitle: translations[language].directHireSubtitle,
      description: translations[language].directHireDesc,
      ctaText: translations[language].viewSelfPerform,
      ctaLink: "/services/smart-construction",
      image: sliderImage2,
      imageAlt: translations[language].teamCollaborating,
    },
    {
      title: translations[language].workforceTitle,
      subtitle: translations[language].workforceSubtitle,
      description: translations[language].workforceDesc,
      ctaText: translations[language].learnMoreCta,
      ctaLink: "/services/smart-construction",
      image: sliderImage1,
      imageAlt: translations[language].teamWorking,
    },
    {
      title: translations[language].trainingTitle,
      subtitle: translations[language].trainingSubtitle,
      description: translations[language].trainingDesc,
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
          serviceCategory={translations[language].industrialPeopleService}
          serviceTitle={translations[language].industrialPeopleTitle}
          serviceDescription={translations[language].industrialPeopleDesc}
          overviewTitle={translations[language].serviceOverview}
          innovationTitle={translations[language].industrialPeopleInnovTitle}
          innovationText={translations[language].industrialPeopleInnovText}
          innovationLabel={translations[language].industrialPeopleInnovLabel}
          imageSrc={headImage}
          imageAlt={translations[language].serviceIllustration}
        />

        <Showcase
          title={translations[language].ownershipTitle}
          description={translations[language].ownershipDesc}
          imageSrc={showcaseImage1}
          imageAlt={translations[language].featureImage}
          backgroundColor="white"
          textColor="#1a365d"
          accentColor="#3182ce"
        />
        <Showcase
          title={translations[language].mentoringTitle}
          description={translations[language].mentoringDesc}
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

export default IndustrialPeoplePage;

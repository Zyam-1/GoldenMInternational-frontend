import React from "react";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";
// import Slider from "../components/ServicesComponents/Slider";
import SmartConsHead from "../components/ServicesComponents/SmartConsHead";
import Slider from "../components/ServicesComponents/Slider";
import Showcase from "../components/ServicesComponents/Showcase";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import headImage from "../images/smartCons1.jpg";
import sliderImage1 from "../images/smartCons2.jpg";
import sliderImage2 from "../images/smartCons3.jpg";
import sliderImage3 from "../images/smartCons4.jpg";

import showcaseImage1 from "../images/smartCons5.jpg";
import showcaseImage2 from "../images/smartCons6.jpg";

const DeliveryPage = () => {
  const { language } = useLanguage();

  const basicSlides = [
    {
      title: translations[language].cmTitle,
      subtitle: translations[language].cmSubtitle,
      description: translations[language].cmDescription,
      ctaText: translations[language].viewSelfPerform,
      ctaLink: "/services/smart-construction",
      image: sliderImage2,
      imageAlt: translations[language].teamCollaborating,
    },
    {
      title: translations[language].dbTitle,
      subtitle: translations[language].cmSubtitle,
      description: translations[language].dbDescription,
      ctaText: translations[language].learnMoreCta,
      ctaLink: "/services/smart-construction",
      image: sliderImage1,
      imageAlt: translations[language].teamWorking,
    },
    {
      title: translations[language].afTitle,
      subtitle: translations[language].cmSubtitle,
      description: translations[language].afDescription,
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
          serviceTitle={translations[language].projectDeliveryModels}
          serviceDescription={translations[language].deliveryModelDescription}
          overviewTitle={translations[language].serviceOverview}
          innovationTitle={translations[language].innovationTitle}
          innovationText={translations[language].innovationText}
          innovationLabel={translations[language].innovationLabel}
          imageSrc={headImage}
          imageAlt={translations[language].serviceIllustration}
        />
        <Slider
          slides={basicSlides}
          autoplaySpeed={5000}
          showDots={true}
          showArrows={true}
          translations={translations}
          language={language}
        />
        <Showcase
          title={translations[language].epcTitle}
          description={translations[language].epcDescription}
          imageSrc={showcaseImage1}
          imageAlt={translations[language].featureImage}
          backgroundColor="white"
          textColor="#1a365d"
          accentColor="#3182ce"
        />
        <Showcase
          title={translations[language].ipdTitle}
          description={translations[language].ipdDescription}
          imageSrc={showcaseImage2}
          imageAlt={translations[language].featureImage}
          backgroundColor="white"
          textColor="#1a365d"
          accentColor="#3182ce"
        />
        <CollaborationSection />
        <Footer />
      </div>
    </div>
  );
};

export default DeliveryPage;

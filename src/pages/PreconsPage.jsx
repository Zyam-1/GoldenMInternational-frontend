import React from "react";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";
// import Slider from "../components/ServicesComponents/Slider";
import SmartConsHead from "../components/ServicesComponents/SmartConsHead";
import Slider from "../components/ServicesComponents/Slider";
import Showcase from "../components/ServicesComponents/Showcase";
import headImage from "../images/preCons1.jpg";
import sliderImage1 from "../images/leadership2.jpg";
import sliderImage2 from "../images/innov2.jpg";
import sliderImage3 from "../images/cons1.jpg";
import sliderImage4 from "../images/WhatWeBuild1.png";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

import showcaseImage1 from "../images/smartCons5.jpg";
import showcaseImage2 from "../images/smartCons6.jpg";

const PreconsPage = () => {
  const { language } = useLanguage();

  const basicSlides = [
    {
      title: translations[language]?.targetValueTitle,
      subtitle: translations[language]?.targetValueSubtitle,
      description: translations[language]?.targetValueDesc,
      ctaText: translations[language]?.viewSelfPerform,
      ctaLink: "/services/smart-construction",
      image: sliderImage2,
      imageAlt: translations[language]?.teamCollaborating,
    },
    {
      title: translations[language]?.buildingSystemsOptTitle,
      subtitle: translations[language]?.buildingSystemsOptSubtitle,
      description: translations[language]?.buildingSystemsOptDesc,
      ctaText: translations[language]?.learnMoreCta,
      ctaLink: "/services/smart-construction",
      image: sliderImage1,
      imageAlt: translations[language]?.teamWorking,
    },
    {
      title: translations[language]?.envelopeOptTitle,
      subtitle: translations[language]?.envelopeOptSubtitle,
      description: translations[language]?.envelopeOptDesc,
      ctaText: translations[language]?.exploreMethods,
      ctaLink: "/services/smart-construction",
      image: sliderImage3,
      imageAlt: translations[language]?.innovativeTechniques,
    },
    {
      title: translations[language]?.verticalTransportTitle,
      subtitle: translations[language]?.verticalTransportSubtitle,
      description: translations[language]?.verticalTransportDesc,
      ctaText: translations[language]?.exploreMethods,
      ctaLink: "/services/smart-construction",
      image: sliderImage4,
      imageAlt: translations[language]?.innovativeTechniques,
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <SmartConsHead
          serviceCategory={translations[language]?.preconsServiceCategory}
          serviceTitle={translations[language]?.preconsServiceTitle}
          serviceDescription={translations[language]?.preconsServiceDesc}
          overviewTitle={translations[language]?.preconsOverviewTitle}
          innovationTitle={translations[language]?.preconsInnovationTitle}
          innovationText={translations[language]?.preconsInnovationText}
          innovationLabel={translations[language]?.preconsInnovationLabel}
          imageSrc={headImage}
          imageAlt={translations[language]?.serviceIllustration}
        />
        <Slider
          slides={basicSlides}
          autoplaySpeed={5000}
          showDots={true}
          showArrows={true}
        />

        <CollaborationSection />
        <Footer />
      </div>
    </div>
  );
};

export default PreconsPage;

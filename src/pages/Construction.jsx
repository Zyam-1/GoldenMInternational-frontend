import React from "react";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";
import SmartConsHead from "../components/ServicesComponents/SmartConsHead";
import Slider from "../components/ServicesComponents/Slider";
import headImage from "../images/cons1.jpg";
import sliderImage1 from "../images/market1.jpg";
import sliderImage2 from "../images/leadership2.jpg";
import sliderImage3 from "../images/WhatWeBuild2.png";
import sliderImage4 from "../images/smartCons6.jpg";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
// import showcaseImage2 from "../images/smartCons6.jpg";

const Construction = () => {
  const { language } = useLanguage();

  const basicSlides = [
    {
      title: translations[language]?.pushingIndustryTitle,
      subtitle: translations[language]?.servicesSuccessSubtitle,
      description: translations[language]?.pushingIndustryDesc,
      ctaText: translations[language]?.viewSelfPerform,
      ctaLink: "/services/prefabrication-and-modular-construction",
      image: sliderImage1,
      imageAlt: translations[language]?.teamCollaborating,
    },
    {
      title: translations[language]?.qualityAssuranceTitle,
      subtitle: translations[language]?.servicesSuccessSubtitle,
      description: translations[language]?.qualityAssuranceDesc,
      ctaText: translations[language]?.learnMoreCta,
      ctaLink: "/services/prefabrication-and-modular-construction",
      image: sliderImage2,
      imageAlt: translations[language]?.teamWorking,
    },
    {
      title: translations[language]?.leanConstructionTitle,
      subtitle: translations[language]?.servicesSuccessSubtitle,
      description: translations[language]?.leanConstructionDesc,
      ctaText: translations[language]?.exploreMethods,
      ctaLink: "/services/prefabrication-and-modular-construction",
      image: sliderImage3,
      imageAlt: translations[language]?.innovativeTechniques,
    },
    {
      title: translations[language]?.projectTrendsTitle,
      subtitle: translations[language]?.servicesSuccessSubtitle,
      description: translations[language]?.projectTrendsDesc,
      ctaText: translations[language]?.exploreMethods,
      ctaLink: "/services/prefabrication-and-modular-construction",
      image: sliderImage4,
      imageAlt: translations[language]?.innovativeTechniques,
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <SmartConsHead
          serviceCategory={translations[language]?.constructionServiceCategory}
          serviceTitle={translations[language]?.constructionServiceTitle}
          serviceDescription={translations[language]?.constructionServiceDesc}
          overviewTitle={translations[language]?.serviceOverview}
          innovationTitle={translations[language]?.constructionInnovationTitle}
          innovationText={translations[language]?.constructionInnovationText}
          innovationLabel={translations[language]?.sustainableConstructionServices}
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

export default Construction;

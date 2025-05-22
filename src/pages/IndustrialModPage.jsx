import React from "react";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";
// import Slider from "../components/ServicesComponents/Slider";
import SmartConsHead from "../components/ServicesComponents/SmartConsHead";
import Slider from "../components/ServicesComponents/Slider";
// import Showcase from "../components/ServicesComponents/Showcase";
import headImage from "../images/culture2.jpg";
import sliderImage1 from "../images/innov2.jpg";
import sliderImage2 from "../images/industry1.jpg";
import sliderImage3 from "../images/showcase4.jpeg";
import sliderImage4 from "../images/showcase5.jpeg";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const IndustrialModPage = () => {
  const { language } = useLanguage();

  const basicSlides = [
    {
      title: translations[language].hassleTitle,
      subtitle: translations[language].hassleSubtitle,
      description: translations[language].hassleDesc,
      ctaText: "VIEW OUR SELF-PERFORM SERVICES",
      ctaLink: "/services/smart-construction",
      image: sliderImage1,
      imageAlt:
        "Team collaborating in a meeting room with building designs on screens",
    },
    {
      title: translations[language].scheduleTitle,
      subtitle: translations[language].scheduleSubtitle,
      description: translations[language].scheduleDesc,
      ctaText: "LEARN MORE",
      ctaLink: "/services/smart-construction",
      image: sliderImage2,
      imageAlt: "Team working on target value design process",
    },
    {
      title: translations[language].sectorsTitle,
      subtitle: translations[language].scheduleSubtitle,
      description: translations[language].scheduleDesc,
      ctaText: "EXPLORE OUR METHODS",
      ctaLink: "/services/smart-construction",
      image: sliderImage3,
      imageAlt: "Innovative construction techniques being implemented on site",
    },
    {
      title: translations[language].supplyChainTitle,
      subtitle: translations[language].supplyChainSubtitle,
      description: translations[language].supplyChainDesc,
      ctaText: "EXPLORE OUR METHODS",
      ctaLink: "/services/smart-construction",
      image: sliderImage4,
      imageAlt: "Innovative construction techniques being implemented on site",
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <SmartConsHead
          serviceCategory={translations[language].industrialModService}
          serviceTitle={translations[language].industrialModTitle}
          serviceDescription={translations[language].industrialModDesc}
          overviewTitle={translations[language].serviceOverview}
          innovationTitle={translations[language].industrialModInnovTitle}
          innovationText={translations[language].industrialModInnovText}
          innovationLabel={translations[language].industrialModInnovLabel}
          imageSrc={headImage}
          imageAlt={translations[language].serviceIllustration}
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

export default IndustrialModPage;

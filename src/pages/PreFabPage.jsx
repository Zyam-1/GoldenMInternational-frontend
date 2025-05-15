import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";
// import Slider from "../components/ServicesComponents/Slider";
import SmartConsHead from "../components/ServicesComponents/SmartConsHead";
import Slider from "../components/ServicesComponents/Slider";
import headImage from "../images/prefabCons1.jpg";
import sliderImage1 from "../images/prefabCons2.jpg";
import sliderImage2 from "../images/prefabCons3.jpg";
import sliderImage3 from "../images/prefabCon4.jpg";

import sliderImage4 from "../images/prefabCons5.jpg";
// import showcaseImage2 from "../images/smartCons6.jpg";

const PreFabPage = () => {
  const { language } = useLanguage();

  const slides = [
    {
      title: translations[language].modularComponentsTitle ,
      subtitle: translations[language].ourApproach,
      description: translations[language].modularComponentsDesc,
      ctaText: translations[language].viewSelfPerform,
      ctaLink: "/services/prefabrication-and-modular-construction",
      image: sliderImage1,
      imageAlt: translations[language].teamCollaborating 
    },
    {
      title: translations[language].volumetricApproachTitle,
      subtitle: translations[language].ourApproach,
      description: translations[language].volumetricApproachDesc,
      ctaText: translations[language].learnMoreCta,
      ctaLink: "/services/prefabrication-and-modular-construction",
      image: sliderImage2,
      imageAlt: translations[language].teamWorking
    },
    {
      title: translations[language].dfmaTitle ,
      subtitle: translations[language].ourApproach,
      description: translations[language].dfmaDesc,
      ctaText: translations[language].exploreMethods ,
      ctaLink: "/services/prefabrication-and-modular-construction",
      image: sliderImage3,
      imageAlt: translations[language].innovativeTechniques,
    },
    {
      title: translations[language].lessonsLearnedTitle,
      subtitle: translations[language].ourApproach,
      description: translations[language].lessonsLearnedDesc,
      ctaText: translations[language].exploreMethods ,
      ctaLink: "/services/prefabrication-and-modular-construction",
      image: sliderImage4,
      imageAlt: translations[language].innovativeTechniques
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <SmartConsHead
          serviceCategory={translations[language].buildingService }
          serviceTitle={translations[language].prefabModular }
          serviceDescription={translations[language].prefabModularDesc}
          overviewTitle={translations[language].serviceOverview}
          innovationTitle={translations[language].prefabInnovationTitle }
          innovationText={translations[language].prefabInnovationText}
          innovationLabel={translations[language].prefabInnovationLabel }
          imageSrc={headImage}
          imageAlt={translations[language].serviceIllustration}
        />
        <Slider
          slides={slides}
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

export default PreFabPage;

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

const IndustrialConSer = () => {
  const { language } = useLanguage();

  const slides = [
    {
      title: translations[language].softwareStackTitle,
      subtitle: translations[language].constructionServicesByConstructors ,
      description: translations[language].softwareStackDesc,
      ctaText: translations[language].viewSelfPerform ,
      ctaLink: "/services/smart-construction",
      image: sliderImage2,
      imageAlt: translations[language].teamCollaborating ,
    },
    {
      title: translations[language].modularApproachTitle,
      subtitle: translations[language].constructionServicesByConstructors,
      description: translations[language].modularApproachDesc,
      ctaText: translations[language].learnMoreCta ,
      ctaLink: "/services/smart-construction",
      image: sliderImage1,
      imageAlt: translations[language].teamWorking,
    },
    {
      title: translations[language].costScheduleTitle ,
      subtitle: translations[language].constructionServicesByConstructors,
      description: translations[language].costScheduleDesc,
      ctaText: translations[language].exploreMethods ,
      ctaLink: "/services/smart-construction",
      image: sliderImage3,
      imageAlt: translations[language].innovativeTechniques ,
    },
    {
      title: translations[language].stackCoreTitle,
      subtitle: translations[language].constructionServicesByConstructors ,
      description: translations[language].stackCoreDesc,
      ctaText: translations[language].exploreMethods,
      ctaLink: "/services/smart-construction",
      image: sliderImage4,
      imageAlt: translations[language].innovativeTechniques ,
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <SmartConsHead
          serviceCategory={translations[language].industrialService}
          serviceTitle={translations[language].constructionServices}
          serviceDescription={translations[language].industrialConstructionDesc
          }
          overviewTitle={translations[language].serviceOverview}
          innovationTitle={translations[language].industrialInnovationTitle }
          innovationText={translations[language].industrialInnovationText
           }
          innovationLabel={translations[language].industrialInnovationLabel
            }
          imageSrc={headImage}
          imageAlt={translations[language].serviceIllustration }
        />

        <Showcase
          title={translations[language].heviLiftTitle }
          description={translations[language].heviLiftDesc }
          imageSrc={showcaseImage1}
          imageAlt={translations[language].featureImage}
          backgroundColor="white"
          textColor="#1a365d"
          accentColor="#3182ce"
        />
        <Showcase
          title={translations[language].lifecycleTitle}
          description={translations[language].lifecycleDesc }
          imageSrc={showcaseImage2}
          imageAlt={translations[language].featureImage}
          backgroundColor="white"
          textColor="#1a365d"
          accentColor="#3182ce"
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

export default IndustrialConSer;

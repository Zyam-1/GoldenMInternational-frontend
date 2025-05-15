import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";
import SmartConsHead from "../components/ServicesComponents/SmartConsHead";
import Slider from "../components/ServicesComponents/Slider";
import headImage from "../images/sustain1.jpg";
import sliderImage1 from "../images/smartCons4.jpg";
import sliderImage2 from "../images/sustain1.jpg";
import Commitments from "../components/ServicesComponents/Commitments";

const SelfPerform = () => {
  const { language } = useLanguage();

  const basicSlides = [
    {
      title: translations[language].selfPerformSuccessTitle ,
      subtitle: translations[language].ourApproach,
      description: translations[language].selfPerformSuccessDesc ,
      ctaText: translations[language].viewSelfPerformServices ,
      ctaLink: "/services/prefabrication-and-modular-construction",
      image: sliderImage1,
      imageAlt: translations[language].teamCollaborating 
    },
    {
      title: translations[language].selfPerformAdvantagesTitle,
      subtitle: translations[language].ourApproach || "OUR APPROACH",
      description: translations[language].selfPerformAdvantagesDesc,
       
      ctaText: translations[language].learnMore ,
      ctaLink: "/services/prefabrication-and-modular-construction",
      image: sliderImage2,
      imageAlt: translations[language].teamWorking
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <SmartConsHead
          serviceCategory={translations[language].service}
          serviceTitle={translations[language].selfPerformCapabilities }
          serviceDescription={translations[language].selfPerformDescription
            }
          overviewTitle={translations[language].serviceOverview}
          innovationTitle={translations[language].selfPerformServicesTitle }
          innovationText={translations[language].selfPerformServicesDesc}
          innovationLabel={translations[language].sustainableConstructionServices }
          imageSrc={headImage}
          imageAlt={translations[language].serviceIllustration }
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
          sectionTitle={translations[language].selfPerformCapabilities }
          quote={translations[language].selfPerformQuote }
          personName={translations[language].ceoName}
          personTitle={translations[language].ceoTitle }
        />
        <CollaborationSection />
        <Footer />
      </div>
    </div>
  );
};

export default SelfPerform;

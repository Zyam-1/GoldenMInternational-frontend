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
import headImage from "../images/SustainSer1.jpg";
import sliderImage1 from "../images/SustainSer2.jpg";
import sliderImage2 from "../images/SustainSer3.jpg";
import sliderImage3 from "../images/SustainSer4.jpg";
import sliderImage4 from "../images/SustainSer5.jpg";
// import showcaseImage2 from "../images/smartCons6.jpg";

const basicSlides = [
  {
    title: "Comprehensive Capabilities",
    subtitle: "Our Approach",
    description:
      "We work with clients to develop cost-effective strategies to meet sustainable building targets. Our rating system expertise includes LEED, WELL, Living Building Challenge, Envision, Passive House, Fitwel and others.Striking the right balance between upfront sustainability investments and life-cycle cost savings can be tricky. In continual collaboration with the design team and client, we identify the long-term cost benefits of sustainable practices, while meeting project targets within budget.",
    ctaText: "VIEW OUR SELF-PERFORM SERVICES",
    ctaLink: "/services/prefabrication-and-modular-construction",
    image: sliderImage1,
    imageAlt:
      "Team collaborating in a meeting room with building designs on screens",
  },
  {
    title: "Optimizing Performance",
    subtitle: "Our Approach",
    description:
      "Our sustainability experts contribute to the design and preconstruction process to ensure key design measures result in reduced operating costs while improving the overall sustainability of a project. Optimizing a building for energy efficiency requires thoughtful input from the entire project team. Our experts bring a deep understanding of building envelope performance, HVAC efficiency and how best to implement practical and tested solutions that will result in savings to the building owner.",
    ctaText: "LEARN MORE",
    ctaLink: "/services/prefabrication-and-modular-construction",
    image: sliderImage2,
    imageAlt: "Team working on target value design process",
  },
  {
    title: "Reducing Environmental Impacts",
    subtitle: "Our Approach",
    description:
      "We work with clients to incorporate renewable energy and passive systems into their projects to help achieve zero net-energy consumption. These systems include on-site solar, energy storage, battery walls, geo-exchange, geothermal heating and cooling systems and cogeneration and district energy systems. Incorporation of passive design elements and sourcing local materials helps reduce carbon footprint during construction and throughout the operational life span of the structure.",
    ctaText: "EXPLORE OUR METHODS",
    ctaLink: "/services/prefabrication-and-modular-construction",
    image: sliderImage3,
    imageAlt: "Innovative construction techniques being implemented on site",
  },
  {
    title: "Cost-Effective Approach",
    subtitle: "Our Approach",
    description:
      "We develop innovative approaches to effectively manage the cost implications and logistical challenges that come with procuring, installing and commissioning green materials and systems. Collaboration with the client and design teams is key to developing cost-effective solutions that meet proforma requirements and operational emissions, energy consumption and embodied carbon targets.",
    ctaText: "EXPLORE OUR METHODS",
    ctaLink: "/services/prefabrication-and-modular-construction",
    image: sliderImage4,
    imageAlt: "Innovative construction techniques being implemented on site",
  },
];

const SustainSer = () => {
  const { language } = useLanguage();

  const slides = [
    {
      title: translations[language].comprehensiveCapabilitiesTitle || "Comprehensive Capabilities",
      subtitle: translations[language].ourApproach || "Our Approach",
      description: translations[language].comprehensiveCapabilitiesDesc || 
        "We work with clients to develop cost-effective strategies to meet sustainable building targets. Our rating system expertise includes LEED, WELL, Living Building Challenge, Envision, Passive House, Fitwel and others.Striking the right balance between upfront sustainability investments and life-cycle cost savings can be tricky. In continual collaboration with the design team and client, we identify the long-term cost benefits of sustainable practices, while meeting project targets within budget.",
      ctaText: translations[language].viewSelfPerform || "VIEW OUR SELF-PERFORM SERVICES",
      ctaLink: "/services/prefabrication-and-modular-construction",
      image: sliderImage1,
      imageAlt: translations[language].teamCollaborating || "Team collaborating in a meeting room with building designs on screens",
    },
    {
      title: translations[language].optimizingPerformanceTitle || "Optimizing Performance",
      subtitle: translations[language].ourApproach || "Our Approach",
      description: translations[language].optimizingPerformanceDesc || 
        "Our sustainability experts contribute to the design and preconstruction process to ensure key design measures result in reduced operating costs while improving the overall sustainability of a project. Optimizing a building for energy efficiency requires thoughtful input from the entire project team. Our experts bring a deep understanding of building envelope performance, HVAC efficiency and how best to implement practical and tested solutions that will result in savings to the building owner.",
      ctaText: translations[language].learnMoreCta || "LEARN MORE",
      ctaLink: "/services/prefabrication-and-modular-construction",
      image: sliderImage2,
      imageAlt: translations[language].teamWorking || "Team working on target value design process",
    },
    {
      title: translations[language].reducingImpactsTitle || "Reducing Environmental Impacts",
      subtitle: translations[language].ourApproach || "Our Approach",
      description: translations[language].reducingImpactsDesc || 
        "We work with clients to incorporate renewable energy and passive systems into their projects to help achieve zero net-energy consumption. These systems include on-site solar, energy storage, battery walls, geo-exchange, geothermal heating and cooling systems and cogeneration and district energy systems. Incorporation of passive design elements and sourcing local materials helps reduce carbon footprint during construction and throughout the operational life span of the structure.",
      ctaText: translations[language].exploreMethods || "EXPLORE OUR METHODS",
      ctaLink: "/services/prefabrication-and-modular-construction",
      image: sliderImage3,
      imageAlt: translations[language].innovativeTechniques || "Innovative construction techniques being implemented on site",
    },
    {
      title: translations[language].costEffectiveTitle || "Cost-Effective Approach",
      subtitle: translations[language].ourApproach || "Our Approach",
      description: translations[language].costEffectiveDesc || 
        "We develop innovative approaches to effectively manage the cost implications and logistical challenges that come with procuring, installing and commissioning green materials and systems. Collaboration with the client and design teams is key to developing cost-effective solutions that meet proforma requirements and operational emissions, energy consumption and embodied carbon targets.",
      ctaText: translations[language].exploreMethods || "EXPLORE OUR METHODS",
      ctaLink: "/services/prefabrication-and-modular-construction",
      image: sliderImage4,
      imageAlt: translations[language].innovativeTechniques || "Innovative construction techniques being implemented on site",
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <SmartConsHead
          serviceCategory={translations[language].service || "SERVICE"}
          serviceTitle={translations[language].sustainableConstruction || "Sustainable Construction Services"}
          serviceDescription={translations[language].sustainableConstructionDesc || 
            "Our focus on building for a sustainable world is a philosophy and approach that goes far beyond a single project: it is an integrated operational framework with sustainability as a core value."}
          overviewTitle={translations[language].serviceOverview || "SERVICE OVERVIEW"}
          innovationTitle={translations[language].sustainableInnovationTitle || 
            "Driving transformational change in the construction industry through leading by example."}
          innovationText={translations[language].sustainableInnovationText || 
            "We deliver cost-effective solutions that add real business value. Our sustainability professionals work with owners and project teams to identify what's truly important and develop a customized approach to meet their sustainable construction needs."}
          innovationLabel={translations[language].sustainableInnovationLabel || 
            "Sustainable Construction Services at Golden M International"}
          imageSrc={headImage}
          imageAlt={translations[language].serviceIllustration || "Service illustration"}
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

export default SustainSer;

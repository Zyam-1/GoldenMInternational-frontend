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
      title: translations[language].softwareStackTitle || "Construction Management Software Stack",
      subtitle: translations[language].constructionServicesByConstructors || "Construction Services by Constructors",
      description: translations[language].softwareStackDesc || 
        "Golden M International's construction management software stack, developed over the past decade, is a fully-integrated application suite that can be modularized and tailored to meet the lifecycle needs of any industrial construction project, with a focus on transitioning seamlessly from bulk area-based construction to system turnover and startup. The applications that comprise the stack run the gamut from estimating to costing to planning, packaging, inspection, completions and documentation.",
      ctaText: translations[language].viewSelfPerform || "VIEW OUR SELF-PERFORM SERVICES",
      ctaLink: "/services/smart-construction",
      image: sliderImage2,
      imageAlt: translations[language].teamCollaborating || "Team collaborating in a meeting room with building designs on screens",
    },
    {
      title: translations[language].modularApproachTitle || "A Modular Approach",
      subtitle: translations[language].constructionServicesByConstructors || "Construction Services by Constructors",
      description: translations[language].modularApproachDesc || 
        "Though the distinct individual applications in the stack can be used in isolation, they are best leveraged when configured to work in conjunction with each other. Whereas the estimating application can operate in isolation performing material labor take-off, for example, it can also be configured to speak to the work packaging and material control systems to perform specific work packaging and material requisition. Similarly, the document control system can run a direct line to completions.",
      ctaText: translations[language].learnMoreCta || "LEARN MORE",
      ctaLink: "/services/smart-construction",
      image: sliderImage1,
      imageAlt: translations[language].teamWorking || "Team working on target value design process",
    },
    {
      title: translations[language].costScheduleTitle || "Bringing Cost and Schedule Certainty",
      subtitle: translations[language].constructionServicesByConstructors || "Construction Services by Constructors",
      description: translations[language].costScheduleDesc || 
        "Ultimately, each of the stack applications, used separately or in concert, bring greater cost and schedule certainty, while also reducing the incredible manual effort needed to maintain documents and processes separately. By structuring the applications in a consistent manner, planning and ultimately construction execution is made more efficient.",
      ctaText: translations[language].exploreMethods || "EXPLORE OUR METHODS",
      ctaLink: "/services/smart-construction",
      image: sliderImage3,
      imageAlt: translations[language].innovativeTechniques || "Innovative construction techniques being implemented on site",
    },
    {
      title: translations[language].stackCoreTitle || "The Stack and Core Processes",
      subtitle: translations[language].constructionServicesByConstructors || "Construction Services by Constructors",
      description: translations[language].stackCoreDesc || 
        "Golden M International's software stack contains more than sixty individual applications but is best understood by seeing them from the perspective of eight core processes which include estimating and costing; documents and engineering; materials and purchasing; planning and packaging; process and schedule; quality and completions; administration and human resources; and HSE.",
      ctaText: translations[language].exploreMethods || "EXPLORE OUR METHODS",
      ctaLink: "/services/smart-construction",
      image: sliderImage4,
      imageAlt: translations[language].innovativeTechniques || "Innovative construction techniques being implemented on site",
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <SmartConsHead
          serviceCategory={translations[language].industrialService || "INDUSTRIAL SERVICE"}
          serviceTitle={translations[language].constructionServices || "Construction Services"}
          serviceDescription={translations[language].industrialConstructionDesc || 
            "We have been self-performing our work for decades and, in that time, we have built a considerable institutional memory. We've crystallized that knowledge into a stack of project management software that aids us our project teams from start to finish."}
          overviewTitle={translations[language].serviceOverview || "SERVICE OVERVIEW"}
          innovationTitle={translations[language].industrialInnovationTitle || 
            "Innovative technologies help to lean processes and drive value to your bottom line."}
          innovationText={translations[language].industrialInnovationText || 
            "Beyond adopting off-the-shelf technology, proactively partners with tech leaders to develop unique programs focused on resolving typical client pain points."}
          innovationLabel={translations[language].industrialInnovationLabel || 
            "Industrial Construction Services AT Golden M International"}
          imageSrc={headImage}
          imageAlt={translations[language].serviceIllustration || "Service illustration"}
        />

        <Showcase
          title={translations[language].heviLiftTitle || "HeviLift Software Suite"}
          description={translations[language].heviLiftDesc || 
            "HeviLift is Golden M International's proprietary 5D heavy lift planning software suite. Running thousands of lift plan scenarios to determine the most optimal and cost-effective delivery for our clients. Minimizing planning time from weeks to hours. Providing owners with unparalleled detail and understanding to make key decisions on assembly requirements, product delivery, storage, laydown, crane and project schedule."}
          imageSrc={showcaseImage1}
          imageAlt={translations[language].featureImage || "Feature image"}
          backgroundColor="white"
          textColor="#1a365d"
          accentColor="#3182ce"
        />
        <Showcase
          title={translations[language].lifecycleTitle || "Lifecycle Construction Management"}
          description={translations[language].lifecycleDesc || 
            "With each project completed, we have learned, found efficiencies, obtained best practices and discovered new approaches. A considerable number of these developments have driven our development of an application-based software suite that we offer as tailorable solutions to our clients."}
          imageSrc={showcaseImage2}
          imageAlt={translations[language].featureImage || "Feature image"}
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

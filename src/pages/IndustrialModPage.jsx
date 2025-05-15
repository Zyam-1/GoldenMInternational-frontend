import React from "react";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";
// import Slider from "../components/ServicesComponents/Slider";
import SmartConsHead from "../components/ServicesComponents/SmartConsHead";
import Slider from "../components/ServicesComponents/Slider";
import Showcase from "../components/ServicesComponents/Showcase";
import headImage from "../images/culture2.jpg";
import sliderImage1 from "../images/innov2.jpg";
import sliderImage2 from "../images/industry1.jpg";
import sliderImage3 from "../images/showcase4.jpeg";
import sliderImage4 from "../images/showcase5.jpeg";

const basicSlides = [
  {
    title: "Hassle-free Delivery",
    subtitle: "Industrial Module Assembly Services",
    description:
      "Golden M International’s module assembly facilities are among the largest in Canada and ideally situated for heavy-haul transport across North America via truck or rail. Our in-house customs specialists will support and assist with module imports.",
    ctaText: "VIEW OUR SELF-PERFORM SERVICES",
    ctaLink: "/services/smart-construction",
    image: sliderImage1,
    imageAlt:
      "Team collaborating in a meeting room with building designs on screens",
  },
  {
    title: "Schedule Certainty",
    subtitle: "Industrial Module Assembly Services",
    description:
      "Golden M International offers a complete solution that includes major procurement, bulk procurement, pipe fabrication self-directed modules assembly and management of subcontracted services. We can handle any size project and ensure on-time delivery due to our facility capacity and systematic production management.",
    ctaText: "LEARN MORE",
    ctaLink: "/services/smart-construction",
    image: sliderImage2,
    imageAlt: "Team working on target value design process",
  },
  {
    title: "Modules for any Sector",
    subtitle: "Industrial Module Assembly Services",
    description:
      "Golden M International has module assembly expertise across various sectors including oil and gas, transmission, power, mining, petrochemicals, refining, and more. We have a comprehensive experience of fabricating all types of modules including pipe-rack modules, process modules, skids, electrical e-houses, stair tower modules, structural modules, cable tray modules, building modules, and more.",
    ctaText: "EXPLORE OUR METHODS",
    ctaLink: "/services/smart-construction",
    image: sliderImage3,
    imageAlt: "Innovative construction techniques being implemented on site",
  },
  {
    title: "Modular Supply Chain and HeviLift",
    subtitle: "Industrial Module Assembly Services",
    description:
      "Golden M International can also offer a full suite of solutions between the pipe fabrication shop, the module yard and the field to optimize your entire module supply chain. Using our in-house HeviLift software, this optimization can set the best build order for your modules and coordinate their build, transportation, and storage to reduce your heavy lift schedule by upwards of 30 percent.",
    ctaText: "EXPLORE OUR METHODS",
    ctaLink: "/services/smart-construction",
    image: sliderImage4,
    imageAlt: "Innovative construction techniques being implemented on site",
  },
];

const IndustrialModPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <SmartConsHead
          serviceCategory="INDUSTRIAL SERVICE"
          serviceTitle="Industrial Module Assembly"
          serviceDescription="Golden M International Industrial’s module assembly yard has made continuous improvement and lean construction the cornerstone of our success. We put 40 years of experience and expertise to work on your project."
          overviewTitle="SERVICE OVERVIEW"
          innovationTitle="Innovative technologies help to lean processes and drive value to your bottom line."
          innovationText="Beyond adopting off-the-shelf technology, proactively partners with tech leaders to develop unique programs focused on resolving typical client pain points."
          innovationLabel="Industrial Construction Services AT Golden M International"
          imageSrc={headImage}
          imageAlt="Service illustration"
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

import React from "react";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";
// import Slider from "../components/ServicesComponents/Slider";
import SmartConsHead from "../components/ServicesComponents/SmartConsHead";
import Slider from "../components/ServicesComponents/Slider";
import Showcase from "../components/ServicesComponents/Showcase";
import headImage from "../images/people1.jpg";
import sliderImage1 from "../images/people2.jpg";
import sliderImage2 from "../images/people3.jpg";
import sliderImage3 from "../images/people4.jpg";

import showcaseImage1 from "../images/people5.jpg";
import showcaseImage2 from "../images/people6.jpg";

const basicSlides = [
  {
    title: "Direct-Hire Labor",
    subtitle: "People, Teams and Labor Solutions",
    description:
      "Golden M International's construction management software stack, developed over the past decade, is a fully-integrated application suite that can be modularized and tailored to meet the lifecycle needs of any industrial construction project, with a focus on transitioning seamlessly from bulk area-based construction to system turnover and startup. The applications that comprise the stack run the gamut from estimating to costing to planning, packaging, inspection, completions and documentation. ",
    ctaText: "VIEW OUR SELF-PERFORM SERVICES",
    ctaLink: "/services/smart-construction",
    image: sliderImage2,
    imageAlt:
      "Team collaborating in a meeting room with building designs on screens",
  },
  {
    title: "Workforce Management Software",
    subtitle: "People, Teams and Labor Solutions",
    description:
      "Golden M International uses an in-house developed craft worker tracking software to assess the labor availability in the project’s region, giving us a good understanding of whether or not supplemental craft will be required from other geographies. This program gives Golden M International some predictability and certainty to ensure our craft labor will be available to deliver the project to the client. ",
    ctaText: "LEARN MORE",
    ctaLink: "/services/smart-construction",
    image: sliderImage1,
    imageAlt: "Team working on target value design process",
  },
  {
    title: "Training and Support",
    subtitle: "People, Teams and Labor Solutions",
    description:
      "Golden M International has a strong training and mentorship program that provides craft with the necessary skills to safely and effectively perform their work activities. Training programs are developed based on the individual experience and with the specific nuances for the project in mind. Golden M International also proudly supports a variety of post-secondary and trades schools to assist in promoting the construction sector and providing individuals with the required skills during their apprenticeships.",
    ctaText: "EXPLORE OUR METHODS",
    ctaLink: "/services/smart-construction",
    image: sliderImage3,
    imageAlt: "Innovative construction techniques being implemented on site",
  },
];

const IndustrialPeoplePage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <SmartConsHead
          serviceCategory="INDUSTRIAL SERVICE"
          serviceTitle="People, Teams and Craft Labor Solutions"
          serviceDescription="With expertise in both greenfield and brownfield projects, our highly experienced teams are committed to the success of our clients and work with you to provide consistent and reliable project management and craft labor solutions."
          overviewTitle="SERVICE OVERVIEW"
          innovationTitle="Experienced project management and site teams for your project"
          innovationText="We hand-select project management teams and can scale our workforce as needed. We execute the majority of work on a direct-hire basis and our teams can oversee everything from engineering deliverables to construction and subcontract management.
"
          innovationLabel="Industrial Construction Services AT Golden M International"
          imageSrc={headImage}
          imageAlt="Service illustration"
        />

        <Showcase
          title="Our Culture of Ownership"
          description="We know our people are our most important asset and we have been fortunate to find and employ some of the most innovative, respected and diverse construction professionals. As employee owners, our teams have a vested interest in bottom line productivity and work hard to achieve our clients' goals."
          imageSrc={showcaseImage1}
          imageAlt="Feature image"
          backgroundColor="white" // Light blue background
          textColor="#1a365d" // Dark blue text
          accentColor="#3182ce" // Blue accent
        />
        <Showcase
          title="Mentoring and Culture"
          description="Most of our staff have long tenures with Golden M International and, as part of their leadership training, mentor colleagues to help aid in their development. Our teams work together from project to project, which in turn brings consistency and predictability to every new project."
          imageSrc={showcaseImage2}
          imageAlt="Feature image"
          backgroundColor="white" // Light blue background
          textColor="#1a365d" // Dark blue text
          accentColor="#3182ce" // Blue accent
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

export default IndustrialPeoplePage;

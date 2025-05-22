import React, { useState } from "react";
import styles from "./WhatWeDo2.module.css";
import tabImg1 from "../../images/tab1.png";
import tabImg2 from "../../images/tab2.png";
import tabImg3 from "../../images/tab3.png";
import tabImg4 from "../../images/tab4.png";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import { useNavigate } from "react-router-dom";

const WhatWeDo2 = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState("buildings");
  let navigate = useNavigate();

  const sections = [
    {
      id: "buildings",
      title: translations[language]?.buildings,
      heading: translations[language]?.buildingsTabHeading,
      image: tabImg1,
      description: translations[language]?.buildingsTabDesc,
    },
    {
      id: "civil-infrastructure",
      title: translations[language]?.civilInfraTabHeading,
      heading: translations[language]?.civilInfraTabHeading,
      image: tabImg2,
      description: translations[language]?.civilInfraTabDesc,
    },
    {
      id: "heavy-industrial",
      title: translations[language]?.heavyIndTabTitle,
      heading: translations[language]?.heavyIndTabHeading,
      image: tabImg3,
      description: translations[language]?.heavyIndTabDesc,
    },
    {
      id: "special-projects",
      title: translations[language]?.specialProjTabTitle,
      heading: translations[language]?.specialProjTabHeading,
      image: tabImg4,
      description: translations[language]?.specialProjTabDesc,
    },
  ];

  const activeContent =
    sections.find((section) => section.id === activeSection) || sections[0];

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div id="what-we-do-section" className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={`${styles.header} ${styles.visible}`}>
          <div className={styles.line}></div>
          <span className={styles.subtitle}>
            {translations[language]?.whatWeDo2Title}
          </span>
        </div>

        <h2 className={`${styles.title} ${styles.visible}`}>
          {translations[language]?.whatWeDo2Subtitle}
        </h2>

        <div className={`${styles.tabs} ${styles.visible}`}>
          <div className={styles.tabsList}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                className={`${styles.tabButton} ${
                  activeSection === section.id ? styles.activeTab : ""
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        <div className={`${styles.contentSection} ${styles.visible}`}>
          <div className={styles.imageWrapper}>
            <img
              src={activeContent.image}
              alt={activeContent.title}
              className={styles.sectionImage}
            />
          </div>

          <div className={styles.textContent}>
            <h3 className={styles.contentHeading}>{activeContent.heading}</h3>
            <p className={styles.contentDescription}>
              {activeContent.description}
            </p>
            <button
              onClick={() => {
                window.location.href = "/our-work";
              }}
              className={styles.learnMoreButton}
            >
              {translations[language]?.learnMore}
              <span className={styles.arrow}>—</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo2;

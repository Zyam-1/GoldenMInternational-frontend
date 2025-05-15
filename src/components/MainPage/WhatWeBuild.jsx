import React, { useState } from "react";
import styles from "./WhatWeBuild.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
// import buildingImage from "/lovable-uploads/4e9a96bf-3b74-4800-ae5b-7d067701035b.png";
import WhatWeBuild1 from "../../images/WhatWeBuild1.png";
import WhatWeBuild2 from "../../images/WhatWeBuild2.png";
import WhatWeBuild3 from "../../images/WhatWeBuild3.png";
import WhatWeBuild4 from "../../images/WhatWeBuild4.png";
// Tab content data
const WhatWeBuild = () => {
  const [activeTab, setActiveTab] = useState("buildings");
  const { language } = useLanguage();

  // Tab content data with translations
  const getTabData = (lang) => [
    {
      id: "buildings",
      title: translations[lang].buildingsTab,
      project: translations[lang].uclaProject,
      description: translations[lang].uclaProjectDesc,
      location: translations[lang].californiaLocation,
      market: translations[lang].educationMarket,
      image: WhatWeBuild1,
    },
    {
      id: "civil",
      title: translations[lang].civilTab,
      project: translations[lang].urbanProject,
      description: translations[lang].urbanProjectDesc,
      location: translations[lang].oregonLocation,
      market: translations[lang].infrastructureMarket,
      image: WhatWeBuild2,
    },
    {
      id: "industrial",
      title: translations[lang].industrialTab,
      project: translations[lang].manufacturingProject,
      description: translations[lang].manufacturingProjectDesc,
      location: translations[lang].texasLocation,
      market: translations[lang].manufacturingMarket,
      image: WhatWeBuild3,
    },
    {
      id: "special-projects",
      title: translations[lang].specialProjectsTab,
      project: translations[lang].researchProject,
      description: translations[lang].researchProjectDesc,
      location: translations[lang].floridaLocation,
      market: translations[lang].researchMarket,
      image: WhatWeBuild4,
    },
  ];

  const tabData = getTabData(language);
  const activeTabContent = tabData.find((tab) => tab.id === activeTab) || tabData[0];

  return (
    <div className={styles.showcaseContainer}>
      <div className={styles.header}>
        <div className={styles.headerDivider}></div>
        <h5 className={styles.headerTitle}>{translations[language].whatWeBuildTitle}</h5>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.introText}>
          <h2>{translations[language].whatWeBuildSubtitle}</h2>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.imageContainer}>
            <img
              src={activeTabContent.image}
              alt={activeTabContent.project}
              className={styles.projectImage}
            />
          </div>

          <div className={styles.tabsContainer}>
            <div className={styles.tabsList}>
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className={styles.tabContent}>
              <div className={styles.projectInfo}>
                <h6 className={styles.projectLabel}>{translations[language].projectLabel}</h6>
                <h3 className={styles.projectTitle}>
                  {activeTabContent.project}
                </h3>
                <p className={styles.projectDescription}>
                  {activeTabContent.description}
                </p>

                <div className={styles.projectMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>{translations[language].locationLabel}</span>
                    <span className={styles.metaValue}>
                      {activeTabContent.location}
                    </span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>{translations[language].marketLabel}</span>
                    <span className={styles.metaValue}>
                      {activeTabContent.market}
                    </span>
                  </div>
                </div>

                <button className={styles.learnMoreButton}>
                  {translations[language].learnMore}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeBuild;

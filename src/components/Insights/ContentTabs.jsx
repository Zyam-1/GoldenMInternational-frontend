"use client";

import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
import styles from "./ContentTabs.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

// Import images
import latest1 from "../../images/latest1.jpg";
import latest2 from "../../images/latest2.jpg";
import lead1 from "../../images/leadership1.jpg";
import lead2 from "../../images/leadership2.jpg";
import innov1 from "../../images/innov1.jpg";
import innov2 from "../../images/innov2.jpg";
import sustain1 from "../../images/sustain1.jpg";
import sustain2 from "../../images/sustain2.jpg";
import culture1 from "../../images/culture1.jpg";
import culture2 from "../../images/culture2.jpg";
import market1 from "../../images/market1.jpg";
import market2 from "../../images/market2.jpg";

const ContentTabs = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("latest");
  const [prevTab, setPrevTab] = useState(null);
  const [animationDirection, setAnimationDirection] = useState("right");
  const tabsRef = useRef(null);
  const indicatorRef = useRef(null);

  const tabs = [
    { id: "latest", label: translations[language].latest },
    { id: "thought-leadership", label: translations[language].thoughtLeadership },
    { id: "innovation", label: translations[language].innovation },
    { id: "sustainability", label: translations[language].sustainability },
    { id: "culture", label: translations[language].cultureAndCommunity },
    { id: "market", label: translations[language].marketHighlights },
  ];

  const tabContent = {
    latest: {
      title: translations[language].latestNewsTitle,
      content: (
        <>
          <div className={styles.contentGrid}>
            <div className={styles.contentCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={latest1}
                  alt={translations[language].projectAnnouncement}
                  width={600}
                  height={400}
                  className={styles.contentImage}
                />
              </div>
              <h3 className={styles.cardTitle}>
                {translations[language].newHQTitle}
              </h3>
              <p className={styles.cardText}>
                {translations[language].newHQDesc}
              </p>
              <span className={styles.cardDate}>June 15, 2023</span>
            </div>
            <div className={styles.contentCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={latest2}
                  alt={translations[language].awardCeremony}
                  width={600}
                  height={400}
                  className={styles.contentImage}
                />
              </div>
              <h3 className={styles.cardTitle}>
                {translations[language].awardTitle}
              </h3>
              <p className={styles.cardText}>
                {translations[language].awardDesc}
              </p>
              <span className={styles.cardDate}>May 28, 2023</span>
            </div>
          </div>
        </>
      ),
    },
    "thought-leadership": {
      title: translations[language].thoughtLeadership,
      content: (
        <>
          <div className={styles.contentGrid}>
            <div className={styles.contentCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={lead1}
                  alt={translations[language].industryConference}
                  width={600}
                  height={400}
                  className={styles.contentImage}
                />
              </div>
              <h3 className={styles.cardTitle}>
                {translations[language].sustainableConstructionTitle}
              </h3>
              <p className={styles.cardText}>
                {translations[language].sustainableConstructionDesc}
              </p>
              <span className={styles.cardAuthor}>By Maria Santos, CSO</span>
            </div>
            <div className={styles.contentCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={lead2}
                  alt={translations[language].digitalConstruction}
                  width={600}
                  height={400}
                  className={styles.contentImage}
                />
              </div>
              <h3 className={styles.cardTitle}>
                {translations[language].digitalTransformationTitle}
              </h3>
              <p className={styles.cardText}>
                {translations[language].digitalTransformationDesc}
              </p>
              <span className={styles.cardAuthor}>By João Oliveira, CTO</span>
            </div>
          </div>
        </>
      ),
    },
    innovation: {
      title: translations[language].innovation,
      content: (
        <>
          <div className={styles.contentGrid}>
            <div className={styles.contentCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={innov1}
                  alt={translations[language].digitalConstruction}
                  width={600}
                  height={400}
                  className={styles.contentImage}
                />
              </div>
              <h3 className={styles.cardTitle}>
                {translations[language].buildingSystemsTitle}
              </h3>
              <p className={styles.cardText}>
                {translations[language].buildingSystemsDesc}
              </p>
              <a href="#" className={styles.readMore}>
                {translations[language].learnMoreCta}
              </a>
            </div>
            <div className={styles.contentCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={innov2}
                  alt={translations[language].industrialEquipment}
                  width={600}
                  height={400}
                  className={styles.contentImage}
                />
              </div>
              <h3 className={styles.cardTitle}>
                {translations[language].safetyProtocolsTitle}
              </h3>
              <p className={styles.cardText}>
                {translations[language].safetyProtocolsDesc}
              </p>
              <a href="#" className={styles.readMore}>
                {translations[language].learnMoreCta}
              </a>
            </div>
          </div>
        </>
      ),
    },
    sustainability: {
      title: translations[language].sustainability,
      content: (
        <>
          <div className={styles.contentGrid}>
            <div className={styles.contentCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={sustain1}
                  alt={translations[language].solarPanels}
                  width={600}
                  height={400}
                  className={styles.contentImage}
                />
              </div>
              <h3 className={styles.cardTitle}>
                {translations[language].netZeroTitle}
              </h3>
              <p className={styles.cardText}>
                {translations[language].netZeroDesc}
              </p>
              <a href="#" className={styles.readMore}>
                {translations[language].exploreApproach}
              </a>
            </div>
            <div className={styles.contentCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={sustain2}
                  alt={translations[language].recycledMaterials}
                  width={600}
                  height={400}
                  className={styles.contentImage}
                />
              </div>
              <h3 className={styles.cardTitle}>
                {translations[language].circularEconomyTitle}
              </h3>
              <p className={styles.cardText}>
                {translations[language].circularEconomyDesc}
              </p>
              <a href="#" className={styles.readMore}>
                {translations[language].viewCaseStudies}
              </a>
            </div>
          </div>
        </>
      ),
    },
    culture: {
      title: translations[language].cultureAndCommunity,
      content: (
        <>
          <div className={styles.contentGrid}>
            <div className={styles.contentCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={culture1}
                  alt={translations[language].communityOutreach}
                  width={600}
                  height={400}
                  className={styles.contentImage}
                />
              </div>
              <h3 className={styles.cardTitle}>
                {translations[language].buildingCommunitiesTitle}
              </h3>
              <p className={styles.cardText}>
                {translations[language].buildingCommunitiesDesc}
              </p>
              <a href="#" className={styles.readMore}>
                {translations[language].ourCommunityImpact}
              </a>
            </div>
            <div className={styles.contentCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={culture2}
                  alt={translations[language].teamBuilding}
                  width={600}
                  height={400}
                  className={styles.contentImage}
                />
              </div>
              <h3 className={styles.cardTitle}>
                {translations[language].fosteringCultureTitle}
              </h3>
              <p className={styles.cardText}>
                {translations[language].fosteringCultureDesc}
              </p>
              <a href="#" className={styles.readMore}>
                {translations[language].joinTeam}
              </a>
            </div>
          </div>
        </>
      ),
    },
    market: {
      title: translations[language].marketHighlights,
      content: (
        <>
          <div className={styles.contentGrid}>
            <div className={styles.contentCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={market1}
                  alt={translations[language].marketAnalysis}
                  width={600}
                  height={400}
                  className={styles.contentImage}
                />
              </div>
              <h3 className={styles.cardTitle}>
                {translations[language].marketOutlookTitle}
              </h3>
              <p className={styles.cardText}>
                {translations[language].marketOutlookDesc}
              </p>
              <a href="#" className={styles.readMore}>
                {translations[language].downloadReport}
              </a>
            </div>
            <div className={styles.contentCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={market2}
                  alt={translations[language].urbanDevelopment}
                  width={600}
                  height={400}
                  className={styles.contentImage}
                />
              </div>
              <h3 className={styles.cardTitle}>
                {translations[language].urbanRegenerationTitle}
              </h3>
              <p className={styles.cardText}>
                {translations[language].urbanRegenerationDesc}
              </p>
              <a href="#" className={styles.readMore}>
                {translations[language].readAnalysis}
              </a>
            </div>
          </div>
        </>
      ),
    },
  };

  useEffect(() => {
    // Update the indicator position when the active tab changes
    if (tabsRef.current && indicatorRef.current) {
      const activeTabElement = tabsRef.current.querySelector(
        `[data-tab="${activeTab}"]`,
      );
      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
        indicatorRef.current.style.left = `${offsetLeft}px`;
        indicatorRef.current.style.width = `${offsetWidth}px`;
      }
    }
  }, [activeTab]);

  const handleTabChange = (tabId) => {
    if (tabId !== activeTab) {
      // Determine animation direction based on tab order
      const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
      const newIndex = tabs.findIndex((tab) => tab.id === tabId);
      setAnimationDirection(newIndex > currentIndex ? "right" : "left");

      setPrevTab(activeTab);
      setActiveTab(tabId);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.tabsContainer} ref={tabsRef}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ""}`}
            onClick={() => handleTabChange(tab.id)}
            data-tab={tab.id}
          >
            {tab.label}
          </button>
        ))}
        <div className={styles.tabIndicator} ref={indicatorRef}></div>
      </div>

      <div className={styles.contentContainer}>
        {Object.keys(tabContent).map((tabId) => (
          <div
            key={tabId}
            className={`${styles.tabContent} ${
              activeTab === tabId
                ? styles.activeContent
                : prevTab === tabId
                  ? styles.prevContent
                  : styles.inactiveContent
            } ${activeTab === tabId ? styles[`slideIn${animationDirection === "right" ? "Right" : "Left"}`] : ""} ${
              prevTab === tabId
                ? styles[
                    `slideOut${animationDirection === "right" ? "Left" : "Right"}`
                  ]
                : ""
            }`}
          >
            <h2 className={styles.contentTitle}>{tabContent[tabId].title}</h2>
            {tabContent[tabId].content}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentTabs;

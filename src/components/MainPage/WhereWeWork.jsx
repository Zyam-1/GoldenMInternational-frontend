// Author: Z. Maqsood
// Date: 10-04-2025

import React, { useState, useEffect, useRef, useMemo } from "react";
import styles from "./WhereWeWork.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

const WhereWeWork = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const [dots, setDots] = useState([]);
  const [key, setKey] = useState(0);

  // Debug translations
  useEffect(() => {
    console.log("WhereWeWork - Current language:", language);
    console.log("WhereWeWork - Translations object:", translations[language]);
  }, [language]);

  // Update key when language changes to force re-render
  useEffect(() => {
    console.log("WhereWeWork - Language changed to:", language);
    setKey((prev) => prev + 1);
  }, [language]);

  // Define dots with translations using WhatWeBuild style
  const locationDots = useMemo(
    () => [
      { left: "15%", top: "35%", city: translations[language].porto },
      { left: "30%", top: "37%", city: translations[language].aveiro },
      { left: "40%", top: "45%", city: translations[language].coimbra },
      { left: "24%", top: "58%", city: translations[language].lisbon },
      { left: "25%", top: "45%", city: translations[language].faro },
      { left: "45%", top: "70%", city: translations[language].evora },
      { left: "40%", top: "60%", city: translations[language].braga },
      { left: "52%", top: "65%", city: translations[language].beja },
    ],
    [language],
  );

  // Update dots when language changes
  useEffect(() => {
    setDots(locationDots);
  }, [locationDots]);

  // Add animation to dots
  useEffect(() => {
    // Add animation to dots
    setTimeout(() => {
      const dotElements = document.querySelectorAll(`.${styles.dot}`);
      dotElements.forEach((dot, index) => {
        setTimeout(() => {
          dot.classList.add(styles.visible);
        }, index * 50);
      });
    }, 100);
  }, [dots]);

  return (
    <section className={styles.container} ref={sectionRef} key={key}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <div className={styles.header}>
            <div className={styles.line}></div>
            <h3 className={styles.subtitle}>
              {translations[language].workLocationTitle}
            </h3>
          </div>

          <h1 className={`${styles.title} ${styles.visible}`}>
            {translations[language].workLocationDesc}
          </h1>

          <p className={styles.description}>
            {translations[language].globalPresence}
          </p>

          <div className={styles.locationTabs}>
            <button className={`${styles.locationTab} ${styles.active}`}>
              {translations[language].lisbon}
            </button>
          </div>
        </div>

        <div className={styles.mapSection}>
          <div className={`${styles.mapWrapper} ${styles.visible}`}>
            <div className={styles.map}>
              {/* Portugal map silhouette */}
              <svg
                className={styles.mapOutline}
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M148,106c2.8,3.2,9.5,5.3,7,10c-5.9,4.8-2.2,12-2,18c5.3,4.4,4.1,11.3,5,17c3.6,1.9,8.1,2.5,12,3c3.1,5.3,6.2,10.7,10,15c2.3,3.9,6.3,5.9,8,10c1.7,3.3-1.2,7.3,1,10c4.9,2.1,9.8-2.9,14-1c0,3-2.1,5.5-3,8c1.7,2.9,4.5,5.1,6,8c3.7,3.3,7.3-2.7,11-1c1.2,2.8,2.4,5.6,3,9c2.4,2.4,6.4,3,8,6c2.3,4,4.8,8,8,11c3.7,4.9,8.3,9.1,13,13c1.8,4.2,3.5,8.5,7,12c4.4,11.2,3.6,23.7,7,35c0.7,6.3,7.2,8.8,9,15c3.4,5.3,5.7,11.1,8,17c0.7,4.3-0.7,8.5-1,13c-0.7,6.3-1.3,12.7-1,19c-3.2,4.1-7.9,6.5-9,12c-2.1,4.9-3.4,10.2-6,15c-2.6,1.1-6.5,0.5-8,3c-6.3,1.7-12.1,4.8-19,5c-6.3,1.7-12.7,3.3-19,5c-3.7,0-7.3,0-11,0c-2.3-1-4.7-2-7-3c-3.3-6-7-11.7-9-18c-4.9-3.1-7.8-8.9-14-10c-2.5-3.8-5.9-6.9-9-10c-7.3-2-11.9-9.9-20-9c-4.6-3.4-10.4-4.6-14-9c-6.6-6.4-14-11.9-19-19c-2.3-3.3-7.2-4.9-9-8c-5.4-7.2-10.2-14-16-21c-0.9-4.3-4.4-7.4-7-11c-2.7-6.6-7.1-12.6-10-19c-0.3-6.4-3-12.3-5-18c-3-8.6-3.3-17.3-6-26c-0.3-7.4-0.7-14.6-1-22c-1.1-2.9-5.5-3.8-5-7c3.5-3.5,9.3-3.7,12-8c4.5-5.9,7.8-13.9,15-17c5.4-4.9,11.7-8.9,19-11c3.9-1.1,8.2-0.8,12-2c6.7-2.3,13-5.4,19-9c6.3-3.3,11.1-8.3,17-12c4.9-0.1,8.7-3.2,13-5c3.5-1.8,7.5-2.6,11-4c6.8-2.2,12.3-6.8,19-9c4.7-0.7,7.9-4.4,13-5C144,107.4,146,106.7,148,106z"
                  fill="#282828"
                  stroke="#333"
                  strokeWidth="2"
                />
              </svg>

              {/* Dots representing locations */}
              {dots.map((dot, index) => (
                <div
                  key={`${index}-${language}`}
                  className={styles.dot}
                  style={{ left: dot.left, top: dot.top }}
                  title={dot.city}
                ></div>
              ))}
            </div>
          </div>

          <div className={`${styles.statsSection} ${styles.visible}`}>
            <div className={styles.stat}>
              <h2 className={styles.statNumber}>100%</h2>
              <p className={styles.statDescription}>
                {translations[language].employeeOwnedStat}
              </p>
            </div>

            <div className={styles.stat}>
              <h2 className={styles.statNumber}>1,000+</h2>
              <p className={styles.statDescription}>
                {translations[language].activeProjectsStat}
              </p>
            </div>

            <div className={styles.buttonWrapper}>
              <button
                onClick={() => {
                  window.location.href = "/our-location";
                }}
                className={styles.officesButton}
              >
                {translations[language].viewOffices}
              </button>
              <p className={styles.officesDescription}>
                {translations[language].officesDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeWork;

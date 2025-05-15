"use client";

import { useEffect, useRef } from "react";
import styles from "./Commitments.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

const Commitments = () => {
  const { language } = useLanguage();
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animation for heading
    setTimeout(() => {
      headingRef.current.classList.add(styles.visible);
    }, 300);

    // Animation for description
    setTimeout(() => {
      descriptionRef.current.classList.add(styles.visible);
    }, 500);

    // Animation for cards
    cardsRef.current.forEach((card, index) => {
      setTimeout(
        () => {
          card.classList.add(styles.visible);
        },
        700 + index * 200,
      );
    });
  }, []);

  // Add cards to ref array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>{translations[language].ourCommitments}</h2>
        <div className={styles.mainContent}>
          <div className={styles.headingWrapper} ref={headingRef}>
            <h3 className={styles.mainHeading}>
              {translations[language].everyDecisionImpact}
            </h3>
          </div>
          <div className={styles.descriptionWrapper} ref={descriptionRef}>
            <p className={styles.description}>
              {translations[language].commitmentsDescription}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.cardsContainer}>
        {/* Safety Card */}
        <div className={styles.card} ref={addToRefs}>
          <div className={styles.iconWrapper}>
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L3 7V12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12V7L12 2ZM12 5.5C13.93 5.5 15.5 7.07 15.5 9C15.5 10.93 13.93 12.5 12 12.5C10.07 12.5 8.5 10.93 8.5 9C8.5 7.07 10.07 5.5 12 5.5ZM12 19.2C9.25 19.2 6.85 17.65 5.56 15.34C6.71 13.7 9.18 12.5 12 12.5C14.82 12.5 17.29 13.7 18.44 15.34C17.15 17.65 14.75 19.2 12 19.2Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h4 className={styles.cardTitle}>{translations[language].safety}</h4>
          <p className={styles.cardText}>
            {translations[language].safetyText}
          </p>
          <a href="#" className={styles.readMore}>
            {translations[language].readMore}
            <span className={styles.readMoreLine}></span>
          </a>
        </div>

        {/* Quality Card */}
        <div className={styles.card} ref={addToRefs}>
          <div className={styles.iconWrapper}>
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 5.18L10.59 16.6L6.35 12.36L7.76 10.95L10.59 13.78L20.59 3.78L22 5.18ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C13.57 4 15.04 4.46 16.28 5.25L17.73 3.8C16.1 2.67 14.13 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C13.73 22 15.36 21.56 16.78 20.78L15.28 19.28C14.28 19.74 13.17 20 12 20Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h4 className={styles.cardTitle}>{translations[language].quality}</h4>
          <p className={styles.cardText}>
            {translations[language].qualityText}
          </p>
          <a href="#" className={styles.readMore}>
            {translations[language].readMore}
            <span className={styles.readMoreLine}></span>
          </a>
        </div>

        {/* Sustainability Card */}
        <div className={styles.card} ref={addToRefs}>
          <div className={styles.iconWrapper}>
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C7.59 22 4 18.41 4 14C4 10.91 5.82 8.22 8.5 7.06V7C8.5 4.79 10.29 3 12.5 3C14.71 3 16.5 4.79 16.5 7V7.06C19.18 8.22 21 10.91 21 14C21 18.41 17.41 22 13 22H12ZM12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12ZM16 14C16 12.9 15.1 12 14 12C12.9 12 12 12.9 12 14C12 15.1 12.9 16 14 16C15.1 16 16 15.1 16 14ZM10 14C10 12.9 9.1 12 8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16C9.1 16 10 15.1 10 14Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h4 className={styles.cardTitle}>{translations[language].sustainability}</h4>
          <p className={styles.cardText}>
            {translations[language].sustainabilityText}
          </p>
          <a href="#" className={styles.readMore}>
            {translations[language].readMore}
            <span className={styles.readMoreLine}></span>
          </a>
        </div>

        {/* Stewardship Card */}
        <div className={styles.card} ref={addToRefs}>
          <div className={styles.iconWrapper}>
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 11C17.66 11 19 9.66 19 8C19 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V18H23V16.5C23 14.17 18.33 13 16 13Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h4 className={styles.cardTitle}>{translations[language].stewardship}</h4>
          <p className={styles.cardText}>
            {translations[language].stewardshipText}
          </p>
          <a href="#" className={styles.readMore}>
            {translations[language].readMore}
            <span className={styles.readMoreLine}></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Commitments;

"use client";

import { useEffect, useRef } from "react";
import img1 from "../../images/slide1.jpg";
import img2 from "../../images/slide2.jpg";
import styles from "./HowWeShowUp.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

const HowWeShowUp = () => {
  const { language } = useLanguage();
  const titleRef = useRef(null);
  const firstBlockRef = useRef(null);
  const secondBlockRef = useRef(null);

  useEffect(() => {
    // Animation for title
    setTimeout(() => {
      titleRef.current.classList.add(styles.visible);
    }, 300);

    // Animation for content blocks with staggered timing
    setTimeout(() => {
      firstBlockRef.current.classList.add(styles.visible);
    }, 500);

    setTimeout(() => {
      secondBlockRef.current.classList.add(styles.visible);
    }, 800);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.titleWrapper} ref={titleRef}>
        <h2 className={styles.sectionTitle}>{translations[language].howWeShowUp}</h2>
      </div>

      {/* First Block - Innovative */}
      <div className={styles.contentBlock} ref={firstBlockRef}>
        <div className={styles.imageWrapper}>
          <img
            src={img1}
            alt={translations[language].innovative}
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h3 className={styles.blockTitle}>{translations[language].innovative}</h3>
          <p className={styles.blockText}>
            {translations[language].innovativeText}
          </p>
        </div>
      </div>

      {/* Second Block - Driven */}
      <div
        className={`${styles.contentBlock} ${styles.reversed}`}
        ref={secondBlockRef}
      >
        <div className={styles.textContent}>
          <h3 className={styles.blockTitle}>{translations[language].driven}</h3>
          <p className={styles.blockText}>
            {translations[language].drivenText}
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={img2}
            alt={translations[language].driven}
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default HowWeShowUp;

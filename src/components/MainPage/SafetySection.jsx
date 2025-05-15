import React from "react";
import styles from "./SafetySection.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import safetyImage from "../../images/emergency1.jpg";

const SafetySection = () => {
  const { language } = useLanguage();

  return (
    <div className={styles.safetySection}>
      <div className={styles.container}>
        <div className={styles.safetyContent}>
          <div className={styles.imageContainer}>
            <img
              src={safetyImage}
              alt={translations[language].safetyOnSite}
              className={styles.safetyImage}
            />
          </div>

          <div className={styles.textContainer}>
            <h2 className={styles.sectionTitle}>{translations[language].safetyTitle}</h2>
            <p className={styles.sectionText}>
              {translations[language].safetyText}
            </p>
            <div className={styles.learnMoreContainer}>
              <button className={styles.learnMoreButton}>{translations[language].safetyLearnMore}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetySection;

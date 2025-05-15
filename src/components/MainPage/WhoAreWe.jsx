import React from "react";
import styles from "./WhoAreWe.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

const WhoAreWe = () => {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.yellowCorner}></div>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <div className={styles.header}>
            <div className={styles.line}></div>
            <h3 className={styles.subtitle}>{translations[language].whoWeAreMainTitle}</h3>
          </div>

          <h1 className={styles.title}>{translations[language].whoWeAreMainDesc}</h1>
          
          <div className={styles.paragraphs}>
            <p className={styles.paragraph}>
              {translations[language].aboutMainText1}
            </p>

            <p className={styles.paragraph}>
              {translations[language].aboutMainText2}
            </p>

            <p className={styles.paragraph}>
              {translations[language].aboutMainText3}
            </p>
          </div>

          <div className={styles.buttonWrapper}>
            <button className={styles.aboutButton}>{translations[language].aboutUs}</button>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.stat}>
            <h2 className={styles.statNumber}>119</h2>
            <p className={styles.statDescription}>{translations[language].yearsExperience}</p>
          </div>

          <div className={styles.stat}>
            <h2 className={styles.statNumber}>$11.3B+</h2>
            <p className={styles.statDescription}>{translations[language].annualVolume}</p>
          </div>

          <div className={styles.stat}>
            <h2 className={styles.statNumber}>#10</h2>
            <p className={styles.statDescription}>
              {translations[language].industryLeadership}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;

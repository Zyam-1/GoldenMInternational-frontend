import React from "react";
import styles from "./OwnersSection.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import presidentImage from "../../images/owner.png";

const OwnersSection = () => {
  const { language } = useLanguage();

  return (
    <section className={styles.ownersSection}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.leftColumn}>
            <div className={styles.sectionLabel}>
              <div className={styles.labelLine}></div>
              <span>{translations[language].ownersSectionTitle}</span>
            </div>
            <h2 className={styles.sectionTitle}>{translations[language].ownersSectionDesc}</h2>
            <p className={styles.sectionText}>{translations[language].ownershipBenefits}</p>
            <div className={styles.learnMore}>
              <span>{translations[language].learnMore}</span>
              <div className={styles.learnMoreLine}></div>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.profileSection}>
              <div className={styles.profileInfo}>
                <h3 className={styles.profileName}>{translations[language].employeeOwnership}</h3>
                <p className={styles.profileTitle}>{translations[language].ownershipCulture}</p>
                <p className={styles.profileDescription}>{translations[language].ownershipDesc}</p>
              </div>
              <div className={styles.profileImageContainer}>
                <img
                  src={presidentImage}
                  alt={translations[language].presidentPortrait}
                  className={styles.profileImage}
                />
                <div className={styles.patternOverlay}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnersSection;

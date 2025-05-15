import React from "react";
import styles from "./CollaborationSection.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

const CollaborationSection = () => {
  const { language } = useLanguage();

  return (
    <div className={styles.collaborationSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <h2 className={styles.sectionTitle}>{translations[language].collaborationTitle}</h2>
            <p className={styles.sectionText}>
              {translations[language].collaborationDesc}
            </p>

            <div className={styles.buttonsContainer}>
              <button className={styles.projectButton}>
                {translations[language].buildWithUsButton}
              </button>
              <button className={styles.careerButton}>
                {translations[language].joinTeamButton}
              </button>
            </div>
          </div>

          <div className={styles.graphicElement}>
            {/* Yellow geometric pattern - implemented as CSS */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationSection;

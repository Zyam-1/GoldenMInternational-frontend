"use client";

import { useState } from "react";
import styles from "./CollaborationSection.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import { FiMail, FiPhone, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const CollaborationSection = () => {
  const { language } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);

  const handleBuildWithUs = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleContactOption = (option) => {
    // Close the popup
    setShowPopup(false);

    // Handle different contact options
    switch (option) {
      case "email":
        window.location.href = "mailto:contact@goldenm.com";
        break;
      case "whatsapp":
        window.location.href = "https://wa.me/1234567890"; // Replace with actual WhatsApp number
        break;
      case "phone":
        window.location.href = "tel:+1234567890"; // Replace with actual phone number
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.collaborationSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <h2 className={styles.sectionTitle}>
              {translations[language].collaborationTitle}
            </h2>
            <p className={styles.sectionText}>
              {translations[language].collaborationDesc}
            </p>

            <div className={styles.buttonsContainer}>
              <button
                className={styles.projectButton}
                onClick={handleBuildWithUs}
              >
                {translations[language].buildWithUsButton}
              </button>
              <button
                onClick={() => {
                  window.location.href = "/careers";
                }}
                className={styles.careerButton}
              >
                {translations[language].joinTeamButton}
              </button>
            </div>
          </div>

          <div className={styles.graphicElement}>
            {/* Yellow geometric pattern - implemented as CSS */}
          </div>
        </div>
      </div>

      {/* Contact Popup */}
      {showPopup && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closePopup}>
              <FiX />
            </button>
            <h3 className={styles.popupTitle}>Get in touch with us</h3>
            <p className={styles.popupText}>
              Choose how you'd like to connect:
            </p>

            <div className={styles.contactOptions}>
              <button
                className={styles.contactOption}
                onClick={() => handleContactOption("email")}
              >
                <div className={styles.iconWrapper}>
                  <FiMail className={styles.contactIcon} />
                </div>
                <span>Email Us</span>
              </button>

              <button
                className={styles.contactOption}
                onClick={() => handleContactOption("whatsapp")}
              >
                <div className={styles.iconWrapper}>
                  <FaWhatsapp className={styles.contactIcon} />
                </div>
                <span>WhatsApp</span>
              </button>

              <button
                className={styles.contactOption}
                onClick={() => handleContactOption("phone")}
              >
                <div className={styles.iconWrapper}>
                  <FiPhone className={styles.contactIcon} />
                </div>
                <span>Call Us</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollaborationSection;

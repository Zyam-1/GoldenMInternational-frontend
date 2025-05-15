"use client";

import { useEffect, useRef } from "react";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";
import styles from "./OurLeaders.module.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const OurLeaders = () => {
  const { language } = useLanguage();
  const headerRef = useRef(null);

  useEffect(() => {
    // Simple animation on load
    const header = headerRef.current;
    if (header) {
      header.classList.add(styles.visible);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.headerContainer} ref={headerRef}>
        <div className={styles.content}>
          <div className={styles.titleLine}>
            <span className={styles.line}></span>
            <h1 className={styles.title}>{translations[language].leadershipTeamTitle}</h1>
          </div>
          <p className={styles.description}>
            {translations[language].leadershipTeamDesc}
          </p>
        </div>
        <div className={styles.decorativeElements}>
          <div className={styles.yellowTriangle}></div>
          <div className={styles.greenTriangle}></div>
          <div className={styles.yellowRectangle}></div>
        </div>
      </div>
      <CollaborationSection />
      <Footer />
    </>
  );
};

export default OurLeaders;

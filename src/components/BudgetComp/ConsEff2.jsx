"use client";

import { useEffect, useRef } from "react";
import styles from "./ConsEff2.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

const ConsEff2 = () => {
  const titleRef = useRef(null);
  // const headingRef = useRef(null);
  const textRef = useRef(null);
  const { language } = useLanguage();
  const decorationRef = useRef(null);

  useEffect(() => {
    // Animation for title with slight delay
    // setTimeout(() => {
    //   titleRef.current.classList.add(styles.visible);
    // }, 300);

    // Animation for heading with more delay
    // setTimeout(() => {
    //   headingRef.current.classList.add(styles.visible);
    // }, 600);

    // Animation for text with even more delay
    setTimeout(() => {
      textRef.current.classList.add(styles.visible);
    }, 900);

    // Animation for decoration with the most delay
    setTimeout(() => {
      decorationRef.current.classList.add(styles.visible);
    }, 1200);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleWrapper} ref={titleRef}>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.textWrapper} ref={textRef}>
          <h1 className={styles.description}>
            {translations[language].consEff2Desc}
          </h1>
        </div>
      </div>

      <div className={styles.decoration} ref={decorationRef}>
        <div className={styles.topTriangle}></div>
        <div className={styles.bottomShapes}>
          <div className={styles.greenTriangle}></div>
          <div className={styles.yellowRectangle}></div>
        </div>
      </div>
    </section>
  );
};

export default ConsEff2;

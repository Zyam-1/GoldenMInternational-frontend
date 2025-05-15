"use client";

import { useEffect, useRef } from "react";
import styles from "./Insights.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

export default function Insight() {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    paragraphsRef.current.forEach((p) => {
      if (p) observer.observe(p);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.decorativeShapes}>
        <div className={styles.yellowTriangle}></div>
        <div className={styles.greenTriangle}></div>
        <div className={styles.yellowRectangle}></div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.heading} ref={headingRef}>
          {translations[language].insightsTitle}
        </h1>
      </div>
    </section>
  );
}

import React, { useEffect, useRef } from "react";
import styles from "./ConstructionEff.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import image1 from "../../images/cons1.jpg";
import image2 from "../../images/culture1.jpg";

const ConstructionEff = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imagesRef = useRef(null);
  const { language } = useLanguage();

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    if (imagesRef.current) observer.observe(imagesRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (imagesRef.current) observer.unobserve(imagesRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentColumn}>
          <h2 ref={headingRef} className={styles.heading}>
            {translations[language].constructionEfficiencyTitle}
          </h2>
        </div>

        <div ref={imagesRef} className={styles.imageGrid}>
          <div className={styles.imageWrapper}>
            <img
              src={image1}
              alt={translations[language].architecturalVisualization}
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={image2}
              alt={translations[language].constructionBlueprint}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionEff;

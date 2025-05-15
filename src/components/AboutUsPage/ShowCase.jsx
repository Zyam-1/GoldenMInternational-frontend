"use client";

import { useEffect, useRef } from "react";
import styles from "./ShowCase.module.css";
import showcase1 from "../../images/showcase1.jpeg";
import showcase2 from "../../images/showcase2.jpeg";
import showcase3 from "../../images/showcase3.jpeg";
import showcase4 from "../../images/showcase4.jpeg";
import showcase5 from "../../images/showcase5.jpeg";
import showcase6 from "../../images/showcase6.jpeg";
import showcase7 from "../../images/showcase7.jpeg";
import showcase8 from "../../images/showcase8.jpeg";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

const ShowCase = () => {
  const { language } = useLanguage();
  const gridRef = useRef(null);
  const purposeRef = useRef(null);

  useEffect(() => {
    // Animation for grid items
    const gridItems = gridRef.current.querySelectorAll(`.${styles.gridItem}`);
    gridItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add(styles.visible);
      }, 100 * index);
    });

    // Animation for purpose section
    setTimeout(() => {
      purposeRef.current.classList.add(styles.visible);
    }, 800);
  }, []);

  const images = [
    showcase1,
    showcase2,
    showcase3,
    showcase4,
    showcase5,
    showcase6,
    showcase7,
    showcase8,
  ];

  return (
    <div className={styles.container}>
      {/* Image Grid */}
      <div className={styles.imageGrid} ref={gridRef}>
        {images.map((src, index) => (
          <div key={index} className={styles.gridItem}>
            <img src={src || "/placeholder.svg"} alt={`${translations[language].ourPurpose} ${index + 1}`} />
            <div className={styles.overlay}></div>
          </div>
        ))}
      </div>

      {/* Purpose Section */}
      <div className={styles.purposeSection} ref={purposeRef}>
        <div className={styles.purposeContent}>
          <h2 className={styles.purposeHeading}>{translations[language].ourPurpose}</h2>
          <p className={styles.purposeText}>
            {translations[language].purposeText}
          </p>
        </div>
        <div className={styles.decorativeLine}></div>
      </div>
    </div>
  );
};

export default ShowCase;

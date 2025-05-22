"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./InnovSection.module.css";
import { translations } from "../../translations/translations";
import { useLanguage } from "../../contexts/LanguageContext";

const InnovSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const paragraphRefs = useRef([]);
  const { language } = useLanguage();

  // Reset paragraph refs array
  paragraphRefs.current = [];

  // Add to refs function
  const addToParagraphRefs = (el) => {
    if (el && !paragraphRefs.current.includes(el)) {
      paragraphRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Initial animation for section
    setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Set up intersection observer for paragraphs
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 },
    );

    // Observe paragraph elements
    paragraphRefs.current.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      paragraphRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section
      className={`${styles.innovationSection} ${isVisible ? styles.visible : ""}`}
      ref={sectionRef}
    >
      <div className={styles.decorativeCorner}></div>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          {translations[language].safetyHeading}
        </h2>

        <p className={styles.paragraph} ref={addToParagraphRefs}>
          {translations[language].safetyPara1}
        </p>

        <p className={styles.paragraph} ref={addToParagraphRefs}>
          {translations[language].safetyPara2}
        </p>
      </div>
    </section>
  );
};

export default InnovSection;

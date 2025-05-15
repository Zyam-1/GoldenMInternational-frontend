"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import styles from "./InnovSection.module.css";

const InnovSection = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const paragraphRefs = useRef([]);

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
          {translations[language].innovSectionHeading}
        </h2>

        <p className={styles.paragraph} ref={addToParagraphRefs}>
          {translations[language].innovSectionPara1}
        </p>

        <p className={styles.paragraph} ref={addToParagraphRefs}>
          {translations[language].innovSectionPara2}
        </p>

        <p className={styles.paragraph} ref={addToParagraphRefs}>
          {translations[language].innovSectionPara3}
        </p>
      </div>
    </section>
  );
};

export default InnovSection;

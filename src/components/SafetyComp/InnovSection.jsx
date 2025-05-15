"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./InnovSection.module.css";

const InnovSection = () => {
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
          Our safety professionals strive to ensure everyone returns home safe
          at the end of the day.
        </h2>

        <p className={styles.paragraph} ref={addToParagraphRefs}>
          Safety is at the core of everything we do and is one of our central
          guiding principles. We promote and foster a culture where people truly
          care about one another and where everyone shares in our goal of zero
          incidents.
        </p>

        <p className={styles.paragraph} ref={addToParagraphRefs}>
          Health, safety and environment focuses on uncompromised safety core
          values, personal commitment and a passionate belief in achieving zero
          injuries. We look to achieve this through frontline leadership,
          positive recognition, safe work behaviors, accountability at all
          levels and reducing exposure.
        </p>
      </div>
    </section>
  );
};

export default InnovSection;

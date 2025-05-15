"use client";

import { useEffect, useRef } from "react";
import styles from "./Commitments.module.css";

const Commitments = ({
  // All text content as props
  sectionTitle = "OUR COMMITMENT",
  quote = "When a business is shut down due to a storm or unexpected emergency, the entire community feels it. The sooner we can rebuild and restore full functionality, the sooner the people can get back to work and ultimately their lives can get back to normal. That is very rewarding feeling at the end of the day.",
  personName = "Thomas Smith",
  personTitle = "Project Manager, Golden M International Construction",
}) => {
  // Refs for animation
  const titleRef = useRef(null);
  const quoteRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    // Animation for elements with staggered timing
    setTimeout(() => {
      if (titleRef.current) titleRef.current.classList.add(styles.visible);
    }, 300);

    setTimeout(() => {
      if (quoteRef.current) quoteRef.current.classList.add(styles.visible);
    }, 500);

    setTimeout(() => {
      if (nameRef.current) nameRef.current.classList.add(styles.visible);
    }, 700);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleWrapper} ref={titleRef}>
          <div className={styles.titleLine}></div>
          <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        </div>

        <div className={styles.quoteWrapper} ref={quoteRef}>
          <p className={styles.quote}>{quote}</p>
        </div>

        <div className={styles.personWrapper} ref={nameRef}>
          <h3 className={styles.personName}>{personName}</h3>
          <p className={styles.personTitle}>{personTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Commitments;

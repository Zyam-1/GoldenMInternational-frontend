"use client";

import { useEffect, useRef } from "react";
import styles from "./Heading.module.css";

const Heading = () => {
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const decorationRef = useRef(null);

  useEffect(() => {
    // Animation for title with slight delay
    setTimeout(() => {
      titleRef.current.classList.add(styles.visible);
    }, 300);

    // Animation for heading with more delay
    setTimeout(() => {
      headingRef.current.classList.add(styles.visible);
    }, 600);

    // Animation for decoration with even more delay
    setTimeout(() => {
      decorationRef.current.classList.add(styles.visible);
    }, 900);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleWrapper} ref={titleRef}>
          <div className={styles.titleLine}></div>
          <h2 className={styles.sectionTitle}>OUR WORK</h2>
        </div>

        <div className={styles.headingWrapper} ref={headingRef}>
          <h3 className={styles.mainHeading}>
            Building the future of the construction industry, one project at a
            time
          </h3>
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

export default Heading;

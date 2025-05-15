"use client";

import { useEffect, useRef } from "react";
import styles from "./Offices.module.css";

const Offices = () => {
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
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
          <h2 className={styles.sectionTitle}>OUR OFFICES</h2>
        </div>

        <div className={styles.headingWrapper} ref={headingRef}>
          <h3 className={styles.mainHeading}>
            Golden M International has offices across Portugal
          </h3>
        </div>

        <div className={styles.textWrapper} ref={textRef}>
          <p className={styles.description}>
            Golden M International maintains a strategic presence throughout
            Portugal, with offices in major cities and regional centers. Our
            network enables us to deliver exceptional construction and
            engineering services nationwide, combining local expertise with
            global standards to meet the unique needs of each region.
          </p>
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

export default Offices;

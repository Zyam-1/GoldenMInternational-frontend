"use client";

import { useEffect, useRef } from "react";
// import Image from "next/image";
import styles from "./Article.module.css";
import image from "../../images/latest2.jpg";

const Article = () => {
  const articleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Animation for the entire article
    setTimeout(() => {
      articleRef.current.classList.add(styles.visible);
    }, 300);

    // Animation for image with slight delay
    setTimeout(() => {
      imageRef.current.classList.add(styles.visible);
    }, 500);

    // Animation for content with more delay
    setTimeout(() => {
      contentRef.current.classList.add(styles.visible);
    }, 700);
  }, []);

  return (
    <article className={styles.container} ref={articleRef}>
      <div className={styles.imageWrapper} ref={imageRef}>
        <img
          src={image}
          alt="Lisbon cityscape with Tagus river and buildings"
          className={styles.image}
        />
      </div>

      <div className={styles.content} ref={contentRef}>
        <span className={styles.category}>COMPANY NEWS</span>
        <h2 className={styles.title}>
          Golden M International Expands Operations in Lisbon, Bringing
          Commercial Expertise to One of Europe's Fastest-Growing Markets
        </h2>
        <div className={styles.meta}>
          <span className={styles.type}>News Release</span>
          <span className={styles.divider}>|</span>
          <span className={styles.date}>Apr 30, 2025</span>
        </div>
      </div>
    </article>
  );
};

export default Article;

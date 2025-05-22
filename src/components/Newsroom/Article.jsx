"use client";

import { useEffect, useRef } from "react";
// import Image from "next/image";
import styles from "./Article.module.css";
import image from "../../images/latest2.jpg";
import { translations } from "../../translations/translations";
import { useLanguage } from "../../contexts/LanguageContext";

const Article = () => {
  const articleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const { language } = useLanguage();

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
        <span className={styles.category}>
          {translations[language].compNews}
        </span>
        <h2 className={styles.title}>{translations[language].compNewsTitle}</h2>
        <div className={styles.meta}>
          <span className={styles.type}>
            {translations[language].newsRelease}
          </span>
          <span className={styles.divider}>|</span>
          <span className={styles.date}>
            {translations[language].articleDate}
          </span>
        </div>
      </div>
    </article>
  );
};

export default Article;

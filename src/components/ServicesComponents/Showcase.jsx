"use client";

import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Showcase.module.css";

const Showcase = ({
  title,
  description,
  imageSrc,
  imageAlt,
  subtitle,
  ctaText,
  ctaLink = "#",
  imagePosition = "left",
  backgroundColor,
  textColor,
  accentColor = "#004d33",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const showcaseRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (showcaseRef.current) {
      observer.observe(showcaseRef.current);
    }

    return () => {
      if (showcaseRef.current) {
        observer.unobserve(showcaseRef.current);
      }
    };
  }, []);

  // Custom styles based on props
  const containerStyle = {
    backgroundColor: backgroundColor || "transparent",
    color: textColor || "inherit",
    "--accent-color": accentColor,
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: imagePosition === "left" ? -30 : 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div className={styles.container} ref={showcaseRef} style={containerStyle}>
      <motion.div
        className={`${styles.content} ${imagePosition === "right" ? styles.contentReversed : ""}`}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className={styles.imageContainer} variants={imageVariants}>
          <div className={styles.imageWrapper}>
            <img
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={600}
              height={400}
              className={styles.image}
            />
            <div className={styles.imageAccent}></div>
          </div>
        </motion.div>

        <div className={styles.textContent}>
          {subtitle && (
            <motion.div className={styles.subtitle} variants={itemVariants}>
              {subtitle}
            </motion.div>
          )}

          <motion.h2 className={styles.title} variants={itemVariants}>
            {title}
          </motion.h2>

          <motion.p className={styles.description} variants={itemVariants}>
            {description}
          </motion.p>

          {ctaText && (
            <motion.div variants={itemVariants}>
              <a href={ctaLink} className={styles.cta}>
                {ctaText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.ctaIcon}
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Showcase;

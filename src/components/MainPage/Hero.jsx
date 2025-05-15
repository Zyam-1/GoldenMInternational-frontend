"use client";

import { useState, useEffect, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import styles from "./Hero.module.css";
import imgSlide1 from "../../images/slide1.jpg";
import imgSlide2 from "../../images/slide2.jpg";
import imgSlide3 from "../../images/slide3.jpg";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

const Hero = () => {
  const { language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const slideDuration = 5000; // 5 seconds per slide

  // Define slides after language is available
  const slides = [
    {
      category: translations[language]?.culture || "CULTURE",
      headline: translations[language]?.fortuneCompany || "Fortune 100 Best Companies to Work For® 2025",
      ctaText: translations[language]?.readStory || "READ THE STORY",
      additionalText: [
        translations[language]?.employeeOwned100 || "100% Employee-Owned",
        translations[language]?.digitalTwinsText || "Digital Twins",
        translations[language]?.colorado50Years || "50 Years in Colorado"
      ],
      imageUrl: imgSlide1,
    },
    {
      category: translations[language]?.manufacturing || "MANUFACTURING",
      headline: translations[language]?.digitalTwins || "Leveraging Digital Twins in Manufacturing",
      ctaText: translations[language]?.readStory || "READ THE STORY",
      additionalText: [
        translations[language]?.employeeOwned100 || "100% Employee-Owned",
        translations[language]?.digitalTwinsText || "Digital Twins",
        translations[language]?.colorado50Years || "50 Years in Colorado"
      ],
      imageUrl: imgSlide2,
    },
    {
      category: translations[language]?.majorMilestone || "MAJOR MILESTONE",
      headline: translations[language]?.coloradoAnniversary || "Celebrating 50 Years of Building Colorado",
      ctaText: translations[language]?.readStory || "READ THE STORY",
      additionalText: [
        translations[language]?.employeeOwned100 || "100% Employee-Owned",
        translations[language]?.digitalTwinsText || "Digital Twins",
        translations[language]?.colorado50Years || "50 Years in Colorado"
      ],
      imageUrl: imgSlide3,
    },
  ];

  // Function to handle the timer
  const startTimer = () => {
    clearTimer();
    setProgress(0);
    const startTime = Date.now();

    timerRef.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min((elapsedTime / slideDuration) * 100, 100);

      setProgress(newProgress);

      if (newProgress >= 100) {
        const nextSlide = (activeSlide + 1) % slides.length;
        goToSlide(nextSlide);
      }
    }, 50);
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === activeSlide) return;

    setIsTransitioning(true);
    setActiveSlide(index);
    setProgress(0);
    clearTimer();

    setTimeout(() => {
      setIsTransitioning(false);
      if (!isPaused) {
        startTimer();
      }
    }, 1000);
  };

  const togglePause = () => {
    setIsPaused((prev) => {
      if (prev) {
        startTimer();
        return false;
      } else {
        clearTimer();
        return true;
      }
    });
  };

  useEffect(() => {
    if (!isPaused) {
      startTimer();
    } else {
      clearTimer();
    }
    return () => clearTimer();
  }, [isPaused]);

  useEffect(() => {
    return () => clearTimer();
  }, []);

  return (
    <div className={styles.heroContainer}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.heroSlide} ${activeSlide === index ? styles.active : ""}`}
        >
          <div
            className={styles.slideBackground}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          ></div>
          <div className={styles.overlay}></div>

          <div className={styles.contentContainer}>
            <div
              className={`${styles.heroContent} ${activeSlide === index ? styles.visible : ""}`}
            >
              <div className={styles.category}>{slide.category}</div>
              <h1 className={styles.headline}>{slide.headline}</h1>

              <div className={styles.ctaContainer}>
                <button className={styles.ctaButton}>
                  {slide.ctaText}
                  <span className={styles.ctaLine}></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.slideControls}>
        <div className={styles.additionalTextContainer}>
          {slides[activeSlide].additionalText.map((text, index) => (
            <div
              key={index}
              className={`${styles.additionalTextItem} ${index === activeSlide ? styles.active : ""}`}
              onClick={() => goToSlide(index)}
            >
              <div
                className={styles.progressLine}
                style={{
                  width: index === activeSlide && !isPaused ? `${progress}%` : "0%",
                }}
              ></div>
              {text}
            </div>
          ))}
        </div>

        <button className={styles.pauseButton} onClick={togglePause}>
          <div className={styles.pauseButtonInner}>
            {isPaused ? <FaPlay /> : <FaPause />}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;

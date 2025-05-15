"use client";

import { useState, useEffect, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import styles from "./Hero.module.css";
import imgSlide1 from "../../images/slide2.jpg";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const slideDuration = 5000; // 5 seconds per slide

  const slides = [
    {
      category: "Safety",
      headline: "Safety at Golden M International",
      ctaText: "",
      additionalText: [],
      imageUrl: imgSlide1,
    },
  ];

  // Function to handle the timer
  const startTimer = () => {
    // Clear any existing timer
    clearTimer();

    // Reset progress
    setProgress(0);

    // Create new timer
    const startTime = Date.now();

    timerRef.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min((elapsedTime / slideDuration) * 100, 100);

      setProgress(newProgress);

      // When we reach 100%, move to next slide
      if (newProgress >= 100) {
        const nextSlide = (activeSlide + 1) % slides.length;
        goToSlide(nextSlide);
      }
    }, 50); // Update every 50ms for smooth progress
  };

  // Clear the timer
  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Go to a specific slide
  const goToSlide = (index) => {
    if (isTransitioning || index === activeSlide) return;

    setIsTransitioning(true);
    setActiveSlide(index);
    setProgress(0);

    // Clear existing timer
    clearTimer();

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);

      // Start timer for the new slide if not paused
      if (!isPaused) {
        startTimer();
      }
    }, 1000);
  };

  // Toggle pause state
  const togglePause = () => {
    setIsPaused((prev) => {
      if (prev) {
        // If we're unpausing, start the timer
        startTimer();
        return false;
      } else {
        // If we're pausing, clear the timer
        clearTimer();
        return true;
      }
    });
  };

  // Start/stop timer based on isPaused state
  useEffect(() => {
    if (!isPaused) {
      startTimer();
    } else {
      clearTimer();
    }

    // Cleanup on unmount
    return () => clearTimer();
  }, [isPaused]);

  // Cleanup on unmount
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
          {slides[0].additionalText.map((text, index) => (
            <div
              key={index}
              className={`${styles.additionalTextItem} ${activeSlide === index ? styles.active : ""}`}
              onClick={() => goToSlide(index)}
            >
              <div
                className={styles.progressLine}
                style={{
                  width:
                    activeSlide === index && !isPaused ? `${progress}%` : "0%",
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

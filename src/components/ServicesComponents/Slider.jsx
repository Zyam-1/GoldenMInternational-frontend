"use client";

import React from "react";

import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
import { ChevronRight } from "lucide-react";
import styles from "./Slider.module.css";

/**
 * Interface for individual slide content
 */

/**
 * Props for the ContentSlider component
 */
/**
 * A responsive content slider/carousel component
 */
const ContentSlider = ({
  slides,
  autoplaySpeed = 5000,
  showDots = true,
  showArrows = false,
  pauseOnHover = true,
  initialSlide = 0,
  height,
  showProgress = false,
  theme,
  translations,
  language,
}) => {
  const [activeSlide, setActiveSlide] = useState(initialSlide);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // Apply custom theme if provided
  useEffect(() => {
    if (theme && sliderRef.current) {
      if (theme.primaryColor) {
        document.documentElement.style.setProperty(
          "--primary-color",
          theme.primaryColor,
        );
      }
      if (theme.accentColor) {
        document.documentElement.style.setProperty(
          "--accent-color",
          theme.accentColor,
        );
      }
      if (theme.textColor) {
        document.documentElement.style.setProperty(
          "--text-color",
          theme.textColor,
        );
      }
      if (theme.lightTextColor) {
        document.documentElement.style.setProperty(
          "--light-text",
          theme.lightTextColor,
        );
      }
      if (theme.backgroundColor) {
        document.documentElement.style.setProperty(
          "--slider-bg",
          theme.backgroundColor,
        );
      }
    }
  }, [theme]);

  // Function to go to a specific slide
  const goToSlide = (index) => {
    // Clear progress animation
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      setProgress(0);
    }

    setActiveSlide((prevSlide) => {
      // Determine direction for animation
      document.documentElement.style.setProperty(
        "--slide-direction",
        index > prevSlide ? "100%" : "-100%",
      );
      return index;
    });

    // Start progress animation for the new slide
    if (showProgress && autoplaySpeed > 0 && !isPaused) {
      startProgressAnimation();
    }
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setActiveSlide((prevSlide) => {
      const newSlide = (prevSlide + 1) % slides.length;
      document.documentElement.style.setProperty("--slide-direction", "100%");
      return newSlide;
    });

    // Reset and restart progress animation
    if (showProgress) {
      setProgress(0);
      if (autoplaySpeed > 0 && !isPaused) {
        startProgressAnimation();
      }
    }
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setActiveSlide((prevSlide) => {
      const newSlide = (prevSlide - 1 + slides.length) % slides.length;
      document.documentElement.style.setProperty("--slide-direction", "-100%");
      return newSlide;
    });

    // Reset and restart progress animation
    if (showProgress) {
      setProgress(0);
      if (autoplaySpeed > 0 && !isPaused) {
        startProgressAnimation();
      }
    }
  };

  // Start progress animation
  const startProgressAnimation = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    const startTime = Date.now();
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / autoplaySpeed) * 100;
      setProgress(Math.min(newProgress, 100));

      if (newProgress >= 100) {
        clearInterval(progressIntervalRef.current);
      }
    }, 16); // ~60fps
  };

  // Handle autoplay
  useEffect(() => {
    // Clear any existing intervals
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    // Start new intervals if autoplay is enabled and not paused
    if (autoplaySpeed > 0 && !isPaused) {
      // Start progress animation
      if (showProgress) {
        startProgressAnimation();
      }

      // Set interval for slide change
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, autoplaySpeed);
    }

    return () => {
      // Clean up intervals on unmount or when dependencies change
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPaused, autoplaySpeed, showProgress, activeSlide]);

  // Pause autoplay when hovering over the slider
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  // Handle touch events for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className={styles.sliderContainer}
      ref={sliderRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={height ? { height } : undefined}
    >
      <div className={styles.sliderTrack}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${activeSlide === index ? styles.activeSlide : ""}`}
            aria-hidden={activeSlide !== index}
            style={{
              backgroundColor: slide.backgroundColor,
              color: slide.textColor,
            }}
          >
            <div className={styles.slideContent}>
              <div className={styles.textContent}>
                {slide.subtitle && (
                  <div className={styles.slideSubtitle}>{slide.subtitle}</div>
                )}
                <h2 className={styles.slideTitle}>{slide.title}</h2>
                <p className={styles.slideDescription}>{slide.description}</p>
                {slide.ctaText && slide.ctaLink && (
                  <a href={slide.ctaLink} className={styles.slideCta}>
                    {slide.ctaText} <ChevronRight className={styles.ctaIcon} />
                  </a>
                )}
              </div>
              {slide.image && (
                <div className={styles.imageContainer}>
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.imageAlt || `${translations[language].slide} ${index + 1}`}
                    width={600}
                    height={400}
                    className={styles.slideImage}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {showProgress && (
        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {showDots && (
        <div className={styles.dotsContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${activeSlide === index ? styles.activeDot : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeSlide === index}
            />
          ))}
        </div>
      )}

      {showArrows && (
        <>
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            &lt;
          </button>
          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            &gt;
          </button>
        </>
      )}

      {/* <div className={styles.slideCounter}>
        {activeSlide + 1}/{slides.length}
      </div> */}
    </div>
  );
};

export default ContentSlider;

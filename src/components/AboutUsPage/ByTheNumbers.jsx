"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ByTheNumbers.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

const ByTheNumbers = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { value: 100, suffix: "%", label: translations[language].employeeOwned },
    { value: 5.2, suffix: "K+", label: translations[language].salariedEmployees },
    { value: 20, suffix: "+", label: translations[language].usOffices },
    {
      value: 8.3,
      prefix: "$",
      suffix: "B+",
      label: translations[language].annualVolume,
    },
    {
      value: 6.7,
      prefix: "$",
      suffix: "M",
      label: translations[language].donatedAmount,
    },
    { value: 1000, suffix: "+", label: translations[language].projectsUnderway },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }, // Trigger when 20% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section className={styles.container} ref={sectionRef}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.sectionTitle}>
          {translations[language].byTheNumbers}
        </h2>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.statValue}>
              {stat.prefix && <span>{stat.prefix}</span>}
              <AnimatedNumber
                value={stat.value}
                isVisible={isVisible}
                duration={2000}
                decimals={stat.value % 1 !== 0 ? 1 : 0}
              />
              {stat.suffix && <span>{stat.suffix}</span>}
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Animated number component
const AnimatedNumber = ({ value, isVisible, duration, decimals = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrameId;

    // Clear any existing animation
    if (counterRef.current) {
      cancelAnimationFrame(counterRef.current);
    }

    // Animation function
    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Calculate the current value based on progress
      const currentValue = Math.min((progress / duration) * value, value);
      setDisplayValue(currentValue);

      // Continue animation until duration is reached
      if (progress < duration) {
        counterRef.current = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    // Start animation
    counterRef.current = requestAnimationFrame(updateCounter);

    // Cleanup
    return () => {
      if (counterRef.current) {
        cancelAnimationFrame(counterRef.current);
      }
    };
  }, [isVisible, value, duration]);

  return <>{displayValue.toFixed(decimals).replace(/\.0+$/, "")}</>;
};

export default ByTheNumbers;

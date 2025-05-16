"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./OurHistory.module.css";
import eventImg1 from "../images/cons1.jpg";
import eventImg2 from "../images/culture1.jpg";
import eventImg3 from "../images/culture2.jpg";
import eventImg4 from "../images/innov1.jpg";
import eventImg5 from "../images/innov2.jpg";
import eventImg6 from "../images/latest1.jpg";
import Navbar from "../components/MainPage/Navbar";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const OurHistory = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState({});
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const timelineRefs = useRef([]);
  const timelineContainerRef = useRef(null);

  // Reset refs array
  timelineRefs.current = [];

  // Add to refs function
  const addToRefs = (el) => {
    if (el && !timelineRefs.current.includes(el)) {
      timelineRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Initial animation for hero section
    setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, hero: true }));
    }, 300);

    // Initial animation for intro section
    setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, intro: true }));
    }, 600);

    // Set up intersection observer for timeline items
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            setIsVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.2 },
    );

    // Observe timeline items
    timelineRefs.current.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      timelineRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const timelineEvents = [
    {
      id: "event1",
      year: "2015",
      title: translations[language].historyEvent1Title,
      description: translations[language].historyEvent1Desc,
      image: eventImg1,
      imageAlt: translations[language].historyEvent1Alt,
      dotColor: "yellow",
      hasMoreInfo: true,
    },
    {
      id: "event2",
      year: "2018",
      title: translations[language].historyEvent2Title,
      description: translations[language].historyEvent2Desc,
      image: eventImg2,
      imageAlt: translations[language].historyEvent2Alt,
      dotColor: "green",
      hasMoreInfo: false,
    },
    {
      id: "event3",
      year: "2022",
      title: translations[language].historyEvent3Title,
      description: translations[language].historyEvent3Desc,
      image: eventImg3,
      imageAlt: translations[language].historyEvent3Alt,
      dotColor: "yellow",
      hasMoreInfo: true,
    },
    {
      id: "event4",
      year: "2024",
      title: translations[language].historyEvent4Title,
      description: translations[language].historyEvent4Desc,
      image: eventImg4,
      imageAlt: translations[language].historyEvent4Alt,
      dotColor: "green",
      hasMoreInfo: false,
    },
    {
      id: "event5",
      year: "Today",
      title: translations[language].historyEvent5Title,
      description: translations[language].historyEvent5Desc,
      image: eventImg6,
      imageAlt: translations[language].historyEvent5Alt,
      dotColor: "green",
      hasMoreInfo: false,
    },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Hero Section */}
        <section
          className={`${styles.heroSection} ${isVisible.hero ? styles.visible : ""}`}
          ref={heroRef}
        >
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{translations[language].ourHistoryTitle}</h1>
            <p className={styles.heroSubtitle}>
              {translations[language].ourHistorySubtitle}
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section
          className={`${styles.introSection} ${isVisible.intro ? styles.visible : ""}`}
          ref={introRef}
        >
          <div className={styles.introContent}>
            <div className={styles.introHeader}>
              <div className={styles.accentLine}></div>
              <h2 className={styles.sectionTitle}>{translations[language].ourStoryTitle}</h2>
            </div>
            <p className={styles.introParagraph}>
              {translations[language].ourStoryParagraph1}
            </p>
            <p className={styles.introParagraph}>
              {translations[language].ourStoryParagraph2}
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className={styles.timelineSection} ref={timelineContainerRef}>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineLine}></div>

            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`${styles.timelineEvent} ${
                  index % 2 === 0 ? styles.eventLeft : styles.eventRight
                } ${isVisible[event.id] ? styles.visible : ""}`}
                ref={addToRefs}
                data-id={event.id}
              >
                {/* Year and marker */}
                <div className={styles.timelineMarker}>
                  <div className={styles.timelineYear}>{event.year}</div>
                  <div
                    className={`${styles.timelineDot} ${event.dotColor === "green" ? styles.green : ""}`}
                  ></div>
                </div>

                {/* Decorative dots */}
                <div className={styles.timelineDecoration}>
                  {index % 2 === 0 ? (
                    <>
                      <div className={styles.decorationDot}></div>
                      <div className={styles.decorationDot}></div>
                      <div className={styles.decorationDot}></div>
                    </>
                  ) : (
                    <>
                      <div className={styles.decorationDot}></div>
                      <div className={styles.decorationDot}></div>
                      <div className={styles.decorationDot}></div>
                      <div className={styles.decorationArrow}>→</div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className={styles.timelineContent}>
                  <div className={styles.timelineImageContainer}>
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.imageAlt}
                      className={styles.timelineImage}
                    />
                  </div>
                  <h3 className={styles.timelineTitle}>{event.title}</h3>
                  <p className={styles.timelineDescription}>
                    {event.description}
                  </p>
                  {event.hasMoreInfo && (
                    <button className={styles.moreInfoButton}>
                      <span className={styles.moreInfoIcon}>+</span> {translations[language].moreInfo}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legacy Section */}
        <section className={styles.legacySection}>
          <div className={styles.legacyContent}>
            <div className={styles.legacyHeader}>
              <div className={styles.accentLine}></div>
              <h2 className={styles.sectionTitle}>{translations[language].ourLegacyTitle}</h2>
            </div>
            <h3 className={styles.legacyTitle}>{translations[language].buildingBetterFuture}</h3>
            <p className={styles.legacyParagraph}>
              {translations[language].ourLegacyText}
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.valuesSection}>
          <div className={styles.valuesContent}>
            <div className={styles.valuesHeader}>
              <h2 className={styles.valuesSectionTitle}>{translations[language].coreValuesTitle}</h2>
              <p className={styles.valuesSubtitle}>
                {translations[language].coreValuesSubtitle}
              </p>
            </div>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{translations[language].honestyTitle}</h3>
                <p className={styles.valueDescription}>
                  {translations[language].honestyDesc}
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{translations[language].integrityTitle}</h3>
                <p className={styles.valueDescription}>
                  {translations[language].integrityDesc}
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{translations[language].respectTitle}</h3>
                <p className={styles.valueDescription}>
                  {translations[language].respectDesc}
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{translations[language].innovationTitleVal}</h3>
                <p className={styles.valueDescription}>
                  {translations[language].innovationDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className={styles.quoteSection}>
          <div className={styles.quoteContent}>
            <blockquote className={styles.quote}>
              {translations[language].historyQuote}
            </blockquote>
            <div className={styles.quoteAuthor}>
              {translations[language].ceoQuote}
            </div>
          </div>
        </section>
      </div>
      <CollaborationSection />
      <Footer />
    </>
  );
};

export default OurHistory;

"use client";

import { useEffect, useRef } from "react";
// import Image from "next/image";
import styles from "./SmartConsHead.module.css";
// import SmartConsPage from "../../pages/SmartConsPage";
import img1 from "../../images/smartCons1.jpg";

const SmartConsHead = ({
  serviceCategory = "BUILDINGS SERVICE",
  serviceTitle = "Smart Construction",
  serviceDescription = "From advanced modular construction methods to innovative and award-winning proprietary smart construction platforms, Golden M International's proactive and entrepreneurial approach to developing cutting-edge technology is shaping the future of construction.",
  overviewTitle = "SERVICE OVERVIEW",
  innovationTitle = "Innovative technologies help to lean processes and drive value to your bottom line.",
  innovationText = "Beyond adopting off-the-shelf technology, Golden M International proactively partners with tech leaders to develop unique programs focused on resolving typical client pain points.",
  innovationLabel = "INNOVATION AT Golden M International",
  imageSrc = img1,
  imageAlt = "Service illustration",
}) => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const innovationTitleRef = useRef(null);
  const innovationTextRef = useRef(null);
  const innovationLabelRef = useRef(null);

  useEffect(() => {
    // Animation for elements with staggered timing
    setTimeout(() => {
      headerRef.current.classList.add(styles.visible);
    }, 300);

    setTimeout(() => {
      titleRef.current.classList.add(styles.visible);
    }, 500);

    setTimeout(() => {
      descriptionRef.current.classList.add(styles.visible);
    }, 700);

    setTimeout(() => {
      imageRef.current.classList.add(styles.visible);
    }, 900);

    setTimeout(() => {
      innovationTitleRef.current.classList.add(styles.visible);
    }, 1100);

    setTimeout(() => {
      innovationTextRef.current.classList.add(styles.visible);
    }, 1300);

    setTimeout(() => {
      innovationLabelRef.current.classList.add(styles.visible);
    }, 1500);
  }, []);

  // Function to handle multi-line titles
  const formatTitle = (title) => {
    return title.split(" ").length > 1 ? (
      <>
        {title.split(" ")[0]}
        <br />
        {title.split(" ").slice(1).join(" ")}
      </>
    ) : (
      title
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div className={styles.accentLine}></div>
          <div className={styles.headerWrapper} ref={headerRef}>
            <h2 className={styles.serviceHeader}>{serviceCategory}</h2>
          </div>

          <div className={styles.titleWrapper} ref={titleRef}>
            <h1 className={styles.serviceTitle}>{formatTitle(serviceTitle)}</h1>
          </div>

          <div className={styles.descriptionWrapper} ref={descriptionRef}>
            <p className={styles.serviceDescription}>{serviceDescription}</p>
          </div>

          <div className={styles.overviewWrapper}>
            <h3 className={styles.overviewHeader}>{overviewTitle}</h3>
            <div className={styles.overviewBar}></div>
          </div>

          <div
            className={styles.innovationTitleWrapper}
            ref={innovationTitleRef}
          >
            <h2 className={styles.innovationTitle}>{innovationTitle}</h2>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.imageWrapper} ref={imageRef}>
            <img
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={800}
              height={600}
              className={styles.serviceImage}
            />
          </div>

          <div className={styles.innovationTextWrapper} ref={innovationTextRef}>
            <p className={styles.innovationText}>{innovationText}</p>
          </div>

          <div
            className={styles.innovationLabelWrapper}
            ref={innovationLabelRef}
          >
            <div className={styles.innovationLabel}>{innovationLabel}</div>
            <div className={styles.innovationLine}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartConsHead;

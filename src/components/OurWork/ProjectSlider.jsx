"use client";

import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import styles from "./ProjectSlider.module.css";

const ProjectSlider = ({ project, isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const modalRef = useRef(null);

  // Generate 5 placeholder images for each project
  const projectImages = [
    project?.image || "/placeholder.svg?height=600&width=800",
    `/placeholder.svg?height=600&width=800&text=Image+2+of+${project?.title}`,
    `/placeholder.svg?height=600&width=800&text=Image+3+of+${project?.title}`,
    `/placeholder.svg?height=600&width=800&text=Image+4+of+${project?.title}`,
    `/placeholder.svg?height=600&width=800&text=Image+5+of+${project?.title}`,
  ];

  useEffect(() => {
    // Reset to first slide when opening a new project
    setCurrentSlide(0);

    // Handle escape key to close modal
    const handleEscKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    // Handle clicking outside to close
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.addEventListener("mousedown", handleOutsideClick);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.removeEventListener("mousedown", handleOutsideClick);
      // Restore scrolling when modal is closed
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, project]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1,
    );
  };

  if (!project || !isOpen) return null;

  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.open : ""}`}>
      <div className={styles.modalContent} ref={modalRef}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className={styles.sliderContainer}>
          <div
            className={styles.slider}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {projectImages.map((image, index) => (
              <div key={index} className={styles.slide}>
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={1200}
                  height={800}
                  className={styles.slideImage}
                />
              </div>
            ))}
          </div>

          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            aria-label="Previous image"
          >
            <ChevronLeft size={30} />
          </button>

          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            aria-label="Next image"
          >
            <ChevronRight size={30} />
          </button>

          <div className={styles.pagination}>
            {projectImages.map((_, index) => (
              <button
                key={index}
                className={`${styles.paginationDot} ${index === currentSlide ? styles.active : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={styles.projectInfo}>
          <h2 className={styles.projectTitle}>{project.title}</h2>
          <p className={styles.projectLocation}>
            <span className={styles.locationLabel}>LOCATION</span>{" "}
            {project.location}
          </p>
          <p className={styles.projectDescription}>
            This is a placeholder description for {project.title}. You can
            replace this text with the actual project description. The
            description should provide details about the project scope,
            challenges, solutions, and outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;

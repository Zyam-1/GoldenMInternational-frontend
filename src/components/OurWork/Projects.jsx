"use client";

import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
import styles from "./Projects.module.css";
import projImg1 from "../../images/showcase1.jpeg";

const Projects = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  // Reset refs array
  projectRefs.current = [];

  // Add to refs function
  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 },
    );

    projectRefs.current.forEach((project) => {
      observer.observe(project);
    });

    return () => {
      projectRefs.current.forEach((project) => {
        if (project) observer.unobserve(project);
      });
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "AFID Geração Alfragide",
      location: "Amadora, Portugal",
      image: projImg1,
    },
    {
      id: 2,
      title:
        "Denver International Airport, United Airlines Concourse B Improvements",
      location: "COLORADO, US",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Industrial Pipeline Facility",
      location: "TEXAS, US",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      title: "River Bridge Construction",
      location: "GEORGIA, US",
      image: "/placeholder.svg?height=600&width=800",
    },
  ];

  return (
    <section className={styles.container} ref={sectionRef}>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={styles.projectCard}
            ref={addToRefs}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className={styles.imageWrapper}>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className={styles.projectImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.projectLocation}>
                <span className={styles.locationLabel}>LOCATION</span>{" "}
                {project.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

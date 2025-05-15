"use client";

import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
import {
  ChevronRight,
  Briefcase,
  Users,
  TrendingUp,
  Award,
  Upload,
} from "lucide-react";
import styles from "./Careers.module.css";
import teamImage from "../../images/culture1.jpg";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

const Careers = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null,
  });

  const [resumeName, setResumeName] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const positionsRef = useRef(null);
  const formRef = useRef(null);
  const benefitRefs = useRef([]);

  // Reset refs array
  benefitRefs.current = [];

  // Add to refs function
  const addToBenefitRefs = (el) => {
    if (el && !benefitRefs.current.includes(el)) {
      benefitRefs.current.push(el);
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

    if (heroRef.current) observer.observe(heroRef.current);
    if (benefitsRef.current) observer.observe(benefitsRef.current);
    if (positionsRef.current) observer.observe(positionsRef.current);
    if (formRef.current) observer.observe(formRef.current);

    benefitRefs.current.forEach((benefit) => {
      observer.observe(benefit);
    });

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (benefitsRef.current) observer.unobserve(benefitsRef.current);
      if (positionsRef.current) observer.unobserve(positionsRef.current);
      if (formRef.current) observer.unobserve(formRef.current);

      benefitRefs.current.forEach((benefit) => {
        if (benefit) observer.unobserve(benefit);
      });
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        resume: file,
      });
      setResumeName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // In a real application, you would send this data to your server
  };

  const positions = [
    {
      title: translations[language].seniorProjectManager,
      location: translations[language].lisbon,
      type: translations[language].fullTime,
    },
    {
      title: translations[language].civilEngineer,
      location: translations[language].porto,
      type: translations[language].fullTime,
    },
    {
      title: translations[language].architecturalDesigner,
      location: translations[language].faro,
      type: translations[language].fullTime,
    },
    {
      title: translations[language].constructionSupervisor,
      location: translations[language].braga,
      type: translations[language].fullTime,
    },
  ];

  const benefits = [
    {
      icon: <Users className={styles.benefitIcon} />,
      title: translations[language].collaborativeCulture,
      description: translations[language].collaborativeCultureDesc,
    },
    {
      icon: <TrendingUp className={styles.benefitIcon} />,
      title: translations[language].careerGrowth,
      description: translations[language].careerGrowthDesc,
    },
    {
      icon: <Award className={styles.benefitIcon} />,
      title: translations[language].competitiveBenefits,
      description: translations[language].competitiveBenefitsDesc,
    },
    {
      icon: <Briefcase className={styles.benefitIcon} />,
      title: translations[language].impactfulProjects,
      description: translations[language].impactfulProjectsDesc,
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{translations[language].buildCareer}</h1>
          <p className={styles.heroText}>{translations[language].careerHeroText}</p>
          <a href="#application-form" className={styles.heroButton}>
            {translations[language].applyNow} <ChevronRight size={18} />
          </a>
        </div>
        <div className={styles.heroImageWrapper}>
          <img
            src={teamImage}
            alt={translations[language].buildCareer}
            width={800}
            height={600}
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits} ref={benefitsRef}>
        <h2 className={styles.sectionTitle}>{translations[language].whyWorkWithUs}</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={styles.benefitCard}
              ref={addToBenefitRefs}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={styles.benefitIconWrapper}>{benefit.icon}</div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions Section */}
      <section className={styles.positions} ref={positionsRef}>
        <h2 className={styles.sectionTitle}>{translations[language].openPositions}</h2>
        <div className={styles.positionsGrid}>
          {positions.map((position, index) => (
            <div key={index} className={styles.positionCard}>
              <h3 className={styles.positionTitle}>{position.title}</h3>
              <div className={styles.positionMeta}>
                <span className={styles.positionLocation}>{position.location}</span>
                <span className={styles.positionDivider}>•</span>
                <span className={styles.positionType}>{position.type}</span>
              </div>
              <a href="#application-form" className={styles.positionLink}>
                {translations[language].applyNow} <ChevronRight size={16} />
              </a>
            </div>
          ))}
        </div>
        <div className={styles.positionsFooter}>
          <p>{translations[language].noPositionFit}</p>
          <a href="#application-form" className={styles.generalApplication}>
            {translations[language].submitGeneral}
          </a>
        </div>
      </section>

      {/* Application Form Section */}
      <section className={styles.formSection} ref={formRef} id="application-form">
        <h2 className={styles.sectionTitle}>{translations[language].joinOurTeam}</h2>
        <p className={styles.formIntro}>{translations[language].formIntroText}</p>

        {formSubmitted ? (
          <div className={styles.formSuccess}>
            <div className={styles.formSuccessIcon}>✓</div>
            <h3 className={styles.formSuccessTitle}>
              {translations[language].applicationSubmitted}
            </h3>
            <p className={styles.formSuccessText}>
              {translations[language].thankYouMessage}
            </p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName" className={styles.formLabel}>
                  {translations[language].firstName}
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={styles.formInput}
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastName" className={styles.formLabel}>
                  {translations[language].lastName}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={styles.formInput}
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  {translations[language].email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>
                  {translations[language].phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={styles.formInput}
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="position" className={styles.formLabel}>
                  {translations[language].positionInterest}
                </label>
                <select
                  id="position"
                  name="position"
                  className={styles.formSelect}
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">{translations[language].selectPosition}</option>
                  <option value="Senior Project Manager">
                    {translations[language].seniorProjectManager}
                  </option>
                  <option value="Civil Engineer">
                    {translations[language].civilEngineer}
                  </option>
                  <option value="Architectural Designer">
                    {translations[language].architecturalDesigner}
                  </option>
                  <option value="Construction Site Supervisor">
                    {translations[language].constructionSupervisor}
                  </option>
                  <option value="General Application">
                    {translations[language].generalApplication}
                  </option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="experience" className={styles.formLabel}>
                  {translations[language].yearsExperience}
                </label>
                <select
                  id="experience"
                  name="experience"
                  className={styles.formSelect}
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">{translations[language].selectExperience}</option>
                  <option value="0-2 years">{translations[language].zeroToTwo}</option>
                  <option value="3-5 years">{translations[language].threeToFive}</option>
                  <option value="6-10 years">{translations[language].sixToTen}</option>
                  <option value="10+ years">{translations[language].tenPlus}</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                {translations[language].whyJoinUs}
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.formTextarea}
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
              ></textarea>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>{translations[language].resumeCV}</label>
              <div className={styles.fileUpload}>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className={styles.fileInput}
                  required
                />
                <div className={styles.fileUploadButton}>
                  <Upload size={18} />
                  <span>{translations[language].uploadResume}</span>
                </div>
                {resumeName && (
                  <div className={styles.fileName}>{resumeName}</div>
                )}
              </div>
              <p className={styles.fileHint}>{translations[language].acceptedFormats}</p>
            </div>

            <button type="submit" className={styles.submitButton}>
              {translations[language].submitApplication}
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default Careers;

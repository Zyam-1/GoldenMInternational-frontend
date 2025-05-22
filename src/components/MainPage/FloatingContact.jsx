"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import styles from "./FloatingContact.module.css";

const FloatingContact = ({
  whatsappNumber = "+351920028289", // Default WhatsApp number
  email = "contact@example.com", // Default email
  whatsappMessage = "Hello, I'd like to inquire about your services.", // Default WhatsApp message
  emailSubject = "Inquiry from Website", // Default email subject
  showDelay = 1000, // Delay before showing the component (ms)
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the component after the specified delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, showDelay);

    return () => clearTimeout(timer);
  }, [showDelay]);

  const handleWhatsAppClick = () => {
    // Format the WhatsApp number and message for the URL
    // const formattedNumber = whatsappNumber.replace(/[^0-9]/g, "");
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  const handleEmailClick = () => {
    // Format the email subject for the URL
    const encodedSubject = encodeURIComponent(emailSubject);
    window.open(`mailto:${email}?subject=${encodedSubject}`, "_blank");
  };

  return (
    <div
      className={`${styles.floatingContactContainer} ${isVisible ? styles.visible : ""}`}
      aria-label="Contact options"
    >
      <button
        className={`${styles.contactButton} ${styles.whatsappButton}`}
        onClick={handleWhatsAppClick}
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp className={styles.icon} />
        <span className={styles.tooltip}>WhatsApp</span>
      </button>

      <button
        className={`${styles.contactButton} ${styles.emailButton}`}
        onClick={handleEmailClick}
        aria-label="Contact via Email"
      >
        <FaEnvelope className={styles.icon} />
        <span className={styles.tooltip}>Email</span>
      </button>
    </div>
  );
};

export default FloatingContact;

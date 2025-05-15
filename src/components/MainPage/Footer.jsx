import React from "react";
// import { Separator } from "@/components/ui/separator";
import { Instagram, Twitter, Youtube, Linkedin, Facebook } from "lucide-react";
import styles from "./Footer.module.css";
import logoImg from "../../images/GoldenMLogo.png";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <a href="/contact" className={styles.footerLink}>
                {translations[language].contactUs}
              </a>
            </div>

            <div className={styles.linkColumn}>
              <a href="/ethics" className={styles.footerLink}>
                {translations[language].ethicsCode}
              </a>
            </div>

            <div className={styles.linkColumn}>
              <a href="/hourly-employee" className={styles.footerLink}>
                {translations[language].hourlyEmployee}
              </a>
            </div>

            <div className={styles.linkColumn}>
              <a href="/privacy-policy" className={styles.footerLink}>
                {translations[language].privacyPolicy}
              </a>
            </div>

            <div className={styles.linkColumn}>
              <a href="/tools" className={styles.footerLink}>
                {translations[language].toolsResources}
              </a>
            </div>
          </div>

          <div className={styles.socialIcons}>
            <a
              href="https://instagram.com"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <Instagram size={20} color="darkgreen" />
            </a>
            <a
              href="https://twitter.com"
              className={styles.socialLink}
              aria-label="Twitter"
            >
              <Twitter size={20} color="darkgreen" />
            </a>
            <a
              href="https://youtube.com"
              className={styles.socialLink}
              aria-label="YouTube"
            >
              <Youtube size={20} color="darkgreen" />
            </a>
            <a
              href="https://linkedin.com"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} color="darkgreen" />
            </a>
            <a
              href="https://facebook.com"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <Facebook size={20} color="darkgreen" />
            </a>
          </div>
        </div>

        {/* <Separator className={styles.separator} /> */}

        <div className={styles.bottomSection}>
          <div className={styles.logoContainer}>
            <img
              src={logoImg}
              alt={translations[language].companyLogo}
              className={styles.logo}
            />
          </div>

          <div className={styles.copyrightInfo}>
            <p>{translations[language].copyright}</p>
            <p>{translations[language].allRightsReserved}</p>
          </div>
        </div>

        <div className={styles.privacyPolicyLink}>
          <a href={translations[language].privacyPolicyLink}>
            {translations[language].privacyPolicyLink}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

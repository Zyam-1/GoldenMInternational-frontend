"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import logoImg from "../../images/GoldenMLogo.png";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [sectorsDropdownOpen, setSectorsDropdownOpen] = useState(false);
  const [whoWeAreDropdownOpen, setWhoWeAreDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeServiceCategory, setActiveServiceCategory] =
    useState("buildings");
  const navRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const whoWeAreDropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target) &&
        !event.target.closest(`.${styles.servicesLink}`)
      ) {
        setServicesDropdownOpen(false);
      }

      if (
        whoWeAreDropdownRef.current &&
        !whoWeAreDropdownRef.current.contains(event.target) &&
        !event.target.closest(`.${styles.whoWeAreLink}`)
      ) {
        setWhoWeAreDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Close dropdowns when toggling menu
    setServicesDropdownOpen(false);
    setSectorsDropdownOpen(false);
    setWhoWeAreDropdownOpen(false);
  };

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setServicesDropdownOpen(!servicesDropdownOpen);
    // Close other dropdowns
    setSectorsDropdownOpen(false);
    setWhoWeAreDropdownOpen(false);
  };

  const toggleSectorsDropdown = (e) => {
    e.preventDefault();
    setSectorsDropdownOpen(!sectorsDropdownOpen);
    // Close other dropdowns
    setServicesDropdownOpen(false);
    setWhoWeAreDropdownOpen(false);
  };

  const toggleWhoWeAreDropdown = (e) => {
    e.preventDefault();
    setWhoWeAreDropdownOpen(!whoWeAreDropdownOpen);
    // Close other dropdowns
    setServicesDropdownOpen(false);
    setSectorsDropdownOpen(false);
  };

  const handleServiceCategoryClick = (category, e) => {
    e.preventDefault();
    setActiveServiceCategory(category);
  };

  const handleLanguageChange = (e) => {
    toggleLanguage(e.target.value);
  };

  // Service category content with translations
  const getServiceCategories = (lang) => ({
    buildings: {
      title: translations[lang].buildings,
      description: translations[lang].buildingsDescription,
      services: [
        {
          column: 1,
          items: [
            {
              name: translations[lang].constructabilityBudget,
              link: "/services/constructability-and-budget-control",
            },
            {
              name: translations[lang].smartConstruction,
              link: "/services/smart-construction",
            },
            {
              name: translations[lang].prefabModular,
              link: "/services/prefabrication",
            },
            {
              name: translations[lang].sustainableConstruction,
              link: "/services/sustainable",
            },
          ],
        },
        {
          column: 2,
          items: [
            { 
              name: translations[lang].constructionServices, 
              link: "/services/construction" 
            },
            { 
              name: translations[lang].emergencyResponse, 
              link: "/services/emergency" 
            },
            {
              name: translations[lang].selfPerform,
              link: "/services/self-perform",
            },
          ],
        },
        {
          column: 3,
          items: [
            { 
              name: translations[lang].deliveryMethods, 
              link: "/services/delivery" 
            },
            {
              name: translations[lang].preconstructionServices,
              link: "/services/preconstruction",
            },
          ],
        },
      ],
    },
    civil: {
      title: translations[lang].civil,
      description: translations[lang].civilDescription,
      services: [
        {
          column: 1,
          items: [
            { 
              name: translations[lang].constructionServices, 
              link: "/services/construction" 
            },
            {
              name: translations[lang].prefabModular,
              link: "/services/prefabrication",
            },
            {
              name: translations[lang].sustainableConstruction,
              link: "/services/sustainable",
            },
          ],
        },
        {
          column: 2,
          items: [
            { 
              name: translations[lang].deliveryMethods, 
              link: "/services/delivery" 
            },
            {
              name: translations[lang].selfPerform,
              link: "/services/self-perform",
            },
          ],
        },
        {
          column: 3,
          items: [
            {
              name: translations[lang].emergencyResponse,
              link: "/services/emergency",
            },
          ],
        },
      ],
    },
    industrial: {
      title: translations[lang].industrial,
      description: translations[lang].industrialDescription,
      services: [
        {
          column: 1,
          items: [
            {
              name: translations[lang].industrialConstructionServices,
              link: "/services/Industrial-Construction-Services",
            },
            {
              name: translations[lang].industrialConstructionEngineering,
              link: "/services/industrial-construction-engineering",
            },
            {
              name: translations[lang].industrialModular,
              link: "/services/industrial-module-assembly",
            },
          ],
        },
        {
          column: 2,
          items: [
            {
              name: translations[lang].industrialSiteExecution,
              link: "/services/Industrial-Site-Execution",
            },
            {
              name: translations[lang].peopleTeams,
              link: "/services/People-Teams-Craft-Labor-Solutions",
            },
          ],
        },
        {
          column: 3,
          items: [
            {
              name: translations[lang].maintenance,
              link: "/services/maintenance-and-turnaround",
            },
          ],
        },
      ],
    },
  });

  // Who We Are content with translations
  const getWhoWeAreItems = (lang) => [
    {
      title: translations[lang].aboutUs,
      description: translations[lang].aboutUsDescription,
      link: "/who-we-are/about",
    },
    {
      title: translations[lang].ourHistory,
      description: translations[lang].historyDescription,
      link: "/who-we-are/history",
    },
    {
      title: translations[lang].ourLeadership,
      description: translations[lang].leadershipDescription,
      link: "/who-we-are/leadership",
    },
    {
      title: translations[lang].innovation,
      description: translations[lang].innovationDescription,
      link: "/who-we-are/innovation",
    },
    {
      title: translations[lang].safety,
      description: translations[lang].safetyDescription,
      link: "/who-we-are/safety",
    },
  ];

  const serviceCategories = getServiceCategories(language);
  const whoWeAreItems = getWhoWeAreItems(language);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.navLeft}>
          <a href="/" className={styles.logoLink}>
            <img style = {{width: "80px", height: "80px"}} src={logoImg} alt={translations[language].companyLogo} className={styles.logo} />
          </a>
        </div>

        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}>
            <span
              className={`${styles.hamburgerLine} ${menuOpen ? styles.active : ""}`}
            ></span>
          </span>
        </button>

        <nav
          className={`${styles.nav} ${menuOpen ? styles.show : ""}`}
          ref={navRef}
        >
          <a
            href="#"
            className={`${styles.link} ${styles.dropdownTrigger} ${styles.servicesLink} ${
              servicesDropdownOpen ? styles.active : ""
            }`}
            onClick={toggleServicesDropdown}
          >
            {translations[language].services} <FiChevronDown className={styles.dropdownIcon} />
          </a>

          <a href="/our-work" className={styles.link}>
            {translations[language].ourWork}
          </a>

          <a href="/our-location" className={styles.link}>
            {translations[language].locations}
          </a>

          <a
            href="#"
            className={`${styles.link} ${styles.dropdownTrigger} ${styles.whoWeAreLink} ${
              whoWeAreDropdownOpen ? styles.active : ""
            }`}
            onClick={toggleWhoWeAreDropdown}
          >
            {translations[language].whoWeAre} <FiChevronDown className={styles.dropdownIcon} />
          </a>

          <a href="/insights" className={styles.link}>
            {translations[language].insights}
          </a>

          <a href="/newsroom" className={styles.link}>
            {translations[language].newsroom}
          </a>

          <a href="/careers" className={styles.link}>
            {translations[language].careers}
          </a>

          <div className={styles.navRight}>
            <select 
              className={styles.languageMenu} 
              value={language}
              onChange={handleLanguageChange}
              aria-label={translations[language].languageSelector}
            >
              <option value="pt">Português</option>
              <option value="en">English</option>
            </select>

            <button className={styles.searchButton} aria-label={translations[language].searchButton}>
              <FiSearch className={styles.searchIcon} />
            </button>
          </div>
        </nav>
      </header>

      {/* Services Dropdown */}
      {servicesDropdownOpen && (
        <div
          className={styles.dropdownMenuFullScreen}
          ref={servicesDropdownRef}
        >
          <div className={styles.dropdownContainer}>
            <div className={styles.dropdownSidebar}>
              <h3 className={styles.dropdownSectionTitle}>
                {translations[language].servicesTitle}
              </h3>
              <ul className={styles.sidebarList}>
                <li
                  className={
                    activeServiceCategory === "buildings"
                      ? styles.sidebarItemActive
                      : styles.sidebarItem
                  }
                >
                  <a
                    href="#"
                    onClick={(e) => handleServiceCategoryClick("buildings", e)}
                    className={
                      activeServiceCategory === "buildings" ? styles.active : ""
                    }
                  >
                    {translations[language].buildings}
                    <span className={styles.chevronRight}></span>
                  </a>
                </li>
                <li
                  className={
                    activeServiceCategory === "civil"
                      ? styles.sidebarItemActive
                      : styles.sidebarItem
                  }
                >
                  <a
                    href="#"
                    onClick={(e) => handleServiceCategoryClick("civil", e)}
                    className={
                      activeServiceCategory === "civil" ? styles.active : ""
                    }
                  >
                    {translations[language].civil}
                    <span className={styles.chevronRight}></span>
                  </a>
                </li>
                <li
                  className={
                    activeServiceCategory === "industrial"
                      ? styles.sidebarItemActive
                      : styles.sidebarItem
                  }
                >
                  <a
                    href="#"
                    onClick={(e) => handleServiceCategoryClick("industrial", e)}
                    className={
                      activeServiceCategory === "industrial"
                        ? styles.active
                        : ""
                    }
                  >
                    {translations[language].industrial}
                    <span className={styles.chevronRight}></span>
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.dropdownContent}>
              <div className={styles.dropdownHeader}>
                <h2 className={styles.dropdownTitle}>
                  {serviceCategories[activeServiceCategory].title}
                </h2>
                <p className={styles.dropdownDescription}>
                  {serviceCategories[activeServiceCategory].description}
                </p>
              </div>

              <div className={styles.servicesGrid}>
                {serviceCategories[activeServiceCategory].services.map(
                  (column, columnIndex) => (
                    <div key={columnIndex} className={styles.servicesColumn}>
                      {column.items.map((service, serviceIndex) => (
                        <a
                          key={serviceIndex}
                          href={service.link}
                          className={styles.serviceLink}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Who We Are Dropdown */}
      {whoWeAreDropdownOpen && (
        <div
          className={styles.dropdownMenuFullScreen}
          ref={whoWeAreDropdownRef}
        >
          <div className={styles.whoWeAreContainer}>
            <h3 className={styles.whoWeAreHeader}>WHO WE ARE</h3>
            <div className={styles.whoWeAreGrid}>
              {whoWeAreItems.map((item, index) => (
                <div key={index} className={styles.whoWeAreItem}>
                  <a className={styles.whoWeAreItemTitle} href={item.link}>
                    {item.title}
                  </a>
                  <p className={styles.whoWeAreItemDescription}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div className={styles.mobileOverlay} onClick={toggleMenu}></div>
      )}
    </>
  );
};

export default Navbar;

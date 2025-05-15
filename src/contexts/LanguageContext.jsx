import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Try to get the language from localStorage, default to 'pt' if not found
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'pt';
  });

  const toggleLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    // Save the language preference to localStorage
    localStorage.setItem('language', newLanguage);
    // Force a re-render of the entire app
    window.dispatchEvent(new Event('languageChange'));
  };

  // Listen for language changes across the app
  useEffect(() => {
    const handleLanguageChange = () => {
      // This will trigger a re-render of all components using the language context
      setLanguage(prevLanguage => {
        const currentLanguage = localStorage.getItem('language') || prevLanguage;
        return currentLanguage;
      });
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
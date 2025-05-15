import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import ConsEff2 from "../components/BudgetComp/ConsEff2";
import ConsHeader from "../components/BudgetComp/ConsHeader";
import ConstructionEff from "../components/BudgetComp/ConstructionEff";
import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import Navbar from "../components/MainPage/Navbar";

const BudgetConsPage = () => {
  const { language } = useLanguage();
  
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <ConsHeader 
          sectionTitle={translations[language].buildingServices }
          mainHeading={translations[language].constructabilityBudget }
          description={translations[language].constructabilityBudgetDesc }
        />
        <ConstructionEff />
        <ConsEff2 />

        <CollaborationSection />
        <Footer />
      </div>
    </div>
  );
};

export default BudgetConsPage;

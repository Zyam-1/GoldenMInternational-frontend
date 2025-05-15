// import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/Main";
import AboutUsPage from "./pages/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OurWork from "./pages/OurWork";
import OurLocation from "./pages/OurLocation";
// import Insight from "./components/Insights/Insights";
import InsightPage from "./pages/InsightPage";
import NewsRoom from "./pages/NewsRoom";
import CareerPage from "./pages/CareerPage";
import BudgetConsPage from "./pages/BudgetConsPage";
import PreFabPage from "./pages/PreFabPage";
import SmartConsPage from "./pages/SmartConsPage";
import SustainSer from "./pages/SustainSer";
import ConstructionEff from "./components/BudgetComp/ConstructionEff";
import Construction from "./pages/Construction";
import Emergency from "./pages/Emergency";
import SelfPerform from "./pages/SelfPerform";
import DeliveryPage from "./pages/DeliveryPage";
import PreconsPage from "./pages/PreconsPage";
import IndustrialConSer from "./pages/IndustrialConSer";
import IndustrialEngPage from "./pages/IndustrialEngPage";
import IndustrialModPage from "./pages/IndustrialModPage";
import IndustrialExPage from "./pages/IndustrialExPage";
import IndustrialPeoplePage from "./pages/IndustrialPeoplePage";
import IndustrialMaint from "./pages/IndustrialMaint";
import OurHistory from "./pages/OurHistory";
import OurLeaders from "./pages/OurLeaders";
import InnovPage from "./pages/InnovPage";
import SafetyPage from "./pages/SafetyPage";
import { LanguageProvider } from "./contexts/LanguageContext";

// const heroImage1 = "https://via.placeholder.com/1356x648";
// const heroImage2 = "https://via.placeholder.com/1356x648";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />}></Route>
          <Route path="/who-we-are/about" exact element={<AboutUsPage />}></Route>
          <Route path="/our-work" exact element={<OurWork />}></Route>
          <Route path="/insights" exact element={<InsightPage />}></Route>
          <Route path="/our-location" exact element={<OurLocation />}></Route>
          <Route path="/newsroom" exact element={<NewsRoom />}></Route>
          <Route path="/careers" exact element={<CareerPage />}></Route>
          <Route
            path="/services/constructability-and-budget-control"
            exact
            element={<BudgetConsPage />}
          ></Route>
          <Route
            path="/services/smart-construction"
            exact
            element={<SmartConsPage />}
          ></Route>
          <Route
            path="/services/prefabrication"
            exact
            element={<PreFabPage />}
          ></Route>
          <Route
            path="/services/sustainable"
            exact
            element={<SustainSer />}
          ></Route>
          <Route
            path="/services/construction"
            exact
            element={<Construction />}
          ></Route>
          <Route path="/services/emergency" exact element={<Emergency />}></Route>
          <Route
            path="/services/self-perform"
            exact
            element={<SelfPerform />}
          ></Route>
          <Route
            path="services/delivery"
            exact
            element={<DeliveryPage />}
          ></Route>
          <Route
            path="services/preconstruction"
            exact
            element={<PreconsPage />}
          ></Route>
          <Route
            path="services/Industrial-Construction-Services"
            exact
            element={<IndustrialConSer />}
          ></Route>
          <Route
            path="services/industrial-construction-engineering"
            exact
            element={<IndustrialEngPage />}
          ></Route>

          <Route
            path="services/industrial-module-assembly"
            exact
            element={<IndustrialModPage />}
          ></Route>

          <Route
            path="services/Industrial-Site-Execution"
            exact
            element={<IndustrialExPage />}
          ></Route>

          <Route
            path="services/People-Teams-Craft-Labor-Solutions"
            exact
            element={<IndustrialPeoplePage />}
          ></Route>
          <Route
            path="services/maintenance-and-turnaround"
            exact
            element={<IndustrialMaint />}
          ></Route>

          <Route
            path="/who-we-are/leadership"
            exact
            element={<OurLeaders />}
          ></Route>
                    <Route
            path="/who-we-are/history"
            exact
            element={<OurHistory />}
          ></Route>
          <Route
            path="/who-we-are/innovation"
            exact
            element={<InnovPage />}
          ></Route>
          <Route path="/who-we-are/safety" exact element={<SafetyPage />}></Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;

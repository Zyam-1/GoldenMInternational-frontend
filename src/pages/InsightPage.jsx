import CollaborationSection from "../components/MainPage/CollaborationSection";
import Footer from "../components/MainPage/Footer";
import ContentTabs from "../components/Insights/ContentTabs";
import Insight from "../components/Insights/Insights";
import Navbar from "../components/MainPage/Navbar";

const InsightPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Insight />
        <ContentTabs />
        <CollaborationSection />
        <Footer />
      </div>
    </div>
  );
};

export default InsightPage;

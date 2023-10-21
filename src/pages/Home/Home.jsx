import Footer from "../../components/Footer/Footer";
import Header from "./../../components/Header/Header";
import Brands from "../../components/Brands/Brands";
import Testimonials from "../../components/Testimonials/Testimonials";
import CarBuyingGuides from "../../components/CarBuyingGuides/CarBuyingGuides";

const Home = () => {
  return (
    <div>
      <Header />
      <Brands />
      <CarBuyingGuides />
      <Testimonials />
      <div className="bg-slate-700">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

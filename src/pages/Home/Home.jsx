import Footer from "../../components/Footer/Footer";
import Header from "./../../components/Header/Header";
import Brands from "../../components/Brands/Brands";
import Testimonials from "../../components/Testimonials/Testimonials";
import CarBuyingGuides from "../../components/CarBuyingGuides/CarBuyingGuides";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <div data-aos="fade-down">
        <Brands />
      </div>
      <div data-aos="fade-up-right">
        <CarBuyingGuides />
      </div>
      <div data-aos="fade-up-left">
        <Testimonials />
      </div>
      <div className="bg-slate-700">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

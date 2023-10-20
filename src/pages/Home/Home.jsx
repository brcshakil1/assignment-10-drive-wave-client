import Footer from "../../components/Footer/Footer";
import Header from "./../../components/Header/Header";
import Brands from "../../components/Brands/Brands";
import Testimonials from "../../components/Testimonials/Testimonials";
import BuyingTips from "../BuyingTips/BuyingTips";

const Home = () => {
  return (
    <div>
      <Header />
      <Brands />
      <BuyingTips />
      <Testimonials />
      <div className="bg-slate-700">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

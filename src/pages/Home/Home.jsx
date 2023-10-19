import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "./../../components/Header/Header";
import Brands from "../../components/Brands/Brands";

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Brands />
      <Footer />
    </div>
  );
};

export default Home;

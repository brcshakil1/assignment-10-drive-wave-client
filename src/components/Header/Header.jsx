import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import PropTypes from "prop-types";

const Header = ({ isDark, setIsDark }) => {
  return (
    <div>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Banner />
    </div>
  );
};

Header.propTypes = {
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func,
};

export default Header;

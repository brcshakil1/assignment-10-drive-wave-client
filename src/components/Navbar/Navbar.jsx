import user from "../../assets/user/user.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCloudMoonFill, BsCloudSunFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = ({ isDark, setIsDark }) => {
  const handleDarkMode = () => {
    setIsDark(!isDark);
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/brands">Brans</NavLink>
      </li>
    </>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">DriveWave</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-4">
            <div onClick={handleDarkMode} className="">
              <BsCloudMoonFill
                className={`text-2xl ${isDark ? "block" : "hidden"}`}
              />
              <BsCloudSunFill
                className={`text-2xl ${isDark ? "hidden" : "block"}`}
              />
            </div>
            <div className="cursor-pointer">
              <AiOutlineShoppingCart className="text-2xl" />
            </div>
            <div>
              <img className="w-8 cursor-pointer" src={user} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func,
};

export default Navbar;

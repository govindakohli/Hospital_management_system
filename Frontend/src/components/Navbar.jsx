import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../main";
import { LuLogIn } from "react-icons/lu";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaCalendarAlt,
  FaPhoneAlt,
  FaHeadphonesAlt,
} from "react-icons/fa";
import "./Navbar.css";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const gotoLogin = () => {
    closeMobileMenu();
    navigateTo("/login");
  };

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/user/patient/logout", {
        withCredentials: true,
      });

      toast.success(res.data.message);
      setIsAuthenticated(false);
      closeMobileMenu();
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
      setIsAuthenticated(false); // Ensure state is reset on failure
      closeMobileMenu();
      navigateTo("/login");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            CITY HOSPITAL
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* Navigation Links */}
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <FaHome className="navbar-icon" />
              <span className="nav-link">HOME</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/appointment" className="nav-links" onClick={closeMobileMenu}>
              <FaCalendarAlt className="navbar-icon" />
              <span className="nav-link">APPOINTMENT</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              <FaPhoneAlt className="navbar-icon" />
              <span className="nav-link">CONTACT</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              <FaInfoCircle className="navbar-icon" />
              <span className="nav-link">ABOUT</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/help" className="nav-links" onClick={closeMobileMenu}>
              <FaHeadphonesAlt className="navbar-icon" />
              <span className="nav-link">HELP</span>
            </Link>
          </li>

          {/* Login/Logout Button */}
          <li className="nav-item">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="login-logout-btn">
                <pre>     <LuLogIn />     </pre>
                
              </button>
            ) : (
              <button onClick={gotoLogin} className="login-logout-btn">
                <pre>     <LuLogIn />     </pre>
                
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
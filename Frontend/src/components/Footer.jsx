import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>About Us</h3>
        <p>
          We provide exceptional healthcare with a commitment to compassion and
          innovation. Our hospital is equipped with state-of-the-art facilities
          and a dedicated team of professionals.
        </p>
      </div>
      <div className="footer-column">
        <h3>Contact Information</h3>
        <p>
          <strong>Address:</strong> SCO 1234 Sector-16 , Chandigarh, India
        </p>
        <p>
          <strong>Phone:</strong> +91 0011223344
        </p>
        <p>
          <strong>Email:</strong> cityhospital@hospital.com
        </p>
      </div>
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li>
          <Link to="/" >Home </Link>
          </li>
          <li>
          <Link to="/appointment">Appointments </Link>
          </li>
          <li>
          <Link to="/contact">Contact Us</Link>
          </li>
          <li>
          <Link to="/about">About Us</Link>
          </li>
          <li>
          <Link to="/help">Help & Support</Link>
          </li>
          <li>
          <Link to="/login">Signin/Signup</Link>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="blank" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://x.com/" target="blank" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/"  target="blank"  aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com" target="blank" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

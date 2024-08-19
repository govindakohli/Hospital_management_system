import React, { useState } from 'react';
import "./Contact.css"
import axios from "axios";
import {toast} from "react-toastify"
import { FaPhoneAlt, FaEnvelope, FaUser, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';


function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // console.log(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://hospital-management-system-h9yz.onrender.com/api/v1/message/send",
        {
          firstName,
          lastName,
          email,
          phone,
          message,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res)=>{
        toast.success(res.data.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-intro">
          We are here to assist you. Please fill out the form below and our team will get back to you promptly. 
          For more details, you can also visit us at our location or reach out through our social media channels.
        </p>

        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Our Location</h3>
            <p>SCO 1234 Sector-16 , Chandigarh, India</p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <h3>Contact Number</h3>
            <p>+91 0011223344</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <h3>Email Us</h3>
            <p> cityhospital@hospital.com</p>
          </div>
          <div className="info-item">
            <FaClock className="info-icon" />
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9 AM - 5 PM<br/>Saturday: 10 AM - 3 PM<br/>Sunday: Closed</p>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              {/* <FaUser className="form-icon" /> */}
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              
              />
            </div>
            <div className="form-group">
              {/* <FaUser className="form-icon" /> */}
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              {/* <FaEnvelope className="form-icon" /> */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              {/* <FaPhoneAlt className="form-icon" /> */}
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="7"
              />
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        <div className="social-media">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Contact

import React, { useState } from "react";
import "./MessageForm.css";
import axios from "axios";
import {toast} from "react-toastify"
// import { FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";

function MessageForm() {
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
          We are here to assist you. Please fill out the form below and our team
          will get back to you promptly.
        </p>

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
                type="number"
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
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default MessageForm;

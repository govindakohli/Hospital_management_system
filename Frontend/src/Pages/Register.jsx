import axios from "axios";
import "./Register.css";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import Context from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://hospital-management-system-h9yz.onrender.com/api/v1/user/patient/registered",
        { firstName, lastName, email, phone, aadharNumber, dob, gender, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setAadharNumber("");
      setDob("");
      setGender("");
      setPassword("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed.");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div className="register-page">
      <div className="register-container">
        <h1 className="register-heading">CITY HOSPITAL</h1>
        <h2 className="register-subheading">New Pateint Registeration Form</h2>
        <form onSubmit={handleRegistration} className="register-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Aadhar Number"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="form-group">
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHERS">Other</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
         
          <div className="form-group">
            <button type="submit" className="register-btn">Register</button>
          </div>
          <div className="login-link">
            <p>Already Registered? <Link to="/patient/login">Login Now</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;


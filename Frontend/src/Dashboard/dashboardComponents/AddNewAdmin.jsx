import "./AddNewAdmin.css";
import axios from "axios";
import Context from "../../main";
import { toast } from "react-toastify";
import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function AddNewAdmin() {
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

  const handleNewAdmin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://hospital-management-system-h9yz.onrender.com/api/v1/user/admin/addnew",
        {
          firstName,
          lastName,
          email,
          phone,
          aadharNumber,
          dob,
          gender,
          password,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);
      setIsAuthenticated(true);
      navigateTo("/admin/AllAppointment");
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
  // if (!isAuthenticated) {
  //   return <Navigate to={"/admin/login"} />;
  // }

  return (
    <div className="add-doctor-page">
      <h2 className="add-doctor-heading">Register New Admin</h2>
      <form onSubmit={handleNewAdmin} className="add-doctor-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNo">Phone No.</label>
            <input
              type="text"
              id="phoneNo"
              name="phoneNo"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="aadharNo">Aadhar No.</label>
            <input
              type="text"
              id="aadharNo"
              name="aadharNo"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHERS">Other</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-btn">
          Register New Admin
        </button>
      </form>
    </div>
  );
}

export default AddNewAdmin;

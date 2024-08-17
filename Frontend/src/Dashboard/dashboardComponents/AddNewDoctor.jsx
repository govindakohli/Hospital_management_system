import "./AddNewDoctor.css";
import axios from "axios";
import Context from "../../main";
import { toast } from "react-toastify";
import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function AddNewDoctor() {
  const [docAvatar, setDocAvatar] = useState("");
  const [doctorAvatarPreview, setDoctorAvatarPreview] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [password, setPassword] = useState("");

  const departmentArray = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Obstetrics and Gynecology ",
    "Oncology",
    "Gastroenterology",
    "Dermatology",
    "Urology",
    "Radiology",
    "Anesthesiology",
    "Ophthalmology",
    "ENT",
    "Emergency Medicine",
    "Nephrology",
    "Endocrinology",
    "Pulmonology",
    "Psychiatry",
    "General Surgery ",
    "Rheumatology",
  ];

  const navigateTo = useNavigate();

  const handleAvatar = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDoctorAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("aadharNumber", aadharNumber);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("password", password);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docAvatar", docAvatar);
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/doctor/addnew",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success(res.data.message);
      navigateTo("/admin/AllAppointment");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setNic("");
          setDob("");
          setGender("");
          setPassword("");

    } catch (error) {
      toast.error(error.response?.data?.message || " Please fill full form" );
    }
  };
  // if (!isAuthenticated) {
  //   return <Navigate to={"/admin/login"} />;
  // }

  return (
    <div className="add-doctor-page">
      <h2 className="add-doctor-heading">Register New Doctor</h2>
      <form onSubmit={handleNewDoctor} className="add-doctor-form">
        <div className="profile-image-section">
          <label htmlFor="profileImage">
            <img
              className="doc-image"
              src={
                doctorAvatarPreview
                  ? `${doctorAvatarPreview}`
                  : "https://rochesteranesthesia.com/wp-content/uploads/2021/12/DoctorAvatar-01.jpg"
              }
              alt="Doctor Avatar"
            />
          </label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            onChange={handleAvatar}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
            >
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHERS">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <select
              id="department"
              name="department"
              value={doctorDepartment}
              onChange={(e) => setDoctorDepartment(e.target.value)}
            >
              <option value="">Select Department</option>
              {departmentArray.map((dept, index) => {
                return (
                  <option value={dept} key={index}>
                    {dept}
                  </option>
                );
              })}
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
          />
        </div>
        <button type="submit" className="register-btn">
          Register New Doctor
        </button>
      </form>
    </div>
  );
}
export default AddNewDoctor;

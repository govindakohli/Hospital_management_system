// import React, { useState } from 'react';
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./Appointment.css";
// import Context from "../main";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Appointment() {
  // const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentdate, setAppointmentdate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

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

  const [doctors, setDoctor] = useState([]);
  useEffect(() => {
    const fetchdoctor = async () => {
      const { data } = await axios.get(
        "https://hospital-management-system-h9yz.onrender.com/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctor(data.doctors);
    };
    console.log(doctors.department)
    fetchdoctor();
  }, []);
  const navigateTo = useNavigate();

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBoo = Boolean(hasVisited);
      const { data } = await axios.post(
        "https://hospital-management-system-h9yz.onrender.com/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          aadharNumber,
          dob,
          gender,
          appointment_date: appointmentdate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          address,
          hasVisited: hasVisitedBoo,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      // setIsAuthenticated(true);
      navigateTo("/");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setAadharNumber("");
      setDob("");
      setGender("");
      setAppointmentdate("");
      setDoctorFirstName("");
      setDoctorLastName("");
      setAddress("");
      setHasVisited("");
      setDepartment("");
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="appointment-page">
      <div className="appointment-hero">
        <h1>Book Your Appointment</h1>
        <p>Fill out the form below to schedule an appointment with us.</p>
      </div>

      <div className="appointment-form-container">
        <form className="appointment-form" onSubmit={handleAppointment}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="aadharNumber">Aadhar Number:</label>
            <input
              type="text"
              id="aadharNumber"
              name="aadharNumber"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
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
            <label htmlFor="appointment_date">Appointment Date:</label>
            <input
              type="date"
              id="appointment_date"
              name="appointment_date"
              value={appointmentdate}
              onChange={(e) => setAppointmentdate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <select
              id="department"
              name="department"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
            >
              {/* <option value="">Select Department</option> */}
              {departmentArray.map((dept, index) => {
                return (
                  <option value={dept} key={index}>
                    {dept}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="doctor">Doctor:</label>
            <select
              id="doctor"
              name="doctor"
              value={`${doctorFirstName} ${doctorLastName}`}
              onChange={(e) => {
                const [firstName, lastName] = e.target.value.split(" ");
                setDoctorFirstName(firstName);
                setDoctorLastName(lastName);
              }}
              disabled={!department}
            >
              <option value=""> Select Doctor</option>
              
              {doctors
                .filter((doctor) => doctor.doctorDepartment === department)
                .map((doctor, index) => {
                  // console.log(doctor);
                  return (
                    <option
                      value={`${doctor.firstName} ${doctor.lastName}`}
                      key={index}
                    >
                      {doctor.firstName} {doctor.lastName}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              rows="10"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
            />
          </div>
          <div className="checked-box">
            <p style={{ marginBottom: "0" }}>Have you Visited before </p>
            <input
              type="checkbox"
              checked={hasVisited}
              onChange={(e) => setHasVisited(e.target.checked)}
              style={{ flex: "none", width: "25px" }}
            />
          </div>
          <button type="submit" className="submit-btn">
            Get Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Appointment;

import React, { useContext, useEffect, useState } from "react";
import "./AllAppointment.css";
import Context from "../../main";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

function AllAppointment() {
  const { isAuthenticated, admin } = useContext(Context);
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "https://hospital-management-system-h9yz.onrender.com/api/v1/appointment/getallappointment",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);

        console.log("Error occured While fethcing Appointments", error);
      }
    };
    fetchAppointments();
  }, []);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "https://hospital-management-system-h9yz.onrender.com/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.data.doctors);
      }
    };
    fetchDoctors();
  }, []);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `https://hospital-management-system-h9yz.onrender.com/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // if (!isAuthenticated) {
  //   return <Navigate to={"/admin/login"} />;
  // }
  return (
    <div className="appointments-page">
      <div className="header">
        <div className="welcome-section">
          {/* <div className="doctor-avatar">
                <img src="https://png.pngtree.com/png-vector/20240204/ourlarge/pngtree-avatar-job-doctor-flat-portrait-of-man-png-image_11607328.png" alt="Doctor Avatar" />
              </div> */}
          <div className="welcome-text">
            <h2>
              Hello,{" "}
              <span className="doctor-name">
                {admin && `${admin.firstName} ${admin.lastName}`}{" "}
              </span>
            </h2>
            <p>
              Managing the pulse of hospital operations with precision and care.
            </p>
          </div>
        </div>
        <div className="metrics">
          <div className="metric-card">
            <h3>Total Appointments</h3>
            <p>{appointments.length}</p>
          </div>
          <div className="metric-card">
            <h3>Registered Doctors</h3>
            <p>{doctors.length}</p>
          </div>
        </div>
      </div>

      <div className="appointments-table">
        <h2>Appointments</h2>
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Patient Phone No.</th>
              <th>Doctor</th>
              <th>Status</th>
              <th>Visited</th>
            </tr>
          </thead>
          <tbody>
            {appointments && appointments.length > 0 ? (
              appointments.map((appointment, index) => {
                console.log(appointment);
                return (
                  <tr key={index}>
                    <td>
                      {appointment.firstName} {appointment.lastName}{" "}
                    </td>
                    <td> {appointment.appointment_date.substring(0, 16)}</td>
                    <td> {appointment.phone} </td>
                    <td>
                      {" "}
                      {appointment.doctor.firstName}{" "}
                      {appointment.doctor.lastName}
                    </td>
                    <td>
                      <select
                        value={appointment.status}
                        onChange={(e) => handleUpdateStatus(appointment._id , e.target.value)}
                        className="status"
                        name=""
                        id=""
                      >
                        <option value="Pending" className="pending">
                          Pending
                        </option>
                        <option value="Accepted" className="accepted">
                          Accepted
                        </option>
                        <option value="Rejected" className="rejected">
                          Rejected
                        </option>
                      </select>
                    </td>
                    <td>
                      {appointment.hasVisited === true ? (
                        <TiTick />
                      ) : (
                        <RxCross2 />
                      )}{" "}
                    </td>
                  </tr>
                );
              })
            ) : (
              <h1>NO APPOINTMENTS </h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllAppointment;

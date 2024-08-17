import React, { useContext, useEffect, useState } from "react";
import "./Alldoctors.css";
import Context from "../../main";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const Alldoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.data.doctors);
      }
    };
    fetchDoctors();
  }, []);

  // if (!isAuthenticated) {
  //   return <Navigate to={"/admin/login"} />;
  // }
  return (
    <section className="page doctors">
      <h1>DOCTORS</h1>
      <div className="banner">
        {doctors && doctors.length > 0 ? (
          doctors.map((element , index) => {
            // console.log(element);
            return (
              <div className="card" key={index}>
                <img
                  src={element.doctorAvatar && element.doctorAvatar.url}
                  alt="doctor avatar"
                />
                <h4>
                  {element.firstName} <span> </span>
                  {element.lastName}
                </h4>
                <div className="details">
                  <p>
                    <b>Email:</b>{" "}
                    <span className="message-value">{element.email}</span>
                  </p>
                  <p>
                    <b>Phone:</b>{" "}
                    <span className="message-value">{element.phone}</span>
                  </p>
                  <p>
                    <b>DOB:</b>{" "}
                    <span className="message-value">{element.dob}</span>
                     {/* <span className="message-value">{element.dob.substring(0, 10)}</span> */}
                  </p>
                  <p>
                    <b>Department:</b>{" "}
                    <span className="message-value">{element.doctorDepartment}</span>
                  </p>
                  <p>
                    <b>AadharNumber:</b>{" "}
                    <span className="message-value">{element.aadharNumber}</span>
                  </p>
                  <p>
                    <b>Gender:</b>{" "}
                    <span className="message-value">{element.gender}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Doctors</h1>
        )}
      </div>
    </section>
  );
};

export default Alldoctors;


{
  /* <div className="banner">
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi1tSKo8tXpH8RgYd94p_7sCmYVDgrS2jQ1n2kjUnbSt8fuIpTckU0vHP4ElO9Z3A2yh4&usqp=CAU"
            alt="doctor avatar"
          />
          <h4>RAM KUMAR</h4>
          <div className="details">
            <p>Email: RAM@GMAIL.COM</p>
            <p>Phone: 123456</p>
            <p>DOB: 02/01/2002</p>
            <p>Department: ENV</p>
            <p>AadharNumber: 123456</p>
            <p>Gender: MALE</p>
          </div>
        </div>
      </div> */
}

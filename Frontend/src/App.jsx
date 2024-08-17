import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Await } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Appointment from "./Pages/Appointment";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Contact from "./Pages/Contact";
import Help from "./Pages/Help";
import Footer from "./components/Footer";
import Context from "./main";
import axios from "axios";
import LoginOption from "./components/loginOption"
// admin 
import AdminLogin from "./Dashboard/AdminLogin";
import Sidebar from "./Dashboard/Sidebar";
import AllAppointment from "./Dashboard/dashboardComponents/AllAppointment"
import AddNewDoctor from "./Dashboard/dashboardComponents/AddNewDoctor";
import Alldoctors from"./Dashboard/dashboardComponents/Alldoctors";
import  AddNewAdmin from "./Dashboard/dashboardComponents/AddNewAdmin"
import  AllMessages from "./Dashboard/dashboardComponents/AllMessages"


function App() {
 const {isAuthenticated , setIsAuthenticated , setUser , setAdmin }= useContext(Context);
 useEffect(()=>{
   const fetchUser = async()=>{
    try {
     const response =  await axios.get("http://localhost:5000/api/v1/user/patient/me",{withCredentials:true});
     setIsAuthenticated(true);
     setUser(response.data.user)
    } catch (error) {
      setIsAuthenticated(false);
      setUser({})
    }
   };
   const fetchAdmin = async()=>{
    try {
     const response =  await axios.get("http://localhost:5000/api/v1/user/admin/me",{withCredentials:true});
     setIsAuthenticated(true);
     setAdmin(response.data.user)
    } catch (error) {
      setIsAuthenticated(false);
      setAdmin({})
    }
   };
   fetchUser()
   fetchAdmin()
 },[isAuthenticated])
  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route  path="/" element={<><Navbar/><Home/><Footer/></>}/>
          <Route  path="/about" element={<><Navbar/><About/><Footer/></>}/>
          <Route  path="/appointment" element={<><Navbar/><Appointment/><Footer/></>}/>
          <Route  path="/patient/register" element={<><Navbar/><Register/><Footer/></>}/>
          <Route  path="/patient/login" element={<><Navbar/><Login/><Footer/></>}/>
          <Route  path="/login" element={<><Navbar/><LoginOption/><Footer/></>}/>
          <Route  path="/contact" element={<><Navbar/><Contact/><Footer/></>}/>
          <Route  path="/help" element={<><Navbar/><Help/><Footer/></>}/>

          {/* admin routes  */}
          <Route  path="/admin/login" element={<AdminLogin/>}/>
          <Route  path="/admin/AllAppointment" element={<><Sidebar/><AllAppointment/></>}/>
          <Route  path="/admin/new_doctor" element={<><Sidebar/><AddNewDoctor/></>}/>
          <Route  path="/admin/Alldoctors" element={<><Sidebar/><Alldoctors/></>}/>
          <Route  path="/admin/AddNewAdmin" element={<><Sidebar/><AddNewAdmin/></>}/>
          <Route  path="/admin/Allmessages" element={<><Sidebar/><AllMessages/></>}/>

        </Routes>
        {/* <Footer/> */}
        <ToastContainer position="top-center"/>
      </BrowserRouter>
    </>
  );
}

export default App;

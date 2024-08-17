import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Appointment from "./Pages/Appointment";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Contact from "./Pages/Contact";
import Help from "./components/Help";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/about" element={<About/>}/>
          <Route  path="/appointment" element={<Appointment/>}/>
          <Route  path="/register" element={<Register/>}/>
          <Route  path="/login" element={<Login/>}/>
          <Route  path="/contact" element={<Contact/>}/>
          <Route  path="/help" element={<Help/>}/>
        </Routes>
        <ToastContainer position="top-center"/>
      </BrowserRouter>
    </>
  );
}

export default App;

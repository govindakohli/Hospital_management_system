import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Context from "../main";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const {isAuthenticated, setIsAuthenticated} = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
       await axios.post(
        "https://hospital-management-system-h9yz.onrender.com/api/v1/user/login",
        { email, password, confirmPassword, role: "Patient" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      ).then((res)=>{
        toast.success(res.data.message);
        setIsAuthenticated(true)
        navigateTo("/")
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      
    } catch (error) {
      toast.error(error.response.data.message)
     
    }
    if (isAuthenticated) {
      return <Navigate to={"/"} />;
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
      <h1 className="register-heading">CITY HOSPITAL</h1>
        <h2 className="register-subheading" >Sign In for Patient</h2>
        <form onSubmit={handleLogin} className="signin-form">
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
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/patient/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

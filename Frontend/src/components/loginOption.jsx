import React from 'react'
import "./loginOption.css"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function loginOption() {
    const navigateTo = useNavigate();

    const handleOptionClick = (role) => {
      navigateTo(`/login/${role}`);
    };
  
    return (
      <div className="login-options-page">
        <div className="login-options-container">
          <h1 className="login-options-heading">CITY HOSPITAL</h1>
          <h2 className="login-options-subheading">Select Login Option</h2>
  
          <div className="options-buttons">
           <Link to="/patient/login"> <button 
              className="option-btn" 
              onClick={() => handleOptionClick("patient")}
            >
              Patient Login
            </button>
           </Link>
            
            <Link to="/admin/login"><button 
              className="option-btn" 
              onClick={() => handleOptionClick("admin")}
            >
              Admin Login
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default loginOption

import React, { useState ,useContext} from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./Sidebar.css";
import { FaHome, FaUserMd, FaEnvelope, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import Context from "../main";
import axios from "axios";
import { toast } from "react-toastify";



function Sidebar() {
  const[show , setShow] = useState(false)
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogut = async () => {
    try {
      await axios
        .get("https://hospital-management-system-h9yz.onrender.com/api/v1/user/admin/logout", {
          withCredentials: true,
        })
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(false);
          navigateTo("/");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="sidebar">
      {/* <h2 className="sidebar-heading">Admin <br />Panel</h2> */}
      <ul className="sidebar-menu">
        <li>
          <Link to="/admin/AllAppointment" className="sidebar-link">
            <FaHome className="sidebar-icon" />
           
          </Link>
        </li>
        <li>
          <Link to="/admin/Alldoctors" className="sidebar-link">
            <FaUserMd className="sidebar-icon" />
           
          </Link>
        </li>
        <li>
          <Link to="/admin/Allmessages" className="sidebar-link">
            <FaEnvelope className="sidebar-icon" />
           
          </Link>
        </li>
        <li>
          <Link to="/admin/AddNewAdmin" className="sidebar-link">
            <MdAdminPanelSettings  className="sidebar-icon" />
            
          </Link>
        </li>
        <li>
          <Link to="/admin/new_doctor" className="sidebar-link">
            <FaUserPlus className="sidebar-icon" />
            
          </Link>
        </li>
        
        <li>
          <Link onClick={handleLogut} className="sidebar-link">
            <FaSignOutAlt className="sidebar-icon" />
            
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

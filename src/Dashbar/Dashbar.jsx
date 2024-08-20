import React, { useState } from "react";
import Logo from "../../src/assets/Logo.jpg";
import "./Dashbar.css";
import { useUser } from "../Pages/UserContext";
import { FaUser, FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Dashbar() {
  const { user } = useUser() || { username: "Guest" };

  return (
    <>
      <div className="dashbar-main">
        <div className="dashbar-head">
          <h2>Training Centre Management System (TCMS)</h2>
          <div className="dashbar-head2">
            <img src={Logo} alt="C-Dac Logo" />
            <div className="dashbar-head3 dropdown-container">
              <span>{user?.username}!</span> <br />
              <h5 className="dropdown-heading">User</h5>
              <div className="dropdown-menu">
                <div className="dropdown-item">
                  <FaUser className="icon" />
                  Profile
                </div>
                <div className="dropdown-item">
                  <FaTachometerAlt className="icon" />
                  Dashboard
                </div>
                <hr />
                <div className="dropdown-item">
                  <FaSignOutAlt className="icon" />
                  <Link to="/">Logout</Link>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashbar;

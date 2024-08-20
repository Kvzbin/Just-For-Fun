import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./Sidebar.css";
import { FiMenu } from "react-icons/fi";
import {
  FaRegUserCircle,
  FaMailBulk,
  FaPhoneAlt,
  FaUserEdit,
  FaUserCircle,
} from "react-icons/fa";
// import { FaCircleInfo } from "react-icons/fa6";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaNewspaper, FaCircleInfo } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
// import { FaUserCircle } from "react-icons/fa";
import { useUser } from "../UserContext";
import Logo from "../../assets/Logo.jpg";
import { Link } from "react-router-dom";

function Slidebar({ sidebarColor }) {
  const [collapsed, setCollapsed] = useState(false);
  const { username } = location.state || { username: "Guest" };
  const { user } = useUser() || { username: "Guest" };
  const [open, setOpen] = useState(false);
  const [isDataVisible, setIsDataVisible] = useState(true);

  const toggleDataVisibility = () => {
    setIsDataVisible(!isDataVisible);
    setCollapsed(!collapsed)
  };

  return (
    <>
      <aside className="side-main" style={{ backgroundColor: sidebarColor}}>
        <Sidebar
          className="side-div"
          collapsed={collapsed}
          transitionDuration={800}
        >
          <div className="sb-head">
            <div className="sb-log">
              <img src={Logo} alt="C-DAC Logo" />
              {isDataVisible && (
                <div>
                  <h1> Training Centre Management System (TCMS) </h1>
                </div>
              )}
            </div>
            <div className="sb-log2">
              <h1 className="sb-wel">
                <span className="sb-hero">
                  <FaUserCircle />
                </span>
                <div className="sb-us">
                  {isDataVisible && (
                    <>
                      <span>{user?.username}!</span> <br />
                      <h5>Admin</h5>
                    </>
                  )}
                </div>
              </h1>
            </div>
          </div>
          <main className="sidebar-main"></main>
          <Menu
            className="side-menu"
            transitionDuration={500}
            renderExpandIcon={({ open }) => <span>{open ? "-" : "+"}</span>}
          >
            <SubMenu
              className="sub-menu"
              label="Profile"
              icon={<FaRegUserCircle />}
            >
              <MenuItem className="menu-item"> My Profile </MenuItem>
              <MenuItem className="menu-item"> Profile Security </MenuItem>
              <MenuItem className="menu-item"> Change Password </MenuItem>
            </SubMenu>
            <SubMenu label="Attendence" icon={<FaMailBulk />}>
              <MenuItem className="menu-item"> Guest Attendence </MenuItem>
              <MenuItem className="menu-item"> Faculty Attendence </MenuItem>
              <MenuItem className="menu-item"> Recruiter Attendence </MenuItem>
            </SubMenu>
            <MenuItem icon={<IoNotifications />}> Schedule </MenuItem>
            <MenuItem icon={<FaNewspaper />}> Leave </MenuItem>
            {/* <MenuItem icon={<MdEmojiEvents />}> Feedback </MenuItem> */}
            <MenuItem icon={<FaUserEdit />}> Library </MenuItem>
            <MenuItem className="sid-icon" icon={<FaCircleInfo />}>
              <Link to="/About-us"> About Us </Link>{" "}
            </MenuItem>
            <MenuItem className="sid-icon" icon={<FaPhoneAlt />}>
              <Link to="/Contact-us"> Contact Us </Link>{" "}
            </MenuItem>
            <MenuItem className="sid-icon" icon={<RiLogoutBoxRFill />}>
              <Link to="/"> Logout</Link>{" "}
            </MenuItem>
          </Menu>
        </Sidebar>
      </aside>
      <div>
        <button className="sb-button" onClick={toggleDataVisibility}>
          <FiMenu />
        </button>
      </div>
    </>
  );
}

export default Slidebar;

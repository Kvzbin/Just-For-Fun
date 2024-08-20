import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Login.css";
import Slidebar from "../Sidebar/Sidebar";
import RealTimeChart from "../RealTimeChart/RealTimeChart";
// import { useUser } from '../UserContext';
import Dashbar from "../../Dashbar/Dashbar";
import Side from "../Sidebar/Side";

const Login = ({ sidebarColor, headerColor }) => {
  const location = useLocation();
  // const { username } = location.state || { username: "Guest" };
  // const { user } = useUser();
  {/* <img src={Logo} alt="C-DAC Logo"/> */}

  return (
    <>      
      {/* <Slidebar sidebarColor={sidebarColor}/> */}
      <Dashbar headerColor={headerColor}/>
      <Side />
      <div className="login-main">
        {/* <h1>Welcome, {username}!</h1> */}
        <h1>User Dashboard </h1>
        <div className="login-child">
          {/* <RealTimeChart />
          <RealTimeChart />
          <RealTimeChart />
          <RealTimeChart /> */}
        </div>
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About-Us/About";
import Contact from "./Pages/Contact-Us/Contact";
import Footer from "./Components/Footer/Footer";
import Topbar from "./Components/Topbar/Topbar";
import Guest from "./Pages/Guest-Registration/Guest";
import Recruiter from "./Pages/Recruiter-Registration/Recruiter";
import Faculty from "./Pages/Faculty-Registration/Faculty";
import Login from "./Pages/Login/Login";
import Otp from "./Pages/OTP/Otp";
import { UserProvider } from "./Pages/UserContext";
import Employee from "./Pages/Employee-Registartion/Employee";
import SettingsSidebar from "./Pages/SettingSidebar/SettingsSidebar";
import { Settings, SettingsBrightness } from "@material-ui/icons";
import SidebarRight from "./Pages/SidebarRight/SidebarRight";
import SettingRight from "./Pages/SidebarRight/SettingRight";

function App() {
  const [headerColor, setHeaderColor] = useState("#ffffff");
  const [footerColor, setFooterColor] = useState("#ffffff");
  const [sidebarColor, setSidebarColor] = useState("#ffffff");

  const handleColorChange = (part, color) => {
    if (part === "header") setHeaderColor(color);
    if (part === "footer") setFooterColor(color);
    if (part === "sidebar") setSidebarColor(color);
    console.log(part)
  };

  return (
    <>
      <BrowserRouter>
        {/* <Topbar /> */}
        {/* <Navbar /> */}
        <div>
          <UserProvider>
            <Routes>
              <Route path="/" element={<Home headerColor={headerColor} />} />
              <Route path="/About-us" element={<About />} />
              <Route path="/Contact-us" element={<Contact />} />
              <Route path="/Guest-registration" element={<Guest />} />
              <Route path="Recruiter-registration" element={<Recruiter />} />
              <Route path="Faculty-registration" element={<Faculty />} />
              <Route path="/Employee-registration" element={<Employee />} />
              <Route path="/Login" element={<Login sidebarColor={sidebarColor} />} />
              <Route path="/Otp" element={<Otp />} />
            </Routes>
          </UserProvider>
        </div>
        <Footer footerColor={footerColor} />
      </BrowserRouter>
      <SettingRight handleColorChange={handleColorChange} />
      {/* <SettingsSidebar /> */}
      {/* <Settings /> */}
      {/* <SidebarRight /> */}
    </>
  );
}

export default App;

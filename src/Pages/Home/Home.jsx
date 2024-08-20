import React, { useRef, useState, createContext, useEffect } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import Captcha from "react-captcha-code";
import { TfiReload } from "react-icons/tfi";
import Navbar from "../../Components/Navbar/Navbar";
import { useUser } from "../UserContext";

export const userContext = createContext();

function Home({ headerColor }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const captchaRef = useRef();
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setCaptchaInput("");
  };

  const handleReloadCaptcha = () => {
    captchaRef.current.refresh();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = username;
    if (username === data && captchaInput === captchaValue) {
      setUser({ username });
      navigate("/Otp");
    } else {
      alert("Invalid username or CAPTCHA");
    }
    handleReloadCaptcha();
  };

  return (
    <>
      <Navbar headerColor={headerColor}/>
      <div className="h-main">
        <h1 className="h-head"> Login </h1>
        <div className="h-child">
          <p id="well"> Welcome </p>

          <form onSubmit={handleSubmit}>
            <div className="home-div">
              <label> Username </label>
              <input
                placeholder="Username"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="home-div">
              <label> Password </label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="kilo home-div">
              <div className="hello">
                <Captcha ref={captchaRef} onChange={handleCaptchaChange} />
                <TfiReload className="re" onClick={handleReloadCaptcha} />
              </div>

              <input
                placeholder="Enter Captcha"
                type="text"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

            <div className="form-foot">
              <p>
                <Link to="/Register"> Register </Link>
              </p>
              <p>
                <Link to="/Forgot-Password"> Forgot Password </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;

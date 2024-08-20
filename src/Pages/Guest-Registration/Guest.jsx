// import React, { useRef, useState } from "react";
// import "./Guest.css";
// import Captcha from "react-captcha-code";
// import { TfiReload } from "react-icons/tfi";
// import Navbar from "../../Components/Navbar/Navbar";

// function Recruiter() {
//   const [formData, setFormData] = useState({
//     salutation: "",
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     telCode: "",
//     mobile: "",
//     email: "",
//     username: "",
//     password: "",
//     passwordHint: "",
//     answer1: "",
//     answer2: "",
//     answer3: "",
//     captcha: "",
//   });

//   const [captchaInput, setCaptchaInput] = useState("");
//   const [captchaValue, setCaptchaValue] = useState("");
//   const captchaRef = useRef();

//   const handleCaptchaChange = (value) => {
//     setCaptchaValue(value);
//   };

//   const handleReloadCaptcha = () => {
//     captchaRef.current.refresh();
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//         ...formData,
//         [name]: value
//     });
// };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (captchaInput === captchaValue) {
//       // Handle successful form submission
//       alert("Login successfully!");
//     } else {
//       alert("Incorrect CAPTCHA. Please try again.");
//     }
//     console.log("Username : " + username, <br />, "Password : " + password);
//     console.log("Login successfully", formData);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="g-main">
//         <div className="g-child">
//           <h1>Guest Registration</h1>

//           {/* form */}

//           <div className="g-f-main">
//             <form  onSubmit={handleSubmit}>

//               <div className="g-data1">
//                 <div className="gc-data1">
//                   <label>Salutation</label>
//                   <input
//                     type="number"
//                     name="salutation"
//                     placeholder="Salutation"
//                     required
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="gc-data1">
//                   <label>First Name</label>
//                   <input
//                     type="text"
//                     name="FirstName"
//                     placeholder="First Name(Optional)"
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="gc-data1">
//                   <label>Middle Name </label>
//                   <input
//                     type="text"
//                     name="MiddleName"
//                     placeholder="Middle Name(Optional)"
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="gc-data1">
//                   <label>Last Name</label>
//                   <input
//                     type="text"
//                     name="LastName"
//                     placeholder="Last Name(Optional)"
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               {/* field 2 */}

//               <div className="g-data2">
//                 <div className="gc-data2">
//                   <label>Tel. Code</label>
//                   <input
//                     placeholder="Tel. No"
//                     name="telCode"
//                     required
//                     type="number"
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="gc-data2">
//                   <label>Mobile</label>
//                   <input
//                     placeholder="Mobile"
//                     name="mobile"
//                     required
//                     type="text"
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="gc-data2">
//                   <label>Email</label>
//                   <input
//                     placeholder="Email"
//                     name="email"
//                     required
//                     type="text"
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               {/* col-3 */}

//               <div className="g-data3">
//                 <div className="gc-data3">
//                   <label>Username</label>
//                   <input
//                     placeholder="Username"
//                     name="username"
//                     required
//                     type="text"
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="gc-data3">
//                   <label>Password</label>
//                   <input
//                     placeholder="Password"
//                     name="password"
//                     required
//                     type="password"
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="gc-data3">
//                   <label>Password Hint</label>
//                   <input
//                     placeholder="Password Hint"
//                     name="passwordHint"
//                     required
//                     type="password"
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               {/* col-4 */}

//               <div className="g-data4">
//                 <div className="gc-data4">
//                   <input placeholder="Security Question 1" type="number" />
//                   <input
//                     placeholder="Answer"
//                     name="answer1"
//                     required
//                     type="text"
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               <div className="g-data5">
//                 <div className="gc-data5">
//                   <input placeholder="Security Question 2" type="number" />
//                   <input
//                     placeholder="Answer"
//                     name="answer2"
//                     required
//                     type="text"
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               <div className="g-data5">
//                 <div className="gc-data5">
//                   <input placeholder="Security Question 3" type="number" />
//                   <input
//                     placeholder="Answer"
//                     name="answer3"
//                     required
//                     type="text"
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               {/* captcha */}

//               <div className="g-captcha">
//                 <div className="g-captcha-div">
//                   <Captcha ref={captchaRef} onChange={handleCaptchaChange} />
//                   <TfiReload className="g-re" onClick={handleReloadCaptcha} />
//                 </div>

//                 <input
//                   placeholder="Enter Captcha"
//                   type="text"
//                   value={captchaInput}
//                   name="captcha"
//                   // onChange={(e) => setCaptchaInput(e.target.value)}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Btn  */}

//               <div className="g-btn">
//                 <button className="btn-reset"> RESET </button>
//                 <button className="btn-register"> REGISTER </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Recruiter;

import React, { useRef, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Guest.css";
import { Link, useNavigate } from "react-router-dom";
import Captcha from "react-captcha-code";
import { TfiReload } from "react-icons/tfi";

function Guest() {
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const captchaRef = useRef();
  const navigate = useNavigate();

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
      <Navbar />
      <div className="guest-main">
        <div className="guest-main-child">
          <h3> Guest Registartion </h3>
          <div className="form-main">
            <form onSubmit={handleSubmit}>
              <div className="guest-data1">
                <div className="guest-main-data">
                  <label> Salutation </label>
                  <input type="number" placeholder="Salutation" />
                </div>

                <div className="guest-main-data">
                  <label> First Name </label>
                  <input type="text" placeholder="First Name" />
                </div>

                <div className="guest-main-data">
                  <label> Middle Name </label>
                  <input type="text" placeholder="Middle Name" />
                </div>

                <div className="guest-main-data">
                  <label> Last Name </label>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>

              <div className="guest-data2">
                <div className="guest-main-data2">
                  <label> Tel. Code </label>
                  <input type="number" placeholder="tel. Code" />
                </div>

                <div className="guest-main-data2">
                  <label> Mobile </label>
                  <input type="text" placeholder="Mobile" />
                </div>

                <div className="guest-main-data2">
                  <label> Email </label>
                  <input type="text" placeholder="Email" />
                </div>
              </div>

              <div className="guest-data3">
                <div className="guest-main-data3">
                  <label> Username </label>
                  <input type="text" placeholder="Username" />
                </div>

                <div className="guest-main-data2">
                  <label> Password </label>
                  <input type="password" placeholder="Password" />
                </div>

                <div className="guest-main-data3">
                  <label> Password Hint </label>
                  <input type="text" placeholder="Password Hint" />
                </div>
              </div>

              <div className="guest-data4">
                <div className="guest-main-data4">
                  <input type="number" placeholder="Security Question 1" />
                  <input type="text" placeholder="Answer 1" />
                </div>

                <div className="guest-main-data4">
                  <input type="number" placeholder="Security Question 2" />
                  <input type="text" placeholder="Answer 2" />
                </div>

                <div className="guest-main-data4">
                  <input type="number" placeholder="Security Question 3" />
                  <input type="text" placeholder="Answer 3" />
                </div>
              </div>

              <div className="guest-data5">
                <div className="guest-main-data5">
                  <Captcha className="cap" ref={captchaRef} onChange={handleCaptchaChange} />
                  <TfiReload className="cap-icon" onClick={handleReloadCaptcha} />
                </div>

                <input
                  placeholder="Enter Captcha"
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  required
                  className="guest-cap-in"
                />
              </div>

              <div className="guest-data6">
                <button className="guest-btn1" type="reset"> Reset </button>
                <button className="guest-btn2" type="submit"> Register </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Guest;

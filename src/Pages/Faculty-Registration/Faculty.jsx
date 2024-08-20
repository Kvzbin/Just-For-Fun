import React, { useRef, useState } from "react";
import "./Faculty.css";
import Captcha from "react-captcha-code";
import { TfiReload } from "react-icons/tfi";
import Navbar from "../../Components/Navbar/Navbar";

function Recruiter() {
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const captchaRef = useRef();

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleReloadCaptcha = () => {
    captchaRef.current.refresh();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput === captchaValue) {
      // Handle successful form submission
      alert("Login successfully!");
    } else {
      alert("Incorrect CAPTCHA. Please try again.");
    }
    console.log("Username : " + username, <br />, "Password : " + password);
  };

  return (
    <>
      <Navbar />
      <div className="f-main">
        <div className="f-child">
          <h1>Faculty Registration</h1>
          {/* form */}

          <div className="f-f-main">
            <form>
              <div className="f-data1">
                <div className="fc-data1">
                  <label>Salutation</label>
                  <input
                    type="number"
                    name="salutation"
                    placeholder="Salutation"
                    required
                  />
                </div>

                <div className="fc-data1">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="First Name"
                    placeholder="First Name(Optional)"
                  />
                </div>

                <div className="fc-data1">
                  <label>Middle Name </label>
                  <input
                    type="text"
                    name="Middle Name"
                    placeholder="Middle Name(Optional)"
                  />
                </div>

                <div className="fc-data1">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="Last Name"
                    placeholder="Last Name(Optional)"
                  />
                </div>
              </div>

              {/* field 2 */}

              <div className="f-data2">
                <div className="fc-data2">
                  <label>Tel. Code</label>
                  <input placeholder="Tel. No" required type="number" />
                </div>

                <div className="fc-data2">
                  <label>Mobile</label>
                  <input placeholder="Mobile" required type="text" />
                </div>

                <div className="fc-data2">
                  <label>Email</label>
                  <input placeholder="Email" required type="text" />
                </div>
              </div>

              {/* col-3 */}

              <div className="f-data3">
                <div className="fc-data3">
                  <label>Username</label>
                  <input placeholder="Username" required type="text" />
                </div>

                <div className="fc-data3">
                  <label>Password</label>
                  <input placeholder="Password" required type="password" />
                </div>

                <div className="fc-data3">
                  <label>Password Hint</label>
                  <input placeholder="Password Hint" required type="password" />
                </div>
              </div>

              {/* col-4 */}

              <div className="f-data4">
                <div className="fc-data4">
                  <input placeholder="Security Question 1" type="number" />
                  <input placeholder="Answer" required type="text" />
                </div>
              </div>

              <div className="f-data5">
                <div className="fc-data5">
                  <input placeholder="Security Question 2" type="number" />
                  <input placeholder="Answer" required type="text" />
                </div>
              </div>

              <div className="f-data5">
                <div className="fc-data5">
                  <input placeholder="Security Question 3" type="number" />
                  <input placeholder="Answer" required type="text" />
                </div>
              </div>

              {/* captcha */}

              <div className="f-captcha">
                <div className="f-captcha-div">
                  <Captcha ref={captchaRef} onChange={handleCaptchaChange} />
                  <TfiReload className="f-re" onClick={handleReloadCaptcha} />
                </div>

                <input
                  placeholder="Enter Captcha"
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  required
                />
              </div>

              {/* Btn  */}

              <div className="f-btn">
              <button className="btn-reset"> RESET </button>
              <button className="btn-register"> REGISTER </button>
            </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recruiter;

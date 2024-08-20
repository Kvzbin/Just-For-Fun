import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaWalking } from "react-icons/fa";
import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-main">
        <div className="contact-child">
          <h1 className="c-head">Contact</h1>

          {/* fields */}

          <div className="cf-main">
            <div className="cf-child">
              <FaLocationDot className="icon"/>
              <div className="cf-data">
                <h1>Location :</h1>
                <p>
                  Plot no, 20 FC-33 Institutional Area, Jasola,
                  <br /> New Delhi, Delhi 110025
                </p>
              </div>
            </div>

            <div className="cf-child">
              <IoIosMail className="icon"/>
              <div className="cf-data">
                <h1>Email :</h1>
                <p>support [at] tcms [dot] com</p>
              </div>
            </div>

            <div className="cf-child">
              <BiSolidPhoneCall className="icon"/>
              <div className="cf-data">
                <h1>Call :</h1>
                <p>011-2651 0221</p>
              </div>
            </div>

            <div className="cf-child">
              <FaWalking className="icon"/>
              <div className="cf-data">
                <h1>Open Hours :</h1>
                <p>Mon-Sat: 09AM - 05:30PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

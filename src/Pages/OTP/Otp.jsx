// src/OtpVerification.js

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { useUser } from '../UserContext';
import './Otp.css'

const Otp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state;
  const { user, setUser } = useUser();

  const sendOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
    setGeneratedOtp(otp);
    setMessage(`OTP sent to ${phoneNumber}. (For demo purposes, the OTP is: ${otp})`);
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setMessage('OTP verified successfully');
      setUser({ ...user, verified: true });
      navigate('/Login', {username});
    } else {
      setMessage('Invalid OTP');
    }
  };

  return (
    <>
    <Navbar />
    <div className='otp-main'>
      <h2>OTP Verification</h2>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
        className='otp-in'
      />
      <button onClick={sendOtp} className='otp-btn1' >Send OTP</button>

      {generatedOtp && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className='otp-in'
          />
          <button onClick={verifyOtp} className='otp-btn2'>Verify OTP</button>
        </>
      )}

      <p>{message}</p>
    </div>
    </>
  );
};

export default Otp;

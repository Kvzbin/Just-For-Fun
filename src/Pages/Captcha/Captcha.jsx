import React, { useState, useRef } from 'react';
import Captcha from 'react-captcha-code';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
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
      alert('Form submitted successfully!');
    } else {
      alert('Incorrect CAPTCHA. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Captcha</label>
        <div >
          <Captcha ref={captchaRef} onChange={handleCaptchaChange} />
          <button type="button" onClick={handleReloadCaptcha}>Reload</button>
        </div>
        <input
          type="text"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;

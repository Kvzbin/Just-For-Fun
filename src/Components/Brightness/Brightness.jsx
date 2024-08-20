import React, { useEffect, useState } from 'react';
import './Brightness.css'

const Brightness = () => {
  const [brightness, setBrightness] = useState(100);

  useEffect(() => {
    document.body.style.filter = `brightness(${brightness}%)`;
  }, [brightness]);

  const increaseBrightness = () => {
    setBrightness(prevBrightness => Math.min(prevBrightness + 10, 130));
  };

  const decreaseBrightness = () => {
    setBrightness(prevBrightness => Math.max(prevBrightness - 10, 0));
  };


  return (
    <div className='b-main'>
      {/* <h1>Brightness Control</h1> */}
      <p>Current 🔆: {brightness}%</p>
      <button onClick={increaseBrightness}>Inc Brightness</button>
      <button onClick={decreaseBrightness}>Dec Brightness</button>
    </div>
  );
};

export default Brightness;

import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './Settings.css';

const Settings = ({ onThemeChange, onFontSizeChange, onDarkModeToggle }) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('#1976d2'); // Default color
  const [fontSize, setFontSize] = useState(14); // Default font size
  const [darkMode, setDarkMode] = useState(false); // Default dark mode

  const toggleDrawer = () => setOpen(!open);

  const handleColorChange = (color) => {
    setColor(color.hex);
    onThemeChange(color.hex);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
    onFontSizeChange(event.target.value);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    onDarkModeToggle(!darkMode);
  };

  return (
    <div>
      <button className="settings-button" onClick={toggleDrawer}>⚙️</button>
      <div className={`settings-drawer ${open ? 'open' : ''}`}>
        <div className="settings-section">
          <h3>Theme Color</h3>
          <SketchPicker color={color} onChangeComplete={handleColorChange} />
        </div>
        <div className="settings-section">
          <h3>Font Size</h3>
          <input
            type="range"
            min="10"
            max="24"
            value={fontSize}
            onChange={handleFontSizeChange}
          />
          <span>{fontSize}px</span>
        </div>
        <div className="settings-section">
          <h3>Dark Mode</h3>
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={handleDarkModeToggle} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;

import React, { useState } from 'react';
import './Dropdown.css'; // We'll create this CSS file next
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="dropdown-button">Register</button>
      {isOpen && (
        <div className="dropdown-content">
          <Link to="/Guest-Registration"> Guest </Link>
          <Link to="/Employee-Registration"> Employee </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

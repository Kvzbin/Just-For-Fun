import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import './Employee.css'


function Employee() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="emp-main">
        <div
          className="emp-li"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="emp-button">Employee Registration
          <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9662;</span>
          </button>
          {isOpen && (
            <div className="emp-content">
              <Link to="/Employee-1"> Employee 1 </Link>
              <Link to="/Employee-2"> Employee 2 </Link>
              <Link to="/Employee-3"> Employee 3 </Link>
              <Link to="/Employee-4"> Employee 4 </Link>
              <Link to="/Employee-5"> Employee 5 </Link>
              <Link to="/Employee-6"> Employee 6 </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Employee;

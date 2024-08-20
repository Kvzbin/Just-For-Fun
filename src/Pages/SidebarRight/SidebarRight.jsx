import React from 'react';
import './SidebarRight.css';

const Sidebar = ({ open, onClose }) => {
  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
      <div className="sidebar-content">
        <button className="close-button" onClick={onClose}>×</button>
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Settings</a>
      </div>
    </div>
  );
};

export default Sidebar;

// import React from 'react'
// import Logo from '../../assets/Logo.jpg'
// import { Link } from 'react-router-dom'
// import './Navbar.css'
// // import Topbar from '../Topbar/Topbar'
// import Dropdown from '../Dropdown/Dropdown'

// function Navbar({ headerColor }) {
//   return (
//     <>
//         <header className='nav-main' style={{ backgroundColor: headerColor}}>
//             <div className='nav-left'>
//                 <img src={Logo} alt='CDAC Logo' />
//                 <h1> Training Centre Management System (TCMS) </h1>
//             </div>

//             {/* nav-manu */}

//             <div className='nav-right'>
//               <ul>
//                 <li> <Link to="/"> Home </Link> </li>
//                 <li> <Link to="#"> <Dropdown /> </Link> </li>
//                 <li> <Link to="/About-us"> About Us </Link> </li>
//                 <li> <Link to="/Contact-us"> Contact Us </Link> </li>
//               </ul>
//             </div>
//         </header>
//     </>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import Logo from '../../assets/Logo.jpg';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../Dropdown/Dropdown';
import { FaBars, FaTimes } from 'react-icons/fa';  // Import both the open and close icons

function Navbar({ headerColor }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className='nav-main' style={{ backgroundColor: headerColor }}>
        <div className='nav-left'>
          <img src={Logo} alt='CDAC Logo' />
          <h1>Training Centre Management System (TCMS)</h1>
        </div>

        <div className='nav-right'>
          <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#"><Dropdown /></Link></li>
            <li><Link to="/About-us">About Us</Link></li>
            <li><Link to="/Contact-us">Contact Us</Link></li>
          </ul>
          <div className='hamburger' onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between bars and times icons */}
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

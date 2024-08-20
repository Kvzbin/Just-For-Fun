import React from "react";
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';

import './About.css';
import Navbar from "../../Components/Navbar/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="about-main">
        <h1>About Us </h1>
        <div className="content">
          <div className="content-1">
            <img src={img1} />
            <p>
              Centre for Development of Advanced Computing (C-DAC) is the
              premier R&D organization of the Ministry of Electronics and
              Information Technology (MeitY) for carrying out R&D in IT,
              Electronics and associated areas. Different areas of C-DAC, had
              originated at different times, many of which came out as a result
              of identification of opportunities.
              <br />
              C-DAC has today emerged as a premier R&D organization in IT&E
              (Information Technologies and Electronics) in the country working
              on strengthening national technological capabilities in the
              context of global developments in the field and responding to
              change in the market need in selected foundation areas.
            </p>
          </div>

          <div className="content-2">
            <img src={img2} />
            <p>
              Centre for Development of Advanced Computing (C-DAC) is the
              premier R&D organization of the Ministry of Electronics and
              Information Technology (MeitY) for carrying out R&D in IT,
              Electronics and associated areas. Different areas of C-DAC, had
              originated at different times, many of which came out as a result
              of identification of opportunities.
              <br/>
              C-DAC's Education and Training programmes are aimed at creating skilled manpower in the country by providing quality training programmes in the field of Electronics and ICT. This activity started almost two decades ago with a humble beginning of training about 20 students per year, but has today grown to an extent of training more than 5000 students per year.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

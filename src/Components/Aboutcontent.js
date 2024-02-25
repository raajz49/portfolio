import { Link } from "react-router-dom";
import "./Aboutcontentstyle.css";
import React from 'react';

import React1 from "../assets/reactimg.avif";
import React2 from "../assets/javaimg.avif";

const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>I'm a full stack developer. I can create responsive sites with backend work too.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutcontent;
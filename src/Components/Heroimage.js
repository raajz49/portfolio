import "./heroimagestyles.css";
import React from 'react'
import {Link} from "react-router-dom";
 
import  IntroImg from "../assets/img1.jpg"
const Heroimage = () => {

  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi I'M a Software Engineer</p>
        <h1>Full Stack Developer</h1>

        <div>
            <Link to ="/project" className="btn">Projects</Link>
            <Link to ="/contact" className="btn btn-light">contact</Link>
        </div>

        </div>
    </div>
  )
}

export default Heroimage

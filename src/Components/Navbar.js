import "./Navbarstyles.css"
import {Link } from "react-router-dom"; 
import { FaBars,FaTimes} from 'react-icons/fa';

import React, {useState} from 'react'


const Navbar = () => {

    const [click,setclick]=useState(false);
    const handleClick =() =>setclick(!click);

    const[color,setColor]=useState(false);
    const changecolor =() =>{
      if(window.scrollY >=100){
        setColor(true);
        
      }else{
        setColor(false);
      }
    };

    window.addEventListener("scroll",changecolor);
  return (
    <div className={color ?"header header-bg":"header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>

      <ul className={click ? "Nav-menu active":"Nav-menu"}>
        <li>
            <Link to ="/">Home</Link>
        </li>

        <li>
            <Link to ="/project">Project</Link>  
        </li>

        <li>
            <Link to ="/about">About</Link>
        </li>

        <li>
            <Link to ="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hambug" onClick={handleClick}>
        {click?(<FaTimes size={20}  style={{color:"#fff"}} />) : (<FaBars size={20}  style={{color:"#fff"}} />)}
        
        
      </div>
    </div>
  )
}

export default Navbar;

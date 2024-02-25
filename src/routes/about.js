import React from 'react'
import  Navbar from "../Components/Navbar";
import  Footer from "../Components/Footer"; 
import Heroimage2 from '../Components/Heroimage2';
import Aboutcontent from '../Components/Aboutcontent';

const about = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2  heading="ABOUT" text="I'm a friendly and highly interactive developer"/>
      <Aboutcontent/>
    <Footer />  
    </div>
  )
}

export default about

import React from 'react'
import  Navbar from "../Components/Navbar";
import  Footer from "../Components/Footer"; 
import Heroimage2 from '../Components/Heroimage2';
import Work from '../Components/Work';

const project = () => {
  return (
    <div>
    <Navbar />
    <Heroimage2  heading="PROJECTS." text="Some of my most recent works."/>
    <Work />

    <Footer />  
    </div>
  )
}

export default project;

import React from 'react'
import  Navbar from "../Components/Navbar";
import  Footer from "../Components/Footer"; 
import Heroimage2 from '../Components/Heroimage2';
import  Form  from '../Components/Form';

const contact = () => {
  return (
    <div>
     <Navbar />
     <Heroimage2  heading="CONTACT" text="Let me know what you wanna chat also I've a good knowledge in cricket"/>
     <Form />
    <Footer />  
    </div>
  )
}

export default contact

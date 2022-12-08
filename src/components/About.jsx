import React from 'react'
import '../styles/About.css'
import pic from '../images/Nazrin.jpeg'

import Skills from './Skills'
import icon from "../images/icon.svg"
import web from '../images/website.png'
import Projects from "./Projects"


const About = () => {
  return (
    <div className='about-div'>

     <div className='left'>
       <img src={icon} alt="code-icon" />
     <h1 className="name">Hi, I'm Nazrin 
    <span>
       <h1 className="inside-span">Front-end Developer 👩🏻‍💻 </h1>
  
     </span></h1>


       <p className='about-me-info'>I create front-end solutions that are scalable and have excellent user experiences. 🎯 <br></br> <br /> I look forward to helping companies grow or launch their products. 🚀
       </p>
       {/* <p>I create frontend products with strong foundations and scalable user interfaces.</p> */}
      <button className='see-projects-button'>
        {/* <a href="./Projects.jsx">see projects</a> */}
        <a href="https://github.com/nazrinibrahimli" target="_blank">see projects</a>

      </button>
     </div>



    {/* <img  alt=""  className='image-self'/> */}

    <div className='right'>
<div className="div-bg">
<img src={web} alt=""  className="web"/>
</div>


    </div>






    </div>
  )
}

export default About

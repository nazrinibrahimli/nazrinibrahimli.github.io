import React from 'react'
import '../styles/Contact.css'
import fb from "../images/FacebookLogo.svg"
import ln from "../images/LinkedInLogo.svg"
import gb from "../images/GitHubLogo.svg"
import em from "../images/Email.svg"



const Contact = () => {
  return (
    <div className='contact-div'>
              <p className='contact-header'>Contact Me 👋🏼 </p>
      <div className='all-links-div'>



        <div className='link-icon'>
        <img src={ln} alt="code-icon" />

<a href="https://www.linkedin.com/in/nazrinibrahimli/"  target="_blank">nazrinibrahimli</a>
        </div>
  

  <div className='link-icon'>
  <img src={gb} alt="code-icon" />

<a href="https://github.com/nazrinibrahimli" target="_blank">nazrinibrahimli</a>
  </div>
    

<div className='link-icon'>

<img src={em} alt="code-icon" /> <a>nibrahimli4676@ada.edu.az</a>
</div>


      </div>
    </div>
  )
}

export default Contact

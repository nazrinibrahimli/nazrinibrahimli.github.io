import React from 'react'
import Card from './Card'
import '../styles/Skills.css'


const ReadMore = () => {
  return (
    <div className='read-more'>
      <p className='header-read'>About Me 👩🏻‍💻</p>
  
    <p className='read-paragraph'>I recently graduated from ADA University with a Bachelor of Science in IT. I have been working on front-end projects for more than 2 years. I have a passion for coding and I also work on Flutter projects. I enjoy to make art in my spare time. </p>
 
 <div className='center-button'>

 <button className="button" onClick={ () => window.open(require('../assets/Resume.pdf'), '_none')}>
      download resume

</button>
 </div>


    </div>
  )
}

export default ReadMore

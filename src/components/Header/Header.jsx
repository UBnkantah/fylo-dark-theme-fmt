import React from 'react'
import HeadImg from "../images/illustration-intro.png"
import "./Header.css"


const Header = () => {
  return (
    <div className='header'>
      <div className="img">
        <img src={HeadImg} alt="" />
      </div>
      <div className="details">
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>Fylo stores all your most important files in one secure location. Access them wherever 
          you need, share and collaborate with friends family, and co-workers.
        </p>
        <div className="button">
          <button>Get Started</button>
        </div>
        
      </div>
    </div>
  )
}

export default Header
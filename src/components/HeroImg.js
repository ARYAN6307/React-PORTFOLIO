import React from 'react';
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";
import "./HeroImgStyles.css";




const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt="IntroImg" />
        </div>
        <div className='content'>
            <p>HI, I'M A FRONTEND Developer.</p>
            <h1>ARYAN PANDEY</h1>
            <div className='uu'>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
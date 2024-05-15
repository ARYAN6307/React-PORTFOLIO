import './AboutContentStyles.css';
import {Link} from 'react-router-dom'
import React from 'react';
import React1 from '../assets/react1.jpg'
import React2 from '../assets/react2.webp'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1>
            <p>I am a React Frontend Developer. I create responsive secure websites for my clients.</p>
            <Link to='/Contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
              <div className='img-stack top'>
                <img className="img" src={React1} alt="true" />
              </div>
              <div className='img-stack bottom'>
                <img className="img" src={React2} alt="true" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
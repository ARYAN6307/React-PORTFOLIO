import './FooterStyles.css'
import {FaHome, FaPhone, FaMailBulk} from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
<div className='footer'>
    <div className='footer-container'>
       <div className='left'>
        <div className='location'>
          <FaHome size={20} style={{ color:"#fff", marginRight:"2rem"}}/>
          <div>
            <p>SRMIST</p>
            <p>Ghaziabad, Delhi-NCR.</p>
          </div>
        </div>
        <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff" , marginRight:"2rem"}}/> +91-2223338889 </h4>
        </div>
        <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff" , marginRight:"2rem"}}/>info@gmail.com </h4>
        </div>
       </div>
       <div className='right'>
         <h4>About Me</h4>
         <p>I can create fully functional frontend <br /> web applications, according to your <br /> suite with enhanced and outstanding <br /> modern-based UI.</p>
         <div className='social'></div>
       </div>
    </div>    

</div>  )
}

export default Footer
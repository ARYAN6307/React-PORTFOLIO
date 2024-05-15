import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';
import HeroImg2 from '../components/HeroImg2';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="Some of my recent works:" />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
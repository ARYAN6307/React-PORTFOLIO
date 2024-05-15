import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import WorkCard from '../components/WorkCard';
import { MenubarDemo } from '../new/menu';

const Project = () => {
  return (
    <div>
<Navbar/>
<HeroImg2 heading="PROJECTS." text="Some of my recent works:" />
<MenubarDemo/>
<WorkCard/>
<PricingCard/>
<Footer/>
    </div>
  )
}

export default Project
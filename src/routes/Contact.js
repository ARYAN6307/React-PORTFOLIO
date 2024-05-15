import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
<Navbar/>
<HeroImg2 heading="Contact" text="Let's have a chat!" />
<Form/>
<Footer/>
    </div>
  )
}

export default Contact
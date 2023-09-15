import React from 'react';
import '../../../../../../../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Le188Promo from './images/Le188-1.jpeg'; 

function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <video src={HongKongPromo} autoPlay loop muted /> */}
        <img src={Le188Promo} />
        <h1>Le 188° Restaurant & Lounge</h1>
        <p>What are you waiting for?</p>
        {/* <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch Trailer <i className='far fa-play-circle' /></Button>
        </div> */}
    </div>
  )
}

export default HeroSection

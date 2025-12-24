import React from 'react';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h4 className='hero-subtitle'>New Arrivals</h4>

        <h1>Trendy</h1>
        <h1>Clothing</h1>
        <h1>For Everyone</h1>

        <p className='hero-desc'>
          Explore our fresh new arrivals with trendy styles and comfortable designs.
          Perfect for every mood, every season, and every story—made just for you.
        </p>

        <button className='hero-btn'>
          Latest Collection
          <img src={arrow_icon} alt="arrow" />
        </button>
      </div>

      <div className='hero-right'>
        <img src={hero_image} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;

'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactElement, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import rightArrow from '../../../assets/additional/rightArrow.svg';
import heroImage from '../../../assets/additional/heroImage.jpg';
import './Hero.scss';
import Link from 'next/link';
import Type from '../typewriter/type';

const Hero = (): ReactElement => {

  return (
    <section className='hero'>
      <div className="hero-texts">
        <h1>Looking for a Fraktional <span className="hero-texts_animate"><Type /></span></h1>
        <p>We connect developers and organizations with each other for short to medium term projects</p>
        <div className="hero-texts_buttons">
     
        <button>
          <Link href="/auth/login">
            Get Started
          </Link>
        </button>

          <a href="">Learn more <Image src={rightArrow} alt='right arrow' loading='lazy' /></a>
        </div>
      </div>
      <div className="hero-image">
        <div className='hero-image_container'>
          <div>
            <Image src={heroImage} alt='hero image' loading='lazy' />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;


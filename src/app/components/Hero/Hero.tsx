'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactElement, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import rightArrow from '../../../assets/additional/rightArrow.svg';
import heroImage from '../../../assets/additional/heroImage.jpg';
import './Hero.scss';
import Link from 'next/link';

const Hero = (): ReactElement => {
  const wordsToAnimate = ['startup', 'future', 'success'];
  const [newname, setnewname] = useState(wordsToAnimate[0]);

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * wordsToAnimate.length);
    setnewname(wordsToAnimate[index]);
  }, []);

  useEffect(() => {
    const intervalid = setInterval(shuffle, 1000);
    return () => clearInterval(intervalid);
  }, [shuffle]);


  return (
    <section className='hero'>
      <div className="hero-texts">
        <h1>Turn your ideas into a <span className="hero-texts_animate">{newname}</span></h1>
        <p>Front's feature-rich designed demo pages help you create the best possible product.</p>
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

      {/* <div className="col-lg-7 col-xl-6 d-none d-lg-block position-absolute top-0 end-0 pe-0" style={{ marginTop: '6.75rem' }}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1137.5 979.2">
          <path fill="#F9FBFF" d="M565.5,957.4c81.1-7.4,155.5-49.3,202.4-115.7C840,739.8,857,570,510.7,348.3C-35.5-1.5-4.2,340.3,2.7,389
            c0.7,4.7,1.2,9.5,1.7,14.2l29.3,321c14,154.2,150.6,267.8,304.9,253.8L565.5,957.4z"/>
          <defs>
            <path id="mainHeroSVG1" d="M1137.5,0H450.4l-278,279.7C22.4,430.6,24.3,675,176.8,823.5l0,0C316.9,960,537.7,968.7,688.2,843.6l449.3-373.4V0z"/>
          </defs>
          <clipPath id="mainHeroSVG2">
            <use xlinkHref={`${heroImage}`}/>
          </clipPath>
          <g transform="matrix(1 0 0 1 0 0)" clipPath="url(#mainHeroSVG2)">
            <Image width="750" height="750" src={heroImage} style={{ transform: "matrix(1.4462 0 0 1.4448 52.8755 0)" }} alt='hero image' />
          </g>
        </svg>
      </div> */}
    </section>
  )
};

export default Hero;


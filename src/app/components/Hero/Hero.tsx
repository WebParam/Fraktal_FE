'use client'
import { ReactElement, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import rightArrow from '../../../assets/additional/rightArrow.svg';
import heroImage from '../../../assets/additional/heroImage.jpg';
import './Hero.scss';
import Link from 'next/link';

const Hero = (): ReactElement => {
  const wordsToAnimate = ['startup', 'future', 'success'];
  const [newname, setnewname] = useState(wordsToAnimate[0]); // Initialize with the first word

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
    </section>
  );
};

export default Hero;


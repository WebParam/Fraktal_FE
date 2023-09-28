'use client'
import { ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import rightArrow from '../../../assets/additional/rightArrow.svg';
import heroImage from '../../../assets/additional/heroImage.jpg';
import './Hero.scss';
import Link from 'next/link';

const Hero = (): ReactElement => {
  const wordsToAnimate = ['startup', 'future', 'success'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIndex(prev => {
        if (prev < wordsToAnimate.length - 1) {
          console.log(prev)
          return prev++;
        }

        return prev = 0;
      })
    }, 1500);
  })

  return (
    <section className='hero'>
      <div className="hero-texts">
        <h1>Turn your ideas into a <span className="hero-texts_animate">{wordsToAnimate[index]}</span></h1>
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

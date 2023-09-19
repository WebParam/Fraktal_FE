import { ReactElement } from 'react';
import Image from 'next/image';
import rightArrow from '../../../assets/additional/rightArrow.svg';
import './Hero.scss';

const Hero = (): ReactElement => {
  return (
    <section className='hero'>
      <div className="hero-texts">
        <h1>Turn your ideas into a <span className="hero-texts_animate">Future</span></h1>
        <p>Front's feature-rich designed demo pages help you create the best possible product.</p>
        <div className="hero-texts_buttons">
          <button >
            Get Started
          </button>
          <a href="">Learn more <Image src={rightArrow} alt='right arrow' loading='lazy' /></a>
        </div>
      </div>
      <div className="hero-image"></div>
    </section>
  );
};

export default Hero;

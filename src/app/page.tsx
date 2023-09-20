"use client"
// import Image from 'next/image';
import './page.scss';
import { useState } from 'react';
import Header from './components/Header/Header'
import MobileMenu from './components/MobileMenu/MobileMenu'
import Hero from './components/Home/Hero';
import SecondSection from './components/SecondSection/SecondSection';
import Testimony from './components/Testimony/Testimony';

export default function Home() {
  const [menuToggler, setMenuToggler] = useState<boolean>(false);

  const removeMenu = () => {
    setMenuToggler(prev => false);
  }


  return (
    <>
      <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      <MobileMenu removeMenu={removeMenu} menuToggler={menuToggler} />
      <Hero />
      <SecondSection />
      <Testimony />
    </>
  )
}

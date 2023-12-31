"use client"

import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';
import Header from './components/Header/Header'
import MobileMenu from './components/MobileMenu/MobileMenu'
import Hero from './components/Hero/Hero';
import SecondSection from './components/SecondSection/SecondSection';
import Testimony from './components/Testimony/Testimony';
import Stats from './components/Statistics/Stats';
import Footer from './components/Footer/Footer';
import Subscribe from "./components/Subscribe/Subscribe";

export default function HomePage() {
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
      <Stats />
      <Subscribe/>
      <Footer />  
    </>
  )
}


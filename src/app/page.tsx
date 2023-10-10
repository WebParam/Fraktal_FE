"use client"
import { useState } from 'react';
import Header from './components/Header/Header'
import MobileMenu from './components/MobileMenu/MobileMenu'
import Hero from './components/Hero/Hero';
import SecondSection from './components/SecondSection/SecondSection';
import Testimony from './components/Testimony/Testimony';
import Stats from './components/Statistics/Stats';
import Footer from './components/Footer/Footer';
import Subscribe from "./components/Subscribe/Subscribe";
import Discover from "./components/Discover/Discover";
import ThirdSection from "./components/thirdSection/ThirdSection";


export default function HomePage() {
  const [menuToggler, setMenuToggler] = useState<boolean>(false);


  
  const removeMenu = () => {
    setMenuToggler(prev => false);
  }

  return (
    <>

<link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        
      <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      <MobileMenu removeMenu={removeMenu} menuToggler={menuToggler} />
      <Hero />
      <SecondSection />
      <ThirdSection />
      <Testimony />
      <Stats />
      {/* <Subscribe/> */}
      <Discover />
      <Footer />  
    </>
  )
}


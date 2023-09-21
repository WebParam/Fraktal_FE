"use client"
<<<<<<< Updated upstream
import './page.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';
import Header from './components/Header/Header'
import MobileMenu from './components/MobileMenu/MobileMenu'
import Hero from './components/Hero/Hero';
import SecondSection from './components/SecondSection/SecondSection';
import Testimony from './components/Testimony/Testimony';
import Stats from './components/Statistics/Stats';
import Footer from './components/Footer/Footer';

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
      <Stats />
      <Footer />
    </>
=======
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home-page';

function page() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
>>>>>>> Stashed changes
  )
}

export default page

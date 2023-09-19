"use client"
// import Image from 'next/image';
import './page.scss';
import { useState } from 'react';
import Header from './components/Header/Header'
import MobileMenu from './components/MobileMenu/MobileMenu'

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
    <main className='main'>
      body
    </main>
    </>
  )
}

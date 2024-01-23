'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "../assets/css/theme.min.css"
import "../assets/vendor/bootstrap-icons/font/bootstrap-icons.css"
import "../assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css"
import "../assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css"
// import * as gtag from "./gtag"
import Script from "next/script"
import { Component } from 'react';
import { AppProps } from 'next/app';
import Aos from 'aos';
import "aos/dist/aos.css"
// import '@/styles/global.css';
import { useEffect } from 'react'
import Hotjar from '@hotjar/browser';
import { useRouter } from 'next/router'



// const inter = Inter({ subsets: ['latin'] }, )
// const siteId = 3832611; 
// const hotjarVersion = 6;

// Hotjar.init(siteId, hotjarVersion);

// export const metadata: Metadata = {
//   title: 'Fraktional',
//   description: 'Fraktional developers ',
// }

interface RootLayoutProps {
  children: any;
  pageMeta?:any;
  title?: any;
  description?: any;
  type?: any;
  ogImage?: any;
}

export default function Layout({ children, title, description, type, pageMeta,ogImage }: RootLayoutProps) {


  
  useEffect(() => {
    // here you can add your aos options
    Aos.init({
      offset: 100,
    });
  }, []);

  // const meta = {
  //   title: ' iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple',
  //   description: 'Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice.',
  //   type: 'website',
  //   ...pageMeta, 
  // }

  return (
    <html lang="en">
      <head>
      
      
        {/* <meta 
          name="description" 
          property="og:description" 
          content={description}/> */}
           {/* <meta
                  name="description"
                  content={description??"Fraktional"}
                  key="desc"
                /> */}

{description!=undefined && <>

<meta property='og:type' content={type} />
        <title> {title} </title>      
        <meta property='og:site_name' content='fraktional' />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:image' content={ogImage} />

</>}  
     

     
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                href="https://fonts.googleapis.com/css?family=Poppins"
                rel="stylesheet"
              />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                href="https://fonts.cdnfonts.com/css/avenir"
                rel="stylesheet"
              />
               
              <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-F1NZRBMHZ7`}
    />
    <Script strategy="lazyOnload">
      {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-F1NZRBMHZ7', {
                  page_path: window.location.pathname,
                  });
              `}
    </Script>



    

      </head>
      <body> 
      {children}
      </body>
    </html>
  )
}

// 'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "../assets/css/theme.min.css"
import "../assets/vendor/bootstrap-icons/font/bootstrap-icons.css"
import "../assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css"
import "../assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css"
import * as gtag from "./gtag"
import Script from "next/script"
import { Component } from 'react';
import { AppProps } from 'next/app';


const inter = Inter({ subsets: ['latin'] }, )

// export const metadata: Metadata = {
//   title: 'Fraktional',
//   description: 'Fraktional developers ',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <head>
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
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />

    <Script strategy="lazyOnload">
      {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                  });
              `}
    </Script>

<>
      
    </>

      </head>
      <body> 
      {children}
      </body>
    </html>
  )
}

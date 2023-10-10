import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import "../assets/css/theme.min.css"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fraktional',
  description: 'Fraktional developers ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'

import { Footer, Navbar } from '@/components'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car Koleks',
  description: 'Find your suitable car!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

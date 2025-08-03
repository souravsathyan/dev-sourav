'use client'

import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { cn } from '@/lib/utils'
import { Inter, Playfair_Display } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import SplashScreen from '@/components/SplashScreen'
import SpeedDial from '@/components/SpeedDIal'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathName = usePathname()
  const isHome = pathName === '/'
  const [isLoading, setIsLoading] = useState(isHome)
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          {isLoading && isHome ? (
            <SplashScreen finishLoading={() => setIsLoading(false)} />
          ) : (
            <>
              <Header />
              <main className='grow'>{children}</main>
              <SpeedDial />
              <Footer />
            </>
          )}
        </Providers>
      </body>
    </html>
  )
}

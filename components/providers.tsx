import { ThemeProvider } from 'next-themes'
import React from 'react'
import { Toaster } from './ui/sonner'
// import { Toaster } from './ui/sonner'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      defaultTheme='system'
      disableTransitionOnChange
      attribute='class'
    >
      {children}
      <Toaster />
    </ThemeProvider>
  )
}

// function ToasterProvider() {
//   const { resolvedTheme } = useTheme()
//   return <Toaster position='top-right' theme={resolvedTheme === 'dark' ? 'dark' : 'light'} />
// }

export default Providers

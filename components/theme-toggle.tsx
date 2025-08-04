'use client'

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import {
  ThemeAnimationType,
  useModeAnimation
} from 'react-theme-switch-animation'

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { ref, toggleSwitchTheme } = useModeAnimation({
    animationType: ThemeAnimationType.CIRCLE,
    blurAmount: 4, // Optional: adjust blur intensity
    duration: 1000 // Optional: adjust animation duration
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = () => {
    toggleSwitchTheme()
    setTimeout(() => {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }, 300)
  }

  if (!mounted) return null

  return (
    <Button ref={ref} size='sm' variant='ghost' onClick={handleThemeChange}>
      {resolvedTheme === 'dark' ? (
        <SunIcon className='size-4 text-orange-300' />
      ) : (
        <MoonIcon className='size-4 text-sky-950' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}

export default ThemeToggle

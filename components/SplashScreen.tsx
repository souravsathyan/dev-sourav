'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  const [currentText, setCurrentText] = useState(0)
  const greetings = [
    'നമസ്കാരം',
    'नमस्ते', // Namaste (Hindi)
    'Hola', // Spanish
    'Bonjour', // French
    'مرحبًا',
    'Hello'
  ]

  useEffect(() => {
    let animationInterval: NodeJS.Timeout

    if (currentText < greetings.length - 1) {
      // Only set interval if we haven't reached the end
      animationInterval = setInterval(() => {
        setCurrentText(prevIndex => prevIndex + 1)
      }, 600)
    } else {
      // When we reach the last greeting, wait a bit then finish loading
      setTimeout(finishLoading, 1500)
    }

    return () => {
      if (animationInterval) clearInterval(animationInterval)
    }
  }, [currentText, finishLoading, greetings.length])

  return (
    <div className='flex h-screen w-full items-center justify-center bg-black'>
      <AnimatePresence mode='wait'>
        <motion.h1
          key={currentText}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='text-xl font-bold text-white sm:text-4xl md:text-6xl'
        >
          {greetings[currentText]}
        </motion.h1>
      </AnimatePresence>
    </div>
  )
}

export default SplashScreen

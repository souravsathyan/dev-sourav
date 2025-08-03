'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  EnvelopeClosedIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MobileIcon
} from '@radix-ui/react-icons'
import { Action } from '@/lib/contacts'
import { toast } from 'sonner'

const SpeedDial = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const actionVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring' as const,
        stiffness: 100
      }
    }),
    exit: { opacity: 0, y: 20, scale: 0.8, transition: { duration: 0.2 } }
  }

  const fabVariants = {
    open: { rotate: 45 },
    closed: { rotate: 0 }
  }

  const handleCopy = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content)
      toast.success('Copied successfully')
    } catch (err) {
      console.error('Failed to copy:', err)
      toast.error('Unexpected Error Occured. Please Try Again')
    }
  }

  const actions: Action[] = [
    {
      icon: <GitHubLogoIcon className='h-5 w-5' />,
      label: 'GitHub',
      content: 'https://github.com/souravsathyan',
      onClick: handleCopy
    },
    {
      icon: <LinkedInLogoIcon className='h-5 w-5' />,
      label: 'LinkedIn',
      content: 'https://www.linkedin.com/in/sourav-sathyan/',
      onClick: handleCopy
    },
    {
      icon: <EnvelopeClosedIcon className='h-5 w-5' />,
      label: 'Email',
      content: 'souravksathyan2@gmail.com',
      onClick: handleCopy
    },
    {
      icon: <MobileIcon className='h-5 w-5' />,
      label: 'Phone',
      content: '+918921834447',
      onClick: handleCopy
    }
  ]
  return (
    <div className='fixed bottom-6 right-6 z-50 flex flex-col items-end'>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='mb-2 flex flex-col items-end space-y-2'
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            {actions.map((action, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={actionVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                className='group relative flex items-center'
              >
                <span className='absolute right-12 mr-2 rounded bg-slate-900 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                  {action.label}
                </span>
                <button
                  onClick={() => action.onClick(action.content)}
                  className='rounded-full bg-slate-800 p-3 text-slate-50 shadow-lg hover:bg-slate-600 focus:outline-none dark:bg-slate-50 dark:text-slate-800 dark:hover:bg-slate-400'
                  aria-label={action.label}
                >
                  {action.icon}
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        variants={fabVariants}
        animate={isOpen ? 'open' : 'closed'}
        className='rounded-full bg-slate-800 p-4 text-slate-50 shadow-lg hover:bg-slate-600 focus:outline-none dark:bg-slate-50 dark:text-slate-800 dark:hover:bg-slate-400'
        aria-label='Toggle speed dial'
      >
        <ExternalLinkIcon className='h-6 w-6' />
      </motion.button>
    </div>
  )
}

export default SpeedDial

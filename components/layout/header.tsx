'use client'

import Link from 'next/link'
import React from 'react'
import ThemeToggle from '../theme-toggle'

/**
 *
 *
 * @return {*}
 */
function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-4xl items-center justify-between'>
        <div>
          <Link
            href={'/'}
            style={{ fontFamily: 'Samarkan, sans-serif' }}
            className='text-2xl font-thin tracking-widest'
          >
            sourav
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header

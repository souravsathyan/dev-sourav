import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='border py-6'>
      <div className='container mx-auto px-4 text-center'>
        <h3 className='mb-2 text-xl font-bold md:text-2xl'>Sourav K Sathyan</h3>
        <p className='mb-4 text-base md:text-lg'>Full Stack Developer</p>
        <div className='mb-4 flex flex-col justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0'>
          <Link
            href='/'
            className='text-sm font-light text-gray-300 transition-colors hover:text-white'
          >
            Home
          </Link>
          <Link
            href='/posts'
            className='text-sm font-light text-gray-300 transition-colors hover:text-white'
          >
            Posts
          </Link>
          <Link
            href='/projects'
            className='text-sm font-light text-gray-300 transition-colors hover:text-white'
          >
            Projects
          </Link>
          <Link
            href='/contact'
            className='text-sm font-light text-gray-300 transition-colors hover:text-white'
          >
            Contact
          </Link>
        </div>
        <div className='flex justify-center space-x-4 md:space-x-6'>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='hover:text-gray-400'
          >
            <FaGithub className='h-6 w-6 md:h-8 md:w-8' />
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='hover:text-gray-400'
          >
            <FaLinkedin className='h-6 w-6 md:h-8 md:w-8' />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
            className='hover:text-gray-400'
          >
            <FaTwitter className='h-6 w-6 md:h-8 md:w-8' />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
            className='hover:text-gray-400'
          >
            <FaInstagram className='h-6 w-6 md:h-8 md:w-8' />
          </a>
        </div>
        <p className='mt-4 text-xs text-gray-400 md:text-sm'>
          &copy; 2025 Sourav K Sathyan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

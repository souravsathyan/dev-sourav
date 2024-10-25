import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <section className='pb-24 pt-40'>
      <div className='min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
        <div className='mx-auto max-w-max'>
          <main className='sm:flex'>
            <p className='text-4xl font-extrabold text-slate-600'>404</p>{' '}
            <div className='sm:ml-6'>
              <div className='sm:border-1 sm:border-gray-200 sm:pl-6'>
                <h1 className='text-3xl font-bold tracking-tight sm:text-3xl'>
                  Page not found
                </h1>
                <p className='mt-1 text-base text-muted-foreground'>
                  Please check the url in the address bar and try again.
                </p>
              </div>
              <div className='sm:pl-6 sm:border-1 mt-10 flex space-x-3 sm:border-transparent'>
                <Link
                  className='inline-flex items-center gap-2 text-muted-foreground'
                  href='/'
                >
                  <ArrowLeftIcon className='h-5 w-5' />
                  <span>Back to home</span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}

export default NotFound

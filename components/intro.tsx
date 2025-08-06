import Image from 'next/image'
import React from 'react'
import myProfilePic from '@/public/images/authors/dummy.jpg'

function Intro() {
  return (
    <section className='flex flex-col-reverse items-center justify-center gap-x-10 gap-y-6 text-center md:flex-row md:items-center md:text-left'>
      <div className='flex-1 md:mt-0'>
        <h1 className='text-2xl font-bold no-underline sm:text-3xl md:text-4xl lg:text-5xl'>
          <span className='block leading-tight'>Hey,</span>
          <span className='block leading-snug'>
            I&apos;m Sourav
            <span className='ml-2 text-base font-light text-sky-400/100 text-opacity-70 sm:text-lg md:text-xl'>
              /saw·ruhv/
            </span>
          </span>
        </h1>

        <p className='mt-3 text-sm font-light text-muted-foreground sm:text-base md:text-lg'>
          I&apos;m a developer based in Kerala, India, with experience in
          building mobile and web apps for events, education, and service
          platforms. I specialize in React Native and the MERN stack, and enjoy
          creating clean UIs, improving performance, and delivering complete
          products.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='h-40 w-60 flex-1 rounded-lg object-cover grayscale sm:h-48 sm:w-48 md:h-[200px] md:w-[200px]'
          src={myProfilePic}
          alt='sourav_k_sathyan'
          priority
        />
      </div>
    </section>
  )
}

export default Intro
